var ql = Object.defineProperty;
var oi = (t) => {
  throw TypeError(t);
};
var Jl = (t, e, n) => e in t ? ql(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var Kn = (t, e, n) => Jl(t, typeof e != "symbol" ? e + "" : e, n), ma = (t, e, n) => e.has(t) || oi("Cannot " + n);
var H = (t, e, n) => (ma(t, e, "read from private field"), n ? n.call(t) : e.get(t)), Ie = (t, e, n) => e.has(t) ? oi("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), le = (t, e, n, r) => (ma(t, e, "write to private field"), r ? r.call(t, n) : e.set(t, n), n), Ke = (t, e, n) => (ma(t, e, "access private method"), n);
const Fe = Symbol(), Kl = "http://www.w3.org/1999/xhtml", Ql = "http://www.w3.org/2000/svg", $l = "@attach", Oi = !1;
var Gr = Array.isArray, es = Array.prototype.indexOf, za = Array.from, ea = Object.defineProperty, gn = Object.getOwnPropertyDescriptor, Bi = Object.getOwnPropertyDescriptors, Ni = Object.prototype, ts = Array.prototype, la = Object.getPrototypeOf, ui = Object.isExtensible;
function yr(t) {
  return typeof t == "function";
}
const oe = () => {
};
function ns(t) {
  for (var e = 0; e < t.length; e++)
    t[e]();
}
function Ui() {
  var t, e, n = new Promise((r, a) => {
    t = r, e = a;
  });
  return { promise: n, resolve: t, reject: e };
}
const ct = 2, Xa = 4, Ya = 8, Un = 16, sn = 32, In = 64, qa = 128, kt = 256, ta = 512, $e = 1024, St = 2048, An = 4096, Wt = 8192, Vn = 16384, Ja = 32768, jn = 65536, di = 1 << 17, rs = 1 << 18, zn = 1 << 19, as = 1 << 20, xa = 1 << 21, sa = 1 << 22, Zn = 1 << 23, Yt = Symbol("$state"), Vi = Symbol("legacy props"), is = Symbol(""), er = new class extends Error {
  constructor() {
    super(...arguments);
    Kn(this, "name", "StaleReactionError");
    Kn(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ka(t) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function ls() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function ss(t) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function os() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function us(t) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function ds() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function cs(t) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function fs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function vs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function hs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function gs() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function ps() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function bs() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let ms = !1;
function ji(t) {
  return t === this.v;
}
function Qa(t, e) {
  return t != t ? e == e : t !== e || t !== null && typeof t == "object" || typeof t == "function";
}
function zi(t) {
  return !Qa(t, this.v);
}
let hr = !1, _s = !1;
function Cs() {
  hr = !0;
}
const ys = [];
function Is(t, e = !1, n = !1) {
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
      var d = (
        /** @type {Snapshot<any>} */
        Array(t.length)
      );
      e.set(t, d), a !== null && e.set(a, d);
      for (var s = 0; s < t.length; s += 1) {
        var o = t[s];
        s in t && (d[s] = qr(o, e, n, r, null, i));
      }
      return d;
    }
    if (la(t) === Ni) {
      d = {}, e.set(t, d), a !== null && e.set(a, d);
      for (var c in t)
        d[c] = qr(
          // @ts-expect-error
          t[c],
          e,
          n,
          r,
          null,
          i
        );
      return d;
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
function Tr() {
  return !hr || Se !== null && Se.l === null;
}
function Xi(t) {
  return Se === null && Ka(), Se.c ?? (Se.c = new Map(As(Se) || void 0));
}
function As(t) {
  let e = t.p;
  for (; e !== null; ) {
    const n = e.c;
    if (n !== null)
      return n;
    e = e.p;
  }
  return null;
}
let Dn = [];
function Yi() {
  var t = Dn;
  Dn = [], ns(t);
}
function _n(t) {
  if (Dn.length === 0 && !Sr) {
    var e = Dn;
    queueMicrotask(() => {
      e === Dn && Yi();
    });
  }
  Dn.push(t);
}
function ws() {
  for (; Dn.length > 0; )
    Yi();
}
const xs = /* @__PURE__ */ new WeakMap();
function qi(t) {
  var e = ve;
  if (e === null)
    return ce.f |= Zn, t;
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
  const e = xs.get(t);
  e && (ea(t, "message", {
    value: e.message
  }), ea(t, "stack", {
    value: e.stack
  }));
}
const Br = /* @__PURE__ */ new Set();
let Ae = null, Jr = null, Ve = null, Sa = /* @__PURE__ */ new Set(), zt = [], oa = null, Ra = !1, Sr = !1;
var nr, rr, Gn, Pr, ar, ir, Tn, lr, kr, Dr, Dt, Ea, Kr, La;
const ra = class ra {
  constructor() {
    Ie(this, Dt);
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
    Ie(this, nr, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Ie(this, rr, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Ie(this, Gn, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Ie(this, Pr, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Ie(this, ar, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Ie(this, ir, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Ie(this, Tn, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Ie(this, lr, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Ie(this, kr, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Ie(this, Dr, []);
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
      Ke(this, Dt, Ea).call(this, l);
    if (H(this, Gn) === 0) {
      var n = Ve;
      Ke(this, Dt, La).call(this);
      var r = H(this, ir), a = H(this, Tn);
      le(this, ir, []), le(this, Tn, []), le(this, lr, []), Jr = this, Ae = null, Ve = n, ci(r), ci(a), Jr = null, (i = H(this, Pr)) == null || i.resolve();
    } else
      Ke(this, Dt, Kr).call(this, H(this, ir)), Ke(this, Dt, Kr).call(this, H(this, Tn)), Ke(this, Dt, Kr).call(this, H(this, lr));
    Ve = null;
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
    H(this, nr).has(e) || H(this, nr).set(e, n), this.current.set(e, e.v), Ve == null || Ve.set(e, e.v);
  }
  activate() {
    Ae = this;
  }
  deactivate() {
    Ae = null, Ve = null;
  }
  flush() {
    if (zt.length > 0) {
      if (this.activate(), Ki(), Ae !== null && Ae !== this)
        return;
    } else H(this, Gn) === 0 && Ke(this, Dt, La).call(this);
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
      ot(e, St), Bn(e);
    for (const e of H(this, Dr))
      ot(e, An), Bn(e);
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
nr = new WeakMap(), rr = new WeakMap(), Gn = new WeakMap(), Pr = new WeakMap(), ar = new WeakMap(), ir = new WeakMap(), Tn = new WeakMap(), lr = new WeakMap(), kr = new WeakMap(), Dr = new WeakMap(), Dt = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Ea = function(e) {
  var o;
  e.f ^= $e;
  for (var n = e.first; n !== null; ) {
    var r = n.f, a = (r & (sn | In)) !== 0, i = a && (r & $e) !== 0, l = i || (r & Wt) !== 0 || this.skipped_effects.has(n);
    if (!l && n.fn !== null) {
      a ? n.f ^= $e : r & Xa ? H(this, Tn).push(n) : r & $e || (r & sa && ((o = n.b) != null && o.is_pending()) ? H(this, ar).push(n) : ha(n) && (n.f & Un && H(this, lr).push(n), Lr(n)));
      var d = n.first;
      if (d !== null) {
        n = d;
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
    (n.f & St ? H(this, kr) : H(this, Dr)).push(n), ot(n, $e);
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
      for (const [l, d] of this.current) {
        if (r.current.has(l))
          if (n && d !== r.current.get(l))
            r.current.set(l, d);
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
            Ke(e = r, Dt, Ea).call(e, l);
          zt = [], r.deactivate();
        }
      }
    }
    Ae = null;
  }
  Br.delete(this);
};
let Xt = ra;
function Ss(t) {
  var e = Sr;
  Sr = !0;
  try {
    for (var n; ; ) {
      if (ws(), zt.length === 0 && (Ae == null || Ae.flush(), zt.length === 0))
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
        Rs();
      }
      n.process(zt), pn.clear();
    }
  } finally {
    Ra = !1, gi(t), oa = null;
  }
}
function Rs() {
  try {
    ds();
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
      if (!(r.f & (Vn | Wt)) && ha(r) && (rn = [], Lr(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? cl(r) : r.fn = null), (rn == null ? void 0 : rn.length) > 0)) {
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
      r & ct ? Qi(
        /** @type {Derived} */
        n,
        e
      ) : r & (sa | Un) && $i(n, e) && (ot(n, St), Bn(
        /** @type {Effect} */
        n
      ));
    }
}
function $i(t, e) {
  if (t.deps !== null) {
    for (const n of t.deps)
      if (e.includes(n) || n.f & ct && $i(
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
    if (Ra && e === ve && n & Un)
      return;
    if (n & (In | sn)) {
      if (!(n & $e)) return;
      e.f ^= $e;
    }
  }
  zt.push(e);
}
function Es(t) {
  let e = 0, n = Nn(0), r;
  return () => {
    zs() && (u(n), fa(() => (e === 0 && (r = Sn(() => t(() => Rr(n)))), e += 1, () => {
      _n(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Rr(n));
      });
    })));
  };
}
var Ls = jn | zn | qa;
function Ps(t, e, n) {
  new ks(t, e, n);
}
var Mt, Lt, ja, Ut, Mn, Vt, Pt, pt, jt, dn, Hn, cn, Wn, fn, aa, ia, dt, Ds, Gs, Qr, $r, Pa;
class ks {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, n, r) {
    Ie(this, dt);
    /** @type {Boundary | null} */
    Kn(this, "parent");
    Ie(this, Mt, !1);
    /** @type {TemplateNode} */
    Ie(this, Lt);
    /** @type {TemplateNode | null} */
    Ie(this, ja, null);
    /** @type {BoundaryProps} */
    Ie(this, Ut);
    /** @type {((anchor: Node) => void)} */
    Ie(this, Mn);
    /** @type {Effect} */
    Ie(this, Vt);
    /** @type {Effect | null} */
    Ie(this, Pt, null);
    /** @type {Effect | null} */
    Ie(this, pt, null);
    /** @type {Effect | null} */
    Ie(this, jt, null);
    /** @type {DocumentFragment | null} */
    Ie(this, dn, null);
    Ie(this, Hn, 0);
    Ie(this, cn, 0);
    Ie(this, Wn, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Ie(this, fn, null);
    Ie(this, aa, () => {
      H(this, fn) && dr(H(this, fn), H(this, Hn));
    });
    Ie(this, ia, Es(() => (le(this, fn, Nn(H(this, Hn))), () => {
      le(this, fn, null);
    })));
    le(this, Lt, e), le(this, Ut, n), le(this, Mn, r), this.parent = /** @type {Effect} */
    ve.b, le(this, Mt, !!H(this, Ut).pending), le(this, Vt, xn(() => {
      ve.b = this;
      {
        try {
          le(this, Pt, Qe(() => r(H(this, Lt))));
        } catch (a) {
          this.error(a);
        }
        H(this, cn) > 0 ? Ke(this, dt, $r).call(this) : le(this, Mt, !1);
      }
    }, Ls));
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
    Ke(this, dt, Pa).call(this, e), le(this, Hn, H(this, Hn) + e), Sa.add(H(this, aa));
  }
  get_effect_pending() {
    return H(this, ia).call(this), u(
      /** @type {Source<number>} */
      H(this, fn)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var n = H(this, Ut).onerror;
    let r = H(this, Ut).failed;
    if (H(this, Wn) || !n && !r)
      throw e;
    H(this, Pt) && (Oe(H(this, Pt)), le(this, Pt, null)), H(this, pt) && (Oe(H(this, pt)), le(this, pt, null)), H(this, jt) && (Oe(H(this, jt)), le(this, jt, null));
    var a = !1, i = !1;
    const l = () => {
      if (a) {
        bs();
        return;
      }
      a = !0, i && gs(), Xt.ensure(), le(this, Hn, 0), H(this, jt) !== null && bn(H(this, jt), () => {
        le(this, jt, null);
      }), le(this, Mt, this.has_pending_snippet()), le(this, Pt, Ke(this, dt, Qr).call(this, () => (le(this, Wn, !1), Qe(() => H(this, Mn).call(this, H(this, Lt)))))), H(this, cn) > 0 ? Ke(this, dt, $r).call(this) : le(this, Mt, !1);
    };
    var d = ce;
    try {
      mt(null), i = !0, n == null || n(e, l), i = !1;
    } catch (s) {
      ur(s, H(this, Vt) && H(this, Vt).parent);
    } finally {
      mt(d);
    }
    r && _n(() => {
      le(this, jt, Ke(this, dt, Qr).call(this, () => {
        le(this, Wn, !0);
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
          le(this, Wn, !1);
        }
      }));
    });
  }
}
Mt = new WeakMap(), Lt = new WeakMap(), ja = new WeakMap(), Ut = new WeakMap(), Mn = new WeakMap(), Vt = new WeakMap(), Pt = new WeakMap(), pt = new WeakMap(), jt = new WeakMap(), dn = new WeakMap(), Hn = new WeakMap(), cn = new WeakMap(), Wn = new WeakMap(), fn = new WeakMap(), aa = new WeakMap(), ia = new WeakMap(), dt = new WeakSet(), Ds = function() {
  try {
    le(this, Pt, Qe(() => H(this, Mn).call(this, H(this, Lt))));
  } catch (e) {
    this.error(e);
  }
  le(this, Mt, !1);
}, Gs = function() {
  const e = H(this, Ut).pending;
  e && (le(this, pt, Qe(() => e(H(this, Lt)))), Xt.enqueue(() => {
    le(this, Pt, Ke(this, dt, Qr).call(this, () => (Xt.ensure(), Qe(() => H(this, Mn).call(this, H(this, Lt)))))), H(this, cn) > 0 ? Ke(this, dt, $r).call(this) : (bn(
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
  var n = ve, r = ce, a = Se;
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
  H(this, Pt) !== null && (le(this, dn, document.createDocumentFragment()), Ts(H(this, Pt), H(this, dn))), H(this, pt) === null && le(this, pt, Qe(() => e(H(this, Lt))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
Pa = function(e) {
  var n;
  if (!this.has_pending_snippet()) {
    this.parent && Ke(n = this.parent, dt, Pa).call(n, e);
    return;
  }
  le(this, cn, H(this, cn) + e), H(this, cn) === 0 && (le(this, Mt, !1), H(this, pt) && bn(H(this, pt), () => {
    le(this, pt, null);
  }), H(this, dn) && (H(this, Lt).before(H(this, dn)), le(this, dn, null)), _n(() => {
    Xt.ensure().flush();
  }));
};
function Ts(t, e) {
  for (var n = t.nodes_start, r = t.nodes_end; n !== null; ) {
    var a = n === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Mr(n)
    );
    e.append(n), n = a;
  }
}
function el(t, e, n) {
  const r = Tr() ? ua : $a;
  if (e.length === 0) {
    n(t.map(r));
    return;
  }
  var a = Ae, i = (
    /** @type {Effect} */
    ve
  ), l = Ms();
  Promise.all(e.map((d) => /* @__PURE__ */ Hs(d))).then((d) => {
    l();
    try {
      n([...t.map(r), ...d]);
    } catch (s) {
      i.f & Vn || ur(s, i);
    }
    a == null || a.deactivate(), ka();
  }).catch((d) => {
    ur(d, i);
  });
}
function Ms() {
  var t = ve, e = ce, n = Se, r = Ae;
  return function() {
    Jt(t), mt(e), or(n), r == null || r.activate();
  };
}
function ka() {
  Jt(null), mt(null), or(null);
}
// @__NO_SIDE_EFFECTS__
function ua(t) {
  var e = ct | St, n = ce !== null && ce.f & ct ? (
    /** @type {Derived} */
    ce
  ) : null;
  return ve === null || n !== null && n.f & kt ? e |= kt : ve.f |= zn, {
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
    parent: n ?? ve,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function Hs(t, e) {
  let n = (
    /** @type {Effect | null} */
    ve
  );
  n === null && ls();
  var r = (
    /** @type {Boundary} */
    n.b
  ), a = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), i = Nn(
    /** @type {V} */
    Fe
  ), l = !ce, d = /* @__PURE__ */ new Map();
  return qs(() => {
    var h;
    var s = Ui();
    a = s.promise;
    try {
      Promise.resolve(t()).then(s.resolve, s.reject).then(ka);
    } catch (b) {
      s.reject(b), ka();
    }
    var o = (
      /** @type {Batch} */
      Ae
    ), c = r.is_pending();
    l && (r.update_pending_count(1), c || (o.increment(), (h = d.get(o)) == null || h.reject(er), d.delete(o), d.set(o, s)));
    const f = (b, v = void 0) => {
      if (c || o.activate(), v)
        v !== er && (i.f |= Zn, dr(i, v));
      else {
        i.f & Zn && (i.f ^= Zn), dr(i, b);
        for (const [p, w] of d) {
          if (d.delete(p), p === o) break;
          w.reject(er);
        }
      }
      l && (r.update_pending_count(-1), c || o.decrement());
    };
    s.promise.then(f, (b) => f(null, b || "unknown"));
  }), ca(() => {
    for (const s of d.values())
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
      Oe(
        /** @type {Effect} */
        e[n]
      );
  }
}
function Ws(t) {
  for (var e = t.parent; e !== null; ) {
    if (!(e.f & ct))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function ei(t) {
  var e, n = ve;
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
    if (Ve !== null)
      Ve.set(t, t.v);
    else {
      var n = (vn || t.f & kt) && t.deps !== null ? An : $e;
      ot(t, n);
    }
}
const pn = /* @__PURE__ */ new Map();
function Nn(t, e) {
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
function Q(t, e) {
  const n = Nn(t);
  return hl(n), n;
}
// @__NO_SIDE_EFFECTS__
function rl(t, e = !1, n = !0) {
  var a;
  const r = Nn(t);
  return e || (r.equals = zi), hr && n && Se !== null && Se.l !== null && ((a = Se.l).s ?? (a.s = [])).push(r), r;
}
function T(t, e, n = !1) {
  ce !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Ht || ce.f & di) && Tr() && ce.f & (ct | Un | sa | di) && !(st != null && st.includes(t)) && hs();
  let r = n ? fe(e) : e;
  return dr(t, r);
}
function dr(t, e) {
  if (!t.equals(e)) {
    var n = t.v;
    Xn ? pn.set(t, e) : pn.set(t, n), t.v = e;
    var r = Xt.ensure();
    r.capture(t, n), t.f & ct && (t.f & St && ei(
      /** @type {Derived} */
      t
    ), ot(t, t.f & kt ? An : $e)), t.wv = pl(), al(t, St), Tr() && ve !== null && ve.f & $e && !(ve.f & (sn | In)) && (Et === null ? Qs([t]) : Et.push(t));
  }
  return e;
}
function Rr(t) {
  T(t, t.v + 1);
}
function al(t, e) {
  var n = t.reactions;
  if (n !== null)
    for (var r = Tr(), a = n.length, i = 0; i < a; i++) {
      var l = n[i], d = l.f;
      if (!(!r && l === ve)) {
        var s = (d & St) === 0;
        s && ot(l, e), d & ct ? al(
          /** @type {Derived} */
          l,
          An
        ) : s && (d & Un && rn !== null && rn.push(
          /** @type {Effect} */
          l
        ), Bn(
          /** @type {Effect} */
          l
        ));
      }
    }
}
function fe(t) {
  if (typeof t != "object" || t === null || Yt in t)
    return t;
  const e = la(t);
  if (e !== Ni && e !== ts)
    return t;
  var n = /* @__PURE__ */ new Map(), r = Gr(t), a = /* @__PURE__ */ Q(0), i = Fn, l = (d) => {
    if (Fn === i)
      return d();
    var s = ce, o = Fn;
    mt(null), bi(i);
    var c = d();
    return mt(s), bi(o), c;
  };
  return r && n.set("length", /* @__PURE__ */ Q(
    /** @type {any[]} */
    t.length
  )), new Proxy(
    /** @type {any} */
    t,
    {
      defineProperty(d, s, o) {
        (!("value" in o) || o.configurable === !1 || o.enumerable === !1 || o.writable === !1) && fs();
        var c = n.get(s);
        return c === void 0 ? c = l(() => {
          var f = /* @__PURE__ */ Q(o.value);
          return n.set(s, f), f;
        }) : T(c, o.value, !0), !0;
      },
      deleteProperty(d, s) {
        var o = n.get(s);
        if (o === void 0) {
          if (s in d) {
            const c = l(() => /* @__PURE__ */ Q(Fe));
            n.set(s, c), Rr(a);
          }
        } else
          T(o, Fe), Rr(a);
        return !0;
      },
      get(d, s, o) {
        var b;
        if (s === Yt)
          return t;
        var c = n.get(s), f = s in d;
        if (c === void 0 && (!f || (b = gn(d, s)) != null && b.writable) && (c = l(() => {
          var v = fe(f ? d[s] : Fe), p = /* @__PURE__ */ Q(v);
          return p;
        }), n.set(s, c)), c !== void 0) {
          var h = u(c);
          return h === Fe ? void 0 : h;
        }
        return Reflect.get(d, s, o);
      },
      getOwnPropertyDescriptor(d, s) {
        var o = Reflect.getOwnPropertyDescriptor(d, s);
        if (o && "value" in o) {
          var c = n.get(s);
          c && (o.value = u(c));
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
      has(d, s) {
        var h;
        if (s === Yt)
          return !0;
        var o = n.get(s), c = o !== void 0 && o.v !== Fe || Reflect.has(d, s);
        if (o !== void 0 || ve !== null && (!c || (h = gn(d, s)) != null && h.writable)) {
          o === void 0 && (o = l(() => {
            var b = c ? fe(d[s]) : Fe, v = /* @__PURE__ */ Q(b);
            return v;
          }), n.set(s, o));
          var f = u(o);
          if (f === Fe)
            return !1;
        }
        return c;
      },
      set(d, s, o, c) {
        var x;
        var f = n.get(s), h = s in d;
        if (r && s === "length")
          for (var b = o; b < /** @type {Source<number>} */
          f.v; b += 1) {
            var v = n.get(b + "");
            v !== void 0 ? T(v, Fe) : b in d && (v = l(() => /* @__PURE__ */ Q(Fe)), n.set(b + "", v));
          }
        if (f === void 0)
          (!h || (x = gn(d, s)) != null && x.writable) && (f = l(() => /* @__PURE__ */ Q(void 0)), T(f, fe(o)), n.set(s, f));
        else {
          h = f.v !== Fe;
          var p = l(() => fe(o));
          T(f, p);
        }
        var w = Reflect.getOwnPropertyDescriptor(d, s);
        if (w != null && w.set && w.set.call(c, o), !h) {
          if (r && typeof s == "string") {
            var _ = (
              /** @type {Source<number>} */
              n.get("length")
            ), R = Number(s);
            Number.isInteger(R) && R >= _.v && T(_, R + 1);
          }
          Rr(a);
        }
        return !0;
      },
      ownKeys(d) {
        u(a);
        var s = Reflect.ownKeys(d).filter((f) => {
          var h = n.get(f);
          return h === void 0 || h.v !== Fe;
        });
        for (var [o, c] of n)
          c.v !== Fe && !(o in d) && s.push(o);
        return s;
      },
      setPrototypeOf() {
        vs();
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
function Zs(t, e) {
  return Object.is(fi(t), fi(e));
}
var vi, il, ll, sl;
function Fs() {
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
function D(t, e) {
  return /* @__PURE__ */ cr(t);
}
function N(t, e = !1) {
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
function O(t, e = 1, n = !1) {
  let r = t;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Mr(r);
  return r;
}
function Os(t) {
  t.textContent = "";
}
function ti() {
  return !1;
}
function Bs(t, e) {
  if (e) {
    const n = document.body;
    t.autofocus = !0, _n(() => {
      document.activeElement === n && t.focus();
    });
  }
}
let hi = !1;
function Ns() {
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
  var e = ce, n = ve;
  mt(null), Jt(null);
  try {
    return t();
  } finally {
    mt(e), Jt(n);
  }
}
function Us(t, e, n, r = n) {
  t.addEventListener(e, () => da(n));
  const a = t.__on_r;
  a ? t.__on_r = () => {
    a(), r(!0);
  } : t.__on_r = () => r(!0), Ns();
}
function Vs(t) {
  ve === null && ce === null && us(), ce !== null && ce.f & kt && ve === null && os(), Xn && ss();
}
function js(t, e) {
  var n = e.last;
  n === null ? e.last = e.first = t : (n.next = t, t.prev = n, e.last = t);
}
function Kt(t, e, n, r = !0) {
  var a = ve;
  a !== null && a.f & Wt && (t |= Wt);
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
      throw Oe(i), s;
    }
  else e !== null && Bn(i);
  if (r) {
    var l = i;
    if (n && l.deps === null && l.teardown === null && l.nodes_start === null && l.first === l.last && // either `null`, or a singular child
    !(l.f & zn) && (l = l.first), l !== null && (l.parent = a, a !== null && js(l, a), ce !== null && ce.f & ct && !(t & In))) {
      var d = (
        /** @type {Derived} */
        ce
      );
      (d.effects ?? (d.effects = [])).push(l);
    }
  }
  return i;
}
function zs() {
  return ce !== null && !Ht;
}
function ca(t) {
  const e = Kt(Ya, null, !1);
  return ot(e, $e), e.teardown = t, e;
}
function Pe(t) {
  Vs();
  var e = (
    /** @type {Effect} */
    ve.f
  ), n = !ce && (e & sn) !== 0 && (e & Ja) === 0;
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
  return Kt(Xa | as, t, !1);
}
function Xs(t) {
  Xt.ensure();
  const e = Kt(In | zn, t, !0);
  return () => {
    Oe(e);
  };
}
function Ys(t) {
  Xt.ensure();
  const e = Kt(In | zn, t, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? bn(e, () => {
      Oe(e), r(void 0);
    }) : (Oe(e), r(void 0));
  });
}
function Hr(t) {
  return Kt(Xa, t, !1);
}
function qs(t) {
  return Kt(sa | zn, t, !0);
}
function fa(t, e = 0) {
  return Kt(Ya | e, t, !0);
}
function te(t, e = [], n = []) {
  el(e, n, (r) => {
    Kt(Ya, () => t(...r.map(u)), !0);
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
    const n = Xn, r = ce;
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
    n.f & In ? n.parent = null : Oe(n, e), n = r;
  }
}
function Js(t) {
  for (var e = t.first; e !== null; ) {
    var n = e.next;
    e.f & sn || Oe(e), e = n;
  }
}
function Oe(t, e = !0) {
  var n = !1;
  (e || t.f & rs) && t.nodes_start !== null && t.nodes_end !== null && (Ks(
    t.nodes_start,
    /** @type {TemplateNode} */
    t.nodes_end
  ), n = !0), dl(t, e && !n), na(t, 0), ot(t, Vn);
  var r = t.transitions;
  if (r !== null)
    for (const i of r)
      i.stop();
  ul(t);
  var a = t.parent;
  a !== null && a.first !== null && cl(t), t.next = t.prev = t.teardown = t.ctx = t.deps = t.fn = t.nodes_start = t.nodes_end = t.ac = null;
}
function Ks(t, e) {
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
    Oe(t), e && e();
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
  if (!(t.f & Wt)) {
    if (t.f ^= Wt, t.transitions !== null)
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
  if (t.f & Wt) {
    t.f ^= Wt, t.f & $e || (ot(t, St), Bn(t));
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
let ce = null, Ht = !1;
function mt(t) {
  ce = t;
}
let ve = null;
function Jt(t) {
  ve = t;
}
let st = null;
function hl(t) {
  ce !== null && (st === null ? st = [t] : st.push(t));
}
let lt = null, At = 0, Et = null;
function Qs(t) {
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
      var a, i, l = (e & ta) !== 0, d = r && ve !== null && !vn, s = n.length;
      if ((l || d) && (ve === null || !(ve.f & Vn))) {
        var o = (
          /** @type {Derived} */
          t
        ), c = o.parent;
        for (a = 0; a < s; a++)
          i = n[a], (l || !((f = i == null ? void 0 : i.reactions) != null && f.includes(o))) && (i.reactions ?? (i.reactions = [])).push(o);
        l && (o.f ^= ta), d && c !== null && !(c.f & kt) && (o.f ^= kt);
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
    (!r || ve !== null && !vn) && ot(t, $e);
  }
  return !1;
}
function bl(t, e, n = !0) {
  var r = t.reactions;
  if (r !== null && !(st != null && st.includes(t)))
    for (var a = 0; a < r.length; a++) {
      var i = r[a];
      i.f & ct ? bl(
        /** @type {Derived} */
        i,
        e,
        !1
      ) : e === i && (n ? ot(i, St) : i.f & $e && ot(i, An), Bn(
        /** @type {Effect} */
        i
      ));
    }
}
function ml(t) {
  var p;
  var e = lt, n = At, r = Et, a = ce, i = vn, l = st, d = Se, s = Ht, o = Fn, c = t.f;
  lt = /** @type {null | Value[]} */
  null, At = 0, Et = null, vn = (c & kt) !== 0 && (Ht || !tr || ce === null), ce = c & (sn | In) ? null : t, st = null, or(t.ctx), Ht = !1, Fn = ++Er, t.ac !== null && (da(() => {
    t.ac.abort(er);
  }), t.ac = null);
  try {
    t.f |= xa;
    var f = (
      /** @type {Function} */
      t.fn
    ), h = f(), b = t.deps;
    if (lt !== null) {
      var v;
      if (na(t, At), b !== null && At > 0)
        for (b.length = At + lt.length, v = 0; v < lt.length; v++)
          b[At + v] = lt[v];
      else
        t.deps = b = lt;
      if (!vn || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & ct && /** @type {import('#client').Derived} */
      t.reactions !== null)
        for (v = At; v < b.length; v++)
          ((p = b[v]).reactions ?? (p.reactions = [])).push(t);
    } else b !== null && At < b.length && (na(t, At), b.length = At);
    if (Tr() && Et !== null && !Ht && b !== null && !(t.f & (ct | An | St)))
      for (v = 0; v < /** @type {Source[]} */
      Et.length; v++)
        bl(
          Et[v],
          /** @type {Effect} */
          t
        );
    return a !== null && a !== t && (Er++, Et !== null && (r === null ? r = Et : r.push(.../** @type {Source[]} */
    Et))), t.f & Zn && (t.f ^= Zn), h;
  } catch (w) {
    return qi(w);
  } finally {
    t.f ^= xa, lt = e, At = n, Et = r, ce = a, vn = i, st = l, or(d), Ht = s, Fn = o;
  }
}
function $s(t, e) {
  let n = e.reactions;
  if (n !== null) {
    var r = es.call(n, t);
    if (r !== -1) {
      var a = n.length - 1;
      a === 0 ? n = e.reactions = null : (n[r] = n[a], n.pop());
    }
  }
  n === null && e.f & ct && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (lt === null || !lt.includes(e)) && (ot(e, An), e.f & (kt | ta) || (e.f ^= ta), tl(
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
      $s(t, n[r]);
}
function Lr(t) {
  var e = t.f;
  if (!(e & Vn)) {
    ot(t, $e);
    var n = ve, r = tr;
    ve = t, tr = !0;
    try {
      e & Un ? Js(t) : dl(t), ul(t);
      var a = ml(t);
      t.teardown = typeof a == "function" ? a : null, t.wv = gl;
      var i;
      Oi && _s && t.f & St && t.deps;
    } finally {
      tr = r, ve = n;
    }
  }
}
async function _l() {
  await Promise.resolve(), Ss();
}
function u(t) {
  var e = t.f, n = (e & ct) !== 0;
  if (ce !== null && !Ht) {
    var r = ve !== null && (ve.f & Vn) !== 0;
    if (!r && !(st != null && st.includes(t))) {
      var a = ce.deps;
      if (ce.f & xa)
        t.rv < Er && (t.rv = Er, lt === null && a !== null && a[At] === t ? At++ : lt === null ? lt = [t] : (!vn || !lt.includes(t)) && lt.push(t));
      else {
        (ce.deps ?? (ce.deps = [])).push(t);
        var i = t.reactions;
        i === null ? t.reactions = [ce] : i.includes(ce) || i.push(ce);
      }
    }
  } else if (n && /** @type {Derived} */
  t.deps === null && /** @type {Derived} */
  t.effects === null) {
    var l = (
      /** @type {Derived} */
      t
    ), d = l.parent;
    d !== null && !(d.f & kt) && (l.f ^= kt);
  }
  if (Xn) {
    if (pn.has(t))
      return pn.get(t);
    if (n) {
      l = /** @type {Derived} */
      t;
      var s = l.v;
      return (!(l.f & $e) && l.reactions !== null || Cl(l)) && (s = ei(l)), pn.set(l, s), s;
    }
  } else if (n) {
    if (l = /** @type {Derived} */
    t, Ve != null && Ve.has(l))
      return Ve.get(l);
    ha(l) && nl(l);
  }
  if (Ve != null && Ve.has(t))
    return Ve.get(t);
  if (t.f & Zn)
    throw t.v;
  return t.v;
}
function Cl(t) {
  if (t.v === Fe) return !0;
  if (t.deps === null) return !1;
  for (const e of t.deps)
    if (pn.has(e) || e.f & ct && Cl(
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
const eo = -7169;
function ot(t, e) {
  t.f = t.f & eo | e;
}
function to(t) {
  if (!(typeof t != "object" || !t || t instanceof EventTarget)) {
    if (Yt in t)
      Da(t);
    else if (!Array.isArray(t))
      for (let e in t) {
        const n = t[e];
        typeof n == "object" && n && Yt in n && Da(n);
      }
  }
}
function Da(t, e = /* @__PURE__ */ new Set()) {
  if (typeof t == "object" && t !== null && // We don't want to traverse DOM elements
  !(t instanceof EventTarget) && !e.has(t)) {
    e.add(t), t instanceof Date && t.getTime();
    for (let r in t)
      try {
        Da(t[r], e);
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
const yl = /* @__PURE__ */ new Set(), Ga = /* @__PURE__ */ new Set();
function ri(t, e, n, r = {}) {
  function a(i) {
    if (r.capture || wr.call(e, i), !i.cancelBubble)
      return da(() => n == null ? void 0 : n.call(this, i));
  }
  return t.startsWith("pointer") || t.startsWith("touch") || t === "wheel" ? _n(() => {
    e.addEventListener(t, a, r);
  }) : e.addEventListener(t, a, r), a;
}
function no(t, e, n, r = {}) {
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
function ze(t) {
  for (var e = 0; e < t.length; e++)
    yl.add(t[e]);
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
  var l = 0, d = _i === t && t.__root;
  if (d) {
    var s = a.indexOf(d);
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
    var c = ce, f = ve;
    mt(null), Jt(null);
    try {
      for (var h, b = []; i !== null; ) {
        var v = i.assignedSlot || i.parentNode || /** @type {any} */
        i.host || null;
        try {
          var p = i["__" + r];
          if (p != null && (!/** @type {any} */
          i.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          t.target === i))
            if (Gr(p)) {
              var [w, ..._] = p;
              w.apply(i, [t, ..._]);
            } else
              p.call(i, t);
        } catch (x) {
          h ? b.push(x) : h = x;
        }
        if (t.cancelBubble || v === e || v === null)
          break;
        i = v;
      }
      if (h) {
        for (let x of b)
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
function Il(t) {
  var e = document.createElement("template");
  return e.innerHTML = t.replaceAll("<!>", "<!---->"), e.content;
}
function fr(t, e) {
  var n = (
    /** @type {Effect} */
    ve
  );
  n.nodes_start === null && (n.nodes_start = t, n.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function W(t, e) {
  var n = (e & 1) !== 0, r = (e & 2) !== 0, a, i = !t.startsWith("<!>");
  return () => {
    a === void 0 && (a = Il(i ? t : "<!>" + t), n || (a = /** @type {Node} */
    /* @__PURE__ */ cr(a)));
    var l = (
      /** @type {TemplateNode} */
      r || il ? document.importNode(a, !0) : a.cloneNode(!0)
    );
    if (n) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ cr(l)
      ), s = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      fr(d, s);
    } else
      fr(l, l);
    return l;
  };
}
// @__NO_SIDE_EFFECTS__
function ro(t, e, n = "svg") {
  var r = !t.startsWith("<!>"), a = `<${n}>${r ? t : "<!>" + t}</${n}>`, i;
  return () => {
    if (!i) {
      var l = (
        /** @type {DocumentFragment} */
        Il(a)
      ), d = (
        /** @type {Element} */
        /* @__PURE__ */ cr(l)
      );
      i = /** @type {Element} */
      /* @__PURE__ */ cr(d);
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
  return /* @__PURE__ */ ro(t, e, "svg");
}
function _t(t = "") {
  {
    var e = wn(t + "");
    return fr(e, e), e;
  }
}
function ee() {
  var t = document.createDocumentFragment(), e = document.createComment(""), n = wn();
  return t.append(e, n), fr(e, n), t;
}
function y(t, e) {
  t !== null && t.before(
    /** @type {Node} */
    e
  );
}
function ao(t) {
  return t.endsWith("capture") && t !== "gotpointercapture" && t !== "lostpointercapture";
}
const io = [
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
function lo(t) {
  return io.includes(t);
}
const so = {
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
function oo(t) {
  return t = t.toLowerCase(), so[t] ?? t;
}
const uo = ["touchstart", "touchmove"];
function co(t) {
  return uo.includes(t);
}
function Re(t, e) {
  var n = e == null ? "" : typeof e == "object" ? e + "" : e;
  n !== (t.__t ?? (t.__t = t.nodeValue)) && (t.__t = n, t.nodeValue = n + "");
}
function fo(t, e) {
  return vo(t, e);
}
const Qn = /* @__PURE__ */ new Map();
function vo(t, { target: e, anchor: n, props: r = {}, events: a, context: i, intro: l = !0 }) {
  Fs();
  var d = /* @__PURE__ */ new Set(), s = (f) => {
    for (var h = 0; h < f.length; h++) {
      var b = f[h];
      if (!d.has(b)) {
        d.add(b);
        var v = co(b);
        e.addEventListener(b, wr, { passive: v });
        var p = Qn.get(b);
        p === void 0 ? (document.addEventListener(b, wr, { passive: v }), Qn.set(b, 1)) : Qn.set(b, p + 1);
      }
    }
  };
  s(za(yl)), Ga.add(s);
  var o = void 0, c = Ys(() => {
    var f = n ?? e.appendChild(wn());
    return Ps(
      /** @type {TemplateNode} */
      f,
      {
        pending: () => {
        }
      },
      (h) => {
        if (i) {
          ge({});
          var b = (
            /** @type {ComponentContext} */
            Se
          );
          b.c = i;
        }
        a && (r.$$events = a), o = t(h, r) || {}, i && pe();
      }
    ), () => {
      var v;
      for (var h of d) {
        e.removeEventListener(h, wr);
        var b = (
          /** @type {number} */
          Qn.get(h)
        );
        --b === 0 ? (document.removeEventListener(h, wr), Qn.delete(h)) : Qn.set(h, b);
      }
      Ga.delete(s), f !== n && ((v = f.parentNode) == null || v.removeChild(f));
    };
  });
  return ho.set(o, c), o;
}
let ho = /* @__PURE__ */ new WeakMap();
function se(t, e, ...n) {
  var r = t, a = oe, i;
  xn(() => {
    a !== (a = e()) && (i && (Oe(i), i = null), i = Qe(() => (
      /** @type {SnippetFn} */
      a(r, ...n)
    )));
  }, jn);
}
function tt(t) {
  Se === null && Ka(), hr && Se.l !== null ? go(Se).m.push(t) : Pe(() => {
    const e = Sn(t);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Wr(t) {
  Se === null && Ka(), tt(() => () => Sn(t));
}
function go(t) {
  var e = (
    /** @type {ComponentContextLegacy} */
    t.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function j(t, e, n = !1) {
  var r = t, a = null, i = null, l = Fe, d = n ? jn : 0, s = !1;
  const o = (b, v = !0) => {
    s = !0, h(v, b);
  };
  var c = null;
  function f() {
    c !== null && (c.lastChild.remove(), r.before(c), c = null);
    var b = l ? a : i, v = l ? i : a;
    b && va(b), v && bn(v, () => {
      l ? i = null : a = null;
    });
  }
  const h = (b, v) => {
    if (l !== (l = b)) {
      var p = ti(), w = r;
      if (p && (c = document.createDocumentFragment(), c.append(w = wn())), l ? a ?? (a = v && Qe(() => v(w))) : i ?? (i = v && Qe(() => v(w))), p) {
        var _ = (
          /** @type {Batch} */
          Ae
        ), R = l ? a : i, x = l ? i : a;
        R && _.skipped_effects.delete(R), x && _.skipped_effects.add(x), _.add_callback(f);
      } else
        f();
    }
  };
  xn(() => {
    s = !1, e(o), s || h(null, null);
  }, d);
}
function qt(t, e) {
  return e;
}
function po(t, e, n) {
  for (var r = t.items, a = [], i = e.length, l = 0; l < i; l++)
    ni(e[l].e, a, !0);
  var d = i > 0 && a.length === 0 && n !== null;
  if (d) {
    var s = (
      /** @type {Element} */
      /** @type {Element} */
      n.parentNode
    );
    Os(s), s.append(
      /** @type {Element} */
      n
    ), r.clear(), Nt(t, e[0].prev, e[i - 1].next);
  }
  fl(a, () => {
    for (var o = 0; o < i; o++) {
      var c = e[o];
      d || (r.delete(c.k), Nt(t, c.prev, c.next)), Oe(c.e, !d);
    }
  });
}
function Zt(t, e, n, r, a, i = null) {
  var l = t, d = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, s = (e & 4) !== 0;
  if (s) {
    var o = (
      /** @type {Element} */
      t
    );
    l = o.appendChild(wn());
  }
  var c = null, f = !1, h = /* @__PURE__ */ new Map(), b = /* @__PURE__ */ $a(() => {
    var _ = n();
    return Gr(_) ? _ : _ == null ? [] : za(_);
  }), v, p;
  function w() {
    bo(
      p,
      v,
      d,
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
    ve), v = /** @type {V[]} */
    u(b);
    var _ = v.length;
    if (!(f && _ === 0)) {
      f = _ === 0;
      var R, x, m, S;
      if (ti()) {
        var A = /* @__PURE__ */ new Set(), g = (
          /** @type {Batch} */
          Ae
        );
        for (x = 0; x < _; x += 1) {
          m = v[x], S = r(m, x);
          var C = d.items.get(S) ?? h.get(S);
          C ? e & 3 && Al(C, m, x, e) : (R = wl(
            null,
            d,
            null,
            null,
            m,
            S,
            x,
            a,
            e,
            n,
            !0
          ), h.set(S, R)), A.add(S);
        }
        for (const [L, P] of d.items)
          A.has(L) || g.skipped_effects.add(P.e);
        g.add_callback(w);
      } else
        w();
      u(b);
    }
  });
}
function bo(t, e, n, r, a, i, l, d, s) {
  var ne, M, V, $;
  var o = (l & 8) !== 0, c = (l & 3) !== 0, f = e.length, h = n.items, b = n.first, v = b, p, w = null, _, R = [], x = [], m, S, A, g;
  if (o)
    for (g = 0; g < f; g += 1)
      m = e[g], S = d(m, g), A = h.get(S), A !== void 0 && ((ne = A.a) == null || ne.measure(), (_ ?? (_ = /* @__PURE__ */ new Set())).add(A));
  for (g = 0; g < f; g += 1) {
    if (m = e[g], S = d(m, g), A = h.get(S), A === void 0) {
      var C = r.get(S);
      if (C !== void 0) {
        r.delete(S), h.set(S, C);
        var L = w ? w.next : v;
        Nt(n, w, C), Nt(n, C, L), _a(C, L, a), w = C;
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
          m,
          S,
          g,
          i,
          l,
          s
        );
      }
      h.set(S, w), R = [], x = [], v = w.next;
      continue;
    }
    if (c && Al(A, m, g, l), A.e.f & Wt && (va(A.e), o && ((M = A.a) == null || M.unfix(), (_ ?? (_ = /* @__PURE__ */ new Set())).delete(A))), A !== v) {
      if (p !== void 0 && p.has(A)) {
        if (R.length < x.length) {
          var F = x[0], z;
          w = F.prev;
          var J = R[0], be = R[R.length - 1];
          for (z = 0; z < R.length; z += 1)
            _a(R[z], F, a);
          for (z = 0; z < x.length; z += 1)
            p.delete(x[z]);
          Nt(n, J.prev, be.next), Nt(n, w, J), Nt(n, be, F), v = F, w = be, g -= 1, R = [], x = [];
        } else
          p.delete(A), _a(A, v, a), Nt(n, A.prev, A.next), Nt(n, A, w === null ? n.first : w.next), Nt(n, w, A), w = A;
        continue;
      }
      for (R = [], x = []; v !== null && v.k !== S; )
        v.e.f & Wt || (p ?? (p = /* @__PURE__ */ new Set())).add(v), x.push(v), v = v.next;
      if (v === null)
        continue;
      A = v;
    }
    R.push(A), w = A, v = A.next;
  }
  if (v !== null || p !== void 0) {
    for (var k = p === void 0 ? [] : za(p); v !== null; )
      v.e.f & Wt || k.push(v), v = v.next;
    var Z = k.length;
    if (Z > 0) {
      var U = l & 4 && f === 0 ? a : null;
      if (o) {
        for (g = 0; g < Z; g += 1)
          (V = k[g].a) == null || V.measure();
        for (g = 0; g < Z; g += 1)
          ($ = k[g].a) == null || $.fix();
      }
      po(n, k, U);
    }
  }
  o && _n(() => {
    var me;
    if (_ !== void 0)
      for (A of _)
        (me = A.a) == null || me.apply();
  }), t.first = n.first && n.first.e, t.last = w && w.e;
  for (var B of r.values())
    Oe(B.e);
  r.clear();
}
function Al(t, e, n, r) {
  r & 1 && dr(t.v, e), r & 2 ? dr(
    /** @type {Value<number>} */
    t.i,
    n
  ) : t.i = n;
}
function wl(t, e, n, r, a, i, l, d, s, o, c) {
  var f = (s & 1) !== 0, h = (s & 16) === 0, b = f ? h ? /* @__PURE__ */ rl(a, !1, !1) : Nn(a) : a, v = s & 2 ? Nn(l) : l, p = {
    i: v,
    v: b,
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
    return p.e = Qe(() => d(
      /** @type {Node} */
      t,
      b,
      v,
      o
    ), ms), p.e.prev = n && n.e, p.e.next = r && r.e, n === null ? c || (e.first = p) : (n.next = p, n.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
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
function Nt(t, e, n) {
  e === null ? t.first = n : (e.next = n, e.e.next = n && n.e), n !== null && (n.prev = e, n.e.prev = e && e.e);
}
function mo(t, e, n, r, a) {
  var d;
  var i = (d = e.$$slots) == null ? void 0 : d[n], l = !1;
  i === !0 && (i = e.children, l = !0), i === void 0 || i(t, l ? () => r : r);
}
function ai(t, e, n) {
  var r = t, a, i, l = null, d = null;
  function s() {
    i && (bn(i), i = null), l && (l.lastChild.remove(), r.before(l), l = null), i = d, d = null;
  }
  xn(() => {
    if (a !== (a = e())) {
      var o = ti();
      if (a) {
        var c = r;
        o && (l = document.createDocumentFragment(), l.append(c = wn()), i && Ae.skipped_effects.add(i)), d = Qe(() => n(c, a));
      }
      o ? Ae.add_callback(s) : s();
    }
  }, jn);
}
function Ta(t, e, n, r, a, i) {
  var l, d, s = null, o = (
    /** @type {TemplateNode} */
    t
  ), c;
  xn(() => {
    const f = e() || null;
    var h = f === "svg" ? Ql : null;
    f !== l && (c && (f === null ? bn(c, () => {
      c = null, d = null;
    }) : f === d ? va(c) : Oe(c)), f && f !== d && (c = Qe(() => {
      if (s = h ? document.createElementNS(h, f) : document.createElement(f), fr(s, s), r) {
        var b = (
          /** @type {TemplateNode} */
          s.appendChild(wn())
        );
        r(s, b);
      }
      ve.nodes_end = s, o.before(s);
    })), l = f, l && (d = l));
  }, jn);
}
function De(t, e, n) {
  Hr(() => {
    var r = Sn(() => e(t, n == null ? void 0 : n()) || {});
    if (n && (r != null && r.update)) {
      var a = !1, i = (
        /** @type {any} */
        {}
      );
      fa(() => {
        var l = n();
        to(l), a && Qa(i, l) && (i = l, r.update(l));
      }), a = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function _o(t, e) {
  var n = void 0, r;
  xn(() => {
    n !== (n = e()) && (r && (Oe(r), r = null), n && (r = Qe(() => {
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
const Ci = [...` 	
\r\f \v\uFEFF`];
function yo(t, e, n) {
  var r = t == null ? "" : "" + t;
  if (e && (r = r ? r + " " + e : e), n) {
    for (var a in n)
      if (n[a])
        r = r ? r + " " + a : a;
      else if (r.length)
        for (var i = a.length, l = 0; (l = r.indexOf(a, l)) >= 0; ) {
          var d = l + i;
          (l === 0 || Ci.includes(r[l - 1])) && (d === r.length || Ci.includes(r[d])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(d + 1) : l = d;
        }
  }
  return r === "" ? null : r;
}
function yi(t, e = !1) {
  var n = e ? " !important;" : ";", r = "";
  for (var a in t) {
    var i = t[a];
    i != null && i !== "" && (r += " " + a + ": " + i + n);
  }
  return r;
}
function Ca(t) {
  return t[0] !== "-" || t[1] !== "-" ? t.toLowerCase() : t;
}
function Io(t, e) {
  if (e) {
    var n = "", r, a;
    if (Array.isArray(e) ? (r = e[0], a = e[1]) : r = e, t) {
      t = String(t).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var i = !1, l = 0, d = !1, s = [];
      r && s.push(...Object.keys(r).map(Ca)), a && s.push(...Object.keys(a).map(Ca));
      var o = 0, c = -1;
      const p = t.length;
      for (var f = 0; f < p; f++) {
        var h = t[f];
        if (d ? h === "/" && t[f - 1] === "*" && (d = !1) : i ? i === h && (i = !1) : h === "/" && t[f + 1] === "*" ? d = !0 : h === '"' || h === "'" ? i = h : h === "(" ? l++ : h === ")" && l--, !d && i === !1 && l === 0) {
          if (h === ":" && c === -1)
            c = f;
          else if (h === ";" || f === p - 1) {
            if (c !== -1) {
              var b = Ca(t.substring(o, c).trim());
              if (!s.includes(b)) {
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
    return r && (n += yi(r)), a && (n += yi(a, !0)), n = n.trim(), n === "" ? null : n;
  }
  return t == null ? null : String(t);
}
function Cn(t, e, n, r, a, i) {
  var l = t.__className;
  if (l !== n || l === void 0) {
    var d = yo(n, r, i);
    d == null ? t.removeAttribute("class") : e ? t.className = d : t.setAttribute("class", d), t.__className = n;
  } else if (i && a !== i)
    for (var s in i) {
      var o = !!i[s];
      (a == null || o !== !!a[s]) && t.classList.toggle(s, o);
    }
  return i;
}
function ya(t, e = {}, n, r) {
  for (var a in n) {
    var i = n[a];
    e[a] !== i && (n[a] == null ? t.style.removeProperty(a) : t.style.setProperty(a, i, r));
  }
}
function Ne(t, e, n, r) {
  var a = t.__style;
  if (a !== e) {
    var i = Io(e, r);
    i == null ? t.removeAttribute("style") : t.style.cssText = i, t.__style = e;
  } else r && (Array.isArray(r) ? (ya(t, n == null ? void 0 : n[0], r[0]), ya(t, n == null ? void 0 : n[1], r[1], "important")) : ya(t, n, r));
  return r;
}
function Ma(t, e, n = !1) {
  if (t.multiple) {
    if (e == null)
      return;
    if (!Gr(e))
      return ps();
    for (var r of t.options)
      r.selected = e.includes(Ii(r));
    return;
  }
  for (r of t.options) {
    var a = Ii(r);
    if (Zs(a, e)) {
      r.selected = !0;
      return;
    }
  }
  (!n || e !== void 0) && (t.selectedIndex = -1);
}
function Ao(t) {
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
function Ii(t) {
  return "__value" in t ? t.__value : t.value;
}
const Ir = Symbol("class"), Ar = Symbol("style"), Rl = Symbol("is custom element"), El = Symbol("is html");
function Ai(t, e) {
  var n = ii(t);
  n.value === (n.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  t.value === e && (e !== 0 || t.nodeName !== "PROGRESS") || (t.value = e ?? "");
}
function wo(t, e) {
  e ? t.hasAttribute("selected") || t.setAttribute("selected", "") : t.removeAttribute("selected");
}
function Ft(t, e, n, r) {
  var a = ii(t);
  a[e] !== (a[e] = n) && (e === "loading" && (t[is] = n), n == null ? t.removeAttribute(e) : typeof n != "string" && Ll(t).includes(e) ? t[e] = n : t.setAttribute(e, n));
}
function xo(t, e, n, r, a = !1, i = !1) {
  var l = ii(t), d = l[Rl], s = !l[El], o = e || {}, c = t.tagName === "OPTION";
  for (var f in e)
    f in n || (n[f] = null);
  n.class ? n.class = Sl(n.class) : n[Ir] && (n.class = null), n[Ar] && (n.style ?? (n.style = null));
  var h = Ll(t);
  for (const x in n) {
    let m = n[x];
    if (c && x === "value" && m == null) {
      t.value = t.__value = "", o[x] = m;
      continue;
    }
    if (x === "class") {
      var b = t.namespaceURI === "http://www.w3.org/1999/xhtml";
      Cn(t, b, m, r, e == null ? void 0 : e[Ir], n[Ir]), o[x] = m, o[Ir] = n[Ir];
      continue;
    }
    if (x === "style") {
      Ne(t, m, e == null ? void 0 : e[Ar], n[Ar]), o[x] = m, o[Ar] = n[Ar];
      continue;
    }
    var v = o[x];
    if (!(m === v && !(m === void 0 && t.hasAttribute(x)))) {
      o[x] = m;
      var p = x[0] + x[1];
      if (p !== "$$")
        if (p === "on") {
          const S = {}, A = "$$" + x;
          let g = x.slice(2);
          var w = lo(g);
          if (ao(g) && (g = g.slice(0, -7), S.capture = !0), !w && v) {
            if (m != null) continue;
            t.removeEventListener(g, o[A], S), o[A] = null;
          }
          if (m != null)
            if (w)
              t[`__${g}`] = m, ze([g]);
            else {
              let C = function(L) {
                o[x].call(this, L);
              };
              o[A] = ri(g, t, C, S);
            }
          else w && (t[`__${g}`] = void 0);
        } else if (x === "style")
          Ft(t, x, m);
        else if (x === "autofocus")
          Bs(
            /** @type {HTMLElement} */
            t,
            !!m
          );
        else if (!d && (x === "__value" || x === "value" && m != null))
          t.value = t.__value = m;
        else if (x === "selected" && c)
          wo(
            /** @type {HTMLOptionElement} */
            t,
            m
          );
        else {
          var _ = x;
          s || (_ = oo(_));
          var R = _ === "defaultValue" || _ === "defaultChecked";
          if (m == null && !d && !R)
            if (l[x] = null, _ === "value" || _ === "checked") {
              let S = (
                /** @type {HTMLInputElement} */
                t
              );
              const A = e === void 0;
              if (_ === "value") {
                let g = S.defaultValue;
                S.removeAttribute(_), S.defaultValue = g, S.value = S.__value = A ? g : null;
              } else {
                let g = S.defaultChecked;
                S.removeAttribute(_), S.defaultChecked = g, S.checked = A ? g : !1;
              }
            } else
              t.removeAttribute(x);
          else R || h.includes(_) && (d || typeof m != "string") ? (t[_] = m, _ in l && (l[_] = Fe)) : typeof m != "function" && Ft(t, _, m);
        }
    }
  }
  return o;
}
function We(t, e, n = [], r = [], a, i = !1, l = !1) {
  el(n, r, (d) => {
    var s = void 0, o = {}, c = t.nodeName === "SELECT", f = !1;
    if (xn(() => {
      var b = e(...d.map(u)), v = xo(
        t,
        s,
        b,
        a,
        i,
        l
      );
      f && c && "value" in b && Ma(
        /** @type {HTMLSelectElement} */
        t,
        b.value
      );
      for (let w of Object.getOwnPropertySymbols(o))
        b[w] || Oe(o[w]);
      for (let w of Object.getOwnPropertySymbols(b)) {
        var p = b[w];
        w.description === $l && (!s || p !== s[w]) && (o[w] && Oe(o[w]), o[w] = Qe(() => _o(t, () => p))), v[w] = p;
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
        ), Ao(h);
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
      [El]: t.namespaceURI === Kl
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
function So(t, e, n = e) {
  var r = /* @__PURE__ */ new WeakSet();
  Us(t, "input", async (a) => {
    var i = a ? t.defaultValue : t.value;
    if (i = Ia(t) ? Aa(i) : i, n(i), Ae !== null && r.add(Ae), await _l(), i !== (i = e())) {
      var l = t.selectionStart, d = t.selectionEnd, s = t.value.length;
      if (t.value = i ?? "", d !== null) {
        var o = t.value.length;
        l === d && d === s && o > s ? (t.selectionStart = o, t.selectionEnd = o) : (t.selectionStart = l, t.selectionEnd = Math.min(d, o));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Sn(e) == null && t.value && (n(Ia(t) ? Aa(t.value) : t.value), Ae !== null && r.add(Ae)), fa(() => {
    var a = e();
    if (t === document.activeElement) {
      var i = (
        /** @type {Batch} */
        Jr ?? Ae
      );
      if (r.has(i))
        return;
    }
    Ia(t) && a === Aa(t.value) || t.type === "date" && !a && !t.value || a !== t.value && (t.value = a ?? "");
  });
}
function Ia(t) {
  var e = t.type;
  return e === "number" || e === "range";
}
function Aa(t) {
  return t === "" ? null : +t;
}
function xi(t, e) {
  return t === e || (t == null ? void 0 : t[Yt]) === e;
}
function ye(t = {}, e, n, r) {
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
function On(t, e = oe) {
  let n = null;
  const r = /* @__PURE__ */ new Set();
  function a(d) {
    if (Qa(t, d) && (t = d, n)) {
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
  function i(d) {
    a(d(
      /** @type {T} */
      t
    ));
  }
  function l(d, s = oe) {
    const o = [d, s];
    return r.add(o), r.size === 1 && (n = e(a, i) || oe), d(
      /** @type {T} */
      t
    ), () => {
      r.delete(o), r.size === 0 && n && (n(), n = null);
    };
  }
  return { set: a, update: i, subscribe: l };
}
function Ro(t) {
  let e;
  return Pl(t, (n) => e = n)(), e;
}
let Nr = !1, Ha = Symbol();
function Wa(t, e, n) {
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
        a ? r.source.v = i : T(r.source, i);
      }), a = !1;
    }
  return t && Ha in n ? Ro(t) : u(r.source);
}
function Za(t, e) {
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
function Eo(t) {
  var e = Nr;
  try {
    return Nr = !1, [t(), Nr];
  } finally {
    Nr = e;
  }
}
const Lo = {
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
    Lo
  );
}
const Po = {
  get(t, e) {
    let n = t.props.length;
    for (; n--; ) {
      let r = t.props[n];
      if (yr(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(t, e, n) {
    let r = t.props.length;
    for (; r--; ) {
      let a = t.props[r];
      yr(a) && (a = a());
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
      if (yr(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const a = gn(r, e);
        return a && !a.configurable && (a.configurable = !0), a;
      }
    }
  },
  has(t, e) {
    if (e === Yt || e === Vi) return !1;
    for (let n of t.props)
      if (yr(n) && (n = n()), n != null && e in n) return !0;
    return !1;
  },
  ownKeys(t) {
    const e = [];
    for (let n of t.props)
      if (yr(n) && (n = n()), !!n) {
        for (const r in n)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(n))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function xt(...t) {
  return new Proxy({ props: t }, Po);
}
function I(t, e, n, r) {
  var x;
  var a = !hr || (n & 2) !== 0, i = (n & 8) !== 0, l = (n & 16) !== 0, d = (
    /** @type {V} */
    r
  ), s = !0, o = () => (s && (s = !1, d = l ? Sn(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), d), c;
  if (i) {
    var f = Yt in t || Vi in t;
    c = ((x = gn(t, e)) == null ? void 0 : x.set) ?? (f && e in t ? (m) => t[e] = m : void 0);
  }
  var h, b = !1;
  i ? [h, b] = Eo(() => (
    /** @type {V} */
    t[e]
  )) : h = /** @type {V} */
  t[e], h === void 0 && r !== void 0 && (h = o(), c && (a && cs(), c(h)));
  var v;
  if (a ? v = () => {
    var m = (
      /** @type {V} */
      t[e]
    );
    return m === void 0 ? o() : (s = !0, m);
  } : v = () => {
    var m = (
      /** @type {V} */
      t[e]
    );
    return m !== void 0 && (d = /** @type {V} */
    void 0), m === void 0 ? d : m;
  }, a && !(n & 4))
    return v;
  if (c) {
    var p = t.$$legacy;
    return (
      /** @type {() => V} */
      function(m, S) {
        return arguments.length > 0 ? ((!a || !S || p || b) && c(S ? v() : m), m) : v();
      }
    );
  }
  var w = !1, _ = (n & 1 ? ua : $a)(() => (w = !1, v()));
  i && u(_);
  var R = (
    /** @type {Effect} */
    ve
  );
  return (
    /** @type {() => V} */
    function(m, S) {
      if (arguments.length > 0) {
        const A = S ? u(_) : a && i ? fe(m) : m;
        return T(_, A), w = !0, d !== void 0 && (d = A), m;
      }
      return Xn && w || R.f & Vn ? _.v : u(_);
    }
  );
}
const ko = "5";
var Fi;
typeof window < "u" && ((Fi = window.__svelte ?? (window.__svelte = {})).v ?? (Fi.v = /* @__PURE__ */ new Set())).add(ko);
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
    n in i || (i[n] = /* @__PURE__ */ new Map()), i[n].set(r, no(e, n, r, a));
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
function q(t, e) {
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
function Do(t, e) {
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
function Go(t, e, n) {
  if (!t)
    return { x: 0, y: 0 };
  var r = e.x, a = e.y, i = r + n.left, l = a + n.top, d, s;
  if (t.type === "touchstart") {
    var o = t;
    d = o.changedTouches[0].pageX - i, s = o.changedTouches[0].pageY - l;
  } else {
    var c = t;
    d = c.pageX - i, s = c.pageY - l;
  }
  return { x: d, y: s };
}
var Oa = function(t, e) {
  return Oa = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (n[a] = r[a]);
  }, Oa(t, e);
};
function gr(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Oa(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ut = function() {
  return ut = Object.assign || function(e) {
    for (var n, r = 1, a = arguments.length; r < a; r++) {
      n = arguments[r];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ut.apply(this, arguments);
};
function To(t, e, n, r) {
  function a(i) {
    return i instanceof n ? i : new n(function(l) {
      l(i);
    });
  }
  return new (n || (n = Promise))(function(i, l) {
    function d(c) {
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
      c.done ? i(c.value) : a(c.value).then(d, s);
    }
    o((r = r.apply(t, e || [])).next());
  });
}
function Mo(t, e) {
  var n = { label: 0, sent: function() {
    if (i[0] & 1) throw i[1];
    return i[1];
  }, trys: [], ops: [] }, r, a, i, l = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return l.next = d(0), l.throw = d(1), l.return = d(2), typeof Symbol == "function" && (l[Symbol.iterator] = function() {
    return this;
  }), l;
  function d(o) {
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
function Ho(t) {
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
  applyPassive: Ho
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
function Zo(t, e) {
  if (t.closest)
    return t.closest(e);
  for (var n = t; n; ) {
    if (Dl(n, e))
      return n;
    n = n.parentElement;
  }
  return null;
}
function Dl(t, e) {
  var n = t.matches || t.webkitMatchesSelector || t.msMatchesSelector;
  return n.call(t, e);
}
function Fo(t) {
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
  closest: Zo,
  estimateScrollWidth: Fo,
  matches: Dl
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
var Oo = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, Bo = {
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
], Vr = [], No = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n) {
      var r = t.call(this, ut(ut({}, e.defaultAdapter), n)) || this;
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
        return Oo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Bo;
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
            var d = l.value;
            this.adapter.registerInteractionHandler(d, this.activateHandler);
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
            var d = l.value;
            this.adapter.registerDocumentInteractionHandler(d, this.deactivateHandler);
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
      } catch (d) {
        n = { error: d };
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
      } catch (d) {
        n = { error: d };
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
            var d = n !== void 0 && Vr.length > 0 && Vr.some(function(s) {
              return r.adapter.containsEventTarget(s);
            });
            if (d) {
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
      var n = this, r = e.strings, a = r.VAR_FG_TRANSLATE_START, i = r.VAR_FG_TRANSLATE_END, l = e.cssClasses, d = l.FG_DEACTIVATION, s = l.FG_ACTIVATION, o = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", f = "";
      if (!this.adapter.isUnbounded()) {
        var h = this.getFgTranslationCoordinates(), b = h.startPoint, v = h.endPoint;
        c = b.x + "px, " + b.y + "px", f = v.x + "px, " + v.y + "px";
      }
      this.adapter.updateCssVariable(a, c), this.adapter.updateCssVariable(i, f), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(d), this.adapter.computeBoundingRect(), this.adapter.addClass(s), this.activationTimer = setTimeout(function() {
        n.activationTimerCallback();
      }, o);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var n = this.activationState, r = n.activationEvent, a = n.wasActivatedByPointer, i;
      a ? i = Go(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : i = {
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
      var n = this, r = e.cssClasses.FG_DEACTIVATION, a = this.activationState, i = a.hasDeactivationUXRun, l = a.isActivated, d = i || !l;
      d && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
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
        var a = ut({}, r);
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
const { applyPassive: Li } = kl, { matches: Uo } = Gl;
function kn(t, { ripple: e = !0, surface: n = !1, unbounded: r = !1, disabled: a = !1, color: i, active: l, rippleElement: d, eventTarget: s, activeTarget: o, addClass: c = (v) => t.classList.add(v), removeClass: f = (v) => t.classList.remove(v), addStyle: h = (v, p) => t.style.setProperty(v, p), initPromise: b = Promise.resolve() } = {}) {
  let v, p = new ga(), w = xe("SMUI:addLayoutListener"), _, R = l, x = s, m = o;
  function S() {
    n ? (c("mdc-ripple-surface"), i === "primary" ? (c("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")) : i === "secondary" ? (f("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary"))) : (f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), v && R !== l && (R = l, l ? v.activate() : l === !1 && v.deactivate()), e && !v ? (v = new No({
      addClass: c,
      browserSupportsCssVars: () => Do(window),
      computeBoundingRect: () => (d || t).getBoundingClientRect(),
      containsEventTarget: (g) => t.contains(g),
      deregisterDocumentInteractionHandler: (g, C) => p.off(document.documentElement, g, C),
      deregisterInteractionHandler: (g, C) => p.off(s || t, g, C),
      deregisterResizeHandler: (g) => window.removeEventListener("resize", g),
      getWindowPageOffset: () => {
        var g, C;
        return {
          x: (g = window.pageXOffset) !== null && g !== void 0 ? g : window.scrollX,
          y: (C = window.pageYOffset) !== null && C !== void 0 ? C : window.scrollY
        };
      },
      isSurfaceActive: () => l ?? Uo(o || t, ":active"),
      isSurfaceDisabled: () => !!a,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (g, C) => {
        const L = Li();
        p.on(document.documentElement, g, C, typeof L == "boolean" ? { capture: L } : L);
      },
      registerInteractionHandler: (g, C) => {
        const L = Li();
        p.on(s || t, g, C, typeof L == "boolean" ? { capture: L } : L);
      },
      registerResizeHandler: (g) => p.on(window, "resize", g),
      removeClass: f,
      updateCssVariable: h
    }), b.then(() => {
      v && (v.init(), v.setUnbounded(r));
    })) : v && !e && b.then(() => {
      v && (v.destroy(), v = void 0, p.clear());
    }), v && (x !== s || m !== o) && (x = s, m = o, v.destroy(), requestAnimationFrame(() => {
      v && (v.init(), v.setUnbounded(r));
    })), !e && r && c("mdc-ripple-upgraded--unbounded");
  }
  S(), w && (_ = w(A));
  function A() {
    v && v.layout();
  }
  return {
    update(g) {
      ({
        ripple: e,
        surface: n,
        unbounded: r,
        disabled: a,
        color: i,
        active: l,
        rippleElement: d,
        eventTarget: s,
        activeTarget: o,
        addClass: c,
        removeClass: f,
        addStyle: h,
        initPromise: b
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (C) => t.classList.add(C), removeClass: (C) => t.classList.remove(C), addStyle: (C, L) => t.style.setProperty(C, L), initPromise: Promise.resolve() }, g)), S();
    },
    destroy() {
      v && (v.destroy(), v = void 0, p.clear(), f("mdc-ripple-surface"), f("smui-ripple-surface--primary"), f("smui-ripple-surface--secondary")), _ && _();
    }
  };
}
var Vo = /* @__PURE__ */ et("<svg><!></svg>");
function Tl(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = I(e, "tag", 3, "div"), a = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
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
  function d() {
    return l;
  }
  var s = { getElement: d }, o = ee(), c = N(o);
  {
    var f = (b) => {
      var v = Vo();
      We(v, () => ({ ...a }));
      var p = D(v);
      se(p, () => e.children ?? oe), ye(v, (w) => l = w, () => l), De(v, (w, _) => q == null ? void 0 : q(w, _), n), y(b, v);
    }, h = (b) => {
      var v = ee(), p = N(v);
      {
        var w = (R) => {
          var x = ee(), m = N(x);
          Ta(m, r, !1, (S, A) => {
            ye(S, (g) => l = g, () => l), De(S, (g, C) => q == null ? void 0 : q(g, C), n), We(S, () => ({ ...a }));
          }), y(R, x);
        }, _ = (R) => {
          var x = ee(), m = N(x);
          Ta(m, r, !1, (S, A) => {
            ye(S, (L) => l = L, () => l), De(S, (L, P) => q == null ? void 0 : q(L, P), n), We(S, () => ({ ...a }));
            var g = ee(), C = N(g);
            se(C, () => e.children ?? oe), y(A, g);
          }), y(R, x);
        };
        j(
          p,
          (R) => {
            u(i) ? R(w) : R(_, !1);
          },
          !0
        );
      }
      y(b, v);
    };
    j(c, (b) => {
      r() === "svg" ? b(f) : b(h, !1);
    });
  }
  return y(t, o), pe(s);
}
function jr(t, e) {
  ge(e, !0);
  const [n, r] = li(), a = On(e.value);
  de(e.key, a), Pe(() => {
    Za(a, e.value);
  }), Wr(() => {
    a.set(void 0);
  });
  var i = ee(), l = N(i);
  se(l, () => e.children ?? oe), y(t, i), pe(), r();
}
var jo = /* @__PURE__ */ W('<div class="mdc-button__touch"></div>'), zo = /* @__PURE__ */ W('<div class="mdc-button__ripple"></div> <!><!>', 1);
function vr(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = I(e, "style", 3, ""), i = I(e, "ripple", 3, !0), l = I(e, "color", 3, "primary"), d = I(e, "variant", 3, "text"), s = I(e, "touch", 3, !1), o = I(e, "action", 3, "close"), c = I(e, "defaultAction", 3, !1), f = I(e, "secondary", 3, !1), h = I(e, "component", 3, Tl), b = I(e, "tag", 19, () => e.href == null ? "button" : "a"), v = /* @__PURE__ */ Xe(e, [
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
  ]), p, w = fe({}), _ = fe({}), R = xe("SMUI:button:context");
  const x = /* @__PURE__ */ ie(() => R === "dialog:action" && o() != null ? { "data-mdc-dialog-action": o() } : { action: o() }), m = /* @__PURE__ */ ie(() => R === "dialog:action" && c() ? { "data-mdc-dialog-button-default": "" } : {}), S = /* @__PURE__ */ ie(() => R === "banner" ? {} : { secondary: f() });
  let A = e.disabled;
  Pe(() => {
    if (A !== e.disabled) {
      if (p) {
        const k = F();
        "blur" in k && k.blur();
      }
      A = v.disabled;
    }
  }), de("SMUI:label:context", "button"), de("SMUI:icon:context", "button");
  function g(k) {
    w[k] || (w[k] = !0);
  }
  function C(k) {
    (!(k in w) || w[k]) && (w[k] = !1);
  }
  function L(k, Z) {
    _[k] != Z && (Z === "" || Z == null ? delete _[k] : _[k] = Z);
  }
  function P() {
    R === "banner" && bt(F(), f() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function F() {
    return p.getElement();
  }
  var z = { getElement: F }, J = ee(), be = N(J);
  {
    let k = /* @__PURE__ */ ie(() => [
      [
        kn,
        {
          ripple: i(),
          unbounded: !1,
          color: l(),
          disabled: !!e.disabled,
          addClass: g,
          removeClass: C,
          addStyle: L
        }
      ],
      ...n()
    ]), Z = /* @__PURE__ */ ie(() => Be({
      "mdc-button": !0,
      "mdc-button--raised": d() === "raised",
      "mdc-button--unelevated": d() === "unelevated",
      "mdc-button--outlined": d() === "outlined",
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
    })), U = /* @__PURE__ */ ie(() => Object.entries(_).map(([B, ne]) => `${B}: ${ne};`).concat([a()]).join(" "));
    ai(be, h, (B, ne) => {
      ye(
        ne(B, xt(
          {
            get tag() {
              return b();
            },
            get use() {
              return u(k);
            },
            get class() {
              return u(Z);
            },
            get style() {
              return u(U);
            }
          },
          () => u(x),
          () => u(m),
          () => u(S),
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
              var $ = zo(), me = O(N($), 2);
              se(me, () => e.children ?? oe);
              var he = O(me);
              {
                var re = (ae) => {
                  var ue = jo();
                  y(ae, ue);
                };
                j(he, (ae) => {
                  s() && ae(re);
                });
              }
              y(M, $);
            },
            $$slots: { default: !0 }
          }
        )),
        (M) => p = M,
        () => p
      );
    });
  }
  return y(t, J), pe(z);
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
var Xo = {
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
var Yo = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n) {
      var r = t.call(this, ut(ut({}, e.defaultAdapter), n)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Xo;
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
var qo = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n) {
      var r = t.call(this, ut(ut({}, e.defaultAdapter), n)) || this;
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
var Jo = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Pi = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, Ko = {
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
var Qo = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n) {
      return t.call(this, ut(ut({}, e.defaultAdapter), n)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Jo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ko;
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
}, $o = {
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
}, eu = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], tu = [
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
var Di = ["mousedown", "touchstart"], Gi = ["click", "keydown"], nu = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n, r) {
      r === void 0 && (r = {});
      var a = t.call(this, ut(ut({}, e.defaultAdapter), n)) || this;
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
        return $o;
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
        return tu.indexOf(n) >= 0;
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
        for (var l = hn(Di), d = l.next(); !d.done; d = l.next()) {
          var s = d.value;
          this.adapter.registerInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          d && !d.done && (r = l.return) && r.call(l);
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
        for (var l = hn(Di), d = l.next(); !d.done; d = l.next()) {
          var s = d.value;
          this.adapter.deregisterInputInteractionHandler(s, this.setPointerXOffset);
        }
      } catch (f) {
        n = { error: f };
      } finally {
        try {
          d && !d.done && (r = l.return) && r.call(l);
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
        return eu.indexOf(a) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
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
), ru = /* @__PURE__ */ W("<span><!></span>"), au = /* @__PURE__ */ W("<label><!></label>");
function Ti(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = I(e, "style", 3, ""), i = I(e, "floatAbove", 15, !1), l = I(e, "required", 15, !1), d = I(e, "wrapped", 3, !1), s = /* @__PURE__ */ Xe(e, [
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
  ]), o, c = /* @__PURE__ */ Q(void 0), f = new ga(), h = fe({}), b = fe({}), v = xe("SMUI:generic:input:props") ?? {}, p = i();
  Pe(() => {
    u(c) && p !== i() && (p = i(), u(c).float(i()));
  });
  let w = l();
  Pe(() => {
    u(c) && w !== l() && (w = l(), u(c).setRequired(l()));
  });
  const _ = xe("SMUI:floating-label:mount"), R = xe("SMUI:floating-label:unmount");
  tt(() => {
    T(
      c,
      new Yo({
        addClass: x,
        removeClass: m,
        getWidth: () => {
          var V, $;
          const B = F(), ne = B.cloneNode(!0);
          (V = B.parentNode) == null || V.appendChild(ne), ne.classList.add("smui-floating-label--remove-transition"), ne.classList.add("smui-floating-label--force-size"), ne.classList.remove("mdc-floating-label--float-above");
          const M = ne.scrollWidth;
          return ($ = B.parentNode) == null || $.removeChild(ne), M;
        },
        registerInteractionHandler: (B, ne) => f.on(F(), B, ne),
        deregisterInteractionHandler: (B, ne) => f.off(F(), B, ne)
      }),
      !0
    );
    const U = {
      get element() {
        return F();
      },
      addStyle: S,
      removeStyle: A
    };
    return _ && _(U), u(c).init(), () => {
      var B;
      R && R(U), (B = u(c)) == null || B.destroy(), f.clear();
    };
  });
  function x(U) {
    h[U] || (h[U] = !0);
  }
  function m(U) {
    (!(U in h) || h[U]) && (h[U] = !1);
  }
  function S(U, B) {
    b[U] != B && (B === "" || B == null ? delete b[U] : b[U] = B);
  }
  function A(U) {
    U in b && delete b[U];
  }
  function g(U) {
    var B;
    (B = u(c)) == null || B.shake(U);
  }
  function C(U) {
    i(U);
  }
  function L(U) {
    l(U);
  }
  function P() {
    if (u(c) == null)
      throw new Error("Instance is undefined.");
    return u(c).getWidth();
  }
  function F() {
    return o;
  }
  var z = { shake: g, float: C, setRequired: L, getWidth: P, getElement: F }, J = ee(), be = N(J);
  {
    var k = (U) => {
      var B = ru();
      We(B, (M, V) => ({ class: M, style: V, ...s }), [
        () => Be({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": i(),
          "mdc-floating-label--required": l(),
          ...h,
          [r()]: !0
        }),
        () => Object.entries(b).map(([M, V]) => `${M}: ${V};`).concat([a()]).join(" ")
      ]);
      var ne = D(B);
      se(ne, () => e.children ?? oe), ye(B, (M) => o = M, () => o), De(B, (M, V) => q == null ? void 0 : q(M, V), n), y(U, B);
    }, Z = (U) => {
      var B = au();
      We(
        B,
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
          () => Object.entries(b).map(([M, V]) => `${M}: ${V};`).concat([a()]).join(" ")
        ]
      );
      var ne = D(B);
      se(ne, () => e.children ?? oe), ye(B, (M) => o = M, () => o), De(B, (M, V) => q == null ? void 0 : q(M, V), n), y(U, B);
    };
    j(be, (U) => {
      d() ? U(k) : U(Z, !1);
    });
  }
  return y(t, J), pe(z);
}
var iu = /* @__PURE__ */ W("<div></div>");
function lu(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = I(e, "style", 3, ""), i = I(e, "active", 3, !1), l = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), d, s = /* @__PURE__ */ Q(void 0), o = new ga(), c = fe({}), f = fe({});
  tt(() => (T(
    s,
    new qo({
      addClass: b,
      removeClass: v,
      hasClass: h,
      setStyle: p,
      registerEventHandler: (A, g) => o.on(x(), A, g),
      deregisterEventHandler: (A, g) => o.off(x(), A, g)
    }),
    !0
  ), u(s).init(), () => {
    var A;
    (A = u(s)) == null || A.destroy(), o.clear();
  }));
  function h(A) {
    return A in c ? c[A] : x().classList.contains(A);
  }
  function b(A) {
    c[A] || (c[A] = !0);
  }
  function v(A) {
    (!(A in c) || c[A]) && (c[A] = !1);
  }
  function p(A, g) {
    f[A] != g && (g === "" || g == null ? delete f[A] : f[A] = g);
  }
  function w() {
    var A;
    (A = u(s)) == null || A.activate();
  }
  function _() {
    var A;
    (A = u(s)) == null || A.deactivate();
  }
  function R(A) {
    var g;
    (g = u(s)) == null || g.setRippleCenter(A);
  }
  function x() {
    return d;
  }
  var m = { activate: w, deactivate: _, setRippleCenter: R, getElement: x }, S = iu();
  return We(S, (A, g) => ({ class: A, style: g, ...l }), [
    () => Be({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": i(),
      ...c,
      [r()]: !0
    }),
    () => Object.entries(f).map(([A, g]) => `${A}: ${g};`).concat([a()]).join(" ")
  ]), ye(S, (A) => d = A, () => d), De(S, (A, g) => q == null ? void 0 : q(A, g), n), y(t, S), pe(m);
}
var su = /* @__PURE__ */ W('<div class="mdc-notched-outline__notch"><!></div>'), ou = /* @__PURE__ */ W('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function uu(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = I(e, "notched", 3, !1), i = I(e, "noLabel", 3, !1), l = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), d, s = /* @__PURE__ */ Q(void 0), o = /* @__PURE__ */ Q(void 0), c = fe({}), f = fe({}), h;
  Pe(() => {
    u(o) !== h && (u(o) ? (u(o).addStyle("transition-duration", "0s"), b("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      u(o) && u(o).removeStyle("transition-duration");
    })) : v("mdc-notched-outline--upgraded"), h = u(o));
  }), de("SMUI:floating-label:mount", (C) => {
    T(o, C, !0);
  }), de("SMUI:floating-label:unmount", () => {
    T(o, void 0);
  }), tt(() => (T(
    s,
    new Qo({
      addClass: b,
      removeClass: v,
      setNotchWidthProperty: (C) => p("width", C + "px"),
      removeNotchWidthProperty: () => w("width")
    }),
    !0
  ), u(s).init(), () => {
    var C;
    (C = u(s)) == null || C.destroy();
  }));
  function b(C) {
    c[C] || (c[C] = !0);
  }
  function v(C) {
    (!(C in c) || c[C]) && (c[C] = !1);
  }
  function p(C, L) {
    f[C] != L && (L === "" || L == null ? delete f[C] : f[C] = L);
  }
  function w(C) {
    C in f && delete f[C];
  }
  function _(C) {
    var L;
    (L = u(s)) == null || L.notch(C);
  }
  function R() {
    var C;
    (C = u(s)) == null || C.closeNotch();
  }
  function x() {
    return d;
  }
  var m = { notch: _, closeNotch: R, getElement: x }, S = ou();
  We(S, (C) => ({ class: C, ...l }), [
    () => Be({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": a(),
      "mdc-notched-outline--no-label": i(),
      ...c,
      [r()]: !0
    })
  ]);
  var A = O(D(S), 2);
  {
    var g = (C) => {
      var L = su(), P = D(L);
      se(P, () => e.children ?? oe), te((F) => Ne(L, F), [
        () => Object.entries(f).map(([F, z]) => `${F}: ${z};`).join(" ")
      ]), y(C, L);
    };
    j(A, (C) => {
      i() || C(g);
    });
  }
  return ye(S, (C) => d = C, () => d), De(S, (C, L) => q == null ? void 0 : q(C, L), n), y(t, S), pe(m);
}
function si(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = I(e, "component", 3, Tl), i = I(e, "tag", 3, "div"), l = I(e, "_smuiClass", 3, ""), d = I(e, "_smuiClassMap", 23, () => ({})), s = I(e, "_smuiContexts", 19, () => ({})), o = I(e, "_smuiProps", 19, () => ({})), c = /* @__PURE__ */ Xe(e, [
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
  Object.entries(d()).forEach(([_, R]) => {
    const x = xe(R);
    x && "subscribe" in x && h.push(x.subscribe((m) => {
      d()[_] = m;
    }));
  });
  for (let _ in s())
    s().hasOwnProperty(_) && de(_, s()[_]);
  Wr(() => {
    for (const _ of h)
      _();
  });
  function b() {
    return f.getElement();
  }
  var v = { getElement: b }, p = ee(), w = N(p);
  {
    let _ = /* @__PURE__ */ ie(() => Be({
      [l()]: !0,
      ...d(),
      [r()]: !0
    }));
    ai(w, a, (R, x) => {
      ye(
        x(R, xt(
          {
            get tag() {
              return i();
            },
            get use() {
              return n();
            },
            get class() {
              return u(_);
            }
          },
          o,
          () => c,
          {
            children: (m, S) => {
              var A = ee(), g = N(A);
              se(g, () => e.children ?? oe), y(m, A);
            },
            $$slots: { default: !0 }
          }
        )),
        (m) => f = m,
        () => f
      );
    });
  }
  return y(t, p), pe(v);
}
function du(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function a() {
    return r.getElement();
  }
  var i = { getElement: a };
  return ye(
    si(t, xt({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => n, {
      children: (l, d) => {
        var s = ee(), o = N(s);
        se(o, () => e.children ?? oe), y(l, s);
      },
      $$slots: { default: !0 }
    })),
    (l) => r = l,
    () => r
  ), pe(i);
}
function cu(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function a() {
    return r.getElement();
  }
  var i = { getElement: a };
  return ye(
    si(t, xt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => n,
      {
        children: (l, d) => {
          var s = ee(), o = N(s);
          se(o, () => e.children ?? oe), y(l, s);
        },
        $$slots: { default: !0 }
      }
    )),
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
  return ye(
    si(t, xt(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => n,
      {
        children: (l, d) => {
          var s = ee(), o = N(s);
          se(o, () => e.children ?? oe), y(l, s);
        },
        $$slots: { default: !0 }
      }
    )),
    (l) => r = l,
    () => r
  ), pe(i);
}
var vu = /* @__PURE__ */ W("<input/>");
function hu(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = I(e, "type", 3, "text"), i = I(e, "placeholder", 3, " "), l = I(e, "value", 15), d = I(e, "files", 15, null), s = I(e, "dirty", 15, !1), o = I(e, "invalid", 15, !1), c = I(e, "updateInvalid", 3, !0), f = I(e, "initialInvalid", 3, !1), h = I(e, "emptyValueNull", 19, () => l() === null), b = I(e, "emptyValueUndefined", 19, () => l() === void 0), v = /* @__PURE__ */ Xe(e, [
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
  ]), p, w = fe({}), _ = fe({});
  Pe(() => {
    a() === "file" ? delete _.value : _.value = l() == null ? "" : l();
  }), tt(() => {
    c() && f() && o(P().matches(":invalid"));
  });
  function R(k) {
    return k === "" ? Number.NaN : +k;
  }
  function x(k) {
    if (a() === "file") {
      d(k.currentTarget.files);
      return;
    }
    if (k.currentTarget.value === "" && h()) {
      l(null);
      return;
    }
    if (k.currentTarget.value === "" && b()) {
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
  function m(k) {
    (a() === "file" || a() === "range") && x(k), s(!0), c() && o(P().matches(":invalid"));
  }
  function S(k) {
    return k in w ? w[k] ?? null : P().getAttribute(k);
  }
  function A(k, Z) {
    w[k] !== Z && (w[k] = Z);
  }
  function g(k) {
    (!(k in w) || w[k] != null) && (w[k] = void 0);
  }
  function C() {
    P().focus();
  }
  function L() {
    P().blur();
  }
  function P() {
    return p;
  }
  var F = { getAttr: S, addAttr: A, removeAttr: g, focus: C, blur: L, getElement: P }, z = vu(), J = (k) => {
    var Z;
    a() !== "file" && x(k), (Z = e.oninput) == null || Z.call(e, k);
  }, be = (k) => {
    var Z;
    m(k), (Z = e.onchange) == null || Z.call(e, k);
  };
  return We(
    z,
    (k) => ({
      class: k,
      type: a(),
      placeholder: i(),
      ..._,
      ...w,
      ...v,
      oninput: J,
      onchange: be
    }),
    [
      () => Be({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), ye(z, (k) => p = k, () => p), De(z, (k, Z) => q == null ? void 0 : q(k, Z), n), y(t, z), pe(F);
}
var gu = /* @__PURE__ */ W("<textarea></textarea>");
function pu(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = I(e, "style", 3, ""), i = I(e, "value", 15, ""), l = I(e, "dirty", 15, !1), d = I(e, "invalid", 15, !1), s = I(e, "updateInvalid", 3, !0), o = I(e, "initialInvalid", 3, !1), c = I(e, "resizable", 3, !0), f = /* @__PURE__ */ Xe(e, [
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
  ]), h, b = fe({});
  tt(() => {
    s() && o() && d(m().matches(":invalid"));
  });
  function v() {
    l(!0), s() && d(m().matches(":invalid"));
  }
  function p(C) {
    return C in b ? b[C] ?? null : m().getAttribute(C);
  }
  function w(C, L) {
    b[C] !== L && (b[C] = L);
  }
  function _(C) {
    (!(C in b) || b[C] != null) && (b[C] = void 0);
  }
  function R() {
    m().focus();
  }
  function x() {
    m().blur();
  }
  function m() {
    return h;
  }
  var S = { getAttr: p, addAttr: w, removeAttr: _, focus: R, blur: x, getElement: m }, A = gu(), g = (C) => {
    var L;
    v(), (L = e.onchange) == null || L.call(e, C);
  };
  return We(
    A,
    (C) => ({
      class: C,
      style: `${c() ? "" : "resize: none; "}${a()}`,
      ...b,
      ...f,
      onchange: g
    }),
    [
      () => Be({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), ye(A, (C) => h = C, () => h), De(A, (C, L) => q == null ? void 0 : q(C, L), n), Hr(() => So(A, i)), y(t, A), pe(S);
}
var bu = /* @__PURE__ */ W('<span class="mdc-text-field__ripple"></span>'), mu = /* @__PURE__ */ W("<!> <!>", 1), _u = /* @__PURE__ */ W("<span><!> <!></span>"), Cu = /* @__PURE__ */ W("<!> <!> <!>", 1), yu = /* @__PURE__ */ W("<label><!> <!> <!> <!> <!> <!> <!></label>"), Iu = /* @__PURE__ */ W("<div><!> <!> <!> <!> <!></div>"), Au = /* @__PURE__ */ W("<!> <!>", 1);
function Ml(t, e) {
  ge(e, !0);
  const { applyPassive: n } = kl;
  let r = () => {
  };
  function a(K) {
    return K === r;
  }
  let i = I(e, "use", 19, () => []), l = I(e, "class", 3, ""), d = I(e, "style", 3, ""), s = I(e, "ripple", 3, !0), o = I(e, "disabled", 3, !1), c = I(e, "required", 3, !1), f = I(e, "textarea", 3, !1), h = I(e, "variant", 19, () => f() ? "outlined" : "standard"), b = I(e, "noLabel", 3, !1), v = I(e, "type", 3, "text"), p = I(e, "value", 15), w = I(e, "files", 15, r), _ = I(e, "invalid", 15, r), R = I(e, "updateInvalid", 19, () => a(_())), x = I(e, "initialInvalid", 3, !1), m = I(e, "dirty", 15, !1), S = I(e, "validateOnValueChange", 19, R), A = I(e, "useNativeValidation", 19, R), g = I(e, "withLeadingIcon", 3, r), C = I(e, "withTrailingIcon", 3, r), L = I(e, "input", 7), P = I(e, "floatingLabel", 7), F = I(e, "lineRipple", 7), z = I(e, "notchedOutline", 7), J = /* @__PURE__ */ Xe(e, [
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
  const be = p() !== void 0 || p() === void 0 && e.input$emptyValueUndefined || !a(w());
  a(w()) && w(null), a(_()) && _(!1);
  let k, Z = /* @__PURE__ */ Q(void 0), U = new ga(), B = fe({}), ne = fe({}), M = /* @__PURE__ */ Q(void 0), V = /* @__PURE__ */ Q(!1), $ = /* @__PURE__ */ Q(fe(x())), me = xe("SMUI:addLayoutListener"), he, re, ae = new Promise((K) => re = K), ue, Ee, Ze, nt;
  const He = /* @__PURE__ */ ie(() => L() && L().getElement());
  Pe(() => {
    (m() || u($) || !R()) && u(Z) && u(Z).isValid() !== !_() && (R() ? _(!u(Z).isValid()) : u(Z).setValid(!_()));
  }), Pe(() => {
    u(Z) && u(Z).getValidateOnValueChange() !== S() && u(Z).setValidateOnValueChange(a(S()) ? !1 : S());
  }), Pe(() => {
    u(Z) && u(Z).setUseNativeValidation(a(A()) ? !0 : A());
  }), Pe(() => {
    u(Z) && u(Z).setDisabled(o());
  });
  let ft = p();
  Pe(() => {
    if (u(Z) && be && ft !== p()) {
      ft = p();
      const K = `${p() == null ? "" : p()}`;
      u(Z).getValue() !== K && u(Z).setValue(K);
    }
  }), me && (he = me(E)), de("SMUI:textfield:leading-icon:mount", (K) => {
    ue = K;
  }), de("SMUI:textfield:leading-icon:unmount", () => {
    ue = void 0;
  }), de("SMUI:textfield:trailing-icon:mount", (K) => {
    Ee = K;
  }), de("SMUI:textfield:trailing-icon:unmount", () => {
    Ee = void 0;
  }), de("SMUI:textfield:helper-text:id", (K) => {
    T(M, K, !0);
  }), de("SMUI:textfield:helper-text:mount", (K) => {
    Ze = K;
  }), de("SMUI:textfield:helper-text:unmount", () => {
    T(M, void 0), Ze = void 0;
  }), de("SMUI:textfield:character-counter:mount", (K) => {
    nt = K;
  }), de("SMUI:textfield:character-counter:unmount", () => {
    nt = void 0;
  }), tt(() => {
    var K;
    if (T(
      Z,
      new nu(
        {
          // getRootAdapterMethods_
          addClass: Rt,
          removeClass: Ct,
          hasClass: Ot,
          registerTextFieldInteractionHandler: (Y, ke) => U.on(G(), Y, ke),
          deregisterTextFieldInteractionHandler: (Y, ke) => U.off(G(), Y, ke),
          registerValidationAttributeChangeHandler: (Y) => {
            const ke = (vt) => vt.map(($t) => $t.attributeName).filter(($t) => $t), Ye = new MutationObserver((vt) => {
              A() && Y(ke(vt));
            }), qe = { attributes: !0 };
            return L() && Ye.observe(L().getElement(), qe), Ye;
          },
          deregisterValidationAttributeChangeHandler: (Y) => {
            Y.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var Y;
            return ((Y = L()) == null ? void 0 : Y.getElement()) ?? null;
          },
          setInputAttr: (Y, ke) => {
            var Ye;
            (Ye = L()) == null || Ye.addAttr(Y, ke);
          },
          removeInputAttr: (Y) => {
            var ke;
            (ke = L()) == null || ke.removeAttr(Y);
          },
          isFocused: () => {
            var Y;
            return document.activeElement === ((Y = L()) == null ? void 0 : Y.getElement());
          },
          registerInputInteractionHandler: (Y, ke) => {
            var qe;
            const Ye = (qe = L()) == null ? void 0 : qe.getElement();
            if (Ye) {
              const vt = n();
              U.on(Ye, Y, ke, typeof vt == "boolean" ? { capture: vt } : vt);
            }
          },
          deregisterInputInteractionHandler: (Y, ke) => {
            var qe;
            const Ye = (qe = L()) == null ? void 0 : qe.getElement();
            Ye && U.off(Ye, Y, ke);
          },
          // getLabelAdapterMethods_
          floatLabel: (Y) => P() && P().float(Y),
          getLabelWidth: () => P() ? P().getWidth() : 0,
          hasLabel: () => !!P(),
          shakeLabel: (Y) => P() && P().shake(Y),
          setLabelRequired: (Y) => P() && P().setRequired(Y),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => F() && F().activate(),
          deactivateLineRipple: () => F() && F().deactivate(),
          setLineRippleTransformOrigin: (Y) => F() && F().setRippleCenter(Y),
          // getOutlineAdapterMethods_
          closeOutline: () => z() && z().closeNotch(),
          hasOutline: () => !!z(),
          notchOutline: (Y) => z() && z().notch(Y)
        },
        {
          get helperText() {
            return Ze;
          },
          get characterCounter() {
            return nt;
          },
          get leadingIcon() {
            return ue;
          },
          get trailingIcon() {
            return Ee;
          }
        }
      ),
      !0
    ), be) {
      if (L() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (K = u(Z)) == null || K.init();
    } else
      _l().then(() => {
        var Y;
        if (L() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (Y = u(Z)) == null || Y.init();
      });
    return re(), () => {
      var Y;
      (Y = u(Z)) == null || Y.destroy(), U.clear();
    };
  }), Wr(() => {
    he && he();
  });
  function Ot(K) {
    return K in B ? B[K] ?? null : G().classList.contains(K);
  }
  function Rt(K) {
    B[K] || (B[K] = !0);
  }
  function Ct(K) {
    (!(K in B) || B[K]) && (B[K] = !1);
  }
  function Qt(K, Y) {
    ne[K] != Y && (Y === "" || Y == null ? delete ne[K] : ne[K] = Y);
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
    if (u(Z)) {
      const K = u(Z).shouldFloat;
      u(Z).notchOutline(K);
    }
  }
  function G() {
    return k;
  }
  var X = { focus: br, blur: mr, layout: E, getElement: G }, Ce = Au(), rt = N(Ce);
  {
    var Yn = (K) => {
      var Y = yu();
      We(Y, (_e, Le, Te) => ({ class: _e, style: Le, for: void 0, ...Te }), [
        () => Be({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": o(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": h() === "filled",
          "mdc-text-field--outlined": h() === "outlined",
          "smui-text-field--standard": h() === "standard" && !f(),
          "mdc-text-field--no-label": b() || e.label == null,
          "mdc-text-field--label-floating": u(V) || p() != null && p() !== "",
          "mdc-text-field--with-leading-icon": a(g()) ? e.leadingIcon : g(),
          "mdc-text-field--with-trailing-icon": a(C()) ? e.trailingIcon : C(),
          "mdc-text-field--with-internal-counter": f() && e.internalCounter,
          "mdc-text-field--invalid": _(),
          ...B,
          [l()]: !0
        }),
        () => Object.entries(ne).map(([_e, Le]) => `${_e}: ${Le};`).concat([d()]).join(" "),
        () => Fa(J, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var ke = D(Y);
      {
        var Ye = (_e) => {
          var Le = mu(), Te = N(Le);
          {
            var yt = (Ue) => {
              var at = bu();
              y(Ue, at);
            };
            j(Te, (Ue) => {
              h() === "filled" && Ue(yt);
            });
          }
          var en = O(Te, 2);
          {
            var Me = (Ue) => {
              {
                let at = /* @__PURE__ */ ie(() => u(V) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), we = /* @__PURE__ */ ie(() => an(J, "label$"));
                ye(
                  Ti(Ue, xt(
                    {
                      get floatAbove() {
                        return u(at);
                      },
                      get required() {
                        return c();
                      },
                      wrapped: !0
                    },
                    () => u(we),
                    {
                      children: (it, Jn) => {
                        var Bt = ee(), Je = N(Bt);
                        {
                          var gt = (It) => {
                          }, tn = (It) => {
                            var Fr = ee(), Rn = N(Fr);
                            {
                              var Or = (on) => {
                                var En = _t();
                                te(() => Re(En, e.label)), y(on, En);
                              }, ba = (on) => {
                                var En = ee(), un = N(En);
                                se(un, () => e.label), y(on, En);
                              };
                              j(
                                Rn,
                                (on) => {
                                  typeof e.label == "string" ? on(Or) : on(ba, !1);
                                },
                                !0
                              );
                            }
                            y(It, Fr);
                          };
                          j(Je, (It) => {
                            e.label == null ? It(gt) : It(tn, !1);
                          });
                        }
                        y(it, Bt);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (it) => P(it),
                  () => P()
                );
              }
            };
            j(en, (Ue) => {
              !b() && e.label != null && Ue(Me);
            });
          }
          y(_e, Le);
        };
        j(ke, (_e) => {
          !f() && h() !== "outlined" && _e(Ye);
        });
      }
      var qe = O(ke, 2);
      {
        var vt = (_e) => {
          {
            let Le = /* @__PURE__ */ ie(() => b() || e.label == null), Te = /* @__PURE__ */ ie(() => an(J, "outline$"));
            ye(
              uu(_e, xt(
                {
                  get noLabel() {
                    return u(Le);
                  }
                },
                () => u(Te),
                {
                  children: (yt, en) => {
                    var Me = ee(), Ue = N(Me);
                    {
                      var at = (we) => {
                        {
                          let it = /* @__PURE__ */ ie(() => u(V) || p() != null && p() !== "" && (typeof p() != "number" || !isNaN(p()))), Jn = /* @__PURE__ */ ie(() => an(J, "label$"));
                          ye(
                            Ti(we, xt(
                              {
                                get floatAbove() {
                                  return u(it);
                                },
                                get required() {
                                  return c();
                                },
                                wrapped: !0
                              },
                              () => u(Jn),
                              {
                                children: (Bt, Je) => {
                                  var gt = ee(), tn = N(gt);
                                  {
                                    var It = (Rn) => {
                                    }, Fr = (Rn) => {
                                      var Or = ee(), ba = N(Or);
                                      {
                                        var on = (un) => {
                                          var Cr = _t();
                                          te(() => Re(Cr, e.label)), y(un, Cr);
                                        }, En = (un) => {
                                          var Cr = ee(), Yl = N(Cr);
                                          se(Yl, () => e.label), y(un, Cr);
                                        };
                                        j(
                                          ba,
                                          (un) => {
                                            typeof e.label == "string" ? un(on) : un(En, !1);
                                          },
                                          !0
                                        );
                                      }
                                      y(Rn, Or);
                                    };
                                    j(tn, (Rn) => {
                                      e.label == null ? Rn(It) : Rn(Fr, !1);
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
                      j(Ue, (we) => {
                        !b() && e.label != null && we(at);
                      });
                    }
                    y(yt, Me);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (yt) => z(yt),
              () => z()
            );
          }
        };
        j(qe, (_e) => {
          (f() || h() === "outlined") && _e(vt);
        });
      }
      var $t = O(qe, 2);
      jr($t, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (_e, Le) => {
          var Te = ee(), yt = N(Te);
          se(yt, () => e.leadingIcon ?? oe), y(_e, Te);
        },
        $$slots: { default: !0 }
      });
      var Zr = O($t, 2);
      se(Zr, () => e.children ?? oe);
      var Ge = O(Zr, 2);
      {
        var ht = (_e) => {
          var Le = _u(), Te = D(Le);
          {
            let en = /* @__PURE__ */ ie(() => an(J, "input$"));
            ye(
              pu(Te, xt(
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
                    return u($);
                  },
                  get "aria-controls"() {
                    return u(M);
                  },
                  get "aria-describedby"() {
                    return u(M);
                  }
                },
                () => u(en),
                {
                  onblur: (Me) => {
                    var Ue;
                    T(V, !1), T($, !0), bt(G(), "blur", Me), (Ue = e.input$onblur) == null || Ue.call(e, Me);
                  },
                  onfocus: (Me) => {
                    var Ue;
                    T(V, !0), bt(G(), "focus", Me), (Ue = e.input$onfocus) == null || Ue.call(e, Me);
                  },
                  get value() {
                    return p();
                  },
                  set value(Me) {
                    p(Me);
                  },
                  get dirty() {
                    return m();
                  },
                  set dirty(Me) {
                    m(Me);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(Me) {
                    _(Me);
                  }
                }
              )),
              (Me) => L(Me),
              () => L()
            );
          }
          var yt = O(Te, 2);
          se(yt, () => e.internalCounter ?? oe), te((en) => Cn(Le, 1, en), [
            () => Sl(Be({
              "mdc-text-field__resizer": !("input$resizable" in J) || e.input$resizable
            }))
          ]), y(_e, Le);
        }, Tt = (_e) => {
          var Le = Cu(), Te = N(Le);
          {
            var yt = (at) => {
              var we = ee(), it = N(we);
              {
                var Jn = (Je) => {
                  cu(Je, {
                    children: (gt, tn) => {
                      var It = _t();
                      te(() => Re(It, e.prefix)), y(gt, It);
                    },
                    $$slots: { default: !0 }
                  });
                }, Bt = (Je) => {
                  var gt = ee(), tn = N(gt);
                  se(tn, () => e.prefix ?? oe), y(Je, gt);
                };
                j(it, (Je) => {
                  typeof e.prefix == "string" ? Je(Jn) : Je(Bt, !1);
                });
              }
              y(at, we);
            };
            j(Te, (at) => {
              e.prefix != null && at(yt);
            });
          }
          var en = O(Te, 2);
          {
            let at = /* @__PURE__ */ ie(() => an(J, "input$"));
            ye(
              hu(en, xt(
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
                    return u($);
                  },
                  get "aria-controls"() {
                    return u(M);
                  },
                  get "aria-describedby"() {
                    return u(M);
                  }
                },
                () => b() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => u(at),
                {
                  onblur: (we) => {
                    var it;
                    T(V, !1), T($, !0), bt(G(), "blur", we), (it = e.input$onblur) == null || it.call(e, we);
                  },
                  onfocus: (we) => {
                    var it;
                    T(V, !0), bt(G(), "focus", we), (it = e.input$onfocus) == null || it.call(e, we);
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
                    return m();
                  },
                  set dirty(we) {
                    m(we);
                  },
                  get invalid() {
                    return _();
                  },
                  set invalid(we) {
                    _(we);
                  }
                }
              )),
              (we) => L(we),
              () => L()
            );
          }
          var Me = O(en, 2);
          {
            var Ue = (at) => {
              var we = ee(), it = N(we);
              {
                var Jn = (Je) => {
                  fu(Je, {
                    children: (gt, tn) => {
                      var It = _t();
                      te(() => Re(It, e.suffix)), y(gt, It);
                    },
                    $$slots: { default: !0 }
                  });
                }, Bt = (Je) => {
                  var gt = ee(), tn = N(gt);
                  se(tn, () => e.suffix ?? oe), y(Je, gt);
                };
                j(it, (Je) => {
                  typeof e.suffix == "string" ? Je(Jn) : Je(Bt, !1);
                });
              }
              y(at, we);
            };
            j(Me, (at) => {
              e.suffix != null && at(Ue);
            });
          }
          y(_e, Le);
        };
        j(Ge, (_e) => {
          f() && typeof p() == "string" ? _e(ht) : _e(Tt, !1);
        });
      }
      var qn = O(Ge, 2);
      jr(qn, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (_e, Le) => {
          var Te = ee(), yt = N(Te);
          se(yt, () => e.trailingIcon ?? oe), y(_e, Te);
        },
        $$slots: { default: !0 }
      });
      var zl = O(qn, 2);
      {
        var Xl = (_e) => {
          {
            let Le = /* @__PURE__ */ ie(() => an(J, "ripple$"));
            ye(lu(_e, xt(() => u(Le))), (Te) => F(Te), () => F());
          }
        };
        j(zl, (_e) => {
          !f() && h() !== "outlined" && s() && _e(Xl);
        });
      }
      ye(Y, (_e) => k = _e, () => k), De(Y, (_e, Le) => kn == null ? void 0 : kn(_e, Le), () => ({
        ripple: !f() && h() === "filled",
        unbounded: !1,
        addClass: Rt,
        removeClass: Ct,
        addStyle: Qt,
        eventTarget: u(He),
        activeTarget: u(He),
        initPromise: ae
      })), De(Y, (_e, Le) => q == null ? void 0 : q(_e, Le), i), y(K, Y);
    }, _r = (K) => {
      var Y = Iu();
      We(Y, (Ge, ht, Tt) => ({ class: Ge, style: ht, ...Tt }), [
        () => Be({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": o(),
          "mdc-text-field--textarea": f(),
          "mdc-text-field--filled": h() === "filled",
          "mdc-text-field--outlined": h() === "outlined",
          "smui-text-field--standard": h() === "standard" && !f(),
          "mdc-text-field--no-label": b() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": _(),
          ...B,
          [l()]: !0
        }),
        () => Object.entries(ne).map(([Ge, ht]) => `${Ge}: ${ht};`).concat([d()]).join(" "),
        () => Fa(J, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var ke = D(Y);
      {
        var Ye = (Ge) => {
          var ht = ee(), Tt = N(ht);
          se(Tt, () => e.label ?? oe), y(Ge, ht);
        };
        j(ke, (Ge) => {
          typeof e.label != "string" && Ge(Ye);
        });
      }
      var qe = O(ke, 2);
      jr(qe, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, ht) => {
          var Tt = ee(), qn = N(Tt);
          se(qn, () => e.leadingIcon ?? oe), y(Ge, Tt);
        },
        $$slots: { default: !0 }
      });
      var vt = O(qe, 2);
      se(vt, () => e.children ?? oe);
      var $t = O(vt, 2);
      jr($t, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, ht) => {
          var Tt = ee(), qn = N(Tt);
          se(qn, () => e.trailingIcon ?? oe), y(Ge, Tt);
        },
        $$slots: { default: !0 }
      });
      var Zr = O($t, 2);
      se(Zr, () => e.line ?? oe), ye(Y, (Ge) => k = Ge, () => k), De(Y, (Ge, ht) => kn == null ? void 0 : kn(Ge, ht), () => ({
        ripple: s(),
        unbounded: !1,
        addClass: Rt,
        removeClass: Ct,
        addStyle: Qt
      })), De(Y, (Ge, ht) => q == null ? void 0 : q(Ge, ht), i), y(K, Y);
    };
    j(rt, (K) => {
      be ? K(Yn) : K(_r, !1);
    });
  }
  var Vl = O(rt, 2);
  {
    var jl = (K) => {
      {
        let Y = /* @__PURE__ */ ie(() => an(J, "helperLine$"));
        du(K, xt(() => u(Y), {
          children: (ke, Ye) => {
            var qe = ee(), vt = N(qe);
            se(vt, () => e.helper ?? oe), y(ke, qe);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    j(Vl, (K) => {
      e.helper && K(jl);
    });
  }
  return y(t, Ce), pe(X);
}
const pa = On({
  component: null,
  props: {},
  isOpen: !1
});
function wu(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ Q(void 0), r = /* @__PURE__ */ Q(!1);
  const a = pa.subscribe((s) => {
    T(n, s, !0), T(r, s.isOpen, !0);
  });
  tt(() => () => a());
  var i = ee(), l = N(i);
  {
    var d = (s) => {
      var o = ee(), c = N(o);
      ai(c, () => u(n).component, (f, h) => {
        h(f, xt(() => u(n).props, {
          get open() {
            return u(r);
          },
          set open(b) {
            T(r, b, !0);
          }
        }));
      }), y(s, o);
    };
    j(l, (s) => {
      u(n).isOpen && u(n).component && s(d);
    });
  }
  y(t, i), pe();
}
function xu(t, e = {}) {
  return new Promise((n) => {
    pa.set({
      component: t,
      props: e,
      isOpen: !0,
      resolve: n
    });
  });
}
function Su(t, e) {
  pa.update((n) => {
    var r;
    return (r = n.resolve) == null || r.call(n, { type: t, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function Ru(t) {
  pa.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...t } } : e);
}
var Eu = /* @__PURE__ */ W('<span class="oscd-icon"><!></span>');
function Gt(t, e) {
  var n = Eu(), r = D(n);
  se(r, () => e.children ?? oe), y(t, n);
}
var Lu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Pu(t, e) {
  let n = I(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Lu();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
var ku = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Du(t, e) {
  let n = I(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = ku();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
var Gu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function Tu(t, e) {
  let n = I(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Gu();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
var Mu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function Hu(t, e) {
  let n = I(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Mu();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
Cs();
var Wu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24" fill="#004552"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function Zu(t) {
  var e = Wu();
  y(t, e);
}
var Fu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Ou(t) {
  var e = Fu();
  y(t, e);
}
var Bu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function Nu(t, e) {
  let n = I(e, "size", 3, "24px"), r = I(e, "fill", 3, "#004552");
  var a = Bu();
  te(() => {
    Ft(a, "height", n()), Ft(a, "width", n()), Ft(a, "fill", r());
  }), y(t, a);
}
var Uu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Vu(t, e) {
  let n = I(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Uu();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
var ju = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function zu(t, e) {
  let n = I(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = ju();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
var Xu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"></path></svg>');
function Yu(t, e) {
  let n = I(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Xu();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
var qu = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"></path></svg>');
function Ju(t, e) {
  let n = I(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = qu();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
var Ku = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"></path></svg>');
function Qu(t, e) {
  let n = I(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = Ku();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
var $u = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Hl(t, e) {
  let n = I(e, "svgStyles", 8, "");
  Gt(t, {
    children: (r, a) => {
      var i = $u();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
var ed = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function td(t, e) {
  let n = I(e, "svgStyles", 8, "");
  Gt(t, {
    children: (r, a) => {
      var i = ed();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
ze(["change"]);
ze(["change"]);
var nd = /* @__PURE__ */ W('<span role="tooltip" aria-labelledby="tooltip"><!></span>');
function rd(t, e) {
  ge(e, !0);
  let n = I(e, "content", 3, ""), r = I(e, "side", 3, "top"), a = I(e, "hoverDelay", 3, 0), i = I(e, "transitionDuration", 3, 80);
  const l = `tt-${Math.random().toString(36).slice(2)}`;
  let d = /* @__PURE__ */ Q(null), s = /* @__PURE__ */ Q(null), o = /* @__PURE__ */ Q(null), c = /* @__PURE__ */ Q(null), f = /* @__PURE__ */ Q(!1), h = /* @__PURE__ */ Q(null), b = /* @__PURE__ */ Q(null);
  function v() {
    n() && (a() > 0 ? T(h, setTimeout(() => T(f, !0), a()), !0) : T(f, !0));
  }
  function p() {
    u(h) && clearTimeout(u(h)), T(f, !1);
  }
  function w() {
    if (!u(s) || !u(c) || !u(d)) return;
    const m = u(d).getBoundingClientRect(), S = u(c).getBoundingClientRect();
    let A = 0, g = 0;
    const C = 8;
    switch (r()) {
      case "top":
        A = m.top - S.height - C, g = m.left + m.width / 2 - S.width / 2;
        break;
      case "bottom":
        A = m.bottom + C, g = m.left + m.width / 2 - S.width / 2;
        break;
      case "left":
        A = m.top + m.height / 2 - S.height / 2, g = m.left - S.width - C;
        break;
      case "right":
        A = m.top + m.height / 2 - S.height / 2, g = m.right + C;
        break;
    }
    u(s).style.top = `${A + window.scrollY}px`, u(s).style.left = `${g + window.scrollX}px`;
  }
  function _() {
    var m;
    (m = u(b)) == null || m.disconnect(), T(b, null), u(s) && u(s).parentNode && u(s).parentNode.removeChild(u(s)), T(s, null), T(c, null), T(o, null), u(h) && clearTimeout(u(h));
  }
  Wr(_), Pe(() => {
    if (!(!u(f) || !n())) {
      if (!u(s)) {
        T(s, document.createElement("div"), !0), u(s).style.position = "absolute", u(s).style.zIndex = "9999", u(s).style.pointerEvents = "none", u(s).style.opacity = "0", u(s).style.transition = `opacity ${i()}ms ease`, u(s).id = l, u(s).setAttribute("role", "tooltip"), document.body.appendChild(u(s)), T(o, u(s).attachShadow({ mode: "open" }), !0);
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
      `, u(o).appendChild(m), T(c, document.createElement("div"), !0), u(o).appendChild(u(c)), T(
          b,
          new MutationObserver(() => {
            u(f) && w();
          }),
          !0
        ), u(b).observe(document.body, { childList: !0, subtree: !0 });
      }
      u(c) && (u(c).className = `bubble ${r()}`, u(c).innerHTML = n()), u(s) && (u(s).style.opacity = "1", w());
    }
  }), Pe(() => {
    if (u(f) || !u(s))
      return;
    u(s).style.opacity = "0";
    const m = u(s), S = setTimeout(
      () => {
        m && m.parentNode && m.parentNode.removeChild(m), u(s) === m && _();
      },
      i()
    );
    return () => clearTimeout(S);
  });
  var R = nd(), x = D(R);
  se(x, () => e.children ?? oe), ye(R, (m) => T(d, m), () => u(d)), te(() => Ft(R, "aria-describedby", n() ? l : void 0)), mi("mouseenter", R, v), mi("mouseleave", R, p), y(t, R), pe();
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
var ad = (
  /** @class */
  function(t) {
    gr(e, t);
    function e(n) {
      return t.call(this, ut(ut({}, e.defaultAdapter), n)) || this;
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
      return To(this, void 0, void 0, function() {
        return Mo(this, function(n) {
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
      var d = this.adapter.getAttributeByHeaderCellIndex(a, Pn.ARIA_SORT), s = wt.NONE;
      d === wt.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(a, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, Pn.ARIA_SORT, wt.DESCENDING), s = wt.DESCENDING) : d === wt.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(a, nn.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(a, Pn.ARIA_SORT, wt.ASCENDING), s = wt.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(a, Pn.ARIA_SORT, wt.ASCENDING), s = wt.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(a, s), this.adapter.notifySortAction({
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
), id = /* @__PURE__ */ W('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), ld = /* @__PURE__ */ W("<div><div><table><!></table></div> <!> <!></div>");
function sd(t, e) {
  ge(e, !0);
  const n = () => Wa(J, "$progressClosed", r), [r, a] = li(), { closest: i } = Gl;
  let l = I(e, "use", 19, () => []), d = I(e, "class", 3, ""), s = I(e, "stickyHeader", 3, !1), o = I(e, "sortable", 3, !1), c = I(e, "sort", 15, null), f = I(e, "sortDirection", 15, "ascending"), h = I(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), b = I(e, "sortDescendingAriaLabel", 3, "sorted, descending"), v = I(e, "container$use", 19, () => []), p = I(e, "container$class", 3, ""), w = I(e, "table$use", 19, () => []), _ = I(e, "table$class", 3, ""), R = /* @__PURE__ */ Xe(e, [
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
  ]), x, m = /* @__PURE__ */ Q(void 0), S, A = /* @__PURE__ */ Q(void 0), g = /* @__PURE__ */ Q(void 0), C = fe({}), L = /* @__PURE__ */ Q(fe({ height: "auto", top: "initial" })), P = xe("SMUI:addLayoutListener"), F, z = !1, J = On(!1), be = On(c());
  Pe(() => {
    Za(be, c());
  });
  let k = On(f());
  Pe(() => {
    Za(k, f());
  }), de("SMUI:checkbox:context", "data-table"), de("SMUI:linear-progress:context", "data-table"), de("SMUI:linear-progress:closed", J), de("SMUI:data-table:sortable", o()), de("SMUI:data-table:sort", be), de("SMUI:data-table:sortDirection", k), de("SMUI:data-table:sortAscendingAriaLabel", h()), de("SMUI:data-table:sortDescendingAriaLabel", b()), P && (F = P(he));
  let Z;
  Pe(() => {
    e.progress && u(m) && Z !== n() && (Z = n(), n() ? u(m).hideProgress() : u(m).showProgress());
  }), de("SMUI:checkbox:mount", () => {
    u(m) && z && u(m).layout();
  }), de("SMUI:data-table:header:mount", (E) => {
    T(A, E, !0);
  }), de("SMUI:data-table:header:unmount", () => {
    T(A, void 0);
  }), de("SMUI:data-table:body:mount", (E) => {
    T(g, E, !0);
  }), de("SMUI:data-table:body:unmount", () => {
    T(g, void 0);
  }), tt(() => (T(
    m,
    new ad({
      addClass: B,
      removeClass: ne,
      getHeaderCellElements: () => {
        var E;
        return ((E = u(A)) == null ? void 0 : E.cells.map((G) => G.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var E;
        return ((E = u(A)) == null ? void 0 : E.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (E, G) => {
        var X;
        return ((X = u(A)) == null ? void 0 : X.orderedCells[E].getAttr(G)) ?? null;
      },
      setAttributeByHeaderCellIndex: (E, G, X) => {
        var Ce;
        (Ce = u(A)) == null || Ce.orderedCells[E].addAttr(G, X);
      },
      setClassNameByHeaderCellIndex: (E, G) => {
        var X;
        (X = u(A)) == null || X.orderedCells[E].addClass(G);
      },
      removeClassNameByHeaderCellIndex: (E, G) => {
        var X;
        (X = u(A)) == null || X.orderedCells[E].removeClass(G);
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
        T(L, E, !0);
      },
      addClassAtRowIndex: (E, G) => {
        var X;
        (X = u(g)) == null || X.orderedRows[E].addClass(G);
      },
      getRowCount: () => {
        var E;
        return ((E = u(g)) == null ? void 0 : E.rows.length) ?? 0;
      },
      getRowElements: () => {
        var E;
        return ((E = u(g)) == null ? void 0 : E.rows.map((G) => G.element)) ?? [];
      },
      getRowIdAtIndex: (E) => {
        var G;
        return ((G = u(g)) == null ? void 0 : G.orderedRows[E].rowId) ?? null;
      },
      getRowIndexByChildElement: (E) => {
        var G;
        return ((G = u(g)) == null ? void 0 : G.orderedRows.map((X) => X.element).indexOf(i(E, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var E;
        return ((E = u(g)) == null ? void 0 : E.rows.filter((G) => G.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (E) => {
        var X;
        const G = (X = u(g)) == null ? void 0 : X.orderedRows[E].checkbox;
        return G ? G.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var G;
        const E = (G = u(A)) == null ? void 0 : G.checkbox;
        return E ? E.checked : !1;
      },
      isRowsSelectable: () => !!re().querySelector(".mdc-data-table__row-checkbox") || !!re().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (E) => {
        var X;
        const G = (X = u(g)) == null ? void 0 : X.orderedRows[E.rowIndex];
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
        var X;
        (X = u(g)) == null || X.orderedRows[E].removeClass(G);
      },
      setAttributeAtRowIndex: (E, G, X) => {
        var Ce;
        (Ce = u(g)) == null || Ce.orderedRows[E].addAttr(G, X);
      },
      setHeaderRowCheckboxChecked: (E) => {
        var X;
        const G = (X = u(A)) == null ? void 0 : X.checkbox;
        G && (G.checked = E);
      },
      setHeaderRowCheckboxIndeterminate: M,
      setRowCheckboxCheckedAtIndex: (E, G) => {
        var Ce;
        const X = (Ce = u(g)) == null ? void 0 : Ce.orderedRows[E].checkbox;
        X && (X.checked = G);
      },
      setSortStatusLabelByHeaderCellIndex: (E, G) => {
      }
    }),
    !0
  ), u(m).init(), u(m).layout(), z = !0, () => {
    var E;
    (E = u(m)) == null || E.destroy();
  })), Wr(() => {
    F && F();
  });
  function U(E) {
    u(m) && u(m).handleRowCheckboxChange(E);
  }
  function B(E) {
    C[E] || (C[E] = !0);
  }
  function ne(E) {
    (!(E in C) || C[E]) && (C[E] = !1);
  }
  function M(E) {
    var X;
    const G = (X = u(A)) == null ? void 0 : X.checkbox;
    G && (G.indeterminate = E);
  }
  function V(E) {
    if (!u(m) || !E.detail.target)
      return;
    const G = i(E.detail.target, ".mdc-data-table__header-cell--with-sort");
    G && me(G);
  }
  function $(E) {
    if (!u(m) || !E.detail.target)
      return;
    const G = i(E.detail.target, ".mdc-data-table__row");
    G && u(m) && u(m).handleRowClick({ rowId: E.detail.rowId, row: G });
  }
  function me(E) {
    var rt, Yn;
    const G = ((rt = u(A)) == null ? void 0 : rt.orderedCells) ?? [], X = G.map((_r) => _r.element).indexOf(E);
    if (X === -1)
      return;
    const Ce = G[X].columnId ?? null;
    (Yn = u(m)) == null || Yn.handleSortAction({ columnId: Ce, columnIndex: X, headerCell: E });
  }
  function he() {
    var E;
    return (E = u(m)) == null ? void 0 : E.layout();
  }
  function re() {
    return x;
  }
  var ae = { layout: he, getElement: re }, ue = ld(), Ee = (E) => {
    var G;
    u(m) && u(m).handleHeaderRowCheckboxChange(), (G = e.onSMUIDataTableHeaderCheckboxChange) == null || G.call(e, E);
  }, Ze = (E) => {
    var G;
    V(E), (G = e.onSMUIDataTableHeaderClick) == null || G.call(e, E);
  }, nt = (E) => {
    var G;
    $(E), (G = e.onSMUIDataTableRowClick) == null || G.call(e, E);
  }, He = (E) => {
    var G;
    U(E), (G = e.onSMUIDataTableBodyCheckboxChange) == null || G.call(e, E);
  };
  We(
    ue,
    (E, G) => ({
      class: E,
      ...G,
      onSMUIDataTableHeaderCheckboxChange: Ee,
      onSMUIDataTableHeaderClick: Ze,
      onSMUIDataTableRowClick: nt,
      onSMUIDataTableBodyCheckboxChange: He
    }),
    [
      () => Be({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": s(),
        ...C,
        [d()]: !0
      }),
      () => Fa(R, ["container$", "table$"])
    ]
  );
  var ft = D(ue);
  We(ft, (E, G) => ({ class: E, ...G }), [
    () => Be({
      "mdc-data-table__table-container": !0,
      [p()]: !0
    }),
    () => an(R, "container$")
  ]);
  var Ot = D(ft);
  We(Ot, (E, G) => ({ class: E, ...G }), [
    () => Be({ "mdc-data-table__table": !0, [_()]: !0 }),
    () => an(R, "table$")
  ]);
  var Rt = D(Ot);
  se(Rt, () => e.children ?? oe), De(Ot, (E, G) => q == null ? void 0 : q(E, G), w), ye(ft, (E) => S = E, () => S), De(ft, (E, G) => q == null ? void 0 : q(E, G), v);
  var Ct = O(ft, 2);
  {
    var Qt = (E) => {
      var G = id(), X = O(D(G), 2);
      se(X, () => e.progress ?? oe), te((Ce) => Ne(G, Ce), [
        () => Object.entries(u(L)).map(([Ce, rt]) => `${Ce}: ${rt};`).join(" ")
      ]), y(E, G);
    };
    j(Ct, (E) => {
      e.progress && E(Qt);
    });
  }
  var br = O(Ct, 2);
  se(br, () => e.paginate ?? oe), ye(ue, (E) => x = E, () => x), De(ue, (E, G) => q == null ? void 0 : q(E, G), l), y(t, ue);
  var mr = pe(ae);
  return a(), mr;
}
var od = /* @__PURE__ */ W("<thead><!></thead>");
function ud(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = /* @__PURE__ */ Xe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), a, i = /* @__PURE__ */ Q(void 0), l = [];
  const d = /* @__PURE__ */ new WeakMap();
  de("SMUI:data-table:row:header", !0);
  const s = xe("SMUI:checkbox:mount");
  de("SMUI:checkbox:mount", (_) => {
    T(i, _, !0), s && s(_);
  });
  const o = xe("SMUI:checkbox:unmount");
  de("SMUI:checkbox:unmount", (_) => {
    T(i, void 0), o && o(_);
  }), de("SMUI:data-table:cell:mount", (_) => {
    l.push(_), d.set(_.element, _);
  }), de("SMUI:data-table:cell:unmount", (_) => {
    const R = l.findIndex((x) => x === _);
    R !== -1 && l.splice(R, 1), d.delete(_.element);
  });
  const c = xe("SMUI:data-table:header:mount"), f = xe("SMUI:data-table:header:unmount");
  tt(() => {
    const _ = {
      get cells() {
        return l;
      },
      get orderedCells() {
        return h();
      },
      get checkbox() {
        return u(i);
      }
    };
    return c && c(_), () => {
      f && f(_);
    };
  });
  function h() {
    return [
      ...b().querySelectorAll(".mdc-data-table__header-cell")
    ].map((_) => d.get(_)).filter((_) => _ && _._smui_data_table_header_cell_accessor);
  }
  function b() {
    return a;
  }
  var v = { getElement: b }, p = od();
  We(p, () => ({ ...r }));
  var w = D(p);
  return se(w, () => e.children ?? oe), ye(p, (_) => a = _, () => a), De(p, (_, R) => q == null ? void 0 : q(_, R), n), y(t, p), pe(v);
}
var dd = /* @__PURE__ */ W("<tbody><!></tbody>");
function cd(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), i, l = [];
  const d = /* @__PURE__ */ new WeakMap();
  de("SMUI:data-table:row:header", !1), de("SMUI:data-table:row:mount", (p) => {
    l.push(p), d.set(p.element, p);
  }), de("SMUI:data-table:row:unmount", (p) => {
    const w = l.findIndex((_) => _ === p);
    w !== -1 && l.splice(w, 1), d.delete(p.element);
  });
  const s = xe("SMUI:data-table:body:mount"), o = xe("SMUI:data-table:body:unmount");
  tt(() => {
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
    return [...f().querySelectorAll(".mdc-data-table__row")].map((p) => d.get(p)).filter((p) => p && p._smui_data_table_row_accessor);
  }
  function f() {
    return i;
  }
  var h = { getElement: f }, b = dd();
  We(b, (p) => ({ class: p, ...a }), [
    () => Be({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var v = D(b);
  return se(v, () => e.children ?? oe), ye(b, (p) => i = p, () => i), De(b, (p, w) => q == null ? void 0 : q(p, w), n), y(t, b), pe(h);
}
let fd = 0;
var vd = /* @__PURE__ */ W("<tr><!></tr>");
function Hi(t, e) {
  ge(e, !0);
  let n = I(e, "use", 19, () => []), r = I(e, "class", 3, ""), a = I(e, "rowId", 19, () => "SMUI-data-table-row-" + fd++), i = /* @__PURE__ */ Xe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), l, d = /* @__PURE__ */ Q(void 0), s = fe({}), o = fe({}), c = xe("SMUI:data-table:row:header");
  const f = xe("SMUI:checkbox:mount");
  de("SMUI:checkbox:mount", (P) => {
    T(d, P, !0), f && f(P);
  });
  const h = xe("SMUI:checkbox:unmount");
  de("SMUI:checkbox:unmount", (P) => {
    T(d, void 0), h && h(P);
  });
  const b = xe("SMUI:data-table:row:mount"), v = xe("SMUI:data-table:row:unmount");
  tt(() => {
    const P = c ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return S();
      },
      get checkbox() {
        return u(d);
      },
      get rowId() {
      },
      get selected() {
        return (u(d) && u(d).checked) ?? !1;
      },
      addClass: p,
      removeClass: w,
      getAttr: _,
      addAttr: R
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return S();
      },
      get checkbox() {
        return u(d);
      },
      get rowId() {
        return a();
      },
      get selected() {
        return (u(d) && u(d).checked) ?? !1;
      },
      addClass: p,
      removeClass: w,
      getAttr: _,
      addAttr: R
    };
    return b && b(P), () => {
      v && v(P);
    };
  });
  function p(P) {
    s[P] || (s[P] = !0);
  }
  function w(P) {
    (!(P in s) || s[P]) && (s[P] = !1);
  }
  function _(P) {
    return P in o ? o[P] ?? null : S().getAttribute(P);
  }
  function R(P, F) {
    o[P] !== F && (o[P] = F);
  }
  function x(P) {
    bt(S(), "SMUIDataTableHeaderClick", P);
  }
  function m(P) {
    bt(S(), "SMUIDataTableRowClick", { rowId: a(), target: P.target });
  }
  function S() {
    return l;
  }
  var A = { getElement: S }, g = vd(), C = (P) => {
    var F;
    c ? x(P) : m(P), (F = e.onclick) == null || F.call(e, P);
  };
  We(
    g,
    (P) => ({
      class: P,
      "aria-selected": u(d) ? u(d).checked ? "true" : "false" : void 0,
      ...o,
      ...i,
      onclick: C
    }),
    [
      () => Be({
        "mdc-data-table__header-row": c,
        "mdc-data-table__row": !c,
        "mdc-data-table__row--selected": !c && u(d) && u(d).checked,
        ...s,
        [r()]: !0
      })
    ]
  );
  var L = D(g);
  return se(L, () => e.children ?? oe), ye(g, (P) => l = P, () => l), De(g, (P, F) => q == null ? void 0 : q(P, F), n), y(t, g), pe(A);
}
let hd = 0;
var gd = /* @__PURE__ */ W('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), pd = /* @__PURE__ */ W("<th><!></th>"), bd = /* @__PURE__ */ W("<td><!></td>");
function zr(t, e) {
  ge(e, !0);
  const n = () => Wa(_, "$sort", a), r = () => Wa(R, "$sortDirection", a), [a, i] = li();
  let l = xe("SMUI:data-table:row:header"), d = I(e, "use", 19, () => []), s = I(e, "class", 3, ""), o = I(e, "numeric", 3, !1), c = I(e, "checkbox", 3, !1), f = I(e, "columnId", 19, () => l ? "SMUI-data-table-column-" + hd++ : "SMUI-data-table-unused"), h = I(e, "sortable", 19, () => xe("SMUI:data-table:sortable")), b = /* @__PURE__ */ Xe(e, [
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
  ]), v, p = fe({}), w = fe({}), _ = xe("SMUI:data-table:sort"), R = xe("SMUI:data-table:sortDirection"), x = xe("SMUI:data-table:sortAscendingAriaLabel"), m = xe("SMUI:data-table:sortDescendingAriaLabel");
  h() && (de("SMUI:label:context", "data-table:sortable-header-cell"), de("SMUI:icon-button:context", "data-table:sortable-header-cell"), de("SMUI:icon-button:aria-describedby", f() + "-status-label"));
  const S = xe("SMUI:data-table:cell:mount"), A = xe("SMUI:data-table:cell:unmount");
  tt(() => {
    const M = l ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return J();
      },
      get columnId() {
        return f();
      },
      addClass: g,
      removeClass: C,
      getAttr: L,
      addAttr: P
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return J();
      },
      get columnId() {
      },
      addClass: g,
      removeClass: C,
      getAttr: L,
      addAttr: P
    };
    return S && S(M), () => {
      A && A(M);
    };
  });
  function g(M) {
    p[M] || (p[M] = !0);
  }
  function C(M) {
    (!(M in p) || p[M]) && (p[M] = !1);
  }
  function L(M) {
    return M in w ? w[M] ?? null : J().getAttribute(M);
  }
  function P(M, V) {
    w[M] !== V && (w[M] = V);
  }
  function F(M) {
    bt(J(), "SMUIDataTableHeaderCheckboxChange", M);
  }
  function z(M) {
    bt(J(), "SMUIDataTableBodyCheckboxChange", M);
  }
  function J() {
    return v;
  }
  var be = { getElement: J }, k = ee(), Z = N(k);
  {
    var U = (M) => {
      var V = pd(), $ = (ae) => {
        var ue;
        c() && F(ae), (ue = e.onchange) == null || ue.call(e, ae);
      };
      We(
        V,
        (ae) => ({
          class: ae,
          role: "columnheader",
          scope: "col",
          "data-column-id": f(),
          "aria-sort": h() ? n() === f() ? r() : "none" : void 0,
          ...w,
          ...b,
          onchange: $
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
      var me = D(V);
      {
        var he = (ae) => {
          var ue = gd(), Ee = D(ue);
          se(Ee, () => e.children ?? oe);
          var Ze = O(Ee, 2), nt = D(Ze);
          te(() => {
            Ft(Ze, "id", `${f() ?? ""}-status-label`), Re(nt, n() === f() ? r() === "ascending" ? x : m : "");
          }), y(ae, ue);
        }, re = (ae) => {
          var ue = ee(), Ee = N(ue);
          se(Ee, () => e.children ?? oe), y(ae, ue);
        };
        j(me, (ae) => {
          h() ? ae(he) : ae(re, !1);
        });
      }
      ye(V, (ae) => v = ae, () => v), De(V, (ae, ue) => q == null ? void 0 : q(ae, ue), d), y(M, V);
    }, B = (M) => {
      var V = bd(), $ = (he) => {
        var re;
        c() && z(he), (re = e.onchange) == null || re.call(e, he);
      };
      We(
        V,
        (he) => ({
          class: he,
          ...w,
          ...b,
          onchange: $
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
      var me = D(V);
      se(me, () => e.children ?? oe), ye(V, (he) => v = he, () => v), De(V, (he, re) => q == null ? void 0 : q(he, re), d), y(M, V);
    };
    j(Z, (M) => {
      l ? M(U) : M(B, !1);
    });
  }
  y(t, k);
  var ne = pe(be);
  return i(), ne;
}
var md = /* @__PURE__ */ W('<p class="status svelte-185z1ay">Loading…</p>'), _d = /* @__PURE__ */ W('<p class="status error svelte-185z1ay"> </p>'), Cd = /* @__PURE__ */ W('<p class="status svelte-185z1ay"> </p>'), yd = /* @__PURE__ */ W("<!> <!>", 1), Id = /* @__PURE__ */ W("<!> <!>", 1), Ad = /* @__PURE__ */ W("<!> <!>", 1);
function wd(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ Q(null), r = I(e, "items", 19, () => []), a = I(e, "columns", 19, () => []), i = I(e, "loading", 3, !1), l = I(e, "errorMsg", 3, ""), d = I(e, "emptyText", 3, "Nothing to show."), s = I(e, "getRowId", 3, (_, R) => (_ && (_.id ?? _.key)) ?? R), o = I(e, "headerBg", 3, null), c = I(e, "rowBg", 3, null), f = I(e, "hasActions", 3, !1), h = /* @__PURE__ */ ie(() => f() || !!e.actions);
  var b = ee(), v = N(b);
  {
    var p = (_) => {
      var R = md();
      y(_, R);
    }, w = (_) => {
      var R = ee(), x = N(R);
      {
        var m = (A) => {
          var g = _d(), C = D(g);
          te(() => Re(C, l())), y(A, g);
        }, S = (A) => {
          var g = ee(), C = N(g);
          {
            var L = (F) => {
              var z = Cd(), J = D(z);
              te(() => Re(J, d())), y(F, z);
            }, P = (F) => {
              sd(F, {
                style: "width: 100%;",
                children: (z, J) => {
                  var be = Ad(), k = N(be);
                  {
                    let U = /* @__PURE__ */ ie(() => o() ? `background-color:${o()}` : void 0);
                    ud(k, {
                      get style() {
                        return u(U);
                      },
                      children: (B, ne) => {
                        Hi(B, {
                          children: (M, V) => {
                            var $ = yd(), me = N($);
                            Zt(me, 17, a, qt, (ae, ue) => {
                              {
                                let Ee = /* @__PURE__ */ ie(() => [
                                  u(ue).width ? `width:${u(ue).width}` : "",
                                  o() ? `background-color:${o()}` : ""
                                ].filter(Boolean).join(";"));
                                zr(ae, {
                                  header: !0,
                                  get style() {
                                    return u(Ee);
                                  },
                                  children: (Ze, nt) => {
                                    var He = _t();
                                    te(() => Re(He, u(ue).header)), y(Ze, He);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var he = O(me, 2);
                            {
                              var re = (ae) => {
                                {
                                  let ue = /* @__PURE__ */ ie(() => o() ? `background-color:${o()}` : void 0);
                                  zr(ae, {
                                    header: !0,
                                    get style() {
                                      return u(ue);
                                    }
                                  });
                                }
                              };
                              j(he, (ae) => {
                                u(h) && ae(re);
                              });
                            }
                            y(M, $);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var Z = O(k, 2);
                  cd(Z, {
                    children: (U, B) => {
                      var ne = ee(), M = N(ne);
                      Zt(M, 19, r, (V, $) => s()(V, $), (V, $, me) => {
                        {
                          let he = /* @__PURE__ */ ie(() => [
                            c() ? `background-color:${c()}` : "",
                            u(n) === s()(u($), u(me)) ? "background-color:#D9D800" : ""
                          ].filter(Boolean).join(";"));
                          Hi(V, {
                            get style() {
                              return u(he);
                            },
                            $$events: {
                              mouseenter: () => T(n, s()(u($), u(me)), !0),
                              mouseleave: () => T(n, null)
                            },
                            children: (re, ae) => {
                              var ue = Id(), Ee = N(ue);
                              Zt(Ee, 17, a, qt, (He, ft) => {
                                zr(He, {
                                  children: (Ot, Rt) => {
                                    var Ct = _t();
                                    te(() => {
                                      var Qt;
                                      return Re(Ct, ((Qt = u($)) == null ? void 0 : Qt[u(ft).key]) ?? "");
                                    }), y(Ot, Ct);
                                  },
                                  $$slots: { default: !0 }
                                });
                              });
                              var Ze = O(Ee, 2);
                              {
                                var nt = (He) => {
                                  zr(He, {
                                    numeric: !0,
                                    children: (ft, Ot) => {
                                      var Rt = ee(), Ct = N(Rt);
                                      se(Ct, () => e.actions ?? oe, () => ({ item: u($) })), y(ft, Rt);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                j(Ze, (He) => {
                                  u(h) && He(nt);
                                });
                              }
                              y(re, ue);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), y(U, ne);
                    },
                    $$slots: { default: !0 }
                  }), y(z, be);
                },
                $$slots: { default: !0 }
              });
            };
            j(
              C,
              (F) => {
                !r() || r().length === 0 ? F(L) : F(P, !1);
              },
              !0
            );
          }
          y(A, g);
        };
        j(
          x,
          (A) => {
            l() ? A(m) : A(S, !1);
          },
          !0
        );
      }
      y(_, R);
    };
    j(v, (_) => {
      i() ? _(p) : _(w, !1);
    });
  }
  y(t, b), pe();
}
var xd = /* @__PURE__ */ et('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function Sd(t, e) {
  let n = I(e, "svgStyles", 3, "");
  Gt(t, {
    children: (r, a) => {
      var i = xd();
      te(() => Ne(i, n())), y(r, i);
    }
  });
}
var Rd = /* @__PURE__ */ W('<span class="secondary-label svelte-17mxdlc"> </span>'), Ed = /* @__PURE__ */ W('<div class="seperator svelte-17mxdlc"><!></div>'), Ld = /* @__PURE__ */ W('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), Pd = /* @__PURE__ */ W('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function kd(t, e) {
  ge(e, !0);
  let n = I(e, "breadcrumbs", 19, () => []), r = I(e, "activeIndex", 3, 0);
  const a = (l) => {
    var s;
    const d = n()[l];
    !(d != null && d.enabled) || l === r() || (s = e.handleClick) == null || s.call(e, l);
  };
  var i = Pd();
  Zt(i, 21, n, qt, (l, d, s) => {
    var o = Ld(), c = D(o);
    let f;
    c.__click = () => a(s);
    let h;
    var b = D(c), v = D(b), p = O(b, 2);
    {
      var w = (x) => {
        var m = Rd();
        let S;
        var A = D(m);
        te(
          (g) => {
            S = Ne(m, "", S, g), Re(A, u(d).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), y(x, m);
      };
      j(p, (x) => {
        u(d).secondaryLabel && x(w);
      });
    }
    var _ = O(c, 2);
    {
      var R = (x) => {
        var m = Ed(), S = D(m);
        {
          let A = /* @__PURE__ */ ie(() => e.color ? e.color : "#004552");
          Sd(S, {
            get svgStyles() {
              return `fill: ${u(A) ?? ""}`;
            }
          });
        }
        y(x, m);
      };
      j(_, (x) => {
        s < n().length - 1 && x(R);
      });
    }
    te(
      (x, m) => {
        f = Cn(c, 1, "breadcrumb svelte-17mxdlc", null, f, x), Ft(c, "aria-current", s === r() ? "page" : void 0), h = Ne(c, "", h, m), Re(v, u(d).label);
      },
      [
        () => ({
          "br-disabled": !u(d).enabled,
          "br-active": s === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), y(l, o);
  }), y(t, i), pe();
}
ze(["click"]);
ze(["click"]);
function Ba(t, e, n) {
  return e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var Dd = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
});
Ba({}, Dd.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
var Xr, Wi = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
};
Xr = {}, Ba(Xr, Wi.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), Ba(Xr, Wi.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list");
const Gd = On([]);
Gd.subscribe;
ze(["click", "pointerdown", "pointerup", "pointermove"]);
var Td = /* @__PURE__ */ W("<div><!></div>");
function Na(t, e) {
  let n = I(e, "variant", 3, "secondary");
  var r = Td(), a = D(r);
  mo(a, e, "default", {}), te(() => Cn(r, 1, `osc-card osc-card--${n()}`, "svelte-14hhvrx")), y(t, r);
}
var Md = /* @__PURE__ */ W('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), Hd = /* @__PURE__ */ W('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), Wd = /* @__PURE__ */ W('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), Zd = /* @__PURE__ */ W('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function Wl(t, e) {
  let n = I(e, "backgroundColor", 3, "");
  var r = Zd(), a = D(r);
  {
    var i = (c) => {
      var f = Md(), h = D(f);
      se(h, () => e.header), y(c, f);
    };
    j(a, (c) => {
      e.header && c(i);
    });
  }
  var l = O(a, 2);
  {
    var d = (c) => {
      var f = Hd(), h = D(f);
      se(h, () => e.content), y(c, f);
    };
    j(l, (c) => {
      e.content && c(d);
    });
  }
  var s = O(l, 2);
  {
    var o = (c) => {
      var f = Wd(), h = D(f);
      se(h, () => e.additional), y(c, f);
    };
    j(s, (c) => {
      e.additional && c(o);
    });
  }
  te(() => Ne(r, `--bg-color: ${n() ?? ""}`)), y(t, r);
}
ze(["input"]);
const Fd = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+RGF0YTwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLWV4cGxvcmVyPC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnN0YXRpb248L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL3BoaWxpcHBpbGlldnNraWJlYXJpbmdwb2ludGNvbS5naXRodWIuaW8vb3NjZC1vZmZpY2lhbC1wbHVnaW5zLXRlc3QvcGx1Z2lucy9lZGl0b3JzL3N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICA8L2dyb3VwPgoKICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db25uZWN0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmllZC1lZGl0b3I8L2lkPgogICAgICAgICAgPG5hbWU+SUVEPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9pZWQuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPnRlbXBsYXRlLWdlbmVyYXRvcjwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL3RlbXBsYXRlLWdlbmVyYXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICA8L2dyb3VwPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbW11bmljYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5Db21tdW5pY2F0aW9uIEV4cGxvcmVyPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9jb21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CiAgPHByb2Nlc3M+CiAgICA8aWQ+c3RhbmRhcmQtcHJvY2Vzcy0yPC9pZD4KICAgIDx2ZXJzaW9uPjAuMC4xPC92ZXJzaW9uPgogICAgPG5hbWU+U3RhbmRhcmQgUHJvY2VzcyAyPC9uYW1lPgogICAgPGRlc2NyaXB0aW9uPgogICAgICBUaGlzIGlzIGEgc3RhbmRhcmRpemVkIHByb2Nlc3MgdXNlZCBmb3IgdGVzdGluZyBwdXJwb3NlcyBvbmx5CiAgICA8L2Rlc2NyaXB0aW9uPgoKICAgIDxwbHVnaW5zLXNlcXVlbmNlPgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRhdGE8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic3RhdGlvbi1leHBsb3JlcjwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9waGlsaXBwaWxpZXZza2liZWFyaW5ncG9pbnRjb20uZ2l0aHViLmlvL29zY2Qtb2ZmaWNpYWwtcGx1Z2lucy10ZXN0L3BsdWdpbnMvZWRpdG9ycy9zdWJzdGF0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KCiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+Q29ubmVjdGlvbjwvdGl0bGU+CiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5pZWQtZWRpdG9yPC9pZD4KICAgICAgICAgIDxuYW1lPklFRDwvbmFtZT4KICAgICAgICAgIDxzcmM+CiAgICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvaWVkLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50ZW1wbGF0ZS1nZW5lcmF0b3I8L2lkPgogICAgICAgICAgPG5hbWU+VGVtcGxhdGUgR2VuZXJhdG9yPC9uYW1lPgogICAgICAgICAgPHNyYz4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgPC9ncm91cD4KICAgICAgPGdyb3VwPgogICAgICAgIDx0aXRsZT5Db21tdW5pY2F0aW9uPC90aXRsZT4KICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmNvbW11bmljYXRpb24tZXhwbG9yZXI8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbiBFeHBsb3JlcjwvbmFtZT4KICAgICAgICAgIDxzcmM+CiAgICAgICAgICAgIGh0dHBzOi8vcGhpbGlwcGlsaWV2c2tpYmVhcmluZ3BvaW50Y29tLmdpdGh1Yi5pby9vc2NkLW9mZmljaWFsLXBsdWdpbnMtdGVzdC9wbHVnaW5zL2VkaXRvcnMvY29tbXVuaWNhdGlvbi5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CiAgICA8L3BsdWdpbnMtc2VxdWVuY2U+CiAgPC9wcm9jZXNzPgo8L3Byb2Nlc3Nlcz4K", Ua = fe({ loading: !1 }), Va = fe({ error: "" }), yn = fe({ processes: [] }), je = fe({ process: null }), xr = fe({ isEditing: !1 }), Od = Fd, Zl = "engineeringWizardProcesses";
if (typeof localStorage < "u") {
  const t = localStorage.getItem(Zl);
  if (t)
    try {
      const e = JSON.parse(t);
      Array.isArray(e) && (yn.processes = e);
    } catch {
    }
}
Xs(() => {
  Pe(() => {
    yn.processes.forEach((e) => {
      var n;
      (n = e.pluginGroups) == null || n.forEach((r) => {
        var a;
        (a = r.plugins) == null || a.length;
      });
    });
    const t = Is(yn.processes);
    if (console.log("new value", t), !(typeof localStorage > "u"))
      try {
        localStorage.setItem(Zl, JSON.stringify(t));
      } catch {
      }
  });
});
const ln = (t) => {
  var e;
  return ((e = t == null ? void 0 : t.textContent) == null ? void 0 : e.trim()) ?? "";
}, Yr = (t, e) => Array.from(t.querySelectorAll(e)), Zi = (t) => ({
  id: ln(t.querySelector("id")),
  name: ln(t.querySelector("name")),
  src: ln(t.querySelector("src")) || void 0,
  sourceUrl: ln(t.querySelector("sourceUrl")) || void 0
}), Bd = (t) => Yr(t, "process").map((e) => {
  const n = Yr(e, ":scope > plugins-sequence > group"), r = n.length ? n.map((a) => ({
    title: ln(a.querySelector(":scope > title")) || "Untitled",
    plugins: Yr(a, ":scope > plugin").map(Zi)
  })) : [
    {
      title: "Ungrouped",
      plugins: Yr(e, ":scope > plugins-sequence > plugin").map(Zi)
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
async function Nd() {
  Ua.loading = !0, Va.error = "";
  try {
    const t = await fetch(Od, { cache: "no-cache" });
    if (!t.ok)
      throw new Error(`HTTP ${t.status}${t.statusText ? `: ${t.statusText}` : ""}`);
    const e = await t.text();
    if (typeof DOMParser > "u")
      throw new Error("DOMParser is not available in this environment.");
    const n = new DOMParser().parseFromString(e, "application/xml");
    if (n.getElementsByTagName("parsererror").length)
      throw new Error("Invalid XML file format.");
    const r = Bd(n);
    return yn.processes = r, r;
  } catch (t) {
    const e = t instanceof Error ? t.message : "Failed to load processes.";
    throw Va.error = e, t;
  } finally {
    Ua.loading = !1;
  }
}
function Ud(t, e, n) {
  const r = "Ungrouped", a = yn.processes.find((d) => d.id === t);
  if (!a) return;
  const i = a.pluginGroups ?? (a.pluginGroups = []);
  let l = i.find((d) => d.title === r);
  l || (l = { title: r, plugins: [] }, i.push(l)), l.plugins || (l.plugins = []), l.plugins.push(e);
}
function Vd(t, e) {
  const n = yn.processes.find((r) => r.id === t);
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
function jd(t) {
  const e = yn.processes.find((n) => n.id === t);
  if (!(!e || !e.pluginGroups))
    for (const n of e.pluginGroups)
      n.plugins && (n.plugins.length = 0);
}
function zd(t) {
  return (t.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var Xd = (t, e, n) => e.handleView(n()), Yd = (t, e, n) => e.handleStart(n()), qd = /* @__PURE__ */ W('<button type="button" class="icon svelte-au6aaq" aria-label="View process"><!></button> <button type="button" class="icon svelte-au6aaq" aria-label="Start process"><!></button>', 1), Jd = /* @__PURE__ */ W(`<div class="processes svelte-au6aaq"><div class="process-banner svelte-au6aaq"><div class="process-banner__info svelte-au6aaq"><!> <span class="svelte-au6aaq">A process “Process Name C” has already been started for the ---.scd.
        Would you like to continue where you left off?</span></div> <!></div> <div class="process-toolbar svelte-au6aaq"><!> <!></div> <!></div>`);
function Kd(t, e) {
  ge(e, !0);
  let n = /* @__PURE__ */ Q(""), r = /* @__PURE__ */ ie(() => u(n).trim().toLowerCase()), a = /* @__PURE__ */ ie(() => (yn.processes ?? []).map((_) => ({ ..._, displayName: _.name || _.id }))), i = /* @__PURE__ */ ie(() => u(r) ? u(a).filter((_) => (_.displayName ?? "").toLowerCase().includes(u(r))) : u(a));
  const l = [
    { key: "displayName", header: "Name" },
    { key: "description", header: "Description" }
  ], d = () => {
    console.log("Add new process clicked");
  };
  var s = Jd(), o = D(s), c = D(o), f = D(c);
  zu(f, {});
  var h = O(c, 2);
  vr(h, {
    variant: "raised",
    style: "--mdc-theme-primary: #ffffff; --mdc-theme-on-primary: #004552",
    $$events: { click: () => console.log("Continue Process") },
    children: (_, R) => {
      var x = _t("CONTINUE");
      y(_, x);
    },
    $$slots: { default: !0 }
  });
  var b = O(o, 2), v = D(b);
  Ml(v, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return u(n);
    },
    set value(_) {
      T(n, _, !0);
    }
  });
  var p = O(v, 2);
  vr(p, {
    variant: "raised",
    style: "--mdc-theme-primary: #004552; --mdc-theme-on-primary: #ffffff",
    $$events: { click: d },
    children: (_, R) => {
      var x = _t("ADD NEW PROCESS");
      y(_, x);
    },
    $$slots: { default: !0 }
  });
  var w = O(b, 2);
  wd(w, {
    get items() {
      return u(i);
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
      let m = () => x == null ? void 0 : x().item;
      var S = qd(), A = N(S);
      A.__click = [Xd, e, m];
      var g = D(A);
      Hu(g, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" });
      var C = O(A, 2);
      C.__click = [Yd, e, m];
      var L = D(C);
      Vu(L, { svgStyles: "fill: #002B37; width: 100%; height: 100%;" }), y(R, S);
    },
    $$slots: { actions: !0 }
  }), y(t, s), pe();
}
ze(["click"]);
var Qd = (t, e, n) => e.onSelect(u(n).id), $d = /* @__PURE__ */ W("<button><!></button>"), ec = /* @__PURE__ */ W('<div class="step-line svelte-1ar0udo" aria-hidden="true"></div>'), tc = /* @__PURE__ */ W('<div class="step svelte-1ar0udo"><!> <p> </p></div> <!>', 1), nc = /* @__PURE__ */ W('<div class="steps svelte-1ar0udo"></div>');
function Fl(t, e) {
  ge(e, !0);
  let n = I(e, "items", 19, () => []), r = I(e, "visited", 19, () => []), a = I(e, "currentId", 3, null), i = I(e, "status", 19, () => ({})), l = I(e, "tooltipMap", 19, () => ({}));
  var d = nc();
  Zt(d, 21, n, qt, (s, o, c) => {
    var f = tc(), h = N(f), b = D(h);
    {
      let R = /* @__PURE__ */ ie(() => l()[u(o).id] ?? "");
      rd(b, {
        get content() {
          return u(R);
        },
        side: "bottom",
        children: (x, m) => {
          var S = $d();
          S.__click = [Qd, e, o];
          let A;
          var g = D(S);
          {
            var C = (P) => {
              var F = ee(), z = N(F);
              {
                var J = (k) => {
                  Zu(k);
                }, be = (k) => {
                  var Z = ee(), U = N(Z);
                  {
                    var B = (M) => {
                      Ou(M);
                    }, ne = (M) => {
                      var V = ee(), $ = N(V);
                      {
                        var me = (re) => {
                          Nu(re, {});
                        }, he = (re) => {
                          var ae = _t();
                          ae.nodeValue = c + 1, y(re, ae);
                        };
                        j(
                          $,
                          (re) => {
                            i()[u(o).id] === "warning" ? re(me) : re(he, !1);
                          },
                          !0
                        );
                      }
                      y(M, V);
                    };
                    j(
                      U,
                      (M) => {
                        i()[u(o).id] === "error" ? M(B) : M(ne, !1);
                      },
                      !0
                    );
                  }
                  y(k, Z);
                };
                j(z, (k) => {
                  i()[u(o).id] === "check" ? k(J) : k(be, !1);
                });
              }
              y(P, F);
            }, L = (P) => {
              var F = _t();
              F.nodeValue = c + 1, y(P, F);
            };
            j(g, (P) => {
              r().includes(u(o).id) && u(o).id !== a() ? P(C) : P(L, !1);
            });
          }
          te(
            (P) => {
              Ft(S, "aria-current", u(o).id === a() ? "step" : void 0), A = Cn(S, 1, "", null, A, P);
            },
            [
              () => ({
                "not-visited": !r().includes(u(o).id),
                current: u(o).id === a(),
                visited: r().includes(u(o).id) && u(o).id !== a()
              })
            ]
          ), y(x, S);
        },
        $$slots: { default: !0 }
      });
    }
    var v = O(b, 2), p = D(v), w = O(h, 2);
    {
      var _ = (R) => {
        var x = ec();
        y(R, x);
      };
      j(w, (R) => {
        c < n().length - 1 && R(_);
      });
    }
    te(() => Re(p, u(o).label)), y(s, f);
  }), y(t, d), pe();
}
ze(["click"]);
function rc(t, e) {
  const n = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = I(e, "currentId", 3, null), a = I(e, "visited", 19, () => []);
  Fl(t, {
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
var ac = /* @__PURE__ */ W('<div style="display:flex;align-items:center;gap:0.5rem;"><button type="button" class="back-container svelte-1i38ker"><!> <span>Back to Overview</span> <span class="back-container__title svelte-1i38ker"> </span></button></div>');
function Ol(t, e) {
  let n = I(e, "title", 3, "Engineering Wizard");
  var r = ac(), a = D(r);
  a.__click = function(...s) {
    var o;
    (o = e.onBack) == null || o.apply(this, s);
  };
  var i = D(a);
  Yu(i, {});
  var l = O(i, 4), d = D(l);
  te(() => Re(d, n())), y(t, r);
}
ze(["click"]);
function ic() {
  alert("adding a group");
}
var lc = /* @__PURE__ */ W('<div class="plugin-list__header-action svelte-1a2zky1"><!></div>'), sc = /* @__PURE__ */ W('<header class="plugin-list__header svelte-1a2zky1"><p class="plugin-list__title svelte-1a2zky1"> </p> <!></header>'), oc = /* @__PURE__ */ W('<div class="plugin-list__item-row__dashed svelte-1a2zky1"></div>'), uc = /* @__PURE__ */ W('<div class="plugin-list__item-action svelte-1a2zky1"><!></div>'), dc = /* @__PURE__ */ W('<div class="plugin-list__item-row svelte-1a2zky1"><span class="plugin-list__item-name svelte-1a2zky1"> </span> <!></div>'), cc = /* @__PURE__ */ W('<section class="plugin-list__group svelte-1a2zky1"><header class="plugin-list__group-header svelte-1a2zky1"><span class="plugin-list__group-index svelte-1a2zky1"></span> <span class="plugin-list__group-title svelte-1a2zky1"> </span></header> <!> <!></section>'), fc = /* @__PURE__ */ W('<div class="plugin-list__body svelte-1a2zky1"></div>'), vc = /* @__PURE__ */ W('<div class="plugin-list__footer svelte-1a2zky1"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-1a2zky1"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-1a2zky1"><!> <span>Add group</span></button></div>');
function Bl(t, e) {
  ge(e, !0);
  const n = (d) => {
    var s = sc(), o = D(s), c = D(o), f = O(o, 2);
    {
      var h = (b) => {
        var v = lc(), p = D(v);
        se(p, () => e.headerAction), y(b, v);
      };
      j(f, (b) => {
        e.headerAction && b(h);
      });
    }
    te(() => Re(c, l())), y(d, s);
  }, r = (d) => {
    var s = fc();
    Zt(s, 21, i, qt, (o, c, f) => {
      var h = cc(), b = D(h), v = D(b);
      v.textContent = `${f + 1}.`;
      var p = O(v, 2), w = D(p), _ = O(b, 2);
      {
        var R = (m) => {
          Na(m, {
            variant: "dashed",
            children: (S, A) => {
              var g = oc();
              y(S, g);
            },
            $$slots: { default: !0 }
          });
        };
        j(_, (m) => {
          u(c).plugins.length === 0 && m(R);
        });
      }
      var x = O(_, 2);
      Zt(x, 17, () => u(c).plugins, qt, (m, S, A) => {
        Na(m, {
          variant: "secondary",
          children: (g, C) => {
            var L = dc(), P = D(L), F = D(P), z = O(P, 2);
            {
              var J = (be) => {
                var k = uc(), Z = D(k);
                se(Z, () => e.itemAction, () => ({
                  group: u(c),
                  plugin: u(S),
                  groupIndex: f,
                  pluginIndex: A
                })), y(be, k);
              };
              j(z, (be) => {
                e.itemAction && be(J);
              });
            }
            te(() => Re(F, u(S).name)), y(g, L);
          },
          $$slots: { default: !0 }
        });
      }), te(() => Re(w, u(c).title)), y(o, h);
    }), y(d, s);
  }, a = (d) => {
    var s = ee(), o = N(s);
    {
      var c = (f) => {
        var h = vc(), b = D(h), v = D(b);
        Du(v, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var p = O(b, 2);
        p.__click = [ic];
        var w = D(p);
        Hl(w, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), y(f, h);
      };
      j(o, (f) => {
        xr.isEditing && f(c);
      });
    }
    y(d, s);
  };
  let i = I(e, "pluginGroups", 19, () => []), l = I(e, "title", 3, "Process");
  Wl(t, {
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
ze(["click"]);
function hc(t, e) {
  const n = (a) => {
    vr(a, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--on-brand); --mdc-theme-on-primary: var(--brand)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (i, l) => {
        var d = _t("EDIT");
        y(i, d);
      },
      $$slots: { default: !0 }
    });
  };
  let r = I(e, "pluginGroups", 19, () => []);
  Bl(t, {
    get pluginGroups() {
      return r();
    },
    get headerAction() {
      return n;
    }
  });
}
function gc() {
  var e;
  const t = document.querySelector("open-scd");
  return ((e = t == null ? void 0 : t.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function pc(t) {
  var e;
  (e = gc()) == null || e.dispatchEvent(
    new CustomEvent("toggle-editor-tabs", {
      detail: { visible: t },
      bubbles: !0,
      composed: !0
    })
  );
}
async function bc(t) {
  if (!customElements.get(t.id)) {
    const e = await import(
      /* @vite-ignore */
      t.src
    );
    customElements.define(t.id, e.default);
  }
}
async function mc(t) {
  await Promise.all(
    t.map(async (e) => {
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
const mn = On(!0);
mn.subscribe((t) => {
  pc(t);
});
var _c = (t, e, n) => e(n().id), Cc = /* @__PURE__ */ W('<button type="button" class="plugin-list__removeBtn svelte-gipzw9"><!></button>');
function yc(t, e) {
  ge(e, !0);
  const n = (d) => {
    vr(d, {
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
  }, r = (d, s) => {
    let o = () => s == null ? void 0 : s().plugin;
    var c = Cc();
    c.__click = [_c, l, o];
    var f = D(c);
    Pu(f, { svgStyles: "fill: #FF203A" }), te(() => Ft(c, "aria-label", `Remove ${o().name}`)), y(d, c);
  };
  let a = I(e, "pluginGroups", 19, () => []);
  function i() {
    jd(je.process.id);
  }
  function l(d) {
    Vd(je.process.id, d);
  }
  Bl(t, {
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
ze(["click"]);
function Ic(t = "plugins") {
  try {
    const e = typeof localStorage < "u" ? localStorage.getItem(t) : null;
    if (!e) return [];
    const n = JSON.parse(e);
    return Array.isArray(n) ? n.filter((r) => (r == null ? void 0 : r.kind) === "editor") : [];
  } catch (e) {
    return console.error("Failed to load plugins from localStorage", e), [];
  }
}
function Ac(t) {
  var r;
  const e = t.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), n = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${n}`;
}
var wc = /* @__PURE__ */ W('<div class="card-header svelte-1fcjrhj"><p class="header-info svelte-1fcjrhj">Add External Plugins</p> <div class="search-input svelte-1fcjrhj"><!></div></div>'), xc = (t, e, n) => e(u(n), je.process.id), Sc = /* @__PURE__ */ W('<div class="card-item-content svelte-1fcjrhj"><p class="plugin-name svelte-1fcjrhj"> </p> <button class="plugin-add-btn svelte-1fcjrhj"><!></button></div>'), Rc = /* @__PURE__ */ W('<div class="card-parent-content svelte-1fcjrhj"></div>');
function Ec(t, e) {
  ge(e, !0);
  const n = (s) => {
    var o = wc(), c = O(D(o), 2), f = D(c);
    Ml(f, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(h) {
        a(h);
      }
    }), y(s, o);
  }, r = (s) => {
    var o = Rc();
    Zt(o, 21, () => u(i), qt, (c, f) => {
      Na(c, {
        variant: "secondary",
        children: (h, b) => {
          var v = Sc(), p = D(v), w = D(p), _ = O(p, 2);
          _.__click = [xc, l, f];
          var R = D(_);
          Hl(R, { svgStyles: "fill: var(--brand);" }), te(() => Re(w, u(f).name)), y(h, v);
        },
        $$slots: { default: !0 }
      });
    }), y(s, o);
  };
  let a = I(e, "searchTerm", 7, ""), i = /* @__PURE__ */ ie(() => {
    const s = a().toLowerCase().trim();
    return s ? e.plugins.filter((o) => o.name.toLowerCase().includes(s)) : e.plugins;
  });
  function l(s, o) {
    const c = d(s);
    Ud(o, c), console.log("Add plugin clicked", s);
  }
  function d(s) {
    return {
      id: Ac(s.name),
      name: s.name,
      src: s.sourceUrl,
      sourceUrl: s.sourceUrl
    };
  }
  Wl(t, {
    backgroundColor: "#DAE3E6",
    get header() {
      return n;
    },
    get content() {
      return r;
    }
  }), pe();
}
ze(["click"]);
var Lc = /* @__PURE__ */ W('<div class="drag-and-drop-info svelte-ws8xx1"><!> <p class="svelte-ws8xx1">SELECT OR DRAG & DROP PLUGINS</p></div> <!>', 1), Pc = /* @__PURE__ */ W('<div class="process-definition-view svelte-ws8xx1"><!> <!></div>');
function kc(t, e) {
  ge(e, !0);
  let n = I(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ Q(fe([])), a = /* @__PURE__ */ Q(""), i = /* @__PURE__ */ ie(() => (u(r) ?? []).filter((c) => {
    const f = u(a).trim().toLowerCase();
    return f ? c.name.toLowerCase().includes(f) : !0;
  }));
  tt(() => {
    T(r, Ic(), !0);
  });
  var l = Pc(), d = D(l);
  yc(d, {
    get pluginGroups() {
      return n();
    }
  });
  var s = O(d, 2);
  {
    var o = (c) => {
      var f = Lc(), h = N(f), b = D(h);
      td(b, { svgStyles: "fill: #6B9197" });
      var v = O(h, 2);
      Ec(v, {
        get plugins() {
          return u(i);
        },
        get searchTerm() {
          return u(a);
        },
        set searchTerm(p) {
          T(a, p, !0);
        }
      }), y(c, f);
    };
    j(s, (c) => {
      u(r).length && c(o);
    });
  }
  y(t, l), pe();
}
const Dc = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmNvbW0tc3VibmV0LTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJuZXQgQWRkcmVzcyBWYWxpZGl0eTwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5WYWxpZGF0ZXMgSVAgc3VibmV0IGFkZHJlc3NlcyBhbmQgQ0lEUi9uZXRtYXNrIGFyZSBwcm9wZXJseSBmb3JtYXR0ZWQgYW5kIG1lZXQgcHJvamVjdCBjb25zdHJhaW50cy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1zdWJuZXQtYWRkcmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5nc2UtY29uZmlnLTAwMjwvaWQ+CiAgICA8bmFtZT5HU0UgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIEdTRSBjb250cm9sIGJsb2NrcyByZWZlcmVuY2UgdmFsaWQgZGF0YXNldHMgYW5kIGhhdmUgY29ycmVjdCBNQUMvVkxBTi9uZXR3b3JrIHBhcmFtZXRlcnMuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stZ3NlLWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5zbXYtY29uZmlnLTAwMzwvaWQ+CiAgICA8bmFtZT5TTVYgQ29udHJvbCBCbG9ja3MgQ29uZmlndXJhdGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5DaGVja3MgU01WIGNvbnRyb2wgYmxvY2tzIGZvciB2YWxpZCBkYXRhc2V0cywgc2FtcGxlIHJhdGVzLCBhbmQgY29tcGxpYW50IG5ldHdvcmsgc2V0dGluZ3MuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2stc212LWNvbmZpZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4K", Gc = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmllZC1uYW1lLTAwMTwvaWQ+CiAgICA8bmFtZT5JRUQgTmFtZSBGb3JtYXQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyBJRUQgbmFtZXMgZm9sbG93IHRoZSBuYW1pbmcgY29udmVudGlvbiwgYWxsb3dlZCBjaGFyYWN0ZXJzLCBhbmQgdW5pcXVlbmVzcyB3aXRoaW4gdGhlIHByb2plY3QuPC9kZXNjcmlwdGlvbj4KICAgIDx2YWxpZGF0b3I+Y2hlY2staWVkLW5hbWUtZm9ybWF0PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmFwLWNvbmZpZy0wMDI8L2lkPgogICAgPG5hbWU+QWNjZXNzIFBvaW50IENvbmZpZ3VyYXRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgQWNjZXNzUG9pbnQgZWxlbWVudHMgaGF2ZSByZXF1aXJlZCBhdHRyaWJ1dGVzIGFuZCB2YWxpZCByZWZlcmVuY2VzIHRvIHNlcnZlci9zZXJ2aWNlcy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1hY2Nlc3MtcG9pbnQtY29uZmlnPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPmxuLWFzc2lnbi0wMDM8L2lkPgogICAgPG5hbWU+TG9naWNhbCBOb2RlIEFzc2lnbm1lbnRzPC9uYW1lPgogICAgPGRlc2NyaXB0aW9uPlZhbGlkYXRlcyBsb2dpY2FsIG5vZGVzIGFyZSBjb3JyZWN0bHkgYXNzaWduZWQgd2l0aCB2YWxpZCBsbkNsYXNzL2xuSW5zdCBjb21iaW5hdGlvbnMgYW5kIHJlcXVpcmVkIExOcyBhcmUgcHJlc2VudC48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1sbi1hc3NpZ25tZW50czwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KPC92YWxpZGF0aW9ucz4KCg==", Tc = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnN1YnN0YXRpb24tc3RydWN0dXJlLTAwMTwvaWQ+CiAgICA8bmFtZT5TdWJzdGF0aW9uIFN0cnVjdHVyZSBJbnRlZ3JpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+U3RydWN0dXJlIEludGVncml0eSBEZXNjcmlwdGlvbjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXN1YnN0YXRpb24tc3RydWN0dXJlPC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnZvbHRhZ2UtbGV2ZWwtdW5pcXVlbmVzcy0wMDI8L2lkPgogICAgPG5hbWU+Vm9sdGFnZSBMZXZlbCBOYW1lIFVuaXF1ZW5lc3M8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+RW5zdXJlcyB2b2x0YWdlIGxldmVsIG5hbWVzIGFyZSB1bmlxdWUgd2l0aGluIHRoZSBzdWJzdGF0aW9uLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXZsLW5hbWUtdW5pcXVlbmVzczwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD5iYXktbmFtaW5nLTAwMzwvaWQ+CiAgICA8bmFtZT5CYXkgTmFtaW5nIENvbnZlbnRpb248L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmFsaWRhdGVzIGJheSBuYW1lcyBmb2xsb3cgdGhlIG5hbWluZyBjb252ZW50aW9uIGFuZCBhcmUgdW5pcXVlIHdpdGhpbiB0aGVpciB2b2x0YWdlIGxldmVsLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLWJheS1uYW1pbmc8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CjwvdmFsaWRhdGlvbnM+Cg==", Mc = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHZhbGlkYXRpb25zPgogIDx2YWxpZGF0aW9uPgogICAgPGlkPnRlbXBsYXRlLWlucHV0cy0wMDE8L2lkPgogICAgPG5hbWU+UmVxdWlyZWQgSW5wdXRzIFByZXNlbnQ8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+VmVyaWZpZXMgYWxsIHJlcXVpcmVkIHRlbXBsYXRlIGlucHV0IGZpZWxkcyBhcmUgcHJvdmlkZWQgYW5kIG5vbi1lbXB0eS48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay1yZXF1aXJlZC1pbnB1dHM8L3ZhbGlkYXRvcj4KICA8L3ZhbGlkYXRpb24+CiAgPHZhbGlkYXRpb24+CiAgICA8aWQ+dGctbmFtaW5nLTAwMjwvaWQ+CiAgICA8bmFtZT5UZW1wbGF0ZSBOYW1pbmcgQ29udmVudGlvbjwvbmFtZT4KICAgIDxkZXNjcmlwdGlvbj5FbnN1cmVzIHRlbXBsYXRlIG5hbWVzIGZvbGxvdyB0aGUgZGVmaW5lZCBuYW1pbmcgY29udmVudGlvbiBhbmQgYWxsb3dlZCBjaGFyYWN0ZXJzLjwvZGVzY3JpcHRpb24+CiAgICA8dmFsaWRhdG9yPmNoZWNrLXRlbXBsYXRlLW5hbWluZzwvdmFsaWRhdG9yPgogIDwvdmFsaWRhdGlvbj4KICA8dmFsaWRhdGlvbj4KICAgIDxpZD50Zy1jb21wYXQtMDAzPC9pZD4KICAgIDxuYW1lPlRlbXBsYXRlIENvbXBhdGliaWxpdHk8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+Q2hlY2tzIHRoZSBnZW5lcmF0ZWQgdGVtcGxhdGUgaXMgY29tcGF0aWJsZSB3aXRoIHRoZSBzZWxlY3RlZCBwcm9maWxlcyBvciB2ZXJzaW9ucy48L2Rlc2NyaXB0aW9uPgogICAgPHZhbGlkYXRvcj5jaGVjay10ZW1wbGF0ZS1jb21wYXRpYmlsaXR5PC92YWxpZGF0b3I+CiAgPC92YWxpZGF0aW9uPgo8L3ZhbGlkYXRpb25zPgoK";
var Hc = /* @__PURE__ */ W('<button type="button"><span> </span></button>'), Wc = /* @__PURE__ */ W('<div><button type="button" class="validation-groups__group-title svelte-v2hgj7"> </button> <!></div>'), Zc = /* @__PURE__ */ W("<p>Loading…</p>"), Fc = /* @__PURE__ */ W('<p class="error svelte-v2hgj7"> </p>'), Oc = /* @__PURE__ */ W('<div class="xml-viewer svelte-v2hgj7"><h4 class="xml-viewer__title svelte-v2hgj7"> </h4> <div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), Bc = /* @__PURE__ */ W('<span class="validation-xml-container__description svelte-v2hgj7"> </span>'), Nc = /* @__PURE__ */ W('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="true" title="Collapse"><!></button>'), Uc = /* @__PURE__ */ W('<button type="button" class="toggle-btn svelte-v2hgj7" aria-expanded="false" title="Expand"><!></button>'), Vc = /* @__PURE__ */ W('<div class="xml-viewer svelte-v2hgj7"><div class="xml-viewer__box svelte-v2hgj7"><pre class="svelte-v2hgj7"> </pre></div></div>'), jc = /* @__PURE__ */ W('<div class="validation-xml-container svelte-v2hgj7"><div class="validation-xml-container__meta svelte-v2hgj7"><span class="validation-xml-container__name svelte-v2hgj7"> </span> <!> <div class="validation-xml-container__actions svelte-v2hgj7"><button type="button" class="delete-btn svelte-v2hgj7" title="Remove"><!></button> <!></div></div> <!></div>'), zc = /* @__PURE__ */ W('<div class="validation-xml-list svelte-v2hgj7"></div>'), Xc = /* @__PURE__ */ W('<div class="validation-groups svelte-v2hgj7"></div> <!>', 1);
function Yc(t, e) {
  ge(e, !0);
  let n = I(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ Q(null), a = /* @__PURE__ */ Q(null);
  const i = /* @__PURE__ */ ie(() => u(r) !== null ? n()[u(r)] : null), l = /* @__PURE__ */ ie(() => u(i) && u(a) !== null ? u(i).plugins[u(a)] : null);
  Pe(() => {
    var C, L;
    if (!((C = n()) != null && C.length)) {
      T(r, null), T(a, null);
      return;
    }
    (u(r) === null || u(r) >= n().length) && T(r, 0);
    const g = n()[u(r)];
    if (!((L = g == null ? void 0 : g.plugins) != null && L.length)) {
      T(a, null);
      return;
    }
    (u(a) === null || u(a) >= g.plugins.length) && T(a, 0);
  });
  let d = /* @__PURE__ */ Q(""), s = /* @__PURE__ */ Q(!1), o = /* @__PURE__ */ Q(""), c = null, f = /* @__PURE__ */ Q(fe([])), h = /* @__PURE__ */ Q(fe(/* @__PURE__ */ new Set()));
  async function b(g) {
    T(s, !0), T(o, ""), T(d, ""), T(f, [], !0), T(h, /* @__PURE__ */ new Set(), !0), c == null || c.abort(), c = new AbortController();
    try {
      const C = new URL((/* @__PURE__ */ Object.assign({ "../../assets/validations/communication-explorer.xml": Dc, "../../assets/validations/ied-editor.xml": Gc, "../../assets/validations/substation-explorer.xml": Tc, "../../assets/validations/template-generator.xml": Mc }))[`../../assets/validations/${g}.xml`], import.meta.url).href, L = await fetch(C, { cache: "no-cache", signal: c.signal });
      if (!L.ok) {
        if (L.status === 404) {
          T(d, "(No XML found for this plugin.)");
          return;
        }
        throw new Error(`HTTP ${L.status}`);
      }
      T(d, await L.text(), !0);
      const F = new DOMParser().parseFromString(u(d), "application/xml");
      if (F.querySelector("parsererror"))
        throw new Error("Invalid XML format.");
      const J = new XMLSerializer(), be = Array.from(F.getElementsByTagName("validation"));
      T(
        f,
        be.map((k, Z) => {
          var re, ae, ue, Ee, Ze, nt, He;
          const U = (re = k.getAttribute("name")) == null ? void 0 : re.trim(), B = (ae = k.getAttribute("id")) == null ? void 0 : ae.trim(), ne = (Ee = (ue = k.querySelector("name")) == null ? void 0 : ue.textContent) == null ? void 0 : Ee.trim(), M = (Ze = k.getAttribute("description")) == null ? void 0 : Ze.trim(), V = (He = (nt = k.querySelector("description")) == null ? void 0 : nt.textContent) == null ? void 0 : He.trim(), $ = U || B || ne || `Validation ${Z + 1}`, me = M || V || void 0, he = J.serializeToString(k);
          return { name: $, description: me, xml: he };
        }),
        !0
      ), T(h, new Set(u(f).map((k, Z) => Z)), !0);
    } catch (C) {
      if ((C == null ? void 0 : C.name) === "AbortError")
        return;
      T(o, (C == null ? void 0 : C.message) || "Failed to load XML.", !0);
    } finally {
      T(s, !1);
    }
  }
  let v = /* @__PURE__ */ ie(() => {
    var g;
    return ((g = u(l)) == null ? void 0 : g.id) ?? null;
  }), p = null;
  Pe(() => {
    !u(v) || u(v) === p || (p = u(v), b(u(v)));
  });
  function w(g) {
    var L;
    const C = n()[g];
    T(r, g, !0), T(a, (L = C == null ? void 0 : C.plugins) != null && L.length ? 0 : null, !0);
  }
  function _(g, C) {
    T(r, g, !0), T(a, C, !0);
  }
  function R(g) {
    u(h).has(g) ? u(h).delete(g) : u(h).add(g), T(h, new Set(u(h)), !0);
  }
  var x = Xc(), m = N(x);
  Zt(m, 21, n, qt, (g, C, L) => {
    var P = Wc();
    let F;
    var z = D(P);
    z.__click = () => w(L);
    var J = D(z), be = O(z, 2);
    {
      var k = (Z) => {
        var U = ee(), B = N(U);
        Zt(B, 17, () => u(C).plugins, qt, (ne, M, V) => {
          var $ = Hc();
          let me;
          $.__click = () => _(L, V);
          var he = D($), re = D(he);
          te(
            (ae) => {
              me = Cn($, 1, "validation-groups__plugin svelte-v2hgj7", null, me, ae), Re(re, u(M).name);
            },
            [
              () => ({
                active: L === u(r) && V === u(a)
              })
            ]
          ), y(ne, $);
        }), y(Z, U);
      };
      j(be, (Z) => {
        L === u(r) && Z(k);
      });
    }
    te(
      (Z) => {
        F = Cn(P, 1, "validation-groups__group svelte-v2hgj7", null, F, Z), Ft(z, "aria-pressed", L === u(r)), Re(J, u(C).title);
      },
      [
        () => ({ expanded: L === u(r) })
      ]
    ), y(g, P);
  });
  var S = O(m, 2);
  {
    var A = (g) => {
      var C = ee(), L = N(C);
      {
        var P = (z) => {
          var J = Zc();
          y(z, J);
        }, F = (z) => {
          var J = ee(), be = N(J);
          {
            var k = (U) => {
              var B = Fc(), ne = D(B);
              te(() => Re(ne, u(o))), y(U, B);
            }, Z = (U) => {
              var B = ee(), ne = N(B);
              {
                var M = ($) => {
                  var me = Oc(), he = D(me), re = D(he), ae = O(he, 2), ue = D(ae), Ee = D(ue);
                  te(() => {
                    Re(re, `XML for: ${u(l).name ?? ""}`), Re(Ee, u(d));
                  }), y($, me);
                }, V = ($) => {
                  var me = zc();
                  Zt(me, 21, () => u(f), qt, (he, re, ae) => {
                    var ue = jc(), Ee = D(ue), Ze = D(Ee), nt = D(Ze), He = O(Ze, 2);
                    {
                      var ft = (X) => {
                        var Ce = Bc(), rt = D(Ce);
                        te(() => Re(rt, u(re).description)), y(X, Ce);
                      };
                      j(He, (X) => {
                        u(re).description && X(ft);
                      });
                    }
                    var Ot = O(He, 2), Rt = D(Ot), Ct = D(Rt);
                    Tu(Ct, { svgStyles: "fill: #FF203A" });
                    var Qt = O(Rt, 2);
                    {
                      var br = (X) => {
                        var Ce = Nc();
                        Ce.__click = () => R(ae);
                        var rt = D(Ce);
                        Ju(rt, { svgStyles: "fill: #004552" }), y(X, Ce);
                      }, mr = (X) => {
                        var Ce = Uc();
                        Ce.__click = () => R(ae);
                        var rt = D(Ce);
                        Qu(rt, { svgStyles: "fill: #004552" }), y(X, Ce);
                      };
                      j(Qt, (X) => {
                        u(h).has(ae) ? X(br) : X(mr, !1);
                      });
                    }
                    var E = O(Ee, 2);
                    {
                      var G = (X) => {
                        var Ce = Vc(), rt = D(Ce), Yn = D(rt), _r = D(Yn);
                        te(() => Re(_r, u(re).xml)), y(X, Ce);
                      };
                      j(E, (X) => {
                        u(h).has(ae) && X(G);
                      });
                    }
                    te(() => Re(nt, u(re).name)), y(he, ue);
                  }), y($, me);
                };
                j(ne, ($) => {
                  u(f).length === 0 ? $(M) : $(V, !1);
                });
              }
              y(U, B);
            };
            j(
              be,
              (U) => {
                u(o) ? U(k) : U(Z, !1);
              },
              !0
            );
          }
          y(z, J);
        };
        j(L, (z) => {
          u(s) ? z(P) : z(F, !1);
        });
      }
      y(g, C);
    };
    j(S, (g) => {
      u(l) && g(A);
    });
  }
  y(t, x), pe();
}
ze(["click"]);
function qc(t, e) {
  const n = (t == null ? void 0 : t.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${n}` : n, enabled: !1 }
  ];
}
function Jc(t, e, n, r, a) {
  u(e) || (n(u(r)), T(a, u(a) + 1));
}
function Kc(t, e, n) {
  u(e) || T(n, u(n) - 1);
}
var Qc = /* @__PURE__ */ W("<!> <!>", 1), $c = /* @__PURE__ */ W('<div class="stepper svelte-1qlms77"><!> <!> <div class="stepper-navigation svelte-1qlms77"><button type="button" class="btn btn--back svelte-1qlms77" aria-label="Previous step">Back</button> <button type="button" class="btn btn--next svelte-1qlms77" aria-label="Next step">Next</button></div></div> <div class="step-content svelte-1qlms77"><!></div>', 1), ef = /* @__PURE__ */ W('<div class="step-content svelte-1qlms77"><div class="header svelte-1qlms77"><!> <!></div> <!></div>'), tf = /* @__PURE__ */ W('<div class="page-content svelte-1qlms77"><!></div>');
function nf(t, e) {
  ge(e, !0);
  const n = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ Q(0), a = /* @__PURE__ */ ie(() => n[u(r)] ?? n[0]), i = /* @__PURE__ */ ie(() => u(r) === 0), l = /* @__PURE__ */ ie(() => u(r) === n.length - 1), d = /* @__PURE__ */ ie(() => qc(je.process, { edit: xr.isEditing })), s = /* @__PURE__ */ ie(() => je.process.pluginGroups), o = /* @__PURE__ */ Q(fe([]));
  function c(m) {
    m === 0 && (mn.set(!0), je.process = null);
  }
  function f() {
    console.log("EDITING"), xr.isEditing = !0, mn.set(!1), T(r, 0), T(o, [], !0);
  }
  function h() {
    xr.isEditing = !1, mn.set(!0), je.process = null;
  }
  function b(m) {
    const S = n.indexOf(m);
    S !== -1 && T(r, S, !0);
  }
  function v(m) {
    u(o).includes(m) || T(o, [...u(o), m], !0);
  }
  function p() {
    alert("Add New Validation clicked!");
  }
  var w = tf(), _ = D(w);
  {
    var R = (m) => {
      var S = $c(), A = N(S), g = D(A);
      Ol(g, { onBack: h });
      var C = O(g, 2);
      rc(C, {
        get currentId() {
          return u(a);
        },
        get visited() {
          return u(o);
        },
        onSelect: b
      });
      var L = O(C, 2), P = D(L);
      P.__click = [Kc, i, r];
      var F = O(P, 2);
      F.__click = [
        Jc,
        l,
        v,
        a,
        r
      ];
      var z = O(A, 2), J = D(z);
      {
        var be = (Z) => {
          kc(Z, {
            get pluginGroups() {
              return u(s);
            }
          });
        }, k = (Z) => {
          var U = ee(), B = N(U);
          {
            var ne = (M) => {
              var V = Qc(), $ = N(V);
              {
                let he = /* @__PURE__ */ ie(() => !je.process);
                vr($, {
                  variant: "raised",
                  style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
                  onclick: p,
                  get disabled() {
                    return u(he);
                  },
                  "aria-label": "Add validation",
                  children: (re, ae) => {
                    var ue = _t("ADD NEW VALIDATION");
                    y(re, ue);
                  },
                  $$slots: { default: !0 }
                });
              }
              var me = O($, 2);
              Yc(me, {
                get pluginGroups() {
                  return u(s);
                },
                get breadcrumbs() {
                  return u(d);
                },
                activeBreadcrumbIndex: 2,
                $$events: {
                  addValidation: p,
                  breadcrumbClick: c
                }
              }), y(M, V);
            };
            j(
              B,
              (M) => {
                u(a) === "validator-configuration" && M(ne);
              },
              !0
            );
          }
          y(Z, U);
        };
        j(J, (Z) => {
          u(a) === "process-definition" ? Z(be) : Z(k, !1);
        });
      }
      te(() => {
        P.disabled = u(i), F.disabled = u(l);
      }), y(m, S);
    }, x = (m) => {
      var S = ef(), A = D(S), g = D(A);
      kd(g, {
        get breadcrumbs() {
          return u(d);
        },
        activeIndex: 1,
        handleClick: c
      });
      var C = O(g, 2);
      {
        let P = /* @__PURE__ */ ie(() => !je.process);
        vr(C, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--brand); --mdc-theme-on-primary: var(--on-brand)",
          onclick: () => e.handleStart(je.process),
          get disabled() {
            return u(P);
          },
          "aria-label": "Start process",
          children: (F, z) => {
            var J = _t("START PROCESS");
            y(F, J);
          },
          $$slots: { default: !0 }
        });
      }
      var L = O(A, 2);
      hc(L, {
        get pluginGroups() {
          return u(s);
        },
        requestEdit: f
      }), y(m, S);
    };
    j(_, (m) => {
      xr.isEditing ? m(R) : m(x, !1);
    });
  }
  y(t, w), pe();
}
ze(["click"]);
function rf(t, e) {
  ge(e, !0);
  let n = I(e, "plugins", 19, () => []), r = I(e, "visited", 19, () => []), a = I(e, "currentId", 3, null), i = I(e, "pluginStatus", 19, () => ({})), l = /* @__PURE__ */ ie(() => n().reduce(
    (s, o) => {
      const c = i()[o.id];
      return s[o.id] = c ?? "", s;
    },
    {}
  ));
  const d = (s) => {
    const o = n().find((c) => c.id === s);
    o && e.onSelect(o);
  };
  {
    let s = /* @__PURE__ */ ie(() => n().map((o) => ({ id: o.id, label: o.name })));
    Fl(t, {
      get items() {
        return u(s);
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
        return u(l);
      },
      onSelect: d
    });
  }
  pe();
}
const af = (t, e) => e(1), lf = (t, e) => e(-1);
var sf = /* @__PURE__ */ W('<div class="plugin-container svelte-1xkxjkz"><!></div>'), of = /* @__PURE__ */ W('<div class="stepper svelte-1xkxjkz"><!> <!> <div class="stepper-navigation svelte-1xkxjkz"><button type="button" class="back-button svelte-1xkxjkz" aria-label="Previous plugin">Back</button> <button type="button" class="next-button svelte-1xkxjkz" aria-label="Next plugin">Next</button></div></div> <!>', 1);
function uf(t, e) {
  ge(e, !0);
  const n = ["check", "warning", "error"];
  let r = I(e, "editCount", 19, () => -1), a = I(e, "plugins", 19, () => []), i = /* @__PURE__ */ Q(null), l = /* @__PURE__ */ Q(fe([])), d = /* @__PURE__ */ Q(fe({})), s = /* @__PURE__ */ ie(() => a().length > 0), o = /* @__PURE__ */ ie(() => u(i) && u(s) ? a().findIndex((g) => g.id === u(i)) : -1);
  async function c(g) {
    if (!g) return;
    await bc(g);
    const { id: C } = g;
    if (T(i, C, !0), !u(l).includes(C)) {
      T(l, [...u(l), C], !0);
      const L = a().findIndex((P) => P.id === C);
      if (L !== -1) {
        const P = n[L % n.length];
        T(d, { ...u(d), [C]: P }, !0);
      }
    }
  }
  function f(g) {
    if (!u(s)) return;
    const L = ((u(o) < 0 ? 0 : u(o)) + g + a().length) % a().length;
    c(a()[L]);
  }
  function h(g, C) {
    return Object.assign(g, C), {
      update(L) {
        Object.assign(g, L);
      }
    };
  }
  Pe(() => {
    if (!u(s)) {
      T(i, null), T(l, [], !0), T(d, {}, !0);
      return;
    }
    u(o) === -1 && c(a()[0]);
  }), tt(() => (a().length && mc(a()).catch(console.error), mn.set(!1), () => {
    mn.set(!0);
  }));
  function b() {
    mn.set(!0), e.onExit();
  }
  var v = of(), p = N(v), w = D(p);
  Ol(w, { onBack: b });
  var _ = O(w, 2);
  rf(_, {
    get plugins() {
      return a();
    },
    get visited() {
      return u(l);
    },
    get currentId() {
      return u(i);
    },
    get pluginStatus() {
      return u(d);
    },
    onSelect: c
  });
  var R = O(_, 2), x = D(R);
  x.__click = [lf, f];
  var m = O(x, 2);
  m.__click = [af, f];
  var S = O(p, 2);
  {
    var A = (g) => {
      var C = sf(), L = D(C);
      Ta(L, () => u(i), !1, (P, F) => {
        De(P, (z, J) => h == null ? void 0 : h(z, J), () => ({ doc: e.doc, editCount: r() })), Cn(P, 0, "svelte-1xkxjkz");
      }), y(g, C);
    };
    j(S, (g) => {
      u(i) && g(A);
    });
  }
  te(() => {
    x.disabled = !u(s), m.disabled = !u(s);
  }), y(t, v), pe();
}
ze(["click"]);
var df = (t, e) => {
  t.target === t.currentTarget && e("exit");
}, cf = /* @__PURE__ */ W('<div class="ewf-dialog-backdrop svelte-12xjguj" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-12xjguj" role="document"><h2 id="ewf-title" class="sr-only svelte-12xjguj">Engineering Workflow</h2> <!></div></div>');
function ff(t, e) {
  ge(e, !0);
  let n = I(e, "editCount", 19, () => -1), r = I(e, "plugins", 19, () => []), a = /* @__PURE__ */ Q(!1), i = /* @__PURE__ */ Q(void 0), l = /* @__PURE__ */ Q(null);
  const d = (f) => {
    u(a) || (T(a, !0), mn.set(!0), Su(f));
  };
  Pe(() => {
    var f;
    e.open !== u(i) && (T(i, e.open, !0), e.open ? (T(a, !1), (f = u(l)) == null || f.focus()) : d("cancel"));
  });
  var s = ee(), o = N(s);
  {
    var c = (f) => {
      var h = cf();
      h.__click = [df, d];
      var b = D(h), v = O(D(b), 2);
      uf(v, {
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
        onExit: () => d("exit")
      }), ye(h, (p) => T(l, p), () => u(l)), y(f, h);
    };
    j(o, (f) => {
      e.open && f(c);
    });
  }
  y(t, s), pe();
}
ze(["click"]);
var vf = /* @__PURE__ */ W("<!> <!>", 1);
function hf(t, e) {
  ge(e, !0);
  let n = I(e, "editCount", 19, () => -1);
  tt(async () => {
    await Nd();
  });
  function r(f) {
    je.process || (je.process = f);
    const h = zd(je.process);
    xu(ff, {
      doc: e.doc,
      editCount: n(),
      host: e.host,
      plugins: h
    }), je.process = null;
  }
  Pe(() => {
    Ru({ editCount: n(), doc: e.doc });
  });
  function a(f) {
    je.process = f;
  }
  function i() {
    je.process = null;
  }
  var l = vf(), d = N(l);
  wu(d, {});
  var s = O(d, 2);
  {
    var o = (f) => {
      nf(f, { handleBack: i, handleStart: r });
    }, c = (f) => {
      Kd(f, { handleView: a, handleStart: r });
    };
    j(s, (f) => {
      je.process ? f(o) : f(c, !1);
    });
  }
  y(t, l), pe();
}
const Nl = "archive-explorer", Ul = "0.0.1";
var gf = /* @__PURE__ */ W('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function pf(t, e) {
  ge(e, !0);
  let n = I(e, "dev", 3, !1), r = I(e, "editCount", 3, 0);
  var a = gf(), i = N(a);
  {
    var l = (o) => {
      hf(o, {
        get doc() {
          return e.doc;
        },
        get editCount() {
          return r();
        }
      });
    };
    j(i, (o) => {
      (e.doc || n()) && o(l);
    });
  }
  var d = O(i, 2), s = O(d, 2);
  te(() => {
    Ai(d, Nl), Ai(s, Ul);
  }), y(t, a), pe();
}
var sr;
class yf extends HTMLElement {
  constructor() {
    super();
    Ie(this, sr);
    le(this, sr, /* @__PURE__ */ Q(fe({ doc: this._doc, editCount: -1, host: this })));
  }
  get _props() {
    return u(H(this, sr));
  }
  set _props(n) {
    T(H(this, sr), n, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), fo(pf, { target: this.shadowRoot, props: this._props });
    const n = bf();
    this.shadowRoot.appendChild(n);
  }
  set doc(n) {
    this._doc = n, this._props.doc = n;
  }
  get doc() {
    return this._doc;
  }
  set editCount(n) {
    this._props.editCount = n;
  }
}
sr = new WeakMap();
function bf() {
  const t = `${Nl}-v${Ul}-style`, e = mf(), n = document.createElement("link");
  return n.rel = "stylesheet", n.type = "text/css", n.href = e, n.id = t, n;
}
function mf() {
  const t = new URL(import.meta.url), e = t.origin, n = t.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, n, "style.css"].filter(Boolean).join("/");
}
export {
  yf as default
};
