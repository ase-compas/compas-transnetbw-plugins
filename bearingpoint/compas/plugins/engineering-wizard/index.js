var Jl = Object.defineProperty;
var oi = (t) => {
  throw TypeError(t);
};
var Kl = (t, e, n) => e in t ? Jl(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Kn = (t, e, n) => Kl(t, typeof e != "symbol" ? e + "" : e, n), ma = (t, e, n) => e.has(t) || oi("Cannot " + n);
var H = (t, e, n) => (ma(t, e, "read from private field"), n ? n.call(t) : e.get(t)), ye = (t, e, n) => e.has(t) ? oi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), le = (t, e, n, r) => (ma(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Ke = (t, e, n) => (ma(t, e, "access private method"), n);
const Fe = Symbol(), Ql = "http://www.w3.org/1999/xhtml", $l = "http://www.w3.org/2000/svg", es = "@attach", Ni = !1;
var Gr = Array.isArray, ts = Array.prototype.indexOf, za = Array.from, ea = Object.defineProperty, gn = Object.getOwnPropertyDescriptor, Bi = Object.getOwnPropertyDescriptors, Oi = Object.prototype, ns = Array.prototype, la = Object.getPrototypeOf, ui = Object.isExtensible;
function Cr(t) {
  return typeof t == "function";
}
const oe = () => {
};
function rs(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ui() {
  var t, e, n = new Promise((r, a) => {
    t = r, e = a;
  });
  return { promise: n, resolve: t, reject: e };
}
const dt = 2, Xa = 4, Ya = 8, Un = 16, sn = 32, yn = 64, qa = 128, kt = 256, ta = 512, $e = 1024, St = 2048, An = 4096, Zt = 8192, Vn = 16384, Ja = 32768, jn = 65536, di = 1 << 17, as = 1 << 18, zn = 1 << 19, is = 1 << 20, xa = 1 << 21, sa = 1 << 22, Wn = 1 << 23, Yt = Symbol("$state"), Vi = Symbol("legacy props"), ls = Symbol(""), er = new class extends Error {
  constructor() {
    super(...arguments);
    Kn(this, "name", "StaleReactionError");
    Kn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ka(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ss() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function os(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function us() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function ds(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function cs() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function fs(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function vs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function hs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function gs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function ps() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function bs() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function ms() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let _s = !1;
function ji(t) {
  return t === this.v;
}
function Qa(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function zi(t) {
  return !Qa(t, this.v);
}
let hr = !1, Is = !1;
function Cs() {
  hr = !0;
}
const ys = [];
function As(t, e = !1, n = !1) {
  return qr(t, /* @__PURE__ */ new Map(), "", ys, null, n);
}
function qr(t, e, n, r, a = null, i = !1) {
  if (typeof t == "object" && t !== null) {
    var l = e.get(t);
    if (l !== void 0) return l;
    if (t instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(t)
    );
    if (t instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(t)
    );
    if (Gr(t)) {
      var u = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, u), a !== null && e.set(a, u);
      for (var s = 0; s < t.length; s += 1) {
        var o = t[s];
        s in t && (u[s] = qr(o, e, n, r, null, i));
      }
      return u;
    }
    if (la(t) === Oi) {
      u = {}, e.set(t, u), a !== null && e.set(a, u);
      for (var c in t)
        u[c] = qr(
          // @ts-expect-error
          t[c],
          e,
          n,
          r,
          null,
          i
        );
      return u;
    }
    if (t instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(t)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    t.toJSON == "function" && !i)
      return qr(
        /** @type {T & { toJSON(): any } } */
        t.toJSON(),
        e,
        n,
        r,
        // Associate the instance with the toJSON clone
        t
      );
  }
  if (t instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      t
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(t)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      t
    );
  }
}
let Se = null;
function or(t) {
  Se = t;
}
function xe(t) {
  return (
    /** @type {T} */
    Xi().get(t)
  );
}
function de(t, e) {
  return Xi().set(t, e), e;
}
function ge(t, e = !1, n) {
  Se = {
    p: Se,
    c: null,
    e: null,
    s: t,
    x: null,
    l: hr && !e ? { s: null, u: null, $: [] } : null
  };
}
function pe(t) {
  var e = (
    /** @type {ComponentContext} */
    Se
  ), n = e.e;
  if (n !== null) {
    e.e = null;
    for (var r of n)
      ol(r);
  }
  return t !== void 0 && (e.x = t), Se = e.p, t ?? /** @type {T} */
  {};
}
function Dr() {
  return !hr || Se !== null && Se.l === null;
}
function Xi(t) {
  return Se === null && Ka(), Se.c ?? (Se.c = new Map(ws(Se) || void 0));
}
function ws(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Tn = [];
function Yi() {
  var t = Tn;
  Tn = [], rs(t);
}
function _n(t) {
  if (Tn.length === 0 && !Sr) {
    var e = Tn;
    queueMicrotask(() => {
      e === Tn && Yi();
    });
  }
  Tn.push(t);
}
function xs() {
  for (; Tn.length > 0; )
    Yi();
}
const Ss = /* @__PURE__ */ new WeakMap();
function qi(t) {
  var e = he;
  if (e === null)
    return ve.f |= Wn, t;
  if (e.f & Ja)
    ur(t, e);
  else {
    if (!(e.f & qa))
      throw !e.parent && t instanceof Error && Ji(t), t;
    e.b.error(t);
  }
}
function ur(t, e) {
  for (; e !== null; ) {
    if (e.f & qa)
      try {
        e.b.error(t);
        return;
      } catch (n) {
        t = n;
      }
    e = e.parent;
  }
  throw t instanceof Error && Ji(t), t;
}
function Ji(t) {
  const e = Ss.get(t);
  e && (ea(t, "message", {
    value: e.message
  }), ea(t, "stack", {
    value: e.stack
  }));
}
const Br = /* @__PURE__ */ new Set();
let Ae = null, Jr = null, je = null, Sa = /* @__PURE__ */ new Set(), zt = [], oa = null, Ra = !1, Sr = !1;
var nr, rr, Gn, Pr, ar, ir, Dn, lr, kr, Tr, Tt, Ea, Kr, La;
const ra = class ra {
  constructor() {
    ye(this, Tt);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Kn(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    ye(this, nr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    ye(this, rr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    ye(this, Gn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    ye(this, Pr, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    ye(this, ar, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    ye(this, ir, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    ye(this, Dn, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    ye(this, lr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    ye(this, kr, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    ye(this, Tr, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Kn(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var i;
    zt = [], Jr = null, this.apply();
    for (const l of e)
      Ke(this, Tt, Ea).call(this, l);
    if (H(this, Gn) === 0) {
      var n = je;
      Ke(this, Tt, La).call(this);
      var r = H(this, ir), a = H(this, Dn);
      le(this, ir, []), le(this, Dn, []), le(this, lr, []), Jr = this, Ae = null, je = n, ci(r), ci(a), Jr = null, (i = H(this, Pr)) == null || i.resolve();
    } else
      Ke(this, Tt, Kr).call(this, H(this, ir)), Ke(this, Tt, Kr).call(this, H(this, Dn)), Ke(this, Tt, Kr).call(this, H(this, lr));
    je = null;
    for (const l of H(this, ar))
      Lr(l);
    le(this, ar, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, n) {
    H(this, nr).has(e) || H(this, nr).set(e, n), this.current.set(e, e.v), je == null || je.set(e, e.v);
  }
  activate() {
    Ae = this;
  }
  deactivate() {
    Ae = null, je = null;
  }
  flush() {
    if (zt.length > 0) {
      if (this.activate(), Ki(), Ae !== null && Ae !== this)
        return;
    } else H(this, Gn) === 0 && Ke(this, Tt, La).call(this);
    this.deactivate();
    for (const e of Sa)
      if (Sa.delete(e), e(), Ae !== null)
        break;
  }
  increment() {
    le(this, Gn, H(this, Gn) + 1);
  }
  decrement() {
    le(this, Gn, H(this, Gn) - 1);
    for (const e of H(this, kr))
      st(e, St), Bn(e);
    for (const e of H(this, Tr))
      st(e, An), Bn(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    H(this, rr).add(e);
  }
  settled() {
    return (H(this, Pr) ?? le(this, Pr, Ui())).promise;
  }
  static ensure() {
    if (Ae === null) {
      const e = Ae = new ra();
      Br.add(Ae), Sr || ra.enqueue(() => {
        Ae === e && e.flush();
      });
    }
    return Ae;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    _n(e);
  }
  apply() {
  }
};
nr = new WeakMap(), rr = new WeakMap(), Gn = new WeakMap(), Pr = new WeakMap(), ar = new WeakMap(), ir = new WeakMap(), Dn = new WeakMap(), lr = new WeakMap(), kr = new WeakMap(), Tr = new WeakMap(), Tt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Ea = function(e) {
  var o;
  e.f ^= $e;
  for (var n = e.first; n !== null; ) {
    var r = n.f, a = (r & (sn | yn)) !== 0, i = a && (r & $e) !== 0, l = i || (r & Zt) !== 0 || this.skipped_effects.has(n);
    if (!l && n.fn !== null) {
      a ? n.f ^= $e : r & Xa ? H(this, Dn).push(n) : r & $e || (r & sa && ((o = n.b) != null && o.is_pending()) ? H(this, ar).push(n) : ha(n) && (n.f & Un && H(this, lr).push(n), Lr(n)));
      var u = n.first;
      if (u !== null) {
        n = u;
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
Kr = function(e) {
  for (const n of e)
    (n.f & St ? H(this, kr) : H(this, Tr)).push(n), st(n, $e);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
La = function() {
  var e;
  for (const n of H(this, rr))
    n();
  if (H(this, rr).clear(), Br.size > 1) {
    H(this, nr).clear();
    let n = !0;
    for (const r of Br) {
      if (r === this) {
        n = !1;
        continue;
      }
      const a = [];
      for (const [l, u] of this.current) {
        if (r.current.has(l))
          if (n && u !== r.current.get(l))
            r.current.set(l, u);
          else
            continue;
        a.push(l);
      }
      if (a.length === 0)
        continue;
      const i = [...r.current.keys()].filter((l) => !this.current.has(l));
      if (i.length > 0) {
        for (const l of a)
          Qi(l, i);
        if (zt.length > 0) {
          Ae = r, r.apply();
          for (const l of zt)
            Ke(e = r, Tt, Ea).call(e, l);
          zt = [], r.deactivate();
        }
      }
    }
    Ae = null;
  }
  Br.delete(this);
};
let Xt = ra;
function Rs(t) {
  var e = Sr;
  Sr = !0;
  try {
    for (var n; ; ) {
      if (xs(), zt.length === 0 && (Ae == null || Ae.flush(), zt.length === 0))
        return oa = null, /** @type {T} */
        n;
      Ki();
    }
  } finally {
    Sr = e;
  }
}
function Ki() {
  var t = tr;
  Ra = !0;
  try {
    var e = 0;
    for (gi(!0); zt.length > 0; ) {
      var n = Xt.ensure();
      if (e++ > 1e3) {
        var r, a;
        Es();
      }
      n.process(zt), pn.clear();
    }
  } finally {
    Ra = !1, gi(t), oa = null;
  }
}
function Es() {
  try {
    cs();
  } catch (t) {
    ur(t, oa);
  }
}
let rn = null;
function ci(t) {
  var e = t.length;
  if (e !== 0) {
    for (var n = 0; n < e; ) {
      var r = t[n++];
      if (!(r.f & (Vn | Zt)) && ha(r) && (rn = [], Lr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? cl(r) : r.fn = null), (rn == null ? void 0 : rn.length) > 0)) {
        pn.clear();
        for (const a of rn)
          Lr(a);
        rn = [];
      }
    }
    rn = null;
  }
}
function Qi(t, e) {
  if (t.reactions !== null)
    for (const n of t.reactions) {
      const r = n.f;
      r & dt ? Qi(
        /** @type {Derived} */
        n,
        e
      ) : r & (sa | Un) && $i(n, e) && (st(n, St), Bn(
        /** @type {Effect} */
        n
      ));
    }
}
function $i(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & dt && $i(
        /** @type {Derived} */
        n,
        e
      ))
        return !0;
  }
  return !1;
}
function Bn(t) {
  for (var e = oa = t; e.parent !== null; ) {
    e = e.parent;
    var n = e.f;
    if (Ra && e === he && n & Un)
      return;
    if (n & (yn | sn)) {
      if (!(n & $e)) return;
      e.f ^= $e;
    }
  }
  zt.push(e);
}
function Ls(t) {
  let e = 0, n = On(0), r;
  return () => {
    Xs() && (d(n), fa(() => (e === 0 && (r = Sn(() => t(() => Rr(n)))), e += 1, () => {
      _n(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Rr(n));
      });
    })));
  };
}
var Ps = jn | zn | qa;
function ks(t, e, n) {
  new Ts(t, e, n);
}
var Mt, Lt, ja, Ut, Mn, Vt, Pt, pt, jt, dn, Hn, cn, Zn, fn, aa, ia, ut, Gs, Ds, Qr, $r, Pa;
class Ts {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    ye(this, ut);
    /** @type {Boundary | null} */
    Kn(this, "parent");
    ye(this, Mt, !1);
    /** @type {TemplateNode} */
    ye(this, Lt);
    /** @type {TemplateNode | null} */
    ye(this, ja, null);
    /** @type {BoundaryProps} */
    ye(this, Ut);
    /** @type {((anchor: Node) => void)} */
    ye(this, Mn);
    /** @type {Effect} */
    ye(this, Vt);
    /** @type {Effect | null} */
    ye(this, Pt, null);
    /** @type {Effect | null} */
    ye(this, pt, null);
    /** @type {Effect | null} */
    ye(this, jt, null);
    /** @type {DocumentFragment | null} */
    ye(this, dn, null);
    ye(this, Hn, 0);
    ye(this, cn, 0);
    ye(this, Zn, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    ye(this, fn, null);
    ye(this, aa, () => {
      H(this, fn) && dr(H(this, fn), H(this, Hn));
    });
    ye(this, ia, Ls(() => (le(this, fn, On(H(this, Hn))), () => {
      le(this, fn, null);
    })));
    le(this, Lt, e), le(this, Ut, n), le(this, Mn, r), this.parent = /** @type {Effect} */
    he.b, le(this, Mt, !!H(this, Ut).pending), le(this, Vt, xn(() => {
      he.b = this;
      {
        try {
          le(this, Pt, Qe(() => r(H(this, Lt))));
        } catch (a) {
          this.error(a);
        }
        H(this, cn) > 0 ? Ke(this, ut, $r).call(this) : le(this, Mt, !1);
      }
    }, Ps));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return H(this, Mt) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!H(this, Ut).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Ke(this, ut, Pa).call(this, e), le(this, Hn, H(this, Hn) + e), Sa.add(H(this, aa));
  }
  get_effect_pending() {
    return H(this, ia).call(this), d(
      /** @type {Source<number>} */
      H(this, fn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = H(this, Ut).onerror;
    let r = H(this, Ut).failed;
    if (H(this, Zn) || !n && !r)
      throw e;
    H(this, Pt) && (Ne(H(this, Pt)), le(this, Pt, null)), H(this, pt) && (Ne(H(this, pt)), le(this, pt, null)), H(this, jt) && (Ne(H(this, jt)), le(this, jt, null));
    var a = !1, i = !1;
    const l = () => {
      if (a) {
        ms();
        return;
      }
      a = !0, i && ps(), Xt.ensure(), le(this, Hn, 0), H(this, jt) !== null && bn(H(this, jt), () => {
        le(this, jt, null);
      }), le(this, Mt, this.has_pending_snippet()), le(this, Pt, Ke(this, ut, Qr).call(this, () => (le(this, Zn, !1), Qe(() => H(this, Mn).call(this, H(this, Lt)))))), H(this, cn) > 0 ? Ke(this, ut, $r).call(this) : le(this, Mt, !1);
    };
    var u = ve;
    try {
      mt(null), i = !0, n == null || n(e, l), i = !1;
    } catch (s) {
      ur(s, H(this, Vt) && H(this, Vt).parent);
    } finally {
      mt(u);
    }
    r && _n(() => {
      le(this, jt, Ke(this, ut, Qr).call(this, () => {
        le(this, Zn, !0);
        try {
          return Qe(() => {
            r(
              H(this, Lt),
              () => e,
              () => l
            );
          });
        } catch (s) {
          return ur(
            s,
            /** @type {Effect} */
            H(this, Vt).parent
          ), null;
        } finally {
          le(this, Zn, !1);
        }
      }));
    });
  }
}
Mt = new WeakMap(), Lt = new WeakMap(), ja = new WeakMap(), Ut = new WeakMap(), Mn = new WeakMap(), Vt = new WeakMap(), Pt = new WeakMap(), pt = new WeakMap(), jt = new WeakMap(), dn = new WeakMap(), Hn = new WeakMap(), cn = new WeakMap(), Zn = new WeakMap(), fn = new WeakMap(), aa = new WeakMap(), ia = new WeakMap(), ut = new WeakSet(), Gs = function() {
  try {
    le(this, Pt, Qe(() => H(this, Mn).call(this, H(this, Lt))));
  } catch (e) {
    this.error(e);
  }
  le(this, Mt, !1);
}, Ds = function() {
  const e = H(this, Ut).pending;
  e && (le(this, pt, Qe(() => e(H(this, Lt)))), Xt.enqueue(() => {
    le(this, Pt, Ke(this, ut, Qr).call(this, () => (Xt.ensure(), Qe(() => H(this, Mn).call(this, H(this, Lt)))))), H(this, cn) > 0 ? Ke(this, ut, $r).call(this) : (bn(
      /** @type {Effect} */
      H(this, pt),
      () => {
        le(this, pt, null);
      }
    ), le(this, Mt, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
Qr = function(e) {
  var n = he, r = ve, a = Se;
  Jt(H(this, Vt)), mt(H(this, Vt)), or(H(this, Vt).ctx);
  try {
    return e();
  } catch (i) {
    return qi(i), null;
  } finally {
    Jt(n), mt(r), or(a);
  }
}, $r = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    H(this, Ut).pending
  );
  H(this, Pt) !== null && (le(this, dn, document.createDocumentFragment()), Ms(H(this, Pt), H(this, dn))), H(this, pt) === null && le(this, pt, Qe(() => e(H(this, Lt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Pa = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Ke(n = this.parent, ut, Pa).call(n, e);
    return;
  }
  le(this, cn, H(this, cn) + e), H(this, cn) === 0 && (le(this, Mt, !1), H(this, pt) && bn(H(this, pt), () => {
    le(this, pt, null);
  }), H(this, dn) && (H(this, Lt).before(H(this, dn)), le(this, dn, null)), _n(() => {
    Xt.ensure().flush();
  }));
};
function Ms(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var a = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Mr(n)
    );
    e.append(n), n = a;
  }
}
function el(t, e, n) {
  const r = Dr() ? ua : $a;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var a = Ae, i = (
    /** @type {Effect} */
    he
  ), l = Hs();
  Promise.all(e.map((u) => /* @__PURE__ */ Zs(u))).then((u) => {
    l();
    try {
      n([...t.map(r), ...u]);
    } catch (s) {
      i.f & Vn || ur(s, i);
    }
    a == null || a.deactivate(), ka();
  }).catch((u) => {
    ur(u, i);
  });
}
function Hs() {
  var t = he, e = ve, n = Se, r = Ae;
  return function() {
    Jt(t), mt(e), or(n), r == null || r.activate();
  };
}
function ka() {
  Jt(null), mt(null), or(null);
}
// @__NO_SIDE_EFFECTS__
function ua(t) {
  var e = dt | St, n = ve !== null && ve.f & dt ? (
    /** @type {Derived} */
    ve
  ) : null;
  return he === null || n !== null && n.f & kt ? e |= kt : he.f |= zn, {
    ctx: Se,
    deps: null,
    effects: null,
    equals: ji,
    f: e,
    fn: t,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Fe
    ),
    wv: 0,
    parent: n ?? he,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Zs(t, e) {
  let n = (
    /** @type {Effect | null} */
    he
  );
  n === null && ss();
  var r = (
    /** @type {Boundary} */
    n.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = On(
    /** @type {V} */
    Fe
  ), l = !ve, u = /* @__PURE__ */ new Map();
  return Js(() => {
    var h;
    var s = Ui();
    a = s.promise;
    try {
      Promise.resolve(t()).then(s.resolve, s.reject).then(ka);
    } catch (g) {
      s.reject(g), ka();
    }
    var o = (
      /** @type {Batch} */
      Ae
    ), c = r.is_pending();
    l && (r.update_pending_count(1), c || (o.increment(), (h = u.get(o)) == null || h.reject(er), u.delete(o), u.set(o, s)));
    const f = (g, v = void 0) => {
      if (c || o.activate(), v)
        v !== er && (i.f |= Wn, dr(i, v));
      else {
        i.f & Wn && (i.f ^= Wn), dr(i, g);
        for (const [p, w] of u) {
          if (u.delete(p), p === o) break;
          w.reject(er);
        }
      }
      l && (r.update_pending_count(-1), c || o.decrement());
    };
    s.promise.then(f, (g) => f(null, g || "unknown"));
  }), ca(() => {
    for (const s of u.values())
      s.reject(er);
  }), new Promise((s) => {
    function o(c) {
      function f() {
        c === a ? s(i) : o(a);
      }
      c.then(f, f);
    }
    o(a);
  });
}
// @__NO_SIDE_EFFECTS__
function ie(t) {
  const e = /* @__PURE__ */ ua(t);
  return hl(e), e;
}
// @__NO_SIDE_EFFECTS__
function $a(t) {
  const e = /* @__PURE__ */ ua(t);
  return e.equals = zi, e;
}
function tl(t) {
  var e = t.effects;
  if (e !== null) {
    t.effects = null;
    for (var n = 0; n < e.length; n += 1)
      Ne(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ws(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & dt))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function ei(t) {
  var e, n = he;
  Jt(Ws(t));
  try {
    tl(t), e = ml(t);
  } finally {
    Jt(n);
  }
  return e;
}
function nl(t) {
  var e = ei(t);
  if (t.equals(e) || (t.v = e, t.wv = pl()), !Xn)
    if (je !== null)
      je.set(t, t.v);
    else {
      var n = (vn || t.f & kt) && t.deps !== null ? An : $e;
      st(t, n);
    }
}
const pn = /* @__PURE__ */ new Map();
function On(t, e) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: t,
    reactions: null,
    equals: ji,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function $(t, e) {
  const n = On(t);
  return hl(n), n;
}
// @__NO_SIDE_EFFECTS__
function rl(t, e = !1, n = !0) {
  var a;
  const r = On(t);
  return e || (r.equals = zi), hr && n && Se !== null && Se.l !== null && ((a = Se.l).s ?? (a.s = [])).push(r), r;
}
function D(t, e, n = !1) {
  ve !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ht || ve.f & di) && Dr() && ve.f & (dt | Un | sa | di) && !(lt != null && lt.includes(t)) && gs();
  let r = n ? ce(e) : e;
  return dr(t, r);
}
function dr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Xn ? pn.set(t, e) : pn.set(t, n), t.v = e;
    var r = Xt.ensure();
    r.capture(t, n), t.f & dt && (t.f & St && ei(
      /** @type {Derived} */
      t
    ), st(t, t.f & kt ? An : $e)), t.wv = pl(), al(t, St), Dr() && he !== null && he.f & $e && !(he.f & (sn | yn)) && (Et === null ? $s([t]) : Et.push(t));
  }
  return e;
}
function Rr(t) {
  D(t, t.v + 1);
}
function al(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Dr(), a = n.length, i = 0; i < a; i++) {
      var l = n[i], u = l.f;
      if (!(!r && l === he)) {
        var s = (u & St) === 0;
        s && st(l, e), u & dt ? al(
          /** @type {Derived} */
          l,
          An
        ) : s && (u & Un && rn !== null && rn.push(
          /** @type {Effect} */
          l
        ), Bn(
          /** @type {Effect} */
          l
        ));
      }
    }
}
function ce(t) {
  if (typeof t != "object" || t === null || Yt in t)
    return t;
  const e = la(t);
  if (e !== Oi && e !== ns)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Gr(t), a = /* @__PURE__ */ $(0), i = Fn, l = (u) => {
    if (Fn === i)
      return u();
    var s = ve, o = Fn;
    mt(null), bi(i);
    var c = u();
    return mt(s), bi(o), c;
  };
  return r && n.set("length", /* @__PURE__ */ $(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(u, s, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && vs();
        var c = n.get(s);
        return c === void 0 ? c = l(() => {
          var f = /* @__PURE__ */ $(o.value);
          return n.set(s, f), f;
        }) : D(c, o.value, !0), !0;
      },
      deleteProperty(u, s) {
        var o = n.get(s);
        if (o === void 0) {
          if (s in u) {
            const c = l(() => /* @__PURE__ */ $(Fe));
            n.set(s, c), Rr(a);
          }
        } else
          D(o, Fe), Rr(a);
        return !0;
      },
      get(u, s, o) {
        var g;
        if (s === Yt)
          return t;
        var c = n.get(s), f = s in u;
        if (c === void 0 && (!f || (g = gn(u, s)) != null && g.writable) && (c = l(() => {
          var v = ce(f ? u[s] : Fe), p = /* @__PURE__ */ $(v);
          return p;
        }), n.set(s, c)), c !== void 0) {
          var h = d(c);
          return h === Fe ? void 0 : h;
        }
        return Reflect.get(u, s, o);
      },
      getOwnPropertyDescriptor(u, s) {
        var o = Reflect.getOwnPropertyDescriptor(u, s);
        if (o && "value" in o) {
          var c = n.get(s);
          c && (o.value = d(c));
        } else if (o === void 0) {
          var f = n.get(s), h = f == null ? void 0 : f.v;
          if (f !== void 0 && h !== Fe)
            return {
              enumerable: !0,
              configurable: !0,
              value: h,
              writable: !0
            };
        }
        return o;
      },
      has(u, s) {
        var h;
        if (s === Yt)
          return !0;
        var o = n.get(s), c = o !== void 0 && o.v !== Fe || Reflect.has(u, s);
        if (o !== void 0 || he !== null && (!c || (h = gn(u, s)) != null && h.writable)) {
          o === void 0 && (o = l(() => {
            var g = c ? ce(u[s]) : Fe, v = /* @__PURE__ */ $(g);
            return v;
          }), n.set(s, o));
          var f = d(o);
          if (f === Fe)
            return !1;
        }
        return c;
      },
      set(u, s, o, c) {
        var x;
        var f = n.get(s), h = s in u;
        if (r && s === "length")
          for (var g = o; g < /** @type {Source<number>} */
          f.v; g += 1) {
            var v = n.get(g + "");
            v !== void 0 ? D(v, Fe) : g in u && (v = l(() => /* @__PURE__ */ $(Fe)), n.set(g + "", v));
          }
        if (f === void 0)
          (!h || (x = gn(u, s)) != null && x.writable) && (f = l(() => /* @__PURE__ */ $(void 0)), D(f, ce(o)), n.set(s, f));
        else {
          h = f.v !== Fe;
          var p = l(() => ce(o));
          D(f, p);
        }
        var w = Reflect.getOwnPropertyDescriptor(u, s);
        if (w != null && w.set && w.set.call(c, o), !h) {
          if (r && typeof s == "string") {
            var I = (
              /** @type {Source<number>} */
              n.get("length")
            ), R = Number(s);
            Number.isInteger(R) && R >= I.v && D(I, R + 1);
          }
          Rr(a);
        }
        return !0;
      },
      ownKeys(u) {
        d(a);
        var s = Reflect.ownKeys(u).filter((f) => {
          var h = n.get(f);
          return h === void 0 || h.v !== Fe;
        });
        for (var [o, c] of n)
          c.v !== Fe && !(o in u) && s.push(o);
        return s;
      },
      setPrototypeOf() {
        hs();
      }
    }
  );
}
function fi(t) {
  try {
    if (t !== null && typeof t == "object" && Yt in t)
      return t[Yt];
  } catch {
  }
  return t;
}
function Fs(t, e) {
  return Object.is(fi(t), fi(e));
}
var vi, il, ll, sl;
function Ns() {
  if (vi === void 0) {
    vi = window, il = /Firefox/.test(navigator.userAgent);
    var t = Element.prototype, e = Node.prototype, n = Text.prototype;
    ll = gn(e, "firstChild").get, sl = gn(e, "nextSibling").get, ui(t) && (t.__click = void 0, t.__className = void 0, t.__attributes = null, t.__style = void 0, t.__e = void 0), ui(n) && (n.__t = void 0);
  }
}
function wn(t = "") {
  return document.createTextNode(t);
}
// @__NO_SIDE_EFFECTS__
function cr(t) {
  return ll.call(t);
}
// @__NO_SIDE_EFFECTS__
function Mr(t) {
  return sl.call(t);
}
function T(t, e) {
  return /* @__PURE__ */ cr(t);
}
function U(t, e = !1) {
  {
    var n = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ cr(
        /** @type {Node} */
        t
      )
    );
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Mr(n) : n;
  }
}
function B(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Mr(r);
  return r;
}
function Bs(t) {
  t.textContent = "";
}
function ti() {
  return !1;
}
function Os(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, _n(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let hi = !1;
function Us() {
  hi || (hi = !0, document.addEventListener(
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
function da(t) {
  var e = ve, n = he;
  mt(null), Jt(null);
  try {
    return t();
  } finally {
    mt(e), Jt(n);
  }
}
function Vs(t, e, n, r = n) {
  t.addEventListener(e, () => da(n));
  const a = t.__on_r;
  a ? t.__on_r = () => {
    a(), r(!0);
  } : t.__on_r = () => r(!0), Us();
}
function js(t) {
  he === null && ve === null && ds(), ve !== null && ve.f & kt && he === null && us(), Xn && os();
}
function zs(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Kt(t, e, n, r = !0) {
  var a = he;
  a !== null && a.f & Zt && (t |= Zt);
  var i = {
    ctx: Se,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: t | St,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: a,
    b: a && a.b,
    prev: null,
    teardown: null,
    transitions: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      Lr(i), i.f |= Ja;
    } catch (s) {
      throw Ne(i), s;
    }
  else e !== null && Bn(i);
  if (r) {
    var l = i;
    if (n && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && // either `null`, or a singular child
    !(l.f & zn) && (l = l.first), l !== null && (l.parent = a, a !== null && zs(l, a), ve !== null && ve.f & dt && !(t & yn))) {
      var u = (
        /** @type {Derived} */
        ve
      );
      (u.effects ?? (u.effects = [])).push(l);
    }
  }
  return i;
}
function Xs() {
  return ve !== null && !Ht;
}
function ca(t) {
  const e = Kt(Ya, null, !1);
  return st(e, $e), e.teardown = t, e;
}
function Ee(t) {
  js();
  var e = (
    /** @type {Effect} */
    he.f
  ), n = !ve && (e & sn) !== 0 && (e & Ja) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      Se
    );
    (r.e ?? (r.e = [])).push(t);
  } else
    return ol(t);
}
function ol(t) {
  return Kt(Xa | is, t, !1);
}
function Ys(t) {
  Xt.ensure();
  const e = Kt(yn | zn, t, !0);
  return () => {
    Ne(e);
  };
}
function qs(t) {
  Xt.ensure();
  const e = Kt(yn | zn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? bn(e, () => {
      Ne(e), r(void 0);
    }) : (Ne(e), r(void 0));
  });
}
function Hr(t) {
  return Kt(Xa, t, !1);
}
function Js(t) {
  return Kt(sa | zn, t, !0);
}
function fa(t, e = 0) {
  return Kt(Ya | e, t, !0);
}
function ne(t, e = [], n = []) {
  el(e, n, (r) => {
    Kt(Ya, () => t(...r.map(d)), !0);
  });
}
function xn(t, e = 0) {
  var n = Kt(Un | e, t, !0);
  return n;
}
function Qe(t, e = !0) {
  return Kt(sn | zn, t, !0, e);
}
function ul(t) {
  var e = t.teardown;
  if (e !== null) {
    const n = Xn, r = ve;
    pi(!0), mt(null);
    try {
      e.call(null);
    } finally {
      pi(n), mt(r);
    }
  }
}
function dl(t, e = !1) {
  var n = t.first;
  for (t.first = t.last = null; n !== null; ) {
    const a = n.ac;
    a !== null && da(() => {
      a.abort(er);
    });
    var r = n.next;
    n.f & yn ? n.parent = null : Ne(n, e), n = r;
  }
}
function Ks(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & sn || Ne(e), e = n;
  }
}
function Ne(t, e = !0) {
  var n = !1;
  (e || t.f & as) && t.nodes_start !== null && t.nodes_end !== null && (Qs(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), dl(t, e && !n), na(t, 0), st(t, Vn);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  ul(t);
  var a = t.parent;
  a !== null && a.first !== null && cl(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Qs(t, e) {
  for (; t !== null; ) {
    var n = t === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Mr(t)
    );
    t.remove(), t = n;
  }
}
function cl(t) {
  var e = t.parent, n = t.prev, r = t.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), e !== null && (e.first === t && (e.first = r), e.last === t && (e.last = n));
}
function bn(t, e) {
  var n = [];
  ni(t, n, !0), fl(n, () => {
    Ne(t), e && e();
  });
}
function fl(t, e) {
  var n = t.length;
  if (n > 0) {
    var r = () => --n || e();
    for (var a of t)
      a.out(r);
  } else
    e();
}
function ni(t, e, n) {
  if (!(t.f & Zt)) {
    if (t.f ^= Zt, t.transitions !== null)
      for (const l of t.transitions)
        (l.is_global || n) && e.push(l);
    for (var r = t.first; r !== null; ) {
      var a = r.next, i = (r.f & jn) !== 0 || (r.f & sn) !== 0;
      ni(r, e, i ? n : !1), r = a;
    }
  }
}
function va(t) {
  vl(t, !0);
}
function vl(t, e) {
  if (t.f & Zt) {
    t.f ^= Zt, t.f & $e || (st(t, St), Bn(t));
    for (var n = t.first; n !== null; ) {
      var r = n.next, a = (n.f & jn) !== 0 || (n.f & sn) !== 0;
      vl(n, a ? e : !1), n = r;
    }
    if (t.transitions !== null)
      for (const i of t.transitions)
        (i.is_global || e) && i.in();
  }
}
let tr = !1;
function gi(t) {
  tr = t;
}
let Xn = !1;
function pi(t) {
  Xn = t;
}
let ve = null, Ht = !1;
function mt(t) {
  ve = t;
}
let he = null;
function Jt(t) {
  he = t;
}
let lt = null;
function hl(t) {
  ve !== null && (lt === null ? lt = [t] : lt.push(t));
}
let it = null, At = 0, Et = null;
function $s(t) {
  Et = t;
}
let gl = 1, Er = 0, Fn = Er;
function bi(t) {
  Fn = t;
}
let vn = !1;
function pl() {
  return ++gl;
}
function ha(t) {
  var f;
  var e = t.f;
  if (e & St)
    return !0;
  if (e & An) {
    var n = t.deps, r = (e & kt) !== 0;
    if (n !== null) {
      var a, i, l = (e & ta) !== 0, u = r && he !== null && !vn, s = n.length;
      if ((l || u) && (he === null || !(he.f & Vn))) {
        var o = (
          /** @type {Derived} */
          t
        ), c = o.parent;
        for (a = 0; a < s; a++)
          i = n[a], (l || !((f = i == null ? void 0 : i.reactions) != null && f.includes(o))) && (i.reactions ?? (i.reactions = [])).push(o);
        l && (o.f ^= ta), u && c !== null && !(c.f & kt) && (o.f ^= kt);
      }
      for (a = 0; a < s; a++)
        if (i = n[a], ha(
          /** @type {Derived} */
          i
        ) && nl(
          /** @type {Derived} */
          i
        ), i.wv > t.wv)
          return !0;
    }
    (!r || he !== null && !vn) && st(t, $e);
  }
  return !1;
}
function bl(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(lt != null && lt.includes(t)))
    for (var a = 0; a < r.length; a++) {
      var i = r[a];
      i.f & dt ? bl(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? st(i, St) : i.f & $e && st(i, An), Bn(
        /** @type {Effect} */
        i
      ));
    }
}
function ml(t) {
  var p;
  var e = it, n = At, r = Et, a = ve, i = vn, l = lt, u = Se, s = Ht, o = Fn, c = t.f;
  it = /** @type {null | Value[]} */
  null, At = 0, Et = null, vn = (c & kt) !== 0 && (Ht || !tr || ve === null), ve = c & (sn | yn) ? null : t, lt = null, or(t.ctx), Ht = !1, Fn = ++Er, t.ac !== null && (da(() => {
    t.ac.abort(er);
  }), t.ac = null);
  try {
    t.f |= xa;
    var f = (
      /** @type {Function} */
      t.fn
    ), h = f(), g = t.deps;
    if (it !== null) {
      var v;
      if (na(t, At), g !== null && At > 0)
        for (g.length = At + it.length, v = 0; v < it.length; v++)
          g[At + v] = it[v];
      else
        t.deps = g = it;
      if (!vn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & dt && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = At; v < g.length; v++)
          ((p = g[v]).reactions ?? (p.reactions = [])).push(t);
    } else g !== null && At < g.length && (na(t, At), g.length = At);
    if (Dr() && Et !== null && !Ht && g !== null && !(t.f & (dt | An | St)))
      for (v = 0; v < /** @type {Source[]} */
      Et.length; v++)
        bl(
          Et[v],
          /** @type {Effect} */
          t
        );
    return a !== null && a !== t && (Er++, Et !== null && (r === null ? r = Et : r.push(.../** @type {Source[]} */
    Et))), t.f & Wn && (t.f ^= Wn), h;
  } catch (w) {
    return qi(w);
  } finally {
    t.f ^= xa, it = e, At = n, Et = r, ve = a, vn = i, lt = l, or(u), Ht = s, Fn = o;
  }
}
function eo(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = ts.call(n, t);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = e.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  n === null && e.f & dt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (it === null || !it.includes(e)) && (st(e, An), e.f & (kt | ta) || (e.f ^= ta), tl(
    /** @type {Derived} **/
    e
  ), na(
    /** @type {Derived} **/
    e,
    0
  ));
}
function na(t, e) {
  var n = t.deps;
  if (n !== null)
    for (var r = e; r < n.length; r++)
      eo(t, n[r]);
}
function Lr(t) {
  var e = t.f;
  if (!(e & Vn)) {
    st(t, $e);
    var n = he, r = tr;
    he = t, tr = !0;
    try {
      e & Un ? Ks(t) : dl(t), ul(t);
      var a = ml(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = gl;
      var i;
      Ni && Is && t.f & St && t.deps;
    } finally {
      tr = r, he = n;
    }
  }
}
async function _l() {
  await Promise.resolve(), Rs();
}
function d(t) {
  var e = t.f, n = (e & dt) !== 0;
  if (ve !== null && !Ht) {
    var r = he !== null && (he.f & Vn) !== 0;
    if (!r && !(lt != null && lt.includes(t))) {
      var a = ve.deps;
      if (ve.f & xa)
        t.rv < Er && (t.rv = Er, it === null && a !== null && a[At] === t ? At++ : it === null ? it = [t] : (!vn || !it.includes(t)) && it.push(t));
      else {
        (ve.deps ?? (ve.deps = [])).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [ve] : i.includes(ve) || i.push(ve);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var l = (
      /** @type {Derived} */
      t
    ), u = l.parent;
    u !== null && !(u.f & kt) && (l.f ^= kt);
  }
  if (Xn) {
    if (pn.has(t))
      return pn.get(t);
    if (n) {
      l = /** @type {Derived} */
      t;
      var s = l.v;
      return (!(l.f & $e) && l.reactions !== null || Il(l)) && (s = ei(l)), pn.set(l, s), s;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    t, je != null && je.has(l))
      return je.get(l);
    ha(l) && nl(l);
  }
  if (je != null && je.has(t))
    return je.get(t);
  if (t.f & Wn)
    throw t.v;
  return t.v;
}
function Il(t) {
  if (t.v === Fe) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (pn.has(e) || e.f & dt && Il(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Sn(t) {
  var e = Ht;
  try {
    return Ht = !0, t();
  } finally {
    Ht = e;
  }
}
const to = -7169;
function st(t, e) {
  t.f = t.f & to | e;
}
function no(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Yt in t)
      Ta(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Yt in n && Ta(n);
      }
  }
}
function Ta(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Ta(t[r], e);
      } catch {
      }
    const n = la(t);
    if (n !== Object.prototype && n !== Array.prototype && n !== Map.prototype && n !== Set.prototype && n !== Date.prototype) {
      const r = Bi(n);
      for (let a in r) {
        const i = r[a].get;
        if (i)
          try {
            i.call(t);
          } catch {
          }
      }
    }
  }
}
const Cl = /* @__PURE__ */ new Set(), Ga = /* @__PURE__ */ new Set();
function ri(t, e, n, r = {}) {
  function a(i) {
    if (r.capture || wr.call(e, i), !i.cancelBubble)
      return da(() => n == null ? void 0 : n.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? _n(() => {
    e.addEventListener(t, a, r);
  }) : e.addEventListener(t, a, r), a;
}
function ro(t, e, n, r = {}) {
  var a = ri(e, t, n, r);
  return () => {
    t.removeEventListener(e, a, r);
  };
}
function mi(t, e, n, r, a) {
  var i = { capture: r, passive: a }, l = ri(t, e, n, i);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && ca(() => {
    e.removeEventListener(t, l, i);
  });
}
function Ue(t) {
  for (var e = 0; e < t.length; e++)
    Cl.add(t[e]);
  for (var n of Ga)
    n(t);
}
let _i = null;
function wr(t) {
  var R;
  var e = this, n = (
    /** @type {Node} */
    e.ownerDocument
  ), r = t.type, a = ((R = t.composedPath) == null ? void 0 : R.call(t)) || [], i = (
    /** @type {null | Element} */
    a[0] || t.target
  );
  _i = t;
  var l = 0, u = _i === t && t.__root;
  if (u) {
    var s = a.indexOf(u);
    if (s !== -1 && (e === document || e === /** @type {any} */
    window)) {
      t.__root = e;
      return;
    }
    var o = a.indexOf(e);
    if (o === -1)
      return;
    s <= o && (l = s);
  }
  if (i = /** @type {Element} */
  a[l] || t.target, i !== e) {
    ea(t, "currentTarget", {
      configurable: !0,
      get() {
        return i || n;
      }
    });
    var c = ve, f = he;
    mt(null), Jt(null);
    try {
      for (var h, g = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var p = i["__" + r];
          if (p != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i))
            if (Gr(p)) {
              var [w, ...I] = p;
              w.apply(i, [t, ...I]);
            } else
              p.call(i, t);
        } catch (x) {
          h ? g.push(x) : h = x;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        i = v;
      }
      if (h) {
        for (let x of g)
          queueMicrotask(() => {
            throw x;
          });
        throw h;
      }
    } finally {
      t.__root = e, delete t.currentTarget, mt(c), Jt(f);
    }
  }
}
function yl(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function fr(t, e) {
  var n = (
    /** @type {Effect} */
    he
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Z(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, a, i = !t.startsWith("<!>");
  return () => {
    a === void 0 && (a = yl(i ? t : "<!>" + t), n || (a = /** @type {Node} */
    /* @__PURE__ */ cr(a)));
    var l = (
      /** @type {TemplateNode} */
      r || il ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (n) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ cr(l)
      ), s = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      fr(u, s);
    } else
      fr(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function ao(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), a = `<${n}>${r ? t : "<!>" + t}</${n}>`, i;
  return () => {
    if (!i) {
      var l = (
        /** @type {DocumentFragment} */
        yl(a)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ cr(l)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ cr(u);
    }
    var s = (
      /** @type {TemplateNode} */
      i.cloneNode(!0)
    );
    return fr(s, s), s;
  };
}
// @__NO_SIDE_EFFECTS__
function et(t, e) {
  return /* @__PURE__ */ ao(t, e, "svg");
}
function _t(t = "") {
  {
    var e = wn(t + "");
    return fr(e, e), e;
  }
}
function Q() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = wn();
  return t.append(e, n), fr(e, n), t;
}
function y(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function io(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const lo = [
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
function so(t) {
  return lo.includes(t);
}
const oo = {
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
function uo(t) {
  return t = t.toLowerCase(), oo[t] ?? t;
}
const co = ["touchstart", "touchmove"];
function fo(t) {
  return co.includes(t);
}
function Re(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function vo(t, e) {
  return ho(t, e);
}
const Qn = /* @__PURE__ */ new Map();
function ho(t, { target: e, anchor: n, props: r = {}, events: a, context: i, intro: l = !0 }) {
  Ns();
  var u = /* @__PURE__ */ new Set(), s = (f) => {
    for (var h = 0; h < f.length; h++) {
      var g = f[h];
      if (!u.has(g)) {
        u.add(g);
        var v = fo(g);
        e.addEventListener(g, wr, { passive: v });
        var p = Qn.get(g);
        p === void 0 ? (document.addEventListener(g, wr, { passive: v }), Qn.set(g, 1)) : Qn.set(g, p + 1);
      }
    }
  };
  s(za(Cl)), Ga.add(s);
  var o = void 0, c = qs(() => {
    var f = n ?? e.appendChild(wn());
    return ks(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (h) => {
        if (i) {
          ge({});
          var g = (
            /** @type {ComponentContext} */
            Se
          );
          g.c = i;
        }
        a && (r.$$events = a), o = t(h, r) || {}, i && pe();
      }
    ), () => {
      var v;
      for (var h of u) {
        e.removeEventListener(h, wr);
        var g = (
          /** @type {number} */
          Qn.get(h)
        );
        --g === 0 ? (document.removeEventListener(h, wr), Qn.delete(h)) : Qn.set(h, g);
      }
      Ga.delete(s), f !== n && ((v = f.parentNode) == null || v.removeChild(f));
    };
  });
  return go.set(o, c), o;
}
let go = /* @__PURE__ */ new WeakMap();
function se(t, e, ...n) {
  var r = t, a = oe, i;
  xn(() => {
    a !== (a = e()) && (i && (Ne(i), i = null), i = Qe(() => (
      /** @type {SnippetFn} */
      a(r, ...n)
    )));
  }, jn);
}
function ct(t) {
  Se === null && Ka(), hr && Se.l !== null ? po(Se).m.push(t) : Ee(() => {
    const e = Sn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Zr(t) {
  Se === null && Ka(), ct(() => () => Sn(t));
}
function po(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function j(t, e, n = !1) {
  var r = t, a = null, i = null, l = Fe, u = n ? jn : 0, s = !1;
  const o = (g, v = !0) => {
    s = !0, h(v, g);
  };
  var c = null;
  function f() {
    c !== null && (c.lastChild.remove(), r.before(c), c = null);
    var g = l ? a : i, v = l ? i : a;
    g && va(g), v && bn(v, () => {
      l ? i = null : a = null;
    });
  }
  const h = (g, v) => {
    if (l !== (l = g)) {
      var p = ti(), w = r;
      if (p && (c = document.createDocumentFragment(), c.append(w = wn())), l ? a ?? (a = v && Qe(() => v(w))) : i ?? (i = v && Qe(() => v(w))), p) {
        var I = (
          /** @type {Batch} */
          Ae
        ), R = l ? a : i, x = l ? i : a;
        R && I.skipped_effects.delete(R), x && I.skipped_effects.add(x), I.add_callback(f);
      } else
        f();
    }
  };
  xn(() => {
    s = !1, e(o), s || h(null, null);
  }, u);
}
function qt(t, e) {
  return e;
}
function bo(t, e, n) {
  for (var r = t.items, a = [], i = e.length, l = 0; l < i; l++)
    ni(e[l].e, a, !0);
  var u = i > 0 && a.length === 0 && n !== null;
  if (u) {
    var s = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Bs(s), s.append(
      /** @type {Element} */
      n
    ), r.clear(), Ot(t, e[0].prev, e[i - 1].next);
  }
  fl(a, () => {
    for (var o = 0; o < i; o++) {
      var c = e[o];
      u || (r.delete(c.k), Ot(t, c.prev, c.next)), Ne(c.e, !u);
    }
  });
}
function Wt(t, e, n, r, a, i = null) {
  var l = t, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, s = (e & 4) !== 0;
  if (s) {
    var o = (
      /** @type {Element} */
      t
    );
    l = o.appendChild(wn());
  }
  var c = null, f = !1, h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ $a(() => {
    var I = n();
    return Gr(I) ? I : I == null ? [] : za(I);
  }), v, p;
  function w() {
    mo(
      p,
      v,
      u,
      h,
      l,
      a,
      e,
      r,
      n
    ), i !== null && (v.length === 0 ? c ? va(c) : c = Qe(() => i(l)) : c !== null && bn(c, () => {
      c = null;
    }));
  }
  xn(() => {
    p ?? (p = /** @type {Effect} */
    he), v = /** @type {V[]} */
    d(g);
    var I = v.length;
    if (!(f && I === 0)) {
      f = I === 0;
      var R, x, b, S;
      if (ti()) {
        var A = /* @__PURE__ */ new Set(), m = (
          /** @type {Batch} */
          Ae
        );
        for (x = 0; x < I; x += 1) {
          b = v[x], S = r(b, x);
          var _ = u.items.get(S) ?? h.get(S);
          _ ? e & 3 && Al(_, b, x, e) : (R = wl(
            null,
            u,
            null,
            null,
            b,
            S,
            x,
            a,
            e,
            n,
            !0
          ), h.set(S, R)), A.add(S);
        }
        for (const [L, P] of u.items)
          A.has(L) || m.skipped_effects.add(P.e);
        m.add_callback(w);
      } else
        w();
      d(g);
    }
  });
}
function mo(t, e, n, r, a, i, l, u, s) {
  var ee, M, V, te;
  var o = (l & 8) !== 0, c = (l & 3) !== 0, f = e.length, h = n.items, g = n.first, v = g, p, w = null, I, R = [], x = [], b, S, A, m;
  if (o)
    for (m = 0; m < f; m += 1)
      b = e[m], S = u(b, m), A = h.get(S), A !== void 0 && ((ee = A.a) == null || ee.measure(), (I ?? (I = /* @__PURE__ */ new Set())).add(A));
  for (m = 0; m < f; m += 1) {
    if (b = e[m], S = u(b, m), A = h.get(S), A === void 0) {
      var _ = r.get(S);
      if (_ !== void 0) {
        r.delete(S), h.set(S, _);
        var L = w ? w.next : v;
        Ot(n, w, _), Ot(n, _, L), _a(_, L, a), w = _;
      } else {
        var P = v ? (
          /** @type {TemplateNode} */
          v.e.nodes_start
        ) : a;
        w = wl(
          P,
          n,
          w,
          w === null ? n.first : w.next,
          b,
          S,
          m,
          i,
          l,
          s
        );
      }
      h.set(S, w), R = [], x = [], v = w.next;
      continue;
    }
    if (c && Al(A, b, m, l), A.e.f & Zt && (va(A.e), o && ((M = A.a) == null || M.unfix(), (I ?? (I = /* @__PURE__ */ new Set())).delete(A))), A !== v) {
      if (p !== void 0 && p.has(A)) {
        if (R.length < x.length) {
          var F = x[0], z;
          w = F.prev;
          var X = R[0], fe = R[R.length - 1];
          for (z = 0; z < R.length; z += 1)
            _a(R[z], F, a);
          for (z = 0; z < x.length; z += 1)
            p.delete(x[z]);
          Ot(n, X.prev, fe.next), Ot(n, w, X), Ot(n, fe, F), v = F, w = fe, m -= 1, R = [], x = [];
        } else
          p.delete(A), _a(A, v, a), Ot(n, A.prev, A.next), Ot(n, A, w === null ? n.first : w.next), Ot(n, w, A), w = A;
        continue;
      }
      for (R = [], x = []; v !== null && v.k !== S; )
        v.e.f & Zt || (p ?? (p = /* @__PURE__ */ new Set())).add(v), x.push(v), v = v.next;
      if (v === null)
        continue;
      A = v;
    }
    R.push(A), w = A, v = A.next;
  }
  if (v !== null || p !== void 0) {
    for (var k = p === void 0 ? [] : za(p); v !== null; )
      v.e.f & Zt || k.push(v), v = v.next;
    var W = k.length;
    if (W > 0) {
      var O = l & 4 && f === 0 ? a : null;
      if (o) {
        for (m = 0; m < W; m += 1)
          (V = k[m].a) == null || V.measure();
        for (m = 0; m < W; m += 1)
          (te = k[m].a) == null || te.fix();
      }
      bo(n, k, O);
    }
  }
  o && _n(() => {
    var me;
    if (I !== void 0)
      for (A of I)
        (me = A.a) == null || me.apply();
  }), t.first = n.first && n.first.e, t.last = w && w.e;
  for (var N of r.values())
    Ne(N.e);
  r.clear();
}
function Al(t, e, n, r) {
  r & 1 && dr(t.v, e), r & 2 ? dr(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function wl(t, e, n, r, a, i, l, u, s, o, c) {
  var f = (s & 1) !== 0, h = (s & 16) === 0, g = f ? h ? /* @__PURE__ */ rl(a, !1, !1) : On(a) : a, v = s & 2 ? On(l) : l, p = {
    i: v,
    v: g,
    k: i,
    a: null,
    // @ts-expect-error
    e: null,
    prev: n,
    next: r
  };
  try {
    if (t === null) {
      var w = document.createDocumentFragment();
      w.append(t = wn());
    }
    return p.e = Qe(() => u(
      /** @type {Node} */
      t,
      g,
      v,
      o
    ), _s), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? c || (e.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
  }
}
function _a(t, e, n) {
  for (var r = t.next ? (
    /** @type {TemplateNode} */
    t.next.e.nodes_start
  ) : n, a = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : n, i = (
    /** @type {TemplateNode} */
    t.e.nodes_start
  ); i !== null && i !== r; ) {
    var l = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Mr(i)
    );
    a.before(i), i = l;
  }
}
function Ot(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function _o(t, e, n, r, a) {
  var u;
  var i = (u = e.$$slots) == null ? void 0 : u[n], l = !1;
  i === !0 && (i = e.children, l = !0), i === void 0 || i(t, l ? () => r : r);
}
function ai(t, e, n) {
  var r = t, a, i, l = null, u = null;
  function s() {
    i && (bn(i), i = null), l && (l.lastChild.remove(), r.before(l), l = null), i = u, u = null;
  }
  xn(() => {
    if (a !== (a = e())) {
      var o = ti();
      if (a) {
        var c = r;
        o && (l = document.createDocumentFragment(), l.append(c = wn()), i && Ae.skipped_effects.add(i)), u = Qe(() => n(c, a));
      }
      o ? Ae.add_callback(s) : s();
    }
  }, jn);
}
function Da(t, e, n, r, a, i) {
  var l, u, s = null, o = (
    /** @type {TemplateNode} */
    t
  ), c;
  xn(() => {
    const f = e() || null;
    var h = f === "svg" ? $l : null;
    f !== l && (c && (f === null ? bn(c, () => {
      c = null, u = null;
    }) : f === u ? va(c) : Ne(c)), f && f !== u && (c = Qe(() => {
      if (s = h ? document.createElementNS(h, f) : document.createElement(f), fr(s, s), r) {
        var g = (
          /** @type {TemplateNode} */
          s.appendChild(wn())
        );
        r(s, g);
      }
      he.nodes_end = s, o.before(s);
    })), l = f, l && (u = l));
  }, jn);
}
function Te(t, e, n) {
  Hr(() => {
    var r = Sn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var a = !1, i = (
        /** @type {any} */
        {}
      );
      fa(() => {
        var l = n();
        no(l), a && Qa(i, l) && (i = l, r.update(l));
      }), a = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Io(t, e) {
  var n = void 0, r;
  xn(() => {
    n !== (n = e()) && (r && (Ne(r), r = null), n && (r = Qe(() => {
      Hr(() => (
        /** @type {(node: Element) => void} */
        n(t)
      ));
    })));
  });
}
function xl(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number") r += t;
  else if (typeof t == "object") if (Array.isArray(t)) {
    var a = t.length;
    for (e = 0; e < a; e++) t[e] && (n = xl(t[e])) && (r && (r += " "), r += n);
  } else for (n in t) t[n] && (r && (r += " "), r += n);
  return r;
}
function Co() {
  for (var t, e, n = 0, r = "", a = arguments.length; n < a; n++) (t = arguments[n]) && (e = xl(t)) && (r && (r += " "), r += e);
  return r;
}
function Sl(t) {
  return typeof t == "object" ? Co(t) : t ?? "";
}
const Ii = [...` 	
\r\f \v\uFEFF`];
function yo(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var a in n)
      if (n[a])
        r = r ? r + " " + a : a;
      else if (r.length)
        for (var i = a.length, l = 0; (l = r.indexOf(a, l)) >= 0; ) {
          var u = l + i;
          (l === 0 || Ii.includes(r[l - 1])) && (u === r.length || Ii.includes(r[u])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(u + 1) : l = u;
        }
  }
  return r === "" ? null : r;
}
function Ci(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var a in t) {
    var i = t[a];
    i != null && i !== "" && (r += " " + a + ": " + i + n);
  }
  return r;
}
function Ia(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Ao(t, e) {
  if (e) {
    var n = "", r, a;
    if (Array.isArray(e) ? (r = e[0], a = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, l = 0, u = !1, s = [];
      r && s.push(...Object.keys(r).map(Ia)), a && s.push(...Object.keys(a).map(Ia));
      var o = 0, c = -1;
      const p = t.length;
      for (var f = 0; f < p; f++) {
        var h = t[f];
        if (u ? h === "/" && t[f - 1] === "*" && (u = !1) : i ? i === h && (i = !1) : h === "/" && t[f + 1] === "*" ? u = !0 : h === '"' || h === "'" ? i = h : h === "(" ? l++ : h === ")" && l--, !u && i === !1 && l === 0) {
          if (h === ":" && c === -1)
            c = f;
          else if (h === ";" || f === p - 1) {
            if (c !== -1) {
              var g = Ia(t.substring(o, c).trim());
              if (!s.includes(g)) {
                h !== ";" && f++;
                var v = t.substring(o, f).trim();
                n += " " + v + ";";
              }
            }
            o = f + 1, c = -1;
          }
        }
      }
    }
    return r && (n += Ci(r)), a && (n += Ci(a, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function In(t, e, n, r, a, i) {
  var l = t.__className;
  if (l !== n || l === void 0) {
    var u = yo(n, r, i);
    u == null ? t.removeAttribute("class") : e ? t.className = u : t.setAttribute("class", u), t.__className = n;
  } else if (i && a !== i)
    for (var s in i) {
      var o = !!i[s];
      (a == null || o !== !!a[s]) && t.classList.toggle(s, o);
    }
  return i;
}
function Ca(t, e = {}, n, r) {
  for (var a in n) {
    var i = n[a];
    e[a] !== i && (n[a] == null ? t.style.removeProperty(a) : t.style.setProperty(a, i, r));
  }
}
function Oe(t, e, n, r) {
  var a = t.__style;
  if (a !== e) {
    var i = Ao(e, r);
    i == null ? t.removeAttribute("style") : t.style.cssText = i, t.__style = e;
  } else r && (Array.isArray(r) ? (Ca(t, n == null ? void 0 : n[0], r[0]), Ca(t, n == null ? void 0 : n[1], r[1], "important")) : Ca(t, n, r));
  return r;
}
function Ma(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Gr(e))
      return bs();
    for (var r of t.options)
      r.selected = e.includes(yi(r));
    return;
  }
  for (r of t.options) {
    var a = yi(r);
    if (Fs(a, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function wo(t) {
  var e = new MutationObserver(() => {
    Ma(t, t.__value);
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
  }), ca(() => {
    e.disconnect();
  });
}
function yi(t) {
  return "__value" in t ? t.__value : t.value;
}
const yr = Symbol("class"), Ar = Symbol("style"), Rl = Symbol("is custom element"), El = Symbol("is html");
function Ai(t, e) {
  var n = ii(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function xo(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ft(t, e, n, r) {
  var a = ii(t);
  a[e] !== (a[e] = n) && (e === "loading" && (t[ls] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Ll(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function So(t, e, n, r, a = !1, i = !1) {
  var l = ii(t), u = l[Rl], s = !l[El], o = e || {}, c = t.tagName === "OPTION";
  for (var f in e)
    f in n || (n[f] = null);
  n.class ? n.class = Sl(n.class) : n[yr] && (n.class = null), n[Ar] && (n.style ?? (n.style = null));
  var h = Ll(t);
  for (const x in n) {
    let b = n[x];
    if (c && x === "value" && b == null) {
      t.value = t.__value = "", o[x] = b;
      continue;
    }
    if (x === "class") {
      var g = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      In(t, g, b, r, e == null ? void 0 : e[yr], n[yr]), o[x] = b, o[yr] = n[yr];
      continue;
    }
    if (x === "style") {
      Oe(t, b, e == null ? void 0 : e[Ar], n[Ar]), o[x] = b, o[Ar] = n[Ar];
      continue;
    }
    var v = o[x];
    if (!(b === v && !(b === void 0 && t.hasAttribute(x)))) {
      o[x] = b;
      var p = x[0] + x[1];
      if (p !== "$$")
        if (p === "on") {
          const S = {}, A = "$$" + x;
          let m = x.slice(2);
          var w = so(m);
          if (io(m) && (m = m.slice(0, -7), S.capture = !0), !w && v) {
            if (b != null) continue;
            t.removeEventListener(m, o[A], S), o[A] = null;
          }
          if (b != null)
            if (w)
              t[`__${m}`] = b, Ue([m]);
            else {
              let _ = function(L) {
                o[x].call(this, L);
              };
              o[A] = ri(m, t, _, S);
            }
          else w && (t[`__${m}`] = void 0);
        } else if (x === "style")
          Ft(t, x, b);
        else if (x === "autofocus")
          Os(
            /** @type {HTMLElement} */
            t,
            !!b
          );
        else if (!u && (x === "__value" || x === "value" && b != null))
          t.value = t.__value = b;
        else if (x === "selected" && c)
          xo(
            /** @type {HTMLOptionElement} */
            t,
            b
          );
        else {
          var I = x;
          s || (I = uo(I));
          var R = I === "defaultValue" || I === "defaultChecked";
          if (b == null && !u && !R)
            if (l[x] = null, I === "value" || I === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                t
              );
              const A = e === void 0;
              if (I === "value") {
                let m = S.defaultValue;
                S.removeAttribute(I), S.defaultValue = m, S.value = S.__value = A ? m : null;
              } else {
                let m = S.defaultChecked;
                S.removeAttribute(I), S.defaultChecked = m, S.checked = A ? m : !1;
              }
            } else
              t.removeAttribute(x);
          else R || h.includes(I) && (u || typeof b != "string") ? (t[I] = b, I in l && (l[I] = Fe)) : typeof b != "function" && Ft(t, I, b);
        }
    }
  }
  return o;
}
function Ze(t, e, n = [], r = [], a, i = !1, l = !1) {
  el(n, r, (u) => {
    var s = void 0, o = {}, c = t.nodeName === "SELECT", f = !1;
    if (xn(() => {
      var g = e(...u.map(d)), v = So(
        t,
        s,
        g,
        a,
        i,
        l
      );
      f && c && "value" in g && Ma(
        /** @type {HTMLSelectElement} */
        t,
        g.value
      );
      for (let w of Object.getOwnPropertySymbols(o))
        g[w] || Ne(o[w]);
      for (let w of Object.getOwnPropertySymbols(g)) {
        var p = g[w];
        w.description === es && (!s || p !== s[w]) && (o[w] && Ne(o[w]), o[w] = Qe(() => Io(t, () => p))), v[w] = p;
      }
      s = v;
    }), c) {
      var h = (
        /** @type {HTMLSelectElement} */
        t
      );
      Hr(() => {
        Ma(
          h,
          /** @type {Record<string | symbol, any>} */
          s.value,
          !0
        ), wo(h);
      });
    }
    f = !0;
  });
}
function ii(t) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    t.__attributes ?? (t.__attributes = {
      [Rl]: t.nodeName.includes("-"),
      [El]: t.namespaceURI === Ql
    })
  );
}
var wi = /* @__PURE__ */ new Map();
function Ll(t) {
  var e = t.getAttribute("is") || t.nodeName, n = wi.get(e);
  if (n) return n;
  wi.set(e, n = []);
  for (var r, a = t, i = Element.prototype; i !== a; ) {
    r = Bi(a);
    for (var l in r)
      r[l].set && n.push(l);
    a = la(a);
  }
  return n;
}
function Ro(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Vs(t, "input", async (a) => {
    var i = a ? t.defaultValue : t.value;
    if (i = ya(t) ? Aa(i) : i, n(i), Ae !== null && r.add(Ae), await _l(), i !== (i = e())) {
      var l = t.selectionStart, u = t.selectionEnd, s = t.value.length;
      if (t.value = i ?? "", u !== null) {
        var o = t.value.length;
        l === u && u === s && o > s ? (t.selectionStart = o, t.selectionEnd = o) : (t.selectionStart = l, t.selectionEnd = Math.min(u, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Sn(e) == null && t.value && (n(ya(t) ? Aa(t.value) : t.value), Ae !== null && r.add(Ae)), fa(() => {
    var a = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Jr ?? Ae
      );
      if (r.has(i))
        return;
    }
    ya(t) && a === Aa(t.value) || t.type === "date" && !a && !t.value || a !== t.value && (t.value = a ?? "");
  });
}
function ya(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Aa(t) {
  return t === "" ? null : +t;
}
function xi(t, e) {
  return t === e || (t == null ? void 0 : t[Yt]) === e;
}
function Ie(t = {}, e, n, r) {
  return Hr(() => {
    var a, i;
    return fa(() => {
      a = i, i = [], Sn(() => {
        t !== n(...i) && (e(t, ...i), a && xi(n(...a), t) && e(null, ...a));
      });
    }), () => {
      _n(() => {
        i && xi(n(...i), t) && e(null, ...i);
      });
    };
  }), t;
}
function Pl(t, e, n) {
  if (t == null)
    return e(void 0), oe;
  const r = Sn(
    () => t.subscribe(
      e,
      // @ts-expect-error
      n
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const $n = [];
function Nn(t, e = oe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function a(u) {
    if (Qa(t, u) && (t = u, n)) {
      const s = !$n.length;
      for (const o of r)
        o[1](), $n.push(o, t);
      if (s) {
        for (let o = 0; o < $n.length; o += 2)
          $n[o][0]($n[o + 1]);
        $n.length = 0;
      }
    }
  }
  function i(u) {
    a(u(
      /** @type {T} */
      t
    ));
  }
  function l(u, s = oe) {
    const o = [u, s];
    return r.add(o), r.size === 1 && (n = e(a, i) || oe), u(
      /** @type {T} */
      t
    ), () => {
      r.delete(o), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: a, update: i, subscribe: l };
}
function Eo(t) {
  let e;
  return Pl(t, (n) => e = n)(), e;
}
let Or = !1, Ha = Symbol();
function Za(t, e, n) {
  const r = n[e] ?? (n[e] = {
    store: null,
    source: /* @__PURE__ */ rl(void 0),
    unsubscribe: oe
  });
  if (r.store !== t && !(Ha in n))
    if (r.unsubscribe(), r.store = t ?? null, t == null)
      r.source.v = void 0, r.unsubscribe = oe;
    else {
      var a = !0;
      r.unsubscribe = Pl(t, (i) => {
        a ? r.source.v = i : D(r.source, i);
      }), a = !1;
    }
  return t && Ha in n ? Eo(t) : d(r.source);
}
function Wa(t, e) {
  return t.set(e), e;
}
function li() {
  const t = {};
  function e() {
    ca(() => {
      for (var n in t)
        t[n].unsubscribe();
      ea(t, Ha, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [t, e];
}
function Lo(t) {
  var e = Or;
  try {
    return Or = !1, [t(), Or];
  } finally {
    Or = e;
  }
}
const Po = {
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
function Xe(t, e, n) {
  return new Proxy(
    { props: t, exclude: e },
    Po
  );
}
const ko = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Cr(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let a = t.props[r];
      Cr(a) && (a = a());
      const i = gn(a, e);
      if (i && i.set)
        return i.set(n), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (Cr(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const a = gn(r, e);
        return a && !a.configurable && (a.configurable = !0), a;
      }
    }
  },
  has(t, e) {
    if (e === Yt || e === Vi) return !1;
    for (let n of t.props)
      if (Cr(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (Cr(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function xt(...t) {
  return new Proxy({ props: t }, ko);
}
function C(t, e, n, r) {
  var x;
  var a = !hr || (n & 2) !== 0, i = (n & 8) !== 0, l = (n & 16) !== 0, u = (
    /** @type {V} */
    r
  ), s = !0, o = () => (s && (s = !1, u = l ? Sn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), c;
  if (i) {
    var f = Yt in t || Vi in t;
    c = ((x = gn(t, e)) == null ? void 0 : x.set) ?? (f && e in t ? (b) => t[e] = b : void 0);
  }
  var h, g = !1;
  i ? [h, g] = Lo(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = o(), c && (a && fs(), c(h)));
  var v;
  if (a ? v = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b === void 0 ? o() : (s = !0, b);
  } : v = () => {
    var b = (
      /** @type {V} */
      t[e]
    );
    return b !== void 0 && (u = /** @type {V} */
    void 0), b === void 0 ? u : b;
  }, a && !(n & 4))
    return v;
  if (c) {
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      function(b, S) {
        return arguments.length > 0 ? ((!a || !S || p || g) && c(S ? v() : b), b) : v();
      }
    );
  }
  var w = !1, I = (n & 1 ? ua : $a)(() => (w = !1, v()));
  i && d(I);
  var R = (
    /** @type {Effect} */
    he
  );
  return (
    /** @type {() => V} */
    function(b, S) {
      if (arguments.length > 0) {
        const A = S ? d(I) : a && i ? ce(b) : b;
        return D(I, A), w = !0, u !== void 0 && (u = A), b;
      }
      return Xn && w || R.f & Vn ? I.v : d(I);
    }
  );
}
const To = "5";
var Fi;
typeof window < "u" && ((Fi = window.__svelte ?? (window.__svelte = {})).v ?? (Fi.v = /* @__PURE__ */ new Set())).add(To);
function Be(t) {
  return Object.entries(t).filter(([e, n]) => e !== "" && n).map(([e]) => e).join(" ");
}
function bt(t, e, n, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!t)
    throw new Error("Tried to dispatch event without element.");
  const a = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: n }));
  return t == null || t.dispatchEvent(a), a;
}
function Fa(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let a = 0; a < n.length; a++) {
    const i = n[a], l = i.indexOf("$");
    l !== -1 && e.indexOf(i.substring(0, l + 1)) !== -1 || e.indexOf(i) === -1 && (r[i] = t[i]);
  }
  return r;
}
function an(t, e) {
  let n = Object.getOwnPropertyNames(t);
  const r = {};
  for (let a = 0; a < n.length; a++) {
    const i = n[a];
    i.substring(0, e.length) === e && (r[i.substring(e.length)] = t[i]);
  }
  return r;
}
class ga {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(e, n, r, a) {
    this.elementMap.has(e) || this.elementMap.set(e, {});
    const i = this.elementMap.get(e);
    if (i == null)
      throw new Error("Event map couldn't be created.");
    n in i || (i[n] = /* @__PURE__ */ new Map()), i[n].set(r, ro(e, n, r, a));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, n, r) {
    const a = this.elementMap.get(e);
    if (a == null || !(n in a))
      return;
    const i = a[n], l = i.get(r);
    l != null && (l(), i.delete(r), i.size === 0 && (delete a[n], Object.keys(a).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, n) => {
      for (let [r, a] of Object.entries(e))
        a.forEach((i, l) => {
          i();
        });
    }), this.elementMap.clear();
  }
}
function J(t, e) {
  let n = [];
  if (e)
    for (let r = 0; r < e.length; r++) {
      const a = e[r], i = Array.isArray(a) ? a[0] : a;
      Array.isArray(a) && a.length > 1 ? n.push(i(t, a[1])) : n.push(i(t));
    }
  return {
    update(r) {
      if ((r && r.length || 0) != n.length)
        throw new Error("You must not change the length of an actions array.");
      if (r)
        for (let a = 0; a < r.length; a++) {
          const i = n[a];
          if (i && i.update) {
            const l = r[a];
            Array.isArray(l) && l.length > 1 ? i.update(l[1]) : i.update();
          }
        }
    },
    destroy() {
      for (let r = 0; r < n.length; r++) {
        const a = n[r];
        a && a.destroy && a.destroy();
      }
    }
  };
}
var Ur;
function Go(t, e) {
  e === void 0 && (e = !1);
  var n = t.CSS, r = Ur;
  if (typeof Ur == "boolean" && !e)
    return Ur;
  var a = n && typeof n.supports == "function";
  if (!a)
    return !1;
  var i = n.supports("--css-vars", "yes"), l = n.supports("(--css-vars: yes)") && n.supports("color", "#00000000");
  return r = i || l, e || (Ur = r), r;
}
function Do(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, a = e.y, i = r + n.left, l = a + n.top, u, s;
  if (t.type === "touchstart") {
    var o = t;
    u = o.changedTouches[0].pageX - i, s = o.changedTouches[0].pageY - l;
  } else {
    var c = t;
    u = c.pageX - i, s = c.pageY - l;
  }
  return { x: u, y: s };
}
var Na = function(t, e) {
  return Na = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
  }, Na(t, e);
};
function gr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Na(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ot = function() {
  return ot = Object.assign || function(e) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ot.apply(this, arguments);
};
function Mo(t, e, n, r) {
  function a(i) {
    return i instanceof n ? i : new n(function(l) {
      l(i);
    });
  }
  return new (n || (n = Promise))(function(i, l) {
    function u(c) {
      try {
        o(r.next(c));
      } catch (f) {
        l(f);
      }
    }
    function s(c) {
      try {
        o(r.throw(c));
      } catch (f) {
        l(f);
      }
    }
    function o(c) {
      c.done ? i(c.value) : a(c.value).then(u, s);
    }
    o((r = r.apply(t, e || [])).next());
  });
}
function Ho(t, e) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, l = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return l.next = u(0), l.throw = u(1), l.return = u(2), typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function u(o) {
    return function(c) {
      return s([o, c]);
    };
  }
  function s(o) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; l && (l = 0, o[0] && (n = 0)), n; ) try {
      if (r = 1, a && (i = o[0] & 2 ? a.return : o[0] ? a.throw || ((i = a.return) && i.call(a), 0) : a.next) && !(i = i.call(a, o[1])).done) return i;
      switch (a = 0, i && (o = [o[0] & 2, i.value]), o[0]) {
        case 0:
        case 1:
          i = o;
          break;
        case 4:
          return n.label++, { value: o[1], done: !1 };
        case 5:
          n.label++, a = o[1], o = [0];
          continue;
        case 7:
          o = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (i = n.trys, !(i = i.length > 0 && i[i.length - 1]) && (o[0] === 6 || o[0] === 2)) {
            n = 0;
            continue;
          }
          if (o[0] === 3 && (!i || o[1] > i[0] && o[1] < i[3])) {
            n.label = o[1];
            break;
          }
          if (o[0] === 6 && n.label < i[1]) {
            n.label = i[1], i = o;
            break;
          }
          if (i && n.label < i[2]) {
            n.label = i[2], n.ops.push(o);
            break;
          }
          i[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      o = e.call(t, n);
    } catch (c) {
      o = [6, c], a = 0;
    } finally {
      r = i = 0;
    }
    if (o[0] & 5) throw o[1];
    return { value: o[0] ? o[1] : void 0, done: !0 };
  }
}
function hn(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, n = e && t[e], r = 0;
  if (n) return n.call(t);
  if (t && typeof t.length == "number") return {
    next: function() {
      return t && r >= t.length && (t = void 0), { value: t && t[r++], done: !t };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
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
var pr = (
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
function Zo(t) {
  return t === void 0 && (t = window), Wo(t) ? { passive: !0 } : !1;
}
function Wo(t) {
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
const kl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: Zo
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
function Fo(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Tl(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Tl(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function No(t) {
  var e = t;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var n = e.cloneNode(!0);
  n.style.setProperty("position", "absolute"), n.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(n);
  var r = n.scrollWidth;
  return document.documentElement.removeChild(n), r;
}
const Gl = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: Fo,
  estimateScrollWidth: No,
  matches: Tl
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
var Bo = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Oo = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Si = {
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
var Ri = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Ei = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], Vr = [], Uo = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n) {
      var r = t.call(this, ot(ot({}, e.defaultAdapter), n)) || this;
      return r.activationAnimationHasEnded = !1, r.activationTimer = 0, r.fgDeactivationRemovalTimer = 0, r.fgScale = "0", r.frame = { width: 0, height: 0 }, r.initialSize = 0, r.layoutFrame = 0, r.maxRadius = 0, r.unboundedCoords = { left: 0, top: 0 }, r.activationState = r.defaultActivationState(), r.activationTimerCallback = function() {
        r.activationAnimationHasEnded = !0, r.runDeactivationUXLogicIfReady();
      }, r.activateHandler = function(a) {
        r.activateImpl(a);
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
        return Bo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Oo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Si;
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
        var a = e.cssClasses, i = a.ROOT, l = a.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.addClass(i), n.adapter.isUnbounded() && (n.adapter.addClass(l), n.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var n = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, a = r.ROOT, i = r.UNBOUNDED;
        requestAnimationFrame(function() {
          n.adapter.removeClass(a), n.adapter.removeClass(i), n.removeCssVars();
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
      var r, a;
      if (n) {
        try {
          for (var i = hn(Ri), l = i.next(); !l.done; l = i.next()) {
            var u = l.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
          }
        } catch (s) {
          r = { error: s };
        } finally {
          try {
            l && !l.done && (a = i.return) && a.call(i);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(n) {
      var r, a;
      if (n.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var i = hn(Ei), l = i.next(); !l.done; l = i.next()) {
            var u = l.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
          }
        } catch (s) {
          r = { error: s };
        } finally {
          try {
            l && !l.done && (a = i.return) && a.call(i);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var n, r;
      try {
        for (var a = hn(Ri), i = a.next(); !i.done; i = a.next()) {
          var l = i.value;
          this.adapter.deregisterInteractionHandler(l, this.activateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          i && !i.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var n, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var a = hn(Ei), i = a.next(); !i.done; i = a.next()) {
          var l = i.value;
          this.adapter.deregisterDocumentInteractionHandler(l, this.deactivateHandler);
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          i && !i.done && (r = a.return) && r.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var n = this, r = e.strings, a = Object.keys(r);
      a.forEach(function(i) {
        i.indexOf("VAR_") === 0 && n.adapter.updateCssVariable(r[i], null);
      });
    }, e.prototype.activateImpl = function(n) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var a = this.activationState;
        if (!a.isActivated) {
          var i = this.previousActivationEvent, l = i && n !== void 0 && i.type !== n.type;
          if (!l) {
            a.isActivated = !0, a.isProgrammatic = n === void 0, a.activationEvent = n, a.wasActivatedByPointer = a.isProgrammatic ? !1 : n !== void 0 && (n.type === "mousedown" || n.type === "touchstart" || n.type === "pointerdown");
            var u = n !== void 0 && Vr.length > 0 && Vr.some(function(s) {
              return r.adapter.containsEventTarget(s);
            });
            if (u) {
              this.resetActivationState();
              return;
            }
            n !== void 0 && (Vr.push(n.target), this.registerDeactivationHandlers(n)), a.wasElementMadeActive = this.checkElementMadeActive(n), a.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              Vr = [], !a.wasElementMadeActive && n !== void 0 && (n.key === " " || n.keyCode === 32) && (a.wasElementMadeActive = r.checkElementMadeActive(n), a.wasElementMadeActive && r.animateActivation()), a.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(n) {
      return n !== void 0 && n.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var n = this, r = e.strings, a = r.VAR_FG_TRANSLATE_START, i = r.VAR_FG_TRANSLATE_END, l = e.cssClasses, u = l.FG_DEACTIVATION, s = l.FG_ACTIVATION, o = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var h = this.getFgTranslationCoordinates(), g = h.startPoint, v = h.endPoint;
        c = g.x + "px, " + g.y + "px", f = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(a, c), this.adapter.updateCssVariable(i, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, o);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, a = n.wasActivatedByPointer, i;
      a ? i = Do(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : i = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, i = {
        x: i.x - this.initialSize / 2,
        y: i.y - this.initialSize / 2
      };
      var l = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: i, endPoint: l };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var n = this, r = e.cssClasses.FG_DEACTIVATION, a = this.activationState, i = a.hasDeactivationUXRun, l = a.isActivated, u = i || !l;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        n.adapter.removeClass(r);
      }, Si.FG_DEACTIVATION_MS));
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
        var a = ot({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          n.animateDeactivation(a);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          n.activationState.hasDeactivationUXRun = !0, n.animateDeactivation(a), n.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(n) {
      var r = n.wasActivatedByPointer, a = n.wasElementMadeActive;
      (r || a) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var n = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), a = function() {
        var l = Math.sqrt(Math.pow(n.frame.width, 2) + Math.pow(n.frame.height, 2));
        return l + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : a();
      var i = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && i % 2 !== 0 ? this.initialSize = i - 1 : this.initialSize = i, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var n = e.strings, r = n.VAR_FG_SIZE, a = n.VAR_LEFT, i = n.VAR_TOP, l = n.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(l, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(a, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(i, this.unboundedCoords.top + "px"));
    }, e;
  }(pr)
);
const { applyPassive: Li } = kl, { matches: Vo } = Gl;
function kn(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: a = !1, color: i, active: l, rippleElement: u, eventTarget: s, activeTarget: o, addClass: c = (v) => t.classList.add(v), removeClass: f = (v) => t.classList.remove(v), addStyle: h = (v, p) => t.style.setProperty(v, p), initPromise: g = Promise.resolve() } = {}) {
  let v, p = new ga(), w = xe("SMUI:addLayoutListener"), I, R = l, x = s, b = o;
  function S() {
    n ? (c("mdc-ripple-surface"), i === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : i === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), v && R !== l && (R = l, l ? v.activate() : l === !1 && v.deactivate()), e && !v ? (v = new Uo({
      addClass: c,
      browserSupportsCssVars: () => Go(window),
      computeBoundingRect: () => (u || t).getBoundingClientRect(),
      containsEventTarget: (m) => t.contains(m),
      deregisterDocumentInteractionHandler: (m, _) => p.off(document.documentElement, m, _),
      deregisterInteractionHandler: (m, _) => p.off(s || t, m, _),
      deregisterResizeHandler: (m) => window.removeEventListener("resize", m),
      getWindowPageOffset: () => {
        var m, _;
        return {
          x: (m = window.pageXOffset) !== null && m !== void 0 ? m : window.scrollX,
          y: (_ = window.pageYOffset) !== null && _ !== void 0 ? _ : window.scrollY
        };
      },
      isSurfaceActive: () => l ?? Vo(o || t, ":active"),
      isSurfaceDisabled: () => !!a,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (m, _) => {
        const L = Li();
        p.on(document.documentElement, m, _, typeof L == "boolean" ? { capture: L } : L);
      },
      registerInteractionHandler: (m, _) => {
        const L = Li();
        p.on(s || t, m, _, typeof L == "boolean" ? { capture: L } : L);
      },
      registerResizeHandler: (m) => p.on(window, "resize", m),
      removeClass: f,
      updateCssVariable: h
    }), g.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && g.then(() => {
      v && (v.destroy(), v = void 0, p.clear());
    }), v && (x !== s || b !== o) && (x = s, b = o, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && c("mdc-ripple-upgraded--unbounded");
  }
  S(), w && (I = w(A));
  function A() {
    v && v.layout();
  }
  return {
    update(m) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: a,
        color: i,
        active: l,
        rippleElement: u,
        eventTarget: s,
        activeTarget: o,
        addClass: c,
        removeClass: f,
        addStyle: h,
        initPromise: g
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (_) => t.classList.add(_), removeClass: (_) => t.classList.remove(_), addStyle: (_, L) => t.style.setProperty(_, L), initPromise: Promise.resolve() }, m)), S();
    },
    destroy() {
      v && (v.destroy(), v = void 0, p.clear(), f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), I && I();
    }
  };
}
var jo = /* @__PURE__ */ et("<svg><!></svg>");
function Dl(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = C(e, "tag", 3, "div"), a = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const i = /* @__PURE__ */ ie(() => [
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
  let l;
  function u() {
    return l;
  }
  var s = { getElement: u }, o = Q(), c = U(o);
  {
    var f = (g) => {
      var v = jo();
      Ze(v, () => ({ ...a }));
      var p = T(v);
      se(p, () => e.children ?? oe), Ie(v, (w) => l = w, () => l), Te(v, (w, I) => J == null ? void 0 : J(w, I), n), y(g, v);
    }, h = (g) => {
      var v = Q(), p = U(v);
      {
        var w = (R) => {
          var x = Q(), b = U(x);
          Da(b, r, !1, (S, A) => {
            Ie(S, (m) => l = m, () => l), Te(S, (m, _) => J == null ? void 0 : J(m, _), n), Ze(S, () => ({ ...a }));
          }), y(R, x);
        }, I = (R) => {
          var x = Q(), b = U(x);
          Da(b, r, !1, (S, A) => {
            Ie(S, (L) => l = L, () => l), Te(S, (L, P) => J == null ? void 0 : J(L, P), n), Ze(S, () => ({ ...a }));
            var m = Q(), _ = U(m);
            se(_, () => e.children ?? oe), y(A, m);
          }), y(R, x);
        };
        j(
          p,
          (R) => {
            d(i) ? R(w) : R(I, !1);
          },
          !0
        );
      }
      y(g, v);
    };
    j(c, (g) => {
      r() === "svg" ? g(f) : g(h, !1);
    });
  }
  return y(t, o), pe(s);
}
function jr(t, e) {
  ge(e, !0);
  const [n, r] = li(), a = Nn(e.value);
  de(e.key, a), Ee(() => {
    Wa(a, e.value);
  }), Zr(() => {
    a.set(void 0);
  });
  var i = Q(), l = U(i);
  se(l, () => e.children ?? oe), y(t, i), pe(), r();
}
var zo = /* @__PURE__ */ Z('<div class="mdc-button__touch"></div>'), Xo = /* @__PURE__ */ Z('<div class="mdc-button__ripple"></div> <!><!>', 1);
function vr(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = C(e, "class", 3, ""), a = C(e, "style", 3, ""), i = C(e, "ripple", 3, !0), l = C(e, "color", 3, "primary"), u = C(e, "variant", 3, "text"), s = C(e, "touch", 3, !1), o = C(e, "action", 3, "close"), c = C(e, "defaultAction", 3, !1), f = C(e, "secondary", 3, !1), h = C(e, "component", 3, Dl), g = C(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ Xe(e, [
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
  ]), p, w = ce({}), I = ce({}), R = xe("SMUI:button:context");
  const x = /* @__PURE__ */ ie(() => R === "dialog:action" && o() != null ? { "data-mdc-dialog-action": o() } : { action: o() }), b = /* @__PURE__ */ ie(() => R === "dialog:action" && c() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ ie(() => R === "banner" ? {} : { secondary: f() });
  let A = e.disabled;
  Ee(() => {
    if (A !== e.disabled) {
      if (p) {
        const k = F();
        "blur" in k && k.blur();
      }
      A = v.disabled;
    }
  }), de("SMUI:label:context", "button"), de("SMUI:icon:context", "button");
  function m(k) {
    w[k] || (w[k] = !0);
  }
  function _(k) {
    (!(k in w) || w[k]) && (w[k] = !1);
  }
  function L(k, W) {
    I[k] != W && (W === "" || W == null ? delete I[k] : I[k] = W);
  }
  function P() {
    R === "banner" && bt(F(), f() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function F() {
    return p.getElement();
  }
  var z = { getElement: F }, X = Q(), fe = U(X);
  {
    let k = /* @__PURE__ */ ie(() => [
      [
        kn,
        {
          ripple: i(),
          unbounded: !1,
          color: l(),
          disabled: !!e.disabled,
          addClass: m,
          removeClass: _,
          addStyle: L
        }
      ],
      ...n()
    ]), W = /* @__PURE__ */ ie(() => Be({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
      "smui-button--color-secondary": l() === "secondary",
      "mdc-button--touch": s(),
      "mdc-card__action": R === "card:action",
      "mdc-card__action--button": R === "card:action",
      "mdc-dialog__button": R === "dialog:action",
      "mdc-top-app-bar__navigation-icon": R === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": R === "top-app-bar:action",
      "mdc-snackbar__action": R === "snackbar:actions",
      "mdc-banner__secondary-action": R === "banner" && f(),
      "mdc-banner__primary-action": R === "banner" && !f(),
      "mdc-tooltip__action": R === "tooltip:rich-actions",
      ...w,
      [r()]: !0
    })), O = /* @__PURE__ */ ie(() => Object.entries(I).map(([N, ee]) => `${N}: ${ee};`).concat([a()]).join(" "));
    ai(fe, h, (N, ee) => {
      Ie(
        ee(N, xt(
          {
            get tag() {
              return g();
            },
            get use() {
              return d(k);
            },
            get class() {
              return d(W);
            },
            get style() {
              return d(O);
            }
          },
          () => d(x),
          () => d(b),
          () => d(S),
          {
            get href() {
              return e.href;
            }
          },
          () => v,
          {
            onclick: (M) => {
              var V;
              P(), (V = e.onclick) == null || V.call(e, M);
            },
            children: (M, V) => {
              var te = Xo(), me = B(U(te), 2);
              se(me, () => e.children ?? oe);
              var be = B(me);
              {
                var re = (ae) => {
                  var ue = zo();
                  y(ae, ue);
                };
                j(be, (ae) => {
                  s() && ae(re);
                });
              }
              y(M, te);
            },
            $$slots: { default: !0 }
          }
        )),
        (M) => p = M,
        () => p
      );
    });
  }
  return y(t, X), pe(z);
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
var Yo = {
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
var qo = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n) {
      var r = t.call(this, ot(ot({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Yo;
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
      var r = e.cssClasses, a = r.LABEL_FLOAT_ABOVE, i = r.LABEL_SHAKE;
      n ? this.adapter.addClass(a) : (this.adapter.removeClass(a), this.adapter.removeClass(i));
    }, e.prototype.setRequired = function(n) {
      var r = e.cssClasses.LABEL_REQUIRED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var n = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(n);
    }, e;
  }(pr)
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
var Ln = {
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
var Jo = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n) {
      var r = t.call(this, ot(ot({}, e.defaultAdapter), n)) || this;
      return r.transitionEndHandler = function(a) {
        r.handleTransitionEnd(a);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ln;
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
      this.adapter.removeClass(Ln.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(Ln.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(n) {
      this.adapter.setStyle("transform-origin", n + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(Ln.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(n) {
      var r = this.adapter.hasClass(Ln.LINE_RIPPLE_DEACTIVATING);
      n.propertyName === "opacity" && r && (this.adapter.removeClass(Ln.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(Ln.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(pr)
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
var Ko = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Pi = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Qo = {
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
var $o = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n) {
      return t.call(this, ot(ot({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Ko;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Qo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Pi;
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
      n > 0 && (n += Pi.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(n), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var n = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(n), this.adapter.removeNotchWidthProperty();
    }, e;
  }(pr)
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
var wa = {
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
}, eu = {
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
}, ki = {
  LABEL_SCALE: 0.75
}, tu = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], nu = [
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
var Ti = ["mousedown", "touchstart"], Gi = ["click", "keydown"], ru = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var a = t.call(this, ot(ot({}, e.defaultAdapter), n)) || this;
      return a.isFocused = !1, a.receivedUserInput = !1, a.valid = !0, a.useNativeValidation = !0, a.validateOnValueChange = !0, a.helperText = r.helperText, a.characterCounter = r.characterCounter, a.leadingIcon = r.leadingIcon, a.trailingIcon = r.trailingIcon, a.inputFocusHandler = function() {
        a.activateFocus();
      }, a.inputBlurHandler = function() {
        a.deactivateFocus();
      }, a.inputInputHandler = function() {
        a.handleInput();
      }, a.setPointerXOffset = function(i) {
        a.setTransformOrigin(i);
      }, a.textFieldInteractionHandler = function() {
        a.handleTextFieldInteraction();
      }, a.validationAttributeChangeHandler = function(i) {
        a.handleValidationAttributeChange(i);
      }, a;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return eu;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return wa;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ki;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var n = this.getNativeInput().type;
        return nu.indexOf(n) >= 0;
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
      var n, r, a, i;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var l = hn(Ti), u = l.next(); !u.done; u = l.next()) {
          var s = u.value;
          this.adapter.registerInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          u && !u.done && (r = l.return) && r.call(l);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var o = hn(Gi), c = o.next(); !c.done; c = o.next()) {
          var s = c.value;
          this.adapter.registerTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (f) {
        a = { error: f };
      } finally {
        try {
          c && !c.done && (i = o.return) && i.call(o);
        } finally {
          if (a) throw a.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var n, r, a, i;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var l = hn(Ti), u = l.next(); !u.done; u = l.next()) {
          var s = u.value;
          this.adapter.deregisterInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          u && !u.done && (r = l.return) && r.call(l);
        } finally {
          if (n) throw n.error;
        }
      }
      try {
        for (var o = hn(Gi), c = o.next(); !c.done; c = o.next()) {
          var s = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(s, this.textFieldInteractionHandler);
        }
      } catch (f) {
        a = { error: f };
      } finally {
        try {
          c && !c.done && (i = o.return) && i.call(o);
        } finally {
          if (a) throw a.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var n = this.adapter.getNativeInput();
      n && n.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(n) {
      var r = this;
      n.some(function(a) {
        return tu.indexOf(a) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), n.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(n) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (n) {
          var r = this.adapter.getLabelWidth() * ki.LABEL_SCALE;
          this.adapter.notchOutline(r);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(n) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var r = n.touches, a = r ? r[0] : n, i = a.target.getBoundingClientRect(), l = a.clientX - i.left;
        this.adapter.setLineRippleTransformOrigin(l);
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
        var a = this.helperText.isValidation();
        if (!a)
          return;
        var i = this.helperText.isVisible(), l = this.helperText.getId();
        i && l ? this.adapter.setInputAttr(wa.ARIA_DESCRIBEDBY, l) : this.adapter.removeInputAttr(wa.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(n) {
      var r = e.cssClasses.FOCUSED;
      n ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.styleDisabled = function(n) {
      var r = e.cssClasses, a = r.DISABLED, i = r.INVALID;
      n ? (this.adapter.addClass(a), this.adapter.removeClass(i)) : this.adapter.removeClass(a), this.leadingIcon && this.leadingIcon.setDisabled(n), this.trailingIcon && this.trailingIcon.setDisabled(n);
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
  }(pr)
), au = /* @__PURE__ */ Z("<span><!></span>"), iu = /* @__PURE__ */ Z("<label><!></label>");
function Di(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = C(e, "class", 3, ""), a = C(e, "style", 3, ""), i = C(e, "floatAbove", 15, !1), l = C(e, "required", 15, !1), u = C(e, "wrapped", 3, !1), s = /* @__PURE__ */ Xe(e, [
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
  ]), o, c = /* @__PURE__ */ $(void 0), f = new ga(), h = ce({}), g = ce({}), v = xe("SMUI:generic:input:props") ?? {}, p = i();
  Ee(() => {
    d(c) && p !== i() && (p = i(), d(c).float(i()));
  });
  let w = l();
  Ee(() => {
    d(c) && w !== l() && (w = l(), d(c).setRequired(l()));
  });
  const I = xe("SMUI:floating-label:mount"), R = xe("SMUI:floating-label:unmount");
  ct(() => {
    D(
      c,
      new qo({
        addClass: x,
        removeClass: b,
        getWidth: () => {
          var V, te;
          const N = F(), ee = N.cloneNode(!0);
          (V = N.parentNode) == null || V.appendChild(ee), ee.classList.add("smui-floating-label--remove-transition"), ee.classList.add("smui-floating-label--force-size"), ee.classList.remove("mdc-floating-label--float-above");
          const M = ee.scrollWidth;
          return (te = N.parentNode) == null || te.removeChild(ee), M;
        },
        registerInteractionHandler: (N, ee) => f.on(F(), N, ee),
        deregisterInteractionHandler: (N, ee) => f.off(F(), N, ee)
      }),
      !0
    );
    const O = {
      get element() {
        return F();
      },
      addStyle: S,
      removeStyle: A
    };
    return I && I(O), d(c).init(), () => {
      var N;
      R && R(O), (N = d(c)) == null || N.destroy(), f.clear();
    };
  });
  function x(O) {
    h[O] || (h[O] = !0);
  }
  function b(O) {
    (!(O in h) || h[O]) && (h[O] = !1);
  }
  function S(O, N) {
    g[O] != N && (N === "" || N == null ? delete g[O] : g[O] = N);
  }
  function A(O) {
    O in g && delete g[O];
  }
  function m(O) {
    var N;
    (N = d(c)) == null || N.shake(O);
  }
  function _(O) {
    i(O);
  }
  function L(O) {
    l(O);
  }
  function P() {
    if (d(c) == null)
      throw new Error("Instance is undefined.");
    return d(c).getWidth();
  }
  function F() {
    return o;
  }
  var z = { shake: m, float: _, setRequired: L, getWidth: P, getElement: F }, X = Q(), fe = U(X);
  {
    var k = (O) => {
      var N = au();
      Ze(N, (M, V) => ({ class: M, style: V, ...s }), [
        () => Be({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": i(),
          "mdc-floating-label--required": l(),
          ...h,
          [r()]: !0
        }),
        () => Object.entries(g).map(([M, V]) => `${M}: ${V};`).concat([a()]).join(" ")
      ]);
      var ee = T(N);
      se(ee, () => e.children ?? oe), Ie(N, (M) => o = M, () => o), Te(N, (M, V) => J == null ? void 0 : J(M, V), n), y(O, N);
    }, W = (O) => {
      var N = iu();
      Ze(
        N,
        (M, V) => ({
          class: M,
          style: V,
          for: e.for || (v ? v.id : void 0),
          ...s
        }),
        [
          () => Be({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": i(),
            "mdc-floating-label--required": l(),
            ...h,
            [r()]: !0
          }),
          () => Object.entries(g).map(([M, V]) => `${M}: ${V};`).concat([a()]).join(" ")
        ]
      );
      var ee = T(N);
      se(ee, () => e.children ?? oe), Ie(N, (M) => o = M, () => o), Te(N, (M, V) => J == null ? void 0 : J(M, V), n), y(O, N);
    };
    j(fe, (O) => {
      u() ? O(k) : O(W, !1);
    });
  }
  return y(t, X), pe(z);
}
var lu = /* @__PURE__ */ Z("<div></div>");
function su(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = C(e, "class", 3, ""), a = C(e, "style", 3, ""), i = C(e, "active", 3, !1), l = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, s = /* @__PURE__ */ $(void 0), o = new ga(), c = ce({}), f = ce({});
  ct(() => (D(
    s,
    new Jo({
      addClass: g,
      removeClass: v,
      hasClass: h,
      setStyle: p,
      registerEventHandler: (A, m) => o.on(x(), A, m),
      deregisterEventHandler: (A, m) => o.off(x(), A, m)
    }),
    !0
  ), d(s).init(), () => {
    var A;
    (A = d(s)) == null || A.destroy(), o.clear();
  }));
  function h(A) {
    return A in c ? c[A] : x().classList.contains(A);
  }
  function g(A) {
    c[A] || (c[A] = !0);
  }
  function v(A) {
    (!(A in c) || c[A]) && (c[A] = !1);
  }
  function p(A, m) {
    f[A] != m && (m === "" || m == null ? delete f[A] : f[A] = m);
  }
  function w() {
    var A;
    (A = d(s)) == null || A.activate();
  }
  function I() {
    var A;
    (A = d(s)) == null || A.deactivate();
  }
  function R(A) {
    var m;
    (m = d(s)) == null || m.setRippleCenter(A);
  }
  function x() {
    return u;
  }
  var b = { activate: w, deactivate: I, setRippleCenter: R, getElement: x }, S = lu();
  return Ze(S, (A, m) => ({ class: A, style: m, ...l }), [
    () => Be({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": i(),
      ...c,
      [r()]: !0
    }),
    () => Object.entries(f).map(([A, m]) => `${A}: ${m};`).concat([a()]).join(" ")
  ]), Ie(S, (A) => u = A, () => u), Te(S, (A, m) => J == null ? void 0 : J(A, m), n), y(t, S), pe(b);
}
var ou = /* @__PURE__ */ Z('<div class="mdc-notched-outline__notch"><!></div>'), uu = /* @__PURE__ */ Z('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function du(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = C(e, "class", 3, ""), a = C(e, "notched", 3, !1), i = C(e, "noLabel", 3, !1), l = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, s = /* @__PURE__ */ $(void 0), o = /* @__PURE__ */ $(void 0), c = ce({}), f = ce({}), h;
  Ee(() => {
    d(o) !== h && (d(o) ? (d(o).addStyle("transition-duration", "0s"), g("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      d(o) && d(o).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), h = d(o));
  }), de("SMUI:floating-label:mount", (_) => {
    D(o, _, !0);
  }), de("SMUI:floating-label:unmount", () => {
    D(o, void 0);
  }), ct(() => (D(
    s,
    new $o({
      addClass: g,
      removeClass: v,
      setNotchWidthProperty: (_) => p("width", _ + "px"),
      removeNotchWidthProperty: () => w("width")
    }),
    !0
  ), d(s).init(), () => {
    var _;
    (_ = d(s)) == null || _.destroy();
  }));
  function g(_) {
    c[_] || (c[_] = !0);
  }
  function v(_) {
    (!(_ in c) || c[_]) && (c[_] = !1);
  }
  function p(_, L) {
    f[_] != L && (L === "" || L == null ? delete f[_] : f[_] = L);
  }
  function w(_) {
    _ in f && delete f[_];
  }
  function I(_) {
    var L;
    (L = d(s)) == null || L.notch(_);
  }
  function R() {
    var _;
    (_ = d(s)) == null || _.closeNotch();
  }
  function x() {
    return u;
  }
  var b = { notch: I, closeNotch: R, getElement: x }, S = uu();
  Ze(S, (_) => ({ class: _, ...l }), [
    () => Be({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": a(),
      "mdc-notched-outline--no-label": i(),
      ...c,
      [r()]: !0
    })
  ]);
  var A = B(T(S), 2);
  {
    var m = (_) => {
      var L = ou(), P = T(L);
      se(P, () => e.children ?? oe), ne((F) => Oe(L, F), [
        () => Object.entries(f).map(([F, z]) => `${F}: ${z};`).join(" ")
      ]), y(_, L);
    };
    j(A, (_) => {
      i() || _(m);
    });
  }
  return Ie(S, (_) => u = _, () => u), Te(S, (_, L) => J == null ? void 0 : J(_, L), n), y(t, S), pe(b);
}
function si(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = C(e, "class", 3, ""), a = C(e, "component", 3, Dl), i = C(e, "tag", 3, "div"), l = C(e, "_smuiClass", 3, ""), u = C(e, "_smuiClassMap", 23, () => ({})), s = C(e, "_smuiContexts", 19, () => ({})), o = C(e, "_smuiProps", 19, () => ({})), c = /* @__PURE__ */ Xe(e, [
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
  const h = [];
  Object.entries(u()).forEach(([I, R]) => {
    const x = xe(R);
    x && "subscribe" in x && h.push(x.subscribe((b) => {
      u()[I] = b;
    }));
  });
  for (let I in s())
    s().hasOwnProperty(I) && de(I, s()[I]);
  Zr(() => {
    for (const I of h)
      I();
  });
  function g() {
    return f.getElement();
  }
  var v = { getElement: g }, p = Q(), w = U(p);
  {
    let I = /* @__PURE__ */ ie(() => Be({
      [l()]: !0,
      ...u(),
      [r()]: !0
    }));
    ai(w, a, (R, x) => {
      Ie(
        x(R, xt(
          {
            get tag() {
              return i();
            },
            get use() {
              return n();
            },
            get class() {
              return d(I);
            }
          },
          o,
          () => c,
          {
            children: (b, S) => {
              var A = Q(), m = U(A);
              se(m, () => e.children ?? oe), y(b, A);
            },
            $$slots: { default: !0 }
          }
        )),
        (b) => f = b,
        () => f
      );
    });
  }
  return y(t, p), pe(v);
}
function cu(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function a() {
    return r.getElement();
  }
  var i = { getElement: a };
  return Ie(
    si(t, xt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (l, u) => {
        var s = Q(), o = U(s);
        se(o, () => e.children ?? oe), y(l, s);
      },
      $$slots: { default: !0 }
    })),
    (l) => r = l,
    () => r
  ), pe(i);
}
function fu(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function a() {
    return r.getElement();
  }
  var i = { getElement: a };
  return Ie(
    si(t, xt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (l, u) => {
          var s = Q(), o = U(s);
          se(o, () => e.children ?? oe), y(l, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => r = l,
    () => r
  ), pe(i);
}
function vu(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function a() {
    return r.getElement();
  }
  var i = { getElement: a };
  return Ie(
    si(t, xt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (l, u) => {
          var s = Q(), o = U(s);
          se(o, () => e.children ?? oe), y(l, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => r = l,
    () => r
  ), pe(i);
}
var hu = /* @__PURE__ */ Z("<input/>");
function gu(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = C(e, "class", 3, ""), a = C(e, "type", 3, "text"), i = C(e, "placeholder", 3, " "), l = C(e, "value", 15), u = C(e, "files", 15, null), s = C(e, "dirty", 15, !1), o = C(e, "invalid", 15, !1), c = C(e, "updateInvalid", 3, !0), f = C(e, "initialInvalid", 3, !1), h = C(e, "emptyValueNull", 19, () => l() === null), g = C(e, "emptyValueUndefined", 19, () => l() === void 0), v = /* @__PURE__ */ Xe(e, [
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
  ]), p, w = ce({}), I = ce({});
  Ee(() => {
    a() === "file" ? delete I.value : I.value = l() == null ? "" : l();
  }), ct(() => {
    c() && f() && o(P().matches(":invalid"));
  });
  function R(k) {
    return k === "" ? Number.NaN : +k;
  }
  function x(k) {
    if (a() === "file") {
      u(k.currentTarget.files);
      return;
    }
    if (k.currentTarget.value === "" && h()) {
      l(null);
      return;
    }
    if (k.currentTarget.value === "" && g()) {
      l(void 0);
      return;
    }
    switch (a()) {
      case "number":
      case "range":
        l(R(k.currentTarget.value));
        break;
      default:
        l(k.currentTarget.value);
        break;
    }
  }
  function b(k) {
    (a() === "file" || a() === "range") && x(k), s(!0), c() && o(P().matches(":invalid"));
  }
  function S(k) {
    return k in w ? w[k] ?? null : P().getAttribute(k);
  }
  function A(k, W) {
    w[k] !== W && (w[k] = W);
  }
  function m(k) {
    (!(k in w) || w[k] != null) && (w[k] = void 0);
  }
  function _() {
    P().focus();
  }
  function L() {
    P().blur();
  }
  function P() {
    return p;
  }
  var F = { getAttr: S, addAttr: A, removeAttr: m, focus: _, blur: L, getElement: P }, z = hu(), X = (k) => {
    var W;
    a() !== "file" && x(k), (W = e.oninput) == null || W.call(e, k);
  }, fe = (k) => {
    var W;
    b(k), (W = e.onchange) == null || W.call(e, k);
  };
  return Ze(
    z,
    (k) => ({
      class: k,
      type: a(),
      placeholder: i(),
      ...I,
      ...w,
      ...v,
      oninput: X,
      onchange: fe
    }),
    [
      () => Be({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Ie(z, (k) => p = k, () => p), Te(z, (k, W) => J == null ? void 0 : J(k, W), n), y(t, z), pe(F);
}
var pu = /* @__PURE__ */ Z("<textarea></textarea>");
function bu(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = C(e, "class", 3, ""), a = C(e, "style", 3, ""), i = C(e, "value", 15, ""), l = C(e, "dirty", 15, !1), u = C(e, "invalid", 15, !1), s = C(e, "updateInvalid", 3, !0), o = C(e, "initialInvalid", 3, !1), c = C(e, "resizable", 3, !0), f = /* @__PURE__ */ Xe(e, [
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
  ]), h, g = ce({});
  ct(() => {
    s() && o() && u(b().matches(":invalid"));
  });
  function v() {
    l(!0), s() && u(b().matches(":invalid"));
  }
  function p(_) {
    return _ in g ? g[_] ?? null : b().getAttribute(_);
  }
  function w(_, L) {
    g[_] !== L && (g[_] = L);
  }
  function I(_) {
    (!(_ in g) || g[_] != null) && (g[_] = void 0);
  }
  function R() {
    b().focus();
  }
  function x() {
    b().blur();
  }
  function b() {
    return h;
  }
  var S = { getAttr: p, addAttr: w, removeAttr: I, focus: R, blur: x, getElement: b }, A = pu(), m = (_) => {
    var L;
    v(), (L = e.onchange) == null || L.call(e, _);
  };
  return Ze(
    A,
    (_) => ({
      class: _,
      style: `${c() ? "" : "resize: none; "}${a()}`,
      ...g,
      ...f,
      onchange: m
    }),
    [
      () => Be({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Ie(A, (_) => h = _, () => h), Te(A, (_, L) => J == null ? void 0 : J(_, L), n), Hr(() => Ro(A, i)), y(t, A), pe(S);
}
var mu = /* @__PURE__ */ Z('<span class="mdc-text-field__ripple"></span>'), _u = /* @__PURE__ */ Z("<!> <!>", 1), Iu = /* @__PURE__ */ Z("<span><!> <!></span>"), Cu = /* @__PURE__ */ Z("<!> <!> <!>", 1), yu = /* @__PURE__ */ Z("<label><!> <!> <!> <!> <!> <!> <!></label>"), Au = /* @__PURE__ */ Z("<div><!> <!> <!> <!> <!></div>"), wu = /* @__PURE__ */ Z("<!> <!>", 1);
function Ml(t, e) {
  ge(e, !0);
  const { applyPassive: n } = kl;
  let r = () => {
  };
  function a(K) {
    return K === r;
  }
  let i = C(e, "use", 19, () => []), l = C(e, "class", 3, ""), u = C(e, "style", 3, ""), s = C(e, "ripple", 3, !0), o = C(e, "disabled", 3, !1), c = C(e, "required", 3, !1), f = C(e, "textarea", 3, !1), h = C(e, "variant", 19, () => f() ? "outlined" : "standard"), g = C(e, "noLabel", 3, !1), v = C(e, "type", 3, "text"), p = C(e, "value", 15), w = C(e, "files", 15, r), I = C(e, "invalid", 15, r), R = C(e, "updateInvalid", 19, () => a(I())), x = C(e, "initialInvalid", 3, !1), b = C(e, "dirty", 15, !1), S = C(e, "validateOnValueChange", 19, R), A = C(e, "useNativeValidation", 19, R), m = C(e, "withLeadingIcon", 3, r), _ = C(e, "withTrailingIcon", 3, r), L = C(e, "input", 7), P = C(e, "floatingLabel", 7), F = C(e, "lineRipple", 7), z = C(e, "notchedOutline", 7), X = /* @__PURE__ */ Xe(e, [
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
  const fe = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !a(w());
  a(w()) && w(null), a(I()) && I(!1);
  let k, W = /* @__PURE__ */ $(void 0), O = new ga(), N = ce({}), ee = ce({}), M = /* @__PURE__ */ $(void 0), V = /* @__PURE__ */ $(!1), te = /* @__PURE__ */ $(ce(x())), me = xe("SMUI:addLayoutListener"), be, re, ae = new Promise((K) => re = K), ue, Le, We, tt;
  const He = /* @__PURE__ */ ie(() => L() && L().getElement());
  Ee(() => {
    (b() || d(te) || !R()) && d(W) && d(W).isValid() !== !I() && (R() ? I(!d(W).isValid()) : d(W).setValid(!I()));
  }), Ee(() => {
    d(W) && d(W).getValidateOnValueChange() !== S() && d(W).setValidateOnValueChange(a(S()) ? !1 : S());
  }), Ee(() => {
    d(W) && d(W).setUseNativeValidation(a(A()) ? !0 : A());
  }), Ee(() => {
    d(W) && d(W).setDisabled(o());
  });
  let ft = p();
  Ee(() => {
    if (d(W) && fe && ft !== p()) {
      ft = p();
      const K = `${p() == null ? "" : p()}`;
      d(W).getValue() !== K && d(W).setValue(K);
    }
  }), me && (be = me(E)), de("SMUI:textfield:leading-icon:mount", (K) => {
    ue = K;
  }), de("SMUI:textfield:leading-icon:unmount", () => {
    ue = void 0;
  }), de("SMUI:textfield:trailing-icon:mount", (K) => {
    Le = K;
  }), de("SMUI:textfield:trailing-icon:unmount", () => {
    Le = void 0;
  }), de("SMUI:textfield:helper-text:id", (K) => {
    D(M, K, !0);
  }), de("SMUI:textfield:helper-text:mount", (K) => {
    We = K;
  }), de("SMUI:textfield:helper-text:unmount", () => {
    D(M, void 0), We = void 0;
  }), de("SMUI:textfield:character-counter:mount", (K) => {
    tt = K;
  }), de("SMUI:textfield:character-counter:unmount", () => {
    tt = void 0;
  }), ct(() => {
    var K;
    if (D(
      W,
      new ru(
        {
          // getRootAdapterMethods_
          addClass: Rt,
          removeClass: It,
          hasClass: Nt,
          registerTextFieldInteractionHandler: (q, ke) => O.on(G(), q, ke),
          deregisterTextFieldInteractionHandler: (q, ke) => O.off(G(), q, ke),
          registerValidationAttributeChangeHandler: (q) => {
            const ke = (vt) => vt.map(($t) => $t.attributeName).filter(($t) => $t), Ye = new MutationObserver((vt) => {
              A() && q(ke(vt));
            }), qe = { attributes: !0 };
            return L() && Ye.observe(L().getElement(), qe), Ye;
          },
          deregisterValidationAttributeChangeHandler: (q) => {
            q.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var q;
            return ((q = L()) == null ? void 0 : q.getElement()) ?? null;
          },
          setInputAttr: (q, ke) => {
            var Ye;
            (Ye = L()) == null || Ye.addAttr(q, ke);
          },
          removeInputAttr: (q) => {
            var ke;
            (ke = L()) == null || ke.removeAttr(q);
          },
          isFocused: () => {
            var q;
            return document.activeElement === ((q = L()) == null ? void 0 : q.getElement());
          },
          registerInputInteractionHandler: (q, ke) => {
            var qe;
            const Ye = (qe = L()) == null ? void 0 : qe.getElement();
            if (Ye) {
              const vt = n();
              O.on(Ye, q, ke, typeof vt == "boolean" ? { capture: vt } : vt);
            }
          },
          deregisterInputInteractionHandler: (q, ke) => {
            var qe;
            const Ye = (qe = L()) == null ? void 0 : qe.getElement();
            Ye && O.off(Ye, q, ke);
          },
          // getLabelAdapterMethods_
          floatLabel: (q) => P() && P().float(q),
          getLabelWidth: () => P() ? P().getWidth() : 0,
          hasLabel: () => !!P(),
          shakeLabel: (q) => P() && P().shake(q),
          setLabelRequired: (q) => P() && P().setRequired(q),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => F() && F().activate(),
          deactivateLineRipple: () => F() && F().deactivate(),
          setLineRippleTransformOrigin: (q) => F() && F().setRippleCenter(q),
          // getOutlineAdapterMethods_
          closeOutline: () => z() && z().closeNotch(),
          hasOutline: () => !!z(),
          notchOutline: (q) => z() && z().notch(q)
        },
        {
          get helperText() {
            return We;
          },
          get characterCounter() {
            return tt;
          },
          get leadingIcon() {
            return ue;
          },
          get trailingIcon() {
            return Le;
          }
        }
      ),
      !0
    ), fe) {
      if (L() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (K = d(W)) == null || K.init();
    } else
      _l().then(() => {
        var q;
        if (L() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (q = d(W)) == null || q.init();
      });
    return re(), () => {
      var q;
      (q = d(W)) == null || q.destroy(), O.clear();
    };
  }), Zr(() => {
    be && be();
  });
  function Nt(K) {
    return K in N ? N[K] ?? null : G().classList.contains(K);
  }
  function Rt(K) {
    N[K] || (N[K] = !0);
  }
  function It(K) {
    (!(K in N) || N[K]) && (N[K] = !1);
  }
  function Qt(K, q) {
    ee[K] != q && (q === "" || q == null ? delete ee[K] : ee[K] = q);
  }
  function br() {
    var K;
    (K = L()) == null || K.focus();
  }
  function mr() {
    var K;
    (K = L()) == null || K.blur();
  }
  function E() {
    if (d(W)) {
      const K = d(W).shouldFloat;
      d(W).notchOutline(K);
    }
  }
  function G() {
    return k;
  }
  var Y = { focus: br, blur: mr, layout: E, getElement: G }, Ce = wu(), nt = U(Ce);
  {
    var Yn = (K) => {
      var q = yu();
      Ze(q, (_e, Pe, De) => ({ class: _e, style: Pe, for: void 0, ...De }), [
        () => Be({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": o(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": h() === "filled",
          "mdc-text-field--outlined": h() === "outlined",
          "smui-text-field--standard": h() === "standard" && !f(),
          "mdc-text-field--no-label": g() || e.label == null,
          "mdc-text-field--label-floating": d(V) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": a(m()) ? e.leadingIcon : m(),
          "mdc-text-field--with-trailing-icon": a(_()) ? e.trailingIcon : _(),
          "mdc-text-field--with-internal-counter": f() && e.internalCounter,
          "mdc-text-field--invalid": I(),
          ...N,
          [l()]: !0
        }),
        () => Object.entries(ee).map(([_e, Pe]) => `${_e}: ${Pe};`).concat([u()]).join(" "),
        () => Fa(X, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var ke = T(q);
      {
        var Ye = (_e) => {
          var Pe = _u(), De = U(Pe);
          {
            var Ct = (Ve) => {
              var rt = mu();
              y(Ve, rt);
            };
            j(De, (Ve) => {
              h() === "filled" && Ve(Ct);
            });
          }
          var en = B(De, 2);
          {
            var Me = (Ve) => {
              {
                let rt = /* @__PURE__ */ ie(() => d(V) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), we = /* @__PURE__ */ ie(() => an(X, "label$"));
                Ie(
                  Di(Ve, xt(
                    {
                      get floatAbove() {
                        return d(rt);
                      },
                      get required() {
                        return c();
                      },
                      wrapped: !0
                    },
                    () => d(we),
                    {
                      children: (at, Jn) => {
                        var Bt = Q(), Je = U(Bt);
                        {
                          var gt = (yt) => {
                          }, tn = (yt) => {
                            var Fr = Q(), Rn = U(Fr);
                            {
                              var Nr = (on) => {
                                var En = _t();
                                ne(() => Re(En, e.label)), y(on, En);
                              }, ba = (on) => {
                                var En = Q(), un = U(En);
                                se(un, () => e.label), y(on, En);
                              };
                              j(
                                Rn,
                                (on) => {
                                  typeof e.label == "string" ? on(Nr) : on(ba, !1);
                                },
                                !0
                              );
                            }
                            y(yt, Fr);
                          };
                          j(Je, (yt) => {
                            e.label == null ? yt(gt) : yt(tn, !1);
                          });
                        }
                        y(at, Bt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (at) => P(at),
                  () => P()
                );
              }
            };
            j(en, (Ve) => {
              !g() && e.label != null && Ve(Me);
            });
          }
          y(_e, Pe);
        };
        j(ke, (_e) => {
          !f() && h() !== "outlined" && _e(Ye);
        });
      }
      var qe = B(ke, 2);
      {
        var vt = (_e) => {
          {
            let Pe = /* @__PURE__ */ ie(() => g() || e.label == null), De = /* @__PURE__ */ ie(() => an(X, "outline$"));
            Ie(
              du(_e, xt(
                {
                  get noLabel() {
                    return d(Pe);
                  }
                },
                () => d(De),
                {
                  children: (Ct, en) => {
                    var Me = Q(), Ve = U(Me);
                    {
                      var rt = (we) => {
                        {
                          let at = /* @__PURE__ */ ie(() => d(V) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Jn = /* @__PURE__ */ ie(() => an(X, "label$"));
                          Ie(
                            Di(we, xt(
                              {
                                get floatAbove() {
                                  return d(at);
                                },
                                get required() {
                                  return c();
                                },
                                wrapped: !0
                              },
                              () => d(Jn),
                              {
                                children: (Bt, Je) => {
                                  var gt = Q(), tn = U(gt);
                                  {
                                    var yt = (Rn) => {
                                    }, Fr = (Rn) => {
                                      var Nr = Q(), ba = U(Nr);
                                      {
                                        var on = (un) => {
                                          var Ir = _t();
                                          ne(() => Re(Ir, e.label)), y(un, Ir);
                                        }, En = (un) => {
                                          var Ir = Q(), ql = U(Ir);
                                          se(ql, () => e.label), y(un, Ir);
                                        };
                                        j(
                                          ba,
                                          (un) => {
                                            typeof e.label == "string" ? un(on) : un(En, !1);
                                          },
                                          !0
                                        );
                                      }
                                      y(Rn, Nr);
                                    };
                                    j(tn, (Rn) => {
                                      e.label == null ? Rn(yt) : Rn(Fr, !1);
                                    });
                                  }
                                  y(Bt, gt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (Bt) => P(Bt),
                            () => P()
                          );
                        }
                      };
                      j(Ve, (we) => {
                        !g() && e.label != null && we(rt);
                      });
                    }
                    y(Ct, Me);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ct) => z(Ct),
              () => z()
            );
          }
        };
        j(qe, (_e) => {
          (f() || h() === "outlined") && _e(vt);
        });
      }
      var $t = B(qe, 2);
      jr($t, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (_e, Pe) => {
          var De = Q(), Ct = U(De);
          se(Ct, () => e.leadingIcon ?? oe), y(_e, De);
        },
        $$slots: { default: !0 }
      });
      var Wr = B($t, 2);
      se(Wr, () => e.children ?? oe);
      var Ge = B(Wr, 2);
      {
        var ht = (_e) => {
          var Pe = Iu(), De = T(Pe);
          {
            let en = /* @__PURE__ */ ie(() => an(X, "input$"));
            Ie(
              bu(De, xt(
                {
                  get disabled() {
                    return o();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return R();
                  },
                  get initialInvalid() {
                    return d(te);
                  },
                  get "aria-controls"() {
                    return d(M);
                  },
                  get "aria-describedby"() {
                    return d(M);
                  }
                },
                () => d(en),
                {
                  onblur: (Me) => {
                    var Ve;
                    D(V, !1), D(te, !0), bt(G(), "blur", Me), (Ve = e.input$onblur) == null || Ve.call(e, Me);
                  },
                  onfocus: (Me) => {
                    var Ve;
                    D(V, !0), bt(G(), "focus", Me), (Ve = e.input$onfocus) == null || Ve.call(e, Me);
                  },
                  get value() {
                    return p();
                  },
                  set value(Me) {
                    p(Me);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(Me) {
                    b(Me);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(Me) {
                    I(Me);
                  }
                }
              )),
              (Me) => L(Me),
              () => L()
            );
          }
          var Ct = B(De, 2);
          se(Ct, () => e.internalCounter ?? oe), ne((en) => In(Pe, 1, en), [
            () => Sl(Be({
              "mdc-text-field__resizer": !("input$resizable" in X) || e.input$resizable
            }))
          ]), y(_e, Pe);
        }, Dt = (_e) => {
          var Pe = Cu(), De = U(Pe);
          {
            var Ct = (rt) => {
              var we = Q(), at = U(we);
              {
                var Jn = (Je) => {
                  fu(Je, {
                    children: (gt, tn) => {
                      var yt = _t();
                      ne(() => Re(yt, e.prefix)), y(gt, yt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Bt = (Je) => {
                  var gt = Q(), tn = U(gt);
                  se(tn, () => e.prefix ?? oe), y(Je, gt);
                };
                j(at, (Je) => {
                  typeof e.prefix == "string" ? Je(Jn) : Je(Bt, !1);
                });
              }
              y(rt, we);
            };
            j(De, (rt) => {
              e.prefix != null && rt(Ct);
            });
          }
          var en = B(De, 2);
          {
            let rt = /* @__PURE__ */ ie(() => an(X, "input$"));
            Ie(
              gu(en, xt(
                {
                  get type() {
                    return v();
                  },
                  get disabled() {
                    return o();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return R();
                  },
                  get initialInvalid() {
                    return d(te);
                  },
                  get "aria-controls"() {
                    return d(M);
                  },
                  get "aria-describedby"() {
                    return d(M);
                  }
                },
                () => g() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => d(rt),
                {
                  onblur: (we) => {
                    var at;
                    D(V, !1), D(te, !0), bt(G(), "blur", we), (at = e.input$onblur) == null || at.call(e, we);
                  },
                  onfocus: (we) => {
                    var at;
                    D(V, !0), bt(G(), "focus", we), (at = e.input$onfocus) == null || at.call(e, we);
                  },
                  get value() {
                    return p();
                  },
                  set value(we) {
                    p(we);
                  },
                  get files() {
                    return w();
                  },
                  set files(we) {
                    w(we);
                  },
                  get dirty() {
                    return b();
                  },
                  set dirty(we) {
                    b(we);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(we) {
                    I(we);
                  }
                }
              )),
              (we) => L(we),
              () => L()
            );
          }
          var Me = B(en, 2);
          {
            var Ve = (rt) => {
              var we = Q(), at = U(we);
              {
                var Jn = (Je) => {
                  vu(Je, {
                    children: (gt, tn) => {
                      var yt = _t();
                      ne(() => Re(yt, e.suffix)), y(gt, yt);
                    },
                    $$slots: { default: !0 }
                  });
                }, Bt = (Je) => {
                  var gt = Q(), tn = U(gt);
                  se(tn, () => e.suffix ?? oe), y(Je, gt);
                };
                j(at, (Je) => {
                  typeof e.suffix == "string" ? Je(Jn) : Je(Bt, !1);
                });
              }
              y(rt, we);
            };
            j(Me, (rt) => {
              e.suffix != null && rt(Ve);
            });
          }
          y(_e, Pe);
        };
        j(Ge, (_e) => {
          f() && typeof p() == "string" ? _e(ht) : _e(Dt, !1);
        });
      }
      var qn = B(Ge, 2);
      jr(qn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (_e, Pe) => {
          var De = Q(), Ct = U(De);
          se(Ct, () => e.trailingIcon ?? oe), y(_e, De);
        },
        $$slots: { default: !0 }
      });
      var Xl = B(qn, 2);
      {
        var Yl = (_e) => {
          {
            let Pe = /* @__PURE__ */ ie(() => an(X, "ripple$"));
            Ie(su(_e, xt(() => d(Pe))), (De) => F(De), () => F());
          }
        };
        j(Xl, (_e) => {
          !f() && h() !== "outlined" && s() && _e(Yl);
        });
      }
      Ie(q, (_e) => k = _e, () => k), Te(q, (_e, Pe) => kn == null ? void 0 : kn(_e, Pe), () => ({
        ripple: !f() && h() === "filled",
        unbounded: !1,
        addClass: Rt,
        removeClass: It,
        addStyle: Qt,
        eventTarget: d(He),
        activeTarget: d(He),
        initPromise: ae
      })), Te(q, (_e, Pe) => J == null ? void 0 : J(_e, Pe), i), y(K, q);
    }, _r = (K) => {
      var q = Au();
      Ze(q, (Ge, ht, Dt) => ({ class: Ge, style: ht, ...Dt }), [
        () => Be({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": o(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": h() === "filled",
          "mdc-text-field--outlined": h() === "outlined",
          "smui-text-field--standard": h() === "standard" && !f(),
          "mdc-text-field--no-label": g() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": I(),
          ...N,
          [l()]: !0
        }),
        () => Object.entries(ee).map(([Ge, ht]) => `${Ge}: ${ht};`).concat([u()]).join(" "),
        () => Fa(X, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var ke = T(q);
      {
        var Ye = (Ge) => {
          var ht = Q(), Dt = U(ht);
          se(Dt, () => e.label ?? oe), y(Ge, ht);
        };
        j(ke, (Ge) => {
          typeof e.label != "string" && Ge(Ye);
        });
      }
      var qe = B(ke, 2);
      jr(qe, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, ht) => {
          var Dt = Q(), qn = U(Dt);
          se(qn, () => e.leadingIcon ?? oe), y(Ge, Dt);
        },
        $$slots: { default: !0 }
      });
      var vt = B(qe, 2);
      se(vt, () => e.children ?? oe);
      var $t = B(vt, 2);
      jr($t, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, ht) => {
          var Dt = Q(), qn = U(Dt);
          se(qn, () => e.trailingIcon ?? oe), y(Ge, Dt);
        },
        $$slots: { default: !0 }
      });
      var Wr = B($t, 2);
      se(Wr, () => e.line ?? oe), Ie(q, (Ge) => k = Ge, () => k), Te(q, (Ge, ht) => kn == null ? void 0 : kn(Ge, ht), () => ({
        ripple: s(),
        unbounded: !1,
        addClass: Rt,
        removeClass: It,
        addStyle: Qt
      })), Te(q, (Ge, ht) => J == null ? void 0 : J(Ge, ht), i), y(K, q);
    };
    j(nt, (K) => {
      fe ? K(Yn) : K(_r, !1);
    });
  }
  var jl = B(nt, 2);
  {
    var zl = (K) => {
      {
        let q = /* @__PURE__ */ ie(() => an(X, "helperLine$"));
        cu(K, xt(() => d(q), {
          children: (ke, Ye) => {
            var qe = Q(), vt = U(qe);
            se(vt, () => e.helper ?? oe), y(ke, qe);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    j(jl, (K) => {
      e.helper && K(zl);
    });
  }
  return y(t, Ce), pe(Y);
}
const pa = Nn({
  component: null,
  props: {},
  isOpen: !1
});
function xu(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ $(void 0), r = /* @__PURE__ */ $(!1);
  const a = pa.subscribe((s) => {
    D(n, s, !0), D(r, s.isOpen, !0);
  });
  ct(() => () => a());
  var i = Q(), l = U(i);
  {
    var u = (s) => {
      var o = Q(), c = U(o);
      ai(c, () => d(n).component, (f, h) => {
        h(f, xt(() => d(n).props, {
          get open() {
            return d(r);
          },
          set open(g) {
            D(r, g, !0);
          }
        }));
      }), y(s, o);
    };
    j(l, (s) => {
      d(n).isOpen && d(n).component && s(u);
    });
  }
  y(t, i), pe();
}
function Su(t, e = {}) {
  return new Promise((n) => {
    pa.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function Ru(t, e) {
  pa.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function Eu(t) {
  pa.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...t } } : e);
}
var Lu = /* @__PURE__ */ Z('<span class="oscd-icon"><!></span>');
function Gt(t, e) {
  var n = Lu(), r = T(n);
  se(r, () => e.children ?? oe), y(t, n);
}
var Pu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function ku(t, e) {
  let n = C(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Pu();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
var Tu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Gu(t, e) {
  let n = C(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Tu();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
var Du = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Mu(t, e) {
  let n = C(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Du();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
var Hu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function Zu(t, e) {
  let n = C(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Hu();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
Cs();
var Wu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#004552"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function Fu(t) {
  var e = Wu();
  y(t, e);
}
var Nu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Bu(t) {
  var e = Nu();
  y(t, e);
}
var Ou = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function Uu(t, e) {
  let n = C(e, "size", 3, "24px"), r = C(e, "fill", 3, "#004552");
  var a = Ou();
  ne(() => {
    Ft(a, "height", n()), Ft(a, "width", n()), Ft(a, "fill", r());
  }), y(t, a);
}
var Vu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function ju(t, e) {
  let n = C(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Vu();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
var zu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Xu(t, e) {
  let n = C(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = zu();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
var Yu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path></svg>');
function qu(t, e) {
  let n = C(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Yu();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
var Ju = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"></path></svg>');
function Ku(t, e) {
  let n = C(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Ju();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
var Qu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function $u(t, e) {
  let n = C(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Qu();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
var ed = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Hl(t, e) {
  let n = C(e, "svgStyles", 8, "");
  Gt(t, {
    children: (r, a) => {
      var i = ed();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
var td = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function nd(t, e) {
  let n = C(e, "svgStyles", 8, "");
  Gt(t, {
    children: (r, a) => {
      var i = td();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
Ue(["change"]);
Ue(["change"]);
var rd = /* @__PURE__ */ Z('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function ad(t, e) {
  ge(e, !0);
  let n = C(e, "content", 3, ""), r = C(e, "side", 3, "top"), a = C(e, "hoverDelay", 3, 0), i = C(e, "transitionDuration", 3, 80);
  const l = `tt-${Math.random().toString(36).slice(2)}`;
  let u = /* @__PURE__ */ $(null), s = /* @__PURE__ */ $(null), o = /* @__PURE__ */ $(null), c = /* @__PURE__ */ $(null), f = /* @__PURE__ */ $(!1), h = /* @__PURE__ */ $(null), g = /* @__PURE__ */ $(null);
  function v() {
    n() && (a() > 0 ? D(h, setTimeout(() => D(f, !0), a()), !0) : D(f, !0));
  }
  function p() {
    d(h) && clearTimeout(d(h)), D(f, !1);
  }
  function w() {
    if (!d(s) || !d(c) || !d(u)) return;
    const b = d(u).getBoundingClientRect(), S = d(c).getBoundingClientRect();
    let A = 0, m = 0;
    const _ = 8;
    switch (r()) {
      case "top":
        A = b.top - S.height - _, m = b.left + b.width / 2 - S.width / 2;
        break;
      case "bottom":
        A = b.bottom + _, m = b.left + b.width / 2 - S.width / 2;
        break;
      case "left":
        A = b.top + b.height / 2 - S.height / 2, m = b.left - S.width - _;
        break;
      case "right":
        A = b.top + b.height / 2 - S.height / 2, m = b.right + _;
        break;
    }
    d(s).style.top = `${A + window.scrollY}px`, d(s).style.left = `${m + window.scrollX}px`;
  }
  function I() {
    var b;
    (b = d(g)) == null || b.disconnect(), D(g, null), d(s) && d(s).parentNode && d(s).parentNode.removeChild(d(s)), D(s, null), D(c, null), D(o, null), d(h) && clearTimeout(d(h));
  }
  Zr(I), Ee(() => {
    if (!(!d(f) || !n())) {
      if (!d(s)) {
        D(s, document.createElement("div"), !0), d(s).style.position = "absolute", d(s).style.zIndex = "9999", d(s).style.pointerEvents = "none", d(s).style.opacity = "0", d(s).style.transition = `opacity ${i()}ms ease`, d(s).id = l, d(s).setAttribute("role", "tooltip"), document.body.appendChild(d(s)), D(o, d(s).attachShadow({ mode: "open" }), !0);
        const b = document.createElement("style");
        b.textContent = `
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
      `, d(o).appendChild(b), D(c, document.createElement("div"), !0), d(o).appendChild(d(c)), D(
          g,
          new MutationObserver(() => {
            d(f) && w();
          }),
          !0
        ), d(g).observe(document.body, { childList: !0, subtree: !0 });
      }
      d(c) && (d(c).className = `bubble ${r()}`, d(c).innerHTML = n()), d(s) && (d(s).style.opacity = "1", w());
    }
  }), Ee(() => {
    if (d(f) || !d(s))
      return;
    d(s).style.opacity = "0";
    const b = d(s), S = setTimeout(
      () => {
        b && b.parentNode && b.parentNode.removeChild(b), d(s) === b && I();
      },
      i()
    );
    return () => clearTimeout(S);
  });
  var R = rd(), x = T(R);
  se(x, () => e.children ?? oe), Ie(R, (b) => D(u, b), () => d(u)), ne(() => Ft(R, "aria-describedby", n() ? l : void 0)), mi("mouseenter", R, v), mi("mouseleave", R, p), y(t, R), pe();
}
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
var nn = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, Mi = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, Pn = {
  ARIA_SELECTED: Mi.ARIA_SELECTED,
  ARIA_SORT: Mi.ARIA_SORT
}, wt;
(function(t) {
  t.ASCENDING = "ascending", t.DESCENDING = "descending", t.NONE = "none", t.OTHER = "other";
})(wt || (wt = {}));
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
var id = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n) {
      return t.call(this, ot(ot({}, e.defaultAdapter), n)) || this;
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
      return Mo(this, void 0, void 0, function() {
        return Ho(this, function(n) {
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
        var a = this.adapter.getRowIdAtIndex(r), i = !1;
        a && n.indexOf(a) >= 0 && (i = !0), this.adapter.setRowCheckboxCheckedAtIndex(r, i), this.selectRowAtIndex(r, i);
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
        var a = this.adapter.isCheckboxAtRowIndexChecked(r);
        this.selectRowAtIndex(r, a), this.setHeaderRowCheckboxState();
        var i = this.adapter.getRowIdAtIndex(r);
        this.adapter.notifyRowSelectionChanged({ rowId: i, rowIndex: r, selected: a });
      }
    }, e.prototype.handleSortAction = function(n) {
      for (var r = n.columnId, a = n.columnIndex, i = n.headerCell, l = 0; l < this.adapter.getHeaderCellCount(); l++)
        l !== a && (this.adapter.removeClassNameByHeaderCellIndex(l, nn.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(l, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(l, Pn.ARIA_SORT, wt.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(l, wt.NONE));
      this.adapter.setClassNameByHeaderCellIndex(a, nn.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(a, Pn.ARIA_SORT), s = wt.NONE;
      u === wt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(a, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, Pn.ARIA_SORT, wt.DESCENDING), s = wt.DESCENDING) : u === wt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(a, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, Pn.ARIA_SORT, wt.ASCENDING), s = wt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(a, Pn.ARIA_SORT, wt.ASCENDING), s = wt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(a, s), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: a,
        headerCell: i,
        sortValue: s
      });
    }, e.prototype.handleRowClick = function(n) {
      var r = n.rowId, a = n.row;
      this.adapter.notifyRowClick({
        rowId: r,
        row: a
      });
    }, e.prototype.showProgress = function() {
      var n = this.adapter.getTableHeaderHeight(), r = this.adapter.getTableContainerHeight() - n, a = n;
      this.adapter.setProgressIndicatorStyles({
        height: r + "px",
        top: a + "px"
      }), this.adapter.addClass(nn.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(nn.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(n, r) {
      r ? (this.adapter.addClassAtRowIndex(n, nn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Pn.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(n, nn.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(n, Pn.ARIA_SELECTED, "false"));
    }, e;
  }(pr)
), ld = /* @__PURE__ */ Z('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), sd = /* @__PURE__ */ Z("<div><div><table><!></table></div> <!> <!></div>");
function od(t, e) {
  ge(e, !0);
  const n = () => Za(X, "$progressClosed", r), [r, a] = li(), { closest: i } = Gl;
  let l = C(e, "use", 19, () => []), u = C(e, "class", 3, ""), s = C(e, "stickyHeader", 3, !1), o = C(e, "sortable", 3, !1), c = C(e, "sort", 15, null), f = C(e, "sortDirection", 15, "ascending"), h = C(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), g = C(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = C(e, "container$use", 19, () => []), p = C(e, "container$class", 3, ""), w = C(e, "table$use", 19, () => []), I = C(e, "table$class", 3, ""), R = /* @__PURE__ */ Xe(e, [
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
  ]), x, b = /* @__PURE__ */ $(void 0), S, A = /* @__PURE__ */ $(void 0), m = /* @__PURE__ */ $(void 0), _ = ce({}), L = /* @__PURE__ */ $(ce({ height: "auto", top: "initial" })), P = xe("SMUI:addLayoutListener"), F, z = !1, X = Nn(!1), fe = Nn(c());
  Ee(() => {
    Wa(fe, c());
  });
  let k = Nn(f());
  Ee(() => {
    Wa(k, f());
  }), de("SMUI:checkbox:context", "data-table"), de("SMUI:linear-progress:context", "data-table"), de("SMUI:linear-progress:closed", X), de("SMUI:data-table:sortable", o()), de("SMUI:data-table:sort", fe), de("SMUI:data-table:sortDirection", k), de("SMUI:data-table:sortAscendingAriaLabel", h()), de("SMUI:data-table:sortDescendingAriaLabel", g()), P && (F = P(be));
  let W;
  Ee(() => {
    e.progress && d(b) && W !== n() && (W = n(), n() ? d(b).hideProgress() : d(b).showProgress());
  }), de("SMUI:checkbox:mount", () => {
    d(b) && z && d(b).layout();
  }), de("SMUI:data-table:header:mount", (E) => {
    D(A, E, !0);
  }), de("SMUI:data-table:header:unmount", () => {
    D(A, void 0);
  }), de("SMUI:data-table:body:mount", (E) => {
    D(m, E, !0);
  }), de("SMUI:data-table:body:unmount", () => {
    D(m, void 0);
  }), ct(() => (D(
    b,
    new id({
      addClass: N,
      removeClass: ee,
      getHeaderCellElements: () => {
        var E;
        return ((E = d(A)) == null ? void 0 : E.cells.map((G) => G.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var E;
        return ((E = d(A)) == null ? void 0 : E.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (E, G) => {
        var Y;
        return ((Y = d(A)) == null ? void 0 : Y.orderedCells[E].getAttr(G)) ?? null;
      },
      setAttributeByHeaderCellIndex: (E, G, Y) => {
        var Ce;
        (Ce = d(A)) == null || Ce.orderedCells[E].addAttr(G, Y);
      },
      setClassNameByHeaderCellIndex: (E, G) => {
        var Y;
        (Y = d(A)) == null || Y.orderedCells[E].addClass(G);
      },
      removeClassNameByHeaderCellIndex: (E, G) => {
        var Y;
        (Y = d(A)) == null || Y.orderedCells[E].removeClass(G);
      },
      notifySortAction: (E) => {
        c(E.columnId), f(E.sortValue), bt(re(), "SMUIDataTableSorted", E);
      },
      getTableContainerHeight: () => S.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const E = re().querySelector(".mdc-data-table__header-row");
        if (!E)
          throw new Error("MDCDataTable: Table header element not found.");
        return E.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (E) => {
        D(L, E, !0);
      },
      addClassAtRowIndex: (E, G) => {
        var Y;
        (Y = d(m)) == null || Y.orderedRows[E].addClass(G);
      },
      getRowCount: () => {
        var E;
        return ((E = d(m)) == null ? void 0 : E.rows.length) ?? 0;
      },
      getRowElements: () => {
        var E;
        return ((E = d(m)) == null ? void 0 : E.rows.map((G) => G.element)) ?? [];
      },
      getRowIdAtIndex: (E) => {
        var G;
        return ((G = d(m)) == null ? void 0 : G.orderedRows[E].rowId) ?? null;
      },
      getRowIndexByChildElement: (E) => {
        var G;
        return ((G = d(m)) == null ? void 0 : G.orderedRows.map((Y) => Y.element).indexOf(i(E, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var E;
        return ((E = d(m)) == null ? void 0 : E.rows.filter((G) => G.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (E) => {
        var Y;
        const G = (Y = d(m)) == null ? void 0 : Y.orderedRows[E].checkbox;
        return G ? G.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var G;
        const E = (G = d(A)) == null ? void 0 : G.checkbox;
        return E ? E.checked : !1;
      },
      isRowsSelectable: () => !!re().querySelector(".mdc-data-table__row-checkbox") || !!re().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (E) => {
        var Y;
        const G = (Y = d(m)) == null ? void 0 : Y.orderedRows[E.rowIndex];
        G && bt(re(), "SMUIDataTableSelectionChanged", {
          row: G.element,
          rowId: G.rowId,
          rowIndex: E.rowIndex,
          selected: E.selected
        });
      },
      notifySelectedAll: () => {
        M(!1), bt(re(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        M(!1), bt(re(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (E) => bt(re(), "SMUIDataTableClickRow", E),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (E, G) => {
        var Y;
        (Y = d(m)) == null || Y.orderedRows[E].removeClass(G);
      },
      setAttributeAtRowIndex: (E, G, Y) => {
        var Ce;
        (Ce = d(m)) == null || Ce.orderedRows[E].addAttr(G, Y);
      },
      setHeaderRowCheckboxChecked: (E) => {
        var Y;
        const G = (Y = d(A)) == null ? void 0 : Y.checkbox;
        G && (G.checked = E);
      },
      setHeaderRowCheckboxIndeterminate: M,
      setRowCheckboxCheckedAtIndex: (E, G) => {
        var Ce;
        const Y = (Ce = d(m)) == null ? void 0 : Ce.orderedRows[E].checkbox;
        Y && (Y.checked = G);
      },
      setSortStatusLabelByHeaderCellIndex: (E, G) => {
      }
    }),
    !0
  ), d(b).init(), d(b).layout(), z = !0, () => {
    var E;
    (E = d(b)) == null || E.destroy();
  })), Zr(() => {
    F && F();
  });
  function O(E) {
    d(b) && d(b).handleRowCheckboxChange(E);
  }
  function N(E) {
    _[E] || (_[E] = !0);
  }
  function ee(E) {
    (!(E in _) || _[E]) && (_[E] = !1);
  }
  function M(E) {
    var Y;
    const G = (Y = d(A)) == null ? void 0 : Y.checkbox;
    G && (G.indeterminate = E);
  }
  function V(E) {
    if (!d(b) || !E.detail.target)
      return;
    const G = i(E.detail.target, ".mdc-data-table__header-cell--with-sort");
    G && me(G);
  }
  function te(E) {
    if (!d(b) || !E.detail.target)
      return;
    const G = i(E.detail.target, ".mdc-data-table__row");
    G && d(b) && d(b).handleRowClick({ rowId: E.detail.rowId, row: G });
  }
  function me(E) {
    var nt, Yn;
    const G = ((nt = d(A)) == null ? void 0 : nt.orderedCells) ?? [], Y = G.map((_r) => _r.element).indexOf(E);
    if (Y === -1)
      return;
    const Ce = G[Y].columnId ?? null;
    (Yn = d(b)) == null || Yn.handleSortAction({ columnId: Ce, columnIndex: Y, headerCell: E });
  }
  function be() {
    var E;
    return (E = d(b)) == null ? void 0 : E.layout();
  }
  function re() {
    return x;
  }
  var ae = { layout: be, getElement: re }, ue = sd(), Le = (E) => {
    var G;
    d(b) && d(b).handleHeaderRowCheckboxChange(), (G = e.onSMUIDataTableHeaderCheckboxChange) == null || G.call(e, E);
  }, We = (E) => {
    var G;
    V(E), (G = e.onSMUIDataTableHeaderClick) == null || G.call(e, E);
  }, tt = (E) => {
    var G;
    te(E), (G = e.onSMUIDataTableRowClick) == null || G.call(e, E);
  }, He = (E) => {
    var G;
    O(E), (G = e.onSMUIDataTableBodyCheckboxChange) == null || G.call(e, E);
  };
  Ze(
    ue,
    (E, G) => ({
      class: E,
      ...G,
      onSMUIDataTableHeaderCheckboxChange: Le,
      onSMUIDataTableHeaderClick: We,
      onSMUIDataTableRowClick: tt,
      onSMUIDataTableBodyCheckboxChange: He
    }),
    [
      () => Be({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": s(),
        ..._,
        [u()]: !0
      }),
      () => Fa(R, ["container$", "table$"])
    ]
  );
  var ft = T(ue);
  Ze(ft, (E, G) => ({ class: E, ...G }), [
    () => Be({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => an(R, "container$")
  ]);
  var Nt = T(ft);
  Ze(Nt, (E, G) => ({ class: E, ...G }), [
    () => Be({ "mdc-data-table__table": !0, [I()]: !0 }),
    () => an(R, "table$")
  ]);
  var Rt = T(Nt);
  se(Rt, () => e.children ?? oe), Te(Nt, (E, G) => J == null ? void 0 : J(E, G), w), Ie(ft, (E) => S = E, () => S), Te(ft, (E, G) => J == null ? void 0 : J(E, G), v);
  var It = B(ft, 2);
  {
    var Qt = (E) => {
      var G = ld(), Y = B(T(G), 2);
      se(Y, () => e.progress ?? oe), ne((Ce) => Oe(G, Ce), [
        () => Object.entries(d(L)).map(([Ce, nt]) => `${Ce}: ${nt};`).join(" ")
      ]), y(E, G);
    };
    j(It, (E) => {
      e.progress && E(Qt);
    });
  }
  var br = B(It, 2);
  se(br, () => e.paginate ?? oe), Ie(ue, (E) => x = E, () => x), Te(ue, (E, G) => J == null ? void 0 : J(E, G), l), y(t, ue);
  var mr = pe(ae);
  return a(), mr;
}
var ud = /* @__PURE__ */ Z("<thead><!></thead>");
function dd(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), a, i = /* @__PURE__ */ $(void 0), l = [];
  const u = /* @__PURE__ */ new WeakMap();
  de("SMUI:data-table:row:header", !0);
  const s = xe("SMUI:checkbox:mount");
  de("SMUI:checkbox:mount", (I) => {
    D(i, I, !0), s && s(I);
  });
  const o = xe("SMUI:checkbox:unmount");
  de("SMUI:checkbox:unmount", (I) => {
    D(i, void 0), o && o(I);
  }), de("SMUI:data-table:cell:mount", (I) => {
    l.push(I), u.set(I.element, I);
  }), de("SMUI:data-table:cell:unmount", (I) => {
    const R = l.findIndex((x) => x === I);
    R !== -1 && l.splice(R, 1), u.delete(I.element);
  });
  const c = xe("SMUI:data-table:header:mount"), f = xe("SMUI:data-table:header:unmount");
  ct(() => {
    const I = {
      get cells() {
        return l;
      },
      get orderedCells() {
        return h();
      },
      get checkbox() {
        return d(i);
      }
    };
    return c && c(I), () => {
      f && f(I);
    };
  });
  function h() {
    return [
      ...g().querySelectorAll(".mdc-data-table__header-cell")
    ].map((I) => u.get(I)).filter((I) => I && I._smui_data_table_header_cell_accessor);
  }
  function g() {
    return a;
  }
  var v = { getElement: g }, p = ud();
  Ze(p, () => ({ ...r }));
  var w = T(p);
  return se(w, () => e.children ?? oe), Ie(p, (I) => a = I, () => a), Te(p, (I, R) => J == null ? void 0 : J(I, R), n), y(t, p), pe(v);
}
var cd = /* @__PURE__ */ Z("<tbody><!></tbody>");
function fd(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = C(e, "class", 3, ""), a = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), i, l = [];
  const u = /* @__PURE__ */ new WeakMap();
  de("SMUI:data-table:row:header", !1), de("SMUI:data-table:row:mount", (p) => {
    l.push(p), u.set(p.element, p);
  }), de("SMUI:data-table:row:unmount", (p) => {
    const w = l.findIndex((I) => I === p);
    w !== -1 && l.splice(w, 1), u.delete(p.element);
  });
  const s = xe("SMUI:data-table:body:mount"), o = xe("SMUI:data-table:body:unmount");
  ct(() => {
    const p = {
      get rows() {
        return l;
      },
      get orderedRows() {
        return c();
      }
    };
    return s && s(p), () => {
      o && o(p);
    };
  });
  function c() {
    return [...f().querySelectorAll(".mdc-data-table__row")].map((p) => u.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function f() {
    return i;
  }
  var h = { getElement: f }, g = cd();
  Ze(g, (p) => ({ class: p, ...a }), [
    () => Be({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = T(g);
  return se(v, () => e.children ?? oe), Ie(g, (p) => i = p, () => i), Te(g, (p, w) => J == null ? void 0 : J(p, w), n), y(t, g), pe(h);
}
let vd = 0;
var hd = /* @__PURE__ */ Z("<tr><!></tr>");
function Hi(t, e) {
  ge(e, !0);
  let n = C(e, "use", 19, () => []), r = C(e, "class", 3, ""), a = C(e, "rowId", 19, () => "SMUI-data-table-row-" + vd++), i = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), l, u = /* @__PURE__ */ $(void 0), s = ce({}), o = ce({}), c = xe("SMUI:data-table:row:header");
  const f = xe("SMUI:checkbox:mount");
  de("SMUI:checkbox:mount", (P) => {
    D(u, P, !0), f && f(P);
  });
  const h = xe("SMUI:checkbox:unmount");
  de("SMUI:checkbox:unmount", (P) => {
    D(u, void 0), h && h(P);
  });
  const g = xe("SMUI:data-table:row:mount"), v = xe("SMUI:data-table:row:unmount");
  ct(() => {
    const P = c ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return S();
      },
      get checkbox() {
        return d(u);
      },
      get rowId() {
      },
      get selected() {
        return (d(u) && d(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: w,
      getAttr: I,
      addAttr: R
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return S();
      },
      get checkbox() {
        return d(u);
      },
      get rowId() {
        return a();
      },
      get selected() {
        return (d(u) && d(u).checked) ?? !1;
      },
      addClass: p,
      removeClass: w,
      getAttr: I,
      addAttr: R
    };
    return g && g(P), () => {
      v && v(P);
    };
  });
  function p(P) {
    s[P] || (s[P] = !0);
  }
  function w(P) {
    (!(P in s) || s[P]) && (s[P] = !1);
  }
  function I(P) {
    return P in o ? o[P] ?? null : S().getAttribute(P);
  }
  function R(P, F) {
    o[P] !== F && (o[P] = F);
  }
  function x(P) {
    bt(S(), "SMUIDataTableHeaderClick", P);
  }
  function b(P) {
    bt(S(), "SMUIDataTableRowClick", { rowId: a(), target: P.target });
  }
  function S() {
    return l;
  }
  var A = { getElement: S }, m = hd(), _ = (P) => {
    var F;
    c ? x(P) : b(P), (F = e.onclick) == null || F.call(e, P);
  };
  Ze(
    m,
    (P) => ({
      class: P,
      "aria-selected": d(u) ? d(u).checked ? "true" : "false" : void 0,
      ...o,
      ...i,
      onclick: _
    }),
    [
      () => Be({
        "mdc-data-table__header-row": c,
        "mdc-data-table__row": !c,
        "mdc-data-table__row--selected": !c && d(u) && d(u).checked,
        ...s,
        [r()]: !0
      })
    ]
  );
  var L = T(m);
  return se(L, () => e.children ?? oe), Ie(m, (P) => l = P, () => l), Te(m, (P, F) => J == null ? void 0 : J(P, F), n), y(t, m), pe(A);
}
let gd = 0;
var pd = /* @__PURE__ */ Z('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), bd = /* @__PURE__ */ Z("<th><!></th>"), md = /* @__PURE__ */ Z("<td><!></td>");
function zr(t, e) {
  ge(e, !0);
  const n = () => Za(I, "$sort", a), r = () => Za(R, "$sortDirection", a), [a, i] = li();
  let l = xe("SMUI:data-table:row:header"), u = C(e, "use", 19, () => []), s = C(e, "class", 3, ""), o = C(e, "numeric", 3, !1), c = C(e, "checkbox", 3, !1), f = C(e, "columnId", 19, () => l ? "SMUI-data-table-column-" + gd++ : "SMUI-data-table-unused"), h = C(e, "sortable", 19, () => xe("SMUI:data-table:sortable")), g = /* @__PURE__ */ Xe(e, [
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
  ]), v, p = ce({}), w = ce({}), I = xe("SMUI:data-table:sort"), R = xe("SMUI:data-table:sortDirection"), x = xe("SMUI:data-table:sortAscendingAriaLabel"), b = xe("SMUI:data-table:sortDescendingAriaLabel");
  h() && (de("SMUI:label:context", "data-table:sortable-header-cell"), de("SMUI:icon-button:context", "data-table:sortable-header-cell"), de("SMUI:icon-button:aria-describedby", f() + "-status-label"));
  const S = xe("SMUI:data-table:cell:mount"), A = xe("SMUI:data-table:cell:unmount");
  ct(() => {
    const M = l ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return X();
      },
      get columnId() {
        return f();
      },
      addClass: m,
      removeClass: _,
      getAttr: L,
      addAttr: P
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return X();
      },
      get columnId() {
      },
      addClass: m,
      removeClass: _,
      getAttr: L,
      addAttr: P
    };
    return S && S(M), () => {
      A && A(M);
    };
  });
  function m(M) {
    p[M] || (p[M] = !0);
  }
  function _(M) {
    (!(M in p) || p[M]) && (p[M] = !1);
  }
  function L(M) {
    return M in w ? w[M] ?? null : X().getAttribute(M);
  }
  function P(M, V) {
    w[M] !== V && (w[M] = V);
  }
  function F(M) {
    bt(X(), "SMUIDataTableHeaderCheckboxChange", M);
  }
  function z(M) {
    bt(X(), "SMUIDataTableBodyCheckboxChange", M);
  }
  function X() {
    return v;
  }
  var fe = { getElement: X }, k = Q(), W = U(k);
  {
    var O = (M) => {
      var V = bd(), te = (ae) => {
        var ue;
        c() && F(ae), (ue = e.onchange) == null || ue.call(e, ae);
      };
      Ze(
        V,
        (ae) => ({
          class: ae,
          role: "columnheader",
          scope: "col",
          "data-column-id": f(),
          "aria-sort": h() ? n() === f() ? r() : "none" : void 0,
          ...w,
          ...g,
          onchange: te
        }),
        [
          () => Be({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": o(),
            "mdc-data-table__header-cell--checkbox": c(),
            "mdc-data-table__header-cell--with-sort": h(),
            "mdc-data-table__header-cell--sorted": h() && n() === f(),
            ...p,
            [s()]: !0
          })
        ]
      );
      var me = T(V);
      {
        var be = (ae) => {
          var ue = pd(), Le = T(ue);
          se(Le, () => e.children ?? oe);
          var We = B(Le, 2), tt = T(We);
          ne(() => {
            Ft(We, "id", `${f() ?? ""}-status-label`), Re(tt, n() === f() ? r() === "ascending" ? x : b : "");
          }), y(ae, ue);
        }, re = (ae) => {
          var ue = Q(), Le = U(ue);
          se(Le, () => e.children ?? oe), y(ae, ue);
        };
        j(me, (ae) => {
          h() ? ae(be) : ae(re, !1);
        });
      }
      Ie(V, (ae) => v = ae, () => v), Te(V, (ae, ue) => J == null ? void 0 : J(ae, ue), u), y(M, V);
    }, N = (M) => {
      var V = md(), te = (be) => {
        var re;
        c() && z(be), (re = e.onchange) == null || re.call(e, be);
      };
      Ze(
        V,
        (be) => ({
          class: be,
          ...w,
          ...g,
          onchange: te
        }),
        [
          () => Be({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": o(),
            "mdc-data-table__cell--checkbox": c(),
            ...p,
            [s()]: !0
          })
        ]
      );
      var me = T(V);
      se(me, () => e.children ?? oe), Ie(V, (be) => v = be, () => v), Te(V, (be, re) => J == null ? void 0 : J(be, re), u), y(M, V);
    };
    j(W, (M) => {
      l ? M(O) : M(N, !1);
    });
  }
  y(t, k);
  var ee = pe(fe);
  return i(), ee;
}
var _d = /* @__PURE__ */ Z('<p class="status svelte-185z1ay">Loading…</p>'), Id = /* @__PURE__ */ Z('<p class="status error svelte-185z1ay"> </p>'), Cd = /* @__PURE__ */ Z('<p class="status svelte-185z1ay"> </p>'), yd = /* @__PURE__ */ Z("<!> <!>", 1), Ad = /* @__PURE__ */ Z("<!> <!>", 1), wd = /* @__PURE__ */ Z("<!> <!>", 1);
function xd(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ $(null), r = C(e, "items", 19, () => []), a = C(e, "columns", 19, () => []), i = C(e, "loading", 3, !1), l = C(e, "errorMsg", 3, ""), u = C(e, "emptyText", 3, "Nothing to show."), s = C(e, "getRowId", 3, (I, R) => (I && (I.id ?? I.key)) ?? R), o = C(e, "headerBg", 3, null), c = C(e, "rowBg", 3, null), f = C(e, "hasActions", 3, !1), h = /* @__PURE__ */ ie(() => f() || !!e.actions);
  var g = Q(), v = U(g);
  {
    var p = (I) => {
      var R = _d();
      y(I, R);
    }, w = (I) => {
      var R = Q(), x = U(R);
      {
        var b = (A) => {
          var m = Id(), _ = T(m);
          ne(() => Re(_, l())), y(A, m);
        }, S = (A) => {
          var m = Q(), _ = U(m);
          {
            var L = (F) => {
              var z = Cd(), X = T(z);
              ne(() => Re(X, u())), y(F, z);
            }, P = (F) => {
              od(F, {
                style: "width: 100%;",
                children: (z, X) => {
                  var fe = wd(), k = U(fe);
                  {
                    let O = /* @__PURE__ */ ie(() => o() ? `background-color:${o()}` : void 0);
                    dd(k, {
                      get style() {
                        return d(O);
                      },
                      children: (N, ee) => {
                        Hi(N, {
                          children: (M, V) => {
                            var te = yd(), me = U(te);
                            Wt(me, 17, a, qt, (ae, ue) => {
                              {
                                let Le = /* @__PURE__ */ ie(() => [
                                  d(ue).width ? `width:${d(ue).width}` : "",
                                  o() ? `background-color:${o()}` : ""
                                ].filter(Boolean).join(";"));
                                zr(ae, {
                                  header: !0,
                                  get style() {
                                    return d(Le);
                                  },
                                  children: (We, tt) => {
                                    var He = _t();
                                    ne(() => Re(He, d(ue).header)), y(We, He);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var be = B(me, 2);
                            {
                              var re = (ae) => {
                                {
                                  let ue = /* @__PURE__ */ ie(() => o() ? `background-color:${o()}` : void 0);
                                  zr(ae, {
                                    header: !0,
                                    get style() {
                                      return d(ue);
                                    }
                                  });
                                }
                              };
                              j(be, (ae) => {
                                d(h) && ae(re);
                              });
                            }
                            y(M, te);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var W = B(k, 2);
                  fd(W, {
                    children: (O, N) => {
                      var ee = Q(), M = U(ee);
                      Wt(M, 19, r, (V, te) => s()(V, te), (V, te, me) => {
                        {
                          let be = /* @__PURE__ */ ie(() => [
                            c() ? `background-color:${c()}` : "",
                            d(n) === s()(d(te), d(me)) ? "background-color:#D9D800" : ""
                          ].filter(Boolean).join(";"));
                          Hi(V, {
                            get style() {
                              return d(be);
                            },
                            $$events: {
                              mouseenter: () => D(n, s()(d(te), d(me)), !0),
                              mouseleave: () => D(n, null)
                            },
                            children: (re, ae) => {
                              var ue = Ad(), Le = U(ue);
                              Wt(Le, 17, a, qt, (He, ft) => {
                                zr(He, {
                                  children: (Nt, Rt) => {
                                    var It = _t();
                                    ne(() => {
                                      var Qt;
                                      return Re(It, ((Qt = d(te)) == null ? void 0 : Qt[d(ft).key]) ?? "");
                                    }), y(Nt, It);
                                  },
                                  $$slots: { default: !0 }
                                });
                              });
                              var We = B(Le, 2);
                              {
                                var tt = (He) => {
                                  zr(He, {
                                    numeric: !0,
                                    children: (ft, Nt) => {
                                      var Rt = Q(), It = U(Rt);
                                      se(It, () => e.actions ?? oe, () => ({ item: d(te) })), y(ft, Rt);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                j(We, (He) => {
                                  d(h) && He(tt);
                                });
                              }
                              y(re, ue);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), y(O, ee);
                    },
                    $$slots: { default: !0 }
                  }), y(z, fe);
                },
                $$slots: { default: !0 }
              });
            };
            j(
              _,
              (F) => {
                !r() || r().length === 0 ? F(L) : F(P, !1);
              },
              !0
            );
          }
          y(A, m);
        };
        j(
          x,
          (A) => {
            l() ? A(b) : A(S, !1);
          },
          !0
        );
      }
      y(I, R);
    };
    j(v, (I) => {
      i() ? I(p) : I(w, !1);
    });
  }
  y(t, g), pe();
}
var Sd = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function Rd(t, e) {
  let n = C(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Sd();
      ne(() => Oe(i, n())), y(r, i);
    }
  });
}
var Ed = /* @__PURE__ */ Z('<span class="secondary-label svelte-17mxdlc"> </span>'), Ld = /* @__PURE__ */ Z('<div class="seperator svelte-17mxdlc"><!></div>'), Pd = /* @__PURE__ */ Z('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), kd = /* @__PURE__ */ Z('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function Td(t, e) {
  ge(e, !0);
  let n = C(e, "breadcrumbs", 19, () => []), r = C(e, "activeIndex", 3, 0);
  const a = (l) => {
    var s;
    const u = n()[l];
    !(u != null && u.enabled) || l === r() || (s = e.handleClick) == null || s.call(e, l);
  };
  var i = kd();
  Wt(i, 21, n, qt, (l, u, s) => {
    var o = Pd(), c = T(o);
    let f;
    c.__click = () => a(s);
    let h;
    var g = T(c), v = T(g), p = B(g, 2);
    {
      var w = (x) => {
        var b = Ed();
        let S;
        var A = T(b);
        ne(
          (m) => {
            S = Oe(b, "", S, m), Re(A, d(u).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), y(x, b);
      };
      j(p, (x) => {
        d(u).secondaryLabel && x(w);
      });
    }
    var I = B(c, 2);
    {
      var R = (x) => {
        var b = Ld(), S = T(b);
        {
          let A = /* @__PURE__ */ ie(() => e.color ? e.color : "#004552");
          Rd(S, {
            get svgStyles() {
              return `fill: ${d(A) ?? ""}`;
            }
          });
        }
        y(x, b);
      };
      j(I, (x) => {
        s < n().length - 1 && x(R);
      });
    }
    ne(
      (x, b) => {
        f = In(c, 1, "breadcrumb svelte-17mxdlc", null, f, x), Ft(c, "aria-current", s === r() ? "page" : void 0), h = Oe(c, "", h, b), Re(v, d(u).label);
      },
      [
        () => ({
          "br-disabled": !d(u).enabled,
          "br-active": s === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), y(l, o);
  }), y(t, i), pe();
}
Ue(["click"]);
Ue(["click"]);
function Ba(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var Gd = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Ba({}, Gd.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Xr, Zi = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Xr = {}, Ba(Xr, Zi.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ba(Xr, Zi.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Dd = Nn([]);
Dd.subscribe;
Ue(["click", "pointerdown", "pointerup", "pointermove"]);
var Md = /* @__PURE__ */ Z("<div><!></div>");
function Oa(t, e) {
  let n = C(e, "variant", 3, "secondary");
  var r = Md(), a = T(r);
  _o(a, e, "default", {}), ne(() => In(r, 1, `osc-card osc-card--${n()}`, "svelte-14hhvrx")), y(t, r);
}
var Hd = /* @__PURE__ */ Z('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), Zd = /* @__PURE__ */ Z('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), Wd = /* @__PURE__ */ Z('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), Fd = /* @__PURE__ */ Z('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function Zl(t, e) {
  let n = C(e, "backgroundColor", 3, "");
  var r = Fd(), a = T(r);
  {
    var i = (c) => {
      var f = Hd(), h = T(f);
      se(h, () => e.header), y(c, f);
    };
    j(a, (c) => {
      e.header && c(i);
    });
  }
  var l = B(a, 2);
  {
    var u = (c) => {
      var f = Zd(), h = T(f);
      se(h, () => e.content), y(c, f);
    };
    j(l, (c) => {
      e.content && c(u);
    });
  }
  var s = B(l, 2);
  {
    var o = (c) => {
      var f = Wd(), h = T(f);
      se(h, () => e.additional), y(c, f);
    };
    j(s, (c) => {
      e.additional && c(o);
    });
  }
  ne(() => Oe(r, `--bg-color: ${n() ?? ""}`)), y(t, r);
}
Ue(["click"]);
const Nd = 4e3;
function Bd() {
  let t = ce({ items: [] }), e = 0;
  const n = (a) => {
    t.items = t.items.filter((i) => i.id !== a);
  }, r = (a, i, l, u = Nd) => {
    const s = e++, o = { id: s, summary: i, detail: l, type: a };
    return t.items = [...t.items, o], setTimeout(
      () => {
        n(s);
      },
      u
    ), s;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return t;
    },
    success: (a, i, l) => r("success", a, i, l),
    error: (a, i, l) => r("error", a, i, l),
    info: (a, i, l) => r("info", a, i, l),
    warn: (a, i, l) => r("warn", a, i, l),
    remove: n
  };
}
Bd();
Ue(["input"]);
const Od = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDwhLS0tIHN1Z2dlc3Rpb24gLS0+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+RGVtbyBQbHVnaW4gTG9hZGVyPC90aXRsZT4KICAgICAgICA8IS0tIEV4dGVybmFsIHBsdWdpbiAtLT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnN1YnN0YXRpb24tZXhwbG9yZXItdjI8L2lkPgogICAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMgCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPCEtLSBJbnRlcm5hbCBwbHVnaW4gLS0+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5pZWQtZWRpdG9yLXYyPC9pZD4KICAgICAgICAgIDxuYW1lPklFRDwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPi9wbHVnaW5zL3NyYy9lZGl0b3JzL0lFRC5qczwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICA8L2dyb3VwPgoKICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5EYXRhPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnN1YnN0YXRpb24tZXhwbG9yZXI8L2lkPgogICAgICAgICAgPG5hbWU+U3Vic3RhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICA8L2dyb3VwPgoKICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db25uZWN0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmllZC1lZGl0b3I8L2lkPgogICAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9pZWQuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnRlbXBsYXRlLWdlbmVyYXRvcjwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL3RlbXBsYXRlLWdlbmVyYXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICA8L2dyb3VwPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbW11bmljYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9jb21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CiAgPHByb2Nlc3M+CiAgICA8aWQ+c3RhbmRhcmQtcHJvY2Vzcy0yPC9pZD4KICAgIDx2ZXJzaW9uPjAuMC4xPC92ZXJzaW9uPgogICAgPG5hbWU+U3RhbmRhcmQgUHJvY2VzcyAyPC9uYW1lPgogICAgPGRlc2NyaXB0aW9uPgogICAgICBUaGlzIGlzIGEgc3RhbmRhcmRpemVkIHByb2Nlc3MgdXNlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5CiAgICA8L2Rlc2NyaXB0aW9uPgoKICAgIDxwbHVnaW5zLXNlcXVlbmNlPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRhdGE8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KCiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+Q29ubmVjdGlvbjwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5pZWQtZWRpdG9yPC9pZD4KICAgICAgICAgIDxuYW1lPklFRDwvbmFtZT4KICAgICAgICAgIDxzcmM+CiAgICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvaWVkLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50ZW1wbGF0ZS1nZW5lcmF0b3I8L2lkPgogICAgICAgICAgPG5hbWU+VGVtcGxhdGUgR2VuZXJhdG9yPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgPC9ncm91cD4KICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db21tdW5pY2F0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZXhwbG9yZXI8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbiBFeHBsb3JlcjwvbmFtZT4KICAgICAgICAgIDxzcmM+CiAgICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvY29tbXVuaWNhdGlvbi5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgo8L3Byb2Nlc3Nlcz4K", Ua = ce({ loading: !1 }), Va = ce({ error: "" }), Cn = ce({ processes: [] }), ze = ce({ process: null }), xr = ce({ isEditing: !1 }), Wl = ce({ plugins: [] }), Ud = Od, Fl = "engineeringWizardProcesses", Vd = "external";
if (typeof localStorage < "u") {
  const t = localStorage.getItem(Fl);
  if (t)
    try {
      const e = JSON.parse(t);
      Array.isArray(e) && (Cn.processes = e);
    } catch {
    }
}
Ys(() => {
  Ee(() => {
    Cn.processes.forEach((e) => {
      var n;
      (n = e.pluginGroups) == null || n.forEach((r) => {
        var a;
        (a = r.plugins) == null || a.length;
      });
    });
    const t = As(Cn.processes);
    if (!(typeof localStorage > "u"))
      try {
        localStorage.setItem(Fl, JSON.stringify(t));
      } catch {
      }
  });
});
const ln = (t) => {
  var e;
  return ((e = t == null ? void 0 : t.textContent) == null ? void 0 : e.trim()) ?? "";
}, jd = (t, e) => (t == null ? void 0 : t.getAttribute(e)) ?? void 0, zd = (t) => {
  const e = jd(t == null ? void 0 : t.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : Vd;
}, Yr = (t, e) => Array.from(t.querySelectorAll(e)), Wi = (t) => ({
  id: ln(t.querySelector("id")),
  name: ln(t.querySelector("name")),
  src: ln(t.querySelector("src")) || void 0,
  sourceUrl: ln(t.querySelector("sourceUrl")) || void 0,
  type: zd(t)
}), Xd = (t) => Yr(t, "process").map((e) => {
  const n = Yr(e, ":scope > plugins-sequence > group"), r = n.length ? n.map((a) => ({
    title: ln(a.querySelector(":scope > title")) || "Untitled",
    plugins: Yr(a, ":scope > plugin").map(Wi)
  })) : [
    {
      title: "Ungrouped",
      plugins: Yr(e, ":scope > plugins-sequence > plugin").map(Wi)
    }
  ];
  return {
    id: ln(e.querySelector(":scope > id")),
    version: ln(e.querySelector(":scope > version")),
    name: ln(e.querySelector(":scope > name")),
    description: ln(e.querySelector(":scope > description")),
    pluginGroups: r
  };
});
async function Yd() {
  Ua.loading = !0, Va.error = "";
  try {
    const t = await fetch(Ud, { cache: "no-cache" });
    if (!t.ok)
      throw new Error(`HTTP ${t.status}${t.statusText ? `: ${t.statusText}` : ""}`);
    const e = await t.text();
    if (typeof DOMParser > "u")
      throw new Error("DOMParser is not available in this environment.");
    const n = new DOMParser().parseFromString(e, "application/xml");
    if (n.getElementsByTagName("parsererror").length)
      throw new Error("Invalid XML file format.");
    const r = Xd(n);
    return Cn.processes = r, r;
  } catch (t) {
    const e = t instanceof Error ? t.message : "Failed to load processes.";
    throw Va.error = e, t;
  } finally {
    Ua.loading = !1;
  }
}
function qd(t, e, n) {
  const r = "Ungrouped", a = Cn.processes.find((u) => u.id === t);
  if (!a) return;
  const i = a.pluginGroups ?? (a.pluginGroups = []);
  let l = i.find((u) => u.title === r);
  l || (l = { title: r, plugins: [] }, i.push(l)), l.plugins || (l.plugins = []), l.plugins.push(e);
}
function Jd(t, e) {
  const n = Cn.processes.find((r) => r.id === t);
  if (!n || !n.pluginGroups) return !1;
  for (const r of n.pluginGroups) {
    if (!(r != null && r.plugins)) continue;
    const a = r.plugins.findIndex((i) => i.id === e);
    if (a !== -1) {
      if (r.plugins.splice(a, 1), r.plugins.length === 0) {
        const i = n.pluginGroups.indexOf(r);
        i !== -1 && n.pluginGroups.splice(i, 1);
      }
      return !0;
    }
  }
  return !1;
}
function Kd(t) {
  const e = Cn.processes.find((n) => n.id === t);
  if (!(!e || !e.pluginGroups))
    for (const n of e.pluginGroups)
      n.plugins && (n.plugins.length = 0);
}
function Qd(t) {
  Wl.plugins = [...t];
}
function $d(t) {
  return (t.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var ec = (t, e, n) => e.handleView(n()), tc = (t, e, n) => e.handleStart(n()), nc = /* @__PURE__ */ Z('<button type="button" class="icon svelte-au6aaq" aria-label="View process"><!></button> <button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>', 1), rc = /* @__PURE__ */ Z(`<div class="processes svelte-au6aaq"><div class="process-banner svelte-au6aaq"><div class="process-banner__info svelte-au6aaq"><!> <span class="svelte-au6aaq">A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?</span></div> <!></div> <div class="process-toolbar svelte-au6aaq"><!> <!></div> <!></div>`);
function ac(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ $(""), r = /* @__PURE__ */ ie(() => d(n).trim().toLowerCase()), a = /* @__PURE__ */ ie(() => (Cn.processes ?? []).map((I) => ({ ...I, displayName: I.name || I.id }))), i = /* @__PURE__ */ ie(() => d(r) ? d(a).filter((I) => (I.displayName ?? "").toLowerCase().includes(d(r))) : d(a));
  const l = [
    { key: "displayName", header: "Name" },
    { key: "description", header: "Description" }
  ], u = () => {
    console.log("Add new process clicked");
  };
  var s = rc(), o = T(s), c = T(o), f = T(c);
  Xu(f, {});
  var h = B(c, 2);
  vr(h, {
    variant: "raised",
    style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
    $$events: { click: () => console.log("Continue Process") },
    children: (I, R) => {
      var x = _t("CONTINUE");
      y(I, x);
    },
    $$slots: { default: !0 }
  });
  var g = B(o, 2), v = T(g);
  Ml(v, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return d(n);
    },
    set value(I) {
      D(n, I, !0);
    }
  });
  var p = B(v, 2);
  vr(p, {
    variant: "raised",
    style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
    $$events: { click: u },
    children: (I, R) => {
      var x = _t("ADD NEW PROCESS");
      y(I, x);
    },
    $$slots: { default: !0 }
  });
  var w = B(g, 2);
  xd(w, {
    get items() {
      return d(i);
    },
    get columns() {
      return l;
    },
    get loading() {
      return Ua.loading;
    },
    get errorMsg() {
      return Va.error;
    },
    emptyText: "No processes available.",
    hasActions: !0,
    headerBg: "#DAE3E6",
    rowBg: "#ffffff",
    actions: (R, x) => {
      let b = () => x == null ? void 0 : x().item;
      var S = nc(), A = U(S);
      A.__click = [ec, e, b];
      var m = T(A);
      Zu(m, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" });
      var _ = B(A, 2);
      _.__click = [tc, e, b];
      var L = T(_);
      ju(L, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), y(R, S);
    },
    $$slots: { actions: !0 }
  }), y(t, s), pe();
}
Ue(["click"]);
var ic = (t, e, n) => e.onSelect(d(n).id), lc = /* @__PURE__ */ Z("<button><!></button>"), sc = /* @__PURE__ */ Z('<div class="step-line svelte-1ar0udo" aria-hidden="true"></div>'), oc = /* @__PURE__ */ Z('<div class="step svelte-1ar0udo"><!> <p> </p></div> <!>', 1), uc = /* @__PURE__ */ Z('<div class="steps svelte-1ar0udo"></div>');
function Nl(t, e) {
  ge(e, !0);
  let n = C(e, "items", 19, () => []), r = C(e, "visited", 19, () => []), a = C(e, "currentId", 3, null), i = C(e, "status", 19, () => ({})), l = C(e, "tooltipMap", 19, () => ({}));
  var u = uc();
  Wt(u, 21, n, qt, (s, o, c) => {
    var f = oc(), h = U(f), g = T(h);
    {
      let R = /* @__PURE__ */ ie(() => l()[d(o).id] ?? "");
      ad(g, {
        get content() {
          return d(R);
        },
        side: "bottom",
        children: (x, b) => {
          var S = lc();
          S.__click = [ic, e, o];
          let A;
          var m = T(S);
          {
            var _ = (P) => {
              var F = Q(), z = U(F);
              {
                var X = (k) => {
                  Fu(k);
                }, fe = (k) => {
                  var W = Q(), O = U(W);
                  {
                    var N = (M) => {
                      Bu(M);
                    }, ee = (M) => {
                      var V = Q(), te = U(V);
                      {
                        var me = (re) => {
                          Uu(re, {});
                        }, be = (re) => {
                          var ae = _t();
                          ae.nodeValue = c + 1, y(re, ae);
                        };
                        j(
                          te,
                          (re) => {
                            i()[d(o).id] === "warning" ? re(me) : re(be, !1);
                          },
                          !0
                        );
                      }
                      y(M, V);
                    };
                    j(
                      O,
                      (M) => {
                        i()[d(o).id] === "error" ? M(N) : M(ee, !1);
                      },
                      !0
                    );
                  }
                  y(k, W);
                };
                j(z, (k) => {
                  i()[d(o).id] === "check" ? k(X) : k(fe, !1);
                });
              }
              y(P, F);
            }, L = (P) => {
              var F = _t();
              F.nodeValue = c + 1, y(P, F);
            };
            j(m, (P) => {
              r().includes(d(o).id) && d(o).id !== a() ? P(_) : P(L, !1);
            });
          }
          ne(
            (P) => {
              Ft(S, "aria-current", d(o).id === a() ? "step" : void 0), A = In(S, 1, "", null, A, P);
            },
            [
              () => ({
                "not-visited": !r().includes(d(o).id),
                current: d(o).id === a(),
                visited: r().includes(d(o).id) && d(o).id !== a()
              })
            ]
          ), y(x, S);
        },
        $$slots: { default: !0 }
      });
    }
    var v = B(g, 2), p = T(v), w = B(h, 2);
    {
      var I = (R) => {
        var x = sc();
        y(R, x);
      };
      j(w, (R) => {
        c < n().length - 1 && R(I);
      });
    }
    ne(() => Re(p, d(o).label)), y(s, f);
  }), y(t, u), pe();
}
Ue(["click"]);
function dc(t, e) {
  const n = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = C(e, "currentId", 3, null), a = C(e, "visited", 19, () => []);
  Nl(t, {
    get items() {
      return n;
    },
    get visited() {
      return a();
    },
    get currentId() {
      return r();
    },
    status: {},
    tooltipMap: {},
    get onSelect() {
      return e.onSelect;
    }
  });
}
var cc = /* @__PURE__ */ Z('<div style="display:flex;align-items:center;gap:0.5rem;"><button type="button" class="back-container svelte-1i38ker"><!> <span>Back to Overview</span> <span class="back-container__title svelte-1i38ker"> </span></button></div>');
function Bl(t, e) {
  let n = C(e, "title", 3, "Engineering Wizard");
  var r = cc(), a = T(r);
  a.__click = function(...s) {
    var o;
    (o = e.onBack) == null || o.apply(this, s);
  };
  var i = T(a);
  qu(i, {});
  var l = B(i, 4), u = T(l);
  ne(() => Re(u, n())), y(t, r);
}
Ue(["click"]);
function fc() {
  alert("adding a group");
}
var vc = /* @__PURE__ */ Z('<div class="plugin-list__header-action svelte-1a2zky1"><!></div>'), hc = /* @__PURE__ */ Z('<header class="plugin-list__header svelte-1a2zky1"><p class="plugin-list__title svelte-1a2zky1"> </p> <!></header>'), gc = /* @__PURE__ */ Z('<div class="plugin-list__item-row__dashed svelte-1a2zky1"></div>'), pc = /* @__PURE__ */ Z('<div class="plugin-list__item-action svelte-1a2zky1"><!></div>'), bc = /* @__PURE__ */ Z('<div class="plugin-list__item-row svelte-1a2zky1"><span class="plugin-list__item-name svelte-1a2zky1"> </span> <!></div>'), mc = /* @__PURE__ */ Z('<section class="plugin-list__group svelte-1a2zky1"><header class="plugin-list__group-header svelte-1a2zky1"><span class="plugin-list__group-index svelte-1a2zky1"></span> <span class="plugin-list__group-title svelte-1a2zky1"> </span></header> <!> <!></section>'), _c = /* @__PURE__ */ Z('<div class="plugin-list__body svelte-1a2zky1"></div>'), Ic = /* @__PURE__ */ Z('<div class="plugin-list__footer svelte-1a2zky1"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-1a2zky1"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-1a2zky1"><!> <span>Add group</span></button></div>');
function Ol(t, e) {
  ge(e, !0);
  const n = (u) => {
    var s = hc(), o = T(s), c = T(o), f = B(o, 2);
    {
      var h = (g) => {
        var v = vc(), p = T(v);
        se(p, () => e.headerAction), y(g, v);
      };
      j(f, (g) => {
        e.headerAction && g(h);
      });
    }
    ne(() => Re(c, l())), y(u, s);
  }, r = (u) => {
    var s = _c();
    Wt(s, 21, i, qt, (o, c, f) => {
      var h = mc(), g = T(h), v = T(g);
      v.textContent = `${f + 1}.`;
      var p = B(v, 2), w = T(p), I = B(g, 2);
      {
        var R = (b) => {
          Oa(b, {
            variant: "dashed",
            children: (S, A) => {
              var m = gc();
              y(S, m);
            },
            $$slots: { default: !0 }
          });
        };
        j(I, (b) => {
          d(c).plugins.length === 0 && b(R);
        });
      }
      var x = B(I, 2);
      Wt(x, 17, () => d(c).plugins, qt, (b, S, A) => {
        Oa(b, {
          variant: "secondary",
          children: (m, _) => {
            var L = bc(), P = T(L), F = T(P), z = B(P, 2);
            {
              var X = (fe) => {
                var k = pc(), W = T(k);
                se(W, () => e.itemAction, () => ({
                  group: d(c),
                  plugin: d(S),
                  groupIndex: f,
                  pluginIndex: A
                })), y(fe, k);
              };
              j(z, (fe) => {
                e.itemAction && fe(X);
              });
            }
            ne(() => Re(F, d(S).name)), y(m, L);
          },
          $$slots: { default: !0 }
        });
      }), ne(() => Re(w, d(c).title)), y(o, h);
    }), y(u, s);
  }, a = (u) => {
    var s = Q(), o = U(s);
    {
      var c = (f) => {
        var h = Ic(), g = T(h), v = T(g);
        Gu(v, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var p = B(g, 2);
        p.__click = [fc];
        var w = T(p);
        Hl(w, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), y(f, h);
      };
      j(o, (f) => {
        xr.isEditing && f(c);
      });
    }
    y(u, s);
  };
  let i = C(e, "pluginGroups", 19, () => []), l = C(e, "title", 3, "Process");
  Zl(t, {
    class: "plugin-list",
    backgroundColor: "var(--brand)",
    get header() {
      return n;
    },
    get content() {
      return r;
    },
    get additional() {
      return a;
    }
  }), pe();
}
Ue(["click"]);
function Cc(t, e) {
  const n = (a) => {
    vr(a, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (i, l) => {
        var u = _t("EDIT");
        y(i, u);
      },
      $$slots: { default: !0 }
    });
  };
  let r = C(e, "pluginGroups", 19, () => []);
  Ol(t, {
    get pluginGroups() {
      return r();
    },
    get headerAction() {
      return n;
    }
  });
}
function yc() {
  var e;
  const t = document.querySelector("open-scd");
  return ((e = t == null ? void 0 : t.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function Ac(t) {
  var e;
  (e = yc()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: t },
      bubbles: !0,
      composed: !0
    })
  );
}
async function wc(t) {
  if (!customElements.get(t.id) && t.type === "external") {
    const e = await import(
      /* @vite-ignore */
      t.src
    );
    customElements.define(t.id, e.default);
  }
}
async function xc(t) {
  await Promise.all(
    t.filter((e) => e.type === "external").map(async (e) => {
      try {
        if (!customElements.get(e.id)) {
          const n = await import(
            /* @vite-ignore */
            e.src
          );
          customElements.define(e.id, n.default);
        }
      } catch (n) {
        console.error("Failed to preload plugin", e.id, n);
      }
    })
  );
}
const mn = Nn(!0);
mn.subscribe((t) => {
  Ac(t);
});
var Sc = (t, e, n) => e(n().id), Rc = /* @__PURE__ */ Z('<button type="button" class="plugin-list__removeBtn svelte-gipzw9"><!></button>');
function Ec(t, e) {
  ge(e, !0);
  const n = (u) => {
    vr(u, {
      style: "background-color: #FF203A",
      variant: "raised",
      "aria-label": "Remove all plugins",
      onclick: i,
      children: (s, o) => {
        var c = _t("REMOVE ALL");
        y(s, c);
      },
      $$slots: { default: !0 }
    });
  }, r = (u, s) => {
    let o = () => s == null ? void 0 : s().plugin;
    var c = Rc();
    c.__click = [Sc, l, o];
    var f = T(c);
    ku(f, { svgStyles: "fill: #FF203A" }), ne(() => Ft(c, "aria-label", `Remove ${o().name}`)), y(u, c);
  };
  let a = C(e, "pluginGroups", 19, () => []);
  function i() {
    Kd(ze.process.id);
  }
  function l(u) {
    Jd(ze.process.id, u);
  }
  Ol(t, {
    get pluginGroups() {
      return a();
    },
    get headerAction() {
      return n;
    },
    get itemAction() {
      return r;
    }
  }), pe();
}
Ue(["click"]);
function Lc(t) {
  var r;
  const e = t.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), n = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${n}`;
}
var Pc = /* @__PURE__ */ Z('<div class="card-header svelte-1fcjrhj"><p class="header-info svelte-1fcjrhj">Add External Plugins</p> <div class="search-input svelte-1fcjrhj"><!></div></div>'), kc = (t, e, n) => e(d(n), ze.process.id), Tc = /* @__PURE__ */ Z('<div class="card-item-content svelte-1fcjrhj"><p class="plugin-name svelte-1fcjrhj"> </p> <button class="plugin-add-btn svelte-1fcjrhj"><!></button></div>'), Gc = /* @__PURE__ */ Z('<div class="card-parent-content svelte-1fcjrhj"></div>');
function Dc(t, e) {
  ge(e, !0);
  const n = (u) => {
    var s = Pc(), o = B(T(s), 2), c = T(o);
    Ml(c, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return i();
      },
      set value(f) {
        i(f);
      }
    }), y(u, s);
  }, r = (u) => {
    var s = Gc();
    Wt(s, 21, a, qt, (o, c) => {
      Oa(o, {
        variant: "secondary",
        children: (f, h) => {
          var g = Tc(), v = T(g), p = T(v), w = B(v, 2);
          w.__click = [kc, l, c];
          var I = T(w);
          Hl(I, { svgStyles: "fill: var(--brand);" }), ne(() => Re(p, d(c).name)), y(f, g);
        },
        $$slots: { default: !0 }
      });
    }), y(u, s);
  };
  let a = C(e, "plugins", 19, () => []), i = C(e, "searchTerm", 15, "");
  function l(u, s) {
    qd(s, u);
  }
  Zl(t, {
    backgroundColor: "#DAE3E6",
    get header() {
      return n;
    },
    get content() {
      return r;
    }
  }), pe();
}
Ue(["click"]);
var Mc = /* @__PURE__ */ Z('<div class="process-definition-view svelte-ws8xx1"><!> <div class="drag-and-drop-info svelte-ws8xx1"><!> <p class="svelte-ws8xx1">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function Hc(t, e) {
  ge(e, !0);
  let n = C(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ $(""), a = /* @__PURE__ */ ie(() => {
    const f = Wl.plugins.map((g) => ({
      id: Lc(g.name),
      name: g.name,
      src: g.src,
      type: "internal"
    })), h = d(r).toLowerCase().trim();
    return h ? f.filter((g) => g.name.toLowerCase().includes(h)) : f;
  });
  var i = Mc(), l = T(i);
  Ec(l, {
    get pluginGroups() {
      return n();
    }
  });
  var u = B(l, 2), s = T(u);
  nd(s, { svgStyles: "fill: #6B9197" });
  var o = B(u, 2);
  Dc(o, {
    get plugins() {
      return d(a);
    },
    get searchTerm() {
      return d(r);
    },
    set searchTerm(c) {
      D(r, c, !0);
    }
  }), y(t, i), pe();
}
const Zc = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4K", Wc = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmllZC1uYW1lLTAwMTwvaWQ+CiAgICA8bmFtZT5JRUQgTmFtZSBGb3JtYXQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyBJRUQgbmFtZXMgZm9sbG93IHRoZSBuYW1pbmcgY29udmVudGlvbiwgYWxsb3dlZCBjaGFyYWN0ZXJzLCBhbmQgdW5pcXVlbmVzcyB3aXRoaW4gdGhlIHByb2plY3QuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2staWVkLW5hbWUtZm9ybWF0PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmFwLWNvbmZpZy0wMDI8L2lkPgogICAgPG5hbWU+QWNjZXNzIFBvaW50IENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgQWNjZXNzUG9pbnQgZWxlbWVudHMgaGF2ZSByZXF1aXJlZCBhdHRyaWJ1dGVzIGFuZCB2YWxpZCByZWZlcmVuY2VzIHRvIHNlcnZlci9zZXJ2aWNlcy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1hY2Nlc3MtcG9pbnQtY29uZmlnPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmxuLWFzc2lnbi0wMDM8L2lkPgogICAgPG5hbWU+TG9naWNhbCBOb2RlIEFzc2lnbm1lbnRzPC9uYW1lPgogICAgPGRlc2NyaXB0aW9uPlZhbGlkYXRlcyBsb2dpY2FsIG5vZGVzIGFyZSBjb3JyZWN0bHkgYXNzaWduZWQgd2l0aCB2YWxpZCBsbkNsYXNzL2xuSW5zdCBjb21iaW5hdGlvbnMgYW5kIHJlcXVpcmVkIExOcyBhcmUgcHJlc2VudC48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1sbi1hc3NpZ25tZW50czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", Fc = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnN1YnN0YXRpb24tc3RydWN0dXJlLTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJzdGF0aW9uIFN0cnVjdHVyZSBJbnRlZ3JpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+U3RydWN0dXJlIEludGVncml0eSBEZXNjcmlwdGlvbjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXN1YnN0YXRpb24tc3RydWN0dXJlPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnZvbHRhZ2UtbGV2ZWwtdW5pcXVlbmVzcy0wMDI8L2lkPgogICAgPG5hbWU+Vm9sdGFnZSBMZXZlbCBOYW1lIFVuaXF1ZW5lc3M8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyB2b2x0YWdlIGxldmVsIG5hbWVzIGFyZSB1bmlxdWUgd2l0aGluIHRoZSBzdWJzdGF0aW9uLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXZsLW5hbWUtdW5pcXVlbmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5iYXktbmFtaW5nLTAwMzwvaWQ+CiAgICA8bmFtZT5CYXkgTmFtaW5nIENvbnZlbnRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmFsaWRhdGVzIGJheSBuYW1lcyBmb2xsb3cgdGhlIG5hbWluZyBjb252ZW50aW9uIGFuZCBhcmUgdW5pcXVlIHdpdGhpbiB0aGVpciB2b2x0YWdlIGxldmVsLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWJheS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cg==", Nc = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnRlbXBsYXRlLWlucHV0cy0wMDE8L2lkPgogICAgPG5hbWU+UmVxdWlyZWQgSW5wdXRzIFByZXNlbnQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgYWxsIHJlcXVpcmVkIHRlbXBsYXRlIGlucHV0IGZpZWxkcyBhcmUgcHJvdmlkZWQgYW5kIG5vbi1lbXB0eS48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1yZXF1aXJlZC1pbnB1dHM8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+dGctbmFtaW5nLTAwMjwvaWQ+CiAgICA8bmFtZT5UZW1wbGF0ZSBOYW1pbmcgQ29udmVudGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIHRlbXBsYXRlIG5hbWVzIGZvbGxvdyB0aGUgZGVmaW5lZCBuYW1pbmcgY29udmVudGlvbiBhbmQgYWxsb3dlZCBjaGFyYWN0ZXJzLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXRlbXBsYXRlLW5hbWluZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD50Zy1jb21wYXQtMDAzPC9pZD4KICAgIDxuYW1lPlRlbXBsYXRlIENvbXBhdGliaWxpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+Q2hlY2tzIHRoZSBnZW5lcmF0ZWQgdGVtcGxhdGUgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBzZWxlY3RlZCBwcm9maWxlcyBvciB2ZXJzaW9ucy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1jb21wYXRpYmlsaXR5PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgo8L3ZhbGlkYXRpb25zPgoK";
var Bc = /* @__PURE__ */ Z('<button type="button"><span> </span></button>'), Oc = /* @__PURE__ */ Z('<div><button type="button" class="validation-groups__group-title svelte-v2hgj7"> </button> <!></div>'), Uc = /* @__PURE__ */ Z("<p>Loading…</p>"), Vc = /* @__PURE__ */ Z('<p class="error svelte-v2hgj7"> </p>'), jc = /* @__PURE__ */ Z('<div class="xml-viewer svelte-v2hgj7"><h4 class="xml-viewer__title svelte-v2hgj7"> </h4> <div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), zc = /* @__PURE__ */ Z('<span class="validation-xml-container__description svelte-v2hgj7"> </span>'), Xc = /* @__PURE__ */ Z('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="true" title="Collapse"><!></button>'), Yc = /* @__PURE__ */ Z('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="false" title="Expand"><!></button>'), qc = /* @__PURE__ */ Z('<div class="xml-viewer svelte-v2hgj7"><div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), Jc = /* @__PURE__ */ Z('<div class="validation-xml-container svelte-v2hgj7"><div class="validation-xml-container__meta svelte-v2hgj7"><span class="validation-xml-container__name svelte-v2hgj7"> </span> <!> <div class="validation-xml-container__actions svelte-v2hgj7"><button type="button" class="delete-btn svelte-v2hgj7" title="Remove"><!></button> <!></div></div> <!></div>'), Kc = /* @__PURE__ */ Z('<div class="validation-xml-list svelte-v2hgj7"></div>'), Qc = /* @__PURE__ */ Z('<div class="validation-groups svelte-v2hgj7"></div> <!>', 1);
function $c(t, e) {
  ge(e, !0);
  let n = C(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ $(null), a = /* @__PURE__ */ $(null);
  const i = /* @__PURE__ */ ie(() => d(r) !== null ? n()[d(r)] : null), l = /* @__PURE__ */ ie(() => d(i) && d(a) !== null ? d(i).plugins[d(a)] : null);
  Ee(() => {
    var _, L;
    if (!((_ = n()) != null && _.length)) {
      D(r, null), D(a, null);
      return;
    }
    (d(r) === null || d(r) >= n().length) && D(r, 0);
    const m = n()[d(r)];
    if (!((L = m == null ? void 0 : m.plugins) != null && L.length)) {
      D(a, null);
      return;
    }
    (d(a) === null || d(a) >= m.plugins.length) && D(a, 0);
  });
  let u = /* @__PURE__ */ $(""), s = /* @__PURE__ */ $(!1), o = /* @__PURE__ */ $(""), c = null, f = /* @__PURE__ */ $(ce([])), h = /* @__PURE__ */ $(ce(/* @__PURE__ */ new Set()));
  async function g(m) {
    D(s, !0), D(o, ""), D(u, ""), D(f, [], !0), D(h, /* @__PURE__ */ new Set(), !0), c == null || c.abort(), c = new AbortController();
    try {
      const _ = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/communication-explorer.xml": Zc, "../../assets/validations/ied-editor.xml": Wc, "../../assets/validations/substation-explorer.xml": Fc, "../../assets/validations/template-generator.xml": Nc }))[`../../assets/validations/${m}.xml`], import.meta.url).href, L = await fetch(_, { cache: "no-cache", signal: c.signal });
      if (!L.ok) {
        if (L.status === 404) {
          D(u, "(No XML found for this plugin.)");
          return;
        }
        throw new Error(`HTTP ${L.status}`);
      }
      D(u, await L.text(), !0);
      const F = new DOMParser().parseFromString(d(u), "application/xml");
      if (F.querySelector("parsererror"))
        throw new Error("Invalid XML format.");
      const X = new XMLSerializer(), fe = Array.from(F.getElementsByTagName("validation"));
      D(
        f,
        fe.map((k, W) => {
          var re, ae, ue, Le, We, tt, He;
          const O = (re = k.getAttribute("name")) == null ? void 0 : re.trim(), N = (ae = k.getAttribute("id")) == null ? void 0 : ae.trim(), ee = (Le = (ue = k.querySelector("name")) == null ? void 0 : ue.textContent) == null ? void 0 : Le.trim(), M = (We = k.getAttribute("description")) == null ? void 0 : We.trim(), V = (He = (tt = k.querySelector("description")) == null ? void 0 : tt.textContent) == null ? void 0 : He.trim(), te = O || N || ee || `Validation ${W + 1}`, me = M || V || void 0, be = X.serializeToString(k);
          return { name: te, description: me, xml: be };
        }),
        !0
      ), D(h, new Set(d(f).map((k, W) => W)), !0);
    } catch (_) {
      if ((_ == null ? void 0 : _.name) === "AbortError")
        return;
      D(o, (_ == null ? void 0 : _.message) || "Failed to load XML.", !0);
    } finally {
      D(s, !1);
    }
  }
  let v = /* @__PURE__ */ ie(() => {
    var m;
    return ((m = d(l)) == null ? void 0 : m.id) ?? null;
  }), p = null;
  Ee(() => {
    !d(v) || d(v) === p || (p = d(v), g(d(v)));
  });
  function w(m) {
    var L;
    const _ = n()[m];
    D(r, m, !0), D(a, (L = _ == null ? void 0 : _.plugins) != null && L.length ? 0 : null, !0);
  }
  function I(m, _) {
    D(r, m, !0), D(a, _, !0);
  }
  function R(m) {
    d(h).has(m) ? d(h).delete(m) : d(h).add(m), D(h, new Set(d(h)), !0);
  }
  var x = Qc(), b = U(x);
  Wt(b, 21, n, qt, (m, _, L) => {
    var P = Oc();
    let F;
    var z = T(P);
    z.__click = () => w(L);
    var X = T(z), fe = B(z, 2);
    {
      var k = (W) => {
        var O = Q(), N = U(O);
        Wt(N, 17, () => d(_).plugins, qt, (ee, M, V) => {
          var te = Bc();
          let me;
          te.__click = () => I(L, V);
          var be = T(te), re = T(be);
          ne(
            (ae) => {
              me = In(te, 1, "validation-groups__plugin svelte-v2hgj7", null, me, ae), Re(re, d(M).name);
            },
            [
              () => ({
                active: L === d(r) && V === d(a)
              })
            ]
          ), y(ee, te);
        }), y(W, O);
      };
      j(fe, (W) => {
        L === d(r) && W(k);
      });
    }
    ne(
      (W) => {
        F = In(P, 1, "validation-groups__group svelte-v2hgj7", null, F, W), Ft(z, "aria-pressed", L === d(r)), Re(X, d(_).title);
      },
      [
        () => ({ expanded: L === d(r) })
      ]
    ), y(m, P);
  });
  var S = B(b, 2);
  {
    var A = (m) => {
      var _ = Q(), L = U(_);
      {
        var P = (z) => {
          var X = Uc();
          y(z, X);
        }, F = (z) => {
          var X = Q(), fe = U(X);
          {
            var k = (O) => {
              var N = Vc(), ee = T(N);
              ne(() => Re(ee, d(o))), y(O, N);
            }, W = (O) => {
              var N = Q(), ee = U(N);
              {
                var M = (te) => {
                  var me = jc(), be = T(me), re = T(be), ae = B(be, 2), ue = T(ae), Le = T(ue);
                  ne(() => {
                    Re(re, `XML for: ${d(l).name ?? ""}`), Re(Le, d(u));
                  }), y(te, me);
                }, V = (te) => {
                  var me = Kc();
                  Wt(me, 21, () => d(f), qt, (be, re, ae) => {
                    var ue = Jc(), Le = T(ue), We = T(Le), tt = T(We), He = B(We, 2);
                    {
                      var ft = (Y) => {
                        var Ce = zc(), nt = T(Ce);
                        ne(() => Re(nt, d(re).description)), y(Y, Ce);
                      };
                      j(He, (Y) => {
                        d(re).description && Y(ft);
                      });
                    }
                    var Nt = B(He, 2), Rt = T(Nt), It = T(Rt);
                    Mu(It, { svgStyles: "fill: #FF203A" });
                    var Qt = B(Rt, 2);
                    {
                      var br = (Y) => {
                        var Ce = Xc();
                        Ce.__click = () => R(ae);
                        var nt = T(Ce);
                        Ku(nt, { svgStyles: "fill: #004552" }), y(Y, Ce);
                      }, mr = (Y) => {
                        var Ce = Yc();
                        Ce.__click = () => R(ae);
                        var nt = T(Ce);
                        $u(nt, { svgStyles: "fill: #004552" }), y(Y, Ce);
                      };
                      j(Qt, (Y) => {
                        d(h).has(ae) ? Y(br) : Y(mr, !1);
                      });
                    }
                    var E = B(Le, 2);
                    {
                      var G = (Y) => {
                        var Ce = qc(), nt = T(Ce), Yn = T(nt), _r = T(Yn);
                        ne(() => Re(_r, d(re).xml)), y(Y, Ce);
                      };
                      j(E, (Y) => {
                        d(h).has(ae) && Y(G);
                      });
                    }
                    ne(() => Re(tt, d(re).name)), y(be, ue);
                  }), y(te, me);
                };
                j(ee, (te) => {
                  d(f).length === 0 ? te(M) : te(V, !1);
                });
              }
              y(O, N);
            };
            j(
              fe,
              (O) => {
                d(o) ? O(k) : O(W, !1);
              },
              !0
            );
          }
          y(z, X);
        };
        j(L, (z) => {
          d(s) ? z(P) : z(F, !1);
        });
      }
      y(m, _);
    };
    j(S, (m) => {
      d(l) && m(A);
    });
  }
  y(t, x), pe();
}
Ue(["click"]);
function ef(t, e) {
  const n = (t == null ? void 0 : t.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${n}` : n, enabled: !1 }
  ];
}
function tf(t, e, n, r, a) {
  d(e) || (n(d(r)), D(a, d(a) + 1));
}
function nf(t, e, n) {
  d(e) || D(n, d(n) - 1);
}
var rf = /* @__PURE__ */ Z("<!> <!>", 1), af = /* @__PURE__ */ Z('<div class="stepper svelte-1qlms77"><!> <!> <div class="stepper-navigation svelte-1qlms77"><button type="button" class="btn btn--back svelte-1qlms77" aria-label="Previous step">Back</button> <button type="button" class="btn btn--next svelte-1qlms77" aria-label="Next step">Next</button></div></div> <div class="step-content svelte-1qlms77"><!></div>', 1), lf = /* @__PURE__ */ Z('<div class="step-content svelte-1qlms77"><div class="header svelte-1qlms77"><!> <!></div> <!></div>'), sf = /* @__PURE__ */ Z('<div class="page-content svelte-1qlms77"><!></div>');
function of(t, e) {
  ge(e, !0);
  const n = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ $(0), a = /* @__PURE__ */ ie(() => n[d(r)] ?? n[0]), i = /* @__PURE__ */ ie(() => d(r) === 0), l = /* @__PURE__ */ ie(() => d(r) === n.length - 1), u = /* @__PURE__ */ ie(() => ef(ze.process, { edit: xr.isEditing })), s = /* @__PURE__ */ ie(() => ze.process.pluginGroups), o = /* @__PURE__ */ $(ce([]));
  function c(b) {
    b === 0 && (mn.set(!0), ze.process = null);
  }
  function f() {
    console.log("EDITING"), xr.isEditing = !0, mn.set(!1), D(r, 0), D(o, [], !0);
  }
  function h() {
    xr.isEditing = !1, mn.set(!0), ze.process = null;
  }
  function g(b) {
    const S = n.indexOf(b);
    S !== -1 && D(r, S, !0);
  }
  function v(b) {
    d(o).includes(b) || D(o, [...d(o), b], !0);
  }
  function p() {
    alert("Add New Validation clicked!");
  }
  var w = sf(), I = T(w);
  {
    var R = (b) => {
      var S = af(), A = U(S), m = T(A);
      Bl(m, { onBack: h });
      var _ = B(m, 2);
      dc(_, {
        get currentId() {
          return d(a);
        },
        get visited() {
          return d(o);
        },
        onSelect: g
      });
      var L = B(_, 2), P = T(L);
      P.__click = [nf, i, r];
      var F = B(P, 2);
      F.__click = [
        tf,
        l,
        v,
        a,
        r
      ];
      var z = B(A, 2), X = T(z);
      {
        var fe = (W) => {
          Hc(W, {
            get pluginGroups() {
              return d(s);
            }
          });
        }, k = (W) => {
          var O = Q(), N = U(O);
          {
            var ee = (M) => {
              var V = rf(), te = U(V);
              {
                let be = /* @__PURE__ */ ie(() => !ze.process);
                vr(te, {
                  variant: "raised",
                  style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
                  onclick: p,
                  get disabled() {
                    return d(be);
                  },
                  "aria-label": "Add validation",
                  children: (re, ae) => {
                    var ue = _t("ADD NEW VALIDATION");
                    y(re, ue);
                  },
                  $$slots: { default: !0 }
                });
              }
              var me = B(te, 2);
              $c(me, {
                get pluginGroups() {
                  return d(s);
                },
                get breadcrumbs() {
                  return d(u);
                },
                activeBreadcrumbIndex: 2,
                $$events: {
                  addValidation: p,
                  breadcrumbClick: c
                }
              }), y(M, V);
            };
            j(
              N,
              (M) => {
                d(a) === "validator-configuration" && M(ee);
              },
              !0
            );
          }
          y(W, O);
        };
        j(X, (W) => {
          d(a) === "process-definition" ? W(fe) : W(k, !1);
        });
      }
      ne(() => {
        P.disabled = d(i), F.disabled = d(l);
      }), y(b, S);
    }, x = (b) => {
      var S = lf(), A = T(S), m = T(A);
      Td(m, {
        get breadcrumbs() {
          return d(u);
        },
        activeIndex: 1,
        handleClick: c
      });
      var _ = B(m, 2);
      {
        let P = /* @__PURE__ */ ie(() => !ze.process);
        vr(_, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
          onclick: () => e.handleStart(ze.process),
          get disabled() {
            return d(P);
          },
          "aria-label": "Start process",
          children: (F, z) => {
            var X = _t("START PROCESS");
            y(F, X);
          },
          $$slots: { default: !0 }
        });
      }
      var L = B(A, 2);
      Cc(L, {
        get pluginGroups() {
          return d(s);
        },
        requestEdit: f
      }), y(b, S);
    };
    j(I, (b) => {
      xr.isEditing ? b(R) : b(x, !1);
    });
  }
  y(t, w), pe();
}
Ue(["click"]);
function uf(t, e) {
  ge(e, !0);
  let n = C(e, "plugins", 19, () => []), r = C(e, "visited", 19, () => []), a = C(e, "currentId", 3, null), i = C(e, "pluginStatus", 19, () => ({})), l = /* @__PURE__ */ ie(() => n().reduce(
    (s, o) => {
      const c = i()[o.id];
      return s[o.id] = c ?? "", s;
    },
    {}
  ));
  const u = (s) => {
    const o = n().find((c) => c.id === s);
    o && e.onSelect(o);
  };
  {
    let s = /* @__PURE__ */ ie(() => n().map((o) => ({ id: o.id, label: o.name })));
    Nl(t, {
      get items() {
        return d(s);
      },
      get visited() {
        return r();
      },
      get currentId() {
        return a();
      },
      get status() {
        return i();
      },
      get tooltipMap() {
        return d(l);
      },
      onSelect: u
    });
  }
  pe();
}
var df = /* @__PURE__ */ Z("<div></div>");
function cf(t, e) {
  ge(e, !0);
  function n(u) {
    let s = 3735928559, o = 1103547991;
    for (let c = 0, f; c < u.length; c++)
      f = u.charCodeAt(c), s = Math.imul(s ^ f, 2654435761), o = Math.imul(o ^ f, 1597334677);
    return s = Math.imul(s ^ s >>> 16, 2246822507) ^ Math.imul(o ^ o >>> 13, 3266489909), o = Math.imul(o ^ o >>> 16, 2246822507) ^ Math.imul(s ^ s >>> 13, 3266489909), "oscd-plugin" + ((o >>> 0).toString(16).padStart(8, "0") + (s >>> 0).toString(16).padStart(8, "0"));
  }
  let r = C(e, "editCount", 19, () => -1), a = C(e, "plugins", 19, () => []), i = null;
  Ee(() => {
    if (!i || (i.innerHTML = "", !e.plugin || !e.plugin.src)) return;
    const u = n(e.plugin.src), s = document.createElement(u);
    s.doc = e.doc, s.editCount = r(), s.plugins = a(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi), i.appendChild(s);
  });
  var l = df();
  Ie(l, (u) => i = u, () => i), y(t, l), pe();
}
const ff = (t, e) => e(1), vf = (t, e) => e(-1);
var hf = /* @__PURE__ */ Z('<div class="plugin-container svelte-1xkxjkz"><!></div>'), gf = /* @__PURE__ */ Z('<div class="stepper svelte-1xkxjkz"><!> <!> <div class="stepper-navigation svelte-1xkxjkz"><button type="button" class="back-button svelte-1xkxjkz" aria-label="Previous plugin">Back</button> <button type="button" class="next-button svelte-1xkxjkz" aria-label="Next plugin">Next</button></div></div> <!>', 1);
function pf(t, e) {
  ge(e, !0);
  const n = ["check", "warning", "error"];
  let r = C(e, "editCount", 19, () => -1), a = C(e, "plugins", 19, () => []), i = /* @__PURE__ */ $(null), l = ce({ plugin: null }), u = /* @__PURE__ */ $(ce([])), s = /* @__PURE__ */ $(ce({})), o = /* @__PURE__ */ ie(() => a().length > 0), c = /* @__PURE__ */ ie(() => l.plugin && d(o) ? a().findIndex((_) => _.id === l.plugin.id) : -1);
  async function f(_) {
    if (!_) return;
    await wc(_);
    const { id: L } = _;
    if (D(i, L, !0), l.plugin = _, !d(u).includes(L)) {
      D(u, [...d(u), L], !0);
      const P = a().findIndex((F) => F.id === L);
      if (P !== -1) {
        const F = n[P % n.length];
        D(s, { ...d(s), [L]: F }, !0);
      }
    }
  }
  function h(_) {
    if (!d(o)) return;
    const P = ((d(c) < 0 ? 0 : d(c)) + _ + a().length) % a().length;
    f(a()[P]);
  }
  function g(_, L) {
    return Object.assign(_, L), {
      update(P) {
        Object.assign(_, P);
      }
    };
  }
  Ee(() => {
    if (!d(o)) {
      l.plugin = null, D(i, null), D(u, [], !0), D(s, {}, !0);
      return;
    }
    d(c) === -1 && f(a()[0]);
  }), ct(() => (a().length && xc(a()).catch(console.error), mn.set(!1), () => {
    mn.set(!0);
  }));
  function v() {
    mn.set(!0), e.onExit();
  }
  var p = gf(), w = U(p), I = T(w);
  Bl(I, { onBack: v });
  var R = B(I, 2);
  {
    let _ = /* @__PURE__ */ ie(() => {
      var L;
      return ((L = l == null ? void 0 : l.plugin) == null ? void 0 : L.id) ?? null;
    });
    uf(R, {
      get plugins() {
        return a();
      },
      get visited() {
        return d(u);
      },
      get currentId() {
        return d(_);
      },
      get pluginStatus() {
        return d(s);
      },
      onSelect: f
    });
  }
  var x = B(R, 2), b = T(x);
  b.__click = [vf, h];
  var S = B(b, 2);
  S.__click = [ff, h];
  var A = B(w, 2);
  {
    var m = (_) => {
      var L = hf(), P = T(L);
      {
        var F = (X) => {
          cf(X, {
            get plugin() {
              return l.plugin;
            },
            get doc() {
              return e.doc;
            },
            get editCount() {
              return r();
            },
            get plugins() {
              return a();
            },
            get nsdoc() {
              return e.nsdoc;
            },
            get docName() {
              return e.docName;
            },
            get docId() {
              return e.docId;
            },
            get docs() {
              return e.docs;
            },
            get locale() {
              return e.locale;
            },
            get oscdApi() {
              return e.oscdApi;
            }
          });
        }, z = (X) => {
          var fe = Q(), k = U(fe);
          Da(k, () => l.plugin.id, !1, (W, O) => {
            Te(W, (N, ee) => g == null ? void 0 : g(N, ee), () => ({ doc: e.doc, editCount: r() })), In(W, 0, "svelte-1xkxjkz");
          }), y(X, fe);
        };
        j(P, (X) => {
          l.plugin.type === "internal" ? X(F) : X(z, !1);
        });
      }
      y(_, L);
    };
    j(A, (_) => {
      l.plugin && _(m);
    });
  }
  ne(() => {
    b.disabled = !d(o), S.disabled = !d(o);
  }), y(t, p), pe();
}
Ue(["click"]);
var bf = (t, e) => {
  t.target === t.currentTarget && e("exit");
}, mf = /* @__PURE__ */ Z('<div class="ewf-dialog-backdrop svelte-12xjguj" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-12xjguj" role="document"><h2 id="ewf-title" class="sr-only svelte-12xjguj">Engineering Workflow</h2> <!></div></div>');
function _f(t, e) {
  ge(e, !0);
  let n = C(e, "editCount", 19, () => -1), r = C(e, "plugins", 19, () => []), a = /* @__PURE__ */ $(!1), i = /* @__PURE__ */ $(void 0), l = /* @__PURE__ */ $(null);
  const u = (f) => {
    d(a) || (D(a, !0), mn.set(!0), Ru(f));
  };
  Ee(() => {
    var f;
    e.open !== d(i) && (D(i, e.open, !0), e.open ? (D(a, !1), (f = d(l)) == null || f.focus()) : u("cancel"));
  });
  var s = Q(), o = U(s);
  {
    var c = (f) => {
      var h = mf();
      h.__click = [bf, u];
      var g = T(h), v = B(T(g), 2);
      pf(v, {
        get doc() {
          return e.doc;
        },
        get editCount() {
          return n();
        },
        get host() {
          return e.host;
        },
        get plugins() {
          return r();
        },
        get docName() {
          return e.docName;
        },
        get nsdoc() {
          return e.nsdoc;
        },
        get docs() {
          return e.docs;
        },
        get docId() {
          return e.docId;
        },
        get locale() {
          return e.locale;
        },
        get oscdApi() {
          return e.oscdApi;
        },
        onExit: () => u("exit")
      }), Ie(h, (p) => D(l, p), () => d(l)), y(f, h);
    };
    j(o, (f) => {
      e.open && f(c);
    });
  }
  y(t, s), pe();
}
Ue(["click"]);
var If = /* @__PURE__ */ Z("<!> <!>", 1);
function Cf(t, e) {
  ge(e, !0), e.plugins[1], ct(async () => {
    await Yd();
  });
  function n(c) {
    ze.process || (ze.process = c);
    const f = $d(ze.process);
    Su(_f, {
      doc: e.doc,
      editCount: e.editCount,
      host: e.host,
      plugins: f,
      nsdoc: e.nsdoc,
      docId: e.docId,
      docName: e.docName,
      docs: e.docs,
      locale: e.locale,
      oscdApi: e.oscdApi
    }), ze.process = null;
  }
  Ee(() => {
    Eu({ editCount: e.editCount, doc: e.doc });
  });
  function r(c) {
    ze.process = c;
  }
  function a() {
    ze.process = null;
  }
  var i = If(), l = U(i);
  xu(l, {});
  var u = B(l, 2);
  {
    var s = (c) => {
      of(c, { handleBack: a, handleStart: n });
    }, o = (c) => {
      ac(c, { handleView: r, handleStart: n });
    };
    j(u, (c) => {
      ze.process ? c(s) : c(o, !1);
    });
  }
  y(t, i), pe();
}
const Ul = "archive-explorer", Vl = "0.0.1";
var yf = /* @__PURE__ */ Z('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function Af(t, e) {
  ge(e, !0);
  let n = C(e, "dev", 3, !1), r = C(e, "editCount", 3, 0), a = C(e, "plugins", 19, () => []);
  var i = yf(), l = U(i);
  {
    var u = (c) => {
      Cf(c, {
        get doc() {
          return e.doc;
        },
        get editCount() {
          return r();
        },
        get plugins() {
          return a();
        },
        get docId() {
          return e.docId;
        },
        get pluginId() {
          return e.pluginId;
        },
        get docName() {
          return e.docName;
        },
        get nsdoc() {
          return e.nsdoc;
        },
        get docs() {
          return e.docs;
        },
        get locale() {
          return e.locale;
        },
        get oscdApi() {
          return e.oscdApi;
        },
        get host() {
          return e.host;
        }
      });
    };
    j(l, (c) => {
      (e.doc || n()) && c(u);
    });
  }
  var s = B(l, 2), o = B(s, 2);
  ne(() => {
    Ai(s, Ul), Ai(o, Vl);
  }), y(t, i), pe();
}
var sr;
class Ef extends HTMLElement {
  constructor() {
    super();
    ye(this, sr);
    le(this, sr, /* @__PURE__ */ $(ce({
      doc: this._doc,
      editCount: -1,
      host: this,
      plugins: [],
      docId: null,
      pluginId: null,
      docName: null,
      nsdoc: null,
      docs: {},
      locale: navigator.language ?? "en-US",
      oscdApi: null
    })));
  }
  get _props() {
    return d(H(this, sr));
  }
  set _props(n) {
    D(H(this, sr), n, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), vo(Af, { target: this.shadowRoot, props: this._props });
    const n = wf();
    this.shadowRoot.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this._props.doc = n;
  }
  get doc() {
    return this._doc;
  }
  set plugins(n) {
    this._props.plugins = n;
    const r = n.filter((a) => a.kind === "editor");
    Qd(r);
  }
  set editCount(n) {
    this._props.editCount = n;
  }
  set docId(n) {
    this._props.docId = n;
  }
  set pluginId(n) {
    this._props.pluginId = n;
  }
  set docName(n) {
    this._props.docName = n;
  }
  set nsdoc(n) {
    this._props.nsdoc = n;
  }
  set docs(n) {
    this._props.docs = n;
  }
  set locale(n) {
    this._props.locale = n;
  }
  set oscdApi(n) {
    this._props.oscdApi = n;
  }
}
sr = new WeakMap();
function wf() {
  const t = `${Ul}-v${Vl}-style`, e = xf(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function xf() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  Ef as default
};
