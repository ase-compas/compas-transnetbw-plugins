var Mu = Object.defineProperty;
var Uo = (e) => {
  throw TypeError(e);
};
var Bu = (e, t, n) => t in e ? Mu(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var wr = (e, t, n) => Bu(e, typeof t != "symbol" ? t + "" : t, n), Sa = (e, t, n) => t.has(e) || Uo("Cannot " + n);
var G = (e, t, n) => (Sa(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Ue = (e, t, n) => t.has(e) ? Uo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), ve = (e, t, n, r) => (Sa(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), xt = (e, t, n) => (Sa(e, t, "access private method"), n);
const ft = Symbol(), Uu = "http://www.w3.org/1999/xhtml", Fu = "http://www.w3.org/2000/svg", Nu = "@attach", qs = !1;
var ua = Array.isArray, ku = Array.prototype.indexOf, vo = Array.from, Ki = Object.defineProperty, qn = Object.getOwnPropertyDescriptor, zs = Object.getOwnPropertyDescriptors, Gu = Object.prototype, ju = Array.prototype, go = Object.getPrototypeOf, Fo = Object.isExtensible;
function ai(e) {
  return typeof e == "function";
}
const ee = () => {
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
const Ft = 2, po = 4, mo = 8, pr = 16, Rn = 32, mr = 64, bo = 128, $t = 256, Qi = 512, wt = 1024, Xt = 2048, Yn = 4096, cn = 8192, br = 16384, _o = 32768, _r = 65536, No = 1 << 17, Vu = 1 << 18, Qr = 1 << 19, qu = 1 << 20, Ga = 1 << 21, ca = 1 << 22, dr = 1 << 23, yn = Symbol("$state"), Zs = Symbol("legacy props"), zu = Symbol(""), Or = new class extends Error {
  constructor() {
    super(...arguments);
    wr(this, "name", "StaleReactionError");
    wr(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
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
let Jr = !1, ac = !1;
function oc() {
  Jr = !0;
}
let Xe = null;
function Gr(e) {
  Xe = e;
}
function me(e) {
  return (
    /** @type {T} */
    Qs().get(e)
  );
}
function ce(e, t) {
  return Qs().set(e, t), t;
}
function Ae(e, t = !1, n) {
  Xe = {
    p: Xe,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Jr && !t ? { s: null, u: null, $: [] } : null
  };
}
function xe(e) {
  var t = (
    /** @type {ComponentContext} */
    Xe
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      hl(r);
  }
  return e !== void 0 && (t.x = e), Xe = t.p, e ?? /** @type {T} */
  {};
}
function xi() {
  return !Jr || Xe !== null && Xe.l === null;
}
function Qs(e) {
  return Xe === null && yo(), Xe.c ?? (Xe.c = new Map(sc(Xe) || void 0));
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
function Zn(e) {
  if (ar.length === 0 && !gi) {
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
  var t = Ce;
  if (t === null)
    return Se.f |= dr, e;
  if (t.f & _o)
    jr(e, t);
  else {
    if (!(t.f & bo))
      throw !t.parent && e instanceof Error && el(e), e;
    t.b.error(e);
  }
}
function jr(e, t) {
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
  t && (Ki(e, "message", {
    value: t.message
  }), Ki(e, "stack", {
    value: t.stack
  }));
}
const Di = /* @__PURE__ */ new Set();
let je = null, qi = null, mt = null, ja = /* @__PURE__ */ new Set(), bn = [], da = null, Va = !1, gi = !1;
var Mr, Br, or, Si, Ur, Fr, sr, Nr, Ci, Ai, en, qa, zi, za;
const oa = class oa {
  constructor() {
    Ue(this, en);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    wr(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Ue(this, Mr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Ue(this, Br, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ue(this, or, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ue(this, Si, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Ue(this, Ur, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Ue(this, Fr, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Ue(this, sr, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Ue(this, Nr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Ue(this, Ci, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Ue(this, Ai, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    wr(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    var a;
    bn = [], qi = null, this.apply();
    for (const o of t)
      xt(this, en, qa).call(this, o);
    if (G(this, or) === 0) {
      var n = mt;
      xt(this, en, za).call(this);
      var r = G(this, Fr), i = G(this, sr);
      ve(this, Fr, []), ve(this, sr, []), ve(this, Nr, []), qi = this, je = null, mt = n, ko(r), ko(i), qi = null, (a = G(this, Si)) == null || a.resolve();
    } else
      xt(this, en, zi).call(this, G(this, Fr)), xt(this, en, zi).call(this, G(this, sr)), xt(this, en, zi).call(this, G(this, Nr));
    mt = null;
    for (const o of G(this, Ur))
      _i(o);
    ve(this, Ur, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    G(this, Mr).has(t) || G(this, Mr).set(t, n), this.current.set(t, t.v), mt == null || mt.set(t, t.v);
  }
  activate() {
    je = this;
  }
  deactivate() {
    je = null, mt = null;
  }
  flush() {
    if (bn.length > 0) {
      if (this.activate(), tl(), je !== null && je !== this)
        return;
    } else G(this, or) === 0 && xt(this, en, za).call(this);
    this.deactivate();
    for (const t of ja)
      if (ja.delete(t), t(), je !== null)
        break;
  }
  increment() {
    ve(this, or, G(this, or) + 1);
  }
  decrement() {
    ve(this, or, G(this, or) - 1);
    for (const t of G(this, Ci))
      Mt(t, Xt), vr(t);
    for (const t of G(this, Ai))
      Mt(t, Yn), vr(t);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(t) {
    G(this, Br).add(t);
  }
  settled() {
    return (G(this, Si) ?? ve(this, Si, Ws())).promise;
  }
  static ensure() {
    if (je === null) {
      const t = je = new oa();
      Di.add(je), gi || oa.enqueue(() => {
        je === t && t.flush();
      });
    }
    return je;
  }
  /** @param {() => void} task */
  static enqueue(t) {
    Zn(t);
  }
  apply() {
  }
};
Mr = new WeakMap(), Br = new WeakMap(), or = new WeakMap(), Si = new WeakMap(), Ur = new WeakMap(), Fr = new WeakMap(), sr = new WeakMap(), Nr = new WeakMap(), Ci = new WeakMap(), Ai = new WeakMap(), en = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
qa = function(t) {
  var u;
  t.f ^= wt;
  for (var n = t.first; n !== null; ) {
    var r = n.f, i = (r & (Rn | mr)) !== 0, a = i && (r & wt) !== 0, o = a || (r & cn) !== 0 || this.skipped_effects.has(n);
    if (!o && n.fn !== null) {
      i ? n.f ^= wt : r & po ? G(this, sr).push(n) : r & wt || (r & ca && ((u = n.b) != null && u.is_pending()) ? G(this, Ur).push(n) : ma(n) && (n.f & pr && G(this, Nr).push(n), _i(n)));
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
zi = function(t) {
  for (const n of t)
    (n.f & Xt ? G(this, Ci) : G(this, Ai)).push(n), Mt(n, wt);
  t.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
za = function() {
  var t;
  for (const n of G(this, Br))
    n();
  if (G(this, Br).clear(), Di.size > 1) {
    G(this, Mr).clear();
    let n = !0;
    for (const r of Di) {
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
        if (bn.length > 0) {
          je = r, r.apply();
          for (const o of bn)
            xt(t = r, en, qa).call(t, o);
          bn = [], r.deactivate();
        }
      }
    }
    je = null;
  }
  Di.delete(this);
};
let Tn = oa;
function cc(e) {
  var t = gi;
  gi = !0;
  try {
    for (var n; ; ) {
      if (lc(), bn.length === 0 && (je == null || je.flush(), bn.length === 0))
        return da = null, /** @type {T} */
        n;
      tl();
    }
  } finally {
    gi = t;
  }
}
function tl() {
  var e = Hr;
  Va = !0;
  try {
    var t = 0;
    for (Vo(!0); bn.length > 0; ) {
      var n = Tn.ensure();
      if (t++ > 1e3) {
        var r, i;
        dc();
      }
      n.process(bn), zn.clear();
    }
  } finally {
    Va = !1, Vo(e), da = null;
  }
}
function dc() {
  try {
    Ku();
  } catch (e) {
    jr(e, da);
  }
}
let wn = null;
function ko(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if (!(r.f & (br | cn)) && ma(r) && (wn = [], _i(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? pl(r) : r.fn = null), (wn == null ? void 0 : wn.length) > 0)) {
        zn.clear();
        for (const i of wn)
          _i(i);
        wn = [];
      }
    }
    wn = null;
  }
}
function nl(e, t) {
  if (e.reactions !== null)
    for (const n of e.reactions) {
      const r = n.f;
      r & Ft ? nl(
        /** @type {Derived} */
        n,
        t
      ) : r & (ca | pr) && rl(n, t) && (Mt(n, Xt), vr(
        /** @type {Effect} */
        n
      ));
    }
}
function rl(e, t) {
  if (e.deps !== null) {
    for (const n of e.deps)
      if (t.includes(n) || n.f & Ft && rl(
        /** @type {Derived} */
        n,
        t
      ))
        return !0;
  }
  return !1;
}
function vr(e) {
  for (var t = da = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Va && t === Ce && n & pr)
      return;
    if (n & (mr | Rn)) {
      if (!(n & wt)) return;
      t.f ^= wt;
    }
  }
  bn.push(t);
}
function fc(e) {
  let t = 0, n = gr(0), r;
  return () => {
    Oc() && (c(n), ga(() => (t === 0 && (r = Jn(() => e(() => pi(n)))), t += 1, () => {
      Zn(() => {
        t -= 1, t === 0 && (r == null || r(), r = void 0, pi(n));
      });
    })));
  };
}
var hc = _r | Qr | bo;
function vc(e, t, n) {
  new gc(e, t, n);
}
var on, Qt, ho, gn, lr, pn, Jt, Gt, mn, Un, ur, Fn, cr, Nn, sa, la, Ut, pc, mc, Xi, Wi, Xa;
class gc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    Ue(this, Ut);
    /** @type {Boundary | null} */
    wr(this, "parent");
    Ue(this, on, !1);
    /** @type {TemplateNode} */
    Ue(this, Qt);
    /** @type {TemplateNode | null} */
    Ue(this, ho, null);
    /** @type {BoundaryProps} */
    Ue(this, gn);
    /** @type {((anchor: Node) => void)} */
    Ue(this, lr);
    /** @type {Effect} */
    Ue(this, pn);
    /** @type {Effect | null} */
    Ue(this, Jt, null);
    /** @type {Effect | null} */
    Ue(this, Gt, null);
    /** @type {Effect | null} */
    Ue(this, mn, null);
    /** @type {DocumentFragment | null} */
    Ue(this, Un, null);
    Ue(this, ur, 0);
    Ue(this, Fn, 0);
    Ue(this, cr, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ue(this, Nn, null);
    Ue(this, sa, () => {
      G(this, Nn) && Vr(G(this, Nn), G(this, ur));
    });
    Ue(this, la, fc(() => (ve(this, Nn, gr(G(this, ur))), () => {
      ve(this, Nn, null);
    })));
    ve(this, Qt, t), ve(this, gn, n), ve(this, lr, r), this.parent = /** @type {Effect} */
    Ce.b, ve(this, on, !!G(this, gn).pending), ve(this, pn, Qn(() => {
      Ce.b = this;
      {
        try {
          ve(this, Jt, It(() => r(G(this, Qt))));
        } catch (i) {
          this.error(i);
        }
        G(this, Fn) > 0 ? xt(this, Ut, Wi).call(this) : ve(this, on, !1);
      }
    }, hc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return G(this, on) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!G(this, gn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    xt(this, Ut, Xa).call(this, t), ve(this, ur, G(this, ur) + t), ja.add(G(this, sa));
  }
  get_effect_pending() {
    return G(this, la).call(this), c(
      /** @type {Source<number>} */
      G(this, Nn)
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = G(this, gn).onerror;
    let r = G(this, gn).failed;
    if (G(this, cr) || !n && !r)
      throw t;
    G(this, Jt) && (_t(G(this, Jt)), ve(this, Jt, null)), G(this, Gt) && (_t(G(this, Gt)), ve(this, Gt, null)), G(this, mn) && (_t(G(this, mn)), ve(this, mn, null));
    var i = !1, a = !1;
    const o = () => {
      if (i) {
        rc();
        return;
      }
      i = !0, a && tc(), Tn.ensure(), ve(this, ur, 0), G(this, mn) !== null && Xn(G(this, mn), () => {
        ve(this, mn, null);
      }), ve(this, on, this.has_pending_snippet()), ve(this, Jt, xt(this, Ut, Xi).call(this, () => (ve(this, cr, !1), It(() => G(this, lr).call(this, G(this, Qt)))))), G(this, Fn) > 0 ? xt(this, Ut, Wi).call(this) : ve(this, on, !1);
    };
    var l = Se;
    try {
      jt(null), a = !0, n == null || n(t, o), a = !1;
    } catch (s) {
      jr(s, G(this, pn) && G(this, pn).parent);
    } finally {
      jt(l);
    }
    r && Zn(() => {
      ve(this, mn, xt(this, Ut, Xi).call(this, () => {
        ve(this, cr, !0);
        try {
          return It(() => {
            r(
              G(this, Qt),
              () => t,
              () => o
            );
          });
        } catch (s) {
          return jr(
            s,
            /** @type {Effect} */
            G(this, pn).parent
          ), null;
        } finally {
          ve(this, cr, !1);
        }
      }));
    });
  }
}
on = new WeakMap(), Qt = new WeakMap(), ho = new WeakMap(), gn = new WeakMap(), lr = new WeakMap(), pn = new WeakMap(), Jt = new WeakMap(), Gt = new WeakMap(), mn = new WeakMap(), Un = new WeakMap(), ur = new WeakMap(), Fn = new WeakMap(), cr = new WeakMap(), Nn = new WeakMap(), sa = new WeakMap(), la = new WeakMap(), Ut = new WeakSet(), pc = function() {
  try {
    ve(this, Jt, It(() => G(this, lr).call(this, G(this, Qt))));
  } catch (t) {
    this.error(t);
  }
  ve(this, on, !1);
}, mc = function() {
  const t = G(this, gn).pending;
  t && (ve(this, Gt, It(() => t(G(this, Qt)))), Tn.enqueue(() => {
    ve(this, Jt, xt(this, Ut, Xi).call(this, () => (Tn.ensure(), It(() => G(this, lr).call(this, G(this, Qt)))))), G(this, Fn) > 0 ? xt(this, Ut, Wi).call(this) : (Xn(
      /** @type {Effect} */
      G(this, Gt),
      () => {
        ve(this, Gt, null);
      }
    ), ve(this, on, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Xi = function(t) {
  var n = Ce, r = Se, i = Xe;
  En(G(this, pn)), jt(G(this, pn)), Gr(G(this, pn).ctx);
  try {
    return t();
  } catch (a) {
    return $s(a), null;
  } finally {
    En(n), jt(r), Gr(i);
  }
}, Wi = function() {
  const t = (
    /** @type {(anchor: Node) => void} */
    G(this, gn).pending
  );
  G(this, Jt) !== null && (ve(this, Un, document.createDocumentFragment()), bc(G(this, Jt), G(this, Un))), G(this, Gt) === null && ve(this, Gt, It(() => t(G(this, Qt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Xa = function(t) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && xt(n = this.parent, Ut, Xa).call(n, t);
    return;
  }
  ve(this, Fn, G(this, Fn) + t), G(this, Fn) === 0 && (ve(this, on, !1), G(this, Gt) && Xn(G(this, Gt), () => {
    ve(this, Gt, null);
  }), G(this, Un) && (G(this, Qt).before(G(this, Un)), ve(this, Un, null)), Zn(() => {
    Tn.ensure().flush();
  }));
};
function bc(e, t) {
  for (var n = e.nodes_start, r = e.nodes_end; n !== null; ) {
    var i = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ii(n)
    );
    t.append(n), n = i;
  }
}
function il(e, t, n) {
  const r = xi() ? fa : So;
  if (t.length === 0) {
    n(e.map(r));
    return;
  }
  var i = je, a = (
    /** @type {Effect} */
    Ce
  ), o = _c();
  Promise.all(t.map((l) => /* @__PURE__ */ yc(l))).then((l) => {
    o();
    try {
      n([...e.map(r), ...l]);
    } catch (s) {
      a.f & br || jr(s, a);
    }
    i == null || i.deactivate(), Wa();
  }).catch((l) => {
    jr(l, a);
  });
}
function _c() {
  var e = Ce, t = Se, n = Xe, r = je;
  return function() {
    En(e), jt(t), Gr(n), r == null || r.activate();
  };
}
function Wa() {
  En(null), jt(null), Gr(null);
}
// @__NO_SIDE_EFFECTS__
function fa(e) {
  var t = Ft | Xt, n = Se !== null && Se.f & Ft ? (
    /** @type {Derived} */
    Se
  ) : null;
  return Ce === null || n !== null && n.f & $t ? t |= $t : Ce.f |= Qr, {
    ctx: Xe,
    deps: null,
    effects: null,
    equals: Ys,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      ft
    ),
    wv: 0,
    parent: n ?? Ce,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function yc(e, t) {
  let n = (
    /** @type {Effect | null} */
    Ce
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
    ft
  ), o = !Se, l = /* @__PURE__ */ new Map();
  return Hc(() => {
    var g;
    var s = Ws();
    i = s.promise;
    try {
      Promise.resolve(e()).then(s.resolve, s.reject).then(Wa);
    } catch (v) {
      s.reject(v), Wa();
    }
    var u = (
      /** @type {Batch} */
      je
    ), d = r.is_pending();
    o && (r.update_pending_count(1), d || (u.increment(), (g = l.get(u)) == null || g.reject(Or), l.delete(u), l.set(u, s)));
    const f = (v, h = void 0) => {
      if (d || u.activate(), h)
        h !== Or && (a.f |= dr, Vr(a, h));
      else {
        a.f & dr && (a.f ^= dr), Vr(a, v);
        for (const [p, y] of l) {
          if (l.delete(p), p === u) break;
          y.reject(Or);
        }
      }
      o && (r.update_pending_count(-1), d || u.decrement());
    };
    s.promise.then(f, (v) => f(null, v || "unknown"));
  }), va(() => {
    for (const s of l.values())
      s.reject(Or);
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
  const t = /* @__PURE__ */ fa(e);
  return _l(t), t;
}
// @__NO_SIDE_EFFECTS__
function So(e) {
  const t = /* @__PURE__ */ fa(e);
  return t.equals = Ks, t;
}
function al(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      _t(
        /** @type {Effect} */
        t[n]
      );
  }
}
function Ec(e) {
  for (var t = e.parent; t !== null; ) {
    if (!(t.f & Ft))
      return (
        /** @type {Effect} */
        t
      );
    t = t.parent;
  }
  return null;
}
function Co(e) {
  var t, n = Ce;
  En(Ec(e));
  try {
    al(e), t = Cl(e);
  } finally {
    En(n);
  }
  return t;
}
function ol(e) {
  var t = Co(e);
  if (e.equals(t) || (e.v = t, e.wv = El()), !yr)
    if (mt !== null)
      mt.set(e, e.v);
    else {
      var n = (kn || e.f & $t) && e.deps !== null ? Yn : wt;
      Mt(e, n);
    }
}
const zn = /* @__PURE__ */ new Map();
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
function be(e, t) {
  const n = gr(e);
  return _l(n), n;
}
// @__NO_SIDE_EFFECTS__
function sl(e, t = !1, n = !0) {
  var i;
  const r = gr(e);
  return t || (r.equals = Ks), Jr && n && Xe !== null && Xe.l !== null && ((i = Xe.l).s ?? (i.s = [])).push(r), r;
}
function W(e, t, n = !1) {
  Se !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!un || Se.f & No) && xi() && Se.f & (Ft | pr | ca | No) && !(Pt != null && Pt.includes(e)) && ec();
  let r = n ? pe(t) : t;
  return Vr(e, r);
}
function Vr(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    yr ? zn.set(e, t) : zn.set(e, n), e.v = t;
    var r = Tn.ensure();
    r.capture(e, n), e.f & Ft && (e.f & Xt && Co(
      /** @type {Derived} */
      e
    ), Mt(e, e.f & $t ? Yn : wt)), e.wv = El(), ll(e, Xt), xi() && Ce !== null && Ce.f & wt && !(Ce.f & (Rn | mr)) && (Kt === null ? Mc([e]) : Kt.push(e));
  }
  return t;
}
function pi(e) {
  W(e, e.v + 1);
}
function ll(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = xi(), i = n.length, a = 0; a < i; a++) {
      var o = n[a], l = o.f;
      if (!(!r && o === Ce)) {
        var s = (l & Xt) === 0;
        s && Mt(o, t), l & Ft ? ll(
          /** @type {Derived} */
          o,
          Yn
        ) : s && (l & pr && wn !== null && wn.push(
          /** @type {Effect} */
          o
        ), vr(
          /** @type {Effect} */
          o
        ));
      }
    }
}
function pe(e) {
  if (typeof e != "object" || e === null || yn in e)
    return e;
  const t = go(e);
  if (t !== Gu && t !== ju)
    return e;
  var n = /* @__PURE__ */ new Map(), r = ua(e), i = /* @__PURE__ */ be(0), a = fr, o = (l) => {
    if (fr === a)
      return l();
    var s = Se, u = fr;
    jt(null), zo(a);
    var d = l();
    return jt(s), zo(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ be(
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
          var f = /* @__PURE__ */ be(u.value);
          return n.set(s, f), f;
        }) : W(d, u.value, !0), !0;
      },
      deleteProperty(l, s) {
        var u = n.get(s);
        if (u === void 0) {
          if (s in l) {
            const d = o(() => /* @__PURE__ */ be(ft));
            n.set(s, d), pi(i);
          }
        } else
          W(u, ft), pi(i);
        return !0;
      },
      get(l, s, u) {
        var v;
        if (s === yn)
          return e;
        var d = n.get(s), f = s in l;
        if (d === void 0 && (!f || (v = qn(l, s)) != null && v.writable) && (d = o(() => {
          var h = pe(f ? l[s] : ft), p = /* @__PURE__ */ be(h);
          return p;
        }), n.set(s, d)), d !== void 0) {
          var g = c(d);
          return g === ft ? void 0 : g;
        }
        return Reflect.get(l, s, u);
      },
      getOwnPropertyDescriptor(l, s) {
        var u = Reflect.getOwnPropertyDescriptor(l, s);
        if (u && "value" in u) {
          var d = n.get(s);
          d && (u.value = c(d));
        } else if (u === void 0) {
          var f = n.get(s), g = f == null ? void 0 : f.v;
          if (f !== void 0 && g !== ft)
            return {
              enumerable: !0,
              configurable: !0,
              value: g,
              writable: !0
            };
        }
        return u;
      },
      has(l, s) {
        var g;
        if (s === yn)
          return !0;
        var u = n.get(s), d = u !== void 0 && u.v !== ft || Reflect.has(l, s);
        if (u !== void 0 || Ce !== null && (!d || (g = qn(l, s)) != null && g.writable)) {
          u === void 0 && (u = o(() => {
            var v = d ? pe(l[s]) : ft, h = /* @__PURE__ */ be(v);
            return h;
          }), n.set(s, u));
          var f = c(u);
          if (f === ft)
            return !1;
        }
        return d;
      },
      set(l, s, u, d) {
        var I;
        var f = n.get(s), g = s in l;
        if (r && s === "length")
          for (var v = u; v < /** @type {Source<number>} */
          f.v; v += 1) {
            var h = n.get(v + "");
            h !== void 0 ? W(h, ft) : v in l && (h = o(() => /* @__PURE__ */ be(ft)), n.set(v + "", h));
          }
        if (f === void 0)
          (!g || (I = qn(l, s)) != null && I.writable) && (f = o(() => /* @__PURE__ */ be(void 0)), W(f, pe(u)), n.set(s, f));
        else {
          g = f.v !== ft;
          var p = o(() => pe(u));
          W(f, p);
        }
        var y = Reflect.getOwnPropertyDescriptor(l, s);
        if (y != null && y.set && y.set.call(d, u), !g) {
          if (r && typeof s == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), L = Number(s);
            Number.isInteger(L) && L >= _.v && W(_, L + 1);
          }
          pi(i);
        }
        return !0;
      },
      ownKeys(l) {
        c(i);
        var s = Reflect.ownKeys(l).filter((f) => {
          var g = n.get(f);
          return g === void 0 || g.v !== ft;
        });
        for (var [u, d] of n)
          d.v !== ft && !(u in l) && s.push(u);
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
    if (e !== null && typeof e == "object" && yn in e)
      return e[yn];
  } catch {
  }
  return e;
}
function Sc(e, t) {
  return Object.is(Go(e), Go(t));
}
var Ji, ul, cl, dl, fl;
function Cc() {
  if (Ji === void 0) {
    Ji = window, ul = document, cl = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    dl = qn(t, "firstChild").get, fl = qn(t, "nextSibling").get, Fo(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), Fo(n) && (n.__t = void 0);
  }
}
function Kn(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function qr(e) {
  return dl.call(e);
}
// @__NO_SIDE_EFFECTS__
function Ii(e) {
  return fl.call(e);
}
function de(e, t) {
  return /* @__PURE__ */ qr(e);
}
function V(e, t = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ qr(
        /** @type {Node} */
        e
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Ii(n) : n;
  }
}
function oe(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ii(r);
  return r;
}
function Ac(e) {
  e.textContent = "";
}
function Ao() {
  return !1;
}
function xc(e, t) {
  if (t) {
    const n = document.body;
    e.autofocus = !0, Zn(() => {
      document.activeElement === n && e.focus();
    });
  }
}
let jo = !1;
function Ic() {
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
function ha(e) {
  var t = Se, n = Ce;
  jt(null), En(null);
  try {
    return e();
  } finally {
    jt(t), En(n);
  }
}
function wc(e, t, n, r = n) {
  e.addEventListener(t, () => ha(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), Ic();
}
function Lc(e) {
  Ce === null && Se === null && Yu(), Se !== null && Se.f & $t && Ce === null && Zu(), yr && Wu();
}
function Tc(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Hn(e, t, n, r = !0) {
  var i = Ce;
  i !== null && i.f & cn && (e |= cn);
  var a = {
    ctx: Xe,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: e | Xt,
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
      _i(a), a.f |= _o;
    } catch (s) {
      throw _t(a), s;
    }
  else t !== null && vr(a);
  if (r) {
    var o = a;
    if (n && o.deps === null && o.teardown === null && o.nodes_start === null && o.first === o.last && // either `null`, or a singular child
    !(o.f & Qr) && (o = o.first), o !== null && (o.parent = i, i !== null && Tc(o, i), Se !== null && Se.f & Ft && !(e & mr))) {
      var l = (
        /** @type {Derived} */
        Se
      );
      (l.effects ?? (l.effects = [])).push(o);
    }
  }
  return a;
}
function Oc() {
  return Se !== null && !un;
}
function va(e) {
  const t = Hn(mo, null, !1);
  return Mt(t, wt), t.teardown = e, t;
}
function Fe(e) {
  Lc();
  var t = (
    /** @type {Effect} */
    Ce.f
  ), n = !Se && (t & Rn) !== 0 && (t & _o) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Xe
    );
    (r.e ?? (r.e = [])).push(e);
  } else
    return hl(e);
}
function hl(e) {
  return Hn(po | qu, e, !1);
}
function Rc(e) {
  Tn.ensure();
  const t = Hn(mr | Qr, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? Xn(t, () => {
      _t(t), r(void 0);
    }) : (_t(t), r(void 0));
  });
}
function wi(e) {
  return Hn(po, e, !1);
}
function Hc(e) {
  return Hn(ca | Qr, e, !0);
}
function ga(e, t = 0) {
  return Hn(mo | t, e, !0);
}
function ye(e, t = [], n = []) {
  il(t, n, (r) => {
    Hn(mo, () => e(...r.map(c)), !0);
  });
}
function Qn(e, t = 0) {
  var n = Hn(pr | t, e, !0);
  return n;
}
function It(e, t = !0) {
  return Hn(Rn | Qr, e, !0, t);
}
function vl(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = yr, r = Se;
    qo(!0), jt(null);
    try {
      t.call(null);
    } finally {
      qo(n), jt(r);
    }
  }
}
function gl(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && ha(() => {
      i.abort(Or);
    });
    var r = n.next;
    n.f & mr ? n.parent = null : _t(n, t), n = r;
  }
}
function Dc(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    t.f & Rn || _t(t), t = n;
  }
}
function _t(e, t = !0) {
  var n = !1;
  (t || e.f & Vu) && e.nodes_start !== null && e.nodes_end !== null && (Pc(
    e.nodes_start,
    /** @type {TemplateNode} */
    e.nodes_end
  ), n = !0), gl(e, t && !n), $i(e, 0), Mt(e, br);
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
      /* @__PURE__ */ Ii(e)
    );
    e.remove(), e = n;
  }
}
function pl(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function Xn(e, t) {
  var n = [];
  xo(e, n, !0), ml(n, () => {
    _t(e), t && t();
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
function xo(e, t, n) {
  if (!(e.f & cn)) {
    if (e.f ^= cn, e.transitions !== null)
      for (const o of e.transitions)
        (o.is_global || n) && t.push(o);
    for (var r = e.first; r !== null; ) {
      var i = r.next, a = (r.f & _r) !== 0 || (r.f & Rn) !== 0;
      xo(r, t, a ? n : !1), r = i;
    }
  }
}
function pa(e) {
  bl(e, !0);
}
function bl(e, t) {
  if (e.f & cn) {
    e.f ^= cn, e.f & wt || (Mt(e, Xt), vr(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & _r) !== 0 || (n.f & Rn) !== 0;
      bl(n, i ? t : !1), n = r;
    }
    if (e.transitions !== null)
      for (const a of e.transitions)
        (a.is_global || t) && a.in();
  }
}
let Hr = !1;
function Vo(e) {
  Hr = e;
}
let yr = !1;
function qo(e) {
  yr = e;
}
let Se = null, un = !1;
function jt(e) {
  Se = e;
}
let Ce = null;
function En(e) {
  Ce = e;
}
let Pt = null;
function _l(e) {
  Se !== null && (Pt === null ? Pt = [e] : Pt.push(e));
}
let Dt = null, qt = 0, Kt = null;
function Mc(e) {
  Kt = e;
}
let yl = 1, bi = 0, fr = bi;
function zo(e) {
  fr = e;
}
let kn = !1;
function El() {
  return ++yl;
}
function ma(e) {
  var f;
  var t = e.f;
  if (t & Xt)
    return !0;
  if (t & Yn) {
    var n = e.deps, r = (t & $t) !== 0;
    if (n !== null) {
      var i, a, o = (t & Qi) !== 0, l = r && Ce !== null && !kn, s = n.length;
      if ((o || l) && (Ce === null || !(Ce.f & br))) {
        var u = (
          /** @type {Derived} */
          e
        ), d = u.parent;
        for (i = 0; i < s; i++)
          a = n[i], (o || !((f = a == null ? void 0 : a.reactions) != null && f.includes(u))) && (a.reactions ?? (a.reactions = [])).push(u);
        o && (u.f ^= Qi), l && d !== null && !(d.f & $t) && (u.f ^= $t);
      }
      for (i = 0; i < s; i++)
        if (a = n[i], ma(
          /** @type {Derived} */
          a
        ) && ol(
          /** @type {Derived} */
          a
        ), a.wv > e.wv)
          return !0;
    }
    (!r || Ce !== null && !kn) && Mt(e, wt);
  }
  return !1;
}
function Sl(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Pt != null && Pt.includes(e)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & Ft ? Sl(
        /** @type {Derived} */
        a,
        t,
        !1
      ) : t === a && (n ? Mt(a, Xt) : a.f & wt && Mt(a, Yn), vr(
        /** @type {Effect} */
        a
      ));
    }
}
function Cl(e) {
  var p;
  var t = Dt, n = qt, r = Kt, i = Se, a = kn, o = Pt, l = Xe, s = un, u = fr, d = e.f;
  Dt = /** @type {null | Value[]} */
  null, qt = 0, Kt = null, kn = (d & $t) !== 0 && (un || !Hr || Se === null), Se = d & (Rn | mr) ? null : e, Pt = null, Gr(e.ctx), un = !1, fr = ++bi, e.ac !== null && (ha(() => {
    e.ac.abort(Or);
  }), e.ac = null);
  try {
    e.f |= Ga;
    var f = (
      /** @type {Function} */
      e.fn
    ), g = f(), v = e.deps;
    if (Dt !== null) {
      var h;
      if ($i(e, qt), v !== null && qt > 0)
        for (v.length = qt + Dt.length, h = 0; h < Dt.length; h++)
          v[qt + h] = Dt[h];
      else
        e.deps = v = Dt;
      if (!kn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      d & Ft && /** @type {import('#client').Derived} */
      e.reactions !== null)
        for (h = qt; h < v.length; h++)
          ((p = v[h]).reactions ?? (p.reactions = [])).push(e);
    } else v !== null && qt < v.length && ($i(e, qt), v.length = qt);
    if (xi() && Kt !== null && !un && v !== null && !(e.f & (Ft | Yn | Xt)))
      for (h = 0; h < /** @type {Source[]} */
      Kt.length; h++)
        Sl(
          Kt[h],
          /** @type {Effect} */
          e
        );
    return i !== null && i !== e && (bi++, Kt !== null && (r === null ? r = Kt : r.push(.../** @type {Source[]} */
    Kt))), e.f & dr && (e.f ^= dr), g;
  } catch (y) {
    return $s(y);
  } finally {
    e.f ^= Ga, Dt = t, qt = n, Kt = r, Se = i, kn = a, Pt = o, Gr(l), un = s, fr = u;
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
  n === null && t.f & Ft && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Dt === null || !Dt.includes(t)) && (Mt(t, Yn), t.f & ($t | Qi) || (t.f ^= Qi), al(
    /** @type {Derived} **/
    t
  ), $i(
    /** @type {Derived} **/
    t,
    0
  ));
}
function $i(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Bc(e, n[r]);
}
function _i(e) {
  var t = e.f;
  if (!(t & br)) {
    Mt(e, wt);
    var n = Ce, r = Hr;
    Ce = e, Hr = !0;
    try {
      t & pr ? Dc(e) : gl(e), vl(e);
      var i = Cl(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = yl;
      var a;
      qs && ac && e.f & Xt && e.deps;
    } finally {
      Hr = r, Ce = n;
    }
  }
}
async function Al() {
  await Promise.resolve(), cc();
}
function c(e) {
  var t = e.f, n = (t & Ft) !== 0;
  if (Se !== null && !un) {
    var r = Ce !== null && (Ce.f & br) !== 0;
    if (!r && !(Pt != null && Pt.includes(e))) {
      var i = Se.deps;
      if (Se.f & Ga)
        e.rv < bi && (e.rv = bi, Dt === null && i !== null && i[qt] === e ? qt++ : Dt === null ? Dt = [e] : (!kn || !Dt.includes(e)) && Dt.push(e));
      else {
        (Se.deps ?? (Se.deps = [])).push(e);
        var a = e.reactions;
        a === null ? e.reactions = [Se] : a.includes(Se) || a.push(Se);
      }
    }
  } else if (n && /** @type {Derived} */
  e.deps === null && /** @type {Derived} */
  e.effects === null) {
    var o = (
      /** @type {Derived} */
      e
    ), l = o.parent;
    l !== null && !(l.f & $t) && (o.f ^= $t);
  }
  if (yr) {
    if (zn.has(e))
      return zn.get(e);
    if (n) {
      o = /** @type {Derived} */
      e;
      var s = o.v;
      return (!(o.f & wt) && o.reactions !== null || xl(o)) && (s = Co(o)), zn.set(o, s), s;
    }
  } else if (n) {
    if (o = /** @type {Derived} */
    e, mt != null && mt.has(o))
      return mt.get(o);
    ma(o) && ol(o);
  }
  if (mt != null && mt.has(e))
    return mt.get(e);
  if (e.f & dr)
    throw e.v;
  return e.v;
}
function xl(e) {
  if (e.v === ft) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (zn.has(t) || t.f & Ft && xl(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Jn(e) {
  var t = un;
  try {
    return un = !0, e();
  } finally {
    un = t;
  }
}
const Uc = -7169;
function Mt(e, t) {
  e.f = e.f & Uc | t;
}
function Fc(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (yn in e)
      Za(e);
    else if (!Array.isArray(e))
      for (let t in e) {
        const n = e[t];
        typeof n == "object" && n && yn in n && Za(n);
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
const Il = /* @__PURE__ */ new Set(), Ya = /* @__PURE__ */ new Set();
function Io(e, t, n, r = {}) {
  function i(a) {
    if (r.capture || hi.call(t, a), !a.cancelBubble)
      return ha(() => n == null ? void 0 : n.call(this, a));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? Zn(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function Nc(e, t, n, r = {}) {
  var i = Io(t, e, n, r);
  return () => {
    e.removeEventListener(t, i, r);
  };
}
function Gn(e, t, n, r, i) {
  var a = { capture: r, passive: i }, o = Io(e, t, n, a);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && va(() => {
    t.removeEventListener(e, o, a);
  });
}
function Wt(e) {
  for (var t = 0; t < e.length; t++)
    Il.add(e[t]);
  for (var n of Ya)
    n(e);
}
let Xo = null;
function hi(e) {
  var L;
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = ((L = e.composedPath) == null ? void 0 : L.call(e)) || [], a = (
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
    Ki(e, "currentTarget", {
      configurable: !0,
      get() {
        return a || n;
      }
    });
    var d = Se, f = Ce;
    jt(null), En(null);
    try {
      for (var g, v = []; a !== null; ) {
        var h = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var p = a["__" + r];
          if (p != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === a))
            if (ua(p)) {
              var [y, ..._] = p;
              y.apply(a, [e, ..._]);
            } else
              p.call(a, e);
        } catch (I) {
          g ? v.push(I) : g = I;
        }
        if (e.cancelBubble || h === t || h === null)
          break;
        a = h;
      }
      if (g) {
        for (let I of v)
          queueMicrotask(() => {
            throw I;
          });
        throw g;
      }
    } finally {
      e.__root = t, delete e.currentTarget, jt(d), En(f);
    }
  }
}
function wl(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function zr(e, t) {
  var n = (
    /** @type {Effect} */
    Ce
  );
  n.nodes_start === null && (n.nodes_start = e, n.nodes_end = t);
}
// @__NO_SIDE_EFFECTS__
function J(e, t) {
  var n = (t & 1) !== 0, r = (t & 2) !== 0, i, a = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = wl(a ? e : "<!>" + e), n || (i = /** @type {Node} */
    /* @__PURE__ */ qr(i)));
    var o = (
      /** @type {TemplateNode} */
      r || cl ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ qr(o)
      ), s = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      zr(l, s);
    } else
      zr(o, o);
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
        /* @__PURE__ */ qr(o)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ qr(l);
    }
    var s = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return zr(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function Zt(e, t) {
  return /* @__PURE__ */ kc(e, t, "svg");
}
function bt(e = "") {
  {
    var t = Kn(e + "");
    return zr(t, t), t;
  }
}
function Y() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Kn();
  return e.append(t, n), zr(t, n), e;
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
function $e(e, t) {
  var n = t == null ? "" : typeof t == "object" ? t + "" : t;
  n !== (e.__t ?? (e.__t = e.nodeValue)) && (e.__t = n, e.nodeValue = n + "");
}
function Zc(e, t) {
  return Yc(e, t);
}
const Lr = /* @__PURE__ */ new Map();
function Yc(e, { target: t, anchor: n, props: r = {}, events: i, context: a, intro: o = !0 }) {
  Cc();
  var l = /* @__PURE__ */ new Set(), s = (f) => {
    for (var g = 0; g < f.length; g++) {
      var v = f[g];
      if (!l.has(v)) {
        l.add(v);
        var h = Wc(v);
        t.addEventListener(v, hi, { passive: h });
        var p = Lr.get(v);
        p === void 0 ? (document.addEventListener(v, hi, { passive: h }), Lr.set(v, 1)) : Lr.set(v, p + 1);
      }
    }
  };
  s(vo(Il)), Ya.add(s);
  var u = void 0, d = Rc(() => {
    var f = n ?? t.appendChild(Kn());
    return vc(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (g) => {
        if (a) {
          Ae({});
          var v = (
            /** @type {ComponentContext} */
            Xe
          );
          v.c = a;
        }
        i && (r.$$events = i), u = e(g, r) || {}, a && xe();
      }
    ), () => {
      var h;
      for (var g of l) {
        t.removeEventListener(g, hi);
        var v = (
          /** @type {number} */
          Lr.get(g)
        );
        --v === 0 ? (document.removeEventListener(g, hi), Lr.delete(g)) : Lr.set(g, v);
      }
      Ya.delete(s), f !== n && ((h = f.parentNode) == null || h.removeChild(f));
    };
  });
  return Kc.set(u, d), u;
}
let Kc = /* @__PURE__ */ new WeakMap();
function le(e, t, ...n) {
  var r = e, i = ee, a;
  Qn(() => {
    i !== (i = t()) && (a && (_t(a), a = null), a = It(() => (
      /** @type {SnippetFn} */
      i(r, ...n)
    )));
  }, _r);
}
function yt(e) {
  Xe === null && yo(), Jr && Xe.l !== null ? Qc(Xe).m.push(e) : Fe(() => {
    const t = Jn(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function Er(e) {
  Xe === null && yo(), yt(() => () => Jn(e));
}
function Qc(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ?? (t.u = { a: [], b: [], m: [] });
}
function ie(e, t, n = !1) {
  var r = e, i = null, a = null, o = ft, l = n ? _r : 0, s = !1;
  const u = (v, h = !0) => {
    s = !0, g(h, v);
  };
  var d = null;
  function f() {
    d !== null && (d.lastChild.remove(), r.before(d), d = null);
    var v = o ? i : a, h = o ? a : i;
    v && pa(v), h && Xn(h, () => {
      o ? a = null : i = null;
    });
  }
  const g = (v, h) => {
    if (o !== (o = v)) {
      var p = Ao(), y = r;
      if (p && (d = document.createDocumentFragment(), d.append(y = Kn())), o ? i ?? (i = h && It(() => h(y))) : a ?? (a = h && It(() => h(y))), p) {
        var _ = (
          /** @type {Batch} */
          je
        ), L = o ? i : a, I = o ? a : i;
        L && _.skipped_effects.delete(L), I && _.skipped_effects.add(I), _.add_callback(f);
      } else
        f();
    }
  };
  Qn(() => {
    s = !1, t(u), s || g(null, null);
  }, l);
}
function Pi(e, t) {
  return t;
}
function Jc(e, t, n) {
  for (var r = e.items, i = [], a = t.length, o = 0; o < a; o++)
    xo(t[o].e, i, !0);
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
    ), r.clear(), vn(e, t[0].prev, t[a - 1].next);
  }
  ml(i, () => {
    for (var u = 0; u < a; u++) {
      var d = t[u];
      l || (r.delete(d.k), vn(e, d.prev, d.next)), _t(d.e, !l);
    }
  });
}
function oi(e, t, n, r, i, a = null) {
  var o = e, l = { flags: t, items: /* @__PURE__ */ new Map(), first: null }, s = (t & 4) !== 0;
  if (s) {
    var u = (
      /** @type {Element} */
      e
    );
    o = u.appendChild(Kn());
  }
  var d = null, f = !1, g = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ So(() => {
    var _ = n();
    return ua(_) ? _ : _ == null ? [] : vo(_);
  }), h, p;
  function y() {
    $c(
      p,
      h,
      l,
      g,
      o,
      i,
      t,
      r,
      n
    ), a !== null && (h.length === 0 ? d ? pa(d) : d = It(() => a(o)) : d !== null && Xn(d, () => {
      d = null;
    }));
  }
  Qn(() => {
    p ?? (p = /** @type {Effect} */
    Ce), h = /** @type {V[]} */
    c(v);
    var _ = h.length;
    if (!(f && _ === 0)) {
      f = _ === 0;
      var L, I, E, A;
      if (Ao()) {
        var b = /* @__PURE__ */ new Set(), S = (
          /** @type {Batch} */
          je
        );
        for (I = 0; I < _; I += 1) {
          E = h[I], A = r(E, I);
          var w = l.items.get(A) ?? g.get(A);
          w ? t & 3 && Ll(w, E, I, t) : (L = Tl(
            null,
            l,
            null,
            null,
            E,
            A,
            I,
            i,
            t,
            n,
            !0
          ), g.set(A, L)), b.add(A);
        }
        for (const [D, B] of l.items)
          b.has(D) || S.skipped_effects.add(B.e);
        S.add_callback(y);
      } else
        y();
      c(v);
    }
  });
}
function $c(e, t, n, r, i, a, o, l, s) {
  var X, k, C, F;
  var u = (o & 8) !== 0, d = (o & 3) !== 0, f = t.length, g = n.items, v = n.first, h = v, p, y = null, _, L = [], I = [], E, A, b, S;
  if (u)
    for (S = 0; S < f; S += 1)
      E = t[S], A = l(E, S), b = g.get(A), b !== void 0 && ((X = b.a) == null || X.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(b));
  for (S = 0; S < f; S += 1) {
    if (E = t[S], A = l(E, S), b = g.get(A), b === void 0) {
      var w = r.get(A);
      if (w !== void 0) {
        r.delete(A), g.set(A, w);
        var D = y ? y.next : h;
        vn(n, y, w), vn(n, w, D), Ca(w, D, i), y = w;
      } else {
        var B = h ? (
          /** @type {TemplateNode} */
          h.e.nodes_start
        ) : i;
        y = Tl(
          B,
          n,
          y,
          y === null ? n.first : y.next,
          E,
          A,
          S,
          a,
          o,
          s
        );
      }
      g.set(A, y), L = [], I = [], h = y.next;
      continue;
    }
    if (d && Ll(b, E, S, o), b.e.f & cn && (pa(b.e), u && ((k = b.a) == null || k.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(b))), b !== h) {
      if (p !== void 0 && p.has(b)) {
        if (L.length < I.length) {
          var N = I[0], z;
          y = N.prev;
          var K = L[0], fe = L[L.length - 1];
          for (z = 0; z < L.length; z += 1)
            Ca(L[z], N, i);
          for (z = 0; z < I.length; z += 1)
            p.delete(I[z]);
          vn(n, K.prev, fe.next), vn(n, y, K), vn(n, fe, N), h = N, y = fe, S -= 1, L = [], I = [];
        } else
          p.delete(b), Ca(b, h, i), vn(n, b.prev, b.next), vn(n, b, y === null ? n.first : y.next), vn(n, y, b), y = b;
        continue;
      }
      for (L = [], I = []; h !== null && h.k !== A; )
        h.e.f & cn || (p ?? (p = /* @__PURE__ */ new Set())).add(h), I.push(h), h = h.next;
      if (h === null)
        continue;
      b = h;
    }
    L.push(b), y = b, h = b.next;
  }
  if (h !== null || p !== void 0) {
    for (var O = p === void 0 ? [] : vo(p); h !== null; )
      h.e.f & cn || O.push(h), h = h.next;
    var R = O.length;
    if (R > 0) {
      var H = o & 4 && f === 0 ? i : null;
      if (u) {
        for (S = 0; S < R; S += 1)
          (C = O[S].a) == null || C.measure();
        for (S = 0; S < R; S += 1)
          (F = O[S].a) == null || F.fix();
      }
      Jc(n, O, H);
    }
  }
  u && Zn(() => {
    var ae;
    if (_ !== void 0)
      for (b of _)
        (ae = b.a) == null || ae.apply();
  }), e.first = n.first && n.first.e, e.last = y && y.e;
  for (var P of r.values())
    _t(P.e);
  r.clear();
}
function Ll(e, t, n, r) {
  r & 1 && Vr(e.v, t), r & 2 ? Vr(
    /** @type {Value<number>} */
    e.i,
    n
  ) : e.i = n;
}
function Tl(e, t, n, r, i, a, o, l, s, u, d) {
  var f = (s & 1) !== 0, g = (s & 16) === 0, v = f ? g ? /* @__PURE__ */ sl(i, !1, !1) : gr(i) : i, h = s & 2 ? gr(o) : o, p = {
    i: h,
    v,
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
      y.append(e = Kn());
    }
    return p.e = It(() => l(
      /** @type {Node} */
      e,
      v,
      h,
      u
    ), ic), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? d || (t.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function Ca(e, t, n) {
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
      /* @__PURE__ */ Ii(a)
    );
    i.before(a), a = o;
  }
}
function vn(e, t, n) {
  t === null ? e.first = n : (t.next = n, t.e.next = n && n.e), n !== null && (n.prev = t, n.e.prev = t && t.e);
}
function $r(e, t, n) {
  var r = e, i, a, o = null, l = null;
  function s() {
    a && (Xn(a), a = null), o && (o.lastChild.remove(), r.before(o), o = null), a = l, l = null;
  }
  Qn(() => {
    if (i !== (i = t())) {
      var u = Ao();
      if (i) {
        var d = r;
        u && (o = document.createDocumentFragment(), o.append(d = Kn()), a && je.skipped_effects.add(a)), l = It(() => n(d, i));
      }
      u ? je.add_callback(s) : s();
    }
  }, _r);
}
function Wo(e, t, n, r, i, a) {
  var o, l, s = null, u = (
    /** @type {TemplateNode} */
    e
  ), d;
  Qn(() => {
    const f = t() || null;
    var g = f === "svg" ? Fu : null;
    f !== o && (d && (f === null ? Xn(d, () => {
      d = null, l = null;
    }) : f === l ? pa(d) : _t(d)), f && f !== l && (d = It(() => {
      if (s = g ? document.createElementNS(g, f) : document.createElement(f), zr(s, s), r) {
        var v = (
          /** @type {TemplateNode} */
          s.appendChild(Kn())
        );
        r(s, v);
      }
      Ce.nodes_end = s, u.before(s);
    })), o = f, o && (l = o));
  }, _r);
}
function We(e, t, n) {
  wi(() => {
    var r = Jn(() => t(e, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      ga(() => {
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
  Qn(() => {
    n !== (n = t()) && (r && (_t(r), r = null), n && (r = It(() => {
      wi(() => (
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
function Aa(e) {
  return e[0] !== "-" || e[1] !== "-" ? e.toLowerCase() : e;
}
function rd(e, t) {
  if (t) {
    var n = "", r, i;
    if (Array.isArray(t) ? (r = t[0], i = t[1]) : r = t, e) {
      e = String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, o = 0, l = !1, s = [];
      r && s.push(...Object.keys(r).map(Aa)), i && s.push(...Object.keys(i).map(Aa));
      var u = 0, d = -1;
      const p = e.length;
      for (var f = 0; f < p; f++) {
        var g = e[f];
        if (l ? g === "/" && e[f - 1] === "*" && (l = !1) : a ? a === g && (a = !1) : g === "/" && e[f + 1] === "*" ? l = !0 : g === '"' || g === "'" ? a = g : g === "(" ? o++ : g === ")" && o--, !l && a === !1 && o === 0) {
          if (g === ":" && d === -1)
            d = f;
          else if (g === ";" || f === p - 1) {
            if (d !== -1) {
              var v = Aa(e.substring(u, d).trim());
              if (!s.includes(v)) {
                g !== ";" && f++;
                var h = e.substring(u, f).trim();
                n += " " + h + ";";
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
function xa(e, t = {}, n, r) {
  for (var i in n) {
    var a = n[i];
    t[i] !== a && (n[i] == null ? e.style.removeProperty(i) : e.style.setProperty(i, a, r));
  }
}
function Nt(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var a = rd(t, r);
    a == null ? e.removeAttribute("style") : e.style.cssText = a, e.__style = t;
  } else r && (Array.isArray(r) ? (xa(e, n == null ? void 0 : n[0], r[0]), xa(e, n == null ? void 0 : n[1], r[1], "important")) : xa(e, n, r));
  return r;
}
function Ka(e, t, n = !1) {
  if (e.multiple) {
    if (t == null)
      return;
    if (!ua(t))
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
  }), va(() => {
    t.disconnect();
  });
}
function Ko(e) {
  return "__value" in e ? e.__value : e.value;
}
const si = Symbol("class"), li = Symbol("style"), Dl = Symbol("is custom element"), Pl = Symbol("is html");
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
function Wn(e, t, n, r) {
  var i = wo(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[zu] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && Ml(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function od(e, t, n, r, i = !1, a = !1) {
  var o = wo(e), l = o[Dl], s = !o[Pl], u = t || {}, d = e.tagName === "OPTION";
  for (var f in t)
    f in n || (n[f] = null);
  n.class ? n.class = Rl(n.class) : n[si] && (n.class = null), n[li] && (n.style ?? (n.style = null));
  var g = Ml(e);
  for (const I in n) {
    let E = n[I];
    if (d && I === "value" && E == null) {
      e.value = e.__value = "", u[I] = E;
      continue;
    }
    if (I === "class") {
      var v = e.namespaceURI === "http://www.w3.org/1999/xhtml";
      Hl(e, v, E, r, t == null ? void 0 : t[si], n[si]), u[I] = E, u[si] = n[si];
      continue;
    }
    if (I === "style") {
      Nt(e, E, t == null ? void 0 : t[li], n[li]), u[I] = E, u[li] = n[li];
      continue;
    }
    var h = u[I];
    if (!(E === h && !(E === void 0 && e.hasAttribute(I)))) {
      u[I] = E;
      var p = I[0] + I[1];
      if (p !== "$$")
        if (p === "on") {
          const A = {}, b = "$$" + I;
          let S = I.slice(2);
          var y = Vc(S);
          if (Gc(S) && (S = S.slice(0, -7), A.capture = !0), !y && h) {
            if (E != null) continue;
            e.removeEventListener(S, u[b], A), u[b] = null;
          }
          if (E != null)
            if (y)
              e[`__${S}`] = E, Wt([S]);
            else {
              let w = function(D) {
                u[I].call(this, D);
              };
              u[b] = Io(S, e, w, A);
            }
          else y && (e[`__${S}`] = void 0);
        } else if (I === "style")
          Wn(e, I, E);
        else if (I === "autofocus")
          xc(
            /** @type {HTMLElement} */
            e,
            !!E
          );
        else if (!l && (I === "__value" || I === "value" && E != null))
          e.value = e.__value = E;
        else if (I === "selected" && d)
          ad(
            /** @type {HTMLOptionElement} */
            e,
            E
          );
        else {
          var _ = I;
          s || (_ = zc(_));
          var L = _ === "defaultValue" || _ === "defaultChecked";
          if (E == null && !l && !L)
            if (o[I] = null, _ === "value" || _ === "checked") {
              let A = (
                /** @type {HTMLInputElement} */
                e
              );
              const b = t === void 0;
              if (_ === "value") {
                let S = A.defaultValue;
                A.removeAttribute(_), A.defaultValue = S, A.value = A.__value = b ? S : null;
              } else {
                let S = A.defaultChecked;
                A.removeAttribute(_), A.defaultChecked = S, A.checked = b ? S : !1;
              }
            } else
              e.removeAttribute(I);
          else L || g.includes(_) && (l || typeof E != "string") ? (e[_] = E, _ in o && (o[_] = ft)) : typeof E != "function" && Wn(e, _, E);
        }
    }
  }
  return u;
}
function Ze(e, t, n = [], r = [], i, a = !1, o = !1) {
  il(n, r, (l) => {
    var s = void 0, u = {}, d = e.nodeName === "SELECT", f = !1;
    if (Qn(() => {
      var v = t(...l.map(c)), h = od(
        e,
        s,
        v,
        i,
        a,
        o
      );
      f && d && "value" in v && Ka(
        /** @type {HTMLSelectElement} */
        e,
        v.value
      );
      for (let y of Object.getOwnPropertySymbols(u))
        v[y] || _t(u[y]);
      for (let y of Object.getOwnPropertySymbols(v)) {
        var p = v[y];
        y.description === Nu && (!s || p !== s[y]) && (u[y] && _t(u[y]), u[y] = It(() => ed(e, () => p))), h[y] = p;
      }
      s = h;
    }), d) {
      var g = (
        /** @type {HTMLSelectElement} */
        e
      );
      wi(() => {
        Ka(
          g,
          /** @type {Record<string | symbol, any>} */
          s.value,
          !0
        ), id(g);
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
    if (a = Ia(e) ? wa(a) : a, n(a), je !== null && r.add(je), await Al(), a !== (a = t())) {
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
  Jn(t) == null && e.value && (n(Ia(e) ? wa(e.value) : e.value), je !== null && r.add(je)), ga(() => {
    var i = t();
    if (e === document.activeElement) {
      var a = (
        /** @type {Batch} */
        qi ?? je
      );
      if (r.has(a))
        return;
    }
    Ia(e) && i === wa(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function Ia(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function wa(e) {
  return e === "" ? null : +e;
}
function $o(e, t) {
  return e === t || (e == null ? void 0 : e[yn]) === t;
}
function Ee(e = {}, t, n, r) {
  return wi(() => {
    var i, a;
    return ga(() => {
      i = a, a = [], Jn(() => {
        e !== n(...a) && (t(e, ...a), i && $o(n(...i), e) && t(null, ...i));
      });
    }), () => {
      Zn(() => {
        a && $o(n(...a), e) && t(null, ...a);
      });
    };
  }), e;
}
function Lo(e, t, n) {
  if (e == null)
    return t(void 0), n && n(void 0), ee;
  const r = Jn(
    () => e.subscribe(
      t,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Tr = [];
function sd(e, t) {
  return {
    subscribe: Bt(e, t).subscribe
  };
}
function Bt(e, t = ee) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function i(l) {
    if (Eo(e, l) && (e = l, n)) {
      const s = !Tr.length;
      for (const u of r)
        u[1](), Tr.push(u, e);
      if (s) {
        for (let u = 0; u < Tr.length; u += 2)
          Tr[u][0](Tr[u + 1]);
        Tr.length = 0;
      }
    }
  }
  function a(l) {
    i(l(
      /** @type {T} */
      e
    ));
  }
  function o(l, s = ee) {
    const u = [l, s];
    return r.add(u), r.size === 1 && (n = t(i, a) || ee), l(
      /** @type {T} */
      e
    ), () => {
      r.delete(u), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: i, update: a, subscribe: o };
}
function ei(e, t, n) {
  const r = !Array.isArray(e), i = r ? [e] : e;
  if (!i.every(Boolean))
    throw new Error("derived() expects stores as input, got a falsy value");
  const a = t.length < 2;
  return sd(n, (o, l) => {
    let s = !1;
    const u = [];
    let d = 0, f = ee;
    const g = () => {
      if (d)
        return;
      f();
      const h = t(r ? u[0] : u, o, l);
      a ? o(h) : f = typeof h == "function" ? h : ee;
    }, v = i.map(
      (h, p) => Lo(
        h,
        (y) => {
          u[p] = y, d &= ~(1 << p), s && g();
        },
        () => {
          d |= 1 << p;
        }
      )
    );
    return s = !0, g(), function() {
      Xs(v), f(), s = !1;
    };
  });
}
function Bl(e) {
  let t;
  return Lo(e, (n) => t = n)(), t;
}
let Mi = !1, Ja = Symbol();
function On(e, t, n) {
  const r = n[t] ?? (n[t] = {
    store: null,
    source: /* @__PURE__ */ sl(void 0),
    unsubscribe: ee
  });
  if (r.store !== e && !(Ja in n))
    if (r.unsubscribe(), r.store = e ?? null, e == null)
      r.source.v = void 0, r.unsubscribe = ee;
    else {
      var i = !0;
      r.unsubscribe = Lo(e, (a) => {
        i ? r.source.v = a : W(r.source, a);
      }), i = !1;
    }
  return e && Ja in n ? Bl(e) : c(r.source);
}
function jn(e, t) {
  return e.set(t), t;
}
function $n() {
  const e = {};
  function t() {
    va(() => {
      for (var n in e)
        e[n].unsubscribe();
      Ki(e, Ja, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [e, t];
}
function ld(e) {
  var t = Mi;
  try {
    return Mi = !1, [e(), Mi];
  } finally {
    Mi = t;
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
      if (ai(r) && (r = r()), typeof r == "object" && r !== null && t in r) return r[t];
    }
  },
  set(e, t, n) {
    let r = e.props.length;
    for (; r--; ) {
      let i = e.props[r];
      ai(i) && (i = i());
      const a = qn(i, t);
      if (a && a.set)
        return a.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(e, t) {
    let n = e.props.length;
    for (; n--; ) {
      let r = e.props[n];
      if (ai(r) && (r = r()), typeof r == "object" && r !== null && t in r) {
        const i = qn(r, t);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(e, t) {
    if (t === yn || t === Zs) return !1;
    for (let n of e.props)
      if (ai(n) && (n = n()), n != null && t in n) return !0;
    return !1;
  },
  ownKeys(e) {
    const t = [];
    for (let n of e.props)
      if (ai(n) && (n = n()), !!n) {
        for (const r in n)
          t.includes(r) || t.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          t.includes(r) || t.push(r);
      }
    return t;
  }
};
function ht(...e) {
  return new Proxy({ props: e }, cd);
}
function m(e, t, n, r) {
  var I;
  var i = !Jr || (n & 2) !== 0, a = (n & 8) !== 0, o = (n & 16) !== 0, l = (
    /** @type {V} */
    r
  ), s = !0, u = () => (s && (s = !1, l = o ? Jn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), l), d;
  if (a) {
    var f = yn in e || Zs in e;
    d = ((I = qn(e, t)) == null ? void 0 : I.set) ?? (f && t in e ? (E) => e[t] = E : void 0);
  }
  var g, v = !1;
  a ? [g, v] = ld(() => (
    /** @type {V} */
    e[t]
  )) : g = /** @type {V} */
  e[t], g === void 0 && r !== void 0 && (g = u(), d && (i && Qu(), d(g)));
  var h;
  if (i ? h = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E === void 0 ? u() : (s = !0, E);
  } : h = () => {
    var E = (
      /** @type {V} */
      e[t]
    );
    return E !== void 0 && (l = /** @type {V} */
    void 0), E === void 0 ? l : E;
  }, i && !(n & 4))
    return h;
  if (d) {
    var p = e.$$legacy;
    return (
      /** @type {() => V} */
      function(E, A) {
        return arguments.length > 0 ? ((!i || !A || p || v) && d(A ? h() : E), E) : h();
      }
    );
  }
  var y = !1, _ = (n & 1 ? fa : So)(() => (y = !1, h()));
  a && c(_);
  var L = (
    /** @type {Effect} */
    Ce
  );
  return (
    /** @type {() => V} */
    function(E, A) {
      if (arguments.length > 0) {
        const b = A ? c(_) : i && a ? pe(E) : E;
        return W(_, b), y = !0, l !== void 0 && (l = b), E;
      }
      return yr && y || L.f & br ? _.v : c(_);
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
function yi(e, t) {
  return t.clone !== !1 && t.isMergeableObject(e) ? Xr(_d(e), e, t) : e;
}
function yd(e, t, n) {
  return e.concat(t).map(function(r) {
    return yi(r, n);
  });
}
function Ed(e, t) {
  if (!t.customMerge)
    return Xr;
  var n = t.customMerge(e);
  return typeof n == "function" ? n : Xr;
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
    r[i] = yi(e[i], n);
  }), es(t).forEach(function(i) {
    Cd(e, i) || (Ul(e, i) && n.isMergeableObject(t[i]) ? r[i] = Ed(i, n)(e[i], t[i], n) : r[i] = yi(t[i], n));
  }), r;
}
function Xr(e, t, n) {
  n = n || {}, n.arrayMerge = n.arrayMerge || yd, n.isMergeableObject = n.isMergeableObject || hd, n.cloneUnlessOtherwiseSpecified = yi;
  var r = Array.isArray(t), i = Array.isArray(e), a = r === i;
  return a ? r ? n.arrayMerge(e, t, n) : Ad(e, t, n) : yi(t, n);
}
Xr.all = function(t, n) {
  if (!Array.isArray(t))
    throw new Error("first argument should be an array");
  return t.reduce(function(r, i) {
    return Xr(r, i, n);
  }, {});
};
var xd = Xr, Id = xd;
const wd = /* @__PURE__ */ fd(Id);
var $a = function(e, t) {
  return $a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, $a(e, t);
};
function Et(e, t) {
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
function Lt(e) {
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
function Dr(e, t, n) {
  if (n || arguments.length === 2) for (var r = 0, i = t.length, a; r < i; r++)
    (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Pr(e) {
  return this instanceof Pr ? (this.v = e, this) : new Pr(e);
}
function Td(e, t, n) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var r = n.apply(e, t || []), i, a = [];
  return i = Object.create((typeof AsyncIterator == "function" ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", o), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(v) {
    return function(h) {
      return Promise.resolve(h).then(v, f);
    };
  }
  function l(v, h) {
    r[v] && (i[v] = function(p) {
      return new Promise(function(y, _) {
        a.push([v, p, y, _]) > 1 || s(v, p);
      });
    }, h && (i[v] = h(i[v])));
  }
  function s(v, h) {
    try {
      u(r[v](h));
    } catch (p) {
      g(a[0][3], p);
    }
  }
  function u(v) {
    v.value instanceof Pr ? Promise.resolve(v.value.v).then(d, f) : g(a[0][2], v);
  }
  function d(v) {
    s("next", v);
  }
  function f(v) {
    s("throw", v);
  }
  function g(v, h) {
    v(h), a.shift(), a.length && s(a[0][0], a[0][1]);
  }
}
function Od(e) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var t = e[Symbol.asyncIterator], n;
  return t ? t.call(e) : (e = typeof Lt == "function" ? Lt(e) : e[Symbol.iterator](), n = {}, r("next"), r("throw"), r("return"), n[Symbol.asyncIterator] = function() {
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
function La(e, t) {
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
}, Ta = {
  variadic: Pd
}, we;
(function(e) {
  e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG";
})(we || (we = {}));
var Qe;
(function(e) {
  e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag";
})(Qe || (Qe = {}));
var Wr;
(function(e) {
  e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime";
})(Wr || (Wr = {}));
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
  return !!(e && typeof e == "object" && e.type === Wr.number);
}
function to(e) {
  return !!(e && typeof e == "object" && e.type === Wr.dateTime);
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
  for (var t = e.split(jd).filter(function(g) {
    return g.length > 0;
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
        i.options[0].replace(zd, function(s, u, d, f, g, v) {
          if (u)
            t.minimumIntegerDigits = d.length;
          else {
            if (f && g)
              throw new Error("We currently do not support maximum integer digits");
            if (v)
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
      i.stem.replace(ns, function(s, u, d, f, g, v) {
        return d === "*" ? t.minimumFractionDigits = u.length : f && f[0] === "#" ? t.maximumFractionDigits = f.length : g && v ? (t.minimumFractionDigits = g.length, t.maximumFractionDigits = g.length + v.length) : (t.minimumFractionDigits = u.length, t.maximumFractionDigits = u.length), "";
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
var Bi = {
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
  var i = Bi[r || ""] || Bi[n || ""] || Bi["".concat(n, "-001")] || Bi["001"];
  return i[0];
}
var Oa, Kd = new RegExp("^".concat(Zl.source, "*")), Qd = new RegExp("".concat(Zl.source, "*$"));
function Oe(e, t) {
  return { start: e, end: t };
}
var Jd = !!String.prototype.startsWith && "_a".startsWith("a", 1), $d = !!String.fromCodePoint, ef = !!Object.fromEntries, tf = !!String.prototype.codePointAt, nf = !!String.prototype.trimStart, rf = !!String.prototype.trimEnd, af = !!Number.isSafeInteger, of = af ? Number.isSafeInteger : function(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991;
}, no = !0;
try {
  var sf = $l("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
  no = ((Oa = sf.exec("a")) === null || Oa === void 0 ? void 0 : Oa[0]) === "a";
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
              location: Oe(l, this.clonePosition())
            });
          } else if (a === 60 && !this.ignoreTag && this.peek() === 47) {
            if (r)
              break;
            return this.error(we.UNMATCHED_CLOSING_TAG, Oe(this.clonePosition(), this.clonePosition()));
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
            location: Oe(r, this.clonePosition())
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
            return this.error(we.INVALID_TAG, Oe(l, this.clonePosition()));
          var s = this.clonePosition(), u = this.parseTagName();
          return i !== u ? this.error(we.UNMATCHED_CLOSING_TAG, Oe(s, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
            val: {
              type: Qe.tag,
              value: i,
              children: o,
              location: Oe(r, this.clonePosition())
            },
            err: null
          } : this.error(we.INVALID_TAG, Oe(l, this.clonePosition())));
        } else
          return this.error(we.UNCLOSED_TAG, Oe(r, this.clonePosition()));
      } else
        return this.error(we.INVALID_TAG, Oe(r, this.clonePosition()));
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
      var s = Oe(r, this.clonePosition());
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
        return this.error(we.EXPECT_ARGUMENT_CLOSING_BRACE, Oe(r, this.clonePosition()));
      if (this.char() === 125)
        return this.bump(), this.error(we.EMPTY_ARGUMENT, Oe(r, this.clonePosition()));
      var i = this.parseIdentifierIfPossible().value;
      if (!i)
        return this.error(we.MALFORMED_ARGUMENT, Oe(r, this.clonePosition()));
      if (this.bumpSpace(), this.isEOF())
        return this.error(we.EXPECT_ARGUMENT_CLOSING_BRACE, Oe(r, this.clonePosition()));
      switch (this.char()) {
        case 125:
          return this.bump(), {
            val: {
              type: Qe.argument,
              // value does not include the opening and closing braces.
              value: i,
              location: Oe(r, this.clonePosition())
            },
            err: null
          };
        case 44:
          return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(we.EXPECT_ARGUMENT_CLOSING_BRACE, Oe(r, this.clonePosition())) : this.parseArgumentOptions(t, n, i, r);
        default:
          return this.error(we.MALFORMED_ARGUMENT, Oe(r, this.clonePosition()));
      }
    }, e.prototype.parseIdentifierIfPossible = function() {
      var t = this.clonePosition(), n = this.offset(), r = io(this.message, n), i = n + r.length;
      this.bumpTo(i);
      var a = this.clonePosition(), o = Oe(t, a);
      return { value: r, location: o };
    }, e.prototype.parseArgumentOptions = function(t, n, r, i) {
      var a, o = this.clonePosition(), l = this.parseIdentifierIfPossible().value, s = this.clonePosition();
      switch (l) {
        case "":
          return this.error(we.EXPECT_ARGUMENT_TYPE, Oe(o, s));
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
            var g = uf(f.val);
            if (g.length === 0)
              return this.error(we.EXPECT_ARGUMENT_STYLE, Oe(this.clonePosition(), this.clonePosition()));
            var v = Oe(d, this.clonePosition());
            u = { style: g, styleLocation: v };
          }
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var p = Oe(i, this.clonePosition());
          if (u && as(u == null ? void 0 : u.style, "::", 0)) {
            var y = lf(u.style.slice(2));
            if (l === "number") {
              var f = this.parseNumberSkeletonFromString(y, u.styleLocation);
              return f.err ? f : {
                val: { type: Qe.number, value: r, location: p, style: f.val },
                err: null
              };
            } else {
              if (y.length === 0)
                return this.error(we.EXPECT_DATE_TIME_SKELETON, p);
              var _ = y;
              this.locale && (_ = Zd(y, this.locale));
              var g = {
                type: Wr.dateTime,
                pattern: _,
                location: u.styleLocation,
                parsedOptions: this.shouldParseSkeletons ? Gd(_) : {}
              }, L = l === "date" ? Qe.date : Qe.time;
              return {
                val: { type: L, value: r, location: p, style: g },
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
          var I = this.clonePosition();
          if (this.bumpSpace(), !this.bumpIf(","))
            return this.error(we.EXPECT_SELECT_ARGUMENT_OPTIONS, Oe(I, ne({}, I)));
          this.bumpSpace();
          var E = this.parseIdentifierIfPossible(), A = 0;
          if (l !== "select" && E.value === "offset") {
            if (!this.bumpIf(":"))
              return this.error(we.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, Oe(this.clonePosition(), this.clonePosition()));
            this.bumpSpace();
            var f = this.tryParseDecimalInteger(we.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, we.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE);
            if (f.err)
              return f;
            this.bumpSpace(), E = this.parseIdentifierIfPossible(), A = f.val;
          }
          var b = this.tryParsePluralOrSelectOptions(t, l, n, E);
          if (b.err)
            return b;
          var h = this.tryParseArgumentClose(i);
          if (h.err)
            return h;
          var S = Oe(i, this.clonePosition());
          return l === "select" ? {
            val: {
              type: Qe.select,
              value: r,
              options: os(b.val),
              location: S
            },
            err: null
          } : {
            val: {
              type: Qe.plural,
              value: r,
              options: os(b.val),
              offset: A,
              pluralType: l === "plural" ? "cardinal" : "ordinal",
              location: S
            },
            err: null
          };
        }
        default:
          return this.error(we.INVALID_ARGUMENT_TYPE, Oe(o, s));
      }
    }, e.prototype.tryParseArgumentClose = function(t) {
      return this.isEOF() || this.char() !== 125 ? this.error(we.EXPECT_ARGUMENT_CLOSING_BRACE, Oe(t, this.clonePosition())) : (this.bump(), { val: !0, err: null });
    }, e.prototype.parseSimpleArgStyleIfPossible = function() {
      for (var t = 0, n = this.clonePosition(); !this.isEOF(); ) {
        var r = this.char();
        switch (r) {
          case 39: {
            this.bump();
            var i = this.clonePosition();
            if (!this.bumpUntil("'"))
              return this.error(we.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, Oe(i, this.clonePosition()));
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
        return this.error(we.INVALID_NUMBER_SKELETON, n);
      }
      return {
        val: {
          type: Wr.number,
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
            var g = this.tryParseDecimalInteger(we.EXPECT_PLURAL_ARGUMENT_SELECTOR, we.INVALID_PLURAL_ARGUMENT_SELECTOR);
            if (g.err)
              return g;
            d = Oe(f, this.clonePosition()), u = this.message.slice(f.offset, this.offset());
          } else
            break;
        }
        if (s.has(u))
          return this.error(n === "select" ? we.DUPLICATE_SELECT_ARGUMENT_SELECTOR : we.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
        u === "other" && (o = !0), this.bumpSpace();
        var v = this.clonePosition();
        if (!this.bumpIf("{"))
          return this.error(n === "select" ? we.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : we.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, Oe(this.clonePosition(), this.clonePosition()));
        var h = this.parseMessage(t + 1, n, r);
        if (h.err)
          return h;
        var p = this.tryParseArgumentClose(v);
        if (p.err)
          return p;
        l.push([
          u,
          {
            value: h.val,
            location: Oe(v, this.clonePosition())
          }
        ]), s.add(u), this.bumpSpace(), a = this.parseIdentifierIfPossible(), u = a.value, d = a.location;
      }
      return l.length === 0 ? this.error(n === "select" ? we.EXPECT_SELECT_ARGUMENT_SELECTOR : we.EXPECT_PLURAL_ARGUMENT_SELECTOR, Oe(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(we.MISSING_OTHER_CLAUSE, Oe(this.clonePosition(), this.clonePosition())) : { val: l, err: null };
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
      var s = Oe(i, this.clonePosition());
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
    var r = SyntaxError(we[n.err.kind]);
    throw r.location = n.err.location, r.originalMessage = n.err.message, r;
  }
  return t != null && t.captureLocation || oo(n.val), n.val;
}
var Zr;
(function(e) {
  e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API";
})(Zr || (Zr = {}));
var ba = (
  /** @class */
  function(e) {
    Et(t, e);
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
    Et(t, e);
    function t(n, r, i, a) {
      return e.call(this, 'Invalid values for "'.concat(n, '": "').concat(r, '". Options are "').concat(Object.keys(i).join('", "'), '"'), Zr.INVALID_VALUE, a) || this;
    }
    return t;
  }(ba)
), gf = (
  /** @class */
  function(e) {
    Et(t, e);
    function t(n, r, i) {
      return e.call(this, 'Value for "'.concat(n, '" must be of type ').concat(r), Zr.INVALID_VALUE, i) || this;
    }
    return t;
  }(ba)
), pf = (
  /** @class */
  function(e) {
    Et(t, e);
    function t(n, r) {
      return e.call(this, 'The intl string context variable "'.concat(n, '" was not provided to the string "').concat(r, '"'), Zr.MISSING_VALUE, r) || this;
    }
    return t;
  }(ba)
), Ht;
(function(e) {
  e[e.literal = 0] = "literal", e[e.object = 1] = "object";
})(Ht || (Ht = {}));
function mf(e) {
  return e.length < 2 ? e : e.reduce(function(t, n) {
    var r = t[t.length - 1];
    return !r || r.type !== Ht.literal || n.type !== Ht.literal ? t.push(n) : r.value += n.value, t;
  }, []);
}
function bf(e) {
  return typeof e == "function";
}
function Zi(e, t, n, r, i, a, o) {
  if (e.length === 1 && ts(e[0]))
    return [
      {
        type: Ht.literal,
        value: e[0].value
      }
    ];
  for (var l = [], s = 0, u = e; s < u.length; s++) {
    var d = u[s];
    if (ts(d)) {
      l.push({
        type: Ht.literal,
        value: d.value
      });
      continue;
    }
    if (Nd(d)) {
      typeof a == "number" && l.push({
        type: Ht.literal,
        value: n.getNumberFormat(t).format(a)
      });
      continue;
    }
    var f = d.value;
    if (!(i && f in i))
      throw new pf(f, o);
    var g = i[f];
    if (Fd(d)) {
      (!g || typeof g == "string" || typeof g == "number") && (g = typeof g == "string" || typeof g == "number" ? String(g) : ""), l.push({
        type: typeof g == "string" ? Ht.literal : Ht.object,
        value: g
      });
      continue;
    }
    if (jl(d)) {
      var v = typeof d.style == "string" ? r.date[d.style] : to(d.style) ? d.style.parsedOptions : void 0;
      l.push({
        type: Ht.literal,
        value: n.getDateTimeFormat(t, v).format(g)
      });
      continue;
    }
    if (Vl(d)) {
      var v = typeof d.style == "string" ? r.time[d.style] : to(d.style) ? d.style.parsedOptions : r.time.medium;
      l.push({
        type: Ht.literal,
        value: n.getDateTimeFormat(t, v).format(g)
      });
      continue;
    }
    if (Gl(d)) {
      var v = typeof d.style == "string" ? r.number[d.style] : Wl(d.style) ? d.style.parsedOptions : void 0;
      v && v.scale && (g = g * (v.scale || 1)), l.push({
        type: Ht.literal,
        value: n.getNumberFormat(t, v).format(g)
      });
      continue;
    }
    if (Xl(d)) {
      var h = d.children, p = d.value, y = i[p];
      if (!bf(y))
        throw new gf(p, "function", o);
      var _ = Zi(h, t, n, r, i, a), L = y(_.map(function(A) {
        return A.value;
      }));
      Array.isArray(L) || (L = [L]), l.push.apply(l, L.map(function(A) {
        return {
          type: typeof A == "string" ? Ht.literal : Ht.object,
          value: A
        };
      }));
    }
    if (ql(d)) {
      var I = d.options[g] || d.options.other;
      if (!I)
        throw new ls(d.value, g, Object.keys(d.options), o);
      l.push.apply(l, Zi(I.value, t, n, r, i));
      continue;
    }
    if (zl(d)) {
      var I = d.options["=".concat(g)];
      if (!I) {
        if (!Intl.PluralRules)
          throw new ba(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`, Zr.MISSING_INTL_API, o);
        var E = n.getPluralRules(t, { type: d.pluralType }).select(g - (d.offset || 0));
        I = d.options[E] || d.options.other;
      }
      if (!I)
        throw new ls(d.value, g, Object.keys(d.options), o);
      l.push.apply(l, Zi(I.value, t, n, r, i, g - (d.offset || 0)));
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
function Ra(e) {
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
    getNumberFormat: La(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.NumberFormat).bind.apply(t, Dr([void 0], n, !1)))();
    }, {
      cache: Ra(e.number),
      strategy: Ta.variadic
    }),
    getDateTimeFormat: La(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.DateTimeFormat).bind.apply(t, Dr([void 0], n, !1)))();
    }, {
      cache: Ra(e.dateTime),
      strategy: Ta.variadic
    }),
    getPluralRules: La(function() {
      for (var t, n = [], r = 0; r < arguments.length; r++)
        n[r] = arguments[r];
      return new ((t = Intl.PluralRules).bind.apply(t, Dr([void 0], n, !1)))();
    }, {
      cache: Ra(e.pluralRules),
      strategy: Ta.variadic
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
        var d = u.reduce(function(f, g) {
          return !f.length || g.type !== Ht.literal || typeof f[f.length - 1] != "string" ? f.push(g.value) : f[f.length - 1] += g.value, f;
        }, []);
        return d.length <= 1 ? d[0] || "" : d;
      }, this.formatToParts = function(s) {
        return Zi(a.ast, a.locales, a.formatters, a.formats, s, void 0, a.message);
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
const Vn = {}, Cf = (e, t, n) => n && (t in Vn || (Vn[t] = {}), e in Vn[t] || (Vn[t][e] = n), n), nu = (e, t) => {
  if (t == null)
    return;
  if (t in Vn && e in Vn[t])
    return Vn[t][e];
  const n = Ti(t);
  for (let r = 0; r < n.length; r++) {
    const i = n[r], a = xf(i, e);
    if (a)
      return Cf(e, t, a);
  }
};
let Oo;
const Li = Bt({});
function Af(e) {
  return Oo[e] || null;
}
function ru(e) {
  return e in Oo;
}
function xf(e, t) {
  if (!ru(e))
    return null;
  const n = Af(e);
  return Sf(n, t);
}
function If(e) {
  if (e == null)
    return;
  const t = Ti(e);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (ru(r))
      return r;
  }
}
function iu(e, ...t) {
  delete Vn[e], Li.update((n) => (n[e] = wd.all([n[e] || {}, ...t]), n));
}
ei(
  [Li],
  ([e]) => Object.keys(e)
);
Li.subscribe((e) => Oo = e);
const Yi = {};
function wf(e, t) {
  Yi[e].delete(t), Yi[e].size === 0 && delete Yi[e];
}
function au(e) {
  return Yi[e];
}
function Lf(e) {
  return Ti(e).map((t) => {
    const n = au(t);
    return [t, n ? [...n] : []];
  }).filter(([, t]) => t.length > 0);
}
function ea(e) {
  return e == null ? !1 : Ti(e).some(
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
const ui = {};
function ou(e) {
  if (!ea(e))
    return e in ui ? ui[e] : Promise.resolve();
  const t = Lf(e);
  return ui[e] = Promise.all(
    t.map(
      ([n, r]) => Tf(n, r)
    )
  ).then(() => {
    if (ea(e))
      return ou(e);
    delete ui[e];
  }), ui[e];
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
    `[svelte-i18n] The message "${t}" was not found in "${Ti(
      e
    ).join('", "')}".${ea(er()) ? `

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
}, vi = Mf;
function Yr() {
  return vi;
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
  )), Object.assign(vi, r, { initialLocale: i }), n && ("number" in n && Object.assign(vi.formats.number, n.number), "date" in n && Object.assign(vi.formats.date, n.date), "time" in n && Object.assign(vi.formats.time, n.time)), Sr.set(i);
}
const Ha = Bt(!1);
var Uf = Object.defineProperty, Ff = Object.defineProperties, Nf = Object.getOwnPropertyDescriptors, cs = Object.getOwnPropertySymbols, kf = Object.prototype.hasOwnProperty, Gf = Object.prototype.propertyIsEnumerable, ds = (e, t, n) => t in e ? Uf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, jf = (e, t) => {
  for (var n in t || (t = {}))
    kf.call(t, n) && ds(e, n, t[n]);
  if (cs)
    for (var n of cs(t))
      Gf.call(t, n) && ds(e, n, t[n]);
  return e;
}, Vf = (e, t) => Ff(e, Nf(t));
let so;
const ta = Bt(null);
function fs(e) {
  return e.split("-").map((t, n, r) => r.slice(0, n + 1).join("-")).reverse();
}
function Ti(e, t = Yr().fallbackLocale) {
  const n = fs(e);
  return t ? [.../* @__PURE__ */ new Set([...n, ...fs(t)])] : n;
}
function er() {
  return so ?? void 0;
}
ta.subscribe((e) => {
  so = e ?? void 0, typeof window < "u" && e != null && document.documentElement.setAttribute("lang", e);
});
const qf = (e) => {
  if (e && If(e) && ea(e)) {
    const { loadingDelay: t } = Yr();
    let n;
    return typeof window < "u" && er() != null && t ? n = window.setTimeout(
      () => Ha.set(!0),
      t
    ) : Ha.set(!0), ou(e).then(() => {
      ta.set(e);
    }).finally(() => {
      clearTimeout(n), Ha.set(!1);
    });
  }
  return ta.set(e);
}, Sr = Vf(jf({}, ta), {
  set: qf
}), zf = () => typeof window > "u" ? null : window.navigator.language || window.navigator.languages[0], _a = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => {
    const i = JSON.stringify(r);
    return i in t ? t[i] : t[i] = e(r);
  };
};
var Xf = Object.defineProperty, na = Object.getOwnPropertySymbols, su = Object.prototype.hasOwnProperty, lu = Object.prototype.propertyIsEnumerable, hs = (e, t, n) => t in e ? Xf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, Ro = (e, t) => {
  for (var n in t || (t = {}))
    su.call(t, n) && hs(e, n, t[n]);
  if (na)
    for (var n of na(t))
      lu.call(t, n) && hs(e, n, t[n]);
  return e;
}, ti = (e, t) => {
  var n = {};
  for (var r in e)
    su.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && na)
    for (var r of na(e))
      t.indexOf(r) < 0 && lu.call(e, r) && (n[r] = e[r]);
  return n;
};
const Ei = (e, t) => {
  const { formats: n } = Yr();
  if (e in n && t in n[e])
    return n[e][t];
  throw new Error(`[svelte-i18n] Unknown "${t}" ${e} format.`);
}, Wf = _a(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = ti(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format numbers');
    return r && (i = Ei("number", r)), new Intl.NumberFormat(n, i);
  }
), Zf = _a(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = ti(t, ["locale", "format"]);
    if (n == null)
      throw new Error('[svelte-i18n] A "locale" must be set to format dates');
    return r ? i = Ei("date", r) : Object.keys(i).length === 0 && (i = Ei("date", "short")), new Intl.DateTimeFormat(n, i);
  }
), Yf = _a(
  (e) => {
    var t = e, { locale: n, format: r } = t, i = ti(t, ["locale", "format"]);
    if (n == null)
      throw new Error(
        '[svelte-i18n] A "locale" must be set to format time values'
      );
    return r ? i = Ei("time", r) : Object.keys(i).length === 0 && (i = Ei("time", "short")), new Intl.DateTimeFormat(n, i);
  }
), Kf = (e = {}) => {
  var t = e, {
    locale: n = er()
  } = t, r = ti(t, [
    "locale"
  ]);
  return Wf(Ro({ locale: n }, r));
}, Qf = (e = {}) => {
  var t = e, {
    locale: n = er()
  } = t, r = ti(t, [
    "locale"
  ]);
  return Zf(Ro({ locale: n }, r));
}, Jf = (e = {}) => {
  var t = e, {
    locale: n = er()
  } = t, r = ti(t, [
    "locale"
  ]);
  return Yf(Ro({ locale: n }, r));
}, $f = _a(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  (e, t = er()) => new tu(e, t, Yr().formats, {
    ignoreTag: Yr().ignoreTag
  })
), eh = (e, t = {}) => {
  var n, r, i, a;
  let o = t;
  typeof e == "object" && (o = e, e = o.id);
  const {
    values: l,
    locale: s = er(),
    default: u
  } = o;
  if (s == null)
    throw new Error(
      "[svelte-i18n] Cannot format a message without first setting the initial locale."
    );
  let d = nu(e, s);
  if (!d)
    d = (a = (i = (r = (n = Yr()).handleMissingMessage) == null ? void 0 : r.call(n, { locale: s, id: e, defaultValue: u })) != null ? i : u) != null ? a : e;
  else if (typeof d != "string")
    return console.warn(
      `[svelte-i18n] Message with id "${e}" must be of type "string", found: "${typeof d}". Gettin its value through the "$format" method is deprecated; use the "json" method instead.`
    ), d;
  if (!l)
    return d;
  let f = d;
  try {
    f = $f(d, s).format(l);
  } catch (g) {
    g instanceof Error && console.warn(
      `[svelte-i18n] Message "${e}" has syntax error:`,
      g.message
    );
  }
  return f;
}, th = (e, t) => Jf(t).format(e), nh = (e, t) => Qf(t).format(e), rh = (e, t) => Kf(t).format(e), ih = (e, t = er()) => nu(e, t), ah = ei([Sr, Li], () => eh);
ei([Sr], () => th);
ei([Sr], () => nh);
ei([Sr], () => rh);
ei([Sr, Li], () => ih);
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
}, Ch = "Search", Ah = "Add Location", xh = "Refresh", Ih = "Delete location {name}?", wh = "Confirm", Lh = "Cancel", Th = "Save", Oh = "New Location", Rh = "Location: {name}", Hh = "Name", Dh = "Key", Ph = "Description", Mh = "Location Table", Bh = "UUID", Uh = "Assigned Resources", Fh = {
  search: Ch,
  add_location: Ah,
  refresh: xh,
  delete_location: Ih,
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
function it(e, t, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!e)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(t, Object.assign(Object.assign({}, r), { detail: n }));
  return e == null || e.dispatchEvent(i), i;
}
function ra(e, t) {
  let n = Object.getOwnPropertyNames(e);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i], o = a.indexOf("$");
    o !== -1 && t.indexOf(a.substring(0, o + 1)) !== -1 || t.indexOf(a) === -1 && (r[a] = e[a]);
  }
  return r;
}
function sn(e, t) {
  let n = Object.getOwnPropertyNames(e);
  const r = {};
  for (let i = 0; i < n.length; i++) {
    const a = n[i];
    a.substring(0, t.length) === t && (r[a.substring(t.length)] = e[a]);
  }
  return r;
}
class ni {
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
var Ui;
function Nh(e, t) {
  t === void 0 && (t = !1);
  var n = e.CSS, r = Ui;
  if (typeof Ui == "boolean" && !t)
    return Ui;
  var i = n && typeof n.supports == "function";
  if (!i)
    return !1;
  var a = n.supports("--css-vars", "yes"), o = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = a || o, t || (Ui = r), r;
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
var Sn = (
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
], Fi = [], Wh = (
  /** @class */
  function(e) {
    Et(t, e);
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
          for (var a = Lt(gs), o = a.next(); !o.done; o = a.next()) {
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
          for (var a = Lt(ps), o = a.next(); !o.done; o = a.next()) {
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
        for (var i = Lt(gs), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Lt(ps), a = i.next(); !a.done; a = i.next()) {
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
            var l = n !== void 0 && Fi.length > 0 && Fi.some(function(s) {
              return r.adapter.containsEventTarget(s);
            });
            if (l) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Fi.push(n.target), this.registerDeactivationHandlers(n)), i.wasElementMadeActive = this.checkElementMadeActive(n), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Fi = [], !i.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(n), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
        var g = this.getFgTranslationCoordinates(), v = g.startPoint, h = g.endPoint;
        d = v.x + "px, " + v.y + "px", f = h.x + "px, " + h.y + "px";
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
  }(Sn)
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
var Da = "mdc-dom-focus-sentinel", Zh = (
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
      [].slice.call(this.root.querySelectorAll("." + Da)).forEach(function(t) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(Da) && !i, o = !1;
        if (a) {
          var l = getComputedStyle(r);
          o = l.display === "none" || l.visibility === "hidden";
        }
        return a && !o;
      });
    }, e.prototype.createSentinel = function() {
      var t = document.createElement("div");
      return t.setAttribute("tabindex", "0"), t.setAttribute("aria-hidden", "true"), t.classList.add(Da), t;
    }, e;
  }()
);
const Yh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: Zh
}, Symbol.toStringTag, { value: "Module" })), { applyPassive: ms } = uu, { matches: Kh } = Ho;
function Bn(e, { ripple: t = !0, surface: n = !1, unbounded: r = !1, disabled: i = !1, color: a, active: o, rippleElement: l, eventTarget: s, activeTarget: u, addClass: d = (h) => e.classList.add(h), removeClass: f = (h) => e.classList.remove(h), addStyle: g = (h, p) => e.style.setProperty(h, p), initPromise: v = Promise.resolve() } = {}) {
  let h, p = new ni(), y = me("SMUI:addLayoutListener"), _, L = o, I = s, E = u;
  function A() {
    n ? (d("mdc-ripple-surface"), a === "primary" ? (d("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : a === "secondary" ? (f("smui-ripple-surface--primary"), d("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), h && L !== o && (L = o, o ? h.activate() : o === !1 && h.deactivate()), t && !h ? (h = new Wh({
      addClass: d,
      browserSupportsCssVars: () => Nh(window),
      computeBoundingRect: () => (l || e).getBoundingClientRect(),
      containsEventTarget: (S) => e.contains(S),
      deregisterDocumentInteractionHandler: (S, w) => p.off(document.documentElement, S, w),
      deregisterInteractionHandler: (S, w) => p.off(s || e, S, w),
      deregisterResizeHandler: (S) => window.removeEventListener("resize", S),
      getWindowPageOffset: () => {
        var S, w;
        return {
          x: (S = window.pageXOffset) !== null && S !== void 0 ? S : window.scrollX,
          y: (w = window.pageYOffset) !== null && w !== void 0 ? w : window.scrollY
        };
      },
      isSurfaceActive: () => o ?? Kh(u || e, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (S, w) => {
        const D = ms();
        p.on(document.documentElement, S, w, typeof D == "boolean" ? { capture: D } : D);
      },
      registerInteractionHandler: (S, w) => {
        const D = ms();
        p.on(s || e, S, w, typeof D == "boolean" ? { capture: D } : D);
      },
      registerResizeHandler: (S) => p.on(window, "resize", S),
      removeClass: f,
      updateCssVariable: g
    }), v.then(() => {
      h && (h.init(), h.setUnbounded(r));
    })) : h && !t && v.then(() => {
      h && (h.destroy(), h = void 0, p.clear());
    }), h && (I !== s || E !== u) && (I = s, E = u, h.destroy(), requestAnimationFrame(() => {
      h && (h.init(), h.setUnbounded(r));
    })), !t && r && d("mdc-ripple-upgraded--unbounded");
  }
  A(), y && (_ = y(b));
  function b() {
    h && h.layout();
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
        rippleElement: l,
        eventTarget: s,
        activeTarget: u,
        addClass: d,
        removeClass: f,
        addStyle: g,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (w) => e.classList.add(w), removeClass: (w) => e.classList.remove(w), addStyle: (w, D) => e.style.setProperty(w, D), initPromise: Promise.resolve() }, S)), A();
    },
    destroy() {
      h && (h.destroy(), h = void 0, p.clear(), f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
function tr(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "component", 3, Oi), a = m(t, "tag", 3, "span"), o = /* @__PURE__ */ qe(t, [
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
  var f = { getElement: d }, g = Y(), v = V(g);
  {
    let h = /* @__PURE__ */ ge(() => Ve({
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
    $r(v, i, (p, y) => {
      Ee(
        y(p, ht(
          {
            get tag() {
              return a();
            },
            get use() {
              return n();
            },
            get class() {
              return c(h);
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
            children: (_, L) => {
              var I = Y(), E = V(I);
              le(E, () => t.children ?? ee), x(_, I);
            },
            $$slots: { default: !0 }
          }
        )),
        (_) => l = _,
        () => l
      );
    });
  }
  return x(e, g), xe(f);
}
function Qh(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "on", 3, !1), a = m(t, "component", 3, Oi), o = m(t, "tag", 3, "i"), l = /* @__PURE__ */ qe(t, [
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
  const u = /* @__PURE__ */ ge(() => o() === "svg" || a() === ev), d = me("SMUI:icon:context");
  function f() {
    return s.getElement();
  }
  var g = { getElement: f }, v = Y(), h = V(v);
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
    $r(h, a, (y, _) => {
      Ee(
        _(y, ht(
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
            children: (L, I) => {
              var E = Y(), A = V(E);
              le(A, () => t.children ?? ee), x(L, E);
            },
            $$slots: { default: !0 }
          }
        )),
        (L) => s = L,
        () => s
      );
    });
  }
  return x(e, v), xe(g);
}
var Jh = /* @__PURE__ */ Zt("<svg><!></svg>");
function Oi(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "tag", 3, "div"), i = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  var s = { getElement: l }, u = Y(), d = V(u);
  {
    var f = (v) => {
      var h = Jh();
      Ze(h, () => ({ ...i }));
      var p = de(h);
      le(p, () => t.children ?? ee), Ee(h, (y) => o = y, () => o), We(h, (y, _) => q == null ? void 0 : q(y, _), n), x(v, h);
    }, g = (v) => {
      var h = Y(), p = V(h);
      {
        var y = (L) => {
          var I = Y(), E = V(I);
          Wo(E, r, !1, (A, b) => {
            Ee(A, (S) => o = S, () => o), We(A, (S, w) => q == null ? void 0 : q(S, w), n), Ze(A, () => ({ ...i }));
          }), x(L, I);
        }, _ = (L) => {
          var I = Y(), E = V(I);
          Wo(E, r, !1, (A, b) => {
            Ee(A, (D) => o = D, () => o), We(A, (D, B) => q == null ? void 0 : q(D, B), n), Ze(A, () => ({ ...i }));
            var S = Y(), w = V(S);
            le(w, () => t.children ?? ee), x(b, S);
          }), x(L, I);
        };
        ie(
          p,
          (L) => {
            c(a) ? L(y) : L(_, !1);
          },
          !0
        );
      }
      x(v, h);
    };
    ie(d, (v) => {
      r() === "svg" ? v(f) : v(g, !1);
    });
  }
  return x(e, u), xe(s);
}
var $h = /* @__PURE__ */ Zt("<svg><!></svg>");
function ev(e, t) {
  Ae(t, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let n = m(t, "use", 19, () => []), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var o = { getElement: a }, l = $h();
  Ze(l, () => ({ ...r }));
  var s = de(l);
  return le(s, () => t.children ?? ee), Ee(l, (u) => i = u, () => i), We(l, (u, d) => q == null ? void 0 : q(u, d), n), x(e, l), xe(o);
}
function Ni(e, t) {
  Ae(t, !0);
  const [n, r] = $n(), i = Bt(t.value);
  ce(t.key, i), Fe(() => {
    jn(i, t.value);
  }), Er(() => {
    i.set(void 0);
  });
  var a = Y(), o = V(a);
  le(o, () => t.children ?? ee), x(e, a), xe(), r();
}
var tv = /* @__PURE__ */ J('<div class="mdc-button__touch"></div>'), nv = /* @__PURE__ */ J('<div class="mdc-button__ripple"></div> <!><!>', 1);
function rv(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "ripple", 3, !0), o = m(t, "color", 3, "primary"), l = m(t, "variant", 3, "text"), s = m(t, "touch", 3, !1), u = m(t, "action", 3, "close"), d = m(t, "defaultAction", 3, !1), f = m(t, "secondary", 3, !1), g = m(t, "component", 3, Oi), v = m(t, "tag", 19, () => t.href == null ? "button" : "a"), h = /* @__PURE__ */ qe(t, [
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
  ]), p, y = pe({}), _ = pe({}), L = me("SMUI:button:context");
  const I = /* @__PURE__ */ ge(() => L === "dialog:action" && u() != null ? { "data-mdc-dialog-action": u() } : { action: u() }), E = /* @__PURE__ */ ge(() => L === "dialog:action" && d() ? { "data-mdc-dialog-button-default": "" } : {}), A = /* @__PURE__ */ ge(() => L === "banner" ? {} : { secondary: f() });
  let b = t.disabled;
  Fe(() => {
    if (b !== t.disabled) {
      if (p) {
        const O = N();
        "blur" in O && O.blur();
      }
      b = h.disabled;
    }
  }), ce("SMUI:label:context", "button"), ce("SMUI:icon:context", "button");
  function S(O) {
    y[O] || (y[O] = !0);
  }
  function w(O) {
    (!(O in y) || y[O]) && (y[O] = !1);
  }
  function D(O, R) {
    _[O] != R && (R === "" || R == null ? delete _[O] : _[O] = R);
  }
  function B() {
    L === "banner" && it(N(), f() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function N() {
    return p.getElement();
  }
  var z = { getElement: N }, K = Y(), fe = V(K);
  {
    let O = /* @__PURE__ */ ge(() => [
      [
        Bn,
        {
          ripple: a(),
          unbounded: !1,
          color: o(),
          disabled: !!t.disabled,
          addClass: S,
          removeClass: w,
          addStyle: D
        }
      ],
      ...n()
    ]), R = /* @__PURE__ */ ge(() => Ve({
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
      ...y,
      [r()]: !0
    })), H = /* @__PURE__ */ ge(() => Object.entries(_).map(([P, X]) => `${P}: ${X};`).concat([i()]).join(" "));
    $r(fe, g, (P, X) => {
      Ee(
        X(P, ht(
          {
            get tag() {
              return v();
            },
            get use() {
              return c(O);
            },
            get class() {
              return c(R);
            },
            get style() {
              return c(H);
            }
          },
          () => c(I),
          () => c(E),
          () => c(A),
          {
            get href() {
              return t.href;
            }
          },
          () => h,
          {
            onclick: (k) => {
              var C;
              B(), (C = t.onclick) == null || C.call(t, k);
            },
            children: (k, C) => {
              var F = nv(), ae = oe(V(F), 2);
              le(ae, () => t.children ?? ee);
              var se = oe(ae);
              {
                var ue = (te) => {
                  var $ = tv();
                  x(te, $);
                };
                ie(se, (te) => {
                  s() && te(ue);
                });
              }
              x(k, F);
            },
            $$slots: { default: !0 }
          }
        )),
        (k) => p = k,
        () => p
      );
    });
  }
  return x(e, K), xe(z);
}
function ir(e, t) {
  Ae(t, !0);
  let n = m(t, "callback", 3, () => {
  }), r = m(t, "disabled", 3, !1), i = m(t, "variant", 3, "default"), a = m(t, "isAbortAction", 3, !1), o = m(t, "backgroundColor", 3, void 0);
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
        var d = Y(), f = V(d);
        le(f, () => t.children ?? ee), x(s, d);
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
var ki = {
  ICON_BUTTON_ON: "mdc-icon-button--on",
  ROOT: "mdc-icon-button"
}, An = {
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
    Et(t, e);
    function t(n) {
      var r = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
      return r.hasToggledAriaLabel = !1, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return ki;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return An;
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
      var n = this.adapter.getAttr(An.DATA_ARIA_LABEL_ON), r = this.adapter.getAttr(An.DATA_ARIA_LABEL_OFF);
      if (n && r) {
        if (this.adapter.getAttr(An.ARIA_PRESSED) !== null)
          throw new Error("MDCIconButtonToggleFoundation: Button should not set `aria-pressed` if it has a toggled aria label.");
        this.hasToggledAriaLabel = !0;
      } else
        this.adapter.setAttr(An.ARIA_PRESSED, String(this.isOn()));
    }, t.prototype.handleClick = function() {
      this.toggle(), this.adapter.notifyChange({ isOn: this.isOn() });
    }, t.prototype.isOn = function() {
      return this.adapter.hasClass(ki.ICON_BUTTON_ON);
    }, t.prototype.toggle = function(n) {
      if (n === void 0 && (n = !this.isOn()), n ? this.adapter.addClass(ki.ICON_BUTTON_ON) : this.adapter.removeClass(ki.ICON_BUTTON_ON), this.hasToggledAriaLabel) {
        var r = n ? this.adapter.getAttr(An.DATA_ARIA_LABEL_ON) : this.adapter.getAttr(An.DATA_ARIA_LABEL_OFF);
        this.adapter.setAttr(An.ARIA_LABEL, r || "");
      } else
        this.adapter.setAttr(An.ARIA_PRESSED, "" + n);
    }, t;
  }(Sn)
), av = /* @__PURE__ */ J('<div class="mdc-icon-button__touch"></div>'), ov = /* @__PURE__ */ J('<div class="mdc-icon-button__ripple"></div> <!><!>', 1);
function sv(e, t) {
  Ae(t, !0);
  let n = () => {
  };
  function r(C) {
    return C === n;
  }
  let i = m(t, "use", 19, () => []), a = m(t, "class", 3, ""), o = m(t, "style", 3, ""), l = m(t, "ripple", 3, !0), s = m(t, "toggle", 3, !1), u = m(t, "pressed", 15, n), d = m(t, "touch", 3, !1), f = m(t, "displayFlex", 3, !0), g = m(t, "size", 3, "normal"), v = m(t, "component", 3, Oi), h = m(t, "tag", 19, () => t.href == null ? "button" : "a"), p = /* @__PURE__ */ qe(t, [
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
  ]), y, _, L = /* @__PURE__ */ be(pe({})), I = pe({}), E = /* @__PURE__ */ be(pe({})), A = me("SMUI:icon-button:context"), b = me("SMUI:icon-button:aria-describedby");
  const S = /* @__PURE__ */ ge(() => {
    if (A === "data-table:pagination")
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
    else return A === "dialog:header" || A === "dialog:sheet" ? { "data-mdc-dialog-action": t.action } : { action: t.action };
  });
  let w = !!t.disabled;
  Fe(() => {
    if (w != !!t.disabled) {
      if (y) {
        const C = H();
        "blur" in C && C.blur();
      }
      w = !!t.disabled;
    }
  }), ce("SMUI:icon:context", "icon-button");
  let D = null;
  Fe(() => {
    y && H() && s() !== D && (s() && !_ ? (_ = new iv({
      addClass: N,
      hasClass: B,
      notifyChange: (C) => {
        R(C), it(H(), "SMUIIconButtonToggleChange", C);
      },
      removeClass: z,
      getAttr: fe,
      setAttr: O
    }), _.init()) : !s() && _ && (_.destroy(), _ = void 0, W(L, {}, !0), W(E, {}, !0)), D = s());
  }), Fe(() => {
    _ && !r(u()) && _.isOn() !== u() && _.toggle(u());
  }), Er(() => {
    _ && _.destroy();
  });
  function B(C) {
    return C in c(L) ? c(L)[C] : H().classList.contains(C);
  }
  function N(C) {
    c(L)[C] || (c(L)[C] = !0);
  }
  function z(C) {
    (!(C in c(L)) || c(L)[C]) && (c(L)[C] = !1);
  }
  function K(C, F) {
    I[C] != F && (F === "" || F == null ? delete I[C] : I[C] = F);
  }
  function fe(C) {
    return C in c(E) ? c(E)[C] ?? null : H().getAttribute(C);
  }
  function O(C, F) {
    c(E)[C] !== F && (c(E)[C] = F);
  }
  function R(C) {
    u(C.isOn);
  }
  function H() {
    return y.getElement();
  }
  var P = { getElement: H }, X = Y(), k = V(X);
  {
    let C = /* @__PURE__ */ ge(() => [
      [
        Bn,
        {
          ripple: l(),
          unbounded: !0,
          color: t.color,
          disabled: !!t.disabled,
          addClass: N,
          removeClass: z,
          addStyle: K
        }
      ],
      ...i()
    ]), F = /* @__PURE__ */ ge(() => Ve({
      "mdc-icon-button": !0,
      "mdc-icon-button--on": !r(u()) && u(),
      "mdc-icon-button--touch": d(),
      "mdc-icon-button--display-flex": f(),
      "smui-icon-button--size-button": g() === "button",
      "smui-icon-button--size-mini": g() === "mini",
      "mdc-icon-button--reduced-size": g() === "mini" || g() === "button",
      "mdc-card__action": A === "card:action",
      "mdc-card__action--icon": A === "card:action",
      "mdc-top-app-bar__navigation-icon": A === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": A === "top-app-bar:action",
      "mdc-snackbar__dismiss": A === "snackbar:actions",
      "mdc-data-table__pagination-button": A === "data-table:pagination",
      "mdc-data-table__sort-icon-button": A === "data-table:sortable-header-cell",
      "mdc-dialog__close": (A === "dialog:header" || A === "dialog:sheet") && t.action === "close",
      ...c(L),
      [a()]: !0
    })), ae = /* @__PURE__ */ ge(() => Object.entries(I).map(([te, $]) => `${te}: ${$};`).concat([o()]).join(" ")), se = /* @__PURE__ */ ge(() => r(u()) ? null : u() ? "true" : "false"), ue = /* @__PURE__ */ ge(() => u() ? t.ariaLabelOn : t.ariaLabelOff);
    $r(k, v, (te, $) => {
      Ee(
        $(te, ht(
          {
            get tag() {
              return h();
            },
            get use() {
              return c(C);
            },
            get class() {
              return c(F);
            },
            get style() {
              return c(ae);
            },
            get "aria-pressed"() {
              return c(se);
            },
            get "aria-label"() {
              return c(ue);
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
            onclick: (re) => {
              var Ie;
              _ && _.handleClick(), A === "top-app-bar:navigation" && it(H(), "SMUITopAppBarIconButtonNav"), (Ie = t.onclick) == null || Ie.call(t, re);
            },
            children: (re, Ie) => {
              var De = ov(), _e = oe(V(De), 2);
              le(_e, () => t.children ?? ee);
              var Re = oe(_e);
              {
                var He = (Pe) => {
                  var ze = av();
                  x(Pe, ze);
                };
                ie(Re, (Pe) => {
                  d() && Pe(He);
                });
              }
              x(re, De);
            },
            $$slots: { default: !0 }
          }
        )),
        (re) => y = re,
        () => y
      );
    });
  }
  return x(e, X), xe(P);
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
        children: (l, s) => {
          var u = bt();
          ye(() => $e(u, r())), x(l, u);
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
    Et(t, e);
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
  }(Sn)
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
    Et(t, e);
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
  }(Sn)
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
    Et(t, e);
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
  }(Sn)
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
var Pa = {
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
    Et(t, e);
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
        return Pa;
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
        for (var o = Lt(ys), l = o.next(); !l.done; l = o.next()) {
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
        for (var u = Lt(Es), d = u.next(); !d.done; d = u.next()) {
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
        for (var o = Lt(ys), l = o.next(); !l.done; l = o.next()) {
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
        for (var u = Lt(Es), d = u.next(); !d.done; d = u.next()) {
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
        a && o ? this.adapter.setInputAttr(Pa.ARIA_DESCRIBEDBY, o) : this.adapter.removeInputAttr(Pa.ARIA_DESCRIBEDBY);
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
  }(Sn)
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
    Et(t, e);
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
        for (var i = Lt(Cs), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Lt(Cs), a = i.next(); !a.done; a = i.next()) {
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
  }(Sn)
), Ev = /* @__PURE__ */ J("<span><!></span>"), Sv = /* @__PURE__ */ J("<label><!></label>");
function As(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "floatAbove", 15, !1), o = m(t, "required", 15, !1), l = m(t, "wrapped", 3, !1), s = /* @__PURE__ */ qe(t, [
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
  ]), u, d = /* @__PURE__ */ be(void 0), f = new ni(), g = pe({}), v = pe({}), h = me("SMUI:generic:input:props") ?? {}, p = a();
  Fe(() => {
    c(d) && p !== a() && (p = a(), c(d).float(a()));
  });
  let y = o();
  Fe(() => {
    c(d) && y !== o() && (y = o(), c(d).setRequired(o()));
  });
  const _ = me("SMUI:floating-label:mount"), L = me("SMUI:floating-label:unmount");
  yt(() => {
    W(
      d,
      new cv({
        addClass: I,
        removeClass: E,
        getWidth: () => {
          var C, F;
          const P = N(), X = P.cloneNode(!0);
          (C = P.parentNode) == null || C.appendChild(X), X.classList.add("smui-floating-label--remove-transition"), X.classList.add("smui-floating-label--force-size"), X.classList.remove("mdc-floating-label--float-above");
          const k = X.scrollWidth;
          return (F = P.parentNode) == null || F.removeChild(X), k;
        },
        registerInteractionHandler: (P, X) => f.on(N(), P, X),
        deregisterInteractionHandler: (P, X) => f.off(N(), P, X)
      }),
      !0
    );
    const H = {
      get element() {
        return N();
      },
      addStyle: A,
      removeStyle: b
    };
    return _ && _(H), c(d).init(), () => {
      var P;
      L && L(H), (P = c(d)) == null || P.destroy(), f.clear();
    };
  });
  function I(H) {
    g[H] || (g[H] = !0);
  }
  function E(H) {
    (!(H in g) || g[H]) && (g[H] = !1);
  }
  function A(H, P) {
    v[H] != P && (P === "" || P == null ? delete v[H] : v[H] = P);
  }
  function b(H) {
    H in v && delete v[H];
  }
  function S(H) {
    var P;
    (P = c(d)) == null || P.shake(H);
  }
  function w(H) {
    a(H);
  }
  function D(H) {
    o(H);
  }
  function B() {
    if (c(d) == null)
      throw new Error("Instance is undefined.");
    return c(d).getWidth();
  }
  function N() {
    return u;
  }
  var z = { shake: S, float: w, setRequired: D, getWidth: B, getElement: N }, K = Y(), fe = V(K);
  {
    var O = (H) => {
      var P = Ev();
      Ze(P, (k, C) => ({ class: k, style: C, ...s }), [
        () => Ve({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": o(),
          ...g,
          [r()]: !0
        }),
        () => Object.entries(v).map(([k, C]) => `${k}: ${C};`).concat([i()]).join(" ")
      ]);
      var X = de(P);
      le(X, () => t.children ?? ee), Ee(P, (k) => u = k, () => u), We(P, (k, C) => q == null ? void 0 : q(k, C), n), x(H, P);
    }, R = (H) => {
      var P = Sv();
      Ze(
        P,
        (k, C) => ({
          class: k,
          style: C,
          for: t.for || (h ? h.id : void 0),
          ...s
        }),
        [
          () => Ve({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": o(),
            ...g,
            [r()]: !0
          }),
          () => Object.entries(v).map(([k, C]) => `${k}: ${C};`).concat([i()]).join(" ")
        ]
      );
      var X = de(P);
      le(X, () => t.children ?? ee), Ee(P, (k) => u = k, () => u), We(P, (k, C) => q == null ? void 0 : q(k, C), n), x(H, P);
    };
    ie(fe, (H) => {
      l() ? H(O) : H(R, !1);
    });
  }
  return x(e, K), xe(z);
}
var Cv = /* @__PURE__ */ J("<div></div>");
function Av(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "active", 3, !1), o = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), l, s = /* @__PURE__ */ be(void 0), u = new ni(), d = pe({}), f = pe({});
  yt(() => (W(
    s,
    new dv({
      addClass: v,
      removeClass: h,
      hasClass: g,
      setStyle: p,
      registerEventHandler: (b, S) => u.on(I(), b, S),
      deregisterEventHandler: (b, S) => u.off(I(), b, S)
    }),
    !0
  ), c(s).init(), () => {
    var b;
    (b = c(s)) == null || b.destroy(), u.clear();
  }));
  function g(b) {
    return b in d ? d[b] : I().classList.contains(b);
  }
  function v(b) {
    d[b] || (d[b] = !0);
  }
  function h(b) {
    (!(b in d) || d[b]) && (d[b] = !1);
  }
  function p(b, S) {
    f[b] != S && (S === "" || S == null ? delete f[b] : f[b] = S);
  }
  function y() {
    var b;
    (b = c(s)) == null || b.activate();
  }
  function _() {
    var b;
    (b = c(s)) == null || b.deactivate();
  }
  function L(b) {
    var S;
    (S = c(s)) == null || S.setRippleCenter(b);
  }
  function I() {
    return l;
  }
  var E = { activate: y, deactivate: _, setRippleCenter: L, getElement: I }, A = Cv();
  return Ze(A, (b, S) => ({ class: b, style: S, ...o }), [
    () => Ve({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...d,
      [r()]: !0
    }),
    () => Object.entries(f).map(([b, S]) => `${b}: ${S};`).concat([i()]).join(" ")
  ]), Ee(A, (b) => l = b, () => l), We(A, (b, S) => q == null ? void 0 : q(b, S), n), x(e, A), xe(E);
}
var xv = /* @__PURE__ */ J('<div class="mdc-notched-outline__notch"><!></div>'), Iv = /* @__PURE__ */ J('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function wv(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "notched", 3, !1), a = m(t, "noLabel", 3, !1), o = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), l, s = /* @__PURE__ */ be(void 0), u = /* @__PURE__ */ be(void 0), d = pe({}), f = pe({}), g;
  Fe(() => {
    c(u) !== g && (c(u) ? (c(u).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      c(u) && c(u).removeStyle("transition-duration");
    })) : h("mdc-notched-outline--upgraded"), g = c(u));
  }), ce("SMUI:floating-label:mount", (w) => {
    W(u, w, !0);
  }), ce("SMUI:floating-label:unmount", () => {
    W(u, void 0);
  }), yt(() => (W(
    s,
    new vv({
      addClass: v,
      removeClass: h,
      setNotchWidthProperty: (w) => p("width", w + "px"),
      removeNotchWidthProperty: () => y("width")
    }),
    !0
  ), c(s).init(), () => {
    var w;
    (w = c(s)) == null || w.destroy();
  }));
  function v(w) {
    d[w] || (d[w] = !0);
  }
  function h(w) {
    (!(w in d) || d[w]) && (d[w] = !1);
  }
  function p(w, D) {
    f[w] != D && (D === "" || D == null ? delete f[w] : f[w] = D);
  }
  function y(w) {
    w in f && delete f[w];
  }
  function _(w) {
    var D;
    (D = c(s)) == null || D.notch(w);
  }
  function L() {
    var w;
    (w = c(s)) == null || w.closeNotch();
  }
  function I() {
    return l;
  }
  var E = { notch: _, closeNotch: L, getElement: I }, A = Iv();
  Ze(A, (w) => ({ class: w, ...o }), [
    () => Ve({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...d,
      [r()]: !0
    })
  ]);
  var b = oe(de(A), 2);
  {
    var S = (w) => {
      var D = xv(), B = de(D);
      le(B, () => t.children ?? ee), ye((N) => Nt(D, N), [
        () => Object.entries(f).map(([N, z]) => `${N}: ${z};`).join(" ")
      ]), x(w, D);
    };
    ie(b, (w) => {
      a() || w(S);
    });
  }
  return Ee(A, (w) => l = w, () => l), We(A, (w, D) => q == null ? void 0 : q(w, D), n), x(e, A), xe(E);
}
function Ri(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "component", 3, Oi), a = m(t, "tag", 3, "div"), o = m(t, "_smuiClass", 3, ""), l = m(t, "_smuiClassMap", 23, () => ({})), s = m(t, "_smuiContexts", 19, () => ({})), u = m(t, "_smuiProps", 19, () => ({})), d = /* @__PURE__ */ qe(t, [
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
  const g = [];
  Object.entries(l()).forEach(([_, L]) => {
    const I = me(L);
    I && "subscribe" in I && g.push(I.subscribe((E) => {
      l()[_] = E;
    }));
  });
  for (let _ in s())
    s().hasOwnProperty(_) && ce(_, s()[_]);
  Er(() => {
    for (const _ of g)
      _();
  });
  function v() {
    return f.getElement();
  }
  var h = { getElement: v }, p = Y(), y = V(p);
  {
    let _ = /* @__PURE__ */ ge(() => Ve({
      [o()]: !0,
      ...l(),
      [r()]: !0
    }));
    $r(y, i, (L, I) => {
      Ee(
        I(L, ht(
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
          u,
          () => d,
          {
            children: (E, A) => {
              var b = Y(), S = V(b);
              le(S, () => t.children ?? ee), x(E, b);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => f = E,
        () => f
      );
    });
  }
  return x(e, p), xe(h);
}
function Lv(e, t) {
  Ae(t, !0);
  let n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Ri(e, ht({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (o, l) => {
        var s = Y(), u = V(s);
        le(u, () => t.children ?? ee), x(o, s);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), xe(a);
}
function Tv(e, t) {
  Ae(t, !0);
  let n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Ri(e, ht(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (o, l) => {
          var s = Y(), u = V(s);
          le(u, () => t.children ?? ee), x(o, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
function Ov(e, t) {
  Ae(t, !0);
  let n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Ri(e, ht(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (o, l) => {
          var s = Y(), u = V(s);
          le(u, () => t.children ?? ee), x(o, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
var Rv = /* @__PURE__ */ J("<input/>");
function Hv(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "type", 3, "text"), a = m(t, "placeholder", 3, " "), o = m(t, "value", 15), l = m(t, "files", 15, null), s = m(t, "dirty", 15, !1), u = m(t, "invalid", 15, !1), d = m(t, "updateInvalid", 3, !0), f = m(t, "initialInvalid", 3, !1), g = m(t, "emptyValueNull", 19, () => o() === null), v = m(t, "emptyValueUndefined", 19, () => o() === void 0), h = /* @__PURE__ */ qe(t, [
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
  ]), p, y = pe({}), _ = pe({});
  Fe(() => {
    i() === "file" ? delete _.value : _.value = o() == null ? "" : o();
  }), yt(() => {
    d() && f() && u(B().matches(":invalid"));
  });
  function L(O) {
    return O === "" ? Number.NaN : +O;
  }
  function I(O) {
    if (i() === "file") {
      l(O.currentTarget.files);
      return;
    }
    if (O.currentTarget.value === "" && g()) {
      o(null);
      return;
    }
    if (O.currentTarget.value === "" && v()) {
      o(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        o(L(O.currentTarget.value));
        break;
      default:
        o(O.currentTarget.value);
        break;
    }
  }
  function E(O) {
    (i() === "file" || i() === "range") && I(O), s(!0), d() && u(B().matches(":invalid"));
  }
  function A(O) {
    return O in y ? y[O] ?? null : B().getAttribute(O);
  }
  function b(O, R) {
    y[O] !== R && (y[O] = R);
  }
  function S(O) {
    (!(O in y) || y[O] != null) && (y[O] = void 0);
  }
  function w() {
    B().focus();
  }
  function D() {
    B().blur();
  }
  function B() {
    return p;
  }
  var N = { getAttr: A, addAttr: b, removeAttr: S, focus: w, blur: D, getElement: B }, z = Rv(), K = (O) => {
    var R;
    i() !== "file" && I(O), (R = t.oninput) == null || R.call(t, O);
  }, fe = (O) => {
    var R;
    E(O), (R = t.onchange) == null || R.call(t, O);
  };
  return Ze(
    z,
    (O) => ({
      class: O,
      type: i(),
      placeholder: a(),
      ..._,
      ...y,
      ...h,
      oninput: K,
      onchange: fe
    }),
    [
      () => Ve({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ee(z, (O) => p = O, () => p), We(z, (O, R) => q == null ? void 0 : q(O, R), n), x(e, z), xe(N);
}
var Dv = /* @__PURE__ */ J("<textarea></textarea>");
function Pv(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "style", 3, ""), a = m(t, "value", 15, ""), o = m(t, "dirty", 15, !1), l = m(t, "invalid", 15, !1), s = m(t, "updateInvalid", 3, !0), u = m(t, "initialInvalid", 3, !1), d = m(t, "resizable", 3, !0), f = /* @__PURE__ */ qe(t, [
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
  ]), g, v = pe({});
  yt(() => {
    s() && u() && l(E().matches(":invalid"));
  });
  function h() {
    o(!0), s() && l(E().matches(":invalid"));
  }
  function p(w) {
    return w in v ? v[w] ?? null : E().getAttribute(w);
  }
  function y(w, D) {
    v[w] !== D && (v[w] = D);
  }
  function _(w) {
    (!(w in v) || v[w] != null) && (v[w] = void 0);
  }
  function L() {
    E().focus();
  }
  function I() {
    E().blur();
  }
  function E() {
    return g;
  }
  var A = { getAttr: p, addAttr: y, removeAttr: _, focus: L, blur: I, getElement: E }, b = Dv(), S = (w) => {
    var D;
    h(), (D = t.onchange) == null || D.call(t, w);
  };
  return Ze(
    b,
    (w) => ({
      class: w,
      style: `${d() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...f,
      onchange: S
    }),
    [
      () => Ve({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ee(b, (w) => g = w, () => g), We(b, (w, D) => q == null ? void 0 : q(w, D), n), wi(() => Qa(b, a)), x(e, b), xe(A);
}
var Mv = /* @__PURE__ */ J('<span class="mdc-text-field__ripple"></span>'), Bv = /* @__PURE__ */ J("<!> <!>", 1), Uv = /* @__PURE__ */ J("<span><!> <!></span>"), Fv = /* @__PURE__ */ J("<!> <!> <!>", 1), Nv = /* @__PURE__ */ J("<label><!> <!> <!> <!> <!> <!> <!></label>"), kv = /* @__PURE__ */ J("<div><!> <!> <!> <!> <!></div>"), Gv = /* @__PURE__ */ J("<!> <!>", 1);
function xs(e, t) {
  Ae(t, !0);
  const { applyPassive: n } = uu;
  let r = () => {
  };
  function i(U) {
    return U === r;
  }
  let a = m(t, "use", 19, () => []), o = m(t, "class", 3, ""), l = m(t, "style", 3, ""), s = m(t, "ripple", 3, !0), u = m(t, "disabled", 3, !1), d = m(t, "required", 3, !1), f = m(t, "textarea", 3, !1), g = m(t, "variant", 19, () => f() ? "outlined" : "standard"), v = m(t, "noLabel", 3, !1), h = m(t, "type", 3, "text"), p = m(t, "value", 15), y = m(t, "files", 15, r), _ = m(t, "invalid", 15, r), L = m(t, "updateInvalid", 19, () => i(_())), I = m(t, "initialInvalid", 3, !1), E = m(t, "dirty", 15, !1), A = m(t, "validateOnValueChange", 19, L), b = m(t, "useNativeValidation", 19, L), S = m(t, "withLeadingIcon", 3, r), w = m(t, "withTrailingIcon", 3, r), D = m(t, "input", 7), B = m(t, "floatingLabel", 7), N = m(t, "lineRipple", 7), z = m(t, "notchedOutline", 7), K = /* @__PURE__ */ qe(t, [
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
  const fe = p() !== void 0 || p() === void 0 && t.input$emptyValueUndefined || !i(y());
  i(y()) && y(null), i(_()) && _(!1);
  let O, R = /* @__PURE__ */ be(void 0), H = new ni(), P = pe({}), X = pe({}), k = /* @__PURE__ */ be(void 0), C = /* @__PURE__ */ be(!1), F = /* @__PURE__ */ be(pe(I())), ae = me("SMUI:addLayoutListener"), se, ue, te = new Promise((U) => ue = U), $, re, Ie, De;
  const _e = /* @__PURE__ */ ge(() => D() && D().getElement());
  Fe(() => {
    (E() || c(F) || !L()) && c(R) && c(R).isValid() !== !_() && (L() ? _(!c(R).isValid()) : c(R).setValid(!_()));
  }), Fe(() => {
    c(R) && c(R).getValidateOnValueChange() !== A() && c(R).setValidateOnValueChange(i(A()) ? !1 : A());
  }), Fe(() => {
    c(R) && c(R).setUseNativeValidation(i(b()) ? !0 : b());
  }), Fe(() => {
    c(R) && c(R).setDisabled(u());
  });
  let Re = p();
  Fe(() => {
    if (c(R) && fe && Re !== p()) {
      Re = p();
      const U = `${p() == null ? "" : p()}`;
      c(R).getValue() !== U && c(R).setValue(U);
    }
  }), ae && (se = ae(T)), ce("SMUI:textfield:leading-icon:mount", (U) => {
    $ = U;
  }), ce("SMUI:textfield:leading-icon:unmount", () => {
    $ = void 0;
  }), ce("SMUI:textfield:trailing-icon:mount", (U) => {
    re = U;
  }), ce("SMUI:textfield:trailing-icon:unmount", () => {
    re = void 0;
  }), ce("SMUI:textfield:helper-text:id", (U) => {
    W(k, U, !0);
  }), ce("SMUI:textfield:helper-text:mount", (U) => {
    Ie = U;
  }), ce("SMUI:textfield:helper-text:unmount", () => {
    W(k, void 0), Ie = void 0;
  }), ce("SMUI:textfield:character-counter:mount", (U) => {
    De = U;
  }), ce("SMUI:textfield:character-counter:unmount", () => {
    De = void 0;
  }), yt(() => {
    var U;
    if (W(
      R,
      new bv(
        {
          // getRootAdapterMethods_
          addClass: Pe,
          removeClass: ze,
          hasClass: He,
          registerTextFieldInteractionHandler: (Z, Ye) => H.on(M(), Z, Ye),
          deregisterTextFieldInteractionHandler: (Z, Ye) => H.off(M(), Z, Ye),
          registerValidationAttributeChangeHandler: (Z) => {
            const Ye = (rt) => rt.map((Yt) => Yt.attributeName).filter((Yt) => Yt), lt = new MutationObserver((rt) => {
              b() && Z(Ye(rt));
            }), ut = { attributes: !0 };
            return D() && lt.observe(D().getElement(), ut), lt;
          },
          deregisterValidationAttributeChangeHandler: (Z) => {
            Z.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Z;
            return ((Z = D()) == null ? void 0 : Z.getElement()) ?? null;
          },
          setInputAttr: (Z, Ye) => {
            var lt;
            (lt = D()) == null || lt.addAttr(Z, Ye);
          },
          removeInputAttr: (Z) => {
            var Ye;
            (Ye = D()) == null || Ye.removeAttr(Z);
          },
          isFocused: () => {
            var Z;
            return document.activeElement === ((Z = D()) == null ? void 0 : Z.getElement());
          },
          registerInputInteractionHandler: (Z, Ye) => {
            var ut;
            const lt = (ut = D()) == null ? void 0 : ut.getElement();
            if (lt) {
              const rt = n();
              H.on(lt, Z, Ye, typeof rt == "boolean" ? { capture: rt } : rt);
            }
          },
          deregisterInputInteractionHandler: (Z, Ye) => {
            var ut;
            const lt = (ut = D()) == null ? void 0 : ut.getElement();
            lt && H.off(lt, Z, Ye);
          },
          // getLabelAdapterMethods_
          floatLabel: (Z) => B() && B().float(Z),
          getLabelWidth: () => B() ? B().getWidth() : 0,
          hasLabel: () => !!B(),
          shakeLabel: (Z) => B() && B().shake(Z),
          setLabelRequired: (Z) => B() && B().setRequired(Z),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => N() && N().activate(),
          deactivateLineRipple: () => N() && N().deactivate(),
          setLineRippleTransformOrigin: (Z) => N() && N().setRippleCenter(Z),
          // getOutlineAdapterMethods_
          closeOutline: () => z() && z().closeNotch(),
          hasOutline: () => !!z(),
          notchOutline: (Z) => z() && z().notch(Z)
        },
        {
          get helperText() {
            return Ie;
          },
          get characterCounter() {
            return De;
          },
          get leadingIcon() {
            return $;
          },
          get trailingIcon() {
            return re;
          }
        }
      ),
      !0
    ), fe) {
      if (D() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (U = c(R)) == null || U.init();
    } else
      Al().then(() => {
        var Z;
        if (D() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Z = c(R)) == null || Z.init();
      });
    return ue(), () => {
      var Z;
      (Z = c(R)) == null || Z.destroy(), H.clear();
    };
  }), Er(() => {
    se && se();
  });
  function He(U) {
    return U in P ? P[U] ?? null : M().classList.contains(U);
  }
  function Pe(U) {
    P[U] || (P[U] = !0);
  }
  function ze(U) {
    (!(U in P) || P[U]) && (P[U] = !1);
  }
  function he(U, Z) {
    X[U] != Z && (Z === "" || Z == null ? delete X[U] : X[U] = Z);
  }
  function Le() {
    var U;
    (U = D()) == null || U.focus();
  }
  function Be() {
    var U;
    (U = D()) == null || U.blur();
  }
  function T() {
    if (c(R)) {
      const U = c(R).shouldFloat;
      c(R).notchOutline(U);
    }
  }
  function M() {
    return O;
  }
  var Q = { focus: Le, blur: Be, layout: T, getElement: M }, Me = Gv(), et = V(Me);
  {
    var St = (U) => {
      var Z = Nv();
      Ze(Z, (Te, Ne, Je) => ({ class: Te, style: Ne, for: void 0, ...Je }), [
        () => Ve({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": g() === "filled",
          "mdc-text-field--outlined": g() === "outlined",
          "smui-text-field--standard": g() === "standard" && !f(),
          "mdc-text-field--no-label": v() || t.label == null,
          "mdc-text-field--label-floating": c(C) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": i(S()) ? t.leadingIcon : S(),
          "mdc-text-field--with-trailing-icon": i(w()) ? t.trailingIcon : w(),
          "mdc-text-field--with-internal-counter": f() && t.internalCounter,
          "mdc-text-field--invalid": _(),
          ...P,
          [o()]: !0
        }),
        () => Object.entries(X).map(([Te, Ne]) => `${Te}: ${Ne};`).concat([l()]).join(" "),
        () => ra(K, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ye = de(Z);
      {
        var lt = (Te) => {
          var Ne = Bv(), Je = V(Ne);
          {
            var Ot = (Ke) => {
              var dt = Mv();
              x(Ke, dt);
            };
            ie(Je, (Ke) => {
              g() === "filled" && Ke(Ot);
            });
          }
          var tn = oe(Je, 2);
          {
            var nt = (Ke) => {
              {
                let dt = /* @__PURE__ */ ge(() => c(C) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), ke = /* @__PURE__ */ ge(() => sn(K, "label$"));
                Ee(
                  As(Ke, ht(
                    {
                      get floatAbove() {
                        return c(dt);
                      },
                      get required() {
                        return d();
                      },
                      wrapped: !0
                    },
                    () => c(ke),
                    {
                      children: (vt, Pn) => {
                        var gt = Y(), st = V(gt);
                        {
                          var At = (Rt) => {
                          }, nn = (Rt) => {
                            var rn = Y(), fn = V(rn);
                            {
                              var Ir = (hn) => {
                                var kt = bt();
                                ye(() => $e(kt, t.label)), x(hn, kt);
                              }, ri = (hn) => {
                                var kt = Y(), Mn = V(kt);
                                le(Mn, () => t.label), x(hn, kt);
                              };
                              ie(
                                fn,
                                (hn) => {
                                  typeof t.label == "string" ? hn(Ir) : hn(ri, !1);
                                },
                                !0
                              );
                            }
                            x(Rt, rn);
                          };
                          ie(st, (Rt) => {
                            t.label == null ? Rt(At) : Rt(nn, !1);
                          });
                        }
                        x(vt, gt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (vt) => B(vt),
                  () => B()
                );
              }
            };
            ie(tn, (Ke) => {
              !v() && t.label != null && Ke(nt);
            });
          }
          x(Te, Ne);
        };
        ie(Ye, (Te) => {
          !f() && g() !== "outlined" && Te(lt);
        });
      }
      var ut = oe(Ye, 2);
      {
        var rt = (Te) => {
          {
            let Ne = /* @__PURE__ */ ge(() => v() || t.label == null), Je = /* @__PURE__ */ ge(() => sn(K, "outline$"));
            Ee(
              wv(Te, ht(
                {
                  get noLabel() {
                    return c(Ne);
                  }
                },
                () => c(Je),
                {
                  children: (Ot, tn) => {
                    var nt = Y(), Ke = V(nt);
                    {
                      var dt = (ke) => {
                        {
                          let vt = /* @__PURE__ */ ge(() => c(C) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Pn = /* @__PURE__ */ ge(() => sn(K, "label$"));
                          Ee(
                            As(ke, ht(
                              {
                                get floatAbove() {
                                  return c(vt);
                                },
                                get required() {
                                  return d();
                                },
                                wrapped: !0
                              },
                              () => c(Pn),
                              {
                                children: (gt, st) => {
                                  var At = Y(), nn = V(At);
                                  {
                                    var Rt = (fn) => {
                                    }, rn = (fn) => {
                                      var Ir = Y(), ri = V(Ir);
                                      {
                                        var hn = (Mn) => {
                                          var ii = bt();
                                          ye(() => $e(ii, t.label)), x(Mn, ii);
                                        }, kt = (Mn) => {
                                          var ii = Y(), Pu = V(ii);
                                          le(Pu, () => t.label), x(Mn, ii);
                                        };
                                        ie(
                                          ri,
                                          (Mn) => {
                                            typeof t.label == "string" ? Mn(hn) : Mn(kt, !1);
                                          },
                                          !0
                                        );
                                      }
                                      x(fn, Ir);
                                    };
                                    ie(nn, (fn) => {
                                      t.label == null ? fn(Rt) : fn(rn, !1);
                                    });
                                  }
                                  x(gt, At);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (gt) => B(gt),
                            () => B()
                          );
                        }
                      };
                      ie(Ke, (ke) => {
                        !v() && t.label != null && ke(dt);
                      });
                    }
                    x(Ot, nt);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ot) => z(Ot),
              () => z()
            );
          }
        };
        ie(ut, (Te) => {
          (f() || g() === "outlined") && Te(rt);
        });
      }
      var Yt = oe(ut, 2);
      Ni(Yt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Te, Ne) => {
          var Je = Y(), Ot = V(Je);
          le(Ot, () => t.leadingIcon ?? ee), x(Te, Je);
        },
        $$slots: { default: !0 }
      });
      var xr = oe(Yt, 2);
      le(xr, () => t.children ?? ee);
      var tt = oe(xr, 2);
      {
        var Ct = (Te) => {
          var Ne = Uv(), Je = de(Ne);
          {
            let tn = /* @__PURE__ */ ge(() => sn(K, "input$"));
            Ee(
              Pv(Je, ht(
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
                    return c(F);
                  },
                  get "aria-controls"() {
                    return c(k);
                  },
                  get "aria-describedby"() {
                    return c(k);
                  }
                },
                () => c(tn),
                {
                  onblur: (nt) => {
                    var Ke;
                    W(C, !1), W(F, !0), it(M(), "blur", nt), (Ke = t.input$onblur) == null || Ke.call(t, nt);
                  },
                  onfocus: (nt) => {
                    var Ke;
                    W(C, !0), it(M(), "focus", nt), (Ke = t.input$onfocus) == null || Ke.call(t, nt);
                  },
                  get value() {
                    return p();
                  },
                  set value(nt) {
                    p(nt);
                  },
                  get dirty() {
                    return E();
                  },
                  set dirty(nt) {
                    E(nt);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(nt) {
                    _(nt);
                  }
                }
              )),
              (nt) => D(nt),
              () => D()
            );
          }
          var Ot = oe(Je, 2);
          le(Ot, () => t.internalCounter ?? ee), ye((tn) => Hl(Ne, 1, tn), [
            () => Rl(Ve({
              "mdc-text-field__resizer": !("input$resizable" in K) || t.input$resizable
            }))
          ]), x(Te, Ne);
        }, ct = (Te) => {
          var Ne = Fv(), Je = V(Ne);
          {
            var Ot = (dt) => {
              var ke = Y(), vt = V(ke);
              {
                var Pn = (st) => {
                  Tv(st, {
                    children: (At, nn) => {
                      var Rt = bt();
                      ye(() => $e(Rt, t.prefix)), x(At, Rt);
                    },
                    $$slots: { default: !0 }
                  });
                }, gt = (st) => {
                  var At = Y(), nn = V(At);
                  le(nn, () => t.prefix ?? ee), x(st, At);
                };
                ie(vt, (st) => {
                  typeof t.prefix == "string" ? st(Pn) : st(gt, !1);
                });
              }
              x(dt, ke);
            };
            ie(Je, (dt) => {
              t.prefix != null && dt(Ot);
            });
          }
          var tn = oe(Je, 2);
          {
            let dt = /* @__PURE__ */ ge(() => sn(K, "input$"));
            Ee(
              Hv(tn, ht(
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
                    return L();
                  },
                  get initialInvalid() {
                    return c(F);
                  },
                  get "aria-controls"() {
                    return c(k);
                  },
                  get "aria-describedby"() {
                    return c(k);
                  }
                },
                () => v() && t.label != null && typeof t.label == "string" ? { placeholder: t.label } : {},
                () => c(dt),
                {
                  onblur: (ke) => {
                    var vt;
                    W(C, !1), W(F, !0), it(M(), "blur", ke), (vt = t.input$onblur) == null || vt.call(t, ke);
                  },
                  onfocus: (ke) => {
                    var vt;
                    W(C, !0), it(M(), "focus", ke), (vt = t.input$onfocus) == null || vt.call(t, ke);
                  },
                  get value() {
                    return p();
                  },
                  set value(ke) {
                    p(ke);
                  },
                  get files() {
                    return y();
                  },
                  set files(ke) {
                    y(ke);
                  },
                  get dirty() {
                    return E();
                  },
                  set dirty(ke) {
                    E(ke);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(ke) {
                    _(ke);
                  }
                }
              )),
              (ke) => D(ke),
              () => D()
            );
          }
          var nt = oe(tn, 2);
          {
            var Ke = (dt) => {
              var ke = Y(), vt = V(ke);
              {
                var Pn = (st) => {
                  Ov(st, {
                    children: (At, nn) => {
                      var Rt = bt();
                      ye(() => $e(Rt, t.suffix)), x(At, Rt);
                    },
                    $$slots: { default: !0 }
                  });
                }, gt = (st) => {
                  var At = Y(), nn = V(At);
                  le(nn, () => t.suffix ?? ee), x(st, At);
                };
                ie(vt, (st) => {
                  typeof t.suffix == "string" ? st(Pn) : st(gt, !1);
                });
              }
              x(dt, ke);
            };
            ie(nt, (dt) => {
              t.suffix != null && dt(Ke);
            });
          }
          x(Te, Ne);
        };
        ie(tt, (Te) => {
          f() && typeof p() == "string" ? Te(Ct) : Te(ct, !1);
        });
      }
      var Cn = oe(tt, 2);
      Ni(Cn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Te, Ne) => {
          var Je = Y(), Ot = V(Je);
          le(Ot, () => t.trailingIcon ?? ee), x(Te, Je);
        },
        $$slots: { default: !0 }
      });
      var ya = oe(Cn, 2);
      {
        var Ea = (Te) => {
          {
            let Ne = /* @__PURE__ */ ge(() => sn(K, "ripple$"));
            Ee(Av(Te, ht(() => c(Ne))), (Je) => N(Je), () => N());
          }
        };
        ie(ya, (Te) => {
          !f() && g() !== "outlined" && s() && Te(Ea);
        });
      }
      Ee(Z, (Te) => O = Te, () => O), We(Z, (Te, Ne) => Bn == null ? void 0 : Bn(Te, Ne), () => ({
        ripple: !f() && g() === "filled",
        unbounded: !1,
        addClass: Pe,
        removeClass: ze,
        addStyle: he,
        eventTarget: c(_e),
        activeTarget: c(_e),
        initPromise: te
      })), We(Z, (Te, Ne) => q == null ? void 0 : q(Te, Ne), a), x(U, Z);
    }, ot = (U) => {
      var Z = kv();
      Ze(Z, (tt, Ct, ct) => ({ class: tt, style: Ct, ...ct }), [
        () => Ve({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": u(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": g() === "filled",
          "mdc-text-field--outlined": g() === "outlined",
          "smui-text-field--standard": g() === "standard" && !f(),
          "mdc-text-field--no-label": v() || t.label == null,
          "mdc-text-field--with-leading-icon": t.leadingIcon,
          "mdc-text-field--with-trailing-icon": t.trailingIcon,
          "mdc-text-field--invalid": _(),
          ...P,
          [o()]: !0
        }),
        () => Object.entries(X).map(([tt, Ct]) => `${tt}: ${Ct};`).concat([l()]).join(" "),
        () => ra(K, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Ye = de(Z);
      {
        var lt = (tt) => {
          var Ct = Y(), ct = V(Ct);
          le(ct, () => t.label ?? ee), x(tt, Ct);
        };
        ie(Ye, (tt) => {
          typeof t.label != "string" && tt(lt);
        });
      }
      var ut = oe(Ye, 2);
      Ni(ut, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (tt, Ct) => {
          var ct = Y(), Cn = V(ct);
          le(Cn, () => t.leadingIcon ?? ee), x(tt, ct);
        },
        $$slots: { default: !0 }
      });
      var rt = oe(ut, 2);
      le(rt, () => t.children ?? ee);
      var Yt = oe(rt, 2);
      Ni(Yt, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (tt, Ct) => {
          var ct = Y(), Cn = V(ct);
          le(Cn, () => t.trailingIcon ?? ee), x(tt, ct);
        },
        $$slots: { default: !0 }
      });
      var xr = oe(Yt, 2);
      le(xr, () => t.line ?? ee), Ee(Z, (tt) => O = tt, () => O), We(Z, (tt, Ct) => Bn == null ? void 0 : Bn(tt, Ct), () => ({
        ripple: s(),
        unbounded: !1,
        addClass: Pe,
        removeClass: ze,
        addStyle: he
      })), We(Z, (tt, Ct) => q == null ? void 0 : q(tt, Ct), a), x(U, Z);
    };
    ie(et, (U) => {
      fe ? U(St) : U(ot, !1);
    });
  }
  var Tt = oe(et, 2);
  {
    var j = (U) => {
      {
        let Z = /* @__PURE__ */ ge(() => sn(K, "helperLine$"));
        Lv(U, ht(() => c(Z), {
          children: (Ye, lt) => {
            var ut = Y(), rt = V(ut);
            le(rt, () => t.helper ?? ee), x(Ye, ut);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ie(Tt, (U) => {
      t.helper && U(j);
    });
  }
  return x(e, Me), xe(Q);
}
var jv = /* @__PURE__ */ J("<i><!></i>");
function Vv(e, t) {
  Ae(t, !0);
  const n = () => On(h, "$leadingStore", r), [r, i] = $n();
  let a = m(t, "use", 19, () => []), o = m(t, "class", 3, ""), l = m(t, "tabindex", 19, () => t.role === "button" ? 0 : -1), s = m(t, "disabled", 3, !1), u = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), d, f = /* @__PURE__ */ be(void 0), g = new ni(), v = pe({});
  const h = me("SMUI:textfield:icon:leading"), p = n();
  let y = /* @__PURE__ */ be(void 0);
  const _ = /* @__PURE__ */ ge(() => ({ role: t.role, tabindex: l() })), L = me("SMUI:textfield:leading-icon:mount"), I = me("SMUI:textfield:leading-icon:unmount"), E = me("SMUI:textfield:trailing-icon:mount"), A = me("SMUI:textfield:trailing-icon:unmount");
  yt(() => (W(
    f,
    new yv({
      getAttr: b,
      setAttr: S,
      removeAttr: w,
      setContent: (R) => {
        W(y, R, !0);
      },
      registerInteractionHandler: (R, H) => g.on(D(), R, H),
      deregisterInteractionHandler: (R, H) => g.off(D(), R, H),
      notifyIconAction: () => it(D(), "SMUITextFieldIcon")
    }),
    !0
  ), p ? L && L(c(f)) : E && E(c(f)), c(f).init(), () => {
    var R;
    c(f) && (p ? I && I(c(f)) : A && A(c(f))), (R = c(f)) == null || R.destroy(), g.clear();
  }));
  function b(R) {
    return R in v ? v[R] ?? null : D().getAttribute(R);
  }
  function S(R, H) {
    v[R] !== H && (v[R] = H);
  }
  function w(R) {
    (!(R in v) || v[R] != null) && (v[R] = void 0);
  }
  function D() {
    return d;
  }
  var B = { getElement: D }, N = jv();
  Ze(
    N,
    (R) => ({
      class: R,
      "aria-hidden": l() === -1 ? "true" : "false",
      "aria-disabled": t.role === "button" ? s() ? "true" : "false" : void 0,
      ...c(_),
      ...v,
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
  var z = de(N);
  {
    var K = (R) => {
      var H = Y(), P = V(H);
      le(P, () => t.children ?? ee), x(R, H);
    }, fe = (R) => {
      var H = bt();
      ye(() => $e(H, c(y))), x(R, H);
    };
    ie(z, (R) => {
      c(y) == null ? R(K) : R(fe, !1);
    });
  }
  Ee(N, (R) => d = R, () => d), We(N, (R, H) => q == null ? void 0 : q(R, H), a), x(e, N);
  var O = xe(B);
  return i(), O;
}
function Ma(e, t) {
  Ae(t, !0);
  let n = m(t, "placeholder", 3, ""), r = m(t, "label", 3, ""), i = m(t, "icon", 3, ""), a = m(t, "value", 15, ""), o = m(t, "variant", 3, "standard"), l = m(t, "styles", 3, ""), s = m(t, "required", 3, !1), u = m(t, "invalid", 3, !1), d = m(t, "oninput", 3, () => {
  });
  var f = Y(), g = V(f);
  {
    var v = (p) => {
      {
        const y = (L) => {
          Vv(L, {
            class: "material-icons",
            children: (I, E) => {
              var A = bt();
              ye(() => $e(A, i())), x(I, A);
            },
            $$slots: { default: !0 }
          });
        };
        let _ = /* @__PURE__ */ ge(() => `width: 100%; ${l()}`);
        xs(p, {
          get label() {
            return r();
          },
          get required() {
            return s();
          },
          get invalid() {
            return u();
          },
          get placeholder() {
            return n();
          },
          get style() {
            return c(_);
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
          set value(L) {
            a(L);
          },
          leadingIcon: y,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, h = (p) => {
      xs(p, {
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
        get invalid() {
          return u();
        },
        get oninput() {
          return d();
        },
        get value() {
          return a();
        },
        set value(y) {
          a(y);
        }
      });
    };
    ie(g, (p) => {
      i() ? p(v) : p(h, !1);
    });
  }
  x(e, f), xe();
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
var Ge = {
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
}, ci = {
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
}, Ba = {
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
var ia;
(function(e) {
  e.POLL_SCROLL_POS = "poll_scroll_position", e.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(ia || (ia = {}));
var Qv = (
  /** @class */
  function(e) {
    Et(t, e);
    function t(n) {
      var r = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ci.CLOSE_ACTION, r.scrimClickAction = ci.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ci.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Kv(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Ge;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return ci;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "numbers", {
      get: function() {
        return Ba;
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
      this.adapter.hasClass(Ge.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Ge.FULLSCREEN);
    }, t.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, t.prototype.open = function(n) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Ge.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), n && n.isAboveFullscreenDialog && this.adapter.addClass(Ge.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(Ge.OPEN), r.adapter.addBodyClass(Ge.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, Ba.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, t.prototype.close = function(n) {
      var r = this;
      n === void 0 && (n = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(n), this.adapter.addClass(Ge.CLOSING), this.adapter.removeClass(Ge.OPEN), this.adapter.removeBodyClass(Ge.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(n);
      }, Ba.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, t.prototype.showSurfaceScrim = function() {
      var n = this;
      this.adapter.addClass(Ge.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        n.adapter.addClass(Ge.SURFACE_SCRIM_SHOWN);
      });
    }, t.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(Ge.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Ge.SURFACE_SCRIM_HIDING);
    }, t.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(Ge.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Ge.SURFACE_SCRIM_SHOWING);
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
      this.animFrame.request(ia.POLL_LAYOUT_CHANGE, function() {
        n.layoutInternal();
      });
    }, t.prototype.handleClick = function(n) {
      var r = this.adapter.eventTargetMatches(n.target, ci.SCRIM_SELECTOR);
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
      this.animFrame.request(ia.POLL_SCROLL_POS, function() {
        n.toggleScrollDividerHeader(), n.toggleScrollDividerFooter();
      });
    }, t.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, t.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(Ge.OPENING), this.adapter.removeClass(Ge.CLOSING);
    }, t.prototype.runNextAnimationFrame = function(n) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(n, 0);
      });
    }, t.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(Ge.STACKED);
      var n = this.adapter.areButtonsStacked();
      n && this.adapter.addClass(Ge.STACKED), n !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = n);
    }, t.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(Ge.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Ge.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, t.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Ge.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Ge.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Ge.SCROLL_DIVIDER_HEADER);
    }, t.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Ge.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Ge.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Ge.SCROLL_DIVIDER_FOOTER);
    }, t;
  }(Sn)
), Jv = /* @__PURE__ */ J('<div class="mdc-dialog__surface-scrim"></div>'), $v = /* @__PURE__ */ J('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function eg(e, t) {
  Ae(t, !0);
  const n = () => On(z, "$aboveFullscreenShown", r), [r, i] = $n(), { FocusTrap: a } = Yh, { closest: o, matches: l } = Ho;
  let s = m(t, "use", 19, () => []), u = m(t, "class", 3, ""), d = m(t, "open", 15, !1), f = m(t, "selection", 3, !1), g = m(t, "escapeKeyAction", 3, "close"), v = m(t, "scrimClickAction", 3, "close"), h = m(t, "autoStackButtons", 3, !0), p = m(t, "fullscreen", 3, !1), y = m(t, "sheet", 3, !1), _ = m(t, "noContentPadding", 3, !1), L = m(t, "container$class", 3, ""), I = m(t, "surface$class", 3, ""), E = /* @__PURE__ */ qe(t, [
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
  ]), A, b = /* @__PURE__ */ be(void 0), S = new ni(), w = pe({}), D, B = Bt(!1), N = me("SMUI:dialog:aboveFullscreen"), z = me("SMUI:dialog:aboveFullscreenShown") ?? Bt(!1), K = me("SMUI:addLayoutListener"), fe, O = [], R = (j) => (O.push(j), () => {
    const U = O.indexOf(j);
    U >= 0 && O.splice(U, 1);
  });
  ce("SMUI:dialog:actions:reversed", B), ce("SMUI:addLayoutListener", R), ce("SMUI:dialog:selection", f()), ce("SMUI:dialog:aboveFullscreen", N || p()), ce("SMUI:dialog:aboveFullscreenShown", z), y() && ce("SMUI:icon-button:context", "dialog:sheet"), Fe(() => {
    c(b) && c(b).getEscapeKeyAction() !== g() && c(b).setEscapeKeyAction(g());
  }), Fe(() => {
    c(b) && c(b).getScrimClickAction() !== v() && c(b).setScrimClickAction(v());
  }), Fe(() => {
    c(b) && c(b).getAutoStackButtons() !== h() && c(b).setAutoStackButtons(h());
  }), Fe(() => {
    h() || jn(B, !0);
  }), K && (fe = K(De)), Fe(() => {
    c(b) && c(b).isOpen() !== d() && (d() ? c(b).open({ isAboveFullscreenDialog: !!N }) : c(b).close());
  });
  let H = n();
  Fe(() => {
    p() && c(b) && H !== n() && (H = n(), n() ? c(b).showSurfaceScrim() : c(b).hideSurfaceScrim());
  }), yt(() => (D = new a(A, { initialFocusEl: se() ?? void 0 }), W(
    b,
    new Qv({
      addBodyClass: (j) => document.body.classList.add(j),
      addClass: X,
      areButtonsStacked: () => Yv(C()),
      clickDefaultButton: () => {
        const j = F();
        j && j.click();
      },
      eventTargetMatches: (j, U) => j ? l(j, U) : !1,
      getActionFromEvent: (j) => {
        if (!j.target)
          return "";
        const U = o(j.target, "[data-mdc-dialog-action]");
        return U && U.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: se,
      hasClass: P,
      isContentScrollable: () => Xv(ae()),
      notifyClosed: (j) => {
        d(!1), it(_e(), "SMUIDialogClosed", j ? { action: j } : {});
      },
      notifyClosing: (j) => it(_e(), "SMUIDialogClosing", j ? { action: j } : {}),
      notifyOpened: () => it(_e(), "SMUIDialogOpened", {}),
      notifyOpening: () => it(_e(), "SMUIDialogOpening", {}),
      releaseFocus: () => D.releaseFocus(),
      removeBodyClass: (j) => document.body.classList.remove(j),
      removeClass: k,
      reverseButtons: () => {
        jn(B, !0);
      },
      trapFocus: () => D.trapFocus(),
      registerContentEventHandler: (j, U) => {
        const Z = ae();
        Z instanceof HTMLElement && S.on(Z, j, U);
      },
      deregisterContentEventHandler: (j, U) => {
        const Z = ae();
        Z instanceof HTMLElement && S.off(Z, j, U);
      },
      isScrollableContentAtTop: () => Wv(ae()),
      isScrollableContentAtBottom: () => Zv(ae()),
      registerWindowEventHandler: (j, U) => S.on(window, j, U),
      deregisterWindowEventHandler: (j, U) => S.off(window, j, U)
    }),
    !0
  ), c(b).init(), () => {
    var j;
    (j = c(b)) == null || j.destroy(), S.clear();
  })), Er(() => {
    fe && fe();
  });
  function P(j) {
    return j in w ? w[j] : _e().classList.contains(j);
  }
  function X(j) {
    w[j] || (w[j] = !0);
  }
  function k(j) {
    (!(j in w) || w[j]) && (w[j] = !1);
  }
  function C() {
    return [].slice.call(_e().querySelectorAll(".mdc-dialog__button"));
  }
  function F() {
    return _e().querySelector("[data-mdc-dialog-button-default]");
  }
  function ae() {
    return _e().querySelector(".mdc-dialog__content");
  }
  function se() {
    return _e().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function ue() {
    N && jn(z, !0), requestAnimationFrame(() => {
      O.forEach((j) => j());
    });
  }
  function te() {
    O.forEach((j) => j());
  }
  function $() {
    N && jn(z, !1);
  }
  function re() {
    return d();
  }
  function Ie(j) {
    d(j);
  }
  function De() {
    var j;
    return (j = c(b)) == null ? void 0 : j.layout();
  }
  function _e() {
    return A;
  }
  var Re = { isOpen: re, setOpen: Ie, layout: De, getElement: _e }, He = $v();
  Gn("resize", Ji, () => d() && c(b) && c(b).layout()), Gn("orientationchange", Ji, () => d() && c(b) && c(b).layout()), Gn("keydown", ul.body, (j) => c(b) && c(b).handleDocumentKeydown(j));
  var Pe = V(He), ze = (j) => {
    var U;
    ue(), (U = t.onSMUIDialogOpening) == null || U.call(t, j);
  }, he = (j) => {
    var U;
    te(), (U = t.onSMUIDialogOpened) == null || U.call(t, j);
  }, Le = (j) => {
    var U;
    $(), (U = t.onSMUIDialogClosed) == null || U.call(t, j);
  }, Be = (j) => {
    var U;
    c(b) && c(b).handleClick(j), (U = t.onclick) == null || U.call(t, j);
  }, T = (j) => {
    var U;
    c(b) && c(b).handleKeydown(j), (U = t.onkeydown) == null || U.call(t, j);
  };
  Ze(
    Pe,
    (j, U) => ({
      class: j,
      role: "alertdialog",
      "aria-modal": "true",
      ...U,
      onSMUIDialogOpening: ze,
      onSMUIDialogOpened: he,
      onSMUIDialogClosed: Le,
      onclick: Be,
      onkeydown: T
    }),
    [
      () => Ve({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !h(),
        "mdc-dialog--fullscreen": p(),
        "mdc-dialog--sheet": y(),
        "mdc-dialog--no-content-padding": _(),
        "smui-dialog--selection": f(),
        ...w,
        [u()]: !0
      }),
      () => ra(E, ["container$", "surface$"])
    ]
  );
  var M = de(Pe);
  Ze(M, (j, U) => ({ class: j, ...U }), [
    () => Ve({ "mdc-dialog__container": !0, [L()]: !0 }),
    () => sn(E, "container$")
  ]);
  var Q = de(M);
  Ze(Q, (j, U) => ({ class: j, role: "alertdialog", "aria-modal": "true", ...U }), [
    () => Ve({ "mdc-dialog__surface": !0, [I()]: !0 }),
    () => sn(E, "surface$")
  ]);
  var Me = de(Q);
  le(Me, () => t.children ?? ee);
  var et = oe(Me, 2);
  {
    var St = (j) => {
      var U = Jv();
      Gn("transitionend", U, () => c(b) && c(b).handleSurfaceScrimTransitionEnd()), x(j, U);
    };
    ie(et, (j) => {
      p() && j(St);
    });
  }
  Ee(Pe, (j) => A = j, () => A), We(Pe, (j, U) => q == null ? void 0 : q(j, U), s);
  var ot = oe(Pe, 2);
  le(ot, () => t.over ?? ee), x(e, He);
  var Tt = xe(Re);
  return i(), Tt;
}
function tg(e, t) {
  Ae(t, !0);
  let n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Ri(e, ht({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => n, {
      children: (o, l) => {
        var s = Y(), u = V(s);
        le(u, () => t.children ?? ee), x(o, s);
      },
      $$slots: { default: !0 }
    })),
    (o) => r = o,
    () => r
  ), xe(a);
}
function ng(e, t) {
  Ae(t, !0);
  let n = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Ee(
    Ri(e, ht(
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
          var s = Y(), u = V(s);
          le(u, () => t.children ?? ee), x(o, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (o) => r = o,
    () => r
  ), xe(a);
}
var rg = /* @__PURE__ */ J('<div class="dialog-title svelte-187m1sc"><!></div> <!> <!>', 1);
function ws(e, t) {
  Ae(t, !0);
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
      var o = rg(), l = V(o), s = de(l);
      le(s, () => t.title ?? ee);
      var u = oe(l, 2);
      tg(u, {
        id: "large-scroll-content",
        children: (f, g) => {
          var v = Y(), h = V(v);
          le(h, () => t.content ?? ee), x(f, v);
        },
        $$slots: { default: !0 }
      });
      var d = oe(u, 2);
      ng(d, {
        children: (f, g) => {
          var v = Y(), h = V(v);
          le(h, () => t.actions ?? ee), x(f, v);
        },
        $$slots: { default: !0 }
      }), x(i, o);
    },
    $$slots: { default: !0 }
  }), xe();
}
const ig = Bt([]);
ig.subscribe;
pe({ freeze: !1 });
const pt = [];
for (let e = 0; e < 256; ++e)
  pt.push((e + 256).toString(16).slice(1));
function ag(e, t = 0) {
  return (pt[e[t + 0]] + pt[e[t + 1]] + pt[e[t + 2]] + pt[e[t + 3]] + "-" + pt[e[t + 4]] + pt[e[t + 5]] + "-" + pt[e[t + 6]] + pt[e[t + 7]] + "-" + pt[e[t + 8]] + pt[e[t + 9]] + "-" + pt[e[t + 10]] + pt[e[t + 11]] + pt[e[t + 12]] + pt[e[t + 13]] + pt[e[t + 14]] + pt[e[t + 15]]).toLowerCase();
}
let Ua;
const og = new Uint8Array(16);
function sg() {
  if (!Ua) {
    if (typeof crypto > "u" || !crypto.getRandomValues)
      throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
    Ua = crypto.getRandomValues.bind(crypto);
  }
  return Ua(og);
}
const lg = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Ls = { randomUUID: lg };
function ug(e, t, n) {
  var i;
  if (Ls.randomUUID && !t && !e)
    return Ls.randomUUID();
  e = e || {};
  const r = e.random ?? ((i = e.rng) == null ? void 0 : i.call(e)) ?? sg();
  if (r.length < 16)
    throw new Error("Random bytes length must be >= 16");
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, t) {
    if (n = n || 0, n < 0 || n + 16 > t.length)
      throw new RangeError(`UUID byte range ${n}:${n + 15} is out of buffer bounds`);
    for (let a = 0; a < 16; ++a)
      t[n + a] = r[a];
    return t;
  }
  return ag(r);
}
var cg = /* @__PURE__ */ J('<span class="oscd-icon"><!></span>');
function Dn(e, t) {
  var n = cg(), r = de(n);
  le(r, () => t.children ?? ee), x(e, n);
}
var dg = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"></path></svg>');
function du(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Dn(e, {
    children: (r, i) => {
      var a = dg();
      ye(() => Nt(a, n())), x(r, a);
    }
  });
}
var fg = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m336-280 144-144 144 144 56-56-144-144 144-144-56-56-144 144-144-144-56 56 144 144-144 144 56 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function lo(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Dn(e, {
    children: (r, i) => {
      var a = fg();
      ye(() => Nt(a, n())), x(r, a);
    }
  });
}
var hg = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');
function vg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Dn(e, {
    children: (r, i) => {
      var a = hg();
      ye(() => Nt(a, n())), x(r, a);
    }
  });
}
var gg = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m590-160 80 80H240q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h360l200 240v480q0 20-8.5 36.5T768-96L560-302q-17 11-37 16.5t-43 5.5q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 23-5.5 43T618-360l102 104v-356L562-800H240v640h350ZM480-360q33 0 56.5-23.5T560-440q0-33-23.5-56.5T480-520q-33 0-56.5 23.5T400-440q0 33 23.5 56.5T480-360Zm0-80Zm0 0Z"></path></svg>');
function pg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Dn(e, {
    children: (r, i) => {
      var a = gg();
      ye(() => Nt(a, n())), x(r, a);
    }
  });
}
var mg = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M480-160q-134 0-227-93t-93-227q0-134 93-227t227-93q69 0 132 28.5T720-690v-110h80v280H520v-80h168q-32-56-87.5-88T480-720q-100 0-170 70t-70 170q0 100 70 170t170 70q77 0 139-44t87-116h84q-28 106-114 173t-196 67Z"></path></svg>');
function fu(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Dn(e, {
    children: (r, i) => {
      var a = mg();
      ye(() => Nt(a, n())), x(r, a);
    }
  });
}
var bg = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M840-680v480q0 33-23.5 56.5T760-120H200q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h480l160 160Zm-80 34L646-760H200v560h560v-446ZM480-240q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35ZM240-560h360v-160H240v160Zm-40-86v446-560 114Z"></path></svg>');
function Ts(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Dn(e, {
    children: (r, i) => {
      var a = bg();
      ye(() => Nt(a, n())), x(r, a);
    }
  });
}
var _g = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function yg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Dn(e, {
    children: (r, i) => {
      var a = _g();
      ye(() => Nt(a, n())), x(r, a);
    }
  });
}
var Eg = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Sg(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Dn(e, {
    children: (r, i) => {
      var a = Eg();
      ye(() => Nt(a, n())), x(r, a);
    }
  });
}
var Cg = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Ag(e, t) {
  let n = m(t, "svgStyles", 3, "");
  Dn(e, {
    children: (r, i) => {
      var a = Cg();
      ye(() => Nt(a, n())), x(r, a);
    }
  });
}
oc();
Wt(["change"]);
var xg = /* @__PURE__ */ J('<div class="overlay svelte-14uvd2z"><div class="loading-spinner-container svelte-14uvd2z"><div class="loading-spinner svelte-14uvd2z"></div> <span class="loading-message svelte-14uvd2z"> </span></div></div>'), Ig = /* @__PURE__ */ J('<div class="svelte-14uvd2z"><!></div>');
function Os(e, t) {
  let n = m(t, "loadingDone", 3, !0), r = m(t, "message", 3, "Loading...");
  var i = Ig(), a = de(i);
  {
    var o = (l) => {
      var s = xg(), u = de(s), d = oe(de(u), 2), f = de(d);
      ye(() => $e(f, r())), x(l, s);
    };
    ie(a, (l) => {
      n() || l(o);
    });
  }
  x(e, i);
}
Wt(["change"]);
function wg(e, t, n, r) {
  t() && ((e.key === "Enter" || e.key === " ") && (e.preventDefault(), n()), e.key === "Escape" && (e.preventDefault(), r()));
}
var Lg = /* @__PURE__ */ J('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Rs(e, t) {
  Ae(t, !0);
  let n = m(t, "content", 3, ""), r = m(t, "side", 3, "top"), i = m(t, "hoverDelay", 3, 0), a = m(t, "transitionDuration", 3, 80), o = m(t, "disabled", 3, !1), l = m(t, "offset", 3, 8), s = m(t, "backgroundColor", 3, "#000"), u = m(t, "paddingY", 3, 6), d = m(t, "paddingX", 3, 10), f = m(t, "textColor", 3, "#fff");
  const g = `tt-${Math.random().toString(36).slice(2)}`;
  let v = /* @__PURE__ */ be(null), h = /* @__PURE__ */ be(null), p = /* @__PURE__ */ be(null), y = /* @__PURE__ */ be(null), _ = /* @__PURE__ */ be(!1), L = /* @__PURE__ */ be(null), I = /* @__PURE__ */ be(null);
  function E(O) {
    var F;
    if (!O || !O.trim().startsWith("var(")) return O;
    const R = O.match(/^var\(\s*([^,\s)]+)\s*(?:,\s*([^)]+)\s*)?\)$/);
    if (!R) return O;
    const H = R[1], P = (F = R[2]) == null ? void 0 : F.trim(), X = c(v) ? getComputedStyle(c(v)).getPropertyValue(H) : "", k = getComputedStyle(document.documentElement).getPropertyValue(H), C = (X || k).trim();
    return C || P || O;
  }
  function A() {
    !n() || o() || (c(L) && clearTimeout(c(L)), i() > 0 ? W(L, setTimeout(() => W(_, !0), i()), !0) : W(_, !0));
  }
  function b() {
    c(L) && clearTimeout(c(L)), W(_, !1);
  }
  function S() {
    A();
  }
  function w() {
    b();
  }
  function D() {
    A();
  }
  function B() {
    b();
  }
  function N() {
    if (!c(h) || !c(y) || !c(v) || o()) return;
    const O = c(v).getBoundingClientRect(), R = c(y).getBoundingClientRect();
    let H = 0, P = 0;
    const X = l();
    switch (r()) {
      case "top":
        H = O.top - R.height - X, P = O.left + O.width / 2 - R.width / 2;
        break;
      case "bottom":
        H = O.bottom + X, P = O.left + O.width / 2 - R.width / 2;
        break;
      case "left":
        H = O.top + O.height / 2 - R.height / 2, P = O.left - R.width - X;
        break;
      case "right":
        H = O.top + O.height / 2 - R.height / 2, P = O.right + X;
        break;
    }
    c(h).style.top = `${H + window.scrollY}px`, c(h).style.left = `${P + window.scrollX}px`;
  }
  function z() {
    var O;
    (O = c(I)) == null || O.disconnect(), W(I, null), c(h) && c(h).parentNode && c(h).parentNode.removeChild(c(h)), W(h, null), W(y, null), W(p, null), c(L) && clearTimeout(c(L));
  }
  Er(z), Fe(() => {
    if (!(!c(_) || !n() || o())) {
      if (!c(h)) {
        W(h, document.createElement("div"), !0), c(h).style.position = "absolute", c(h).style.zIndex = "9999", c(h).style.pointerEvents = "none", c(h).style.opacity = "0", c(h).style.transition = `opacity ${a()}ms ease`, c(h).id = g, c(h).setAttribute("role", "tooltip"), document.body.appendChild(c(h)), W(p, c(h).attachShadow({ mode: "open" }), !0);
        const O = document.createElement("style"), R = E(s()), H = E(f());
        O.textContent = `
        .bubble {
          --pad-y: ${u()}px;
          --pad-x: ${d()}px;
          --radius: 4px;
          --bg: ${R};
          --fg: ${H};
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
      `, c(p).appendChild(O), W(y, document.createElement("div"), !0), c(p).appendChild(c(y)), W(
          I,
          new MutationObserver(() => {
            c(_) && N();
          }),
          !0
        ), c(I).observe(document.body, { childList: !0, subtree: !0 });
      }
      c(y) && (c(y).className = `bubble ${r()}`, c(y).innerHTML = n()), c(h) && (c(h).style.opacity = "1", N());
    }
  }), Fe(() => {
    if (c(_) || !c(h))
      return;
    c(h).style.opacity = "0";
    const O = c(h), R = setTimeout(
      () => {
        O && O.parentNode && O.parentNode.removeChild(O), c(h) === O && z();
      },
      a()
    );
    return () => clearTimeout(R);
  });
  var K = Lg();
  K.__keydown = [wg, n, A, b];
  var fe = de(K);
  le(fe, () => t.children ?? ee), Ee(K, (O) => W(v, O), () => c(v)), ye(() => {
    Wn(K, "aria-describedby", n() && !o() ? g : void 0), Wn(K, "aria-haspopup", n() ? "true" : void 0), Wn(K, "aria-expanded", n() ? c(_) ? "true" : "false" : void 0);
  }), Gn("mouseenter", K, S), Gn("mouseleave", K, w), Gn("focus", K, D), Gn("blur", K, B), x(e, K), xe();
}
Wt(["keydown"]);
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
var Vt = {
  CLOSED_CLASS: "mdc-linear-progress--closed",
  CLOSED_ANIMATION_OFF_CLASS: "mdc-linear-progress--closed-animation-off",
  INDETERMINATE_CLASS: "mdc-linear-progress--indeterminate",
  REVERSED_CLASS: "mdc-linear-progress--reversed",
  ANIMATION_READY_CLASS: "mdc-linear-progress--animation-ready"
}, an = {
  ARIA_HIDDEN: "aria-hidden",
  ARIA_VALUEMAX: "aria-valuemax",
  ARIA_VALUEMIN: "aria-valuemin",
  ARIA_VALUENOW: "aria-valuenow",
  BUFFER_BAR_SELECTOR: ".mdc-linear-progress__buffer-bar",
  FLEX_BASIS: "flex-basis",
  PRIMARY_BAR_SELECTOR: ".mdc-linear-progress__primary-bar"
}, di = {
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
var Tg = (
  /** @class */
  function(e) {
    Et(t, e);
    function t(n) {
      var r = e.call(this, ne(ne({}, t.defaultAdapter), n)) || this;
      return r.observer = null, r;
    }
    return Object.defineProperty(t, "cssClasses", {
      get: function() {
        return Vt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t, "strings", {
      get: function() {
        return an;
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
      this.determinate = !this.adapter.hasClass(Vt.INDETERMINATE_CLASS), this.adapter.addClass(Vt.ANIMATION_READY_CLASS), this.progress = 0, this.buffer = 1, this.observer = this.adapter.attachResizeObserver(function(r) {
        var i, a;
        if (!n.determinate)
          try {
            for (var o = Lt(r), l = o.next(); !l.done; l = o.next()) {
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
        this.adapter.removeClass(Vt.INDETERMINATE_CLASS), this.adapter.setAttribute(an.ARIA_VALUENOW, this.progress.toString()), this.adapter.setAttribute(an.ARIA_VALUEMAX, "1"), this.adapter.setAttribute(an.ARIA_VALUEMIN, "0"), this.setPrimaryBarProgress(this.progress), this.setBufferBarProgress(this.buffer);
        return;
      }
      this.observer && this.calculateAndSetDimensions(this.adapter.getWidth()), this.adapter.addClass(Vt.INDETERMINATE_CLASS), this.adapter.removeAttribute(an.ARIA_VALUENOW), this.adapter.removeAttribute(an.ARIA_VALUEMAX), this.adapter.removeAttribute(an.ARIA_VALUEMIN), this.setPrimaryBarProgress(1), this.setBufferBarProgress(1);
    }, t.prototype.isDeterminate = function() {
      return this.determinate;
    }, t.prototype.setProgress = function(n) {
      this.progress = n, this.determinate && (this.setPrimaryBarProgress(n), this.adapter.setAttribute(an.ARIA_VALUENOW, n.toString()));
    }, t.prototype.getProgress = function() {
      return this.progress;
    }, t.prototype.setBuffer = function(n) {
      this.buffer = n, this.determinate && this.setBufferBarProgress(n);
    }, t.prototype.getBuffer = function() {
      return this.buffer;
    }, t.prototype.open = function() {
      this.adapter.removeClass(Vt.CLOSED_CLASS), this.adapter.removeClass(Vt.CLOSED_ANIMATION_OFF_CLASS), this.adapter.removeAttribute(an.ARIA_HIDDEN);
    }, t.prototype.close = function() {
      this.adapter.addClass(Vt.CLOSED_CLASS), this.adapter.setAttribute(an.ARIA_HIDDEN, "true");
    }, t.prototype.isClosed = function() {
      return this.adapter.hasClass(Vt.CLOSED_CLASS);
    }, t.prototype.handleTransitionEnd = function() {
      this.adapter.hasClass(Vt.CLOSED_CLASS) && this.adapter.addClass(Vt.CLOSED_ANIMATION_OFF_CLASS);
    }, t.prototype.destroy = function() {
      e.prototype.destroy.call(this), this.observer && this.observer.disconnect();
    }, t.prototype.restartAnimation = function() {
      this.adapter.removeClass(Vt.ANIMATION_READY_CLASS), this.adapter.forceLayout(), this.adapter.addClass(Vt.ANIMATION_READY_CLASS);
    }, t.prototype.setPrimaryBarProgress = function(n) {
      var r = "scaleX(" + n + ")", i = typeof window < "u" ? zv(window, "transform") : "transform";
      this.adapter.setPrimaryBarStyle(i, r);
    }, t.prototype.setBufferBarProgress = function(n) {
      var r = n * 100 + "%";
      this.adapter.setBufferBarStyle(an.FLEX_BASIS, r);
    }, t.prototype.calculateAndSetDimensions = function(n) {
      var r = n * di.PRIMARY_HALF, i = n * di.PRIMARY_FULL, a = n * di.SECONDARY_QUARTER, o = n * di.SECONDARY_HALF, l = n * di.SECONDARY_FULL;
      this.adapter.setStyle("--mdc-linear-progress-primary-half", r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-half-neg", -r + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full", i + "px"), this.adapter.setStyle("--mdc-linear-progress-primary-full-neg", -i + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter", a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-quarter-neg", -a + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half", o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-half-neg", -o + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full", l + "px"), this.adapter.setStyle("--mdc-linear-progress-secondary-full-neg", -l + "px"), this.restartAnimation();
    }, t;
  }(Sn)
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
var xn = {
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
}, zt;
(function(e) {
  e.ASCENDING = "ascending", e.DESCENDING = "descending", e.NONE = "none", e.OTHER = "other";
})(zt || (zt = {}));
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
var Og = (
  /** @class */
  function(e) {
    Et(t, e);
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
        o !== i && (this.adapter.removeClassNameByHeaderCellIndex(o, xn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(o, xn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(o, rr.ARIA_SORT, zt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(o, zt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, xn.HEADER_CELL_SORTED);
      var l = this.adapter.getAttributeByHeaderCellIndex(i, rr.ARIA_SORT), s = zt.NONE;
      l === zt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, xn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, rr.ARIA_SORT, zt.DESCENDING), s = zt.DESCENDING) : l === zt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, xn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, rr.ARIA_SORT, zt.ASCENDING), s = zt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, rr.ARIA_SORT, zt.ASCENDING), s = zt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, s), this.adapter.notifySortAction({
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
      }), this.adapter.addClass(xn.IN_PROGRESS);
    }, t.prototype.hideProgress = function() {
      this.adapter.removeClass(xn.IN_PROGRESS);
    }, t.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, t.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, xn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, rr.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, xn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, rr.ARIA_SELECTED, "false"));
    }, t;
  }(Sn)
), Rg = /* @__PURE__ */ J('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Hg = /* @__PURE__ */ J("<div><div><table><!></table></div> <!> <!></div>");
function Dg(e, t) {
  Ae(t, !0);
  const n = () => On(K, "$progressClosed", r), [r, i] = $n(), { closest: a } = Ho;
  let o = m(t, "use", 19, () => []), l = m(t, "class", 3, ""), s = m(t, "stickyHeader", 3, !1), u = m(t, "sortable", 3, !1), d = m(t, "sort", 15, null), f = m(t, "sortDirection", 15, "ascending"), g = m(t, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = m(t, "sortDescendingAriaLabel", 3, "sorted, descending"), h = m(t, "container$use", 19, () => []), p = m(t, "container$class", 3, ""), y = m(t, "table$use", 19, () => []), _ = m(t, "table$class", 3, ""), L = /* @__PURE__ */ qe(t, [
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
  ]), I, E = /* @__PURE__ */ be(void 0), A, b = /* @__PURE__ */ be(void 0), S = /* @__PURE__ */ be(void 0), w = pe({}), D = /* @__PURE__ */ be(pe({ height: "auto", top: "initial" })), B = me("SMUI:addLayoutListener"), N, z = !1, K = Bt(!1), fe = Bt(d());
  Fe(() => {
    jn(fe, d());
  });
  let O = Bt(f());
  Fe(() => {
    jn(O, f());
  }), ce("SMUI:checkbox:context", "data-table"), ce("SMUI:linear-progress:context", "data-table"), ce("SMUI:linear-progress:closed", K), ce("SMUI:data-table:sortable", u()), ce("SMUI:data-table:sort", fe), ce("SMUI:data-table:sortDirection", O), ce("SMUI:data-table:sortAscendingAriaLabel", g()), ce("SMUI:data-table:sortDescendingAriaLabel", v()), B && (N = B(se));
  let R;
  Fe(() => {
    t.progress && c(E) && R !== n() && (R = n(), n() ? c(E).hideProgress() : c(E).showProgress());
  }), ce("SMUI:checkbox:mount", () => {
    c(E) && z && c(E).layout();
  }), ce("SMUI:data-table:header:mount", (T) => {
    W(b, T, !0);
  }), ce("SMUI:data-table:header:unmount", () => {
    W(b, void 0);
  }), ce("SMUI:data-table:body:mount", (T) => {
    W(S, T, !0);
  }), ce("SMUI:data-table:body:unmount", () => {
    W(S, void 0);
  }), yt(() => (W(
    E,
    new Og({
      addClass: P,
      removeClass: X,
      getHeaderCellElements: () => {
        var T;
        return ((T = c(b)) == null ? void 0 : T.cells.map((M) => M.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var T;
        return ((T = c(b)) == null ? void 0 : T.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (T, M) => {
        var Q;
        return ((Q = c(b)) == null ? void 0 : Q.orderedCells[T].getAttr(M)) ?? null;
      },
      setAttributeByHeaderCellIndex: (T, M, Q) => {
        var Me;
        (Me = c(b)) == null || Me.orderedCells[T].addAttr(M, Q);
      },
      setClassNameByHeaderCellIndex: (T, M) => {
        var Q;
        (Q = c(b)) == null || Q.orderedCells[T].addClass(M);
      },
      removeClassNameByHeaderCellIndex: (T, M) => {
        var Q;
        (Q = c(b)) == null || Q.orderedCells[T].removeClass(M);
      },
      notifySortAction: (T) => {
        d(T.columnId), f(T.sortValue), it(ue(), "SMUIDataTableSorted", T);
      },
      getTableContainerHeight: () => A.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const T = ue().querySelector(".mdc-data-table__header-row");
        if (!T)
          throw new Error("MDCDataTable: Table header element not found.");
        return T.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (T) => {
        W(D, T, !0);
      },
      addClassAtRowIndex: (T, M) => {
        var Q;
        (Q = c(S)) == null || Q.orderedRows[T].addClass(M);
      },
      getRowCount: () => {
        var T;
        return ((T = c(S)) == null ? void 0 : T.rows.length) ?? 0;
      },
      getRowElements: () => {
        var T;
        return ((T = c(S)) == null ? void 0 : T.rows.map((M) => M.element)) ?? [];
      },
      getRowIdAtIndex: (T) => {
        var M;
        return ((M = c(S)) == null ? void 0 : M.orderedRows[T].rowId) ?? null;
      },
      getRowIndexByChildElement: (T) => {
        var M;
        return ((M = c(S)) == null ? void 0 : M.orderedRows.map((Q) => Q.element).indexOf(a(T, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var T;
        return ((T = c(S)) == null ? void 0 : T.rows.filter((M) => M.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (T) => {
        var Q;
        const M = (Q = c(S)) == null ? void 0 : Q.orderedRows[T].checkbox;
        return M ? M.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var M;
        const T = (M = c(b)) == null ? void 0 : M.checkbox;
        return T ? T.checked : !1;
      },
      isRowsSelectable: () => !!ue().querySelector(".mdc-data-table__row-checkbox") || !!ue().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (T) => {
        var Q;
        const M = (Q = c(S)) == null ? void 0 : Q.orderedRows[T.rowIndex];
        M && it(ue(), "SMUIDataTableSelectionChanged", {
          row: M.element,
          rowId: M.rowId,
          rowIndex: T.rowIndex,
          selected: T.selected
        });
      },
      notifySelectedAll: () => {
        k(!1), it(ue(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        k(!1), it(ue(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (T) => it(ue(), "SMUIDataTableClickRow", T),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (T, M) => {
        var Q;
        (Q = c(S)) == null || Q.orderedRows[T].removeClass(M);
      },
      setAttributeAtRowIndex: (T, M, Q) => {
        var Me;
        (Me = c(S)) == null || Me.orderedRows[T].addAttr(M, Q);
      },
      setHeaderRowCheckboxChecked: (T) => {
        var Q;
        const M = (Q = c(b)) == null ? void 0 : Q.checkbox;
        M && (M.checked = T);
      },
      setHeaderRowCheckboxIndeterminate: k,
      setRowCheckboxCheckedAtIndex: (T, M) => {
        var Me;
        const Q = (Me = c(S)) == null ? void 0 : Me.orderedRows[T].checkbox;
        Q && (Q.checked = M);
      },
      setSortStatusLabelByHeaderCellIndex: (T, M) => {
      }
    }),
    !0
  ), c(E).init(), c(E).layout(), z = !0, () => {
    var T;
    (T = c(E)) == null || T.destroy();
  })), Er(() => {
    N && N();
  });
  function H(T) {
    c(E) && c(E).handleRowCheckboxChange(T);
  }
  function P(T) {
    w[T] || (w[T] = !0);
  }
  function X(T) {
    (!(T in w) || w[T]) && (w[T] = !1);
  }
  function k(T) {
    var Q;
    const M = (Q = c(b)) == null ? void 0 : Q.checkbox;
    M && (M.indeterminate = T);
  }
  function C(T) {
    if (!c(E) || !T.detail.target)
      return;
    const M = a(T.detail.target, ".mdc-data-table__header-cell--with-sort");
    M && ae(M);
  }
  function F(T) {
    if (!c(E) || !T.detail.target)
      return;
    const M = a(T.detail.target, ".mdc-data-table__row");
    M && c(E) && c(E).handleRowClick({ rowId: T.detail.rowId, row: M });
  }
  function ae(T) {
    var et, St;
    const M = ((et = c(b)) == null ? void 0 : et.orderedCells) ?? [], Q = M.map((ot) => ot.element).indexOf(T);
    if (Q === -1)
      return;
    const Me = M[Q].columnId ?? null;
    (St = c(E)) == null || St.handleSortAction({ columnId: Me, columnIndex: Q, headerCell: T });
  }
  function se() {
    var T;
    return (T = c(E)) == null ? void 0 : T.layout();
  }
  function ue() {
    return I;
  }
  var te = { layout: se, getElement: ue }, $ = Hg(), re = (T) => {
    var M;
    c(E) && c(E).handleHeaderRowCheckboxChange(), (M = t.onSMUIDataTableHeaderCheckboxChange) == null || M.call(t, T);
  }, Ie = (T) => {
    var M;
    C(T), (M = t.onSMUIDataTableHeaderClick) == null || M.call(t, T);
  }, De = (T) => {
    var M;
    F(T), (M = t.onSMUIDataTableRowClick) == null || M.call(t, T);
  }, _e = (T) => {
    var M;
    H(T), (M = t.onSMUIDataTableBodyCheckboxChange) == null || M.call(t, T);
  };
  Ze(
    $,
    (T, M) => ({
      class: T,
      ...M,
      onSMUIDataTableHeaderCheckboxChange: re,
      onSMUIDataTableHeaderClick: Ie,
      onSMUIDataTableRowClick: De,
      onSMUIDataTableBodyCheckboxChange: _e
    }),
    [
      () => Ve({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": s(),
        ...w,
        [l()]: !0
      }),
      () => ra(L, ["container$", "table$"])
    ]
  );
  var Re = de($);
  Ze(Re, (T, M) => ({ class: T, ...M }), [
    () => Ve({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => sn(L, "container$")
  ]);
  var He = de(Re);
  Ze(He, (T, M) => ({ class: T, ...M }), [
    () => Ve({ "mdc-data-table__table": !0, [_()]: !0 }),
    () => sn(L, "table$")
  ]);
  var Pe = de(He);
  le(Pe, () => t.children ?? ee), We(He, (T, M) => q == null ? void 0 : q(T, M), y), Ee(Re, (T) => A = T, () => A), We(Re, (T, M) => q == null ? void 0 : q(T, M), h);
  var ze = oe(Re, 2);
  {
    var he = (T) => {
      var M = Rg(), Q = oe(de(M), 2);
      le(Q, () => t.progress ?? ee), ye((Me) => Nt(M, Me), [
        () => Object.entries(c(D)).map(([Me, et]) => `${Me}: ${et};`).join(" ")
      ]), x(T, M);
    };
    ie(ze, (T) => {
      t.progress && T(he);
    });
  }
  var Le = oe(ze, 2);
  le(Le, () => t.paginate ?? ee), Ee($, (T) => I = T, () => I), We($, (T, M) => q == null ? void 0 : q(T, M), o), x(e, $);
  var Be = xe(te);
  return i(), Be;
}
var Pg = /* @__PURE__ */ J("<thead><!></thead>");
function Mg(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = /* @__PURE__ */ qe(t, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ be(void 0), o = [];
  const l = /* @__PURE__ */ new WeakMap();
  ce("SMUI:data-table:row:header", !0);
  const s = me("SMUI:checkbox:mount");
  ce("SMUI:checkbox:mount", (_) => {
    W(a, _, !0), s && s(_);
  });
  const u = me("SMUI:checkbox:unmount");
  ce("SMUI:checkbox:unmount", (_) => {
    W(a, void 0), u && u(_);
  }), ce("SMUI:data-table:cell:mount", (_) => {
    o.push(_), l.set(_.element, _);
  }), ce("SMUI:data-table:cell:unmount", (_) => {
    const L = o.findIndex((I) => I === _);
    L !== -1 && o.splice(L, 1), l.delete(_.element);
  });
  const d = me("SMUI:data-table:header:mount"), f = me("SMUI:data-table:header:unmount");
  yt(() => {
    const _ = {
      get cells() {
        return o;
      },
      get orderedCells() {
        return g();
      },
      get checkbox() {
        return c(a);
      }
    };
    return d && d(_), () => {
      f && f(_);
    };
  });
  function g() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((_) => l.get(_)).filter((_) => _ && _._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var h = { getElement: v }, p = Pg();
  Ze(p, () => ({ ...r }));
  var y = de(p);
  return le(y, () => t.children ?? ee), Ee(p, (_) => i = _, () => i), We(p, (_, L) => q == null ? void 0 : q(_, L), n), x(e, p), xe(h);
}
var Bg = /* @__PURE__ */ J("<tbody><!></tbody>");
function Ug(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, o = [];
  const l = /* @__PURE__ */ new WeakMap();
  ce("SMUI:data-table:row:header", !1), ce("SMUI:data-table:row:mount", (p) => {
    o.push(p), l.set(p.element, p);
  }), ce("SMUI:data-table:row:unmount", (p) => {
    const y = o.findIndex((_) => _ === p);
    y !== -1 && o.splice(y, 1), l.delete(p.element);
  });
  const s = me("SMUI:data-table:body:mount"), u = me("SMUI:data-table:body:unmount");
  yt(() => {
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
  var g = { getElement: f }, v = Bg();
  Ze(v, (p) => ({ class: p, ...i }), [
    () => Ve({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var h = de(v);
  return le(h, () => t.children ?? ee), Ee(v, (p) => a = p, () => a), We(v, (p, y) => q == null ? void 0 : q(p, y), n), x(e, v), xe(g);
}
let Fg = 0;
var Ng = /* @__PURE__ */ J("<tr><!></tr>");
function Gi(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "rowId", 19, () => "SMUI-data-table-row-" + Fg++), a = /* @__PURE__ */ qe(t, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), o, l = /* @__PURE__ */ be(void 0), s = pe({}), u = pe({}), d = me("SMUI:data-table:row:header");
  const f = me("SMUI:checkbox:mount");
  ce("SMUI:checkbox:mount", (B) => {
    W(l, B, !0), f && f(B);
  });
  const g = me("SMUI:checkbox:unmount");
  ce("SMUI:checkbox:unmount", (B) => {
    W(l, void 0), g && g(B);
  });
  const v = me("SMUI:data-table:row:mount"), h = me("SMUI:data-table:row:unmount");
  yt(() => {
    const B = d ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return A();
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
      removeClass: y,
      getAttr: _,
      addAttr: L
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return A();
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
      removeClass: y,
      getAttr: _,
      addAttr: L
    };
    return v && v(B), () => {
      h && h(B);
    };
  });
  function p(B) {
    s[B] || (s[B] = !0);
  }
  function y(B) {
    (!(B in s) || s[B]) && (s[B] = !1);
  }
  function _(B) {
    return B in u ? u[B] ?? null : A().getAttribute(B);
  }
  function L(B, N) {
    u[B] !== N && (u[B] = N);
  }
  function I(B) {
    it(A(), "SMUIDataTableHeaderClick", B);
  }
  function E(B) {
    it(A(), "SMUIDataTableRowClick", { rowId: i(), target: B.target });
  }
  function A() {
    return o;
  }
  var b = { getElement: A }, S = Ng(), w = (B) => {
    var N;
    d ? I(B) : E(B), (N = t.onclick) == null || N.call(t, B);
  };
  Ze(
    S,
    (B) => ({
      class: B,
      "aria-selected": c(l) ? c(l).checked ? "true" : "false" : void 0,
      ...u,
      ...a,
      onclick: w
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
  var D = de(S);
  return le(D, () => t.children ?? ee), Ee(S, (B) => o = B, () => o), We(S, (B, N) => q == null ? void 0 : q(B, N), n), x(e, S), xe(b);
}
let kg = 0;
var Gg = /* @__PURE__ */ J('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), jg = /* @__PURE__ */ J("<th><!></th>"), Vg = /* @__PURE__ */ J("<td><!></td>");
function fi(e, t) {
  Ae(t, !0);
  const n = () => On(_, "$sort", i), r = () => On(L, "$sortDirection", i), [i, a] = $n();
  let o = me("SMUI:data-table:row:header"), l = m(t, "use", 19, () => []), s = m(t, "class", 3, ""), u = m(t, "numeric", 3, !1), d = m(t, "checkbox", 3, !1), f = m(t, "columnId", 19, () => o ? "SMUI-data-table-column-" + kg++ : "SMUI-data-table-unused"), g = m(t, "sortable", 19, () => me("SMUI:data-table:sortable")), v = /* @__PURE__ */ qe(t, [
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
  ]), h, p = pe({}), y = pe({}), _ = me("SMUI:data-table:sort"), L = me("SMUI:data-table:sortDirection"), I = me("SMUI:data-table:sortAscendingAriaLabel"), E = me("SMUI:data-table:sortDescendingAriaLabel");
  g() && (ce("SMUI:label:context", "data-table:sortable-header-cell"), ce("SMUI:icon-button:context", "data-table:sortable-header-cell"), ce("SMUI:icon-button:aria-describedby", f() + "-status-label"));
  const A = me("SMUI:data-table:cell:mount"), b = me("SMUI:data-table:cell:unmount");
  yt(() => {
    const k = o ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return K();
      },
      get columnId() {
        return f();
      },
      addClass: S,
      removeClass: w,
      getAttr: D,
      addAttr: B
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return K();
      },
      get columnId() {
      },
      addClass: S,
      removeClass: w,
      getAttr: D,
      addAttr: B
    };
    return A && A(k), () => {
      b && b(k);
    };
  });
  function S(k) {
    p[k] || (p[k] = !0);
  }
  function w(k) {
    (!(k in p) || p[k]) && (p[k] = !1);
  }
  function D(k) {
    return k in y ? y[k] ?? null : K().getAttribute(k);
  }
  function B(k, C) {
    y[k] !== C && (y[k] = C);
  }
  function N(k) {
    it(K(), "SMUIDataTableHeaderCheckboxChange", k);
  }
  function z(k) {
    it(K(), "SMUIDataTableBodyCheckboxChange", k);
  }
  function K() {
    return h;
  }
  var fe = { getElement: K }, O = Y(), R = V(O);
  {
    var H = (k) => {
      var C = jg(), F = (te) => {
        var $;
        d() && N(te), ($ = t.onchange) == null || $.call(t, te);
      };
      Ze(
        C,
        (te) => ({
          class: te,
          role: "columnheader",
          scope: "col",
          "data-column-id": f(),
          "aria-sort": g() ? n() === f() ? r() : "none" : void 0,
          ...y,
          ...v,
          onchange: F
        }),
        [
          () => Ve({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": u(),
            "mdc-data-table__header-cell--checkbox": d(),
            "mdc-data-table__header-cell--with-sort": g(),
            "mdc-data-table__header-cell--sorted": g() && n() === f(),
            ...p,
            [s()]: !0
          })
        ]
      );
      var ae = de(C);
      {
        var se = (te) => {
          var $ = Gg(), re = de($);
          le(re, () => t.children ?? ee);
          var Ie = oe(re, 2), De = de(Ie);
          ye(() => {
            Wn(Ie, "id", `${f() ?? ""}-status-label`), $e(De, n() === f() ? r() === "ascending" ? I : E : "");
          }), x(te, $);
        }, ue = (te) => {
          var $ = Y(), re = V($);
          le(re, () => t.children ?? ee), x(te, $);
        };
        ie(ae, (te) => {
          g() ? te(se) : te(ue, !1);
        });
      }
      Ee(C, (te) => h = te, () => h), We(C, (te, $) => q == null ? void 0 : q(te, $), l), x(k, C);
    }, P = (k) => {
      var C = Vg(), F = (se) => {
        var ue;
        d() && z(se), (ue = t.onchange) == null || ue.call(t, se);
      };
      Ze(
        C,
        (se) => ({
          class: se,
          ...y,
          ...v,
          onchange: F
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
      var ae = de(C);
      le(ae, () => t.children ?? ee), Ee(C, (se) => h = se, () => h), We(C, (se, ue) => q == null ? void 0 : q(se, ue), l), x(k, C);
    };
    ie(R, (k) => {
      o ? k(H) : k(P, !1);
    });
  }
  x(e, O);
  var X = xe(fe);
  return a(), X;
}
Wt(["click"]);
Wt(["click"]);
function uo(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
var qg = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
uo({}, qg.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var ji, Ds = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
ji = {}, uo(ji, Ds.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), uo(ji, Ds.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
Wt([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
Wt(["click"]);
const zg = 4e3;
function Xg() {
  let e = pe({ items: [] }), t = 0;
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
Wt(["click"]);
Wt(["click"]);
Wt(["click"]);
Wt(["change", "click"]);
var Wg = /* @__PURE__ */ J('<div><div class="mdc-linear-progress__buffer"><div class="mdc-linear-progress__buffer-bar"></div> <div class="mdc-linear-progress__buffer-dots"></div></div> <div class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"><span class="mdc-linear-progress__bar-inner"></span></div> <div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar"><span class="mdc-linear-progress__bar-inner"></span></div></div>');
function Zg(e, t) {
  Ae(t, !0);
  const [n, r] = $n();
  let i = m(t, "use", 19, () => []), a = m(t, "class", 3, ""), o = m(t, "style", 3, ""), l = m(t, "indeterminate", 3, !1), s = m(t, "closed", 3, !1), u = m(t, "progress", 3, 0), d = m(t, "buffer", 3, void 0), f = /* @__PURE__ */ qe(t, [
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
  ]), g, v = /* @__PURE__ */ be(void 0), h = pe({}), p = pe({}), y = pe({}), _ = pe({}), L = pe({}), I = me("SMUI:linear-progress:context"), E = me("SMUI:linear-progress:closed");
  Fe(() => {
    E && jn(E, s());
  }), Fe(() => {
    c(v) && c(v).isDeterminate() !== !l() && c(v).setDeterminate(!l());
  }), Fe(() => {
    c(v) && c(v).getProgress() !== u() && c(v).setProgress(u());
  }), Fe(() => {
    c(v) && (d() == null ? c(v).setBuffer(1) : c(v).setBuffer(d()));
  }), Fe(() => {
    c(v) && (s() ? c(v).close() : c(v).open());
  }), yt(() => (W(
    v,
    new Tg({
      addClass: b,
      forceLayout: () => {
        K().getBoundingClientRect();
      },
      setBufferBarStyle: N,
      setPrimaryBarStyle: z,
      hasClass: A,
      removeAttribute: D,
      removeClass: S,
      setAttribute: w,
      setStyle: B,
      attachResizeObserver: (C) => {
        const F = window.ResizeObserver;
        if (F) {
          const ae = new F(C);
          return ae.observe(K()), ae;
        }
        return null;
      },
      getWidth: () => K().offsetWidth
    }),
    !0
  ), c(v).init(), () => {
    var C;
    (C = c(v)) == null || C.destroy();
  }));
  function A(C) {
    return C in h ? h[C] : K().classList.contains(C);
  }
  function b(C) {
    h[C] || (h[C] = !0);
  }
  function S(C) {
    (!(C in h) || h[C]) && (h[C] = !1);
  }
  function w(C, F) {
    p[C] !== F && (p[C] = F);
  }
  function D(C) {
    (!(C in p) || p[C] != null) && (p[C] = void 0);
  }
  function B(C, F) {
    y[C] != F && (F === "" || F == null ? delete y[C] : y[C] = F);
  }
  function N(C, F) {
    _[C] != F && (F === "" || F == null ? delete _[C] : _[C] = F);
  }
  function z(C, F) {
    L[C] != F && (F === "" || F == null ? delete L[C] : L[C] = F);
  }
  function K() {
    return g;
  }
  var fe = { getElement: K }, O = Wg(), R = (C) => {
    var F;
    c(v) && c(v).handleTransitionEnd(), (F = t.ontransitionend) == null || F.call(t, C);
  };
  Ze(
    O,
    (C, F) => ({
      class: C,
      style: F,
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 1,
      "aria-valuenow": l() ? void 0 : u(),
      ...p,
      ...f,
      ontransitionend: R
    }),
    [
      () => Ve({
        "mdc-linear-progress": !0,
        "mdc-linear-progress--indeterminate": l(),
        "mdc-linear-progress--closed": s(),
        "mdc-data-table__linear-progress": I === "data-table",
        ...h,
        [a()]: !0
      }),
      () => Object.entries(y).map(([C, F]) => `${C}: ${F};`).concat([o()]).join(" ")
    ]
  );
  var H = de(O), P = de(H), X = oe(H, 2);
  Ee(O, (C) => g = C, () => g), We(O, (C, F) => q == null ? void 0 : q(C, F), i), ye(
    (C, F) => {
      Nt(P, C), Nt(X, F);
    },
    [
      () => Object.entries(_).map(([C, F]) => `${C}: ${F};`).join(" "),
      () => Object.entries(L).map(([C, F]) => `${C}: ${F};`).join(" ")
    ]
  ), x(e, O);
  var k = xe(fe);
  return r(), k;
}
var Yg = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 4l-8 8h16l-8-8z"></path></svg>'), Kg = /* @__PURE__ */ Zt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" class="svelte-1mj71p3"><path d="M12 20l8-8H4l8 8z"></path></svg>'), Qg = /* @__PURE__ */ J('<div class="custom-cell-container svelte-1mj71p3"><div class="cell-header svelte-1mj71p3"><span class="header-title svelte-1mj71p3"> </span> <!></div></div>'), Jg = (e, t) => t(), $g = /* @__PURE__ */ J('<input type="text" class="svelte-1mj71p3"/>'), ep = (e, t) => t(), tp = /* @__PURE__ */ J('<input type="number" class="svelte-1mj71p3"/>'), np = /* @__PURE__ */ J("<!> <!>", 1), rp = /* @__PURE__ */ J("<!> <!>", 1), ip = /* @__PURE__ */ J('<div class="cell-actions svelte-1mj71p3"></div>'), ap = /* @__PURE__ */ J("<!> <!>", 1);
function op(e, t) {
  Ae(t, !0);
  const n = () => On(y, "$sortColumn", a), r = () => On(_, "$sortDirection", a), i = () => On(p, "$filteredData", a), [a, o] = $n();
  let l = m(t, "loadingDone", 15, !0), s = m(t, "label", 19, ug), u = m(t, "columnDefs", 19, () => []), d = m(t, "rowData", 31, () => pe([])), f = m(t, "rowActions", 19, () => []), g = m(t, "searchInputLabel", 3, "Search"), v = m(t, "emptyText", 3, "No data available"), h = pe({ name: "", color: "", number: "" }), p = Bt([]), y = Bt(null), _ = Bt(null), L = /* @__PURE__ */ ge(() => u().some((b) => b.filter));
  t.store.store.subscribe((b) => {
    d([...b]), I();
  });
  function I() {
    let b = d().filter((S) => u().every((w) => {
      const D = h[w.field], B = w.filterValueGetter ? w.filterValueGetter(S) : S[w.field];
      return D ? w.filterType === "number" ? B == D : B.toString().toLowerCase().includes(D.toLowerCase()) : !0;
    }));
    b = E(b), p.set(b);
  }
  function E(b) {
    let S, w;
    return y.subscribe((D) => S = D), _.subscribe((D) => w = D), !S || !w ? b : b.sort((D, B) => {
      let N = D[S], z = B[S];
      return N == null && (N = ""), z == null && (z = ""), w === "asc" ? N.toString().localeCompare(z.toString()) : z.toString().localeCompare(N.toString());
    });
  }
  function A(b) {
    y.update((S) => {
      if (S === b)
        _.update((w) => w === "asc" ? "desc" : w === "desc" ? null : "asc");
      else
        return _.set("asc"), b;
      return b;
    }), I();
  }
  p.set(d()), Dg(e, {
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
        set closed(w) {
          l(w);
        }
      });
    },
    children: (S, w) => {
      var D = ap(), B = V(D);
      Mg(B, {
        children: (z, K) => {
          var fe = rp(), O = V(fe);
          Gi(O, {
            class: "header-title-row",
            children: (P, X) => {
              var k = Y(), C = V(k);
              oi(C, 17, u, Pi, (F, ae) => {
                fi(F, {
                  onclick: () => c(ae).sortable && A(c(ae).field),
                  get style() {
                    return c(ae).headerStyle;
                  },
                  children: (se, ue) => {
                    var te = Qg(), $ = de(te), re = de($), Ie = de(re), De = oe(re, 2);
                    {
                      var _e = (Re) => {
                        var He = Y(), Pe = V(He);
                        {
                          var ze = (he) => {
                            var Le = Y(), Be = V(Le);
                            {
                              var T = (Q) => {
                                var Me = Yg();
                                x(Q, Me);
                              }, M = (Q) => {
                                var Me = Y(), et = V(Me);
                                {
                                  var St = (ot) => {
                                    var Tt = Kg();
                                    x(ot, Tt);
                                  };
                                  ie(
                                    et,
                                    (ot) => {
                                      r() === "desc" && ot(St);
                                    },
                                    !0
                                  );
                                }
                                x(Q, Me);
                              };
                              ie(Be, (Q) => {
                                r() === "asc" ? Q(T) : Q(M, !1);
                              });
                            }
                            x(he, Le);
                          };
                          ie(Pe, (he) => {
                            n() === c(ae).field && r() !== null && he(ze);
                          });
                        }
                        x(Re, He);
                      };
                      ie(De, (Re) => {
                        c(ae).sortable && Re(_e);
                      });
                    }
                    ye(() => {
                      Nt(te, `min-width: ${c(ae).minWidth ?? 0 ?? ""}`), $e(Ie, c(ae).headerName);
                    }), x(se, te);
                  },
                  $$slots: { default: !0 }
                });
              }), x(P, k);
            },
            $$slots: { default: !0 }
          });
          var R = oe(O, 2);
          {
            var H = (P) => {
              Gi(P, {
                class: "header-filter-row",
                children: (X, k) => {
                  var C = Y(), F = V(C);
                  oi(F, 17, u, Pi, (ae, se) => {
                    fi(ae, {
                      children: (ue, te) => {
                        var $ = Y(), re = V($);
                        {
                          var Ie = (De) => {
                            var _e = np(), Re = V(_e);
                            {
                              var He = (he) => {
                                var Le = $g();
                                Le.__input = [Jg, I], ye(() => Wn(Le, "placeholder", `${g()} ${c(se).headerName}`)), Qa(Le, () => h[c(se).field], (Be) => h[c(se).field] = Be), x(he, Le);
                              };
                              ie(Re, (he) => {
                                c(se).filterType === "text" && he(He);
                              });
                            }
                            var Pe = oe(Re, 2);
                            {
                              var ze = (he) => {
                                var Le = tp();
                                Le.__input = [ep, I], ye(() => Wn(Le, "placeholder", `${g()} ${c(se).headerName}`)), Qa(Le, () => h[c(se).field], (Be) => h[c(se).field] = Be), x(he, Le);
                              };
                              ie(Pe, (he) => {
                                c(se).filterType === "number" && he(ze);
                              });
                            }
                            x(De, _e);
                          };
                          ie(re, (De) => {
                            c(se).filter && De(Ie);
                          });
                        }
                        x(ue, $);
                      },
                      $$slots: { default: !0 }
                    });
                  }), x(X, C);
                },
                $$slots: { default: !0 }
              });
            };
            ie(R, (P) => {
              c(L) && P(H);
            });
          }
          x(z, fe);
        },
        $$slots: { default: !0 }
      });
      var N = oe(B, 2);
      Ug(N, {
        children: (z, K) => {
          var fe = Y(), O = V(fe);
          {
            var R = (P) => {
              Gi(P, {
                children: (X, k) => {
                  fi(X, {
                    class: "oscd-basic-table__empty-row",
                    get colspan() {
                      return u().length;
                    },
                    style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                    children: (C, F) => {
                      var ae = bt();
                      ye(() => $e(ae, v())), x(C, ae);
                    },
                    $$slots: { default: !0 }
                  });
                },
                $$slots: { default: !0 }
              });
            }, H = (P) => {
              var X = Y(), k = V(X);
              oi(k, 1, i, Pi, (C, F) => {
                Gi(C, {
                  children: (ae, se) => {
                    var ue = Y(), te = V(ue);
                    oi(te, 17, u, ($) => $.field, ($, re) => {
                      var Ie = Y(), De = V(Ie);
                      {
                        var _e = (He) => {
                          fi(He, {
                            children: (Pe, ze) => {
                              var he = ip();
                              oi(he, 21, f, Pi, (Le, Be) => {
                                var T = Y(), M = V(T);
                                {
                                  var Q = (et) => {
                                    Rs(et, {
                                      get content() {
                                        return c(Be).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (St, ot) => {
                                        {
                                          let Tt = /* @__PURE__ */ ge(() => c(Be).disabled(c(F)));
                                          lv(St, {
                                            get iconComponent() {
                                              return c(Be).iconComponent;
                                            },
                                            get iconStyles() {
                                              return c(Be).iconStyles;
                                            },
                                            callback: () => c(Be).callback(c(F)),
                                            get disabled() {
                                              return c(Tt);
                                            }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  }, Me = (et) => {
                                    Rs(et, {
                                      get content() {
                                        return c(Be).tooltip;
                                      },
                                      hoverDelay: 500,
                                      children: (St, ot) => {
                                        {
                                          let Tt = /* @__PURE__ */ ge(() => c(Be).disabled(c(F)));
                                          ir(St, {
                                            class: "button",
                                            variant: "raised",
                                            callback: () => c(Be).callback(c(F)),
                                            get disabled() {
                                              return c(Tt);
                                            },
                                            children: (j, U) => {
                                              var Z = Y(), Ye = V(Z);
                                              {
                                                var lt = (rt) => {
                                                  du(rt, { svgStyles: "margin: unset" });
                                                }, ut = (rt) => {
                                                  var Yt = Y(), xr = V(Yt);
                                                  {
                                                    var tt = (ct) => {
                                                      lo(ct, { svgStyles: "margin: unset" });
                                                    }, Ct = (ct) => {
                                                      var Cn = Y(), ya = V(Cn);
                                                      {
                                                        var Ea = (Ne) => {
                                                          vg(Ne, { svgStyles: "margin: unset" });
                                                        }, Te = (Ne) => {
                                                          var Je = Y(), Ot = V(Je);
                                                          {
                                                            var tn = (Ke) => {
                                                              pg(Ke, { svgStyles: "margin: unset" });
                                                            }, nt = (Ke) => {
                                                              var dt = Y(), ke = V(dt);
                                                              {
                                                                var vt = (gt) => {
                                                                  yg(gt, { svgStyles: "margin: unset" });
                                                                }, Pn = (gt) => {
                                                                  var st = Y(), At = V(st);
                                                                  {
                                                                    var nn = (rn) => {
                                                                      Sg(rn, { svgStyles: "margin: unset" });
                                                                    }, Rt = (rn) => {
                                                                      var fn = Y(), Ir = V(fn);
                                                                      {
                                                                        var ri = (kt) => {
                                                                          Ag(kt, { svgStyles: "margin: unset" });
                                                                        }, hn = (kt) => {
                                                                          fu(kt, { svgStyles: "margin: unset" });
                                                                        };
                                                                        ie(
                                                                          Ir,
                                                                          (kt) => {
                                                                            c(Be).icon === "delete" ? kt(ri) : kt(hn, !1);
                                                                          },
                                                                          !0
                                                                        );
                                                                      }
                                                                      x(rn, fn);
                                                                    };
                                                                    ie(
                                                                      At,
                                                                      (rn) => {
                                                                        c(Be).icon === "edit" ? rn(nn) : rn(Rt, !1);
                                                                      },
                                                                      !0
                                                                    );
                                                                  }
                                                                  x(gt, st);
                                                                };
                                                                ie(
                                                                  ke,
                                                                  (gt) => {
                                                                    c(Be).icon === "remove" ? gt(vt) : gt(Pn, !1);
                                                                  },
                                                                  !0
                                                                );
                                                              }
                                                              x(Ke, dt);
                                                            };
                                                            ie(
                                                              Ot,
                                                              (Ke) => {
                                                                c(Be).icon === "find-in-page" ? Ke(tn) : Ke(nt, !1);
                                                              },
                                                              !0
                                                            );
                                                          }
                                                          x(Ne, Je);
                                                        };
                                                        ie(
                                                          ya,
                                                          (Ne) => {
                                                            c(Be).icon === "download" ? Ne(Ea) : Ne(Te, !1);
                                                          },
                                                          !0
                                                        );
                                                      }
                                                      x(ct, Cn);
                                                    };
                                                    ie(
                                                      xr,
                                                      (ct) => {
                                                        c(Be).icon === "cancel" ? ct(tt) : ct(Ct, !1);
                                                      },
                                                      !0
                                                    );
                                                  }
                                                  x(rt, Yt);
                                                };
                                                ie(Ye, (rt) => {
                                                  c(Be).icon === "add" ? rt(lt) : rt(ut, !1);
                                                });
                                              }
                                              x(j, Z);
                                            },
                                            $$slots: { default: !0 }
                                          });
                                        }
                                      },
                                      $$slots: { default: !0 }
                                    });
                                  };
                                  ie(M, (et) => {
                                    c(Be).iconComponent ? et(Q) : et(Me, !1);
                                  });
                                }
                                x(Le, T);
                              }), x(Pe, he);
                            },
                            $$slots: { default: !0 }
                          });
                        }, Re = (He) => {
                          fi(He, {
                            get numeric() {
                              return c(re).numeric;
                            },
                            get style() {
                              return c(re).cellStyle;
                            },
                            children: (Pe, ze) => {
                              var he = Y(), Le = V(he);
                              {
                                var Be = (M) => {
                                  const Q = /* @__PURE__ */ ge(() => c(re).cellRenderer);
                                  var Me = Y(), et = V(Me);
                                  $r(et, () => c(Q), (St, ot) => {
                                    ot(St, ht(
                                      {
                                        get row() {
                                          return c(F);
                                        },
                                        get value() {
                                          return c(F)[c(re).field];
                                        },
                                        get col() {
                                          return c(re);
                                        }
                                      },
                                      () => c(re).cellRendererProps ?? {}
                                    ));
                                  }), x(M, Me);
                                }, T = (M) => {
                                  var Q = Y(), Me = V(Q);
                                  {
                                    var et = (ot) => {
                                      var Tt = bt();
                                      ye((j) => $e(Tt, j), [
                                        () => c(re).valueFormatter(c(F)[c(re).field])
                                      ]), x(ot, Tt);
                                    }, St = (ot) => {
                                      var Tt = bt();
                                      ye(() => $e(Tt, c(F)[c(re).field] ?? "")), x(ot, Tt);
                                    };
                                    ie(
                                      Me,
                                      (ot) => {
                                        c(re).valueFormatter ? ot(et) : ot(St, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(M, Q);
                                };
                                ie(Le, (M) => {
                                  c(re).cellRenderer ? M(Be) : M(T, !1);
                                });
                              }
                              x(Pe, he);
                            },
                            $$slots: { default: !0 }
                          });
                        };
                        ie(De, (He) => {
                          c(re).field === "actions" ? He(_e) : He(Re, !1);
                        });
                      }
                      x($, Ie);
                    }), x(ae, ue);
                  },
                  $$slots: { default: !0 }
                });
              }), x(P, X);
            };
            ie(O, (P) => {
              i().length === 0 ? P(R) : P(H, !1);
            });
          }
          x(z, fe);
        },
        $$slots: { default: !0 }
      }), x(S, D);
    },
    $$slots: { progress: !0, default: !0 }
  }), xe(), o();
}
Wt(["input"]);
var sp = /* @__PURE__ */ J("<div><!></div>");
function lp(e, t) {
  Ae(t, !0);
  let n = m(t, "use", 19, () => []), r = m(t, "class", 3, ""), i = m(t, "variant", 3, "raised"), a = m(t, "padded", 3, !1), o = /* @__PURE__ */ qe(t, [
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
  Ze(d, (g) => ({ class: g, ...o }), [
    () => Ve({
      "mdc-card": !0,
      "mdc-card--outlined": i() === "outlined",
      "smui-card--padded": a(),
      [r()]: !0
    })
  ]);
  var f = de(d);
  return le(f, () => t.children ?? ee), Ee(d, (g) => l = g, () => l), We(d, (g, v) => q == null ? void 0 : q(g, v), n), x(e, d), xe(u);
}
function at(e) {
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
            for (var l = Lt(o), s = l.next(); !s.done; s = l.next()) {
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
      if (at(d))
        try {
          d();
        } catch (p) {
          a = p instanceof Fa ? p.errors : [p];
        }
      var f = this._finalizers;
      if (f) {
        this._finalizers = null;
        try {
          for (var g = Lt(f), v = g.next(); !v.done; v = g.next()) {
            var h = v.value;
            try {
              Ms(h);
            } catch (p) {
              a = a ?? [], p instanceof Fa ? a = Dr(Dr([], eo(a)), eo(p.errors)) : a.push(p);
            }
          }
        } catch (p) {
          r = { error: p };
        } finally {
          try {
            v && !v.done && (i = g.return) && i.call(g);
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
  return e instanceof Do || e && "closed" in e && at(e.remove) && at(e.add) && at(e.unsubscribe);
}
function Ms(e) {
  at(e) ? e() : e.unsubscribe();
}
var up = {
  Promise: void 0
}, cp = {
  setTimeout: function(e, t) {
    for (var n = [], r = 2; r < arguments.length; r++)
      n[r - 2] = arguments[r];
    return setTimeout.apply(void 0, Dr([e, t], eo(n)));
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
  Et(t, e);
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
        Vi(r);
      }
  }, e.prototype.error = function(t) {
    var n = this.partialObserver;
    if (n.error)
      try {
        n.error(t);
      } catch (r) {
        Vi(r);
      }
    else
      Vi(t);
  }, e.prototype.complete = function() {
    var t = this.partialObserver;
    if (t.complete)
      try {
        t.complete();
      } catch (n) {
        Vi(n);
      }
  }, e;
}(), co = function(e) {
  Et(t, e);
  function t(n, r, i) {
    var a = e.call(this) || this, o;
    return at(n) || !n ? o = {
      next: n ?? void 0,
      error: r ?? void 0,
      complete: i ?? void 0
    } : o = n, a.destination = new fp(o), a;
  }
  return t;
}(Po);
function Vi(e) {
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
var dn = function() {
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
  return e && at(e.next) && at(e.error) && at(e.complete);
}
function mp(e) {
  return e && e instanceof Po || pp(e) && vu(e);
}
function bp(e) {
  return at(e == null ? void 0 : e.lift);
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
function Kr(e, t, n, r, i) {
  return new _p(e, t, n, r, i);
}
var _p = function(e) {
  Et(t, e);
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
}(Po), yp = new dn(function(e) {
  return e.complete();
});
function Ep(e) {
  return e && at(e.schedule);
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
  return at(e == null ? void 0 : e.then);
}
function _u(e) {
  return at(e[Mo]);
}
function yu(e) {
  return Symbol.asyncIterator && at(e == null ? void 0 : e[Symbol.asyncIterator]);
}
function Eu(e) {
  return new TypeError("You provided " + (e !== null && typeof e == "object" ? "an invalid object" : "'" + e + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
function Ap() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var Su = Ap();
function Cu(e) {
  return at(e == null ? void 0 : e[Su]);
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
          return [4, Pr(n.read())];
        case 3:
          return r = o.sent(), i = r.value, a = r.done, a ? [4, Pr(void 0)] : [3, 5];
        case 4:
          return [2, o.sent()];
        case 5:
          return [4, Pr(i)];
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
function xu(e) {
  return at(e == null ? void 0 : e.getReader);
}
function Hi(e) {
  if (e instanceof dn)
    return e;
  if (e != null) {
    if (_u(e))
      return xp(e);
    if (mu(e))
      return Ip(e);
    if (bu(e))
      return wp(e);
    if (yu(e))
      return Iu(e);
    if (Cu(e))
      return Lp(e);
    if (xu(e))
      return Tp(e);
  }
  throw Eu(e);
}
function xp(e) {
  return new dn(function(t) {
    var n = e[Mo]();
    if (at(n.subscribe))
      return n.subscribe(t);
    throw new TypeError("Provided object does not correctly implement Symbol.observable");
  });
}
function Ip(e) {
  return new dn(function(t) {
    for (var n = 0; n < e.length && !t.closed; n++)
      t.next(e[n]);
    t.complete();
  });
}
function wp(e) {
  return new dn(function(t) {
    e.then(function(n) {
      t.closed || (t.next(n), t.complete());
    }, function(n) {
      return t.error(n);
    }).then(null, gu);
  });
}
function Lp(e) {
  return new dn(function(t) {
    var n, r;
    try {
      for (var i = Lt(e), a = i.next(); !a.done; a = i.next()) {
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
  return new dn(function(t) {
    Op(e, t).catch(function(n) {
      return t.error(n);
    });
  });
}
function Tp(e) {
  return Iu(Au(e));
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
    n.subscribe(Kr(r, function(i) {
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
  return Hi(e).pipe(Lu(t), wu(t));
}
function Hp(e, t) {
  return Hi(e).pipe(Lu(t), wu(t));
}
function Dp(e, t) {
  return new dn(function(n) {
    var r = 0;
    return t.schedule(function() {
      r === e.length ? n.complete() : (n.next(e[r++]), n.closed || this.schedule());
    });
  });
}
function Pp(e, t) {
  return new dn(function(n) {
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
      return at(r == null ? void 0 : r.return) && r.return();
    };
  });
}
function Tu(e, t) {
  if (!e)
    throw new Error("Iterable cannot be null");
  return new dn(function(n) {
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
    if (xu(e))
      return Mp(e, t);
  }
  throw Eu(e);
}
function Up(e, t) {
  return t ? Bp(e, t) : Hi(e);
}
function Fp() {
  for (var e = [], t = 0; t < arguments.length; t++)
    e[t] = arguments[t];
  var n = Cp(e);
  return Up(e, n);
}
function _n(e, t) {
  return Cr(function(n, r) {
    var i = 0;
    n.subscribe(Kr(r, function(a) {
      r.next(e.call(t, a, i++));
    }));
  });
}
function Np(e, t, n, r, i, a, o, l) {
  var s = [], u = 0, d = 0, f = !1, g = function() {
    f && !s.length && !u && t.complete();
  }, v = function(p) {
    return u < r ? h(p) : s.push(p);
  }, h = function(p) {
    u++;
    var y = !1;
    Hi(n(p, d++)).subscribe(Kr(t, function(_) {
      t.next(_);
    }, function() {
      y = !0;
    }, void 0, function() {
      if (y)
        try {
          u--;
          for (var _ = function() {
            var L = s.shift();
            o || h(L);
          }; s.length && u < r; )
            _();
          g();
        } catch (L) {
          t.error(L);
        }
    }));
  };
  return e.subscribe(Kr(t, v, function() {
    f = !0, g();
  })), function() {
  };
}
function fo(e, t, n) {
  return n === void 0 && (n = 1 / 0), at(t) ? fo(function(r, i) {
    return _n(function(a, o) {
      return t(r, a, i, o);
    })(Hi(e(r, i)));
  }, n) : (typeof t == "number" && (n = t), Cr(function(r, i) {
    return Np(r, i, e, n);
  }));
}
function kp(e, t) {
  return at(t) ? fo(e, t, 1) : fo(e, 1);
}
function Fs(e) {
  return e <= 0 ? function() {
    return yp;
  } : Cr(function(t, n) {
    var r = 0;
    t.subscribe(Kr(n, function(i) {
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
  var r = at(e) || t || n ? { next: e, error: t, complete: n } : e;
  return r ? Cr(function(i, a) {
    var o;
    (o = r.subscribe) === null || o === void 0 || o.call(r);
    var l = !0;
    i.subscribe(Kr(a, function(s) {
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
      var g = f.indexOf(": ");
      return d[f.slice(0, g)] = f.slice(g + 2), d;
    }, {}) : {}, this.response = Ou(n);
    var s = t.loaded, u = t.total;
    this.loaded = s, this.total = u;
  }
  return e;
}(), aa = hu(function(e) {
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
    return aa.call(this, "ajax timeout", t, n), this.name = "AjaxTimeoutError", this;
  }
  return e.prototype = Object.create(aa.prototype), e;
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
var Zp = _n(function(e) {
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
  return new dn(function(t) {
    var n, r, i = ne({ async: !0, crossDomain: !1, withCredentials: !1, method: "GET", timeout: 0, responseType: "json" }, e), a = i.queryParams, o = i.body, l = i.headers, s = i.url;
    if (!s)
      throw new TypeError("url is required");
    if (a) {
      var u;
      if (s.includes("?")) {
        var d = s.split("?");
        if (2 < d.length)
          throw new TypeError("invalid url");
        u = new URLSearchParams(d[1]), new URLSearchParams(a).forEach(function(H, P) {
          return u.set(P, H);
        }), s = d[0] + "?" + u;
      } else
        u = new URLSearchParams(a), s = s + "?" + u;
    }
    var f = {};
    if (l)
      for (var g in l)
        l.hasOwnProperty(g) && (f[g.toLowerCase()] = l[g]);
    var v = i.crossDomain;
    !v && !("x-requested-with" in f) && (f["x-requested-with"] = "XMLHttpRequest");
    var h = i.withCredentials, p = i.xsrfCookieName, y = i.xsrfHeaderName;
    if ((h || !v) && p && y) {
      var _ = (r = (n = document == null ? void 0 : document.cookie.match(new RegExp("(^|;\\s*)(" + p + ")=([^;]*)"))) === null || n === void 0 ? void 0 : n.pop()) !== null && r !== void 0 ? r : "";
      _ && (f[y] = _);
    }
    var L = Jp(o, f), I = ne(ne({}, i), {
      url: s,
      headers: f,
      body: L
    }), E;
    E = e.createXHR ? e.createXHR() : new XMLHttpRequest();
    {
      var A = e.progressSubscriber, b = e.includeDownloadProgress, S = b === void 0 ? !1 : b, w = e.includeUploadProgress, D = w === void 0 ? !1 : w, B = function(H, P) {
        E.addEventListener(H, function() {
          var X, k = P();
          (X = A == null ? void 0 : A.error) === null || X === void 0 || X.call(A, k), t.error(k);
        });
      };
      B("timeout", function() {
        return new jp(E, I);
      }), B("abort", function() {
        return new aa("aborted", E, I);
      });
      var N = function(H, P) {
        return new Gp(P, E, I, H + "_" + P.type);
      }, z = function(H, P, X) {
        H.addEventListener(P, function(k) {
          t.next(N(X, k));
        });
      };
      D && [Na, ka, js].forEach(function(H) {
        return z(E.upload, H, Kp);
      }), A && [Na, ka].forEach(function(H) {
        return E.upload.addEventListener(H, function(P) {
          var X;
          return (X = A == null ? void 0 : A.next) === null || X === void 0 ? void 0 : X.call(A, P);
        });
      }), S && [Na, ka].forEach(function(H) {
        return z(E, H, Gs);
      });
      var K = function(H) {
        var P = "ajax error" + (H ? " " + H : "");
        t.error(new aa(P, E, I));
      };
      E.addEventListener("error", function(H) {
        var P;
        (P = A == null ? void 0 : A.error) === null || P === void 0 || P.call(A, H), K();
      }), E.addEventListener(js, function(H) {
        var P, X, k = E.status;
        if (k < 400) {
          (P = A == null ? void 0 : A.complete) === null || P === void 0 || P.call(A);
          var C = void 0;
          try {
            C = N(Gs, H);
          } catch (F) {
            t.error(F);
            return;
          }
          t.next(C), t.complete();
        } else
          (X = A == null ? void 0 : A.error) === null || X === void 0 || X.call(A, H), K(k);
      });
    }
    var fe = I.user, O = I.method, R = I.async;
    fe ? E.open(O, s, R, fe, I.password) : E.open(O, s, R), R && (E.timeout = I.timeout, E.responseType = I.responseType), "withCredentials" in E && (E.withCredentials = I.withCredentials);
    for (var g in f)
      f.hasOwnProperty(g) && E.setRequestHeader(g, f[g]);
    return L ? E.send(L) : E.send(), function() {
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
    }, this.withPreMiddleware = (n) => this.withMiddleware(n.map((r) => ({ pre: r }))), this.withPostMiddleware = (n) => this.withMiddleware(n.map((r) => ({ post: r }))), this.createRequestArgs = ({ url: n, query: r, method: i, headers: a, body: o, responseType: l }) => ({
      url: `${this.configuration.basePath}${n}${r && Object.keys(r).length ? `?${fm(r)}` : ""}`,
      method: i,
      headers: a,
      body: o instanceof FormData ? o : JSON.stringify(o),
      responseType: l ?? "json"
    }), this.rxjsRequest = (n) => Fp(n).pipe(
      _n((r) => (this.middleware.filter((i) => i.pre).forEach((i) => r = i.pre(r)), r)),
      kp(
        (r) => Ar(r).pipe(
          _n((i) => (this.middleware.filter((a) => a.post).forEach((a) => i = a.post(i)), i))
        )
      )
    ), this.clone = () => Object.assign(Object.create(Object.getPrototypeOf(this)), this), this.middleware = t.middleware;
  }
  request(t, n) {
    return this.rxjsRequest(this.createRequestArgs(t)).pipe(
      _n((r) => {
        const { status: i, response: a } = r;
        if (i >= 200 && i < 300)
          return (n == null ? void 0 : n.response) === "raw" ? r : a;
        throw r;
      })
    );
  }
}
const ln = (e) => encodeURIComponent(`${e}`), fm = (e) => Object.entries(e).map(
  ([t, n]) => n instanceof Array ? n.map((r) => `${ln(t)}=${ln(r)}`).join("&") : `${ln(t)}=${ln(n)}`
).join("&"), In = (e, t, n) => {
  if (e == null)
    throw new Error(`Parameter "${t}" was null or undefined when calling "${n}".`);
};
class hm extends dm {
  assignResourceToLocation({ locationId: t, uuid: n }, r) {
    In(t, "locationId", "assignResourceToLocation"), In(n, "uuid", "assignResourceToLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/assign".replace("{locationId}", ln(t)).replace("{uuid}", ln(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  createLocation({ location: t }, n) {
    In(t, "location", "createLocation");
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
    In(t, "locationId", "deleteLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", ln(t)),
      method: "DELETE",
      headers: r
    }, n == null ? void 0 : n.responseOpts);
  }
  getLocation({ locationId: t }, n) {
    In(t, "locationId", "getLocation");
    const r = {};
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", ln(t)),
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
    In(t, "locationId", "unassignResourceFromLocation"), In(n, "uuid", "unassignResourceFromLocation");
    const i = {};
    return this.request({
      url: "/api/locations/{locationId}/resources/{uuid}/unassign".replace("{locationId}", ln(t)).replace("{uuid}", ln(n)),
      method: "POST",
      headers: i
    }, r == null ? void 0 : r.responseOpts);
  }
  updateLocation({ locationId: t, location: n }, r) {
    In(t, "locationId", "updateLocation"), In(n, "location", "updateLocation");
    const i = {
      "Content-Type": "application/json"
    };
    return this.request({
      url: "/api/locations/{locationId}".replace("{locationId}", ln(t)),
      method: "PUT",
      headers: i,
      body: n
    }, r == null ? void 0 : r.responseOpts);
  }
}
class mi {
  constructor(t, n, r, i, a) {
    this.uuid = a, this.key = t, this.name = n, this.description = r, this.assignedResources = i;
  }
  static from(t) {
    return new mi(t.key, t.name, t.description, t.assignedResources, t.uuid);
  }
}
class Rr {
  constructor() {
    this.endpoint = "/compas-scl-data-service", this.locationsApiClient = this.createApiClient(this.endpoint);
  }
  static getInstance() {
    return Rr.instance || (Rr.instance = new Rr()), Rr.instance;
  }
  getLocations(t) {
    return this.locationsApiClient.getLocations({
      page: t == null ? void 0 : t.page,
      pageSize: t == null ? void 0 : t.pageSize
    }).pipe(
      _n((n) => n || []),
      _n((n) => n.map((r) => mi.from(r)))
    );
  }
  createLocation(t) {
    return this.locationsApiClient.createLocation({ location: t }).pipe(
      _n((n) => mi.from(n))
    );
  }
  deleteLocation(t) {
    return this.locationsApiClient.deleteLocation({ locationId: t }).pipe(_n(() => {
    }));
  }
  updateLocation(t) {
    return this.locationsApiClient.updateLocation({ locationId: t.locationId, location: t.location }).pipe(
      _n((n) => mi.from(n))
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
var Ln;
class vm {
  constructor() {
    Ue(this, Ln, Bt([]));
  }
  get store() {
    return G(this, Ln);
  }
  set(t) {
    G(this, Ln).set(t);
  }
  update(t) {
    G(this, Ln).update((n) => n.map((r) => r.uuid === t.uuid ? t : r));
  }
  add(t) {
    G(this, Ln).update((n) => [...n, t]);
  }
  remove(t) {
    G(this, Ln).update((n) => n.filter((r) => r.uuid !== t));
  }
  findById(t) {
    return Bl(G(this, Ln)).find((n) => n.uuid === t);
  }
}
Ln = new WeakMap();
oh({ en: Fh, de: Sh });
var gm = /* @__PURE__ */ J("<h3> </h3>"), pm = /* @__PURE__ */ J("<!> <!>", 1), mm = /* @__PURE__ */ J("<!> <!>", 1), bm = /* @__PURE__ */ J("<div><!> <!></div>"), _m = /* @__PURE__ */ J("<h3> </h3>"), ym = /* @__PURE__ */ J("<!> <!> <!> <!>", 1), Em = /* @__PURE__ */ J("<div><!></div>"), Sm = /* @__PURE__ */ J("<!> <!>", 1), Cm = /* @__PURE__ */ J("<!> <!>", 1), Am = /* @__PURE__ */ J("<div><!> <!></div>"), xm = /* @__PURE__ */ J("<!> <!>", 1), Im = /* @__PURE__ */ J("<!> <!>", 1), wm = /* @__PURE__ */ J('<h3 style="margin-bottom: 1rem;"> </h3> <!>', 1), Lm = /* @__PURE__ */ J('<div class="location-manager-container"><!> <!> <!> <div class="table-container svelte-1dmbgtb"><div class="table-actions svelte-1dmbgtb"><!> <!></div> <!></div></div>');
function Tm(e, t) {
  Ae(t, !0);
  const n = () => On(ah, "$_", r), [r, i] = $n(), a = Rr.getInstance(), o = new vm(), l = {
    Closed: "closed",
    Update: "update",
    Create: "create",
    Remove: "remove"
  };
  let s = /* @__PURE__ */ be(!1), u = /* @__PURE__ */ be(pe(l.Closed)), d = /* @__PURE__ */ be(!1), f = /* @__PURE__ */ be(pe(g()));
  function g() {
    return {
      uuid: void 0,
      key: "",
      name: "",
      description: "",
      assignedResources: void 0
    };
  }
  let v = /* @__PURE__ */ ge(() => [
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
  ]), h = /* @__PURE__ */ be(!0);
  yt(() => {
    setTimeout(
      () => {
        W(h, !1);
      },
      1e3
    );
  });
  const p = [
    {
      icon: "edit",
      callback: (N) => y(N),
      disabled: () => !1
    },
    {
      icon: "delete",
      callback: (N) => L(N),
      disabled: () => !1
    }
  ];
  function y(N) {
    W(f, { ...N }, !0), W(d, !0), W(u, l.Update, !0);
  }
  function _() {
    W(f, { ...g() }, !0), W(d, !0), W(u, l.Create, !0);
  }
  function L(N) {
    W(f, { ...N }, !0), W(d, !0), W(u, l.Remove, !0);
  }
  function I() {
    var N;
    try {
      const z = ((N = c(f)) == null ? void 0 : N.uuid) !== void 0 && c(f).uuid !== "";
      (z ? a.updateLocation({
        locationId: c(f).uuid,
        location: c(f)
      }) : a.createLocation(c(f))).pipe(
        Fs(1),
        ks((fe) => {
          z ? o.update(fe) : o.add(fe);
        }),
        Ns(A)
      ).subscribe();
    } catch (z) {
      console.error("Error saving location", z);
    }
  }
  function E() {
    a.deleteLocation(c(f).uuid).subscribe({
      next: () => {
        o.remove(c(f).uuid), A();
      }
    });
  }
  function A() {
    W(u, l.Closed, !0), W(d, !1), W(f, { ...g() }, !0);
  }
  function b() {
    W(s, !1), a.getLocations().pipe(
      Fs(1),
      ks((N) => {
        o.set(N);
      }),
      Ns(() => {
        W(s, !0);
      })
    ).subscribe();
  }
  yt(() => {
    b();
  });
  var S = Y(), w = V(S);
  {
    var D = (N) => {
      {
        let z = /* @__PURE__ */ ge(() => !c(h));
        Os(N, {
          get loadingDone() {
            return c(z);
          }
        });
      }
    }, B = (N) => {
      var z = Lm(), K = de(z);
      Os(K, {
        get loadingDone() {
          return c(s);
        }
      });
      var fe = oe(K, 2);
      {
        const C = (se) => {
          var ue = gm(), te = de(ue);
          ye(($) => $e(te, $), [
            () => {
              var $;
              return n()("delete_location", { values: { name: ($ = c(f)) == null ? void 0 : $.name } });
            }
          ]), x(se, ue);
        }, F = (se) => {
          var ue = bm(), te = de(ue);
          ir(te, {
            callback: E,
            variant: "raised",
            children: (re, Ie) => {
              var De = pm(), _e = V(De);
              Ts(_e, {});
              var Re = oe(_e, 2);
              tr(Re, {
                children: (He, Pe) => {
                  var ze = bt();
                  ye((he) => $e(ze, he), [() => n()("confirm")]), x(He, ze);
                },
                $$slots: { default: !0 }
              }), x(re, De);
            },
            $$slots: { default: !0 }
          });
          var $ = oe(te, 2);
          ir($, {
            callback: A,
            variant: "raised",
            isAbortAction: !0,
            children: (re, Ie) => {
              var De = mm(), _e = V(De);
              lo(_e, {});
              var Re = oe(_e, 2);
              tr(Re, {
                children: (He, Pe) => {
                  var ze = bt();
                  ye((he) => $e(ze, he), [() => n()("cancel")]), x(He, ze);
                },
                $$slots: { default: !0 }
              }), x(re, De);
            },
            $$slots: { default: !0 }
          }), x(se, ue);
        };
        let ae = /* @__PURE__ */ ge(() => c(u) === l.Remove);
        ws(fe, {
          get open() {
            return c(ae);
          },
          onClose: A,
          title: C,
          actions: F,
          $$slots: { title: !0, actions: !0 }
        });
      }
      var O = oe(fe, 2);
      {
        const C = (ue) => {
          var te = _m(), $ = de(te);
          ye((re) => $e($, re), [
            () => {
              var re;
              return c(u) === l.Update ? n()("location", { values: { name: (re = c(f)) == null ? void 0 : re.name } }) : n()("new_location");
            }
          ]), x(ue, te);
        }, F = (ue) => {
          var te = Em(), $ = de(te);
          {
            var re = (Ie) => {
              var De = ym(), _e = V(De);
              {
                var Re = (he) => {
                  tr(he, {
                    children: (Le, Be) => {
                      var T = bt();
                      ye(() => $e(T, c(f).uuid)), x(Le, T);
                    },
                    $$slots: { default: !0 }
                  });
                };
                ie(_e, (he) => {
                  c(u) === l.Update && he(Re);
                });
              }
              var He = oe(_e, 2);
              {
                let he = /* @__PURE__ */ ge(() => n()("name"));
                Ma(He, {
                  get label() {
                    return c(he);
                  },
                  get value() {
                    return c(f).name;
                  },
                  set value(Le) {
                    c(f).name = Le;
                  }
                });
              }
              var Pe = oe(He, 2);
              {
                let he = /* @__PURE__ */ ge(() => n()("key"));
                Ma(Pe, {
                  get label() {
                    return c(he);
                  },
                  get value() {
                    return c(f).key;
                  },
                  set value(Le) {
                    c(f).key = Le;
                  }
                });
              }
              var ze = oe(Pe, 2);
              {
                let he = /* @__PURE__ */ ge(() => n()("description"));
                Ma(ze, {
                  get label() {
                    return c(he);
                  },
                  get value() {
                    return c(f).description;
                  },
                  set value(Le) {
                    c(f).description = Le;
                  }
                });
              }
              x(Ie, De);
            };
            ie($, (Ie) => {
              c(f) && Ie(re);
            });
          }
          x(ue, te);
        }, ae = (ue) => {
          var te = Am(), $ = de(te);
          ir($, {
            callback: I,
            variant: "raised",
            children: (Ie, De) => {
              var _e = Sm(), Re = V(_e);
              Ts(Re, {});
              var He = oe(Re, 2);
              tr(He, {
                children: (Pe, ze) => {
                  var he = bt();
                  ye((Le) => $e(he, Le), [() => n()("save")]), x(Pe, he);
                },
                $$slots: { default: !0 }
              }), x(Ie, _e);
            },
            $$slots: { default: !0 }
          });
          var re = oe($, 2);
          ir(re, {
            callback: A,
            variant: "raised",
            isAbortAction: !0,
            children: (Ie, De) => {
              var _e = Cm(), Re = V(_e);
              lo(Re, {});
              var He = oe(Re, 2);
              tr(He, {
                children: (Pe, ze) => {
                  var he = bt();
                  ye((Le) => $e(he, Le), [() => n()("cancel")]), x(Pe, he);
                },
                $$slots: { default: !0 }
              }), x(Ie, _e);
            },
            $$slots: { default: !0 }
          }), x(ue, te);
        };
        let se = /* @__PURE__ */ ge(() => c(u) === l.Update || c(u) === l.Create);
        ws(O, {
          get open() {
            return c(se);
          },
          onClose: A,
          title: C,
          content: F,
          actions: ae,
          $$slots: { title: !0, content: !0, actions: !0 }
        });
      }
      var R = oe(O, 2), H = de(R), P = de(H);
      ir(P, {
        callback: _,
        variant: "raised",
        children: (C, F) => {
          var ae = xm(), se = V(ae);
          du(se, {});
          var ue = oe(se, 2);
          tr(ue, {
            children: (te, $) => {
              var re = bt();
              ye((Ie) => $e(re, Ie), [() => n()("add_location")]), x(te, re);
            },
            $$slots: { default: !0 }
          }), x(C, ae);
        },
        $$slots: { default: !0 }
      });
      var X = oe(P, 2);
      ir(X, {
        callback: b,
        variant: "raised",
        children: (C, F) => {
          var ae = Im(), se = V(ae);
          fu(se, {});
          var ue = oe(se, 2);
          tr(ue, {
            children: (te, $) => {
              var re = bt();
              ye((Ie) => $e(re, Ie), [() => n()("refresh")]), x(te, re);
            },
            $$slots: { default: !0 }
          }), x(C, ae);
        },
        $$slots: { default: !0 }
      });
      var k = oe(H, 2);
      lp(k, {
        style: "padding: 1rem; width: 100%; height: 100%;",
        children: (C, F) => {
          var ae = wm(), se = V(ae), ue = de(se), te = oe(se, 2);
          {
            let $ = /* @__PURE__ */ ge(() => n()("search"));
            op(te, {
              get columnDefs() {
                return c(v);
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
                return c($);
              }
            });
          }
          ye(($) => $e(ue, $), [() => n()("location_table")]), x(C, ae);
        },
        $$slots: { default: !0 }
      }), x(N, z);
    };
    ie(w, (N) => {
      c(h) ? N(D) : N(B, !1);
    });
  }
  x(e, S), xe(), i();
}
const Hu = "location-manager", Du = "0.0.1";
var Om = /* @__PURE__ */ J('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Rm(e, t) {
  Ae(t, !0);
  let n = m(t, "dev", 3, !1);
  var r = Om(), i = V(r);
  {
    var a = (s) => {
      Tm(s, {});
    };
    ie(i, (s) => {
      (t.doc || n()) && s(a);
    });
  }
  var o = oe(i, 2), l = oe(o, 2);
  ye(() => {
    Qo(o, Hu), Qo(l, Du);
  }), x(e, r), xe();
}
var kr;
class Bm extends HTMLElement {
  constructor() {
    super();
    Ue(this, kr);
    ve(this, kr, /* @__PURE__ */ be(pe({ doc: void 0, editCount: void 0 })));
  }
  get props() {
    return c(G(this, kr));
  }
  set props(n) {
    W(G(this, kr), n, !0);
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
kr = new WeakMap();
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
