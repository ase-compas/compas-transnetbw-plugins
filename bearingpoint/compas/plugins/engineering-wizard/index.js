var Ic = Object.defineProperty;
var pl = (n) => {
  throw TypeError(n);
};
var bc = (n, e, t) => e in n ? Ic(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ri = (n, e, t) => bc(n, typeof e != "symbol" ? e + "" : e, t), ao = (n, e, t) => e.has(n) || pl("Cannot " + t);
var ae = (n, e, t) => (ao(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Xe = (n, e, t) => e.has(n) ? pl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Oe = (n, e, t, r) => (ao(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Gt = (n, e, t) => (ao(n, e, "access private method"), t);
const Et = Symbol(), yc = "http://www.w3.org/1999/xhtml", Cc = "http://www.w3.org/2000/svg", Ac = "@attach", bd = !1;
var Ua = Array.isArray, Ec = Array.prototype.indexOf, zo = Array.from, ms = Object.defineProperty, Vr = Object.getOwnPropertyDescriptor, yd = Object.getOwnPropertyDescriptors, Cd = Object.prototype, Sc = Array.prototype, Ps = Object.getPrototypeOf, _l = Object.isExtensible;
function Ni(n) {
  return typeof n == "function";
}
const me = () => {
};
function xc(n) {
  return n();
}
function yo(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function Ad() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const $t = 2, jo = 4, ks = 8, Zr = 16, xr = 32, Xr = 64, Zo = 128, On = 256, ps = 512, zt = 1024, bn = 2048, Kr = 4096, Wn = 8192, Si = 16384, Fs = 32768, Yr = 65536, Il = 1 << 17, Ed = 1 << 18, xi = 1 << 19, Sd = 1 << 20, Co = 1 << 21, Ns = 1 << 22, gi = 1 << 23, ir = Symbol("$state"), xd = Symbol("legacy props"), wc = Symbol(""), Ui = new class extends Error {
  constructor() {
    super(...arguments);
    Ri(this, "name", "StaleReactionError");
    Ri(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Xo(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Tc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Dc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Lc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Oc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Rc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Mc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Pc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function kc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Fc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Nc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Uc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Hc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Bc = !1;
function wd(n) {
  return n === this.v;
}
function Ko(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Td(n) {
  return !Ko(n, this.v);
}
let oa = !1, Gc = !1;
function Vc() {
  oa = !0;
}
const qc = [];
function Us(n, e = !1, t = !1) {
  return os(n, /* @__PURE__ */ new Map(), "", qc, null, t);
}
function os(n, e, t, r, i = null, a = !1) {
  if (typeof n == "object" && n !== null) {
    var s = e.get(n);
    if (s !== void 0) return s;
    if (n instanceof Map) return (
      /** @type {Snapshot<T>} */
      new Map(n)
    );
    if (n instanceof Set) return (
      /** @type {Snapshot<T>} */
      new Set(n)
    );
    if (Ua(n)) {
      var d = (
        /** @type {Snapshot<any>} */
        Array(n.length)
      );
      e.set(n, d), i !== null && e.set(i, d);
      for (var l = 0; l < n.length; l += 1) {
        var c = n[l];
        l in n && (d[l] = os(c, e, t, r, null, a));
      }
      return d;
    }
    if (Ps(n) === Cd) {
      d = {}, e.set(n, d), i !== null && e.set(i, d);
      for (var u in n)
        d[u] = os(
          // @ts-expect-error
          n[u],
          e,
          t,
          r,
          null,
          a
        );
      return d;
    }
    if (n instanceof Date)
      return (
        /** @type {Snapshot<T>} */
        structuredClone(n)
      );
    if (typeof /** @type {T & { toJSON?: any } } */
    n.toJSON == "function" && !a)
      return os(
        /** @type {T & { toJSON(): any } } */
        n.toJSON(),
        e,
        t,
        r,
        // Associate the instance with the toJSON clone
        n
      );
  }
  if (n instanceof EventTarget)
    return (
      /** @type {Snapshot<T>} */
      n
    );
  try {
    return (
      /** @type {Snapshot<T>} */
      structuredClone(n)
    );
  } catch {
    return (
      /** @type {Snapshot<T>} */
      n
    );
  }
}
let tt = null;
function $i(n) {
  tt = n;
}
function Ce(n) {
  return (
    /** @type {T} */
    Dd().get(n)
  );
}
function le(n, e) {
  return Dd().set(n, e), e;
}
function be(n, e = !1, t) {
  tt = {
    p: tt,
    c: null,
    e: null,
    s: n,
    x: null,
    l: oa && !e ? { s: null, u: null, $: [] } : null
  };
}
function ye(n) {
  var e = (
    /** @type {ComponentContext} */
    tt
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var r of t)
      zd(r);
  }
  return n !== void 0 && (e.x = n), tt = e.p, n ?? /** @type {T} */
  {};
}
function Ha() {
  return !oa || tt !== null && tt.l === null;
}
function Dd(n) {
  return tt === null && Xo(), tt.c ?? (tt.c = new Map(Wc(tt) || void 0));
}
function Wc(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let di = [];
function Ld() {
  var n = di;
  di = [], yo(n);
}
function Ar(n) {
  if (di.length === 0 && !xa) {
    var e = di;
    queueMicrotask(() => {
      e === di && Ld();
    });
  }
  di.push(n);
}
function zc() {
  for (; di.length > 0; )
    Ld();
}
const jc = /* @__PURE__ */ new WeakMap();
function Od(n) {
  var e = Ne;
  if (e === null)
    return Fe.f |= gi, n;
  if (e.f & Fs)
    ea(n, e);
  else {
    if (!(e.f & Zo))
      throw !e.parent && n instanceof Error && Rd(n), n;
    e.b.error(n);
  }
}
function ea(n, e) {
  for (; e !== null; ) {
    if (e.f & Zo)
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    e = e.parent;
  }
  throw n instanceof Error && Rd(n), n;
}
function Rd(n) {
  const e = jc.get(n);
  e && (ms(n, "message", {
    value: e.message
  }), ms(n, "stack", {
    value: e.stack
  }));
}
const Ja = /* @__PURE__ */ new Set();
let Qe = null, ls = null, Pt = null, Ao = /* @__PURE__ */ new Set(), er = [], Hs = null, Eo = !1, xa = !1;
var Zi, Xi, ui, ka, Ki, Yi, ci, Ji, Fa, Na, Rn, So, ds, xo;
const Os = class Os {
  constructor() {
    Xe(this, Rn);
    /**
     * The current values of any sources that are updated in this batch
     * They keys of this map are identical to `this.#previous`
     * @type {Map<Source, any>}
     */
    Ri(this, "current", /* @__PURE__ */ new Map());
    /**
     * The values of any sources that are updated in this batch _before_ those updates took place.
     * They keys of this map are identical to `this.#current`
     * @type {Map<Source, any>}
     */
    Xe(this, Zi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    Xe(this, Xi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    Xe(this, ui, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    Xe(this, ka, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    Xe(this, Ki, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    Xe(this, Yi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    Xe(this, ci, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    Xe(this, Ji, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    Xe(this, Fa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Xe(this, Na, []);
    /**
     * A set of branches that still exist, but will be destroyed when this batch
     * is committed — we skip over these during `process`
     * @type {Set<Effect>}
     */
    Ri(this, "skipped_effects", /* @__PURE__ */ new Set());
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    var a;
    er = [], ls = null, this.apply();
    for (const s of e)
      Gt(this, Rn, So).call(this, s);
    if (ae(this, ui) === 0) {
      var t = Pt;
      Gt(this, Rn, xo).call(this);
      var r = ae(this, Yi), i = ae(this, ci);
      Oe(this, Yi, []), Oe(this, ci, []), Oe(this, Ji, []), ls = this, Qe = null, Pt = t, bl(r), bl(i), ls = null, (a = ae(this, ka)) == null || a.resolve();
    } else
      Gt(this, Rn, ds).call(this, ae(this, Yi)), Gt(this, Rn, ds).call(this, ae(this, ci)), Gt(this, Rn, ds).call(this, ae(this, Ji));
    Pt = null;
    for (const s of ae(this, Ki))
      La(s);
    Oe(this, Ki, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    ae(this, Zi).has(e) || ae(this, Zi).set(e, t), this.current.set(e, e.v), Pt == null || Pt.set(e, e.v);
  }
  activate() {
    Qe = this;
  }
  deactivate() {
    Qe = null, Pt = null;
  }
  flush() {
    if (er.length > 0) {
      if (this.activate(), Md(), Qe !== null && Qe !== this)
        return;
    } else ae(this, ui) === 0 && Gt(this, Rn, xo).call(this);
    this.deactivate();
    for (const e of Ao)
      if (Ao.delete(e), e(), Qe !== null)
        break;
  }
  increment() {
    Oe(this, ui, ae(this, ui) + 1);
  }
  decrement() {
    Oe(this, ui, ae(this, ui) - 1);
    for (const e of ae(this, Fa))
      Jt(e, bn), bi(e);
    for (const e of ae(this, Na))
      Jt(e, Kr), bi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ae(this, Xi).add(e);
  }
  settled() {
    return (ae(this, ka) ?? Oe(this, ka, Ad())).promise;
  }
  static ensure() {
    if (Qe === null) {
      const e = Qe = new Os();
      Ja.add(Qe), xa || Os.enqueue(() => {
        Qe === e && e.flush();
      });
    }
    return Qe;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Ar(e);
  }
  apply() {
  }
};
Zi = new WeakMap(), Xi = new WeakMap(), ui = new WeakMap(), ka = new WeakMap(), Ki = new WeakMap(), Yi = new WeakMap(), ci = new WeakMap(), Ji = new WeakMap(), Fa = new WeakMap(), Na = new WeakMap(), Rn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
So = function(e) {
  var c;
  e.f ^= zt;
  for (var t = e.first; t !== null; ) {
    var r = t.f, i = (r & (xr | Xr)) !== 0, a = i && (r & zt) !== 0, s = a || (r & Wn) !== 0 || this.skipped_effects.has(t);
    if (!s && t.fn !== null) {
      i ? t.f ^= zt : r & jo ? ae(this, ci).push(t) : r & zt || (r & Ns && ((c = t.b) != null && c.is_pending()) ? ae(this, Ki).push(t) : qs(t) && (t.f & Zr && ae(this, Ji).push(t), La(t)));
      var d = t.first;
      if (d !== null) {
        t = d;
        continue;
      }
    }
    var l = t.parent;
    for (t = t.next; t === null && l !== null; )
      t = l.next, l = l.parent;
  }
}, /**
 * @param {Effect[]} effects
 */
ds = function(e) {
  for (const t of e)
    (t.f & bn ? ae(this, Fa) : ae(this, Na)).push(t), Jt(t, zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
xo = function() {
  var e;
  for (const t of ae(this, Xi))
    t();
  if (ae(this, Xi).clear(), Ja.size > 1) {
    ae(this, Zi).clear();
    let t = !0;
    for (const r of Ja) {
      if (r === this) {
        t = !1;
        continue;
      }
      const i = [];
      for (const [s, d] of this.current) {
        if (r.current.has(s))
          if (t && d !== r.current.get(s))
            r.current.set(s, d);
          else
            continue;
        i.push(s);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((s) => !this.current.has(s));
      if (a.length > 0) {
        for (const s of i)
          Pd(s, a);
        if (er.length > 0) {
          Qe = r, r.apply();
          for (const s of er)
            Gt(e = r, Rn, So).call(e, s);
          er = [], r.deactivate();
        }
      }
    }
    Qe = null;
  }
  Ja.delete(this);
};
let nr = Os;
function Zc(n) {
  var e = xa;
  xa = !0;
  try {
    for (var t; ; ) {
      if (zc(), er.length === 0 && (Qe == null || Qe.flush(), er.length === 0))
        return Hs = null, /** @type {T} */
        t;
      Md();
    }
  } finally {
    xa = e;
  }
}
function Md() {
  var n = Vi;
  Eo = !0;
  try {
    var e = 0;
    for (Al(!0); er.length > 0; ) {
      var t = nr.ensure();
      if (e++ > 1e3) {
        var r, i;
        Xc();
      }
      t.process(er), qr.clear();
    }
  } finally {
    Eo = !1, Al(n), Hs = null;
  }
}
function Xc() {
  try {
    Rc();
  } catch (n) {
    ea(n, Hs);
  }
}
let _r = null;
function bl(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if (!(r.f & (Si | Wn)) && qs(r) && (_r = [], La(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Kd(r) : r.fn = null), (_r == null ? void 0 : _r.length) > 0)) {
        qr.clear();
        for (const i of _r)
          La(i);
        _r = [];
      }
    }
    _r = null;
  }
}
function Pd(n, e) {
  if (n.reactions !== null)
    for (const t of n.reactions) {
      const r = t.f;
      r & $t ? Pd(
        /** @type {Derived} */
        t,
        e
      ) : r & (Ns | Zr) && kd(t, e) && (Jt(t, bn), bi(
        /** @type {Effect} */
        t
      ));
    }
}
function kd(n, e) {
  if (n.deps !== null) {
    for (const t of n.deps)
      if (e.includes(t) || t.f & $t && kd(
        /** @type {Derived} */
        t,
        e
      ))
        return !0;
  }
  return !1;
}
function bi(n) {
  for (var e = Hs = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (Eo && e === Ne && t & Zr)
      return;
    if (t & (Xr | xr)) {
      if (!(t & zt)) return;
      e.f ^= zt;
    }
  }
  er.push(e);
}
function Kc(n) {
  let e = 0, t = yi(0), r;
  return () => {
    hf() && (o(t), Gs(() => (e === 0 && (r = lr(() => n(() => wa(t)))), e += 1, () => {
      Ar(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, wa(t));
      });
    })));
  };
}
var Yc = Yr | xi | Zo;
function Jc(n, e, t) {
  new Qc(n, e, t);
}
var kn, wn, Wo, Jn, fi, Qn, Tn, on, $n, Fr, hi, Nr, vi, Ur, Rs, Ms, Qt, $c, ef, us, cs, wo;
class Qc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, r) {
    Xe(this, Qt);
    /** @type {Boundary | null} */
    Ri(this, "parent");
    Xe(this, kn, !1);
    /** @type {TemplateNode} */
    Xe(this, wn);
    /** @type {TemplateNode | null} */
    Xe(this, Wo, null);
    /** @type {BoundaryProps} */
    Xe(this, Jn);
    /** @type {((anchor: Node) => void)} */
    Xe(this, fi);
    /** @type {Effect} */
    Xe(this, Qn);
    /** @type {Effect | null} */
    Xe(this, Tn, null);
    /** @type {Effect | null} */
    Xe(this, on, null);
    /** @type {Effect | null} */
    Xe(this, $n, null);
    /** @type {DocumentFragment | null} */
    Xe(this, Fr, null);
    Xe(this, hi, 0);
    Xe(this, Nr, 0);
    Xe(this, vi, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Xe(this, Ur, null);
    Xe(this, Rs, () => {
      ae(this, Ur) && ta(ae(this, Ur), ae(this, hi));
    });
    Xe(this, Ms, Kc(() => (Oe(this, Ur, yi(ae(this, hi))), () => {
      Oe(this, Ur, null);
    })));
    Oe(this, wn, e), Oe(this, Jn, t), Oe(this, fi, r), this.parent = /** @type {Effect} */
    Ne.b, Oe(this, kn, !!ae(this, Jn).pending), Oe(this, Qn, Tr(() => {
      Ne.b = this;
      {
        try {
          Oe(this, Tn, qt(() => r(ae(this, wn))));
        } catch (i) {
          this.error(i);
        }
        ae(this, Nr) > 0 ? Gt(this, Qt, cs).call(this) : Oe(this, kn, !1);
      }
    }, Yc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return ae(this, kn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!ae(this, Jn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Gt(this, Qt, wo).call(this, e), Oe(this, hi, ae(this, hi) + e), Ao.add(ae(this, Rs));
  }
  get_effect_pending() {
    return ae(this, Ms).call(this), o(
      /** @type {Source<number>} */
      ae(this, Ur)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = ae(this, Jn).onerror;
    let r = ae(this, Jn).failed;
    if (ae(this, vi) || !t && !r)
      throw e;
    ae(this, Tn) && (wt(ae(this, Tn)), Oe(this, Tn, null)), ae(this, on) && (wt(ae(this, on)), Oe(this, on, null)), ae(this, $n) && (wt(ae(this, $n)), Oe(this, $n, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        Hc();
        return;
      }
      i = !0, a && Nc(), nr.ensure(), Oe(this, hi, 0), ae(this, $n) !== null && Wr(ae(this, $n), () => {
        Oe(this, $n, null);
      }), Oe(this, kn, this.has_pending_snippet()), Oe(this, Tn, Gt(this, Qt, us).call(this, () => (Oe(this, vi, !1), qt(() => ae(this, fi).call(this, ae(this, wn)))))), ae(this, Nr) > 0 ? Gt(this, Qt, cs).call(this) : Oe(this, kn, !1);
    };
    var d = Fe;
    try {
      un(null), a = !0, t == null || t(e, s), a = !1;
    } catch (l) {
      ea(l, ae(this, Qn) && ae(this, Qn).parent);
    } finally {
      un(d);
    }
    r && Ar(() => {
      Oe(this, $n, Gt(this, Qt, us).call(this, () => {
        Oe(this, vi, !0);
        try {
          return qt(() => {
            r(
              ae(this, wn),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return ea(
            l,
            /** @type {Effect} */
            ae(this, Qn).parent
          ), null;
        } finally {
          Oe(this, vi, !1);
        }
      }));
    });
  }
}
kn = new WeakMap(), wn = new WeakMap(), Wo = new WeakMap(), Jn = new WeakMap(), fi = new WeakMap(), Qn = new WeakMap(), Tn = new WeakMap(), on = new WeakMap(), $n = new WeakMap(), Fr = new WeakMap(), hi = new WeakMap(), Nr = new WeakMap(), vi = new WeakMap(), Ur = new WeakMap(), Rs = new WeakMap(), Ms = new WeakMap(), Qt = new WeakSet(), $c = function() {
  try {
    Oe(this, Tn, qt(() => ae(this, fi).call(this, ae(this, wn))));
  } catch (e) {
    this.error(e);
  }
  Oe(this, kn, !1);
}, ef = function() {
  const e = ae(this, Jn).pending;
  e && (Oe(this, on, qt(() => e(ae(this, wn)))), nr.enqueue(() => {
    Oe(this, Tn, Gt(this, Qt, us).call(this, () => (nr.ensure(), qt(() => ae(this, fi).call(this, ae(this, wn)))))), ae(this, Nr) > 0 ? Gt(this, Qt, cs).call(this) : (Wr(
      /** @type {Effect} */
      ae(this, on),
      () => {
        Oe(this, on, null);
      }
    ), Oe(this, kn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
us = function(e) {
  var t = Ne, r = Fe, i = tt;
  or(ae(this, Qn)), un(ae(this, Qn)), $i(ae(this, Qn).ctx);
  try {
    return e();
  } catch (a) {
    return Od(a), null;
  } finally {
    or(t), un(r), $i(i);
  }
}, cs = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ae(this, Jn).pending
  );
  ae(this, Tn) !== null && (Oe(this, Fr, document.createDocumentFragment()), tf(ae(this, Tn), ae(this, Fr))), ae(this, on) === null && Oe(this, on, qt(() => e(ae(this, wn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
wo = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && Gt(t = this.parent, Qt, wo).call(t, e);
    return;
  }
  Oe(this, Nr, ae(this, Nr) + e), ae(this, Nr) === 0 && (Oe(this, kn, !1), ae(this, on) && Wr(ae(this, on), () => {
    Oe(this, on, null);
  }), ae(this, Fr) && (ae(this, wn).before(ae(this, Fr)), Oe(this, Fr, null)), Ar(() => {
    nr.ensure().flush();
  }));
};
function tf(n, e) {
  for (var t = n.nodes_start, r = n.nodes_end; t !== null; ) {
    var i = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ga(t)
    );
    e.append(t), t = i;
  }
}
function Fd(n, e, t) {
  const r = Ha() ? Ba : Yo;
  if (e.length === 0) {
    t(n.map(r));
    return;
  }
  var i = Qe, a = (
    /** @type {Effect} */
    Ne
  ), s = nf();
  Promise.all(e.map((d) => /* @__PURE__ */ rf(d))).then((d) => {
    s();
    try {
      t([...n.map(r), ...d]);
    } catch (l) {
      a.f & Si || ea(l, a);
    }
    i == null || i.deactivate(), To();
  }).catch((d) => {
    ea(d, a);
  });
}
function nf() {
  var n = Ne, e = Fe, t = tt, r = Qe;
  return function() {
    or(n), un(e), $i(t), r == null || r.activate();
  };
}
function To() {
  or(null), un(null), $i(null);
}
// @__NO_SIDE_EFFECTS__
function Ba(n) {
  var e = $t | bn, t = Fe !== null && Fe.f & $t ? (
    /** @type {Derived} */
    Fe
  ) : null;
  return Ne === null || t !== null && t.f & On ? e |= On : Ne.f |= xi, {
    ctx: tt,
    deps: null,
    effects: null,
    equals: wd,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Et
    ),
    wv: 0,
    parent: t ?? Ne,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function rf(n, e) {
  let t = (
    /** @type {Effect | null} */
    Ne
  );
  t === null && Tc();
  var r = (
    /** @type {Boundary} */
    t.b
  ), i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), a = yi(
    /** @type {V} */
    Et
  ), s = !Fe, d = /* @__PURE__ */ new Map();
  return mf(() => {
    var f;
    var l = Ad();
    i = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(To);
    } catch (v) {
      l.reject(v), To();
    }
    var c = (
      /** @type {Batch} */
      Qe
    ), u = r.is_pending();
    s && (r.update_pending_count(1), u || (c.increment(), (f = d.get(c)) == null || f.reject(Ui), d.delete(c), d.set(c, l)));
    const h = (v, g = void 0) => {
      if (u || c.activate(), g)
        g !== Ui && (a.f |= gi, ta(a, g));
      else {
        a.f & gi && (a.f ^= gi), ta(a, v);
        for (const [m, p] of d) {
          if (d.delete(m), m === c) break;
          p.reject(Ui);
        }
      }
      s && (r.update_pending_count(-1), u || c.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), Bs(() => {
    for (const l of d.values())
      l.reject(Ui);
  }), new Promise((l) => {
    function c(u) {
      function h() {
        u === i ? l(a) : c(i);
      }
      u.then(h, h);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function J(n) {
  const e = /* @__PURE__ */ Ba(n);
  return Qd(e), e;
}
// @__NO_SIDE_EFFECTS__
function Yo(n) {
  const e = /* @__PURE__ */ Ba(n);
  return e.equals = Td, e;
}
function Nd(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      wt(
        /** @type {Effect} */
        e[t]
      );
  }
}
function af(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & $t))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Jo(n) {
  var e, t = Ne;
  or(af(n));
  try {
    Nd(n), e = nu(n);
  } finally {
    or(t);
  }
  return e;
}
function Ud(n) {
  var e = Jo(n);
  if (n.equals(e) || (n.v = e, n.wv = eu()), !wi)
    if (Pt !== null)
      Pt.set(n, n.v);
    else {
      var t = (Hr || n.f & On) && n.deps !== null ? Kr : zt;
      Jt(n, t);
    }
}
const qr = /* @__PURE__ */ new Map();
function yi(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: wd,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function se(n, e) {
  const t = yi(n);
  return Qd(t), t;
}
// @__NO_SIDE_EFFECTS__
function Hd(n, e = !1, t = !0) {
  var i;
  const r = yi(n);
  return e || (r.equals = Td), oa && t && tt !== null && tt.l !== null && ((i = tt.l).s ?? (i.s = [])).push(r), r;
}
function V(n, e, t = !1) {
  Fe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Un || Fe.f & Il) && Ha() && Fe.f & ($t | Zr | Ns | Il) && !(Yt != null && Yt.includes(n)) && Fc();
  let r = t ? Ee(e) : e;
  return ta(n, r);
}
function ta(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    wi ? qr.set(n, e) : qr.set(n, t), n.v = e;
    var r = nr.ensure();
    r.capture(n, t), n.f & $t && (n.f & bn && Jo(
      /** @type {Derived} */
      n
    ), Jt(n, n.f & On ? Kr : zt)), n.wv = eu(), Bd(n, bn), Ha() && Ne !== null && Ne.f & zt && !(Ne.f & (xr | Xr)) && (xn === null ? If([n]) : xn.push(n));
  }
  return e;
}
function wa(n) {
  V(n, n.v + 1);
}
function Bd(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = Ha(), i = t.length, a = 0; a < i; a++) {
      var s = t[a], d = s.f;
      if (!(!r && s === Ne)) {
        var l = (d & bn) === 0;
        l && Jt(s, e), d & $t ? Bd(
          /** @type {Derived} */
          s,
          Kr
        ) : l && (d & Zr && _r !== null && _r.push(
          /** @type {Effect} */
          s
        ), bi(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ee(n) {
  if (typeof n != "object" || n === null || ir in n)
    return n;
  const e = Ps(n);
  if (e !== Cd && e !== Sc)
    return n;
  var t = /* @__PURE__ */ new Map(), r = Ua(n), i = /* @__PURE__ */ se(0), a = mi, s = (d) => {
    if (mi === a)
      return d();
    var l = Fe, c = mi;
    un(null), Sl(a);
    var u = d();
    return un(l), Sl(c), u;
  };
  return r && t.set("length", /* @__PURE__ */ se(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(d, l, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Pc();
        var u = t.get(l);
        return u === void 0 ? u = s(() => {
          var h = /* @__PURE__ */ se(c.value);
          return t.set(l, h), h;
        }) : V(u, c.value, !0), !0;
      },
      deleteProperty(d, l) {
        var c = t.get(l);
        if (c === void 0) {
          if (l in d) {
            const u = s(() => /* @__PURE__ */ se(Et));
            t.set(l, u), wa(i);
          }
        } else
          V(c, Et), wa(i);
        return !0;
      },
      get(d, l, c) {
        var v;
        if (l === ir)
          return n;
        var u = t.get(l), h = l in d;
        if (u === void 0 && (!h || (v = Vr(d, l)) != null && v.writable) && (u = s(() => {
          var g = Ee(h ? d[l] : Et), m = /* @__PURE__ */ se(g);
          return m;
        }), t.set(l, u)), u !== void 0) {
          var f = o(u);
          return f === Et ? void 0 : f;
        }
        return Reflect.get(d, l, c);
      },
      getOwnPropertyDescriptor(d, l) {
        var c = Reflect.getOwnPropertyDescriptor(d, l);
        if (c && "value" in c) {
          var u = t.get(l);
          u && (c.value = o(u));
        } else if (c === void 0) {
          var h = t.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== Et)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return c;
      },
      has(d, l) {
        var f;
        if (l === ir)
          return !0;
        var c = t.get(l), u = c !== void 0 && c.v !== Et || Reflect.has(d, l);
        if (c !== void 0 || Ne !== null && (!u || (f = Vr(d, l)) != null && f.writable)) {
          c === void 0 && (c = s(() => {
            var v = u ? Ee(d[l]) : Et, g = /* @__PURE__ */ se(v);
            return g;
          }), t.set(l, c));
          var h = o(c);
          if (h === Et)
            return !1;
        }
        return u;
      },
      set(d, l, c, u) {
        var A;
        var h = t.get(l), f = l in d;
        if (r && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var g = t.get(v + "");
            g !== void 0 ? V(g, Et) : v in d && (g = s(() => /* @__PURE__ */ se(Et)), t.set(v + "", g));
          }
        if (h === void 0)
          (!f || (A = Vr(d, l)) != null && A.writable) && (h = s(() => /* @__PURE__ */ se(void 0)), V(h, Ee(c)), t.set(l, h));
        else {
          f = h.v !== Et;
          var m = s(() => Ee(c));
          V(h, m);
        }
        var p = Reflect.getOwnPropertyDescriptor(d, l);
        if (p != null && p.set && p.set.call(u, c), !f) {
          if (r && typeof l == "string") {
            var I = (
              /** @type {Source<number>} */
              t.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= I.v && V(I, E + 1);
          }
          wa(i);
        }
        return !0;
      },
      ownKeys(d) {
        o(i);
        var l = Reflect.ownKeys(d).filter((h) => {
          var f = t.get(h);
          return f === void 0 || f.v !== Et;
        });
        for (var [c, u] of t)
          u.v !== Et && !(c in d) && l.push(c);
        return l;
      },
      setPrototypeOf() {
        kc();
      }
    }
  );
}
function yl(n) {
  try {
    if (n !== null && typeof n == "object" && ir in n)
      return n[ir];
  } catch {
  }
  return n;
}
function sf(n, e) {
  return Object.is(yl(n), yl(e));
}
var _s, Qo, Gd, Vd, qd;
function of() {
  if (_s === void 0) {
    _s = window, Qo = document, Gd = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Vd = Vr(e, "firstChild").get, qd = Vr(e, "nextSibling").get, _l(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), _l(t) && (t.__t = void 0);
  }
}
function wr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function na(n) {
  return Vd.call(n);
}
// @__NO_SIDE_EFFECTS__
function Ga(n) {
  return qd.call(n);
}
function k(n, e) {
  return /* @__PURE__ */ na(n);
}
function K(n, e = !1) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ na(
        /** @type {Node} */
        n
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Ga(t) : t;
  }
}
function z(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ga(r);
  return r;
}
function lf(n) {
  n.textContent = "";
}
function $o() {
  return !1;
}
function df(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, Ar(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let Cl = !1;
function uf() {
  Cl || (Cl = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        var e;
        if (!n.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            (e = t.__on_r) == null || e.call(t);
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possiblity of stopPropagation)
    { capture: !0 }
  ));
}
function la(n) {
  var e = Fe, t = Ne;
  un(null), or(null);
  try {
    return n();
  } finally {
    un(e), or(t);
  }
}
function cf(n, e, t, r = t) {
  n.addEventListener(e, () => la(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), uf();
}
function Wd(n) {
  Ne === null && Fe === null && Oc(), Fe !== null && Fe.f & On && Ne === null && Lc(), wi && Dc();
}
function ff(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function zn(n, e, t, r = !0) {
  var i = Ne;
  i !== null && i.f & Wn && (n |= Wn);
  var a = {
    ctx: tt,
    deps: null,
    nodes_start: null,
    nodes_end: null,
    f: n | bn,
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
  if (t)
    try {
      La(a), a.f |= Fs;
    } catch (l) {
      throw wt(a), l;
    }
  else e !== null && bi(a);
  if (r) {
    var s = a;
    if (t && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & xi) && (s = s.first), s !== null && (s.parent = i, i !== null && ff(s, i), Fe !== null && Fe.f & $t && !(n & Xr))) {
      var d = (
        /** @type {Derived} */
        Fe
      );
      (d.effects ?? (d.effects = [])).push(s);
    }
  }
  return a;
}
function hf() {
  return Fe !== null && !Un;
}
function Bs(n) {
  const e = zn(ks, null, !1);
  return Jt(e, zt), e.teardown = n, e;
}
function Se(n) {
  Wd();
  var e = (
    /** @type {Effect} */
    Ne.f
  ), t = !Fe && (e & xr) !== 0 && (e & Fs) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      tt
    );
    (r.e ?? (r.e = [])).push(n);
  } else
    return zd(n);
}
function zd(n) {
  return zn(jo | Sd, n, !1);
}
function vf(n) {
  return Wd(), zn(ks | Sd, n, !0);
}
function jd(n) {
  nr.ensure();
  const e = zn(Xr | xi, n, !0);
  return () => {
    wt(e);
  };
}
function gf(n) {
  nr.ensure();
  const e = zn(Xr | xi, n, !0);
  return (t = {}) => new Promise((r) => {
    t.outro ? Wr(e, () => {
      wt(e), r(void 0);
    }) : (wt(e), r(void 0));
  });
}
function da(n) {
  return zn(jo, n, !1);
}
function mf(n) {
  return zn(Ns | xi, n, !0);
}
function Gs(n, e = 0) {
  return zn(ks | e, n, !0);
}
function de(n, e = [], t = []) {
  Fd(e, t, (r) => {
    zn(ks, () => n(...r.map(o)), !0);
  });
}
function Tr(n, e = 0) {
  var t = zn(Zr | e, n, !0);
  return t;
}
function qt(n, e = !0) {
  return zn(xr | xi, n, !0, e);
}
function Zd(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = wi, r = Fe;
    El(!0), un(null);
    try {
      e.call(null);
    } finally {
      El(t), un(r);
    }
  }
}
function Xd(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && la(() => {
      i.abort(Ui);
    });
    var r = t.next;
    t.f & Xr ? t.parent = null : wt(t, e), t = r;
  }
}
function pf(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & xr || wt(e), e = t;
  }
}
function wt(n, e = !0) {
  var t = !1;
  (e || n.f & Ed) && n.nodes_start !== null && n.nodes_end !== null && (_f(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), Xd(n, e && !t), Is(n, 0), Jt(n, Si);
  var r = n.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  Zd(n);
  var i = n.parent;
  i !== null && i.first !== null && Kd(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function _f(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ga(n)
    );
    n.remove(), n = t;
  }
}
function Kd(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Wr(n, e) {
  var t = [];
  el(n, t, !0), Yd(t, () => {
    wt(n), e && e();
  });
}
function Yd(n, e) {
  var t = n.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var i of n)
      i.out(r);
  } else
    e();
}
function el(n, e, t) {
  if (!(n.f & Wn)) {
    if (n.f ^= Wn, n.transitions !== null)
      for (const s of n.transitions)
        (s.is_global || t) && e.push(s);
    for (var r = n.first; r !== null; ) {
      var i = r.next, a = (r.f & Yr) !== 0 || (r.f & xr) !== 0;
      el(r, e, a ? t : !1), r = i;
    }
  }
}
function Vs(n) {
  Jd(n, !0);
}
function Jd(n, e) {
  if (n.f & Wn) {
    n.f ^= Wn, n.f & zt || (Jt(n, bn), bi(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & Yr) !== 0 || (t.f & xr) !== 0;
      Jd(t, i ? e : !1), t = r;
    }
    if (n.transitions !== null)
      for (const a of n.transitions)
        (a.is_global || e) && a.in();
  }
}
let Vi = !1;
function Al(n) {
  Vi = n;
}
let wi = !1;
function El(n) {
  wi = n;
}
let Fe = null, Un = !1;
function un(n) {
  Fe = n;
}
let Ne = null;
function or(n) {
  Ne = n;
}
let Yt = null;
function Qd(n) {
  Fe !== null && (Yt === null ? Yt = [n] : Yt.push(n));
}
let Xt = null, pn = 0, xn = null;
function If(n) {
  xn = n;
}
let $d = 1, Da = 0, mi = Da;
function Sl(n) {
  mi = n;
}
let Hr = !1;
function eu() {
  return ++$d;
}
function qs(n) {
  var h;
  var e = n.f;
  if (e & bn)
    return !0;
  if (e & Kr) {
    var t = n.deps, r = (e & On) !== 0;
    if (t !== null) {
      var i, a, s = (e & ps) !== 0, d = r && Ne !== null && !Hr, l = t.length;
      if ((s || d) && (Ne === null || !(Ne.f & Si))) {
        var c = (
          /** @type {Derived} */
          n
        ), u = c.parent;
        for (i = 0; i < l; i++)
          a = t[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(c))) && (a.reactions ?? (a.reactions = [])).push(c);
        s && (c.f ^= ps), d && u !== null && !(u.f & On) && (c.f ^= On);
      }
      for (i = 0; i < l; i++)
        if (a = t[i], qs(
          /** @type {Derived} */
          a
        ) && Ud(
          /** @type {Derived} */
          a
        ), a.wv > n.wv)
          return !0;
    }
    (!r || Ne !== null && !Hr) && Jt(n, zt);
  }
  return !1;
}
function tu(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(Yt != null && Yt.includes(n)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & $t ? tu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? Jt(a, bn) : a.f & zt && Jt(a, Kr), bi(
        /** @type {Effect} */
        a
      ));
    }
}
function nu(n) {
  var m;
  var e = Xt, t = pn, r = xn, i = Fe, a = Hr, s = Yt, d = tt, l = Un, c = mi, u = n.f;
  Xt = /** @type {null | Value[]} */
  null, pn = 0, xn = null, Hr = (u & On) !== 0 && (Un || !Vi || Fe === null), Fe = u & (xr | Xr) ? null : n, Yt = null, $i(n.ctx), Un = !1, mi = ++Da, n.ac !== null && (la(() => {
    n.ac.abort(Ui);
  }), n.ac = null);
  try {
    n.f |= Co;
    var h = (
      /** @type {Function} */
      n.fn
    ), f = h(), v = n.deps;
    if (Xt !== null) {
      var g;
      if (Is(n, pn), v !== null && pn > 0)
        for (v.length = pn + Xt.length, g = 0; g < Xt.length; g++)
          v[pn + g] = Xt[g];
      else
        n.deps = v = Xt;
      if (!Hr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      u & $t && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (g = pn; g < v.length; g++)
          ((m = v[g]).reactions ?? (m.reactions = [])).push(n);
    } else v !== null && pn < v.length && (Is(n, pn), v.length = pn);
    if (Ha() && xn !== null && !Un && v !== null && !(n.f & ($t | Kr | bn)))
      for (g = 0; g < /** @type {Source[]} */
      xn.length; g++)
        tu(
          xn[g],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (Da++, xn !== null && (r === null ? r = xn : r.push(.../** @type {Source[]} */
    xn))), n.f & gi && (n.f ^= gi), f;
  } catch (p) {
    return Od(p);
  } finally {
    n.f ^= Co, Xt = e, pn = t, xn = r, Fe = i, Hr = a, Yt = s, $i(d), Un = l, mi = c;
  }
}
function bf(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = Ec.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  t === null && e.f & $t && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Xt === null || !Xt.includes(e)) && (Jt(e, Kr), e.f & (On | ps) || (e.f ^= ps), Nd(
    /** @type {Derived} **/
    e
  ), Is(
    /** @type {Derived} **/
    e,
    0
  ));
}
function Is(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      bf(n, t[r]);
}
function La(n) {
  var e = n.f;
  if (!(e & Si)) {
    Jt(n, zt);
    var t = Ne, r = Vi;
    Ne = n, Vi = !0;
    try {
      e & Zr ? pf(n) : Xd(n), Zd(n);
      var i = nu(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = $d;
      var a;
      bd && Gc && n.f & bn && n.deps;
    } finally {
      Vi = r, Ne = t;
    }
  }
}
async function ru() {
  await Promise.resolve(), Zc();
}
function o(n) {
  var e = n.f, t = (e & $t) !== 0;
  if (Fe !== null && !Un) {
    var r = Ne !== null && (Ne.f & Si) !== 0;
    if (!r && !(Yt != null && Yt.includes(n))) {
      var i = Fe.deps;
      if (Fe.f & Co)
        n.rv < Da && (n.rv = Da, Xt === null && i !== null && i[pn] === n ? pn++ : Xt === null ? Xt = [n] : (!Hr || !Xt.includes(n)) && Xt.push(n));
      else {
        (Fe.deps ?? (Fe.deps = [])).push(n);
        var a = n.reactions;
        a === null ? n.reactions = [Fe] : a.includes(Fe) || a.push(Fe);
      }
    }
  } else if (t && /** @type {Derived} */
  n.deps === null && /** @type {Derived} */
  n.effects === null) {
    var s = (
      /** @type {Derived} */
      n
    ), d = s.parent;
    d !== null && !(d.f & On) && (s.f ^= On);
  }
  if (wi) {
    if (qr.has(n))
      return qr.get(n);
    if (t) {
      s = /** @type {Derived} */
      n;
      var l = s.v;
      return (!(s.f & zt) && s.reactions !== null || iu(s)) && (l = Jo(s)), qr.set(s, l), l;
    }
  } else if (t) {
    if (s = /** @type {Derived} */
    n, Pt != null && Pt.has(s))
      return Pt.get(s);
    qs(s) && Ud(s);
  }
  if (Pt != null && Pt.has(n))
    return Pt.get(n);
  if (n.f & gi)
    throw n.v;
  return n.v;
}
function iu(n) {
  if (n.v === Et) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (qr.has(e) || e.f & $t && iu(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function lr(n) {
  var e = Un;
  try {
    return Un = !0, n();
  } finally {
    Un = e;
  }
}
const yf = -7169;
function Jt(n, e) {
  n.f = n.f & yf | e;
}
function au(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (ir in n)
      Do(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && ir in t && Do(t);
      }
  }
}
function Do(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        Do(n[r], e);
      } catch {
      }
    const t = Ps(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = yd(t);
      for (let i in r) {
        const a = r[i].get;
        if (a)
          try {
            a.call(n);
          } catch {
          }
      }
    }
  }
}
const su = /* @__PURE__ */ new Set(), Lo = /* @__PURE__ */ new Set();
function tl(n, e, t, r = {}) {
  function i(a) {
    if (r.capture || Ea.call(e, a), !a.cancelBubble)
      return la(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Ar(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function Cf(n, e, t, r = {}) {
  var i = tl(e, n, t, r);
  return () => {
    n.removeEventListener(e, i, r);
  };
}
function Kt(n, e, t, r, i) {
  var a = { capture: r, passive: i }, s = tl(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Bs(() => {
    e.removeEventListener(n, s, a);
  });
}
function ct(n) {
  for (var e = 0; e < n.length; e++)
    su.add(n[e]);
  for (var t of Lo)
    t(n);
}
let xl = null;
function Ea(n) {
  var E;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = ((E = n.composedPath) == null ? void 0 : E.call(n)) || [], a = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  xl = n;
  var s = 0, d = xl === n && n.__root;
  if (d) {
    var l = i.indexOf(d);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    l <= c && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || n.target, a !== e) {
    ms(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var u = Fe, h = Ne;
    un(null), or(null);
    try {
      for (var f, v = []; a !== null; ) {
        var g = a.assignedSlot || a.parentNode || /** @type {any} */
        a.host || null;
        try {
          var m = a["__" + r];
          if (m != null && (!/** @type {any} */
          a.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === a))
            if (Ua(m)) {
              var [p, ...I] = m;
              p.apply(a, [n, ...I]);
            } else
              m.call(a, n);
        } catch (A) {
          f ? v.push(A) : f = A;
        }
        if (n.cancelBubble || g === e || g === null)
          break;
        a = g;
      }
      if (f) {
        for (let A of v)
          queueMicrotask(() => {
            throw A;
          });
        throw f;
      }
    } finally {
      n.__root = e, delete n.currentTarget, un(u), or(h);
    }
  }
}
function Af(n) {
  var e;
  e = document.head.appendChild(wr());
  try {
    Tr(() => n(e), Ed);
  } finally {
  }
}
function ou(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function ra(n, e) {
  var t = (
    /** @type {Effect} */
    Ne
  );
  t.nodes_start === null && (t.nodes_start = n, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function j(n, e) {
  var t = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !n.startsWith("<!>");
  return () => {
    i === void 0 && (i = ou(a ? n : "<!>" + n), t || (i = /** @type {Node} */
    /* @__PURE__ */ na(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Gd ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var d = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ na(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ra(d, l);
    } else
      ra(s, s);
    return s;
  };
}
// @__NO_SIDE_EFFECTS__
function Ef(n, e, t = "svg") {
  var r = !n.startsWith("<!>"), i = `<${t}>${r ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        ou(i)
      ), d = (
        /** @type {Element} */
        /* @__PURE__ */ na(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ na(d);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ra(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function ht(n, e) {
  return /* @__PURE__ */ Ef(n, e, "svg");
}
function Ve(n = "") {
  {
    var e = wr(n + "");
    return ra(e, e), e;
  }
}
function ie() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = wr();
  return n.append(e, t), ra(e, t), n;
}
function x(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Sf(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const xf = [
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
function wf(n) {
  return xf.includes(n);
}
const Tf = {
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
function Df(n) {
  return n = n.toLowerCase(), Tf[n] ?? n;
}
const Lf = ["touchstart", "touchmove"];
function Of(n) {
  return Lf.includes(n);
}
let bs = !0;
function wl(n) {
  bs = n;
}
function Pe(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function Rf(n, e) {
  return Mf(n, e);
}
const Mi = /* @__PURE__ */ new Map();
function Mf(n, { target: e, anchor: t, props: r = {}, events: i, context: a, intro: s = !0 }) {
  of();
  var d = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!d.has(v)) {
        d.add(v);
        var g = Of(v);
        e.addEventListener(v, Ea, { passive: g });
        var m = Mi.get(v);
        m === void 0 ? (document.addEventListener(v, Ea, { passive: g }), Mi.set(v, 1)) : Mi.set(v, m + 1);
      }
    }
  };
  l(zo(su)), Lo.add(l);
  var c = void 0, u = gf(() => {
    var h = t ?? e.appendChild(wr());
    return Jc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          be({});
          var v = (
            /** @type {ComponentContext} */
            tt
          );
          v.c = a;
        }
        i && (r.$$events = i), bs = s, c = n(f, r) || {}, bs = !0, a && ye();
      }
    ), () => {
      var g;
      for (var f of d) {
        e.removeEventListener(f, Ea);
        var v = (
          /** @type {number} */
          Mi.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, Ea), Mi.delete(f)) : Mi.set(f, v);
      }
      Lo.delete(l), h !== t && ((g = h.parentNode) == null || g.removeChild(h));
    };
  });
  return Pf.set(c, u), c;
}
let Pf = /* @__PURE__ */ new WeakMap();
function Ie(n, e, ...t) {
  var r = n, i = me, a;
  Tr(() => {
    i !== (i = e()) && (a && (wt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      i(r, ...t)
    )));
  }, Yr);
}
function rt(n) {
  tt === null && Xo(), oa && tt.l !== null ? kf(tt).m.push(n) : Se(() => {
    const e = lr(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Mn(n) {
  tt === null && Xo(), rt(() => () => lr(n));
}
function kf(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ee(n, e, t = !1) {
  var r = n, i = null, a = null, s = Et, d = t ? Yr : 0, l = !1;
  const c = (v, g = !0) => {
    l = !0, f(g, v);
  };
  var u = null;
  function h() {
    u !== null && (u.lastChild.remove(), r.before(u), u = null);
    var v = s ? i : a, g = s ? a : i;
    v && Vs(v), g && Wr(g, () => {
      s ? a = null : i = null;
    });
  }
  const f = (v, g) => {
    if (s !== (s = v)) {
      var m = $o(), p = r;
      if (m && (u = document.createDocumentFragment(), u.append(p = wr())), s ? i ?? (i = g && qt(() => g(p))) : a ?? (a = g && qt(() => g(p))), m) {
        var I = (
          /** @type {Batch} */
          Qe
        ), E = s ? i : a, A = s ? a : i;
        E && I.skipped_effects.delete(E), A && I.skipped_effects.add(A), I.add_callback(h);
      } else
        h();
    }
  };
  Tr(() => {
    l = !1, e(c), l || f(null, null);
  }, d);
}
let pi = null;
function Tl(n) {
  pi = n;
}
function Er(n, e) {
  return e;
}
function Ff(n, e, t) {
  for (var r = n.items, i = [], a = e.length, s = 0; s < a; s++)
    el(e[s].e, i, !0);
  var d = a > 0 && i.length === 0 && t !== null;
  if (d) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    lf(l), l.append(
      /** @type {Element} */
      t
    ), r.clear(), Xn(n, e[0].prev, e[a - 1].next);
  }
  Yd(i, () => {
    for (var c = 0; c < a; c++) {
      var u = e[c];
      d || (r.delete(u.k), Xn(n, u.prev, u.next)), wt(u.e, !d);
    }
  });
}
function fn(n, e, t, r, i, a = null) {
  var s = n, d = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    s = c.appendChild(wr());
  }
  var u = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Yo(() => {
    var I = t();
    return Ua(I) ? I : I == null ? [] : zo(I);
  }), g, m;
  function p() {
    Nf(
      m,
      g,
      d,
      f,
      s,
      i,
      e,
      r,
      t
    ), a !== null && (g.length === 0 ? u ? Vs(u) : u = qt(() => a(s)) : u !== null && Wr(u, () => {
      u = null;
    }));
  }
  Tr(() => {
    m ?? (m = /** @type {Effect} */
    Ne), g = /** @type {V[]} */
    o(v);
    var I = g.length;
    if (!(h && I === 0)) {
      h = I === 0;
      var E, A, y, T;
      if ($o()) {
        var C = /* @__PURE__ */ new Set(), S = (
          /** @type {Batch} */
          Qe
        );
        for (A = 0; A < I; A += 1) {
          y = g[A], T = r(y, A);
          var b = d.items.get(T) ?? f.get(T);
          b ? e & 3 && lu(b, y, A, e) : (E = du(
            null,
            d,
            null,
            null,
            y,
            T,
            A,
            i,
            e,
            t,
            !0
          ), f.set(T, E)), C.add(T);
        }
        for (const [w, L] of d.items)
          C.has(w) || S.skipped_effects.add(L.e);
        S.add_callback(p);
      } else
        p();
      o(v);
    }
  });
}
function Nf(n, e, t, r, i, a, s, d, l) {
  var ue, B, ne, ce;
  var c = (s & 8) !== 0, u = (s & 3) !== 0, h = e.length, f = t.items, v = t.first, g = v, m, p = null, I, E = [], A = [], y, T, C, S;
  if (c)
    for (S = 0; S < h; S += 1)
      y = e[S], T = d(y, S), C = f.get(T), C !== void 0 && ((ue = C.a) == null || ue.measure(), (I ?? (I = /* @__PURE__ */ new Set())).add(C));
  for (S = 0; S < h; S += 1) {
    if (y = e[S], T = d(y, S), C = f.get(T), C === void 0) {
      var b = r.get(T);
      if (b !== void 0) {
        r.delete(T), f.set(T, b);
        var w = p ? p.next : g;
        Xn(t, p, b), Xn(t, b, w), so(b, w, i), p = b;
      } else {
        var L = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        p = du(
          L,
          t,
          p,
          p === null ? t.first : p.next,
          y,
          T,
          S,
          a,
          s,
          l
        );
      }
      f.set(T, p), E = [], A = [], g = p.next;
      continue;
    }
    if (u && lu(C, y, S, s), C.e.f & Wn && (Vs(C.e), c && ((B = C.a) == null || B.unfix(), (I ?? (I = /* @__PURE__ */ new Set())).delete(C))), C !== g) {
      if (m !== void 0 && m.has(C)) {
        if (E.length < A.length) {
          var M = A[0], D;
          p = M.prev;
          var O = E[0], X = E[E.length - 1];
          for (D = 0; D < E.length; D += 1)
            so(E[D], M, i);
          for (D = 0; D < A.length; D += 1)
            m.delete(A[D]);
          Xn(t, O.prev, X.next), Xn(t, p, O), Xn(t, X, M), g = M, p = X, S -= 1, E = [], A = [];
        } else
          m.delete(C), so(C, g, i), Xn(t, C.prev, C.next), Xn(t, C, p === null ? t.first : p.next), Xn(t, p, C), p = C;
        continue;
      }
      for (E = [], A = []; g !== null && g.k !== T; )
        g.e.f & Wn || (m ?? (m = /* @__PURE__ */ new Set())).add(g), A.push(g), g = g.next;
      if (g === null)
        continue;
      C = g;
    }
    E.push(C), p = C, g = C.next;
  }
  if (g !== null || m !== void 0) {
    for (var G = m === void 0 ? [] : zo(m); g !== null; )
      g.e.f & Wn || G.push(g), g = g.next;
    var N = G.length;
    if (N > 0) {
      var U = s & 4 && h === 0 ? i : null;
      if (c) {
        for (S = 0; S < N; S += 1)
          (ne = G[S].a) == null || ne.measure();
        for (S = 0; S < N; S += 1)
          (ce = G[S].a) == null || ce.fix();
      }
      Ff(t, G, U);
    }
  }
  c && Ar(() => {
    var we;
    if (I !== void 0)
      for (C of I)
        (we = C.a) == null || we.apply();
  }), n.first = t.first && t.first.e, n.last = p && p.e;
  for (var Q of r.values())
    wt(Q.e);
  r.clear();
}
function lu(n, e, t, r) {
  r & 1 && ta(n.v, e), r & 2 ? ta(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function du(n, e, t, r, i, a, s, d, l, c, u) {
  var h = pi, f = (l & 1) !== 0, v = (l & 16) === 0, g = f ? v ? /* @__PURE__ */ Hd(i, !1, !1) : yi(i) : i, m = l & 2 ? yi(s) : s, p = {
    i: m,
    v: g,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: r
  };
  pi = p;
  try {
    if (n === null) {
      var I = document.createDocumentFragment();
      I.append(n = wr());
    }
    return p.e = qt(() => d(
      /** @type {Node} */
      n,
      g,
      m,
      c
    ), Bc), p.e.prev = t && t.e, p.e.next = r && r.e, t === null ? u || (e.first = p) : (t.next = p, t.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
    pi = h;
  }
}
function so(n, e, t) {
  for (var r = n.next ? (
    /** @type {TemplateNode} */
    n.next.e.nodes_start
  ) : t, i = e ? (
    /** @type {TemplateNode} */
    e.e.nodes_start
  ) : t, a = (
    /** @type {TemplateNode} */
    n.e.nodes_start
  ); a !== null && a !== r; ) {
    var s = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ga(a)
    );
    i.before(a), a = s;
  }
}
function Xn(n, e, t) {
  e === null ? n.first = t : (e.next = t, e.e.next = t && t.e), t !== null && (t.prev = e, t.e.prev = e && e.e);
}
function ua(n, e, t) {
  var r = n, i, a, s = null, d = null;
  function l() {
    a && (Wr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = d, d = null;
  }
  Tr(() => {
    if (i !== (i = e())) {
      var c = $o();
      if (i) {
        var u = r;
        c && (s = document.createDocumentFragment(), s.append(u = wr()), a && Qe.skipped_effects.add(a)), d = qt(() => t(u, i));
      }
      c ? Qe.add_callback(l) : l();
    }
  }, Yr);
}
function Oo(n, e, t, r, i, a) {
  var s, d, l = null, c = (
    /** @type {TemplateNode} */
    n
  ), u, h = pi;
  Tr(() => {
    const f = e() || null;
    var v = f === "svg" ? Cc : null;
    if (f !== s) {
      var g = pi;
      Tl(h), u && (f === null ? Wr(u, () => {
        u = null, d = null;
      }) : f === d ? Vs(u) : (wt(u), wl(!1))), f && f !== d && (u = qt(() => {
        if (l = v ? document.createElementNS(v, f) : document.createElement(f), ra(l, l), r) {
          var m = (
            /** @type {TemplateNode} */
            l.appendChild(wr())
          );
          r(l, m);
        }
        Ne.nodes_end = l, c.before(l);
      })), s = f, s && (d = s), wl(!0), Tl(g);
    }
  }, Yr);
}
function Me(n, e, t) {
  da(() => {
    var r = lr(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Gs(() => {
        var s = t();
        au(s), i && Ko(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Uf(n, e) {
  var t = void 0, r;
  Tr(() => {
    t !== (t = e()) && (r && (wt(r), r = null), t && (r = qt(() => {
      da(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function uu(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = uu(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function Hf() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = uu(n)) && (r && (r += " "), r += e);
  return r;
}
function cu(n) {
  return typeof n == "object" ? Hf(n) : n ?? "";
}
const Dl = [...` 	
\r\f \v\uFEFF`];
function Bf(n, e, t) {
  var r = n == null ? "" : "" + n;
  if (e && (r = r ? r + " " + e : e), t) {
    for (var i in t)
      if (t[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var d = s + a;
          (s === 0 || Dl.includes(r[s - 1])) && (d === r.length || Dl.includes(r[d])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(d + 1) : s = d;
        }
  }
  return r === "" ? null : r;
}
function Ll(n, e = !1) {
  var t = e ? " !important;" : ";", r = "";
  for (var i in n) {
    var a = n[i];
    a != null && a !== "" && (r += " " + i + ": " + a + t);
  }
  return r;
}
function oo(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function Gf(n, e) {
  if (e) {
    var t = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, d = !1, l = [];
      r && l.push(...Object.keys(r).map(oo)), i && l.push(...Object.keys(i).map(oo));
      var c = 0, u = -1;
      const m = n.length;
      for (var h = 0; h < m; h++) {
        var f = n[h];
        if (d ? f === "/" && n[h - 1] === "*" && (d = !1) : a ? a === f && (a = !1) : f === "/" && n[h + 1] === "*" ? d = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !d && a === !1 && s === 0) {
          if (f === ":" && u === -1)
            u = h;
          else if (f === ";" || h === m - 1) {
            if (u !== -1) {
              var v = oo(n.substring(c, u).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var g = n.substring(c, h).trim();
                t += " " + g + ";";
              }
            }
            c = h + 1, u = -1;
          }
        }
      }
    }
    return r && (t += Ll(r)), i && (t += Ll(i, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function Sr(n, e, t, r, i, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var d = Bf(t, r, a);
    d == null ? n.removeAttribute("class") : e ? n.className = d : n.setAttribute("class", d), n.__className = t;
  } else if (a && i !== a)
    for (var l in a) {
      var c = !!a[l];
      (i == null || c !== !!i[l]) && n.classList.toggle(l, c);
    }
  return a;
}
function lo(n, e = {}, t, r) {
  for (var i in t) {
    var a = t[i];
    e[i] !== a && (t[i] == null ? n.style.removeProperty(i) : n.style.setProperty(i, a, r));
  }
}
function nt(n, e, t, r) {
  var i = n.__style;
  if (i !== e) {
    var a = Gf(e, r);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else r && (Array.isArray(r) ? (lo(n, t == null ? void 0 : t[0], r[0]), lo(n, t == null ? void 0 : t[1], r[1], "important")) : lo(n, t, r));
  return r;
}
function Ro(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ua(e))
      return Uc();
    for (var r of n.options)
      r.selected = e.includes(Ol(r));
    return;
  }
  for (r of n.options) {
    var i = Ol(r);
    if (sf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Vf(n) {
  var e = new MutationObserver(() => {
    Ro(n, n.__value);
  });
  e.observe(n, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), Bs(() => {
    e.disconnect();
  });
}
function Ol(n) {
  return "__value" in n ? n.__value : n.value;
}
const _a = Symbol("class"), Ia = Symbol("style"), fu = Symbol("is custom element"), hu = Symbol("is html");
function Rl(n, e) {
  var t = nl(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function qf(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function At(n, e, t, r) {
  var i = nl(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[wc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && vu(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function Wf(n, e, t, r, i = !1, a = !1) {
  var s = nl(n), d = s[fu], l = !s[hu], c = e || {}, u = n.tagName === "OPTION";
  for (var h in e)
    h in t || (t[h] = null);
  t.class ? t.class = cu(t.class) : t[_a] && (t.class = null), t[Ia] && (t.style ?? (t.style = null));
  var f = vu(n);
  for (const A in t) {
    let y = t[A];
    if (u && A === "value" && y == null) {
      n.value = n.__value = "", c[A] = y;
      continue;
    }
    if (A === "class") {
      var v = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      Sr(n, v, y, r, e == null ? void 0 : e[_a], t[_a]), c[A] = y, c[_a] = t[_a];
      continue;
    }
    if (A === "style") {
      nt(n, y, e == null ? void 0 : e[Ia], t[Ia]), c[A] = y, c[Ia] = t[Ia];
      continue;
    }
    var g = c[A];
    if (!(y === g && !(y === void 0 && n.hasAttribute(A)))) {
      c[A] = y;
      var m = A[0] + A[1];
      if (m !== "$$")
        if (m === "on") {
          const T = {}, C = "$$" + A;
          let S = A.slice(2);
          var p = wf(S);
          if (Sf(S) && (S = S.slice(0, -7), T.capture = !0), !p && g) {
            if (y != null) continue;
            n.removeEventListener(S, c[C], T), c[C] = null;
          }
          if (y != null)
            if (p)
              n[`__${S}`] = y, ct([S]);
            else {
              let b = function(w) {
                c[A].call(this, w);
              };
              c[C] = tl(S, n, b, T);
            }
          else p && (n[`__${S}`] = void 0);
        } else if (A === "style")
          At(n, A, y);
        else if (A === "autofocus")
          df(
            /** @type {HTMLElement} */
            n,
            !!y
          );
        else if (!d && (A === "__value" || A === "value" && y != null))
          n.value = n.__value = y;
        else if (A === "selected" && u)
          qf(
            /** @type {HTMLOptionElement} */
            n,
            y
          );
        else {
          var I = A;
          l || (I = Df(I));
          var E = I === "defaultValue" || I === "defaultChecked";
          if (y == null && !d && !E)
            if (s[A] = null, I === "value" || I === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                n
              );
              const C = e === void 0;
              if (I === "value") {
                let S = T.defaultValue;
                T.removeAttribute(I), T.defaultValue = S, T.value = T.__value = C ? S : null;
              } else {
                let S = T.defaultChecked;
                T.removeAttribute(I), T.defaultChecked = S, T.checked = C ? S : !1;
              }
            } else
              n.removeAttribute(A);
          else E || f.includes(I) && (d || typeof y != "string") ? (n[I] = y, I in s && (s[I] = Et)) : typeof y != "function" && At(n, I, y);
        }
    }
  }
  return c;
}
function qe(n, e, t = [], r = [], i, a = !1, s = !1) {
  Fd(t, r, (d) => {
    var l = void 0, c = {}, u = n.nodeName === "SELECT", h = !1;
    if (Tr(() => {
      var v = e(...d.map(o)), g = Wf(
        n,
        l,
        v,
        i,
        a,
        s
      );
      h && u && "value" in v && Ro(
        /** @type {HTMLSelectElement} */
        n,
        v.value
      );
      for (let p of Object.getOwnPropertySymbols(c))
        v[p] || wt(c[p]);
      for (let p of Object.getOwnPropertySymbols(v)) {
        var m = v[p];
        p.description === Ac && (!l || m !== l[p]) && (c[p] && wt(c[p]), c[p] = qt(() => Uf(n, () => m))), g[p] = m;
      }
      l = g;
    }), u) {
      var f = (
        /** @type {HTMLSelectElement} */
        n
      );
      da(() => {
        Ro(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Vf(f);
      });
    }
    h = !0;
  });
}
function nl(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [fu]: n.nodeName.includes("-"),
      [hu]: n.namespaceURI === yc
    })
  );
}
var Ml = /* @__PURE__ */ new Map();
function vu(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Ml.get(e);
  if (t) return t;
  Ml.set(e, t = []);
  for (var r, i = n, a = Element.prototype; a !== i; ) {
    r = yd(i);
    for (var s in r)
      r[s].set && t.push(s);
    i = Ps(i);
  }
  return t;
}
const zf = () => performance.now(), Ir = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => zf(),
  tasks: /* @__PURE__ */ new Set()
};
function gu() {
  const n = Ir.now();
  Ir.tasks.forEach((e) => {
    e.c(n) || (Ir.tasks.delete(e), e.f());
  }), Ir.tasks.size !== 0 && Ir.tick(gu);
}
function jf(n) {
  let e;
  return Ir.tasks.size === 0 && Ir.tick(gu), {
    promise: new Promise((t) => {
      Ir.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      Ir.tasks.delete(e);
    }
  };
}
function Qa(n, e) {
  la(() => {
    n.dispatchEvent(new CustomEvent(e));
  });
}
function Zf(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function Pl(n) {
  const e = {}, t = n.split(";");
  for (const r of t) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = Zf(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Xf = (n) => n;
function Ws(n, e, t) {
  var r = (
    /** @type {EachItem} */
    pi
  ), i, a, s, d = null;
  r.a ?? (r.a = {
    element: n,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, t == null ? void 0 : t());
        s = ys(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!n.getAnimations().length) {
        var { position: l, width: c, height: u } = getComputedStyle(n);
        if (l !== "absolute" && l !== "fixed") {
          var h = (
            /** @type {HTMLElement | SVGElement} */
            n.style
          );
          d = {
            position: h.position,
            width: h.width,
            height: h.height,
            transform: h.transform
          }, h.position = "absolute", h.width = c, h.height = u;
          var f = n.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var v = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            h.transform = h.transform ? `${h.transform} ${v}` : v;
          }
        }
      }
    },
    unfix() {
      if (d) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          n.style
        );
        l.position = d.position, l.width = d.width, l.height = d.height, l.transform = d.transform;
      }
    }
  }), r.a.element = n;
}
function kl(n, e, t, r) {
  var i = (n & 1) !== 0, a = (n & 2) !== 0, s = i && a, d = (n & 4) !== 0, l = s ? "both" : i ? "in" : "out", c, u = e.inert, h = e.style.overflow, f, v;
  function g() {
    return la(() => c ?? (c = t()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var m = {
    is_global: d,
    in() {
      var A;
      if (e.inert = u, !i) {
        v == null || v.abort(), (A = v == null ? void 0 : v.reset) == null || A.call(v);
        return;
      }
      a || f == null || f.abort(), Qa(e, "introstart"), f = ys(e, g(), v, 1, () => {
        Qa(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = h;
      });
    },
    out(A) {
      if (!a) {
        A == null || A(), c = void 0;
        return;
      }
      e.inert = !0, Qa(e, "outrostart"), v = ys(e, g(), f, 0, () => {
        Qa(e, "outroend"), A == null || A();
      });
    },
    stop: () => {
      f == null || f.abort(), v == null || v.abort();
    }
  }, p = (
    /** @type {Effect} */
    Ne
  );
  if ((p.transitions ?? (p.transitions = [])).push(m), i && bs) {
    var I = d;
    if (!I) {
      for (var E = (
        /** @type {Effect | null} */
        p.parent
      ); E && E.f & Yr; )
        for (; (E = E.parent) && !(E.f & Zr); )
          ;
      I = !E || (E.f & Fs) !== 0;
    }
    I && da(() => {
      lr(() => m.in());
    });
  }
}
function ys(n, e, t, r, i) {
  var a = r === 1;
  if (Ni(e)) {
    var s, d = !1;
    return Ar(() => {
      if (!d) {
        var p = e({ direction: a ? "in" : "out" });
        s = ys(n, p, t, r, i);
      }
    }), {
      abort: () => {
        d = !0, s == null || s.abort();
      },
      deactivate: () => s.deactivate(),
      reset: () => s.reset(),
      t: () => s.t()
    };
  }
  if (t == null || t.deactivate(), !(e != null && e.duration))
    return i(), {
      abort: me,
      deactivate: me,
      reset: me,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: u, easing: h = Xf } = e;
  var f = [];
  if (a && t === void 0 && (u && u(0, 1), c)) {
    var v = Pl(c(0, 1));
    f.push(v, v);
  }
  var g = () => 1 - r, m = n.animate(f, { duration: l, fill: "forwards" });
  return m.onfinish = () => {
    m.cancel();
    var p = (t == null ? void 0 : t.t()) ?? 1 - r;
    t == null || t.abort();
    var I = r - p, E = (
      /** @type {number} */
      e.duration * Math.abs(I)
    ), A = [];
    if (E > 0) {
      var y = !1;
      if (c)
        for (var T = Math.ceil(E / 16.666666666666668), C = 0; C <= T; C += 1) {
          var S = p + I * h(C / T), b = Pl(c(S, 1 - S));
          A.push(b), y || (y = b.overflow === "hidden");
        }
      y && (n.style.overflow = "hidden"), g = () => {
        var w = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          m.currentTime
        );
        return p + I * h(w / E);
      }, u && jf(() => {
        if (m.playState !== "running") return !1;
        var w = g();
        return u(w, 1 - w), !0;
      });
    }
    m = n.animate(A, { duration: E, fill: "forwards" }), m.onfinish = () => {
      g = () => r, u == null || u(r, 1 - r), i();
    };
  }, {
    abort: () => {
      m && (m.cancel(), m.effect = null, m.onfinish = me);
    },
    deactivate: () => {
      i = me;
    },
    reset: () => {
      r === 0 && (u == null || u(1, 0));
    },
    t: () => g()
  };
}
function Kf(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  cf(n, "input", async (i) => {
    var a = i ? n.defaultValue : n.value;
    if (a = uo(n) ? co(a) : a, t(a), Qe !== null && r.add(Qe), await ru(), a !== (a = e())) {
      var s = n.selectionStart, d = n.selectionEnd, l = n.value.length;
      if (n.value = a ?? "", d !== null) {
        var c = n.value.length;
        s === d && d === l && c > l ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = s, n.selectionEnd = Math.min(d, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  lr(e) == null && n.value && (t(uo(n) ? co(n.value) : n.value), Qe !== null && r.add(Qe)), Gs(() => {
    var i = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ls ?? Qe
      );
      if (r.has(a))
        return;
    }
    uo(n) && i === co(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function uo(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function co(n) {
  return n === "" ? null : +n;
}
function Fl(n, e) {
  return n === e || (n == null ? void 0 : n[ir]) === e;
}
function xe(n = {}, e, t, r) {
  return da(() => {
    var i, a;
    return Gs(() => {
      i = a, a = [], lr(() => {
        n !== t(...a) && (e(n, ...a), i && Fl(t(...i), n) && e(null, ...i));
      });
    }), () => {
      Ar(() => {
        a && Fl(t(...a), n) && e(null, ...a);
      });
    };
  }), n;
}
function Yf(n = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    tt
  ), t = e.l.u;
  if (!t) return;
  let r = () => au(e.s);
  if (n) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ba(() => {
      let d = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], d = !0);
      return d && i++, i;
    });
    r = () => o(s);
  }
  t.b.length && vf(() => {
    Nl(e, r), yo(t.b);
  }), Se(() => {
    const i = lr(() => t.m.map(xc));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), t.a.length && Se(() => {
    Nl(e, r), yo(t.a);
  });
}
function Nl(n, e) {
  if (n.l.s)
    for (const t of n.l.s) o(t);
  e();
}
function mu(n, e, t) {
  if (n == null)
    return e(void 0), me;
  const r = lr(
    () => n.subscribe(
      e,
      // @ts-expect-error
      t
    )
  );
  return r.unsubscribe ? () => r.unsubscribe() : r;
}
const Pi = [];
function ar(n, e = me) {
  let t = null;
  const r = /* @__PURE__ */ new Set();
  function i(d) {
    if (Ko(n, d) && (n = d, t)) {
      const l = !Pi.length;
      for (const c of r)
        c[1](), Pi.push(c, n);
      if (l) {
        for (let c = 0; c < Pi.length; c += 2)
          Pi[c][0](Pi[c + 1]);
        Pi.length = 0;
      }
    }
  }
  function a(d) {
    i(d(
      /** @type {T} */
      n
    ));
  }
  function s(d, l = me) {
    const c = [d, l];
    return r.add(c), r.size === 1 && (t = e(i, a) || me), d(
      /** @type {T} */
      n
    ), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Jf(n) {
  let e;
  return mu(n, (t) => e = t)(), e;
}
let $a = !1, Mo = Symbol();
function Ci(n, e, t) {
  const r = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ Hd(void 0),
    unsubscribe: me
  });
  if (r.store !== n && !(Mo in t))
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = me;
    else {
      var i = !0;
      r.unsubscribe = mu(n, (a) => {
        i ? r.source.v = a : V(r.source, a);
      }), i = !1;
    }
  return n && Mo in t ? Jf(n) : o(r.source);
}
function rr(n, e) {
  return n.set(e), e;
}
function Ti() {
  const n = {};
  function e() {
    Bs(() => {
      for (var t in n)
        n[t].unsubscribe();
      ms(n, Mo, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function Qf(n) {
  var e = $a;
  try {
    return $a = !1, [n(), $a];
  } finally {
    $a = e;
  }
}
const $f = {
  get(n, e) {
    if (!n.exclude.includes(e))
      return n.props[e];
  },
  set(n, e) {
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    if (!n.exclude.includes(e) && e in n.props)
      return {
        enumerable: !0,
        configurable: !0,
        value: n.props[e]
      };
  },
  has(n, e) {
    return n.exclude.includes(e) ? !1 : e in n.props;
  },
  ownKeys(n) {
    return Reflect.ownKeys(n.props).filter((e) => !n.exclude.includes(e));
  }
};
// @__NO_SIDE_EFFECTS__
function ze(n, e, t) {
  return new Proxy(
    { props: n, exclude: e },
    $f
  );
}
const eh = {
  get(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Ni(r) && (r = r()), typeof r == "object" && r !== null && e in r) return r[e];
    }
  },
  set(n, e, t) {
    let r = n.props.length;
    for (; r--; ) {
      let i = n.props[r];
      Ni(i) && (i = i());
      const a = Vr(i, e);
      if (a && a.set)
        return a.set(t), !0;
    }
    return !1;
  },
  getOwnPropertyDescriptor(n, e) {
    let t = n.props.length;
    for (; t--; ) {
      let r = n.props[t];
      if (Ni(r) && (r = r()), typeof r == "object" && r !== null && e in r) {
        const i = Vr(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(n, e) {
    if (e === ir || e === xd) return !1;
    for (let t of n.props)
      if (Ni(t) && (t = t()), t != null && e in t) return !0;
    return !1;
  },
  ownKeys(n) {
    const e = [];
    for (let t of n.props)
      if (Ni(t) && (t = t()), !!t) {
        for (const r in t)
          e.includes(r) || e.push(r);
        for (const r of Object.getOwnPropertySymbols(t))
          e.includes(r) || e.push(r);
      }
    return e;
  }
};
function $e(...n) {
  return new Proxy({ props: n }, eh);
}
function _(n, e, t, r) {
  var A;
  var i = !oa || (t & 2) !== 0, a = (t & 8) !== 0, s = (t & 16) !== 0, d = (
    /** @type {V} */
    r
  ), l = !0, c = () => (l && (l = !1, d = s ? lr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), d), u;
  if (a) {
    var h = ir in n || xd in n;
    u = ((A = Vr(n, e)) == null ? void 0 : A.set) ?? (h && e in n ? (y) => n[e] = y : void 0);
  }
  var f, v = !1;
  a ? [f, v] = Qf(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && r !== void 0 && (f = c(), u && (i && Mc(), u(f)));
  var g;
  if (i ? g = () => {
    var y = (
      /** @type {V} */
      n[e]
    );
    return y === void 0 ? c() : (l = !0, y);
  } : g = () => {
    var y = (
      /** @type {V} */
      n[e]
    );
    return y !== void 0 && (d = /** @type {V} */
    void 0), y === void 0 ? d : y;
  }, i && !(t & 4))
    return g;
  if (u) {
    var m = n.$$legacy;
    return (
      /** @type {() => V} */
      function(y, T) {
        return arguments.length > 0 ? ((!i || !T || m || v) && u(T ? g() : y), y) : g();
      }
    );
  }
  var p = !1, I = (t & 1 ? Ba : Yo)(() => (p = !1, g()));
  a && o(I);
  var E = (
    /** @type {Effect} */
    Ne
  );
  return (
    /** @type {() => V} */
    function(y, T) {
      if (arguments.length > 0) {
        const C = T ? o(I) : i && a ? Ee(y) : y;
        return V(I, C), p = !0, d !== void 0 && (d = C), y;
      }
      return wi && p || E.f & Si ? I.v : o(I);
    }
  );
}
const th = "5";
var Id;
typeof window < "u" && ((Id = window.__svelte ?? (window.__svelte = {})).v ?? (Id.v = /* @__PURE__ */ new Set())).add(th);
var Po = function(n, e) {
  return Po = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, Po(n, e);
};
function hn(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Po(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Ze = function() {
  return Ze = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Ze.apply(this, arguments);
};
function nh(n, e, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function d(u) {
      try {
        c(r.next(u));
      } catch (h) {
        s(h);
      }
    }
    function l(u) {
      try {
        c(r.throw(u));
      } catch (h) {
        s(h);
      }
    }
    function c(u) {
      u.done ? a(u.value) : i(u.value).then(d, l);
    }
    c((r = r.apply(n, e || [])).next());
  });
}
function rh(n, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = d(0), s.throw = d(1), s.return = d(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function d(c) {
    return function(u) {
      return l([c, u]);
    };
  }
  function l(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, c[0] && (t = 0)), t; ) try {
      if (r = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done) return a;
      switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
        case 0:
        case 1:
          a = c;
          break;
        case 4:
          return t.label++, { value: c[1], done: !1 };
        case 5:
          t.label++, i = c[1], c = [0];
          continue;
        case 7:
          c = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            t = 0;
            continue;
          }
          if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
            t.label = c[1];
            break;
          }
          if (c[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = c;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(c);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      c = e.call(n, t);
    } catch (u) {
      c = [6, u], i = 0;
    } finally {
      r = a = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Bn(n) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && n[e], r = 0;
  if (t) return t.call(n);
  if (n && typeof n.length == "number") return {
    next: function() {
      return n && r >= n.length && (n = void 0), { value: n && n[r++], done: !n };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Ul(n, e) {
  var t = typeof Symbol == "function" && n[Symbol.iterator];
  if (!t) return n;
  var r = t.call(n), i, a = [], s;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = r.next()).done; ) a.push(i.value);
  } catch (d) {
    s = { error: d };
  } finally {
    try {
      i && !i.done && (t = r.return) && t.call(r);
    } finally {
      if (s) throw s.error;
    }
  }
  return a;
}
function ih(n, e, t) {
  if (t || arguments.length === 2) for (var r = 0, i = e.length, a; r < i; r++)
    (a || !(r in e)) && (a || (a = Array.prototype.slice.call(e, 0, r)), a[r] = e[r]);
  return n.concat(a || Array.prototype.slice.call(e));
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
var vn = (
  /** @class */
  function() {
    function n(e) {
      e === void 0 && (e = {}), this.adapter = e;
    }
    return Object.defineProperty(n, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "strings", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "numbers", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(n, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: !1,
      configurable: !0
    }), n.prototype.init = function() {
    }, n.prototype.destroy = function() {
    }, n;
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
function ah(n) {
  return n === void 0 && (n = window), sh(n) ? { passive: !0 } : !1;
}
function sh(n) {
  n === void 0 && (n = window);
  var e = !1;
  try {
    var t = {
      // This function will be called when the browser
      // attempts to access the passive property.
      get passive() {
        return e = !0, !1;
      }
    }, r = function() {
    };
    n.document.addEventListener("test", r, t), n.document.removeEventListener("test", r, t);
  } catch {
    e = !1;
  }
  return e;
}
const pu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: ah
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
function oh(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (_u(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function _u(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function lh(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var r = t.scrollWidth;
  return document.documentElement.removeChild(t), r;
}
const Va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: oh,
  estimateScrollWidth: lh,
  matches: _u
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
var dh = {
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
var uh = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dh;
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
    }, e.prototype.shake = function(t) {
      var r = e.cssClasses.LABEL_SHAKE;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.float = function(t) {
      var r = e.cssClasses, i = r.LABEL_FLOAT_ABOVE, a = r.LABEL_SHAKE;
      t ? this.adapter.addClass(i) : (this.adapter.removeClass(i), this.adapter.removeClass(a));
    }, e.prototype.setRequired = function(t) {
      var r = e.cssClasses.LABEL_REQUIRED;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleShakeAnimationEnd = function() {
      var t = e.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(t);
    }, e;
  }(vn)
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
var ri = {
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
var ch = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.transitionEndHandler = function(i) {
        r.handleTransitionEnd(i);
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ri;
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
      this.adapter.removeClass(ri.LINE_RIPPLE_DEACTIVATING), this.adapter.addClass(ri.LINE_RIPPLE_ACTIVE);
    }, e.prototype.setRippleCenter = function(t) {
      this.adapter.setStyle("transform-origin", t + "px center");
    }, e.prototype.deactivate = function() {
      this.adapter.addClass(ri.LINE_RIPPLE_DEACTIVATING);
    }, e.prototype.handleTransitionEnd = function(t) {
      var r = this.adapter.hasClass(ri.LINE_RIPPLE_DEACTIVATING);
      t.propertyName === "opacity" && r && (this.adapter.removeClass(ri.LINE_RIPPLE_ACTIVE), this.adapter.removeClass(ri.LINE_RIPPLE_DEACTIVATING));
    }, e;
  }(vn)
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
var fh = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Hl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, hh = {
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
var vh = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      return n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return fh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return hh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Hl;
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
    }), e.prototype.notch = function(t) {
      var r = e.cssClasses.OUTLINE_NOTCHED;
      t > 0 && (t += Hl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
  }(vn)
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
var gh = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, mh = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Bl = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, es;
function ph(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, r = es;
  if (typeof es == "boolean" && !e)
    return es;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var a = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return r = a || s, e || (es = r), r;
}
function _h(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + t.left, s = i + t.top, d, l;
  if (n.type === "touchstart") {
    var c = n;
    d = c.changedTouches[0].pageX - a, l = c.changedTouches[0].pageY - s;
  } else {
    var u = n;
    d = u.pageX - a, l = u.pageY - s;
  }
  return { x: d, y: l };
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
var Gl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], Vl = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ts = [], Ih = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
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
        return gh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return mh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Bl;
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
      var t = this, r = this.supportsPressRipple();
      if (this.registerRootHandlers(r), r) {
        var i = e.cssClasses, a = i.ROOT, s = i.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.addClass(a), t.adapter.isUnbounded() && (t.adapter.addClass(s), t.layoutInternal());
        });
      }
    }, e.prototype.destroy = function() {
      var t = this;
      if (this.supportsPressRipple()) {
        this.activationTimer && (clearTimeout(this.activationTimer), this.activationTimer = 0, this.adapter.removeClass(e.cssClasses.FG_ACTIVATION)), this.fgDeactivationRemovalTimer && (clearTimeout(this.fgDeactivationRemovalTimer), this.fgDeactivationRemovalTimer = 0, this.adapter.removeClass(e.cssClasses.FG_DEACTIVATION));
        var r = e.cssClasses, i = r.ROOT, a = r.UNBOUNDED;
        requestAnimationFrame(function() {
          t.adapter.removeClass(i), t.adapter.removeClass(a), t.removeCssVars();
        });
      }
      this.deregisterRootHandlers(), this.deregisterDeactivationHandlers();
    }, e.prototype.activate = function(t) {
      this.activateImpl(t);
    }, e.prototype.deactivate = function() {
      this.deactivateImpl();
    }, e.prototype.layout = function() {
      var t = this;
      this.layoutFrame && cancelAnimationFrame(this.layoutFrame), this.layoutFrame = requestAnimationFrame(function() {
        t.layoutInternal(), t.layoutFrame = 0;
      });
    }, e.prototype.setUnbounded = function(t) {
      var r = e.cssClasses.UNBOUNDED;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.handleFocus = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.addClass(e.cssClasses.BG_FOCUSED);
      });
    }, e.prototype.handleBlur = function() {
      var t = this;
      requestAnimationFrame(function() {
        return t.adapter.removeClass(e.cssClasses.BG_FOCUSED);
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
    }, e.prototype.registerRootHandlers = function(t) {
      var r, i;
      if (t) {
        try {
          for (var a = Bn(Gl), s = a.next(); !s.done; s = a.next()) {
            var d = s.value;
            this.adapter.registerInteractionHandler(d, this.activateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            s && !s.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
        this.adapter.isUnbounded() && this.adapter.registerResizeHandler(this.resizeHandler);
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler), this.adapter.registerInteractionHandler("blur", this.blurHandler);
    }, e.prototype.registerDeactivationHandlers = function(t) {
      var r, i;
      if (t.type === "keydown")
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      else
        try {
          for (var a = Bn(Vl), s = a.next(); !s.done; s = a.next()) {
            var d = s.value;
            this.adapter.registerDocumentInteractionHandler(d, this.deactivateHandler);
          }
        } catch (l) {
          r = { error: l };
        } finally {
          try {
            s && !s.done && (i = a.return) && i.call(a);
          } finally {
            if (r) throw r.error;
          }
        }
    }, e.prototype.deregisterRootHandlers = function() {
      var t, r;
      try {
        for (var i = Bn(Gl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.activateHandler);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler), this.adapter.deregisterInteractionHandler("blur", this.blurHandler), this.adapter.isUnbounded() && this.adapter.deregisterResizeHandler(this.resizeHandler);
    }, e.prototype.deregisterDeactivationHandlers = function() {
      var t, r;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var i = Bn(Vl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterDocumentInteractionHandler(s, this.deactivateHandler);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.removeCssVars = function() {
      var t = this, r = e.strings, i = Object.keys(r);
      i.forEach(function(a) {
        a.indexOf("VAR_") === 0 && t.adapter.updateCssVariable(r[a], null);
      });
    }, e.prototype.activateImpl = function(t) {
      var r = this;
      if (!this.adapter.isSurfaceDisabled()) {
        var i = this.activationState;
        if (!i.isActivated) {
          var a = this.previousActivationEvent, s = a && t !== void 0 && a.type !== t.type;
          if (!s) {
            i.isActivated = !0, i.isProgrammatic = t === void 0, i.activationEvent = t, i.wasActivatedByPointer = i.isProgrammatic ? !1 : t !== void 0 && (t.type === "mousedown" || t.type === "touchstart" || t.type === "pointerdown");
            var d = t !== void 0 && ts.length > 0 && ts.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (d) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (ts.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ts = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(t), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
            });
          }
        }
      }
    }, e.prototype.checkElementMadeActive = function(t) {
      return t !== void 0 && t.type === "keydown" ? this.adapter.isSurfaceActive() : !0;
    }, e.prototype.animateActivation = function() {
      var t = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, d = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, c = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var u = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, g = f.endPoint;
        u = v.x + "px, " + v.y + "px", h = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(i, u), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(d), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, c);
    }, e.prototype.getFgTranslationCoordinates = function() {
      var t = this.activationState, r = t.activationEvent, i = t.wasActivatedByPointer, a;
      i ? a = _h(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
        x: this.frame.width / 2,
        y: this.frame.height / 2
      }, a = {
        x: a.x - this.initialSize / 2,
        y: a.y - this.initialSize / 2
      };
      var s = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint: a, endPoint: s };
    }, e.prototype.runDeactivationUXLogicIfReady = function() {
      var t = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, s = i.isActivated, d = a || !s;
      d && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
        t.adapter.removeClass(r);
      }, Bl.FG_DEACTIVATION_MS));
    }, e.prototype.rmBoundedActivationClasses = function() {
      var t = e.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(t), this.activationAnimationHasEnded = !1, this.adapter.computeBoundingRect();
    }, e.prototype.resetActivationState = function() {
      var t = this;
      this.previousActivationEvent = this.activationState.activationEvent, this.activationState = this.defaultActivationState(), setTimeout(function() {
        return t.previousActivationEvent = void 0;
      }, e.numbers.TAP_DELAY_MS);
    }, e.prototype.deactivateImpl = function() {
      var t = this, r = this.activationState;
      if (r.isActivated) {
        var i = Ze({}, r);
        r.isProgrammatic ? (requestAnimationFrame(function() {
          t.animateDeactivation(i);
        }), this.resetActivationState()) : (this.deregisterDeactivationHandlers(), requestAnimationFrame(function() {
          t.activationState.hasDeactivationUXRun = !0, t.animateDeactivation(i), t.resetActivationState();
        }));
      }
    }, e.prototype.animateDeactivation = function(t) {
      var r = t.wasActivatedByPointer, i = t.wasElementMadeActive;
      (r || i) && this.runDeactivationUXLogicIfReady();
    }, e.prototype.layoutInternal = function() {
      var t = this;
      this.frame = this.adapter.computeBoundingRect();
      var r = Math.max(this.frame.height, this.frame.width), i = function() {
        var s = Math.sqrt(Math.pow(t.frame.width, 2) + Math.pow(t.frame.height, 2));
        return s + e.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? r : i();
      var a = Math.floor(r * e.numbers.INITIAL_ORIGIN_SCALE);
      this.adapter.isUnbounded() && a % 2 !== 0 ? this.initialSize = a - 1 : this.initialSize = a, this.fgScale = "" + this.maxRadius / this.initialSize, this.updateLayoutCssVars();
    }, e.prototype.updateLayoutCssVars = function() {
      var t = e.strings, r = t.VAR_FG_SIZE, i = t.VAR_LEFT, a = t.VAR_TOP, s = t.VAR_FG_SCALE;
      this.adapter.updateCssVariable(r, this.initialSize + "px"), this.adapter.updateCssVariable(s, this.fgScale), this.adapter.isUnbounded() && (this.unboundedCoords = {
        left: Math.round(this.frame.width / 2 - this.initialSize / 2),
        top: Math.round(this.frame.height / 2 - this.initialSize / 2)
      }, this.adapter.updateCssVariable(i, this.unboundedCoords.left + "px"), this.adapter.updateCssVariable(a, this.unboundedCoords.top + "px"));
    }, e;
  }(vn)
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
var fo = {
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
}, bh = {
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
}, ql = {
  LABEL_SCALE: 0.75
}, yh = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], Ch = [
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
var Wl = ["mousedown", "touchstart"], zl = ["click", "keydown"], Ah = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
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
        return bh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return fo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ql;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return Ch.indexOf(t) >= 0;
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
      var t, r, i, a;
      this.adapter.hasLabel() && this.getNativeInput().required && this.adapter.setLabelRequired(!0), this.adapter.isFocused() ? this.inputFocusHandler() : this.adapter.hasLabel() && this.shouldFloat && (this.notchOutline(!0), this.adapter.floatLabel(!0), this.styleFloating(!0)), this.adapter.registerInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.registerInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.registerInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Bn(Wl), d = s.next(); !d.done; d = s.next()) {
          var l = d.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          d && !d.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var c = Bn(zl), u = c.next(); !u.done; u = c.next()) {
          var l = u.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          u && !u.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Bn(Wl), d = s.next(); !d.done; d = s.next()) {
          var l = d.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          d && !d.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var c = Bn(zl), u = c.next(); !u.done; u = c.next()) {
          var l = u.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          u && !u.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      this.adapter.deregisterValidationAttributeChangeHandler(this.validationObserver);
    }, e.prototype.handleTextFieldInteraction = function() {
      var t = this.adapter.getNativeInput();
      t && t.disabled || (this.receivedUserInput = !0);
    }, e.prototype.handleValidationAttributeChange = function(t) {
      var r = this;
      t.some(function(i) {
        return yh.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var r = this.adapter.getLabelWidth() * ql.LABEL_SCALE;
          this.adapter.notchOutline(r);
        } else
          this.adapter.closeOutline();
    }, e.prototype.activateFocus = function() {
      this.isFocused = !0, this.styleFocused(this.isFocused), this.adapter.activateLineRipple(), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.helperText && (this.helperText.isPersistent() || !this.helperText.isValidation() || !this.valid) && this.helperText.showToScreenReader();
    }, e.prototype.setTransformOrigin = function(t) {
      if (!(this.isDisabled() || this.adapter.hasOutline())) {
        var r = t.touches, i = r ? r[0] : t, a = i.target.getBoundingClientRect(), s = i.clientX - a.left;
        this.adapter.setLineRippleTransformOrigin(s);
      }
    }, e.prototype.handleInput = function() {
      this.autoCompleteFocus(), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.autoCompleteFocus = function() {
      this.receivedUserInput || this.activateFocus();
    }, e.prototype.deactivateFocus = function() {
      this.isFocused = !1, this.adapter.deactivateLineRipple();
      var t = this.isValid();
      this.styleValidity(t), this.styleFocused(this.isFocused), this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.adapter.shakeLabel(this.shouldShake)), this.shouldFloat || (this.receivedUserInput = !1);
    }, e.prototype.getValue = function() {
      return this.getNativeInput().value;
    }, e.prototype.setValue = function(t) {
      if (this.getValue() !== t && (this.getNativeInput().value = t), this.setcharacterCounter(t.length), this.validateOnValueChange) {
        var r = this.isValid();
        this.styleValidity(r);
      }
      this.adapter.hasLabel() && (this.notchOutline(this.shouldFloat), this.adapter.floatLabel(this.shouldFloat), this.styleFloating(this.shouldFloat), this.validateOnValueChange && this.adapter.shakeLabel(this.shouldShake));
    }, e.prototype.isValid = function() {
      return this.useNativeValidation ? this.isNativeInputValid() : this.valid;
    }, e.prototype.setValid = function(t) {
      this.valid = t, this.styleValidity(t);
      var r = !t && !this.isFocused && !!this.getValue();
      this.adapter.hasLabel() && this.adapter.shakeLabel(r);
    }, e.prototype.setValidateOnValueChange = function(t) {
      this.validateOnValueChange = t;
    }, e.prototype.getValidateOnValueChange = function() {
      return this.validateOnValueChange;
    }, e.prototype.setUseNativeValidation = function(t) {
      this.useNativeValidation = t;
    }, e.prototype.isDisabled = function() {
      return this.getNativeInput().disabled;
    }, e.prototype.setDisabled = function(t) {
      this.getNativeInput().disabled = t, this.styleDisabled(t);
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.setTrailingIconAriaLabel = function(t) {
      this.trailingIcon && this.trailingIcon.setAriaLabel(t);
    }, e.prototype.setTrailingIconContent = function(t) {
      this.trailingIcon && this.trailingIcon.setContent(t);
    }, e.prototype.setcharacterCounter = function(t) {
      if (this.characterCounter) {
        var r = this.getNativeInput().maxLength;
        if (r === -1)
          throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");
        this.characterCounter.setCounterValue(t, r);
      }
    }, e.prototype.isBadInput = function() {
      return this.getNativeInput().validity.badInput || !1;
    }, e.prototype.isNativeInputValid = function() {
      return this.getNativeInput().validity.valid;
    }, e.prototype.styleValidity = function(t) {
      var r = e.cssClasses.INVALID;
      if (t ? this.adapter.removeClass(r) : this.adapter.addClass(r), this.helperText) {
        this.helperText.setValidity(t);
        var i = this.helperText.isValidation();
        if (!i)
          return;
        var a = this.helperText.isVisible(), s = this.helperText.getId();
        a && s ? this.adapter.setInputAttr(fo.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(fo.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.styleFocused = function(t) {
      var r = e.cssClasses.FOCUSED;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.styleDisabled = function(t) {
      var r = e.cssClasses, i = r.DISABLED, a = r.INVALID;
      t ? (this.adapter.addClass(i), this.adapter.removeClass(a)) : this.adapter.removeClass(i), this.leadingIcon && this.leadingIcon.setDisabled(t), this.trailingIcon && this.trailingIcon.setDisabled(t);
    }, e.prototype.styleFloating = function(t) {
      var r = e.cssClasses.LABEL_FLOATING;
      t ? this.adapter.addClass(r) : this.adapter.removeClass(r);
    }, e.prototype.getNativeInput = function() {
      var t = this.adapter ? this.adapter.getNativeInput() : null;
      return t || {
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
  }(vn)
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
var Zn = {
  HELPER_TEXT_PERSISTENT: "mdc-text-field-helper-text--persistent",
  HELPER_TEXT_VALIDATION_MSG: "mdc-text-field-helper-text--validation-msg",
  ROOT: "mdc-text-field-helper-text"
}, vr = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role",
  ROOT_SELECTOR: "." + Zn.ROOT
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
var Eh = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      return n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Zn;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
      /**
       * See {@link MDCTextFieldHelperTextAdapter} for typing information on parameters and return types.
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
          getAttr: function() {
            return null;
          },
          setAttr: function() {
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
      return this.adapter.getAttr(vr.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.isPersistent = function() {
      return this.adapter.hasClass(Zn.HELPER_TEXT_PERSISTENT);
    }, e.prototype.setPersistent = function(t) {
      t ? this.adapter.addClass(Zn.HELPER_TEXT_PERSISTENT) : this.adapter.removeClass(Zn.HELPER_TEXT_PERSISTENT);
    }, e.prototype.isValidation = function() {
      return this.adapter.hasClass(Zn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(Zn.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(Zn.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(vr.ARIA_HIDDEN);
    }, e.prototype.setValidity = function(t) {
      var r = this.adapter.hasClass(Zn.HELPER_TEXT_PERSISTENT), i = this.adapter.hasClass(Zn.HELPER_TEXT_VALIDATION_MSG), a = i && !t;
      a ? (this.showToScreenReader(), this.adapter.getAttr(vr.ROLE) === "alert" ? this.refreshAlertRole() : this.adapter.setAttr(vr.ROLE, "alert")) : this.adapter.removeAttr(vr.ROLE), !r && !a && this.hide();
    }, e.prototype.hide = function() {
      this.adapter.setAttr(vr.ARIA_HIDDEN, "true");
    }, e.prototype.refreshAlertRole = function() {
      var t = this;
      this.adapter.removeAttr(vr.ROLE), requestAnimationFrame(function() {
        t.adapter.setAttr(vr.ROLE, "alert");
      });
    }, e;
  }(vn)
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
var jl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Sh = {
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
var Zl = ["click", "keydown"], xh = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return jl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Sh;
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
      var t, r;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var i = Bn(Zl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.registerInteractionHandler(s, this.interactionHandler);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.destroy = function() {
      var t, r;
      try {
        for (var i = Bn(Zl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.deregisterInteractionHandler(s, this.interactionHandler);
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          a && !a.done && (r = i.return) && r.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.setDisabled = function(t) {
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", jl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var r = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || r) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
  }(vn)
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
var ho = "mdc-dom-focus-sentinel", wh = (
  /** @class */
  function() {
    function n(e, t) {
      t === void 0 && (t = {}), this.root = e, this.options = t, this.elFocusedBeforeTrapFocus = null;
    }
    return n.prototype.trapFocus = function() {
      var e = this.getFocusableElements(this.root);
      if (e.length === 0)
        throw new Error("FocusTrap: Element must have at least one focusable child.");
      this.elFocusedBeforeTrapFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null, this.wrapTabFocus(this.root), this.options.skipInitialFocus || this.focusInitialElement(e, this.options.initialFocusEl);
    }, n.prototype.releaseFocus = function() {
      [].slice.call(this.root.querySelectorAll("." + ho)).forEach(function(e) {
        e.parentElement.removeChild(e);
      }), !this.options.skipRestoreFocus && this.elFocusedBeforeTrapFocus && this.elFocusedBeforeTrapFocus.focus();
    }, n.prototype.wrapTabFocus = function(e) {
      var t = this, r = this.createSentinel(), i = this.createSentinel();
      r.addEventListener("focus", function() {
        var a = t.getFocusableElements(e);
        a.length > 0 && a[a.length - 1].focus();
      }), i.addEventListener("focus", function() {
        var a = t.getFocusableElements(e);
        a.length > 0 && a[0].focus();
      }), e.insertBefore(r, e.children[0]), e.appendChild(i);
    }, n.prototype.focusInitialElement = function(e, t) {
      var r = 0;
      t && (r = Math.max(e.indexOf(t), 0)), e[r].focus();
    }, n.prototype.getFocusableElements = function(e) {
      var t = [].slice.call(e.querySelectorAll("[autofocus], [tabindex], a, input, textarea, select, button"));
      return t.filter(function(r) {
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(ho) && !i, s = !1;
        if (a) {
          var d = getComputedStyle(r);
          s = d.display === "none" || d.visibility === "hidden";
        }
        return a && !s;
      });
    }, n.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(ho), e;
    }, n;
  }()
);
const Th = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: wh
}, Symbol.toStringTag, { value: "Module" }));
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
var ke = {
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
}, en = /* @__PURE__ */ new Set();
en.add(ke.BACKSPACE);
en.add(ke.ENTER);
en.add(ke.SPACEBAR);
en.add(ke.PAGE_UP);
en.add(ke.PAGE_DOWN);
en.add(ke.END);
en.add(ke.HOME);
en.add(ke.ARROW_LEFT);
en.add(ke.ARROW_UP);
en.add(ke.ARROW_RIGHT);
en.add(ke.ARROW_DOWN);
en.add(ke.DELETE);
en.add(ke.ESCAPE);
en.add(ke.TAB);
var gn = {
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
}, tn = /* @__PURE__ */ new Map();
tn.set(gn.BACKSPACE, ke.BACKSPACE);
tn.set(gn.ENTER, ke.ENTER);
tn.set(gn.SPACEBAR, ke.SPACEBAR);
tn.set(gn.PAGE_UP, ke.PAGE_UP);
tn.set(gn.PAGE_DOWN, ke.PAGE_DOWN);
tn.set(gn.END, ke.END);
tn.set(gn.HOME, ke.HOME);
tn.set(gn.ARROW_LEFT, ke.ARROW_LEFT);
tn.set(gn.ARROW_UP, ke.ARROW_UP);
tn.set(gn.ARROW_RIGHT, ke.ARROW_RIGHT);
tn.set(gn.ARROW_DOWN, ke.ARROW_DOWN);
tn.set(gn.DELETE, ke.DELETE);
tn.set(gn.ESCAPE, ke.ESCAPE);
tn.set(gn.TAB, ke.TAB);
var Jr = /* @__PURE__ */ new Set();
Jr.add(ke.PAGE_UP);
Jr.add(ke.PAGE_DOWN);
Jr.add(ke.END);
Jr.add(ke.HOME);
Jr.add(ke.ARROW_LEFT);
Jr.add(ke.ARROW_UP);
Jr.add(ke.ARROW_RIGHT);
Jr.add(ke.ARROW_DOWN);
function It(n) {
  var e = n.key;
  if (en.has(e))
    return e;
  var t = tn.get(n.keyCode);
  return t || ke.UNKNOWN;
}
function Be(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function je(n, e, t, r = { bubbles: !0 }) {
  if (typeof Event > "u")
    throw new Error("Event not defined.");
  if (!n)
    throw new Error("Tried to dispatch event without element.");
  const i = new CustomEvent(e, Object.assign(Object.assign({}, r), { detail: t }));
  return n == null || n.dispatchEvent(i), i;
}
function Oa(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i], s = a.indexOf("$");
    s !== -1 && e.indexOf(a.substring(0, s + 1)) !== -1 || e.indexOf(a) === -1 && (r[a] = n[a]);
  }
  return r;
}
function ut(n, e) {
  let t = Object.getOwnPropertyNames(n);
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const a = t[i];
    a.substring(0, e.length) === e && (r[a.substring(e.length)] = n[a]);
  }
  return r;
}
class ca {
  constructor() {
    this.elementMap = /* @__PURE__ */ new Map();
  }
  /**
   * Listen to an event on an element.
   */
  on(e, t, r, i) {
    this.elementMap.has(e) || this.elementMap.set(e, {});
    const a = this.elementMap.get(e);
    if (a == null)
      throw new Error("Event map couldn't be created.");
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(r, Cf(e, t, r, i));
  }
  /**
   * Unlisten to an event on an element.
   */
  off(e, t, r) {
    const i = this.elementMap.get(e);
    if (i == null || !(t in i))
      return;
    const a = i[t], s = a.get(r);
    s != null && (s(), a.delete(r), a.size === 0 && (delete i[t], Object.keys(i).length === 0 && this.elementMap.delete(e)));
  }
  /**
   * Unlisten to all events managed by this instance.
   */
  clear() {
    this.elementMap.forEach((e, t) => {
      for (let [r, i] of Object.entries(e))
        i.forEach((a, s) => {
          a();
        });
    }), this.elementMap.clear();
  }
}
function te(n, e) {
  let t = [];
  if (e)
    for (let r = 0; r < e.length; r++) {
      const i = e[r], a = Array.isArray(i) ? i[0] : i;
      Array.isArray(i) && i.length > 1 ? t.push(a(n, i[1])) : t.push(a(n));
    }
  return {
    update(r) {
      if ((r && r.length || 0) != t.length)
        throw new Error("You must not change the length of an actions array.");
      if (r)
        for (let i = 0; i < r.length; i++) {
          const a = t[i];
          if (a && a.update) {
            const s = r[i];
            Array.isArray(s) && s.length > 1 ? a.update(s[1]) : a.update();
          }
        }
    },
    destroy() {
      for (let r = 0; r < t.length; r++) {
        const i = t[r];
        i && i.destroy && i.destroy();
      }
    }
  };
}
function Xl(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "on", 3, !1), a = _(e, "component", 3, qa), s = _(e, "tag", 3, "i"), d = /* @__PURE__ */ ze(e, [
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
  const c = /* @__PURE__ */ J(() => s() === "svg" || a() === Oh), u = Ce("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = ie(), g = K(v);
  {
    let m = /* @__PURE__ */ J(() => Be({
      "mdc-button__icon": u === "button",
      "mdc-fab__icon": u === "fab",
      "mdc-icon-button__icon": u === "icon-button",
      "mdc-icon-button__icon--on": u === "icon-button" && i(),
      "mdc-tab__icon": u === "tab",
      "mdc-banner__icon": u === "banner",
      "mdc-segmented-button__icon": u === "segmented-button",
      [r()]: !0
    }));
    ua(g, a, (p, I) => {
      xe(
        I(p, $e(
          {
            get tag() {
              return s();
            },
            get use() {
              return t();
            },
            get class() {
              return o(m);
            },
            "aria-hidden": "true"
          },
          () => o(c) ? { focusable: "false", tabindex: "-1" } : {},
          () => d,
          {
            children: (E, A) => {
              var y = ie(), T = K(y);
              Ie(T, () => e.children ?? me), x(E, y);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => l = E,
        () => l
      );
    });
  }
  return x(n, v), ye(f);
}
var Dh = /* @__PURE__ */ ht("<svg><!></svg>");
function qa(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "tag", 3, "div"), i = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ J(() => [
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
  let s;
  function d() {
    return s;
  }
  var l = { getElement: d }, c = ie(), u = K(c);
  {
    var h = (v) => {
      var g = Dh();
      qe(g, () => ({ ...i }));
      var m = k(g);
      Ie(m, () => e.children ?? me), xe(g, (p) => s = p, () => s), Me(g, (p, I) => te == null ? void 0 : te(p, I), t), x(v, g);
    }, f = (v) => {
      var g = ie(), m = K(g);
      {
        var p = (E) => {
          var A = ie(), y = K(A);
          Oo(y, r, !1, (T, C) => {
            xe(T, (S) => s = S, () => s), Me(T, (S, b) => te == null ? void 0 : te(S, b), t), qe(T, () => ({ ...i }));
          }), x(E, A);
        }, I = (E) => {
          var A = ie(), y = K(A);
          Oo(y, r, !1, (T, C) => {
            xe(T, (w) => s = w, () => s), Me(T, (w, L) => te == null ? void 0 : te(w, L), t), qe(T, () => ({ ...i }));
            var S = ie(), b = K(S);
            Ie(b, () => e.children ?? me), x(C, S);
          }), x(E, A);
        };
        ee(
          m,
          (E) => {
            o(a) ? E(p) : E(I, !1);
          },
          !0
        );
      }
      x(v, g);
    };
    ee(u, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return x(n, c), ye(l);
}
var Lh = /* @__PURE__ */ ht("<svg><!></svg>");
function Oh(n, e) {
  be(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let t = _(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, d = Lh();
  qe(d, () => ({ ...r }));
  var l = k(d);
  return Ie(l, () => e.children ?? me), xe(d, (c) => i = c, () => i), Me(d, (c, u) => te == null ? void 0 : te(c, u), t), x(n, d), ye(s);
}
function ns(n, e) {
  be(e, !0);
  const [t, r] = Ti(), i = ar(e.value);
  le(e.key, i), Se(() => {
    rr(i, e.value);
  }), Mn(() => {
    i.set(void 0);
  });
  var a = ie(), s = K(a);
  Ie(s, () => e.children ?? me), x(n, a), ye(), r();
}
const { applyPassive: Kl } = pu, { matches: Rh } = Va;
function Fn(n, { ripple: e = !0, surface: t = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: d, eventTarget: l, activeTarget: c, addClass: u = (g) => n.classList.add(g), removeClass: h = (g) => n.classList.remove(g), addStyle: f = (g, m) => n.style.setProperty(g, m), initPromise: v = Promise.resolve() } = {}) {
  let g, m = new ca(), p = Ce("SMUI:addLayoutListener"), I, E = s, A = l, y = c;
  function T() {
    t ? (u("mdc-ripple-surface"), a === "primary" ? (u("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), u("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), g && E !== s && (E = s, s ? g.activate() : s === !1 && g.deactivate()), e && !g ? (g = new Ih({
      addClass: u,
      browserSupportsCssVars: () => ph(window),
      computeBoundingRect: () => (d || n).getBoundingClientRect(),
      containsEventTarget: (S) => n.contains(S),
      deregisterDocumentInteractionHandler: (S, b) => m.off(document.documentElement, S, b),
      deregisterInteractionHandler: (S, b) => m.off(l || n, S, b),
      deregisterResizeHandler: (S) => window.removeEventListener("resize", S),
      getWindowPageOffset: () => {
        var S, b;
        return {
          x: (S = window.pageXOffset) !== null && S !== void 0 ? S : window.scrollX,
          y: (b = window.pageYOffset) !== null && b !== void 0 ? b : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Rh(c || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (S, b) => {
        const w = Kl();
        m.on(document.documentElement, S, b, typeof w == "boolean" ? { capture: w } : w);
      },
      registerInteractionHandler: (S, b) => {
        const w = Kl();
        m.on(l || n, S, b, typeof w == "boolean" ? { capture: w } : w);
      },
      registerResizeHandler: (S) => m.on(window, "resize", S),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !e && v.then(() => {
      g && (g.destroy(), g = void 0, m.clear());
    }), g && (A !== l || y !== c) && (A = l, y = c, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !e && r && u("mdc-ripple-upgraded--unbounded");
  }
  T(), p && (I = p(C));
  function C() {
    g && g.layout();
  }
  return {
    update(S) {
      ({
        ripple: e,
        surface: t,
        unbounded: r,
        disabled: i,
        color: a,
        active: s,
        rippleElement: d,
        eventTarget: l,
        activeTarget: c,
        addClass: u,
        removeClass: h,
        addStyle: f,
        initPromise: v
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (b) => n.classList.add(b), removeClass: (b) => n.classList.remove(b), addStyle: (b, w) => n.style.setProperty(b, w), initPromise: Promise.resolve() }, S)), T();
    },
    destroy() {
      g && (g.destroy(), g = void 0, m.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), I && I();
    }
  };
}
var Mh = /* @__PURE__ */ j("<span><!></span>"), Ph = /* @__PURE__ */ j("<label><!></label>");
function Cs(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "style", 3, ""), a = _(e, "floatAbove", 15, !1), s = _(e, "required", 15, !1), d = _(e, "wrapped", 3, !1), l = /* @__PURE__ */ ze(e, [
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
  ]), c, u = /* @__PURE__ */ se(void 0), h = new ca(), f = Ee({}), v = Ee({}), g = Ce("SMUI:generic:input:props") ?? {}, m = a();
  Se(() => {
    o(u) && m !== a() && (m = a(), o(u).float(a()));
  });
  let p = s();
  Se(() => {
    o(u) && p !== s() && (p = s(), o(u).setRequired(s()));
  });
  const I = Ce("SMUI:floating-label:mount"), E = Ce("SMUI:floating-label:unmount");
  rt(() => {
    V(
      u,
      new uh({
        addClass: A,
        removeClass: y,
        getWidth: () => {
          var ne, ce;
          const Q = M(), ue = Q.cloneNode(!0);
          (ne = Q.parentNode) == null || ne.appendChild(ue), ue.classList.add("smui-floating-label--remove-transition"), ue.classList.add("smui-floating-label--force-size"), ue.classList.remove("mdc-floating-label--float-above");
          const B = ue.scrollWidth;
          return (ce = Q.parentNode) == null || ce.removeChild(ue), B;
        },
        registerInteractionHandler: (Q, ue) => h.on(M(), Q, ue),
        deregisterInteractionHandler: (Q, ue) => h.off(M(), Q, ue)
      }),
      !0
    );
    const U = {
      get element() {
        return M();
      },
      addStyle: T,
      removeStyle: C
    };
    return I && I(U), o(u).init(), () => {
      var Q;
      E && E(U), (Q = o(u)) == null || Q.destroy(), h.clear();
    };
  });
  function A(U) {
    f[U] || (f[U] = !0);
  }
  function y(U) {
    (!(U in f) || f[U]) && (f[U] = !1);
  }
  function T(U, Q) {
    v[U] != Q && (Q === "" || Q == null ? delete v[U] : v[U] = Q);
  }
  function C(U) {
    U in v && delete v[U];
  }
  function S(U) {
    var Q;
    (Q = o(u)) == null || Q.shake(U);
  }
  function b(U) {
    a(U);
  }
  function w(U) {
    s(U);
  }
  function L() {
    if (o(u) == null)
      throw new Error("Instance is undefined.");
    return o(u).getWidth();
  }
  function M() {
    return c;
  }
  var D = { shake: S, float: b, setRequired: w, getWidth: L, getElement: M }, O = ie(), X = K(O);
  {
    var G = (U) => {
      var Q = Mh();
      qe(Q, (B, ne) => ({ class: B, style: ne, ...l }), [
        () => Be({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([B, ne]) => `${B}: ${ne};`).concat([i()]).join(" ")
      ]);
      var ue = k(Q);
      Ie(ue, () => e.children ?? me), xe(Q, (B) => c = B, () => c), Me(Q, (B, ne) => te == null ? void 0 : te(B, ne), t), x(U, Q);
    }, N = (U) => {
      var Q = Ph();
      qe(
        Q,
        (B, ne) => ({
          class: B,
          style: ne,
          for: e.for || (g ? g.id : void 0),
          ...l
        }),
        [
          () => Be({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(v).map(([B, ne]) => `${B}: ${ne};`).concat([i()]).join(" ")
        ]
      );
      var ue = k(Q);
      Ie(ue, () => e.children ?? me), xe(Q, (B) => c = B, () => c), Me(Q, (B, ne) => te == null ? void 0 : te(B, ne), t), x(U, Q);
    };
    ee(X, (U) => {
      d() ? U(G) : U(N, !1);
    });
  }
  return x(n, O), ye(D);
}
var kh = /* @__PURE__ */ j("<div></div>");
function Iu(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "style", 3, ""), a = _(e, "active", 3, !1), s = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), d, l = /* @__PURE__ */ se(void 0), c = new ca(), u = Ee({}), h = Ee({});
  rt(() => (V(
    l,
    new ch({
      addClass: v,
      removeClass: g,
      hasClass: f,
      setStyle: m,
      registerEventHandler: (C, S) => c.on(A(), C, S),
      deregisterEventHandler: (C, S) => c.off(A(), C, S)
    }),
    !0
  ), o(l).init(), () => {
    var C;
    (C = o(l)) == null || C.destroy(), c.clear();
  }));
  function f(C) {
    return C in u ? u[C] : A().classList.contains(C);
  }
  function v(C) {
    u[C] || (u[C] = !0);
  }
  function g(C) {
    (!(C in u) || u[C]) && (u[C] = !1);
  }
  function m(C, S) {
    h[C] != S && (S === "" || S == null ? delete h[C] : h[C] = S);
  }
  function p() {
    var C;
    (C = o(l)) == null || C.activate();
  }
  function I() {
    var C;
    (C = o(l)) == null || C.deactivate();
  }
  function E(C) {
    var S;
    (S = o(l)) == null || S.setRippleCenter(C);
  }
  function A() {
    return d;
  }
  var y = { activate: p, deactivate: I, setRippleCenter: E, getElement: A }, T = kh();
  return qe(T, (C, S) => ({ class: C, style: S, ...s }), [
    () => Be({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...u,
      [r()]: !0
    }),
    () => Object.entries(h).map(([C, S]) => `${C}: ${S};`).concat([i()]).join(" ")
  ]), xe(T, (C) => d = C, () => d), Me(T, (C, S) => te == null ? void 0 : te(C, S), t), x(n, T), ye(y);
}
var Fh = /* @__PURE__ */ j('<div class="mdc-notched-outline__notch"><!></div>'), Nh = /* @__PURE__ */ j('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function bu(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "notched", 3, !1), a = _(e, "noLabel", 3, !1), s = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), d, l = /* @__PURE__ */ se(void 0), c = /* @__PURE__ */ se(void 0), u = Ee({}), h = Ee({}), f;
  Se(() => {
    o(c) !== f && (o(c) ? (o(c).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(c) && o(c).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), f = o(c));
  }), le("SMUI:floating-label:mount", (b) => {
    V(c, b, !0);
  }), le("SMUI:floating-label:unmount", () => {
    V(c, void 0);
  }), rt(() => (V(
    l,
    new vh({
      addClass: v,
      removeClass: g,
      setNotchWidthProperty: (b) => m("width", b + "px"),
      removeNotchWidthProperty: () => p("width")
    }),
    !0
  ), o(l).init(), () => {
    var b;
    (b = o(l)) == null || b.destroy();
  }));
  function v(b) {
    u[b] || (u[b] = !0);
  }
  function g(b) {
    (!(b in u) || u[b]) && (u[b] = !1);
  }
  function m(b, w) {
    h[b] != w && (w === "" || w == null ? delete h[b] : h[b] = w);
  }
  function p(b) {
    b in h && delete h[b];
  }
  function I(b) {
    var w;
    (w = o(l)) == null || w.notch(b);
  }
  function E() {
    var b;
    (b = o(l)) == null || b.closeNotch();
  }
  function A() {
    return d;
  }
  var y = { notch: I, closeNotch: E, getElement: A }, T = Nh();
  qe(T, (b) => ({ class: b, ...s }), [
    () => Be({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...u,
      [r()]: !0
    })
  ]);
  var C = z(k(T), 2);
  {
    var S = (b) => {
      var w = Fh(), L = k(w);
      Ie(L, () => e.children ?? me), de((M) => nt(w, M), [
        () => Object.entries(h).map(([M, D]) => `${M}: ${D};`).join(" ")
      ]), x(b, w);
    };
    ee(C, (b) => {
      a() || b(S);
    });
  }
  return xe(T, (b) => d = b, () => d), Me(T, (b, w) => te == null ? void 0 : te(b, w), t), x(n, T), ye(y);
}
function fa(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "component", 3, qa), a = _(e, "tag", 3, "div"), s = _(e, "_smuiClass", 3, ""), d = _(e, "_smuiClassMap", 23, () => ({})), l = _(e, "_smuiContexts", 19, () => ({})), c = _(e, "_smuiProps", 19, () => ({})), u = /* @__PURE__ */ ze(e, [
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
  Object.entries(d()).forEach(([I, E]) => {
    const A = Ce(E);
    A && "subscribe" in A && f.push(A.subscribe((y) => {
      d()[I] = y;
    }));
  });
  for (let I in l())
    l().hasOwnProperty(I) && le(I, l()[I]);
  Mn(() => {
    for (const I of f)
      I();
  });
  function v() {
    return h.getElement();
  }
  var g = { getElement: v }, m = ie(), p = K(m);
  {
    let I = /* @__PURE__ */ J(() => Be({
      [s()]: !0,
      ...d(),
      [r()]: !0
    }));
    ua(p, i, (E, A) => {
      xe(
        A(E, $e(
          {
            get tag() {
              return a();
            },
            get use() {
              return t();
            },
            get class() {
              return o(I);
            }
          },
          c,
          () => u,
          {
            children: (y, T) => {
              var C = ie(), S = K(C);
              Ie(S, () => e.children ?? me), x(y, C);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => h = y,
        () => h
      );
    });
  }
  return x(n, m), ye(g);
}
function Uh(n, e) {
  be(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    fa(n, $e({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, d) => {
        var l = ie(), c = K(l);
        Ie(c, () => e.children ?? me), x(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), ye(a);
}
function Hh(n, e) {
  be(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    fa(n, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, d) => {
          var l = ie(), c = K(l);
          Ie(c, () => e.children ?? me), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), ye(a);
}
function Bh(n, e) {
  be(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    fa(n, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, d) => {
          var l = ie(), c = K(l);
          Ie(c, () => e.children ?? me), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), ye(a);
}
var Gh = /* @__PURE__ */ j("<input/>");
function Vh(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "type", 3, "text"), a = _(e, "placeholder", 3, " "), s = _(e, "value", 15), d = _(e, "files", 15, null), l = _(e, "dirty", 15, !1), c = _(e, "invalid", 15, !1), u = _(e, "updateInvalid", 3, !0), h = _(e, "initialInvalid", 3, !1), f = _(e, "emptyValueNull", 19, () => s() === null), v = _(e, "emptyValueUndefined", 19, () => s() === void 0), g = /* @__PURE__ */ ze(e, [
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
  ]), m, p = Ee({}), I = Ee({});
  Se(() => {
    i() === "file" ? delete I.value : I.value = s() == null ? "" : s();
  }), rt(() => {
    u() && h() && c(L().matches(":invalid"));
  });
  function E(G) {
    return G === "" ? Number.NaN : +G;
  }
  function A(G) {
    if (i() === "file") {
      d(G.currentTarget.files);
      return;
    }
    if (G.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (G.currentTarget.value === "" && v()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(E(G.currentTarget.value));
        break;
      default:
        s(G.currentTarget.value);
        break;
    }
  }
  function y(G) {
    (i() === "file" || i() === "range") && A(G), l(!0), u() && c(L().matches(":invalid"));
  }
  function T(G) {
    return G in p ? p[G] ?? null : L().getAttribute(G);
  }
  function C(G, N) {
    p[G] !== N && (p[G] = N);
  }
  function S(G) {
    (!(G in p) || p[G] != null) && (p[G] = void 0);
  }
  function b() {
    L().focus();
  }
  function w() {
    L().blur();
  }
  function L() {
    return m;
  }
  var M = { getAttr: T, addAttr: C, removeAttr: S, focus: b, blur: w, getElement: L }, D = Gh(), O = (G) => {
    var N;
    i() !== "file" && A(G), (N = e.oninput) == null || N.call(e, G);
  }, X = (G) => {
    var N;
    y(G), (N = e.onchange) == null || N.call(e, G);
  };
  return qe(
    D,
    (G) => ({
      class: G,
      type: i(),
      placeholder: a(),
      ...I,
      ...p,
      ...g,
      oninput: O,
      onchange: X
    }),
    [
      () => Be({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), xe(D, (G) => m = G, () => m), Me(D, (G, N) => te == null ? void 0 : te(G, N), t), x(n, D), ye(M);
}
var qh = /* @__PURE__ */ j("<textarea></textarea>");
function Wh(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "style", 3, ""), a = _(e, "value", 15, ""), s = _(e, "dirty", 15, !1), d = _(e, "invalid", 15, !1), l = _(e, "updateInvalid", 3, !0), c = _(e, "initialInvalid", 3, !1), u = _(e, "resizable", 3, !0), h = /* @__PURE__ */ ze(e, [
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
  ]), f, v = Ee({});
  rt(() => {
    l() && c() && d(y().matches(":invalid"));
  });
  function g() {
    s(!0), l() && d(y().matches(":invalid"));
  }
  function m(b) {
    return b in v ? v[b] ?? null : y().getAttribute(b);
  }
  function p(b, w) {
    v[b] !== w && (v[b] = w);
  }
  function I(b) {
    (!(b in v) || v[b] != null) && (v[b] = void 0);
  }
  function E() {
    y().focus();
  }
  function A() {
    y().blur();
  }
  function y() {
    return f;
  }
  var T = { getAttr: m, addAttr: p, removeAttr: I, focus: E, blur: A, getElement: y }, C = qh(), S = (b) => {
    var w;
    g(), (w = e.onchange) == null || w.call(e, b);
  };
  return qe(
    C,
    (b) => ({
      class: b,
      style: `${u() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: S
    }),
    [
      () => Be({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), xe(C, (b) => f = b, () => f), Me(C, (b, w) => te == null ? void 0 : te(b, w), t), da(() => Kf(C, a)), x(n, C), ye(T);
}
var zh = /* @__PURE__ */ j('<span class="mdc-text-field__ripple"></span>'), jh = /* @__PURE__ */ j("<!> <!>", 1), Zh = /* @__PURE__ */ j("<span><!> <!></span>"), Xh = /* @__PURE__ */ j("<!> <!> <!>", 1), Kh = /* @__PURE__ */ j("<label><!> <!> <!> <!> <!> <!> <!></label>"), Yh = /* @__PURE__ */ j("<div><!> <!> <!> <!> <!></div>"), Jh = /* @__PURE__ */ j("<!> <!>", 1);
function Gn(n, e) {
  be(e, !0);
  const { applyPassive: t } = pu;
  let r = () => {
  };
  function i(P) {
    return P === r;
  }
  let a = _(e, "use", 19, () => []), s = _(e, "class", 3, ""), d = _(e, "style", 3, ""), l = _(e, "ripple", 3, !0), c = _(e, "disabled", 3, !1), u = _(e, "required", 3, !1), h = _(e, "textarea", 3, !1), f = _(e, "variant", 19, () => h() ? "outlined" : "standard"), v = _(e, "noLabel", 3, !1), g = _(e, "type", 3, "text"), m = _(e, "value", 15), p = _(e, "files", 15, r), I = _(e, "invalid", 15, r), E = _(e, "updateInvalid", 19, () => i(I())), A = _(e, "initialInvalid", 3, !1), y = _(e, "dirty", 15, !1), T = _(e, "validateOnValueChange", 19, E), C = _(e, "useNativeValidation", 19, E), S = _(e, "withLeadingIcon", 3, r), b = _(e, "withTrailingIcon", 3, r), w = _(e, "input", 7), L = _(e, "floatingLabel", 7), M = _(e, "lineRipple", 7), D = _(e, "notchedOutline", 7), O = /* @__PURE__ */ ze(e, [
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
  const X = m() !== void 0 || m() === void 0 && e.input$emptyValueUndefined || !i(p());
  i(p()) && p(null), i(I()) && I(!1);
  let G, N = /* @__PURE__ */ se(void 0), U = new ca(), Q = Ee({}), ue = Ee({}), B = /* @__PURE__ */ se(void 0), ne = /* @__PURE__ */ se(!1), ce = /* @__PURE__ */ se(Ee(A())), we = Ce("SMUI:addLayoutListener"), _e, oe, he = new Promise((P) => oe = P), q, ve, re, W;
  const Y = /* @__PURE__ */ J(() => w() && w().getElement());
  Se(() => {
    (y() || o(ce) || !E()) && o(N) && o(N).isValid() !== !I() && (E() ? I(!o(N).isValid()) : o(N).setValid(!I()));
  }), Se(() => {
    o(N) && o(N).getValidateOnValueChange() !== T() && o(N).setValidateOnValueChange(i(T()) ? !1 : T());
  }), Se(() => {
    o(N) && o(N).setUseNativeValidation(i(C()) ? !0 : C());
  }), Se(() => {
    o(N) && o(N).setDisabled(c());
  });
  let ge = m();
  Se(() => {
    if (o(N) && X && ge !== m()) {
      ge = m();
      const P = `${m() == null ? "" : m()}`;
      o(N).getValue() !== P && o(N).setValue(P);
    }
  }), we && (_e = we(H)), le("SMUI:textfield:leading-icon:mount", (P) => {
    q = P;
  }), le("SMUI:textfield:leading-icon:unmount", () => {
    q = void 0;
  }), le("SMUI:textfield:trailing-icon:mount", (P) => {
    ve = P;
  }), le("SMUI:textfield:trailing-icon:unmount", () => {
    ve = void 0;
  }), le("SMUI:textfield:helper-text:id", (P) => {
    V(B, P, !0);
  }), le("SMUI:textfield:helper-text:mount", (P) => {
    re = P;
  }), le("SMUI:textfield:helper-text:unmount", () => {
    V(B, void 0), re = void 0;
  }), le("SMUI:textfield:character-counter:mount", (P) => {
    W = P;
  }), le("SMUI:textfield:character-counter:unmount", () => {
    W = void 0;
  }), rt(() => {
    var P;
    if (V(
      N,
      new Ah(
        {
          // getRootAdapterMethods_
          addClass: De,
          removeClass: Le,
          hasClass: Te,
          registerTextFieldInteractionHandler: ($, Re) => U.on(Z(), $, Re),
          deregisterTextFieldInteractionHandler: ($, Re) => U.off(Z(), $, Re),
          registerValidationAttributeChangeHandler: ($) => {
            const Re = (Nt) => Nt.map((an) => an.attributeName).filter((an) => an), lt = new MutationObserver((Nt) => {
              C() && $(Re(Nt));
            }), pt = { attributes: !0 };
            return w() && lt.observe(w().getElement(), pt), lt;
          },
          deregisterValidationAttributeChangeHandler: ($) => {
            $.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var $;
            return (($ = w()) == null ? void 0 : $.getElement()) ?? null;
          },
          setInputAttr: ($, Re) => {
            var lt;
            (lt = w()) == null || lt.addAttr($, Re);
          },
          removeInputAttr: ($) => {
            var Re;
            (Re = w()) == null || Re.removeAttr($);
          },
          isFocused: () => {
            var $;
            return document.activeElement === (($ = w()) == null ? void 0 : $.getElement());
          },
          registerInputInteractionHandler: ($, Re) => {
            var pt;
            const lt = (pt = w()) == null ? void 0 : pt.getElement();
            if (lt) {
              const Nt = t();
              U.on(lt, $, Re, typeof Nt == "boolean" ? { capture: Nt } : Nt);
            }
          },
          deregisterInputInteractionHandler: ($, Re) => {
            var pt;
            const lt = (pt = w()) == null ? void 0 : pt.getElement();
            lt && U.off(lt, $, Re);
          },
          // getLabelAdapterMethods_
          floatLabel: ($) => L() && L().float($),
          getLabelWidth: () => L() ? L().getWidth() : 0,
          hasLabel: () => !!L(),
          shakeLabel: ($) => L() && L().shake($),
          setLabelRequired: ($) => L() && L().setRequired($),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => M() && M().activate(),
          deactivateLineRipple: () => M() && M().deactivate(),
          setLineRippleTransformOrigin: ($) => M() && M().setRippleCenter($),
          // getOutlineAdapterMethods_
          closeOutline: () => D() && D().closeNotch(),
          hasOutline: () => !!D(),
          notchOutline: ($) => D() && D().notch($)
        },
        {
          get helperText() {
            return re;
          },
          get characterCounter() {
            return W;
          },
          get leadingIcon() {
            return q;
          },
          get trailingIcon() {
            return ve;
          }
        }
      ),
      !0
    ), X) {
      if (w() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (P = o(N)) == null || P.init();
    } else
      ru().then(() => {
        var $;
        if (w() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        ($ = o(N)) == null || $.init();
      });
    return oe(), () => {
      var $;
      ($ = o(N)) == null || $.destroy(), U.clear();
    };
  }), Mn(() => {
    _e && _e();
  });
  function Te(P) {
    return P in Q ? Q[P] ?? null : Z().classList.contains(P);
  }
  function De(P) {
    Q[P] || (Q[P] = !0);
  }
  function Le(P) {
    (!(P in Q) || Q[P]) && (Q[P] = !1);
  }
  function et(P, $) {
    ue[P] != $ && ($ === "" || $ == null ? delete ue[P] : ue[P] = $);
  }
  function Ft() {
    var P;
    (P = w()) == null || P.focus();
  }
  function nn() {
    var P;
    (P = w()) == null || P.blur();
  }
  function H() {
    if (o(N)) {
      const P = o(N).shouldFloat;
      o(N).notchOutline(P);
    }
  }
  function Z() {
    return G;
  }
  var Ae = { focus: Ft, blur: nn, layout: H, getElement: Z }, He = Jh(), rn = K(He);
  {
    var mn = (P) => {
      var $ = Kh();
      qe($, (Ge, it, Ye) => ({ class: Ge, style: it, for: void 0, ...Ye }), [
        () => Be({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": o(ne) || m() != null && m() !== "",
          "mdc-text-field--with-leading-icon": i(S()) ? e.leadingIcon : S(),
          "mdc-text-field--with-trailing-icon": i(b()) ? e.trailingIcon : b(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": I(),
          ...Q,
          [s()]: !0
        }),
        () => Object.entries(ue).map(([Ge, it]) => `${Ge}: ${it};`).concat([d()]).join(" "),
        () => Oa(O, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Re = k($);
      {
        var lt = (Ge) => {
          var it = jh(), Ye = K(it);
          {
            var Ht = (bt) => {
              var Ot = zh();
              x(bt, Ot);
            };
            ee(Ye, (bt) => {
              f() === "filled" && bt(Ht);
            });
          }
          var Pn = z(Ye, 2);
          {
            var at = (bt) => {
              {
                let Ot = /* @__PURE__ */ J(() => o(ne) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), Ke = /* @__PURE__ */ J(() => ut(O, "label$"));
                xe(
                  Cs(bt, $e(
                    {
                      get floatAbove() {
                        return o(Ot);
                      },
                      get required() {
                        return u();
                      },
                      wrapped: !0
                    },
                    () => o(Ke),
                    {
                      children: (Rt, ur) => {
                        var yn = ie(), yt = K(yn);
                        {
                          var Bt = (Zt) => {
                          }, Cn = (Zt) => {
                            var Qr = ie(), An = K(Qr);
                            {
                              var Or = (En) => {
                                var cr = Ve();
                                de(() => Pe(cr, e.label)), x(En, cr);
                              }, ha = (En) => {
                                var cr = ie(), jn = K(cr);
                                Ie(jn, () => e.label), x(En, cr);
                              };
                              ee(
                                An,
                                (En) => {
                                  typeof e.label == "string" ? En(Or) : En(ha, !1);
                                },
                                !0
                              );
                            }
                            x(Zt, Qr);
                          };
                          ee(yt, (Zt) => {
                            e.label == null ? Zt(Bt) : Zt(Cn, !1);
                          });
                        }
                        x(Rt, yn);
                      },
                      $$slots: { default: !0 }
                    }
                  )),
                  (Rt) => L(Rt),
                  () => L()
                );
              }
            };
            ee(Pn, (bt) => {
              !v() && e.label != null && bt(at);
            });
          }
          x(Ge, it);
        };
        ee(Re, (Ge) => {
          !h() && f() !== "outlined" && Ge(lt);
        });
      }
      var pt = z(Re, 2);
      {
        var Nt = (Ge) => {
          {
            let it = /* @__PURE__ */ J(() => v() || e.label == null), Ye = /* @__PURE__ */ J(() => ut(O, "outline$"));
            xe(
              bu(Ge, $e(
                {
                  get noLabel() {
                    return o(it);
                  }
                },
                () => o(Ye),
                {
                  children: (Ht, Pn) => {
                    var at = ie(), bt = K(at);
                    {
                      var Ot = (Ke) => {
                        {
                          let Rt = /* @__PURE__ */ J(() => o(ne) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), ur = /* @__PURE__ */ J(() => ut(O, "label$"));
                          xe(
                            Cs(Ke, $e(
                              {
                                get floatAbove() {
                                  return o(Rt);
                                },
                                get required() {
                                  return u();
                                },
                                wrapped: !0
                              },
                              () => o(ur),
                              {
                                children: (yn, yt) => {
                                  var Bt = ie(), Cn = K(Bt);
                                  {
                                    var Zt = (An) => {
                                    }, Qr = (An) => {
                                      var Or = ie(), ha = K(Or);
                                      {
                                        var En = (jn) => {
                                          var $r = Ve();
                                          de(() => Pe($r, e.label)), x(jn, $r);
                                        }, cr = (jn) => {
                                          var $r = ie(), no = K($r);
                                          Ie(no, () => e.label), x(jn, $r);
                                        };
                                        ee(
                                          ha,
                                          (jn) => {
                                            typeof e.label == "string" ? jn(En) : jn(cr, !1);
                                          },
                                          !0
                                        );
                                      }
                                      x(An, Or);
                                    };
                                    ee(Cn, (An) => {
                                      e.label == null ? An(Zt) : An(Qr, !1);
                                    });
                                  }
                                  x(yn, Bt);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (yn) => L(yn),
                            () => L()
                          );
                        }
                      };
                      ee(bt, (Ke) => {
                        !v() && e.label != null && Ke(Ot);
                      });
                    }
                    x(Ht, at);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ht) => D(Ht),
              () => D()
            );
          }
        };
        ee(pt, (Ge) => {
          (h() || f() === "outlined") && Ge(Nt);
        });
      }
      var an = z(pt, 2);
      ns(an, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ge, it) => {
          var Ye = ie(), Ht = K(Ye);
          Ie(Ht, () => e.leadingIcon ?? me), x(Ge, Ye);
        },
        $$slots: { default: !0 }
      });
      var Di = z(an, 2);
      Ie(Di, () => e.children ?? me);
      var ft = z(Di, 2);
      {
        var Ut = (Ge) => {
          var it = Zh(), Ye = k(it);
          {
            let Pn = /* @__PURE__ */ J(() => ut(O, "input$"));
            xe(
              Wh(Ye, $e(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return u();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(ce);
                  },
                  get "aria-controls"() {
                    return o(B);
                  },
                  get "aria-describedby"() {
                    return o(B);
                  }
                },
                () => o(Pn),
                {
                  onblur: (at) => {
                    var bt;
                    V(ne, !1), V(ce, !0), je(Z(), "blur", at), (bt = e.input$onblur) == null || bt.call(e, at);
                  },
                  onfocus: (at) => {
                    var bt;
                    V(ne, !0), je(Z(), "focus", at), (bt = e.input$onfocus) == null || bt.call(e, at);
                  },
                  get value() {
                    return m();
                  },
                  set value(at) {
                    m(at);
                  },
                  get dirty() {
                    return y();
                  },
                  set dirty(at) {
                    y(at);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(at) {
                    I(at);
                  }
                }
              )),
              (at) => w(at),
              () => w()
            );
          }
          var Ht = z(Ye, 2);
          Ie(Ht, () => e.internalCounter ?? me), de((Pn) => Sr(it, 1, Pn), [
            () => cu(Be({
              "mdc-text-field__resizer": !("input$resizable" in O) || e.input$resizable
            }))
          ]), x(Ge, it);
        }, sn = (Ge) => {
          var it = Xh(), Ye = K(it);
          {
            var Ht = (Ot) => {
              var Ke = ie(), Rt = K(Ke);
              {
                var ur = (yt) => {
                  Hh(yt, {
                    children: (Bt, Cn) => {
                      var Zt = Ve();
                      de(() => Pe(Zt, e.prefix)), x(Bt, Zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, yn = (yt) => {
                  var Bt = ie(), Cn = K(Bt);
                  Ie(Cn, () => e.prefix ?? me), x(yt, Bt);
                };
                ee(Rt, (yt) => {
                  typeof e.prefix == "string" ? yt(ur) : yt(yn, !1);
                });
              }
              x(Ot, Ke);
            };
            ee(Ye, (Ot) => {
              e.prefix != null && Ot(Ht);
            });
          }
          var Pn = z(Ye, 2);
          {
            let Ot = /* @__PURE__ */ J(() => ut(O, "input$"));
            xe(
              Vh(Pn, $e(
                {
                  get type() {
                    return g();
                  },
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return u();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(ce);
                  },
                  get "aria-controls"() {
                    return o(B);
                  },
                  get "aria-describedby"() {
                    return o(B);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Ot),
                {
                  onblur: (Ke) => {
                    var Rt;
                    V(ne, !1), V(ce, !0), je(Z(), "blur", Ke), (Rt = e.input$onblur) == null || Rt.call(e, Ke);
                  },
                  onfocus: (Ke) => {
                    var Rt;
                    V(ne, !0), je(Z(), "focus", Ke), (Rt = e.input$onfocus) == null || Rt.call(e, Ke);
                  },
                  get value() {
                    return m();
                  },
                  set value(Ke) {
                    m(Ke);
                  },
                  get files() {
                    return p();
                  },
                  set files(Ke) {
                    p(Ke);
                  },
                  get dirty() {
                    return y();
                  },
                  set dirty(Ke) {
                    y(Ke);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(Ke) {
                    I(Ke);
                  }
                }
              )),
              (Ke) => w(Ke),
              () => w()
            );
          }
          var at = z(Pn, 2);
          {
            var bt = (Ot) => {
              var Ke = ie(), Rt = K(Ke);
              {
                var ur = (yt) => {
                  Bh(yt, {
                    children: (Bt, Cn) => {
                      var Zt = Ve();
                      de(() => Pe(Zt, e.suffix)), x(Bt, Zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, yn = (yt) => {
                  var Bt = ie(), Cn = K(Bt);
                  Ie(Cn, () => e.suffix ?? me), x(yt, Bt);
                };
                ee(Rt, (yt) => {
                  typeof e.suffix == "string" ? yt(ur) : yt(yn, !1);
                });
              }
              x(Ot, Ke);
            };
            ee(at, (Ot) => {
              e.suffix != null && Ot(bt);
            });
          }
          x(Ge, it);
        };
        ee(ft, (Ge) => {
          h() && typeof m() == "string" ? Ge(Ut) : Ge(sn, !1);
        });
      }
      var Dr = z(ft, 2);
      ns(Dr, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ge, it) => {
          var Ye = ie(), Ht = K(Ye);
          Ie(Ht, () => e.trailingIcon ?? me), x(Ge, Ye);
        },
        $$slots: { default: !0 }
      });
      var Xa = z(Dr, 2);
      {
        var Lr = (Ge) => {
          {
            let it = /* @__PURE__ */ J(() => ut(O, "ripple$"));
            xe(Iu(Ge, $e(() => o(it))), (Ye) => M(Ye), () => M());
          }
        };
        ee(Xa, (Ge) => {
          !h() && f() !== "outlined" && l() && Ge(Lr);
        });
      }
      xe($, (Ge) => G = Ge, () => G), Me($, (Ge, it) => Fn == null ? void 0 : Fn(Ge, it), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: De,
        removeClass: Le,
        addStyle: et,
        eventTarget: o(Y),
        activeTarget: o(Y),
        initPromise: he
      })), Me($, (Ge, it) => te == null ? void 0 : te(Ge, it), a), x(P, $);
    }, dr = (P) => {
      var $ = Yh();
      qe($, (ft, Ut, sn) => ({ class: ft, style: Ut, ...sn }), [
        () => Be({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": I(),
          ...Q,
          [s()]: !0
        }),
        () => Object.entries(ue).map(([ft, Ut]) => `${ft}: ${Ut};`).concat([d()]).join(" "),
        () => Oa(O, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Re = k($);
      {
        var lt = (ft) => {
          var Ut = ie(), sn = K(Ut);
          Ie(sn, () => e.label ?? me), x(ft, Ut);
        };
        ee(Re, (ft) => {
          typeof e.label != "string" && ft(lt);
        });
      }
      var pt = z(Re, 2);
      ns(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ft, Ut) => {
          var sn = ie(), Dr = K(sn);
          Ie(Dr, () => e.leadingIcon ?? me), x(ft, sn);
        },
        $$slots: { default: !0 }
      });
      var Nt = z(pt, 2);
      Ie(Nt, () => e.children ?? me);
      var an = z(Nt, 2);
      ns(an, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ft, Ut) => {
          var sn = ie(), Dr = K(sn);
          Ie(Dr, () => e.trailingIcon ?? me), x(ft, sn);
        },
        $$slots: { default: !0 }
      });
      var Di = z(an, 2);
      Ie(Di, () => e.line ?? me), xe($, (ft) => G = ft, () => G), Me($, (ft, Ut) => Fn == null ? void 0 : Fn(ft, Ut), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: De,
        removeClass: Le,
        addStyle: et
      })), Me($, (ft, Ut) => te == null ? void 0 : te(ft, Ut), a), x(P, $);
    };
    ee(rn, (P) => {
      X ? P(mn) : P(dr, !1);
    });
  }
  var pe = z(rn, 2);
  {
    var F = (P) => {
      {
        let $ = /* @__PURE__ */ J(() => ut(O, "helperLine$"));
        Uh(P, $e(() => o($), {
          children: (Re, lt) => {
            var pt = ie(), Nt = K(pt);
            Ie(Nt, () => e.helper ?? me), x(Re, pt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ee(pe, (P) => {
      e.helper && P(F);
    });
  }
  return x(n, He), ye(Ae);
}
var Qh = /* @__PURE__ */ j('<div class="mdc-button__touch"></div>'), $h = /* @__PURE__ */ j('<div class="mdc-button__ripple"></div> <!><!>', 1);
function In(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "style", 3, ""), a = _(e, "ripple", 3, !0), s = _(e, "color", 3, "primary"), d = _(e, "variant", 3, "text"), l = _(e, "touch", 3, !1), c = _(e, "action", 3, "close"), u = _(e, "defaultAction", 3, !1), h = _(e, "secondary", 3, !1), f = _(e, "component", 3, qa), v = _(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ ze(e, [
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
  ]), m, p = Ee({}), I = Ee({}), E = Ce("SMUI:button:context");
  const A = /* @__PURE__ */ J(() => E === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), y = /* @__PURE__ */ J(() => E === "dialog:action" && u() ? { "data-mdc-dialog-button-default": "" } : {}), T = /* @__PURE__ */ J(() => E === "banner" ? {} : { secondary: h() });
  let C = e.disabled;
  Se(() => {
    if (C !== e.disabled) {
      if (m) {
        const G = M();
        "blur" in G && G.blur();
      }
      C = g.disabled;
    }
  }), le("SMUI:label:context", "button"), le("SMUI:icon:context", "button");
  function S(G) {
    p[G] || (p[G] = !0);
  }
  function b(G) {
    (!(G in p) || p[G]) && (p[G] = !1);
  }
  function w(G, N) {
    I[G] != N && (N === "" || N == null ? delete I[G] : I[G] = N);
  }
  function L() {
    E === "banner" && je(M(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function M() {
    return m.getElement();
  }
  var D = { getElement: M }, O = ie(), X = K(O);
  {
    let G = /* @__PURE__ */ J(() => [
      [
        Fn,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: S,
          removeClass: b,
          addStyle: w
        }
      ],
      ...t()
    ]), N = /* @__PURE__ */ J(() => Be({
      "mdc-button": !0,
      "mdc-button--raised": d() === "raised",
      "mdc-button--unelevated": d() === "unelevated",
      "mdc-button--outlined": d() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": E === "card:action",
      "mdc-card__action--button": E === "card:action",
      "mdc-dialog__button": E === "dialog:action",
      "mdc-top-app-bar__navigation-icon": E === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": E === "top-app-bar:action",
      "mdc-snackbar__action": E === "snackbar:actions",
      "mdc-banner__secondary-action": E === "banner" && h(),
      "mdc-banner__primary-action": E === "banner" && !h(),
      "mdc-tooltip__action": E === "tooltip:rich-actions",
      ...p,
      [r()]: !0
    })), U = /* @__PURE__ */ J(() => Object.entries(I).map(([Q, ue]) => `${Q}: ${ue};`).concat([i()]).join(" "));
    ua(X, f, (Q, ue) => {
      xe(
        ue(Q, $e(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(G);
            },
            get class() {
              return o(N);
            },
            get style() {
              return o(U);
            }
          },
          () => o(A),
          () => o(y),
          () => o(T),
          {
            get href() {
              return e.href;
            }
          },
          () => g,
          {
            onclick: (B) => {
              var ne;
              L(), (ne = e.onclick) == null || ne.call(e, B);
            },
            children: (B, ne) => {
              var ce = $h(), we = z(K(ce), 2);
              Ie(we, () => e.children ?? me);
              var _e = z(we);
              {
                var oe = (he) => {
                  var q = Qh();
                  x(he, q);
                };
                ee(_e, (he) => {
                  l() && he(oe);
                });
              }
              x(B, ce);
            },
            $$slots: { default: !0 }
          }
        )),
        (B) => m = B,
        () => m
      );
    });
  }
  return x(n, O), ye(D);
}
var ev = /* @__PURE__ */ j("<i><!></i>");
function tv(n, e) {
  be(e, !0);
  const t = () => Ci(g, "$leadingStore", r), [r, i] = Ti();
  let a = _(e, "use", 19, () => []), s = _(e, "class", 3, ""), d = _(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = _(e, "disabled", 3, !1), c = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), u, h = /* @__PURE__ */ se(void 0), f = new ca(), v = Ee({});
  const g = Ce("SMUI:textfield:icon:leading"), m = t();
  let p = /* @__PURE__ */ se(void 0);
  const I = /* @__PURE__ */ J(() => ({ role: e.role, tabindex: d() })), E = Ce("SMUI:textfield:leading-icon:mount"), A = Ce("SMUI:textfield:leading-icon:unmount"), y = Ce("SMUI:textfield:trailing-icon:mount"), T = Ce("SMUI:textfield:trailing-icon:unmount");
  rt(() => (V(
    h,
    new xh({
      getAttr: C,
      setAttr: S,
      removeAttr: b,
      setContent: (N) => {
        V(p, N, !0);
      },
      registerInteractionHandler: (N, U) => f.on(w(), N, U),
      deregisterInteractionHandler: (N, U) => f.off(w(), N, U),
      notifyIconAction: () => je(w(), "SMUITextFieldIcon")
    }),
    !0
  ), m ? E && E(o(h)) : y && y(o(h)), o(h).init(), () => {
    var N;
    o(h) && (m ? A && A(o(h)) : T && T(o(h))), (N = o(h)) == null || N.destroy(), f.clear();
  }));
  function C(N) {
    return N in v ? v[N] ?? null : w().getAttribute(N);
  }
  function S(N, U) {
    v[N] !== U && (v[N] = U);
  }
  function b(N) {
    (!(N in v) || v[N] != null) && (v[N] = void 0);
  }
  function w() {
    return u;
  }
  var L = { getElement: w }, M = ev();
  qe(
    M,
    (N) => ({
      class: N,
      "aria-hidden": d() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(I),
      ...v,
      ...c
    }),
    [
      () => Be({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": m,
        "mdc-text-field__icon--trailing": !m,
        [s()]: !0
      })
    ]
  );
  var D = k(M);
  {
    var O = (N) => {
      var U = ie(), Q = K(U);
      Ie(Q, () => e.children ?? me), x(N, U);
    }, X = (N) => {
      var U = Ve();
      de(() => Pe(U, o(p))), x(N, U);
    };
    ee(D, (N) => {
      o(p) == null ? N(O) : N(X, !1);
    });
  }
  xe(M, (N) => u = N, () => u), Me(M, (N, U) => te == null ? void 0 : te(N, U), a), x(n, M);
  var G = ye(L);
  return i(), G;
}
function rl(n, e) {
  be(e, !0);
  let t = _(e, "placeholder", 3, ""), r = _(e, "label", 3, ""), i = _(e, "icon", 3, ""), a = _(e, "value", 15, ""), s = _(e, "variant", 3, "standard"), d = _(e, "styles", 3, ""), l = _(e, "required", 3, !1), c = _(e, "oninput", 3, () => {
  });
  var u = ie(), h = K(u);
  {
    var f = (g) => {
      {
        const m = (I) => {
          tv(I, {
            class: "material-icons",
            children: (E, A) => {
              var y = Ve();
              de(() => Pe(y, i())), x(E, y);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ J(() => `width: 100%; ${d()}`);
        Gn(g, {
          get label() {
            return r();
          },
          get required() {
            return l();
          },
          get placeholder() {
            return t();
          },
          get style() {
            return o(p);
          },
          get variant() {
            return s();
          },
          get oninput() {
            return c();
          },
          get value() {
            return a();
          },
          set value(I) {
            a(I);
          },
          leadingIcon: m,
          $$slots: { leadingIcon: !0 }
        });
      }
    }, v = (g) => {
      Gn(g, {
        get label() {
          return r();
        },
        get placeholder() {
          return t();
        },
        style: "width: 100%",
        get variant() {
          return s();
        },
        get required() {
          return l();
        },
        get oninput() {
          return c();
        },
        get value() {
          return a();
        },
        set value(m) {
          a(m);
        }
      });
    };
    ee(h, (g) => {
      i() ? g(f) : g(v, !1);
    });
  }
  x(n, u), ye();
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
var nv = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, rv = {
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
}, ba = {
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
}, gt;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(gt || (gt = {}));
var _i;
(function(n) {
  n[n.TOP_LEFT = 0] = "TOP_LEFT", n[n.TOP_RIGHT = 4] = "TOP_RIGHT", n[n.BOTTOM_LEFT = 1] = "BOTTOM_LEFT", n[n.BOTTOM_RIGHT = 5] = "BOTTOM_RIGHT", n[n.TOP_START = 8] = "TOP_START", n[n.TOP_END = 12] = "TOP_END", n[n.BOTTOM_START = 9] = "BOTTOM_START", n[n.BOTTOM_END = 13] = "BOTTOM_END";
})(_i || (_i = {}));
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
var Mr, gr, Ue = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Mr = {}, Mr["" + Ue.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Mr["" + Ue.LIST_ITEM_CLASS] = "mdc-list-item", Mr["" + Ue.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Mr["" + Ue.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Mr["" + Ue.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Mr["" + Ue.ROOT] = "mdc-list";
var ki = (gr = {}, gr["" + Ue.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", gr["" + Ue.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", gr["" + Ue.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", gr["" + Ue.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", gr["" + Ue.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", gr["" + Ue.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", gr["" + Ue.ROOT] = "mdc-deprecated-list", gr), Pr = {
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
    .` + Ue.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ue.LIST_ITEM_CLASS + ` a,
    .` + ki[Ue.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ki[Ue.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + Ue.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + Ue.LIST_ITEM_CLASS + ` a,
    .` + Ue.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + Ue.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + ki[Ue.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ki[Ue.LIST_ITEM_CLASS] + ` a,
    .` + ki[Ue.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + ki[Ue.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, vt = {
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
var iv = ["input", "button", "textarea", "select"], Sn = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    iv.indexOf(t) === -1 && n.preventDefault();
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
function av() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function sv(n, e) {
  for (var t = /* @__PURE__ */ new Map(), r = 0; r < n; r++) {
    var i = e(r).trim();
    if (i) {
      var a = i[0].toLowerCase();
      t.has(a) || t.set(a, []), t.get(a).push({ text: i.toLowerCase(), index: r });
    }
  }
  return t.forEach(function(s) {
    s.sort(function(d, l) {
      return d.index - l.index;
    });
  }), t;
}
function ko(n, e) {
  var t = n.nextChar, r = n.focusItemAtIndex, i = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, d = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    Cu(e);
  }, vt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = ov(i, a, d, e) : l = lv(i, d, e), l !== -1 && !s && r(l), l;
}
function ov(n, e, t, r) {
  var i = r.typeaheadBuffer[0], a = n.get(i);
  if (!a)
    return -1;
  if (i === r.currentFirstChar && a[r.sortedIndexCursor].index === e) {
    r.sortedIndexCursor = (r.sortedIndexCursor + 1) % a.length;
    var s = a[r.sortedIndexCursor].index;
    if (!t(s))
      return s;
  }
  r.currentFirstChar = i;
  var d = -1, l;
  for (l = 0; l < a.length; l++)
    if (!t(a[l].index)) {
      d = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !t(a[l].index)) {
      d = l;
      break;
    }
  return d !== -1 ? (r.sortedIndexCursor = d, a[r.sortedIndexCursor].index) : -1;
}
function lv(n, e, t) {
  var r = t.typeaheadBuffer[0], i = n.get(r);
  if (!i)
    return -1;
  var a = i[t.sortedIndexCursor];
  if (a.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (t.sortedIndexCursor + 1) % i.length, d = -1; s !== t.sortedIndexCursor; ) {
    var l = i[s], c = l.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, u = !e(l.index);
    if (c && u) {
      d = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return d !== -1 ? (t.sortedIndexCursor = d, i[t.sortedIndexCursor].index) : -1;
}
function yu(n) {
  return n.typeaheadBuffer.length > 0;
}
function Cu(n) {
  n.typeaheadBuffer = "";
}
function Yl(n, e) {
  var t = n.event, r = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, d = n.isItemAtIndexDisabled, l = It(t) === "ArrowLeft", c = It(t) === "ArrowUp", u = It(t) === "ArrowRight", h = It(t) === "ArrowDown", f = It(t) === "Home", v = It(t) === "End", g = It(t) === "Enter", m = It(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || l || c || u || h || f || v || g)
    return -1;
  var p = !m && t.key.length === 1;
  if (p) {
    Sn(t);
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: d
    };
    return ko(I, e);
  }
  if (!m)
    return -1;
  r && Sn(t);
  var E = r && yu(e);
  if (E) {
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: d
    };
    return ko(I, e);
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
function dv(n) {
  return n instanceof Array;
}
var uv = ["Alt", "Control", "Meta", "Shift"];
function Jl(n) {
  var e = new Set(n ? uv.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(r) {
      return e.has(r);
    }) && t.length === e.size;
  };
}
var cv = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = vt.UNSET_INDEX, r.focusedItemIndex = vt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = av(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Pr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Ue;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return vt;
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
    }, e.prototype.setWrapFocus = function(t) {
      this.wrapFocus = t;
    }, e.prototype.setVerticalOrientation = function(t) {
      this.isVertical = t;
    }, e.prototype.setSingleSelection = function(t) {
      this.isSingleSelectionList = t, t && (this.maybeInitializeSingleSelection(), this.selectedIndex = this.getSelectedIndexFromDOM());
    }, e.prototype.setDisabledItemsFocusable = function(t) {
      this.areDisabledItemsFocusable = t;
    }, e.prototype.maybeInitializeSingleSelection = function() {
      var t = this.getSelectedIndexFromDOM();
      if (t !== vt.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(t, Ue.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = vt.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, Ue.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, Ue.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          t = i;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && yu(this.typeaheadState);
    }, e.prototype.setUseActivatedClass = function(t) {
      this.useActivatedClass = t;
    }, e.prototype.setUseSelectedAttribute = function(t) {
      this.useSelectedAttr = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t, r) {
      r === void 0 && (r = {}), this.isIndexValid(t) && (this.isCheckboxList ? this.setCheckboxAtIndex(t, r) : this.isRadioList ? this.setRadioAtIndex(t, r) : this.setSingleSelectionAtIndex(t, r));
    }, e.prototype.handleFocusIn = function(t) {
      t >= 0 && (this.focusedItemIndex = t, this.adapter.setAttributeForElementIndex(t, "tabindex", "0"), this.adapter.setTabIndexForListItemChildren(t, "0"));
    }, e.prototype.handleFocusOut = function(t) {
      var r = this;
      t >= 0 && (this.adapter.setAttributeForElementIndex(t, "tabindex", "-1"), this.adapter.setTabIndexForListItemChildren(t, "-1")), setTimeout(function() {
        r.adapter.isFocusInsideList() || r.setTabindexToFirstSelectedOrFocusedItem();
      }, 0);
    }, e.prototype.isIndexDisabled = function(t) {
      return this.adapter.listItemAtIndexHasClass(t, Ue.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, r, i) {
      var a = this, s, d = It(t) === "ArrowLeft", l = It(t) === "ArrowUp", c = It(t) === "ArrowRight", u = It(t) === "ArrowDown", h = It(t) === "Home", f = It(t) === "End", v = It(t) === "Enter", g = It(t) === "Spacebar", m = this.isVertical && u || !this.isVertical && c, p = this.isVertical && l || !this.isVertical && d, I = t.key === "A" || t.key === "a", E = Jl(t);
      if (this.adapter.isRootFocused()) {
        if ((p || f) && E([]))
          t.preventDefault(), this.focusLastElement();
        else if ((m || h) && E([]))
          t.preventDefault(), this.focusFirstElement();
        else if (p && E(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var A = this.focusLastElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (m && E(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var A = this.focusFirstElement();
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        }
        if (this.hasTypeahead) {
          var y = {
            event: t,
            focusItemAtIndex: function(S) {
              a.focusItemAtIndex(S);
            },
            focusedItemIndex: -1,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(S) {
              return a.isIndexDisabled(S);
            }
          };
          Yl(y, this.typeaheadState);
        }
        return;
      }
      var T = this.adapter.getFocusedElementIndex();
      if (!(T === -1 && (T = i, T < 0))) {
        if (m && E([]))
          Sn(t), this.focusNextElement(T);
        else if (p && E([]))
          Sn(t), this.focusPrevElement(T);
        else if (m && E(["Shift"]) && this.isCheckboxList) {
          Sn(t);
          var A = this.focusNextElement(T);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (p && E(["Shift"]) && this.isCheckboxList) {
          Sn(t);
          var A = this.focusPrevElement(T);
          A !== -1 && this.setSelectedIndexOnAction(A, !1);
        } else if (h && E([]))
          Sn(t), this.focusFirstElement();
        else if (f && E([]))
          Sn(t), this.focusLastElement();
        else if (h && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (Sn(t), this.isIndexDisabled(T))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, T, T);
        } else if (f && E(["Control", "Shift"]) && this.isCheckboxList) {
          if (Sn(t), this.isIndexDisabled(T))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(T, this.adapter.getListItemCount() - 1, T);
        } else if (I && E(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || g) && E([])) {
          if (r) {
            var C = t.target;
            if (C && C.tagName === "A" && v || (Sn(t), this.isIndexDisabled(T)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(T, !1), this.adapter.notifyAction(T));
          }
        } else if ((v || g) && E(["Shift"]) && this.isCheckboxList) {
          var C = t.target;
          if (C && C.tagName === "A" && v || (Sn(t), this.isIndexDisabled(T)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : T, T, T), this.adapter.notifyAction(T));
        }
        if (this.hasTypeahead) {
          var y = {
            event: t,
            focusItemAtIndex: function(b) {
              a.focusItemAtIndex(b);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(b) {
              return a.isIndexDisabled(b);
            }
          };
          Yl(y, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, r, i) {
      var a, s = Jl(i);
      t !== vt.UNSET_INDEX && (this.isIndexDisabled(t) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, r), this.adapter.notifyAction(t)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
    }, e.prototype.focusNextElement = function(t) {
      var r = this.adapter.getListItemCount(), i = t, a = null;
      do {
        if (i++, i >= r)
          if (this.wrapFocus)
            i = 0;
          else
            return t;
        if (i === a)
          return -1;
        a = a ?? i;
      } while (!this.areDisabledItemsFocusable && this.isIndexDisabled(i));
      return this.focusItemAtIndex(i), i;
    }, e.prototype.focusPrevElement = function(t) {
      var r = this.adapter.getListItemCount(), i = t, a = null;
      do {
        if (i--, i < 0)
          if (this.wrapFocus)
            i = r - 1;
          else
            return t;
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
      var t = this.getFirstSelectedOrFocusedItemIndex();
      return this.focusItemAtIndex(t), t;
    }, e.prototype.setEnabled = function(t, r) {
      this.isIndexValid(t, !1) && (r ? (this.adapter.removeClassForElementIndex(t, Ue.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Pr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, Ue.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Pr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === t && !r.forceUpdate)) {
        var i = Ue.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ue.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== vt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== vt.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === vt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Pr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Pr.ARIA_CURRENT : Pr.ARIA_SELECTED;
      if (this.selectedIndex !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== vt.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Pr.ARIA_SELECTED : Pr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !r.forceUpdate) && (this.selectedIndex !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(t, i, "true"), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === vt.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), d = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var c = a == null ? void 0 : a.has(l), u = t.indexOf(l) >= 0;
        u !== c && d.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, u), this.adapter.setAttributeForElementIndex(l, s, u ? "true" : "false");
      }
      this.selectedIndex = t, r.isUserInteraction && d.length && this.adapter.notifySelectionChange(d);
    }, e.prototype.toggleCheckboxRange = function(t, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), d = Ul([t, r].sort(), 2), l = d[0], c = d[1], u = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          s !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, u, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = ih([], Ul(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === vt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== vt.UNSET_INDEX ? this.selectedIndex : dv(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, r) {
        return Math.min(t, r);
      }) : 0 : Math.max(this.focusedItemIndex, 0);
    }, e.prototype.isIndexValid = function(t, r) {
      var i = this;
      if (r === void 0 && (r = !0), t instanceof Array) {
        if (!this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        return t.length === 0 ? !0 : t.some(function(a) {
          return i.isIndexInRange(a);
        });
      } else if (typeof t == "number") {
        if (this.isCheckboxList && r)
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + t);
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === vt.UNSET_INDEX;
      } else
        return !1;
    }, e.prototype.isIndexInRange = function(t) {
      var r = this.adapter.getListItemCount();
      return t >= 0 && t < r;
    }, e.prototype.setSelectedIndexOnAction = function(t, r) {
      this.lastSelectedIndex = t, this.isCheckboxList ? (this.toggleCheckboxAtIndex(t, r), this.adapter.notifySelectionChange([t])) : this.setSelectedIndex(t, { isUserInteraction: !0 });
    }, e.prototype.toggleCheckboxAtIndex = function(t, r) {
      var i = this.getSelectionAttribute(), a = this.adapter.isCheckboxCheckedAtIndex(t), s;
      r ? s = a : (s = !a, this.adapter.setCheckedCheckboxOrRadioAtIndex(t, s)), this.adapter.setAttributeForElementIndex(t, i, s ? "true" : "false");
      var d = this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? d.push(t) : d = d.filter(function(l) {
        return l !== t;
      }), this.selectedIndex = d;
    }, e.prototype.focusItemAtIndex = function(t) {
      this.adapter.focusItemAtIndex(t), this.focusedItemIndex = t;
    }, e.prototype.checkboxListToggleAll = function(t, r) {
      var i = this.adapter.getListItemCount();
      if (t.length === i)
        this.setCheckboxAtIndex([], { isUserInteraction: r });
      else {
        for (var a = [], s = 0; s < i; s++)
          (!this.isIndexDisabled(s) || t.indexOf(s) > -1) && a.push(s);
        this.setCheckboxAtIndex(a, { isUserInteraction: r });
      }
    }, e.prototype.typeaheadMatchItem = function(t, r, i) {
      var a = this;
      i === void 0 && (i = !1);
      var s = {
        focusItemAtIndex: function(d) {
          a.focusItemAtIndex(d);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(d) {
          return a.isIndexDisabled(d);
        }
      };
      return ko(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return sv(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      Cu(this.typeaheadState);
    }, e;
  }(vn)
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
var Au = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = _i.TOP_START, r.originCorner = _i.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return nv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return rv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ba;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "Corner", {
      get: function() {
        return _i;
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
      var t = e.cssClasses, r = t.ROOT, i = t.OPEN;
      if (!this.adapter.hasClass(r))
        throw new Error(r + " class required in root element.");
      this.adapter.hasClass(i) && (this.isSurfaceOpen = !0);
    }, e.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId), clearTimeout(this.closeAnimationEndTimerId), cancelAnimationFrame(this.animationRequestId);
    }, e.prototype.setAnchorCorner = function(t) {
      this.anchorCorner = t;
    }, e.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ gt.RIGHT;
    }, e.prototype.setAnchorMargin = function(t) {
      this.anchorMargin.top = t.top || 0, this.anchorMargin.right = t.right || 0, this.anchorMargin.bottom = t.bottom || 0, this.anchorMargin.left = t.left || 0;
    }, e.prototype.setIsHoisted = function(t) {
      this.isHoistedElement = t;
    }, e.prototype.setFixedPosition = function(t) {
      this.isFixedPosition = t;
    }, e.prototype.isFixed = function() {
      return this.isFixedPosition;
    }, e.prototype.setAbsolutePosition = function(t, r) {
      this.position.x = this.isFinite(t) ? t : 0, this.position.y = this.isFinite(r) ? r : 0;
    }, e.prototype.setIsHorizontallyCenteredOnViewport = function(t) {
      this.isHorizontallyCenteredOnViewport = t;
    }, e.prototype.setQuickOpen = function(t) {
      this.isQuickOpen = t;
    }, e.prototype.setMaxHeight = function(t) {
      this.maxHeight = t;
    }, e.prototype.setOpenBottomBias = function(t) {
      this.openBottomBias = t;
    }, e.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    }, e.prototype.open = function() {
      var t = this;
      this.isSurfaceOpen || (this.adapter.notifyOpening(), this.adapter.saveFocus(), this.isQuickOpen ? (this.isSurfaceOpen = !0, this.adapter.addClass(e.cssClasses.OPEN), this.dimensions = this.adapter.getInnerDimensions(), this.autoposition(), this.adapter.notifyOpen()) : (this.adapter.addClass(e.cssClasses.ANIMATING_OPEN), this.animationRequestId = requestAnimationFrame(function() {
        t.dimensions = t.adapter.getInnerDimensions(), t.autoposition(), t.adapter.addClass(e.cssClasses.OPEN), t.openAnimationEndTimerId = setTimeout(function() {
          t.openAnimationEndTimerId = 0, t.adapter.removeClass(e.cssClasses.ANIMATING_OPEN), t.adapter.notifyOpen();
        }, ba.TRANSITION_OPEN_DURATION);
      }), this.isSurfaceOpen = !0));
    }, e.prototype.close = function(t) {
      var r = this;
      if (t === void 0 && (t = !1), !!this.isSurfaceOpen) {
        if (this.adapter.notifyClosing(), this.isQuickOpen) {
          this.isSurfaceOpen = !1, t || this.maybeRestoreFocus(), this.adapter.removeClass(e.cssClasses.OPEN), this.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), this.adapter.notifyClose();
          return;
        }
        this.adapter.addClass(e.cssClasses.ANIMATING_CLOSED), requestAnimationFrame(function() {
          r.adapter.removeClass(e.cssClasses.OPEN), r.adapter.removeClass(e.cssClasses.IS_OPEN_BELOW), r.closeAnimationEndTimerId = setTimeout(function() {
            r.closeAnimationEndTimerId = 0, r.adapter.removeClass(e.cssClasses.ANIMATING_CLOSED), r.adapter.notifyClose();
          }, ba.TRANSITION_CLOSE_DURATION);
        }), this.isSurfaceOpen = !1, t || this.maybeRestoreFocus();
      }
    }, e.prototype.handleBodyClick = function(t) {
      var r = t.target;
      this.adapter.isElementInContainer(r) || this.close();
    }, e.prototype.handleKeydown = function(t) {
      var r = t.keyCode, i = t.key, a = i === "Escape" || r === 27;
      a && this.close();
    }, e.prototype.autoposition = function() {
      var t;
      this.measurements = this.getAutoLayoutmeasurements();
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, gt.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, gt.RIGHT) ? "right" : "left", d = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), c = this.measurements, u = c.anchorSize, h = c.surfaceSize, f = (t = {}, t[s] = d, t[a] = l, t);
      u.width / h.width > ba.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, gt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
    }, e.prototype.getAutoLayoutmeasurements = function() {
      var t = this.adapter.getAnchorDimensions(), r = this.adapter.getBodyDimensions(), i = this.adapter.getWindowDimensions(), a = this.adapter.getWindowScroll();
      return t || (t = {
        top: this.position.y,
        right: this.position.x,
        bottom: this.position.y,
        left: this.position.x,
        width: 0,
        height: 0
      }), {
        anchorSize: t,
        bodySize: r,
        surfaceSize: this.dimensions,
        viewportDistance: {
          // tslint:disable:object-literal-sort-keys Positional properties are more readable when they're grouped together
          top: t.top,
          right: i.width - t.right,
          bottom: i.height - t.bottom,
          left: t.left
          // tslint:enable:object-literal-sort-keys
        },
        viewportSize: i,
        windowScroll: a
      };
    }, e.prototype.getoriginCorner = function() {
      var t = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, d = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, gt.BOTTOM), c, u;
      l ? (c = i.top - d + this.anchorMargin.bottom, u = i.bottom - d - this.anchorMargin.bottom) : (c = i.top - d + this.anchorMargin.top, u = i.bottom - d + a.height - this.anchorMargin.top);
      var h = u - s.height > 0;
      !h && c > u + this.openBottomBias && (t = this.setBit(t, gt.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, gt.FLIP_RTL), g = this.hasBit(this.anchorCorner, gt.RIGHT) || this.hasBit(t, gt.RIGHT), m = !1;
      f && v ? m = !g : m = g;
      var p, I;
      m ? (p = i.left + a.width + this.anchorMargin.right, I = i.right - this.anchorMargin.right) : (p = i.left + this.anchorMargin.left, I = i.right + a.width - this.anchorMargin.left);
      var E = p - s.width > 0, A = I - s.width > 0, y = this.hasBit(t, gt.FLIP_RTL) && this.hasBit(t, gt.RIGHT);
      return A && y && f || !E && y ? t = this.unsetBit(t, gt.RIGHT) : (E && m && f || E && !m && g || !A && p >= I) && (t = this.setBit(t, gt.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(t, gt.BOTTOM), s = this.hasBit(this.anchorCorner, gt.BOTTOM), d = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - d, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - d, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var r = this.measurements.anchorSize, i = this.hasBit(t, gt.RIGHT), a = this.hasBit(this.anchorCorner, gt.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var r = this.measurements.anchorSize, i = this.hasBit(t, gt.BOTTOM), a = this.hasBit(this.anchorCorner, gt.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var r, i, a = this.measurements, s = a.windowScroll, d = a.viewportDistance, l = a.surfaceSize, c = a.viewportSize, u = Object.keys(t);
      try {
        for (var h = Bn(u), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, g = t[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            t[v] = (c.width - l.width) / 2;
            continue;
          }
          g += d[v], this.isFixedPosition || (v === "top" ? g += s.y : v === "bottom" ? g -= s.y : v === "left" ? g += s.x : g -= s.x), t[v] = g;
        }
      } catch (m) {
        r = { error: m };
      } finally {
        try {
          f && !f.done && (i = h.return) && i.call(h);
        } finally {
          if (r) throw r.error;
        }
      }
    }, e.prototype.maybeRestoreFocus = function() {
      var t = this, r = this.adapter.isFocused(), i = this.adapter.getOwnerDocument ? this.adapter.getOwnerDocument() : document, a = i.activeElement && this.adapter.isElementInContainer(i.activeElement);
      (r || a) && setTimeout(function() {
        t.adapter.restoreFocus();
      }, ba.TOUCH_EVENT_WAIT_MS);
    }, e.prototype.hasBit = function(t, r) {
      return !!(t & r);
    }, e.prototype.setBit = function(t, r) {
      return t | r;
    }, e.prototype.unsetBit = function(t, r) {
      return t ^ r;
    }, e.prototype.isFinite = function(t) {
      return typeof t == "number" && isFinite(t);
    }, e;
  }(vn)
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
var qi = {
  MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
  MENU_SELECTION_GROUP: "mdc-menu__selection-group",
  ROOT: "mdc-menu"
}, Fi = {
  ARIA_CHECKED_ATTR: "aria-checked",
  ARIA_DISABLED_ATTR: "aria-disabled",
  CHECKBOX_SELECTOR: 'input[type="checkbox"]',
  LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
  SELECTED_EVENT: "MDCMenu:selected",
  SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
}, fv = {
  FOCUS_ROOT_INDEX: -1
}, Hi;
(function(n) {
  n[n.NONE = 0] = "NONE", n[n.LIST_ROOT = 1] = "LIST_ROOT", n[n.FIRST_ITEM = 2] = "FIRST_ITEM", n[n.LAST_ITEM = 3] = "LAST_ITEM";
})(Hi || (Hi = {}));
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
var hv = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.closeAnimationEndTimerId = 0, r.defaultFocusState = Hi.LIST_ROOT, r.selectedIndex = -1, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return qi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return Fi;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return fv;
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
    }, e.prototype.handleKeydown = function(t) {
      var r = t.key, i = t.keyCode, a = r === "Tab" || i === 9;
      a && this.adapter.closeSurface(
        /** skipRestoreFocus */
        !0
      );
    }, e.prototype.handleItemAction = function(t) {
      var r = this, i = this.adapter.getElementIndex(t);
      if (!(i < 0)) {
        this.adapter.notifySelected({ index: i });
        var a = this.adapter.getAttributeFromElementAtIndex(i, Fi.SKIP_RESTORE_FOCUS) === "true";
        this.adapter.closeSurface(a), this.closeAnimationEndTimerId = setTimeout(function() {
          var s = r.adapter.getElementIndex(t);
          s >= 0 && r.adapter.isSelectableItemAtIndex(s) && r.setSelectedIndex(s);
        }, Au.numbers.TRANSITION_CLOSE_DURATION);
      }
    }, e.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case Hi.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case Hi.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case Hi.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    }, e.prototype.setDefaultFocusState = function(t) {
      this.defaultFocusState = t;
    }, e.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    }, e.prototype.setSelectedIndex = function(t) {
      if (this.validatedIndex(t), !this.adapter.isSelectableItemAtIndex(t))
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      var r = this.adapter.getSelectedSiblingOfItemAtIndex(t);
      r >= 0 && (this.adapter.removeAttributeFromElementAtIndex(r, Fi.ARIA_CHECKED_ATTR), this.adapter.removeClassFromElementAtIndex(r, qi.MENU_SELECTED_LIST_ITEM)), this.adapter.addClassToElementAtIndex(t, qi.MENU_SELECTED_LIST_ITEM), this.adapter.addAttributeToElementAtIndex(t, Fi.ARIA_CHECKED_ATTR, "true"), this.selectedIndex = t;
    }, e.prototype.setEnabled = function(t, r) {
      this.validatedIndex(t), r ? (this.adapter.removeClassFromElementAtIndex(t, Ue.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Fi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, Ue.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Fi.ARIA_DISABLED_ATTR, "true"));
    }, e.prototype.validatedIndex = function(t) {
      var r = this.adapter.getMenuItemCount(), i = t >= 0 && t < r;
      if (!i)
        throw new Error("MDCMenuFoundation: No list item at specified index.");
    }, e;
  }(vn)
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
var dt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, vo = {
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
}, ii = {
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
var vv = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = ii.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return dt;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ii;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return vo;
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
    }, e.prototype.setSelectedIndex = function(t, r, i) {
      r === void 0 && (r = !1), i === void 0 && (i = !1), !(t >= this.adapter.getMenuItemCount()) && (t === ii.UNSET_INDEX ? this.adapter.setSelectedText("") : this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(t).trim()), this.adapter.setSelectedIndex(t), r && this.adapter.closeMenu(), !i && this.lastSelectedIndex !== t && this.handleChange(), this.lastSelectedIndex = t);
    }, e.prototype.setValue = function(t, r) {
      r === void 0 && (r = !1);
      var i = this.adapter.getMenuItemValues().indexOf(t);
      this.setSelectedIndex(
        i,
        /** closeMenu */
        !1,
        r
      );
    }, e.prototype.getValue = function() {
      var t = this.adapter.getSelectedIndex(), r = this.adapter.getMenuItemValues();
      return t !== ii.UNSET_INDEX ? r[t] : "";
    }, e.prototype.getDisabled = function() {
      return this.disabled;
    }, e.prototype.setDisabled = function(t) {
      this.disabled = t, this.disabled ? (this.adapter.addClass(dt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(dt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(dt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, r = this.adapter.hasClass(dt.FOCUSED), i = t || r, a = this.adapter.hasClass(dt.REQUIRED);
        this.notchOutline(i), this.adapter.floatLabel(i), this.adapter.setLabelRequired(a);
      }
    }, e.prototype.layoutOptions = function() {
      var t = this.adapter.getMenuItemValues(), r = t.indexOf(this.getValue());
      this.setSelectedIndex(
        r,
        /** closeMenu */
        !1,
        /** skipNotify */
        !0
      );
    }, e.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length !== 0) {
        var t = this.getSelectedIndex(), r = t >= 0 ? t : 0;
        this.adapter.focusMenuItemAtIndex(r);
      }
    }, e.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    }, e.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(dt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(dt.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(dt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
    }, e.prototype.handleBlur = function() {
      this.isMenuOpen || this.blur();
    }, e.prototype.handleClick = function(t) {
      if (!(this.disabled || this.recentlyClicked)) {
        if (this.setClickDebounceTimeout(), this.isMenuOpen) {
          this.adapter.closeMenu();
          return;
        }
        this.adapter.setRippleCenter(t), this.openMenu();
      }
    }, e.prototype.handleKeydown = function(t) {
      if (!(this.isMenuOpen || !this.adapter.hasClass(dt.FOCUSED))) {
        var r = It(t) === ke.ENTER, i = It(t) === ke.SPACEBAR, a = It(t) === ke.ARROW_UP, s = It(t) === ke.ARROW_DOWN, d = t.ctrlKey || t.metaKey;
        if (!d && (!i && t.key && t.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : t.key, c = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          c >= 0 && this.setSelectedIndex(c), t.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(dt.FOCUSED);
        if (t) {
          var i = ii.LABEL_SCALE, a = this.adapter.getLabelWidth() * i;
          this.adapter.notchOutline(a);
        } else r || this.adapter.closeOutline();
      }
    }, e.prototype.setLeadingIconAriaLabel = function(t) {
      this.leadingIcon && this.leadingIcon.setAriaLabel(t);
    }, e.prototype.setLeadingIconContent = function(t) {
      this.leadingIcon && this.leadingIcon.setContent(t);
    }, e.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    }, e.prototype.setUseDefaultValidation = function(t) {
      this.useDefaultValidation = t;
    }, e.prototype.setValid = function(t) {
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(dt.INVALID), this.adapter.removeMenuClass(dt.MENU_INVALID)) : (this.adapter.addClass(dt.INVALID), this.adapter.addMenuClass(dt.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(dt.REQUIRED) && !this.adapter.hasClass(dt.DISABLED) ? this.getSelectedIndex() !== ii.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(dt.REQUIRED) : this.adapter.removeClass(dt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(_i.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(dt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(dt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(dt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(dt.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(vo.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(vo.ARIA_DESCRIBEDBY);
      }
    }, e.prototype.setClickDebounceTimeout = function() {
      var t = this;
      clearTimeout(this.clickDebounceTimeout), this.clickDebounceTimeout = setTimeout(function() {
        t.recentlyClicked = !1;
      }, ii.CLICK_DEBOUNCE_TIMEOUT_MS), this.recentlyClicked = !0;
    }, e;
  }(vn)
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
var ai = {
  ARIA_HIDDEN: "aria-hidden",
  ROLE: "role"
}, mr = {
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
var gv = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      return n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return mr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ai;
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
      return this.adapter.getAttr(ai.ARIA_HIDDEN) !== "true";
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.setValidation = function(t) {
      t ? this.adapter.addClass(mr.HELPER_TEXT_VALIDATION_MSG) : this.adapter.removeClass(mr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.setValidationMsgPersistent = function(t) {
      t ? this.adapter.addClass(mr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT) : this.adapter.removeClass(mr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.getIsValidation = function() {
      return this.adapter.hasClass(mr.HELPER_TEXT_VALIDATION_MSG);
    }, e.prototype.getIsValidationMsgPersistent = function() {
      return this.adapter.hasClass(mr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
    }, e.prototype.setValidity = function(t) {
      var r = this.adapter.hasClass(mr.HELPER_TEXT_VALIDATION_MSG);
      if (r) {
        var i = this.adapter.hasClass(mr.HELPER_TEXT_VALIDATION_MSG_PERSISTENT), a = !t || i;
        if (a) {
          this.showToScreenReader(), t ? this.adapter.removeAttr(ai.ROLE) : this.adapter.setAttr(ai.ROLE, "alert");
          return;
        }
        this.adapter.removeAttr(ai.ROLE), this.hide();
      }
    }, e.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(ai.ARIA_HIDDEN);
    }, e.prototype.hide = function() {
      this.adapter.setAttr(ai.ARIA_HIDDEN, "true");
    }, e;
  }(vn)
), mv = /* @__PURE__ */ j("<div><!></div>");
function pv(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "style", 3, ""), a = _(e, "static", 3, !1), s = _(e, "anchor", 3, !0), d = _(e, "fixed", 3, !1), l = _(e, "open", 31, () => Ee(a())), c = _(e, "managed", 3, !1), u = _(e, "fullWidth", 3, !1), h = _(e, "quickOpen", 3, !1), f = _(e, "anchorElement", 15), v = _(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), g = _(e, "maxHeight", 3, 0), m = _(e, "horizontallyCenteredOnViewport", 3, !1), p = _(e, "openBottomBias", 3, 0), I = _(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ ze(e, [
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
  ]), A, y = /* @__PURE__ */ se(void 0), T = Ee({}), C = Ee({}), S = /* @__PURE__ */ se(void 0);
  le("SMUI:list:role", "menu"), le("SMUI:list:item:role", "menuitem"), Se(() => {
    var q, ve;
    A && s() && !((q = A.parentElement) != null && q.classList.contains("mdc-menu-surface--anchor")) && ((ve = A.parentElement) == null || ve.classList.add("mdc-menu-surface--anchor"), f(A.parentElement ?? void 0));
  }), Se(() => {
    o(y) && o(y).isOpen() !== l() && (l() ? o(y).open() : o(y).close());
  }), Se(() => {
    o(y) && o(y).setQuickOpen(h());
  }), Se(() => {
    o(y) && o(y).setFixedPosition(d());
  }), Se(() => {
    o(y) && o(y).setMaxHeight(g());
  }), Se(() => {
    o(y) && o(y).setIsHorizontallyCenteredOnViewport(m());
  });
  const b = _i;
  Se(() => {
    o(y) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(y).setAnchorCorner(b[e.anchorCorner]) : o(y).setAnchorCorner(e.anchorCorner));
  }), Se(() => {
    o(y) && o(y).setAnchorMargin(v());
  }), Se(() => {
    o(y) && o(y).setOpenBottomBias(p());
  });
  const w = Ce("SMUI:menu-surface:mount"), L = Ce("SMUI:menu-surface:unmount");
  rt(() => {
    V(
      y,
      new Au({
        addClass: D,
        removeClass: O,
        hasClass: M,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          c() || l(a()), l() || je(ce(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          c() || l(a()), l() || je(ce(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          c() || l(!0), l() && je(ce(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || je(ce(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ve) => ce().contains(ve),
        isRtl: () => getComputedStyle(ce()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ve) => {
          C["transform-origin"] = ve;
        },
        isFocused: () => document.activeElement === ce(),
        saveFocus: () => {
          V(S, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !I() && (!A || ce().contains(document.activeElement)) && o(S) && document.contains(o(S)) && "focus" in o(S) && o(S).focus();
        },
        getInnerDimensions: () => ({
          width: ce().offsetWidth,
          height: ce().offsetHeight
        }),
        getAnchorDimensions: () => f() ? f().getBoundingClientRect() : null,
        getWindowDimensions: () => ({ width: window.innerWidth, height: window.innerHeight }),
        getBodyDimensions: () => ({
          width: document.body.clientWidth,
          height: document.body.clientHeight
        }),
        getWindowScroll: () => ({ x: window.pageXOffset, y: window.pageYOffset }),
        setPosition: (ve) => {
          C.left = "left" in ve ? `${ve.left}px` : "", C.right = "right" in ve ? `${ve.right}px` : "", C.top = "top" in ve ? `${ve.top}px` : "", C.bottom = "bottom" in ve ? `${ve.bottom}px` : "";
        },
        setMaxHeight: (ve) => {
          C["max-height"] = ve;
        }
      }),
      !0
    );
    const q = {
      get open() {
        return l();
      },
      set open(ve) {
        l(ve);
      },
      closeProgrammatic: X
    };
    return w && w(q), o(y).init(), () => {
      var re, W;
      L && L(q);
      const ve = o(y).isHoistedElement;
      (re = o(y)) == null || re.destroy(), ve && ((W = ce().parentNode) == null || W.removeChild(ce()));
    };
  }), Mn(() => {
    var q;
    s() && ce() && ((q = ce().parentElement) == null || q.classList.remove("mdc-menu-surface--anchor"));
  });
  function M(q) {
    return q in T ? T[q] : ce().classList.contains(q);
  }
  function D(q) {
    T[q] || (T[q] = !0);
  }
  function O(q) {
    (!(q in T) || T[q]) && (T[q] = !1);
  }
  function X(q) {
    var ve;
    (ve = o(y)) == null || ve.close(q), l(!1);
  }
  function G(q) {
    o(y) && l() && !c() && o(y).handleBodyClick(q);
  }
  function N() {
    return l();
  }
  function U(q) {
    l(q);
  }
  function Q(q, ve) {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).setAbsolutePosition(q, ve);
  }
  function ue(q) {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).setIsHoisted(q);
  }
  function B() {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).isFixed();
  }
  function ne() {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).flipCornerHorizontally();
  }
  function ce() {
    return A;
  }
  var we = {
    isOpen: N,
    setOpen: U,
    setAbsolutePosition: Q,
    setIsHoisted: ue,
    isFixed: B,
    flipCornerHorizontally: ne,
    getElement: ce
  }, _e = mv();
  Kt("click", Qo.body, G, !0);
  var oe = (q) => {
    var ve;
    o(y) && !c() && o(y).handleKeydown(q), (ve = e.onkeydown) == null || ve.call(e, q);
  };
  qe(
    _e,
    (q, ve) => ({
      class: q,
      style: ve,
      role: "dialog",
      ...E,
      onkeydown: oe
    }),
    [
      () => Be({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": d(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": u(),
        ...T,
        [r()]: !0
      }),
      () => Object.entries(C).map(([q, ve]) => `${q}: ${ve};`).concat([i()]).join(" ")
    ]
  );
  var he = k(_e);
  return Ie(he, () => e.children ?? me), xe(_e, (q) => A = q, () => A), Me(_e, (q, ve) => te == null ? void 0 : te(q, ve), t), x(n, _e), ye(we);
}
function go(n, { addClass: e = (r) => n.classList.add(r), removeClass: t = (r) => n.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function _v(n, e) {
  be(e, !0);
  const { closest: t } = Va;
  let r = _(e, "use", 19, () => []), i = _(e, "class", 3, ""), a = _(e, "open", 15, !1), s = _(e, "anchorElement", 15), d = _(e, "managed", 3, !1), l = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), c, u = /* @__PURE__ */ se(void 0), h = /* @__PURE__ */ se(void 0), f = /* @__PURE__ */ se(void 0);
  le("SMUI:menu-surface:mount", (b) => {
    o(h) || V(h, b, !0);
  });
  const v = Ce("SMUI:list:mount");
  le("SMUI:list:mount", (b) => {
    o(f) || V(f, b, !0), v && v(b);
  });
  const g = Ce("SMUI:menu:mount"), m = Ce("SMUI:menu:unmount");
  rt(() => (V(
    u,
    new hv({
      addClassToElementAtIndex: (b, w) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(b, w);
      },
      removeClassFromElementAtIndex: (b, w) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(b, w);
      },
      addAttributeToElementAtIndex: (b, w, L) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(b, w, L);
      },
      removeAttributeFromElementAtIndex: (b, w) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(b, w);
      },
      getAttributeFromElementAtIndex: (b, w) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(b, w);
      },
      elementContainsClass: (b, w) => b.classList.contains(w),
      closeSurface: (b) => {
        var w;
        d() || ((w = o(h)) == null || w.closeProgrammatic(b), je(C(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((w) => w.element).indexOf(b);
      },
      notifySelected: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        je(C(), "SMUIMenuSelected", {
          index: b.index,
          item: o(f).getOrderedList()[b.index].element
        });
      },
      getMenuItemCount: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).items.length;
      },
      focusItemAtIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).focusItemAtIndex(b);
      },
      focusListRoot: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in o(f).element && o(f).element.focus();
      },
      isSelectableItemAtIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return !!t(o(f).getOrderedList()[b].element, `.${qi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const w = o(f).getOrderedList(), L = t(w[b].element, `.${qi.MENU_SELECTION_GROUP}`), M = L == null ? void 0 : L.querySelector(`.${qi.MENU_SELECTED_LIST_ITEM}`);
        return M ? w.map((D) => D.element).indexOf(M) : -1;
      }
    }),
    !0
  ), g && g(o(u)), o(u).init(), () => {
    var b;
    m && o(u) && m(o(u)), (b = o(u)) == null || b.destroy();
  }));
  function p(b) {
    o(u) && o(u).handleKeydown(b);
  }
  function I() {
    return a();
  }
  function E(b) {
    a(b);
  }
  function A(b) {
    if (o(u) == null)
      throw new Error("Instance is undefined.");
    o(u).setDefaultFocusState(b);
  }
  function y() {
    if (o(u) == null)
      throw new Error("Instance is undefined.");
    return o(u).getSelectedIndex();
  }
  function T() {
    return c;
  }
  function C() {
    return c.getElement();
  }
  var S = {
    isOpen: I,
    setOpen: E,
    setDefaultFocusState: A,
    getSelectedIndex: y,
    getMenuSurface: T,
    getElement: C
  };
  {
    let b = /* @__PURE__ */ J(() => Be({ "mdc-menu": !0, [i()]: !0 }));
    xe(
      pv(n, $e(
        {
          get use() {
            return r();
          },
          get class() {
            return o(b);
          },
          get managed() {
            return d();
          }
        },
        () => l,
        {
          onkeydown: (w) => {
            var L;
            p(w), (L = e.onkeydown) == null || L.call(e, w);
          },
          onSMUIMenuSurfaceOpened: (w) => {
            var L;
            o(u) && o(u).handleMenuSurfaceOpened(), (L = e.onSMUIMenuSurfaceOpened) == null || L.call(e, w);
          },
          onSMUIListAction: (w) => {
            var L;
            o(u) && o(f) && o(u).handleItemAction(o(f).getOrderedList()[w.detail.index].element), (L = e.onSMUIListAction) == null || L.call(e, w);
          },
          get open() {
            return a();
          },
          set open(w) {
            a(w);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(w) {
            s(w);
          },
          children: (w, L) => {
            var M = ie(), D = K(M);
            Ie(D, () => e.children ?? me), x(w, M);
          },
          $$slots: { default: !0 }
        }
      )),
      (w) => c = w,
      () => c
    );
  }
  return ye(S);
}
function Iv(n, e) {
  be(e, !0);
  const { closest: t, matches: r } = Va;
  let i = Ce("SMUI:list:nav"), a = _(e, "use", 19, () => []), s = _(e, "class", 3, ""), d = _(e, "nonInteractive", 3, !1), l = _(e, "dense", 3, !1), c = _(e, "textualList", 3, !1), u = _(e, "avatarList", 3, !1), h = _(e, "iconList", 3, !1), f = _(e, "imageList", 3, !1), v = _(e, "thumbnailList", 3, !1), g = _(e, "videoList", 3, !1), m = _(e, "twoLine", 3, !1), p = _(e, "threeLine", 3, !1), I = _(e, "vertical", 3, !0), E = _(e, "wrapFocus", 19, () => Ce("SMUI:list:wrapFocus") ?? !1), A = _(e, "singleSelection", 3, !1), y = _(e, "disabledItemsFocusable", 3, !1), T = _(e, "selectedIndex", 31, () => -1), C = _(e, "radioList", 3, !1), S = _(e, "checkList", 3, !1), b = _(e, "hasTypeahead", 3, !1), w = _(e, "component", 3, qa), L = _(e, "tag", 3, i ? "nav" : "ul"), M = /* @__PURE__ */ ze(e, [
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
  ]), D, O = /* @__PURE__ */ se(void 0), X = [], G = Ce("SMUI:list:role");
  const N = /* @__PURE__ */ new WeakMap();
  let U = Ce("SMUI:dialog:selection"), Q = Ce("SMUI:addLayoutListener"), ue;
  le("SMUI:list:nonInteractive", d()), le("SMUI:separator:context", "list"), G || (A() ? (G = "listbox", le("SMUI:list:item:role", "option")) : C() ? (G = "radiogroup", le("SMUI:list:item:role", "radio")) : S() ? (G = "group", le("SMUI:list:item:role", "checkbox")) : (G = "list", le("SMUI:list:item:role", void 0))), Se(() => {
    o(O) && o(O).setVerticalOrientation(I());
  }), Se(() => {
    o(O) && o(O).setWrapFocus(E());
  }), Se(() => {
    o(O) && o(O).setHasTypeahead(b());
  }), Se(() => {
    o(O) && o(O).setSingleSelection(A());
  }), Se(() => {
    o(O) && o(O).setDisabledItemsFocusable(y());
  }), Se(() => {
    o(O) && A() && H() !== T() && o(O).setSelectedIndex(T());
  }), Q && (ue = Q(et)), le("SMUI:list:item:mount", (pe) => {
    X.push(pe), N.set(pe.element, pe), A() && pe.selected && T(Le(pe.element));
  }), le("SMUI:list:item:unmount", (pe) => {
    const F = (pe && X.findIndex((P) => P === pe)) ?? -1;
    F !== -1 && (X.splice(F, 1), N.delete(pe.element));
  });
  const B = Ce("SMUI:list:mount"), ne = Ce("SMUI:list:unmount");
  rt(() => {
    V(
      O,
      new cv({
        addClassForElementIndex: re,
        focusItemAtIndex: Ae,
        getAttributeForElementIndex: (F, P) => {
          var $;
          return (($ = q()[F]) == null ? void 0 : $.getAttr(P)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? q().map((F) => F.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => X.length,
        getPrimaryTextAtIndex: De,
        hasCheckboxAtIndex: (F) => {
          var P;
          return ((P = q()[F]) == null ? void 0 : P.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (F) => {
          var P;
          return ((P = q()[F]) == null ? void 0 : P.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (F) => {
          const P = q()[F];
          return ((P == null ? void 0 : P.hasCheckbox) && P.checked) ?? !1;
        },
        isFocusInsideList: () => D != null && He() !== document.activeElement && He().contains(document.activeElement),
        isRootFocused: () => D != null && document.activeElement === He(),
        listItemAtIndexHasClass: ve,
        notifyAction: (F) => {
          T(F), D != null && je(He(), "SMUIListAction", { index: F });
        },
        notifySelectionChange: (F) => {
          D != null && je(He(), "SMUIListSelectionChange", { changedIndices: F });
        },
        removeClassForElementIndex: W,
        setAttributeForElementIndex: Y,
        setCheckedCheckboxOrRadioAtIndex: (F, P) => {
          q()[F].checked = P;
        },
        setTabIndexForListItemChildren: (F, P) => {
          const $ = q()[F];
          Array.prototype.forEach.call($.element.querySelectorAll("button:not(:disabled), a"), (lt) => {
            lt.setAttribute("tabindex", P);
          });
        }
      }),
      !0
    );
    const pe = {
      get element() {
        return He();
      },
      get items() {
        return X;
      },
      get typeaheadInProgress() {
        if (!o(O))
          throw new Error("Instance is undefined.");
        return o(O).isTypeaheadInProgress();
      },
      typeaheadMatchItem(F, P) {
        if (!o(O))
          throw new Error("Instance is undefined.");
        return o(O).typeaheadMatchItem(
          F,
          P,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: q,
      focusItemAtIndex: Ae,
      addClassForElementIndex: re,
      removeClassForElementIndex: W,
      setAttributeForElementIndex: Y,
      removeAttributeForElementIndex: ge,
      getAttributeFromElementIndex: Te,
      getPrimaryTextAtIndex: De
    };
    return B && B(pe), o(O).init(), o(O).layout(), () => {
      var F;
      ne && ne(pe), (F = o(O)) == null || F.destroy();
    };
  }), Mn(() => {
    ue && ue();
  });
  function ce(pe) {
    o(O) && pe.target && o(O).handleKeydown(pe, pe.target.classList.contains("mdc-deprecated-list-item"), Le(pe.target));
  }
  function we(pe) {
    o(O) && pe.target && o(O).handleFocusIn(Le(pe.target));
  }
  function _e(pe) {
    o(O) && pe.target && o(O).handleFocusOut(Le(pe.target));
  }
  function oe(pe) {
    o(O) && pe.target && o(O).handleClick(Le(pe.target), !r(pe.target, 'input[type="checkbox"], input[type="radio"]'), pe);
  }
  function he(pe) {
    if (C() || S()) {
      const F = Le(pe.target);
      if (F !== -1) {
        const P = q()[F];
        P && (C() && !P.checked || S()) && (r(pe.detail.target, 'input[type="checkbox"], input[type="radio"]') || (P.checked = !P.checked), P.activateRipple(), window.requestAnimationFrame(() => {
          P.deactivateRipple();
        }));
      }
    }
  }
  function q() {
    return D == null ? [] : [...He().children].map((pe) => N.get(pe)).filter((pe) => pe && pe._smui_list_item_accessor);
  }
  function ve(pe, F) {
    const P = q()[pe];
    return (P && P.hasClass(F)) ?? !1;
  }
  function re(pe, F) {
    const P = q()[pe];
    P && P.addClass(F);
  }
  function W(pe, F) {
    const P = q()[pe];
    P && P.removeClass(F);
  }
  function Y(pe, F, P) {
    const $ = q()[pe];
    $ && $.addAttr(F, P);
  }
  function ge(pe, F) {
    const P = q()[pe];
    P && P.removeAttr(F);
  }
  function Te(pe, F) {
    const P = q()[pe];
    return P ? P.getAttr(F) : null;
  }
  function De(pe) {
    const F = q()[pe];
    return (F && F.getPrimaryText()) ?? "";
  }
  function Le(pe) {
    const F = t(pe, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return F && r(F, ".mdc-deprecated-list-item") ? q().map((P) => P == null ? void 0 : P.element).indexOf(F) : -1;
  }
  function et() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).layout();
  }
  function Ft(pe, F) {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).setEnabled(pe, F);
  }
  function nn() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).isTypeaheadInProgress();
  }
  function H() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).getSelectedIndex();
  }
  function Z() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).getFocusedItemIndex();
  }
  function Ae(pe) {
    const F = q()[pe];
    F && "focus" in F.element && F.element.focus();
  }
  function He() {
    return D.getElement();
  }
  var rn = {
    layout: et,
    setEnabled: Ft,
    getTypeaheadInProgress: nn,
    getSelectedIndex: H,
    getFocusedItemIndex: Z,
    focusItemAtIndex: Ae,
    getElement: He
  }, mn = ie(), dr = K(mn);
  {
    let pe = /* @__PURE__ */ J(() => Be({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": d(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": u() || U,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": g(),
      "mdc-deprecated-list--two-line": m(),
      "smui-list--three-line": p() && !m(),
      [s()]: !0
    }));
    ua(dr, w, (F, P) => {
      xe(
        P(F, $e(
          {
            get tag() {
              return L();
            },
            get use() {
              return a();
            },
            get class() {
              return o(pe);
            },
            get role() {
              return G;
            }
          },
          () => M,
          {
            onkeydown: ($) => {
              var Re;
              ce($), (Re = e.onkeydown) == null || Re.call(e, $);
            },
            onfocusin: ($) => {
              var Re;
              we($), (Re = e.onfocusin) == null || Re.call(e, $);
            },
            onfocusout: ($) => {
              var Re;
              _e($), (Re = e.onfocusout) == null || Re.call(e, $);
            },
            onclick: ($) => {
              var Re;
              oe($), (Re = e.onclick) == null || Re.call(e, $);
            },
            onSMUIAction: ($) => {
              var Re;
              he($), (Re = e.onSMUIAction) == null || Re.call(e, $);
            },
            children: ($, Re) => {
              var lt = ie(), pt = K(lt);
              Ie(pt, () => e.children ?? me), x($, lt);
            },
            $$slots: { default: !0 }
          }
        )),
        ($) => D = $,
        () => D
      );
    });
  }
  return x(n, mn), ye(rn);
}
let bv = 0;
var yv = /* @__PURE__ */ j('<span class="mdc-deprecated-list-item__ripple"></span>'), Cv = /* @__PURE__ */ j("<!><!>", 1);
function Av(n, e) {
  be(e, !0);
  let t = () => {
  };
  function r(re) {
    return re === t;
  }
  let i = Ce("SMUI:list:item:nav"), a = _(e, "use", 19, () => []), s = _(e, "class", 3, ""), d = _(e, "style", 3, ""), l = _(e, "nonInteractive", 19, () => Ce("SMUI:list:nonInteractive") ?? !1), c = _(e, "ripple", 19, () => !l()), u = _(e, "wrapper", 3, !1), h = _(e, "activated", 15, !1), f = _(e, "role", 19, () => u() ? "presentation" : Ce("SMUI:list:item:role")), v = _(e, "selected", 15, !1), g = _(e, "disabled", 3, !1), m = _(e, "skipRestoreFocus", 3, !1), p = _(e, "tabindex", 15, t), I = _(e, "inputId", 19, () => "SMUI-form-field-list-" + bv++), E = _(e, "component", 3, qa), A = _(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), y = /* @__PURE__ */ ze(e, [
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
  le("SMUI:list:nonInteractive", void 0), le("SMUI:list:item:role", void 0);
  let T, C = Ee({}), S = Ee({}), b = Ee({}), w = /* @__PURE__ */ se(void 0), L = /* @__PURE__ */ se(void 0);
  const M = /* @__PURE__ */ J(() => r(p()) ? !l() && !g() && (v() || o(w) && o(w).checked) ? 0 : -1 : p());
  le("SMUI:generic:input:props", { id: I() }), le("SMUI:separator:context", void 0), le("SMUI:generic:input:mount", (re) => {
    ("_smui_checkbox_accessor" in re || "_smui_radio_accessor" in re) && V(w, re, !0);
  }), le("SMUI:generic:input:unmount", () => {
    V(w, void 0);
  });
  const D = Ce("SMUI:list:item:mount"), O = Ce("SMUI:list:item:unmount");
  rt(() => {
    if (!v() && !l()) {
      let W = !0, Y = T.getElement();
      for (; Y.previousElementSibling; )
        if (Y = Y.previousElementSibling, Y.nodeType === 1 && Y.classList.contains("mdc-deprecated-list-item") && !Y.classList.contains("mdc-deprecated-list-item--disabled")) {
          W = !1;
          break;
        }
      W && V(L, window.requestAnimationFrame(() => ne(Y)), !0);
    }
    const re = {
      _smui_list_item_accessor: !0,
      get element() {
        return oe();
      },
      get selected() {
        return v();
      },
      set selected(W) {
        v(W);
      },
      hasClass: X,
      addClass: G,
      removeClass: N,
      getAttr: Q,
      addAttr: ue,
      removeAttr: B,
      getPrimaryText: _e,
      // For inputs within item.
      get checked() {
        return (o(w) && o(w).checked) ?? !1;
      },
      set checked(W) {
        o(w) && (o(w).checked = !!W);
      },
      get hasCheckbox() {
        return !!(o(w) && "_smui_checkbox_accessor" in o(w));
      },
      get hasRadio() {
        return !!(o(w) && "_smui_radio_accessor" in o(w));
      },
      activateRipple() {
        o(w) && o(w).activateRipple();
      },
      deactivateRipple() {
        o(w) && o(w).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: we,
      get tabindex() {
        return o(M);
      },
      set tabindex(W) {
        p(W);
      },
      get disabled() {
        return g();
      },
      get activated() {
        return h();
      },
      set activated(W) {
        h(W);
      }
    };
    return D && D(re), () => {
      O && O(re);
    };
  }), Mn(() => {
    o(L) && window.cancelAnimationFrame(o(L));
  });
  function X(re) {
    return re in C ? C[re] : oe().classList.contains(re);
  }
  function G(re) {
    C[re] || (C[re] = !0);
  }
  function N(re) {
    (!(re in C) || C[re]) && (C[re] = !1);
  }
  function U(re, W) {
    S[re] != W && (W === "" || W == null ? delete S[re] : S[re] = W);
  }
  function Q(re) {
    return re in b ? b[re] ?? null : oe().getAttribute(re);
  }
  function ue(re, W) {
    b[re] !== W && (b[re] = W);
  }
  function B(re) {
    (!(re in b) || b[re] != null) && (b[re] = void 0);
  }
  function ne(re) {
    let W = !0;
    for (; re.nextElementSibling; )
      if (re = re.nextElementSibling, re.nodeType === 1 && re.classList.contains("mdc-deprecated-list-item")) {
        const Y = re.attributes.getNamedItem("tabindex");
        if (Y && Y.value === "0") {
          W = !1;
          break;
        }
      }
    W && p(0);
  }
  function ce(re) {
    const W = re.key === "Enter", Y = re.key === "Space";
    (W || Y) && we(re);
  }
  function we(re) {
    g() || je(oe(), "SMUIAction", re);
  }
  function _e() {
    const re = oe(), W = re.querySelector(".mdc-deprecated-list-item__primary-text");
    if (W)
      return W.textContent ?? "";
    const Y = re.querySelector(".mdc-deprecated-list-item__text");
    return Y ? Y.textContent ?? "" : re.textContent ?? "";
  }
  function oe() {
    return T.getElement();
  }
  var he = { action: we, getPrimaryText: _e, getElement: oe }, q = ie(), ve = K(q);
  {
    let re = /* @__PURE__ */ J(() => [
      ...l() ? [] : [
        [
          Fn,
          {
            ripple: !o(w),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: g(),
            addClass: G,
            removeClass: N,
            addStyle: U
          }
        ]
      ],
      ...a()
    ]), W = /* @__PURE__ */ J(() => Be({
      "mdc-deprecated-list-item": !u(),
      "mdc-deprecated-list-item__wrapper": u(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": g(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...C,
      [s()]: !0
    })), Y = /* @__PURE__ */ J(() => Object.entries(S).map(([Te, De]) => `${Te}: ${De};`).concat([d()]).join(" ")), ge = /* @__PURE__ */ J(() => m() || void 0);
    ua(ve, E, (Te, De) => {
      xe(
        De(Te, $e(
          {
            get tag() {
              return A();
            },
            get use() {
              return o(re);
            },
            get class() {
              return o(W);
            },
            get style() {
              return o(Y);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || u() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(w) && o(w).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": g() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(ge);
            },
            get tabindex() {
              return o(M);
            },
            get href() {
              return e.href;
            }
          },
          () => b,
          () => y,
          {
            onclick: (Le) => {
              var et;
              we(Le), (et = e.onclick) == null || et.call(e, Le);
            },
            onkeydown: (Le) => {
              var et;
              ce(Le), (et = e.onkeydown) == null || et.call(e, Le);
            },
            children: (Le, et) => {
              var Ft = Cv(), nn = K(Ft);
              {
                var H = (Ae) => {
                  var He = yv();
                  x(Ae, He);
                };
                ee(nn, (Ae) => {
                  c() && Ae(H);
                });
              }
              var Z = z(nn);
              Ie(Z, () => e.children ?? me), x(Le, Ft);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => T = Le,
        () => T
      );
    });
  }
  return x(n, q), ye(he);
}
let Ev = 0;
var Sv = /* @__PURE__ */ j("<div><!></div>");
function xv(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "id", 19, () => "SMUI-select-helper-text-" + Ev++), a = _(e, "persistent", 3, !1), s = _(e, "validationMsg", 3, !1), d = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ se(void 0), u = Ee({}), h = Ee({}), f = /* @__PURE__ */ se(void 0);
  const v = Ce("SMUI:select:helper-text:id"), g = Ce("SMUI:select:helper-text:mount"), m = Ce("SMUI:select:helper-text:unmount");
  rt(() => (V(
    c,
    new gv({
      addClass: I,
      removeClass: E,
      hasClass: p,
      getAttr: A,
      setAttr: y,
      removeAttr: T,
      setContent: (D) => {
        V(f, D, !0);
      }
    }),
    !0
  ), v && v(i()), g && g(o(c)), o(c).init(), () => {
    var D;
    m && o(c) && m(o(c)), (D = o(c)) == null || D.destroy();
  }));
  function p(D) {
    return D in u ? u[D] : C().classList.contains(D);
  }
  function I(D) {
    u[D] || (u[D] = !0);
  }
  function E(D) {
    (!(D in u) || u[D]) && (u[D] = !1);
  }
  function A(D) {
    return D in h ? h[D] ?? null : C().getAttribute(D);
  }
  function y(D, O) {
    h[D] !== O && (h[D] = O);
  }
  function T(D) {
    (!(D in h) || h[D] != null) && (h[D] = void 0);
  }
  function C() {
    return l;
  }
  var S = { getElement: C }, b = Sv();
  qe(
    b,
    (D) => ({
      class: D,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...d
    }),
    [
      () => Be({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...u,
        [r()]: !0
      })
    ]
  );
  var w = k(b);
  {
    var L = (D) => {
      var O = ie(), X = K(O);
      Ie(X, () => e.children ?? me), x(D, O);
    }, M = (D) => {
      var O = Ve();
      de(() => Pe(O, o(f))), x(D, O);
    };
    ee(w, (D) => {
      o(f) == null ? D(L) : D(M, !1);
    });
  }
  return xe(b, (D) => l = D, () => l), Me(b, (D, O) => te == null ? void 0 : te(D, O), t), x(n, b), ye(S);
}
let wv = 0;
var Tv = /* @__PURE__ */ j("<input/>"), Dv = /* @__PURE__ */ j('<span class="mdc-select__ripple"></span>'), Lv = /* @__PURE__ */ j('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Ov(n, e) {
  be(e, !0);
  const t = () => Ci(He, "$selectedTextStore", r), [r, i] = Ti();
  let a = () => {
  };
  function s(R) {
    return R === a;
  }
  let d = _(e, "use", 19, () => []), l = _(e, "class", 3, ""), c = _(e, "style", 3, ""), u = _(e, "ripple", 3, !0), h = _(e, "disabled", 3, !1), f = _(e, "variant", 3, "standard"), v = _(e, "noLabel", 3, !1), g = _(e, "label", 3, void 0), m = _(e, "value", 15), p = _(e, "key", 3, (R) => R), I = _(e, "dirty", 15, !1), E = _(e, "invalid", 15, a), A = _(e, "updateInvalid", 19, () => s(E())), y = _(e, "required", 3, !1), T = _(e, "inputId", 19, () => "SMUI-select-" + wv++), C = _(e, "hiddenInput", 3, !1), S = _(e, "withLeadingIcon", 3, a), b = _(e, "anchor$use", 19, () => []), w = _(e, "anchor$class", 3, ""), L = _(e, "selectedTextContainer$use", 19, () => []), M = _(e, "selectedTextContainer$class", 3, ""), D = _(e, "selectedText$use", 19, () => []), O = _(e, "selectedText$class", 3, ""), X = _(e, "dropdownIcon$use", 19, () => []), G = _(e, "dropdownIcon$class", 3, ""), N = _(e, "menu$class", 3, ""), U = /* @__PURE__ */ ze(e, [
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
  const Q = s(E());
  s(E()) && E(!1);
  let ue, B = /* @__PURE__ */ se(void 0), ne = Ee({}), ce = Ee({}), we, _e = Ee({}), oe = /* @__PURE__ */ se(-1);
  const he = /* @__PURE__ */ J(() => U.menu$id ?? T() + "-menu");
  let q = /* @__PURE__ */ se(void 0), ve = Ce("SMUI:addLayoutListener"), re, W = /* @__PURE__ */ se(!1), Y = Ee({}), ge = /* @__PURE__ */ se(void 0), Te = /* @__PURE__ */ se(void 0), De = /* @__PURE__ */ se(!1), Le, et = Ce("SMUI:select:context"), Ft, nn, H, Z, Ae;
  le("SMUI:list:role", ""), le("SMUI:list:nav", !1);
  const He = ar("");
  le("SMUI:select:selectedText", He);
  const rn = ar(m());
  Se(() => {
    rr(rn, m());
  }), le("SMUI:select:value", rn), Se(() => {
    o(B) && o(B).getValue() !== p()(m()) && o(B).setValue(p()(m()));
  });
  let mn = o(oe);
  Se(() => {
    if (mn !== o(oe))
      if (mn = o(oe), o(B))
        o(B).setSelectedIndex(
          o(oe),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = an();
        m() !== R[o(oe)] && m(R[o(oe)]);
      }
  }), Se(() => {
    o(B) && o(B).getDisabled() !== h() && o(B).setDisabled(h());
  }), Se(() => {
    o(B) && I() && o(B).isValid() !== !E() && (A() ? E(!o(B).isValid()) : o(B).setValid(!E()));
  }), Se(() => {
    o(B) && o(B).getRequired() !== y() && o(B).setRequired(y());
  }), ve && (re = ve(Xa)), le("SMUI:select:leading-icon:mount", (R) => {
    Ft = R;
  }), le("SMUI:select:leading-icon:unmount", () => {
    Ft = void 0;
  }), le("SMUI:list:mount", (R) => {
    Le = R;
  }), le("SMUI:select:helper-text:id", (R) => {
    V(q, R, !0);
  }), le("SMUI:select:helper-text:mount", (R) => {
    nn = R;
  }), le("SMUI:select:helper-text:unmount", () => {
    V(q, void 0), nn = void 0;
  }), rt(() => (V(
    B,
    new vv(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          rr(He, R);
        },
        isSelectAnchorFocused: () => document.activeElement === we,
        getSelectAnchorAttr: lt,
        setSelectAnchorAttr: pt,
        removeSelectAnchorAttr: Nt,
        addMenuClass: $,
        removeMenuClass: Re,
        openMenu: () => {
          V(W, !0);
        },
        closeMenu: () => {
          V(W, !1);
        },
        getAnchorElement: () => we,
        setMenuAnchorElement: (R) => {
          V(ge, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          V(Te, R, !0);
        },
        setMenuWrapFocus: (R) => {
          V(De, R, !0);
        },
        getSelectedIndex: () => o(oe),
        setSelectedIndex: (R) => {
          mn = R, V(oe, R, !0), m(an()[o(oe)]);
        },
        focusMenuItemAtIndex: (R) => {
          Le.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => an().map(p()),
        getMenuItemTextAtIndex: (R) => Le.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (R, fe) => Le.typeaheadMatchItem(R, fe),
        // getCommonAdapterMethods
        addClass: pe,
        removeClass: F,
        hasClass: dr,
        setRippleCenter: (R) => Z && Z.setRippleCenter(R),
        activateBottomLine: () => Z && Z.activate(),
        deactivateBottomLine: () => Z && Z.deactivate(),
        notifyChange: (R) => {
          var fe;
          I(!0), A() && E(!((fe = o(B)) != null && fe.isValid())), je(Lr(), "SMUISelectChange", { value: m(), index: o(oe) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!Ae,
        notchOutline: (R) => Ae && Ae.notch(R),
        closeOutline: () => Ae && Ae.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!H,
        floatLabel: (R) => H && H.float(R),
        getLabelWidth: () => H ? H.getWidth() : 0,
        setLabelRequired: (R) => H && H.setRequired(R)
      },
      {
        get helperText() {
          return nn;
        },
        get leadingIcon() {
          return Ft;
        }
      }
    ),
    !0
  ), V(oe, an().indexOf(m()), !0), o(B).init(), sn(Q), () => {
    var R;
    (R = o(B)) == null || R.destroy();
  })), Mn(() => {
    re && re();
  });
  function dr(R) {
    return R in ne ? ne[R] : Lr().classList.contains(R);
  }
  function pe(R) {
    ne[R] || (ne[R] = !0);
  }
  function F(R) {
    (!(R in ne) || ne[R]) && (ne[R] = !1);
  }
  function P(R, fe) {
    ce[R] != fe && (fe === "" || fe == null ? delete ce[R] : ce[R] = fe);
  }
  function $(R) {
    Y[R] || (Y[R] = !0);
  }
  function Re(R) {
    (!(R in Y) || Y[R]) && (Y[R] = !1);
  }
  function lt(R) {
    return R in _e ? _e[R] ?? null : Lr().getAttribute(R);
  }
  function pt(R, fe) {
    _e[R] !== fe && (_e[R] = fe);
  }
  function Nt(R) {
    (!(R in _e) || _e[R] != null) && (_e[R] = void 0);
  }
  function an() {
    return Le.getOrderedList().map((R) => R.getValue());
  }
  function Di(R) {
    const fe = R.currentTarget.getBoundingClientRect();
    return (ft(R) ? R.touches[0].clientX : R.clientX) - fe.left;
  }
  function ft(R) {
    return "touches" in R;
  }
  function Ut() {
    if (o(B) == null)
      throw new Error("Instance is undefined.");
    return o(B).getUseDefaultValidation();
  }
  function sn(R) {
    var fe;
    (fe = o(B)) == null || fe.setUseDefaultValidation(R);
  }
  function Dr() {
    we.focus();
  }
  function Xa() {
    var R;
    (R = o(B)) == null || R.layout();
  }
  function Lr() {
    return ue;
  }
  var Ge = {
    getUseDefaultValidation: Ut,
    setUseDefaultValidation: sn,
    focus: Dr,
    layout: Xa,
    getElement: Lr
  }, it = Lv(), Ye = K(it);
  qe(Ye, (R, fe, st) => ({ class: R, style: fe, ...st }), [
    () => Be({
      "mdc-select": !0,
      "mdc-select--required": y(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(S()) ? e.leadingIcon : S(),
      "mdc-select--no-label": v() || g() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": o(W),
      "mdc-data-table__pagination-rows-per-page-select": et === "data-table:pagination",
      ...ne,
      [l()]: !0
    }),
    () => Object.entries(ce).map(([R, fe]) => `${R}: ${fe};`).concat([c()]).join(" "),
    () => Oa(U, [
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
  var Ht = k(Ye);
  {
    var Pn = (R) => {
      var fe = Tv();
      qe(
        fe,
        (st) => ({
          type: "hidden",
          required: y(),
          disabled: h(),
          value: m(),
          ...st
        }),
        [() => ut(U, "input$")],
        void 0,
        void 0,
        !0
      ), x(R, fe);
    };
    ee(Ht, (R) => {
      C() && R(Pn);
    });
  }
  var at = z(Ht, 2), bt = (R) => {
    var fe;
    we.focus(), o(B) && o(B).handleClick(Di(R)), (fe = e.anchor$onclick) == null || fe.call(e, R);
  }, Ot = (R) => {
    var fe;
    o(B) && o(B).handleKeydown(R), (fe = e.onkeydown) == null || fe.call(e, R);
  }, Ke = (R) => {
    var fe;
    o(B) && o(B).handleBlur(), je(Lr(), "blur", R), (fe = e.anchor$onblur) == null || fe.call(e, R);
  }, Rt = (R) => {
    var fe;
    o(B) && o(B).handleFocus(), je(Lr(), "focus", R), (fe = e.anchor$onfocus) == null || fe.call(e, R);
  };
  qe(
    at,
    (R, fe) => ({
      class: R,
      "aria-required": y() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(he),
      "aria-expanded": o(W) ? "true" : "false",
      "aria-describedby": o(q),
      role: "combobox",
      tabindex: "0",
      ..._e,
      ...fe,
      onclick: bt,
      onkeydown: Ot,
      onblur: Ke,
      onfocus: Rt
    }),
    [
      () => Be({ "mdc-select__anchor": !0, [w()]: !0 }),
      () => ut(U, "anchor$")
    ]
  );
  var ur = k(at);
  {
    var yn = (R) => {
      var fe = Dv();
      x(R, fe);
    };
    ee(ur, (R) => {
      f() === "filled" && R(yn);
    });
  }
  var yt = z(ur, 2);
  {
    var Bt = (R) => {
      {
        let fe = /* @__PURE__ */ J(() => T() + "-smui-label"), st = /* @__PURE__ */ J(() => t() !== ""), Ct = /* @__PURE__ */ J(() => ut(U, "label$"));
        xe(
          Cs(R, $e(
            {
              get id() {
                return o(fe);
              },
              get floatAbove() {
                return o(st);
              },
              get required() {
                return y();
              }
            },
            () => o(Ct),
            {
              children: (fr, hr) => {
                var va = ie(), Li = K(va);
                {
                  var ei = (ti) => {
                  }, ro = (ti) => {
                    var Ka = ie(), ga = K(Ka);
                    {
                      var gl = (Rr) => {
                        var ni = Ve();
                        de(() => Pe(ni, g())), x(Rr, ni);
                      }, Ya = (Rr) => {
                        var ni = ie(), io = K(ni);
                        Ie(io, g), x(Rr, ni);
                      };
                      ee(
                        ga,
                        (Rr) => {
                          typeof g() == "string" ? Rr(gl) : Rr(Ya, !1);
                        },
                        !0
                      );
                    }
                    x(ti, Ka);
                  };
                  ee(Li, (ti) => {
                    g() == null ? ti(ei) : ti(ro, !1);
                  });
                }
                x(fr, va);
              },
              $$slots: { default: !0 }
            }
          )),
          (fr) => H = fr,
          () => H
        );
      }
    };
    ee(yt, (R) => {
      f() !== "outlined" && !v() && g() != null && R(Bt);
    });
  }
  var Cn = z(yt, 2);
  {
    var Zt = (R) => {
      {
        let fe = /* @__PURE__ */ J(() => v() || g() == null), st = /* @__PURE__ */ J(() => ut(U, "outline$"));
        xe(
          bu(R, $e(
            {
              get noLabel() {
                return o(fe);
              }
            },
            () => o(st),
            {
              children: (Ct, fr) => {
                var hr = ie(), va = K(hr);
                {
                  var Li = (ei) => {
                    {
                      let ro = /* @__PURE__ */ J(() => T() + "-smui-label"), ti = /* @__PURE__ */ J(() => t() !== ""), Ka = /* @__PURE__ */ J(() => ut(U, "label$"));
                      xe(
                        Cs(ei, $e(
                          {
                            get id() {
                              return o(ro);
                            },
                            get floatAbove() {
                              return o(ti);
                            },
                            get required() {
                              return y();
                            }
                          },
                          () => o(Ka),
                          {
                            children: (ga, gl) => {
                              var Ya = ie(), Rr = K(Ya);
                              {
                                var ni = (ma) => {
                                }, io = (ma) => {
                                  var ml = ie(), gc = K(ml);
                                  {
                                    var mc = (Oi) => {
                                      var pa = Ve();
                                      de(() => Pe(pa, g())), x(Oi, pa);
                                    }, pc = (Oi) => {
                                      var pa = ie(), _c = K(pa);
                                      Ie(_c, g), x(Oi, pa);
                                    };
                                    ee(
                                      gc,
                                      (Oi) => {
                                        typeof g() == "string" ? Oi(mc) : Oi(pc, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(ma, ml);
                                };
                                ee(Rr, (ma) => {
                                  g() == null ? ma(ni) : ma(io, !1);
                                });
                              }
                              x(ga, Ya);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ga) => H = ga,
                        () => H
                      );
                    }
                  };
                  ee(va, (ei) => {
                    !v() && g() != null && ei(Li);
                  });
                }
                x(Ct, hr);
              },
              $$slots: { default: !0 }
            }
          )),
          (Ct) => Ae = Ct,
          () => Ae
        );
      }
    };
    ee(Cn, (R) => {
      f() === "outlined" && R(Zt);
    });
  }
  var Qr = z(Cn, 2);
  Ie(Qr, () => e.leadingIcon ?? me);
  var An = z(Qr, 2);
  qe(An, (R, fe) => ({ class: R, ...fe }), [
    () => Be({
      "mdc-select__selected-text-container": !0,
      [M()]: !0
    }),
    () => ut(U, "selectedTextContainer$")
  ]);
  var Or = k(An);
  qe(
    Or,
    (R, fe) => ({
      id: T() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": T() + "-smui-label",
      ...fe
    }),
    [
      () => Be({
        "mdc-select__selected-text": !0,
        [O()]: !0
      }),
      () => ut(U, "selectedText$")
    ]
  );
  var ha = k(Or);
  Me(Or, (R, fe) => te == null ? void 0 : te(R, fe), D), Me(An, (R, fe) => te == null ? void 0 : te(R, fe), L);
  var En = z(An, 2);
  qe(En, (R, fe) => ({ class: R, ...fe }), [
    () => Be({
      "mdc-select__dropdown-icon": !0,
      [G()]: !0
    }),
    () => ut(U, "dropdownIcon$")
  ]), Me(En, (R, fe) => te == null ? void 0 : te(R, fe), X);
  var cr = z(En, 2);
  {
    var jn = (R) => {
      {
        let fe = /* @__PURE__ */ J(() => ut(U, "ripple$"));
        xe(Iu(R, $e(() => o(fe))), (st) => Z = st, () => Z);
      }
    };
    ee(cr, (R) => {
      f() !== "outlined" && u() && R(jn);
    });
  }
  xe(at, (R) => we = R, () => we), Me(at, (R, fe) => te == null ? void 0 : te(R, fe), b);
  var $r = z(at, 2);
  {
    let R = /* @__PURE__ */ J(() => Be({
      "mdc-select__menu": !0,
      ...Y,
      [N()]: !0
    })), fe = /* @__PURE__ */ J(() => ut(U, "menu$"));
    _v($r, $e(
      {
        get class() {
          return o(R);
        },
        get id() {
          return o(he);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(ge);
        },
        get anchorCorner() {
          return o(Te);
        }
      },
      () => o(fe),
      {
        onSMUIMenuSelected: (st) => {
          var Ct;
          o(B) && o(B).handleMenuItemAction(st.detail.index), (Ct = e.onSMUIMenuSelected) == null || Ct.call(e, st);
        },
        onSMUIMenuSurfaceClosing: (st) => {
          var Ct;
          o(B) && o(B).handleMenuClosing(), (Ct = e.onSMUIMenuSurfaceClosing) == null || Ct.call(e, st);
        },
        onSMUIMenuSurfaceClosed: (st) => {
          var Ct;
          o(B) && o(B).handleMenuClosed(), (Ct = e.onSMUIMenuSurfaceClosed) == null || Ct.call(e, st);
        },
        onSMUIMenuSurfaceOpened: (st) => {
          var Ct;
          o(B) && o(B).handleMenuOpened(), (Ct = e.onSMUIMenuSurfaceOpened) == null || Ct.call(e, st);
        },
        get open() {
          return o(W);
        },
        set open(st) {
          V(W, st, !0);
        },
        children: (st, Ct) => {
          {
            let fr = /* @__PURE__ */ J(() => ut(U, "list$"));
            Iv(st, $e(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(De);
                }
              },
              () => o(fr),
              {
                get selectedIndex() {
                  return o(oe);
                },
                set selectedIndex(hr) {
                  V(oe, hr, !0);
                },
                children: (hr, va) => {
                  var Li = ie(), ei = K(Li);
                  Ie(ei, () => e.children ?? me), x(hr, Li);
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
  xe(Ye, (R) => ue = R, () => ue), Me(Ye, (R, fe) => Fn == null ? void 0 : Fn(R, fe), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: pe,
    removeClass: F,
    addStyle: P
  })), Me(Ye, (R, fe) => go == null ? void 0 : go(R, fe), () => ({ addClass: pe, removeClass: F })), Me(Ye, (R, fe) => te == null ? void 0 : te(R, fe), d);
  var no = z(Ye, 2);
  {
    var hc = (R) => {
      {
        let fe = /* @__PURE__ */ J(() => ut(U, "helperText$"));
        xv(R, $e(() => o(fe), {
          children: (st, Ct) => {
            var fr = ie(), hr = K(fr);
            Ie(hr, () => e.helperText ?? me), x(st, fr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ee(no, (R) => {
      e.helperText && R(hc);
    });
  }
  de(() => Pe(ha, t())), x(n, it);
  var vc = ye(Ge);
  return i(), vc;
}
function Rv(n, e) {
  be(e, !0);
  const t = () => Ci(u, "$selectedValue", r), [r, i] = Ti();
  let a = _(e, "use", 19, () => []);
  _(e, "class", 3, "");
  let s = _(e, "value", 3, ""), d = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = Ce("SMUI:select:selectedText"), u = Ce("SMUI:select:value");
  le("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ J(() => s() != null && s() !== "" && t() === s());
  rt(f), Mn(f);
  function f() {
    o(h) && l && rr(c, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var g = { getElement: v };
  xe(
    Av(n, $e(
      {
        get use() {
          return a();
        },
        get "data-value"() {
          return s();
        },
        get value() {
          return s();
        },
        get selected() {
          return o(h);
        }
      },
      () => d,
      {
        children: (p, I) => {
          var E = ie(), A = K(E);
          Ie(A, () => e.children ?? me), x(p, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (p) => l = p,
    () => l
  );
  var m = ye(g);
  return i(), m;
}
function Mv(n, e) {
  be(e, !0);
  let t = _(e, "data", 19, () => []);
  _(e, "placeholder", 3, "");
  let r = _(e, "label", 3, "");
  _(e, "description", 3, "");
  let i = _(e, "value", 15), a = _(e, "required", 3, !1);
  _(e, "size", 3, "sm");
  let s = _(e, "variant", 3, "standard"), d = _(e, "selectedOptionIndex", 31, () => -1), l = _(e, "disabled", 3, !1);
  function c(u) {
    return () => d(u);
  }
  Ov(n, {
    get disabled() {
      return l();
    },
    key: (u) => `${u ?? ""}`,
    get label() {
      return r();
    },
    style: "width: 100%;",
    get variant() {
      return s();
    },
    get required() {
      return a();
    },
    get value() {
      return i();
    },
    set value(u) {
      i(u);
    },
    children: (u, h) => {
      var f = ie(), v = K(f);
      fn(v, 17, t, Er, (g, m, p) => {
        {
          let I = /* @__PURE__ */ J(() => c(p));
          Rv(g, {
            get onclick() {
              return o(I);
            },
            get value() {
              return o(m).value;
            },
            children: (E, A) => {
              var y = Ve();
              de(() => Pe(y, o(m).label)), x(E, y);
            },
            $$slots: { default: !0 }
          });
        }
      }), x(u, f);
    },
    $$slots: { default: !0 }
  }), ye();
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
function Pv(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function kv(n) {
  return n ? n.scrollTop === 0 : !1;
}
function Fv(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function Nv(n) {
  var e = /* @__PURE__ */ new Set();
  return [].forEach.call(n, function(t) {
    return e.add(t.offsetTop);
  }), e.size > 1;
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
var Uv = (
  /** @class */
  function() {
    function n() {
      this.rafIDs = /* @__PURE__ */ new Map();
    }
    return n.prototype.request = function(e, t) {
      var r = this;
      this.cancel(e);
      var i = requestAnimationFrame(function(a) {
        r.rafIDs.delete(e), t(a);
      });
      this.rafIDs.set(e, i);
    }, n.prototype.cancel = function(e) {
      var t = this.rafIDs.get(e);
      t && (cancelAnimationFrame(t), this.rafIDs.delete(e));
    }, n.prototype.cancelAll = function() {
      var e = this;
      this.rafIDs.forEach(function(t, r) {
        e.cancel(r);
      });
    }, n.prototype.getQueue = function() {
      var e = [];
      return this.rafIDs.forEach(function(t, r) {
        e.push(r);
      }), e;
    }, n;
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
var Je = {
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
}, ya = {
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
}, mo = {
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
var As;
(function(n) {
  n.POLL_SCROLL_POS = "poll_scroll_position", n.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(As || (As = {}));
var Hv = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ya.CLOSE_ACTION, r.scrimClickAction = ya.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ya.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Uv(), r.contentScrollHandler = function() {
        r.handleScrollEvent();
      }, r.windowResizeHandler = function() {
        r.layout();
      }, r.windowOrientationChangeHandler = function() {
        r.layout();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Je;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return ya;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return mo;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "defaultAdapter", {
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
    }), e.prototype.init = function() {
      this.adapter.hasClass(Je.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Je.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(t) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Je.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t && t.isAboveFullscreenDialog && this.adapter.addClass(Je.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(Je.OPEN), r.adapter.addBodyClass(Je.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, mo.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var r = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(Je.CLOSING), this.adapter.removeClass(Je.OPEN), this.adapter.removeBodyClass(Je.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(t);
      }, mo.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var t = this;
      this.adapter.addClass(Je.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        t.adapter.addClass(Je.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(Je.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Je.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(Je.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Je.SURFACE_SCRIM_SHOWING);
    }, e.prototype.isOpen = function() {
      return this.dialogOpen;
    }, e.prototype.getEscapeKeyAction = function() {
      return this.escapeKeyAction;
    }, e.prototype.setEscapeKeyAction = function(t) {
      this.escapeKeyAction = t;
    }, e.prototype.getScrimClickAction = function() {
      return this.scrimClickAction;
    }, e.prototype.setScrimClickAction = function(t) {
      this.scrimClickAction = t;
    }, e.prototype.getAutoStackButtons = function() {
      return this.autoStackButtons;
    }, e.prototype.setAutoStackButtons = function(t) {
      this.autoStackButtons = t;
    }, e.prototype.getSuppressDefaultPressSelector = function() {
      return this.suppressDefaultPressSelector;
    }, e.prototype.setSuppressDefaultPressSelector = function(t) {
      this.suppressDefaultPressSelector = t;
    }, e.prototype.layout = function() {
      var t = this;
      this.animFrame.request(As.POLL_LAYOUT_CHANGE, function() {
        t.layoutInternal();
      });
    }, e.prototype.handleClick = function(t) {
      var r = this.adapter.eventTargetMatches(t.target, ya.SCRIM_SELECTOR);
      if (r && this.scrimClickAction !== "")
        this.close(this.scrimClickAction);
      else {
        var i = this.adapter.getActionFromEvent(t);
        i && this.close(i);
      }
    }, e.prototype.handleKeydown = function(t) {
      var r = t.key === "Enter" || t.keyCode === 13;
      if (r) {
        var i = this.adapter.getActionFromEvent(t);
        if (!i) {
          var a = t.composedPath ? t.composedPath()[0] : t.target, s = this.suppressDefaultPressSelector ? !this.adapter.eventTargetMatches(a, this.suppressDefaultPressSelector) : !0;
          r && s && this.adapter.clickDefaultButton();
        }
      }
    }, e.prototype.handleDocumentKeydown = function(t) {
      var r = t.key === "Escape" || t.keyCode === 27;
      r && this.escapeKeyAction !== "" && this.close(this.escapeKeyAction);
    }, e.prototype.handleScrollEvent = function() {
      var t = this;
      this.animFrame.request(As.POLL_SCROLL_POS, function() {
        t.toggleScrollDividerHeader(), t.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(Je.OPENING), this.adapter.removeClass(Je.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(t) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(t, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(Je.STACKED);
      var t = this.adapter.areButtonsStacked();
      t && this.adapter.addClass(Je.STACKED), t !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = t);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(Je.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Je.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Je.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Je.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Je.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Je.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Je.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Je.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(vn)
), Bv = /* @__PURE__ */ j('<div class="mdc-dialog__surface-scrim"></div>'), Gv = /* @__PURE__ */ j('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function Vv(n, e) {
  be(e, !0);
  const t = () => Ci(D, "$aboveFullscreenShown", r), [r, i] = Ti(), { FocusTrap: a } = Th, { closest: s, matches: d } = Va;
  let l = _(e, "use", 19, () => []), c = _(e, "class", 3, ""), u = _(e, "open", 15, !1), h = _(e, "selection", 3, !1), f = _(e, "escapeKeyAction", 3, "close"), v = _(e, "scrimClickAction", 3, "close"), g = _(e, "autoStackButtons", 3, !0), m = _(e, "fullscreen", 3, !1), p = _(e, "sheet", 3, !1), I = _(e, "noContentPadding", 3, !1), E = _(e, "container$class", 3, ""), A = _(e, "surface$class", 3, ""), y = /* @__PURE__ */ ze(e, [
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
  ]), T, C = /* @__PURE__ */ se(void 0), S = new ca(), b = Ee({}), w, L = ar(!1), M = Ce("SMUI:dialog:aboveFullscreen"), D = Ce("SMUI:dialog:aboveFullscreenShown") ?? ar(!1), O = Ce("SMUI:addLayoutListener"), X, G = [], N = (F) => (G.push(F), () => {
    const P = G.indexOf(F);
    P >= 0 && G.splice(P, 1);
  });
  le("SMUI:dialog:actions:reversed", L), le("SMUI:addLayoutListener", N), le("SMUI:dialog:selection", h()), le("SMUI:dialog:aboveFullscreen", M || m()), le("SMUI:dialog:aboveFullscreenShown", D), p() && le("SMUI:icon-button:context", "dialog:sheet"), Se(() => {
    o(C) && o(C).getEscapeKeyAction() !== f() && o(C).setEscapeKeyAction(f());
  }), Se(() => {
    o(C) && o(C).getScrimClickAction() !== v() && o(C).setScrimClickAction(v());
  }), Se(() => {
    o(C) && o(C).getAutoStackButtons() !== g() && o(C).setAutoStackButtons(g());
  }), Se(() => {
    g() || rr(L, !0);
  }), O && (X = O(W)), Se(() => {
    o(C) && o(C).isOpen() !== u() && (u() ? o(C).open({ isAboveFullscreenDialog: !!M }) : o(C).close());
  });
  let U = t();
  Se(() => {
    m() && o(C) && U !== t() && (U = t(), t() ? o(C).showSurfaceScrim() : o(C).hideSurfaceScrim());
  }), rt(() => (w = new a(T, { initialFocusEl: _e() ?? void 0 }), V(
    C,
    new Hv({
      addBodyClass: (F) => document.body.classList.add(F),
      addClass: ue,
      areButtonsStacked: () => Nv(ne()),
      clickDefaultButton: () => {
        const F = ce();
        F && F.click();
      },
      eventTargetMatches: (F, P) => F ? d(F, P) : !1,
      getActionFromEvent: (F) => {
        if (!F.target)
          return "";
        const P = s(F.target, "[data-mdc-dialog-action]");
        return P && P.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: _e,
      hasClass: Q,
      isContentScrollable: () => Pv(we()),
      notifyClosed: (F) => {
        u(!1), je(Y(), "SMUIDialogClosed", F ? { action: F } : {});
      },
      notifyClosing: (F) => je(Y(), "SMUIDialogClosing", F ? { action: F } : {}),
      notifyOpened: () => je(Y(), "SMUIDialogOpened", {}),
      notifyOpening: () => je(Y(), "SMUIDialogOpening", {}),
      releaseFocus: () => w.releaseFocus(),
      removeBodyClass: (F) => document.body.classList.remove(F),
      removeClass: B,
      reverseButtons: () => {
        rr(L, !0);
      },
      trapFocus: () => w.trapFocus(),
      registerContentEventHandler: (F, P) => {
        const $ = we();
        $ instanceof HTMLElement && S.on($, F, P);
      },
      deregisterContentEventHandler: (F, P) => {
        const $ = we();
        $ instanceof HTMLElement && S.off($, F, P);
      },
      isScrollableContentAtTop: () => kv(we()),
      isScrollableContentAtBottom: () => Fv(we()),
      registerWindowEventHandler: (F, P) => S.on(window, F, P),
      deregisterWindowEventHandler: (F, P) => S.off(window, F, P)
    }),
    !0
  ), o(C).init(), () => {
    var F;
    (F = o(C)) == null || F.destroy(), S.clear();
  })), Mn(() => {
    X && X();
  });
  function Q(F) {
    return F in b ? b[F] : Y().classList.contains(F);
  }
  function ue(F) {
    b[F] || (b[F] = !0);
  }
  function B(F) {
    (!(F in b) || b[F]) && (b[F] = !1);
  }
  function ne() {
    return [].slice.call(Y().querySelectorAll(".mdc-dialog__button"));
  }
  function ce() {
    return Y().querySelector("[data-mdc-dialog-button-default]");
  }
  function we() {
    return Y().querySelector(".mdc-dialog__content");
  }
  function _e() {
    return Y().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function oe() {
    M && rr(D, !0), requestAnimationFrame(() => {
      G.forEach((F) => F());
    });
  }
  function he() {
    G.forEach((F) => F());
  }
  function q() {
    M && rr(D, !1);
  }
  function ve() {
    return u();
  }
  function re(F) {
    u(F);
  }
  function W() {
    var F;
    return (F = o(C)) == null ? void 0 : F.layout();
  }
  function Y() {
    return T;
  }
  var ge = { isOpen: ve, setOpen: re, layout: W, getElement: Y }, Te = Gv();
  Kt("resize", _s, () => u() && o(C) && o(C).layout()), Kt("orientationchange", _s, () => u() && o(C) && o(C).layout()), Kt("keydown", Qo.body, (F) => o(C) && o(C).handleDocumentKeydown(F));
  var De = K(Te), Le = (F) => {
    var P;
    oe(), (P = e.onSMUIDialogOpening) == null || P.call(e, F);
  }, et = (F) => {
    var P;
    he(), (P = e.onSMUIDialogOpened) == null || P.call(e, F);
  }, Ft = (F) => {
    var P;
    q(), (P = e.onSMUIDialogClosed) == null || P.call(e, F);
  }, nn = (F) => {
    var P;
    o(C) && o(C).handleClick(F), (P = e.onclick) == null || P.call(e, F);
  }, H = (F) => {
    var P;
    o(C) && o(C).handleKeydown(F), (P = e.onkeydown) == null || P.call(e, F);
  };
  qe(
    De,
    (F, P) => ({
      class: F,
      role: "alertdialog",
      "aria-modal": "true",
      ...P,
      onSMUIDialogOpening: Le,
      onSMUIDialogOpened: et,
      onSMUIDialogClosed: Ft,
      onclick: nn,
      onkeydown: H
    }),
    [
      () => Be({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": m(),
        "mdc-dialog--sheet": p(),
        "mdc-dialog--no-content-padding": I(),
        "smui-dialog--selection": h(),
        ...b,
        [c()]: !0
      }),
      () => Oa(y, ["container$", "surface$"])
    ]
  );
  var Z = k(De);
  qe(Z, (F, P) => ({ class: F, ...P }), [
    () => Be({ "mdc-dialog__container": !0, [E()]: !0 }),
    () => ut(y, "container$")
  ]);
  var Ae = k(Z);
  qe(Ae, (F, P) => ({ class: F, role: "alertdialog", "aria-modal": "true", ...P }), [
    () => Be({ "mdc-dialog__surface": !0, [A()]: !0 }),
    () => ut(y, "surface$")
  ]);
  var He = k(Ae);
  Ie(He, () => e.children ?? me);
  var rn = z(He, 2);
  {
    var mn = (F) => {
      var P = Bv();
      Kt("transitionend", P, () => o(C) && o(C).handleSurfaceScrimTransitionEnd()), x(F, P);
    };
    ee(rn, (F) => {
      m() && F(mn);
    });
  }
  xe(De, (F) => T = F, () => T), Me(De, (F, P) => te == null ? void 0 : te(F, P), l);
  var dr = z(De, 2);
  Ie(dr, () => e.over ?? me), x(n, Te);
  var pe = ye(ge);
  return i(), pe;
}
function qv(n, e) {
  be(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    fa(n, $e(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => t,
      {
        children: (s, d) => {
          var l = ie(), c = K(l);
          Ie(c, () => e.children ?? me), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), ye(a);
}
function Eu(n, e) {
  be(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    fa(n, $e({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, {
      children: (s, d) => {
        var l = ie(), c = K(l);
        Ie(c, () => e.children ?? me), x(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), ye(a);
}
function Wv(n, e) {
  be(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return xe(
    fa(n, $e(
      {
        _smuiClass: "mdc-dialog__actions",
        _smuiClassMap: {
          "smui-dialog__actions--reversed": "SMUI:dialog:actions:reversed"
        },
        _smuiContexts: { "SMUI:button:context": "dialog:action" },
        tag: "div"
      },
      () => t,
      {
        children: (s, d) => {
          var l = ie(), c = K(l);
          Ie(c, () => e.children ?? me), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), ye(a);
}
const zs = ar({
  component: null,
  props: {},
  isOpen: !1
}), zv = ar([]);
zv.subscribe;
const Ql = Ee({ freeze: !1 });
function jv(n, e) {
  be(e, !0);
  let t = /* @__PURE__ */ se(void 0), r = /* @__PURE__ */ se(!1);
  const i = zs.subscribe((l) => {
    V(t, l, !0), V(r, l.isOpen, !0), Ql.freeze = !1;
  });
  rt(() => () => i()), Se(() => {
    Ql.freeze = o(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = ie(), s = K(a);
  {
    var d = (l) => {
      var c = ie(), u = K(c);
      ua(u, () => o(t).component, (h, f) => {
        f(h, $e(() => o(t).props, {
          get open() {
            return o(r);
          },
          set open(v) {
            V(r, v, !0);
          }
        }));
      }), x(l, c);
    };
    ee(s, (l) => {
      o(t).isOpen && o(t).component && l(d);
    });
  }
  x(n, a), ye();
}
function Ai(n, e = {}) {
  return new Promise((t) => {
    zs.set({
      component: n,
      props: e,
      isOpen: !0,
      resolve: t
    });
  });
}
function sr(n, e) {
  zs.update((t) => {
    var r;
    return (r = t.resolve) == null || r.call(t, { type: n, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function Zv(n) {
  zs.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
var Xv = /* @__PURE__ */ j('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function il(n, e) {
  be(e, !0);
  let t = _(e, "open", 15, !1), r = _(e, "title", 3, ""), i = _(e, "message", 3, ""), a = _(e, "confirmActionText", 3, "OK"), s = _(e, "confirmActionColor", 3, "primary"), d = _(e, "cancelActionText", 3, "Cancel"), l = _(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function c() {
    sr("confirm");
  }
  function u() {
    sr("cancel");
  }
  js(n, {
    get title() {
      return r();
    },
    get confirmActionText() {
      return a();
    },
    get confirmActionColor() {
      return s();
    },
    get cancelActionText() {
      return d();
    },
    get color() {
      return l();
    },
    onConfirm: () => c(),
    onCancel: () => u(),
    onClose: () => sr("cancel"),
    width: "100%",
    maxWidth: "500px",
    height: "auto",
    maxHeight: "auto",
    get open() {
      return t();
    },
    set open(f) {
      t(f);
    },
    content: (f) => {
      Eu(f, {
        children: (v, g) => {
          var m = Xv(), p = k(m);
          de(() => Pe(p, i())), x(v, m);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), ye();
}
var Kv = /* @__PURE__ */ j('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), Yv = /* @__PURE__ */ j("<!> <!>", 1), Jv = /* @__PURE__ */ j('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function js(n, e) {
  be(e, !0);
  let t = _(e, "open", 15, !1), r = _(e, "title", 3, ""), i = _(e, "confirmActionText", 3, "Confirm"), a = _(e, "confirmActionColor", 3, "primary"), s = _(e, "cancelActionText", 3, "Cancel"), d = _(e, "width", 3, "80vw"), l = _(e, "maxWidth", 3, "85vw"), c = _(e, "height", 3, "85vh"), u = _(e, "maxHeight", 3, "85vh"), h = _(e, "confirmDisabled", 3, !1), f = _(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), v = _(e, "showCloseButton", 3, !0), g = _(e, "onClose", 3, () => {
  }), m = _(e, "onCancel", 3, () => {
  }), p = _(e, "onConfirm", 3, () => {
  });
  function I(A) {
    A.detail.action === "cancel" ? m()() : A.detail.action === "confirm" ? p()() : (A.detail.action, g()());
  }
  let E = /* @__PURE__ */ J(() => {
    let A;
    return a() === "primary" ? A = f() : A = "#FF203A", h() ? "" : `background-color: ${A}; color: white;`;
  });
  {
    let A = /* @__PURE__ */ J(() => `width: ${d()}; max-width: ${l()}; height: ${c()}; max-height: ${u()};`);
    Vv(n, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: I,
      get surface$style() {
        return o(A);
      },
      get open() {
        return t();
      },
      set open(y) {
        t(y);
      },
      children: (y, T) => {
        var C = Jv(), S = K(C);
        qv(S, {
          children: (M, D) => {
            var O = Kv(), X = k(O), G = k(X), N = z(X, 2);
            {
              var U = (Q) => {
                Ru(Q, {
                  tabindex: "-1",
                  onClick: () => {
                    t(!1), g()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              ee(N, (Q) => {
                v() && Q(U);
              });
            }
            de(() => {
              nt(O, `background-color: ${f()};`), Pe(G, r());
            }), x(M, O);
          },
          $$slots: { default: !0 }
        });
        var b = z(S, 2);
        Eu(b, {
          id: "dialog__content",
          children: (M, D) => {
            var O = ie(), X = K(O);
            Ie(X, () => e.content ?? me), x(M, O);
          },
          $$slots: { default: !0 }
        });
        var w = z(b, 2), L = k(w);
        Wv(L, {
          class: "oscd-dialog__actions",
          children: (M, D) => {
            var O = Yv(), X = K(O);
            {
              var G = (U) => {
                In(U, {
                  type: "button",
                  action: "cancel",
                  color: "secondary",
                  children: (Q, ue) => {
                    var B = Ve();
                    de(() => Pe(B, s())), x(Q, B);
                  },
                  $$slots: { default: !0 }
                });
              };
              ee(X, (U) => {
                s() && U(G);
              });
            }
            var N = z(X, 2);
            In(N, {
              type: "button",
              action: "confirm",
              get disabled() {
                return h();
              },
              get style() {
                return o(E);
              },
              children: (U, Q) => {
                var ue = Ve();
                de(() => Pe(ue, i())), x(U, ue);
              },
              $$slots: { default: !0 }
            }), x(M, O);
          },
          $$slots: { default: !0 }
        }), x(y, C);
      },
      $$slots: { default: !0 }
    });
  }
  ye();
}
var Qv = /* @__PURE__ */ j('<span class="oscd-icon"><!></span>');
function Lt(n, e) {
  var t = Qv(), r = k(t);
  Ie(r, () => e.children ?? me), x(n, t);
}
var $v = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Su(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = $v();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var eg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function xu(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = eg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var tg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function wu(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = tg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var ng = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function rg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = ng();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var ig = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function ag(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = ig();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var sg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function Tu(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = sg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
Vc();
var og = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function lg(n) {
  var e = og();
  x(n, e);
}
var dg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function ug(n, e) {
  let t = _(e, "size", 3, "24px"), r = _(e, "fill", 3, "#004552");
  var i = dg();
  de(() => {
    At(i, "height", t()), At(i, "width", t()), At(i, "fill", r());
  }), x(n, i);
}
var cg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function fg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = cg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var hg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function vg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = hg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var gg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function mg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = gg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var pg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function _g(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = pg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var Ig = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function bg(n, e) {
  let t = _(e, "svgStyles", 8, "");
  Lt(n, {
    children: (r, i) => {
      var a = Ig();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var yg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Du(n, e) {
  let t = _(e, "svgStyles", 8, "");
  Lt(n, {
    children: (r, i) => {
      var a = yg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var Cg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function Lu(n, e) {
  let t = _(e, "svgStyles", 8, "");
  Lt(n, {
    children: (r, i) => {
      var a = Cg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var Ag = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg>');
function al(n, e) {
  let t = _(e, "svgStyles", 3, "fill: gray; width: 25px; height: 25px");
  Lt(n, {
    children: (r, i) => {
      var a = Ag();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var Eg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"></path></svg>');
function Sg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Eg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var xg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path></svg>');
function wg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = xg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var Tg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');
function Dg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Tg();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
ct(["change"]);
ct(["change"]);
function Lg(n, e, t, r) {
  e() && ((n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()), n.key === "Escape" && (n.preventDefault(), r()));
}
var Og = /* @__PURE__ */ j('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Ou(n, e) {
  be(e, !0);
  let t = _(e, "content", 3, ""), r = _(e, "side", 3, "top"), i = _(e, "hoverDelay", 3, 0), a = _(e, "transitionDuration", 3, 80), s = _(e, "disabled", 3, !1);
  const d = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ se(null), c = /* @__PURE__ */ se(null), u = /* @__PURE__ */ se(null), h = /* @__PURE__ */ se(null), f = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(null), g = /* @__PURE__ */ se(null);
  function m() {
    !t() || s() || (o(v) && clearTimeout(o(v)), i() > 0 ? V(v, setTimeout(() => V(f, !0), i()), !0) : V(f, !0));
  }
  function p() {
    o(v) && clearTimeout(o(v)), V(f, !1);
  }
  function I() {
    m();
  }
  function E() {
    p();
  }
  function A() {
    m();
  }
  function y() {
    p();
  }
  function T() {
    if (!o(c) || !o(h) || !o(l) || s()) return;
    const w = o(l).getBoundingClientRect(), L = o(h).getBoundingClientRect();
    let M = 0, D = 0;
    const O = 8;
    switch (r()) {
      case "top":
        M = w.top - L.height - O, D = w.left + w.width / 2 - L.width / 2;
        break;
      case "bottom":
        M = w.bottom + O, D = w.left + w.width / 2 - L.width / 2;
        break;
      case "left":
        M = w.top + w.height / 2 - L.height / 2, D = w.left - L.width - O;
        break;
      case "right":
        M = w.top + w.height / 2 - L.height / 2, D = w.right + O;
        break;
    }
    o(c).style.top = `${M + window.scrollY}px`, o(c).style.left = `${D + window.scrollX}px`;
  }
  function C() {
    var w;
    (w = o(g)) == null || w.disconnect(), V(g, null), o(c) && o(c).parentNode && o(c).parentNode.removeChild(o(c)), V(c, null), V(h, null), V(u, null), o(v) && clearTimeout(o(v));
  }
  Mn(C), Se(() => {
    if (!(!o(f) || !t() || s())) {
      if (!o(c)) {
        V(c, document.createElement("div"), !0), o(c).style.position = "absolute", o(c).style.zIndex = "9999", o(c).style.pointerEvents = "none", o(c).style.opacity = "0", o(c).style.transition = `opacity ${a()}ms ease`, o(c).id = d, o(c).setAttribute("role", "tooltip"), document.body.appendChild(o(c)), V(u, o(c).attachShadow({ mode: "open" }), !0);
        const w = document.createElement("style");
        w.textContent = `
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
      `, o(u).appendChild(w), V(h, document.createElement("div"), !0), o(u).appendChild(o(h)), V(
          g,
          new MutationObserver(() => {
            o(f) && T();
          }),
          !0
        ), o(g).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = t()), o(c) && (o(c).style.opacity = "1", T());
    }
  }), Se(() => {
    if (o(f) || !o(c))
      return;
    o(c).style.opacity = "0";
    const w = o(c), L = setTimeout(
      () => {
        w && w.parentNode && w.parentNode.removeChild(w), o(c) === w && C();
      },
      a()
    );
    return () => clearTimeout(L);
  });
  var S = Og();
  S.__keydown = [Lg, t, m, p];
  var b = k(S);
  Ie(b, () => e.children ?? me), xe(S, (w) => V(l, w), () => o(l)), de(() => {
    At(S, "aria-describedby", t() && !s() ? d : void 0), At(S, "aria-haspopup", t() ? "true" : void 0), At(S, "aria-expanded", t() ? o(f) ? "true" : "false" : void 0);
  }), Kt("mouseenter", S, I), Kt("mouseleave", S, E), Kt("focus", S, A), Kt("blur", S, y), x(n, S), ye();
}
ct(["keydown"]);
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
var pr = {
  HEADER_CELL_SORTED: "mdc-data-table__header-cell--sorted",
  HEADER_CELL_SORTED_DESCENDING: "mdc-data-table__header-cell--sorted-descending",
  IN_PROGRESS: "mdc-data-table--in-progress",
  ROW_SELECTED: "mdc-data-table__row--selected"
}, $l = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, si = {
  ARIA_SELECTED: $l.ARIA_SELECTED,
  ARIA_SORT: $l.ARIA_SORT
}, _n;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
})(_n || (_n = {}));
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
var Rg = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      return n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
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
      return nh(this, void 0, void 0, function() {
        return rh(this, function(t) {
          switch (t.label) {
            case 0:
              return this.adapter.isRowsSelectable() ? [4, this.adapter.registerHeaderRowCheckbox()] : [3, 3];
            case 1:
              return t.sent(), [4, this.adapter.registerRowCheckboxes()];
            case 2:
              t.sent(), this.setHeaderRowCheckboxState(), t.label = 3;
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
    }, e.prototype.setSelectedRowIds = function(t) {
      for (var r = 0; r < this.adapter.getRowCount(); r++) {
        var i = this.adapter.getRowIdAtIndex(r), a = !1;
        i && t.indexOf(i) >= 0 && (a = !0), this.adapter.setRowCheckboxCheckedAtIndex(r, a), this.selectRowAtIndex(r, a);
      }
      this.setHeaderRowCheckboxState();
    }, e.prototype.getRowIds = function() {
      for (var t = [], r = 0; r < this.adapter.getRowCount(); r++)
        t.push(this.adapter.getRowIdAtIndex(r));
      return t;
    }, e.prototype.getSelectedRowIds = function() {
      for (var t = [], r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.isCheckboxAtRowIndexChecked(r) && t.push(this.adapter.getRowIdAtIndex(r));
      return t;
    }, e.prototype.handleHeaderRowCheckboxChange = function() {
      for (var t = this.adapter.isHeaderRowCheckboxChecked(), r = 0; r < this.adapter.getRowCount(); r++)
        this.adapter.setRowCheckboxCheckedAtIndex(r, t), this.selectRowAtIndex(r, t);
      t ? this.adapter.notifySelectedAll() : this.adapter.notifyUnselectedAll();
    }, e.prototype.handleRowCheckboxChange = function(t) {
      var r = this.adapter.getRowIndexByChildElement(t.target);
      if (r !== -1) {
        var i = this.adapter.isCheckboxAtRowIndexChecked(r);
        this.selectRowAtIndex(r, i), this.setHeaderRowCheckboxState();
        var a = this.adapter.getRowIdAtIndex(r);
        this.adapter.notifyRowSelectionChanged({ rowId: a, rowIndex: r, selected: i });
      }
    }, e.prototype.handleSortAction = function(t) {
      for (var r = t.columnId, i = t.columnIndex, a = t.headerCell, s = 0; s < this.adapter.getHeaderCellCount(); s++)
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, pr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, pr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, si.ARIA_SORT, _n.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, _n.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, pr.HEADER_CELL_SORTED);
      var d = this.adapter.getAttributeByHeaderCellIndex(i, si.ARIA_SORT), l = _n.NONE;
      d === _n.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, pr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, si.ARIA_SORT, _n.DESCENDING), l = _n.DESCENDING) : d === _n.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, pr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, si.ARIA_SORT, _n.ASCENDING), l = _n.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, si.ARIA_SORT, _n.ASCENDING), l = _n.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
        columnId: r,
        columnIndex: i,
        headerCell: a,
        sortValue: l
      });
    }, e.prototype.handleRowClick = function(t) {
      var r = t.rowId, i = t.row;
      this.adapter.notifyRowClick({
        rowId: r,
        row: i
      });
    }, e.prototype.showProgress = function() {
      var t = this.adapter.getTableHeaderHeight(), r = this.adapter.getTableContainerHeight() - t, i = t;
      this.adapter.setProgressIndicatorStyles({
        height: r + "px",
        top: i + "px"
      }), this.adapter.addClass(pr.IN_PROGRESS);
    }, e.prototype.hideProgress = function() {
      this.adapter.removeClass(pr.IN_PROGRESS);
    }, e.prototype.setHeaderRowCheckboxState = function() {
      this.adapter.getSelectedRowCount() === 0 ? (this.adapter.setHeaderRowCheckboxChecked(!1), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : this.adapter.getSelectedRowCount() === this.adapter.getRowCount() ? (this.adapter.setHeaderRowCheckboxChecked(!0), this.adapter.setHeaderRowCheckboxIndeterminate(!1)) : (this.adapter.setHeaderRowCheckboxIndeterminate(!0), this.adapter.setHeaderRowCheckboxChecked(!1));
    }, e.prototype.selectRowAtIndex = function(t, r) {
      r ? (this.adapter.addClassAtRowIndex(t, pr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, si.ARIA_SELECTED, "true")) : (this.adapter.removeClassAtRowIndex(t, pr.ROW_SELECTED), this.adapter.setAttributeAtRowIndex(t, si.ARIA_SELECTED, "false"));
    }, e;
  }(vn)
), Mg = /* @__PURE__ */ j('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Pg = /* @__PURE__ */ j("<div><div><table><!></table></div> <!> <!></div>");
function kg(n, e) {
  be(e, !0);
  const t = () => Ci(O, "$progressClosed", r), [r, i] = Ti(), { closest: a } = Va;
  let s = _(e, "use", 19, () => []), d = _(e, "class", 3, ""), l = _(e, "stickyHeader", 3, !1), c = _(e, "sortable", 3, !1), u = _(e, "sort", 15, null), h = _(e, "sortDirection", 15, "ascending"), f = _(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = _(e, "sortDescendingAriaLabel", 3, "sorted, descending"), g = _(e, "container$use", 19, () => []), m = _(e, "container$class", 3, ""), p = _(e, "table$use", 19, () => []), I = _(e, "table$class", 3, ""), E = /* @__PURE__ */ ze(e, [
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
  ]), A, y = /* @__PURE__ */ se(void 0), T, C = /* @__PURE__ */ se(void 0), S = /* @__PURE__ */ se(void 0), b = Ee({}), w = /* @__PURE__ */ se(Ee({ height: "auto", top: "initial" })), L = Ce("SMUI:addLayoutListener"), M, D = !1, O = ar(!1), X = ar(u());
  Se(() => {
    rr(X, u());
  });
  let G = ar(h());
  Se(() => {
    rr(G, h());
  }), le("SMUI:checkbox:context", "data-table"), le("SMUI:linear-progress:context", "data-table"), le("SMUI:linear-progress:closed", O), le("SMUI:data-table:sortable", c()), le("SMUI:data-table:sort", X), le("SMUI:data-table:sortDirection", G), le("SMUI:data-table:sortAscendingAriaLabel", f()), le("SMUI:data-table:sortDescendingAriaLabel", v()), L && (M = L(_e));
  let N;
  Se(() => {
    e.progress && o(y) && N !== t() && (N = t(), t() ? o(y).hideProgress() : o(y).showProgress());
  }), le("SMUI:checkbox:mount", () => {
    o(y) && D && o(y).layout();
  }), le("SMUI:data-table:header:mount", (H) => {
    V(C, H, !0);
  }), le("SMUI:data-table:header:unmount", () => {
    V(C, void 0);
  }), le("SMUI:data-table:body:mount", (H) => {
    V(S, H, !0);
  }), le("SMUI:data-table:body:unmount", () => {
    V(S, void 0);
  }), rt(() => (V(
    y,
    new Rg({
      addClass: Q,
      removeClass: ue,
      getHeaderCellElements: () => {
        var H;
        return ((H = o(C)) == null ? void 0 : H.cells.map((Z) => Z.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var H;
        return ((H = o(C)) == null ? void 0 : H.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (H, Z) => {
        var Ae;
        return ((Ae = o(C)) == null ? void 0 : Ae.orderedCells[H].getAttr(Z)) ?? null;
      },
      setAttributeByHeaderCellIndex: (H, Z, Ae) => {
        var He;
        (He = o(C)) == null || He.orderedCells[H].addAttr(Z, Ae);
      },
      setClassNameByHeaderCellIndex: (H, Z) => {
        var Ae;
        (Ae = o(C)) == null || Ae.orderedCells[H].addClass(Z);
      },
      removeClassNameByHeaderCellIndex: (H, Z) => {
        var Ae;
        (Ae = o(C)) == null || Ae.orderedCells[H].removeClass(Z);
      },
      notifySortAction: (H) => {
        u(H.columnId), h(H.sortValue), je(oe(), "SMUIDataTableSorted", H);
      },
      getTableContainerHeight: () => T.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const H = oe().querySelector(".mdc-data-table__header-row");
        if (!H)
          throw new Error("MDCDataTable: Table header element not found.");
        return H.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (H) => {
        V(w, H, !0);
      },
      addClassAtRowIndex: (H, Z) => {
        var Ae;
        (Ae = o(S)) == null || Ae.orderedRows[H].addClass(Z);
      },
      getRowCount: () => {
        var H;
        return ((H = o(S)) == null ? void 0 : H.rows.length) ?? 0;
      },
      getRowElements: () => {
        var H;
        return ((H = o(S)) == null ? void 0 : H.rows.map((Z) => Z.element)) ?? [];
      },
      getRowIdAtIndex: (H) => {
        var Z;
        return ((Z = o(S)) == null ? void 0 : Z.orderedRows[H].rowId) ?? null;
      },
      getRowIndexByChildElement: (H) => {
        var Z;
        return ((Z = o(S)) == null ? void 0 : Z.orderedRows.map((Ae) => Ae.element).indexOf(a(H, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var H;
        return ((H = o(S)) == null ? void 0 : H.rows.filter((Z) => Z.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (H) => {
        var Ae;
        const Z = (Ae = o(S)) == null ? void 0 : Ae.orderedRows[H].checkbox;
        return Z ? Z.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var Z;
        const H = (Z = o(C)) == null ? void 0 : Z.checkbox;
        return H ? H.checked : !1;
      },
      isRowsSelectable: () => !!oe().querySelector(".mdc-data-table__row-checkbox") || !!oe().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (H) => {
        var Ae;
        const Z = (Ae = o(S)) == null ? void 0 : Ae.orderedRows[H.rowIndex];
        Z && je(oe(), "SMUIDataTableSelectionChanged", {
          row: Z.element,
          rowId: Z.rowId,
          rowIndex: H.rowIndex,
          selected: H.selected
        });
      },
      notifySelectedAll: () => {
        B(!1), je(oe(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        B(!1), je(oe(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (H) => je(oe(), "SMUIDataTableClickRow", H),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (H, Z) => {
        var Ae;
        (Ae = o(S)) == null || Ae.orderedRows[H].removeClass(Z);
      },
      setAttributeAtRowIndex: (H, Z, Ae) => {
        var He;
        (He = o(S)) == null || He.orderedRows[H].addAttr(Z, Ae);
      },
      setHeaderRowCheckboxChecked: (H) => {
        var Ae;
        const Z = (Ae = o(C)) == null ? void 0 : Ae.checkbox;
        Z && (Z.checked = H);
      },
      setHeaderRowCheckboxIndeterminate: B,
      setRowCheckboxCheckedAtIndex: (H, Z) => {
        var He;
        const Ae = (He = o(S)) == null ? void 0 : He.orderedRows[H].checkbox;
        Ae && (Ae.checked = Z);
      },
      setSortStatusLabelByHeaderCellIndex: (H, Z) => {
      }
    }),
    !0
  ), o(y).init(), o(y).layout(), D = !0, () => {
    var H;
    (H = o(y)) == null || H.destroy();
  })), Mn(() => {
    M && M();
  });
  function U(H) {
    o(y) && o(y).handleRowCheckboxChange(H);
  }
  function Q(H) {
    b[H] || (b[H] = !0);
  }
  function ue(H) {
    (!(H in b) || b[H]) && (b[H] = !1);
  }
  function B(H) {
    var Ae;
    const Z = (Ae = o(C)) == null ? void 0 : Ae.checkbox;
    Z && (Z.indeterminate = H);
  }
  function ne(H) {
    if (!o(y) || !H.detail.target)
      return;
    const Z = a(H.detail.target, ".mdc-data-table__header-cell--with-sort");
    Z && we(Z);
  }
  function ce(H) {
    if (!o(y) || !H.detail.target)
      return;
    const Z = a(H.detail.target, ".mdc-data-table__row");
    Z && o(y) && o(y).handleRowClick({ rowId: H.detail.rowId, row: Z });
  }
  function we(H) {
    var rn, mn;
    const Z = ((rn = o(C)) == null ? void 0 : rn.orderedCells) ?? [], Ae = Z.map((dr) => dr.element).indexOf(H);
    if (Ae === -1)
      return;
    const He = Z[Ae].columnId ?? null;
    (mn = o(y)) == null || mn.handleSortAction({ columnId: He, columnIndex: Ae, headerCell: H });
  }
  function _e() {
    var H;
    return (H = o(y)) == null ? void 0 : H.layout();
  }
  function oe() {
    return A;
  }
  var he = { layout: _e, getElement: oe }, q = Pg(), ve = (H) => {
    var Z;
    o(y) && o(y).handleHeaderRowCheckboxChange(), (Z = e.onSMUIDataTableHeaderCheckboxChange) == null || Z.call(e, H);
  }, re = (H) => {
    var Z;
    ne(H), (Z = e.onSMUIDataTableHeaderClick) == null || Z.call(e, H);
  }, W = (H) => {
    var Z;
    ce(H), (Z = e.onSMUIDataTableRowClick) == null || Z.call(e, H);
  }, Y = (H) => {
    var Z;
    U(H), (Z = e.onSMUIDataTableBodyCheckboxChange) == null || Z.call(e, H);
  };
  qe(
    q,
    (H, Z) => ({
      class: H,
      ...Z,
      onSMUIDataTableHeaderCheckboxChange: ve,
      onSMUIDataTableHeaderClick: re,
      onSMUIDataTableRowClick: W,
      onSMUIDataTableBodyCheckboxChange: Y
    }),
    [
      () => Be({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...b,
        [d()]: !0
      }),
      () => Oa(E, ["container$", "table$"])
    ]
  );
  var ge = k(q);
  qe(ge, (H, Z) => ({ class: H, ...Z }), [
    () => Be({
      "mdc-data-table__table-container": !0,
      [m()]: !0
    }),
    () => ut(E, "container$")
  ]);
  var Te = k(ge);
  qe(Te, (H, Z) => ({ class: H, ...Z }), [
    () => Be({ "mdc-data-table__table": !0, [I()]: !0 }),
    () => ut(E, "table$")
  ]);
  var De = k(Te);
  Ie(De, () => e.children ?? me), Me(Te, (H, Z) => te == null ? void 0 : te(H, Z), p), xe(ge, (H) => T = H, () => T), Me(ge, (H, Z) => te == null ? void 0 : te(H, Z), g);
  var Le = z(ge, 2);
  {
    var et = (H) => {
      var Z = Mg(), Ae = z(k(Z), 2);
      Ie(Ae, () => e.progress ?? me), de((He) => nt(Z, He), [
        () => Object.entries(o(w)).map(([He, rn]) => `${He}: ${rn};`).join(" ")
      ]), x(H, Z);
    };
    ee(Le, (H) => {
      e.progress && H(et);
    });
  }
  var Ft = z(Le, 2);
  Ie(Ft, () => e.paginate ?? me), xe(q, (H) => A = H, () => A), Me(q, (H, Z) => te == null ? void 0 : te(H, Z), s), x(n, q);
  var nn = ye(he);
  return i(), nn;
}
var Fg = /* @__PURE__ */ j("<thead><!></thead>");
function Ng(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ se(void 0), s = [];
  const d = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !0);
  const l = Ce("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (I) => {
    V(a, I, !0), l && l(I);
  });
  const c = Ce("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (I) => {
    V(a, void 0), c && c(I);
  }), le("SMUI:data-table:cell:mount", (I) => {
    s.push(I), d.set(I.element, I);
  }), le("SMUI:data-table:cell:unmount", (I) => {
    const E = s.findIndex((A) => A === I);
    E !== -1 && s.splice(E, 1), d.delete(I.element);
  });
  const u = Ce("SMUI:data-table:header:mount"), h = Ce("SMUI:data-table:header:unmount");
  rt(() => {
    const I = {
      get cells() {
        return s;
      },
      get orderedCells() {
        return f();
      },
      get checkbox() {
        return o(a);
      }
    };
    return u && u(I), () => {
      h && h(I);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((I) => d.get(I)).filter((I) => I && I._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var g = { getElement: v }, m = Fg();
  qe(m, () => ({ ...r }));
  var p = k(m);
  return Ie(p, () => e.children ?? me), xe(m, (I) => i = I, () => i), Me(m, (I, E) => te == null ? void 0 : te(I, E), t), x(n, m), ye(g);
}
var Ug = /* @__PURE__ */ j("<tbody><!></tbody>");
function Hg(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const d = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !1), le("SMUI:data-table:row:mount", (m) => {
    s.push(m), d.set(m.element, m);
  }), le("SMUI:data-table:row:unmount", (m) => {
    const p = s.findIndex((I) => I === m);
    p !== -1 && s.splice(p, 1), d.delete(m.element);
  });
  const l = Ce("SMUI:data-table:body:mount"), c = Ce("SMUI:data-table:body:unmount");
  rt(() => {
    const m = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return u();
      }
    };
    return l && l(m), () => {
      c && c(m);
    };
  });
  function u() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((m) => d.get(m)).filter((m) => m && m._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, v = Ug();
  qe(v, (m) => ({ class: m, ...i }), [
    () => Be({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = k(v);
  return Ie(g, () => e.children ?? me), xe(v, (m) => a = m, () => a), Me(v, (m, p) => te == null ? void 0 : te(m, p), t), x(n, v), ye(f);
}
let Bg = 0;
var Gg = /* @__PURE__ */ j("<tr><!></tr>");
function ed(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "rowId", 19, () => "SMUI-data-table-row-" + Bg++), a = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, d = /* @__PURE__ */ se(void 0), l = Ee({}), c = Ee({}), u = Ce("SMUI:data-table:row:header");
  const h = Ce("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (L) => {
    V(d, L, !0), h && h(L);
  });
  const f = Ce("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (L) => {
    V(d, void 0), f && f(L);
  });
  const v = Ce("SMUI:data-table:row:mount"), g = Ce("SMUI:data-table:row:unmount");
  rt(() => {
    const L = u ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return T();
      },
      get checkbox() {
        return o(d);
      },
      get rowId() {
      },
      get selected() {
        return (o(d) && o(d).checked) ?? !1;
      },
      addClass: m,
      removeClass: p,
      getAttr: I,
      addAttr: E
    } : {
      _smui_data_table_row_accessor: !0,
      get element() {
        return T();
      },
      get checkbox() {
        return o(d);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (o(d) && o(d).checked) ?? !1;
      },
      addClass: m,
      removeClass: p,
      getAttr: I,
      addAttr: E
    };
    return v && v(L), () => {
      g && g(L);
    };
  });
  function m(L) {
    l[L] || (l[L] = !0);
  }
  function p(L) {
    (!(L in l) || l[L]) && (l[L] = !1);
  }
  function I(L) {
    return L in c ? c[L] ?? null : T().getAttribute(L);
  }
  function E(L, M) {
    c[L] !== M && (c[L] = M);
  }
  function A(L) {
    je(T(), "SMUIDataTableHeaderClick", L);
  }
  function y(L) {
    je(T(), "SMUIDataTableRowClick", { rowId: i(), target: L.target });
  }
  function T() {
    return s;
  }
  var C = { getElement: T }, S = Gg(), b = (L) => {
    var M;
    u ? A(L) : y(L), (M = e.onclick) == null || M.call(e, L);
  };
  qe(
    S,
    (L) => ({
      class: L,
      "aria-selected": o(d) ? o(d).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: b
    }),
    [
      () => Be({
        "mdc-data-table__header-row": u,
        "mdc-data-table__row": !u,
        "mdc-data-table__row--selected": !u && o(d) && o(d).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var w = k(S);
  return Ie(w, () => e.children ?? me), xe(S, (L) => s = L, () => s), Me(S, (L, M) => te == null ? void 0 : te(L, M), t), x(n, S), ye(C);
}
let Vg = 0;
var qg = /* @__PURE__ */ j('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Wg = /* @__PURE__ */ j("<th><!></th>"), zg = /* @__PURE__ */ j("<td><!></td>");
function rs(n, e) {
  be(e, !0);
  const t = () => Ci(I, "$sort", i), r = () => Ci(E, "$sortDirection", i), [i, a] = Ti();
  let s = Ce("SMUI:data-table:row:header"), d = _(e, "use", 19, () => []), l = _(e, "class", 3, ""), c = _(e, "numeric", 3, !1), u = _(e, "checkbox", 3, !1), h = _(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Vg++ : "SMUI-data-table-unused"), f = _(e, "sortable", 19, () => Ce("SMUI:data-table:sortable")), v = /* @__PURE__ */ ze(e, [
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
  ]), g, m = Ee({}), p = Ee({}), I = Ce("SMUI:data-table:sort"), E = Ce("SMUI:data-table:sortDirection"), A = Ce("SMUI:data-table:sortAscendingAriaLabel"), y = Ce("SMUI:data-table:sortDescendingAriaLabel");
  f() && (le("SMUI:label:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const T = Ce("SMUI:data-table:cell:mount"), C = Ce("SMUI:data-table:cell:unmount");
  rt(() => {
    const B = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return O();
      },
      get columnId() {
        return h();
      },
      addClass: S,
      removeClass: b,
      getAttr: w,
      addAttr: L
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return O();
      },
      get columnId() {
      },
      addClass: S,
      removeClass: b,
      getAttr: w,
      addAttr: L
    };
    return T && T(B), () => {
      C && C(B);
    };
  });
  function S(B) {
    m[B] || (m[B] = !0);
  }
  function b(B) {
    (!(B in m) || m[B]) && (m[B] = !1);
  }
  function w(B) {
    return B in p ? p[B] ?? null : O().getAttribute(B);
  }
  function L(B, ne) {
    p[B] !== ne && (p[B] = ne);
  }
  function M(B) {
    je(O(), "SMUIDataTableHeaderCheckboxChange", B);
  }
  function D(B) {
    je(O(), "SMUIDataTableBodyCheckboxChange", B);
  }
  function O() {
    return g;
  }
  var X = { getElement: O }, G = ie(), N = K(G);
  {
    var U = (B) => {
      var ne = Wg(), ce = (he) => {
        var q;
        u() && M(he), (q = e.onchange) == null || q.call(e, he);
      };
      qe(
        ne,
        (he) => ({
          class: he,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? t() === h() ? r() : "none" : void 0,
          ...p,
          ...v,
          onchange: ce
        }),
        [
          () => Be({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": c(),
            "mdc-data-table__header-cell--checkbox": u(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && t() === h(),
            ...m,
            [l()]: !0
          })
        ]
      );
      var we = k(ne);
      {
        var _e = (he) => {
          var q = qg(), ve = k(q);
          Ie(ve, () => e.children ?? me);
          var re = z(ve, 2), W = k(re);
          de(() => {
            At(re, "id", `${h() ?? ""}-status-label`), Pe(W, t() === h() ? r() === "ascending" ? A : y : "");
          }), x(he, q);
        }, oe = (he) => {
          var q = ie(), ve = K(q);
          Ie(ve, () => e.children ?? me), x(he, q);
        };
        ee(we, (he) => {
          f() ? he(_e) : he(oe, !1);
        });
      }
      xe(ne, (he) => g = he, () => g), Me(ne, (he, q) => te == null ? void 0 : te(he, q), d), x(B, ne);
    }, Q = (B) => {
      var ne = zg(), ce = (_e) => {
        var oe;
        u() && D(_e), (oe = e.onchange) == null || oe.call(e, _e);
      };
      qe(
        ne,
        (_e) => ({
          class: _e,
          ...p,
          ...v,
          onchange: ce
        }),
        [
          () => Be({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": u(),
            ...m,
            [l()]: !0
          })
        ]
      );
      var we = k(ne);
      Ie(we, () => e.children ?? me), xe(ne, (_e) => g = _e, () => g), Me(ne, (_e, oe) => te == null ? void 0 : te(_e, oe), d), x(B, ne);
    };
    ee(N, (B) => {
      s ? B(U) : B(Q, !1);
    });
  }
  x(n, G);
  var ue = ye(X);
  return a(), ue;
}
var jg = /* @__PURE__ */ j('<p class="status svelte-185z1ay">Loading…</p>'), Zg = /* @__PURE__ */ j('<p class="status error svelte-185z1ay"> </p>'), Xg = /* @__PURE__ */ j('<p class="status svelte-185z1ay"> </p>'), Kg = /* @__PURE__ */ j("<!> <!>", 1), Yg = /* @__PURE__ */ j("<!> <!>", 1), Jg = /* @__PURE__ */ j("<!> <!>", 1);
function Qg(n, e) {
  be(e, !0);
  let t = _(e, "items", 19, () => []), r = _(e, "columns", 19, () => []), i = _(e, "loading", 3, !1), a = _(e, "errorMsg", 3, ""), s = _(e, "emptyText", 3, "Nothing to show."), d = _(e, "getRowId", 3, (p, I) => (p && (p.id ?? p.key)) ?? I), l = _(e, "headerBg", 3, null), c = _(e, "rowBg", 3, null), u = _(e, "hasActions", 3, !1), h = /* @__PURE__ */ J(() => u() || !!e.actions);
  var f = ie(), v = K(f);
  {
    var g = (p) => {
      var I = jg();
      x(p, I);
    }, m = (p) => {
      var I = ie(), E = K(I);
      {
        var A = (T) => {
          var C = Zg(), S = k(C);
          de(() => Pe(S, a())), x(T, C);
        }, y = (T) => {
          var C = ie(), S = K(C);
          {
            var b = (L) => {
              var M = Xg(), D = k(M);
              de(() => Pe(D, s())), x(L, M);
            }, w = (L) => {
              kg(L, {
                style: "width: 100%;",
                children: (M, D) => {
                  var O = Jg(), X = K(O);
                  {
                    let N = /* @__PURE__ */ J(() => l() ? `background-color:${l()}` : void 0);
                    Ng(X, {
                      get style() {
                        return o(N);
                      },
                      children: (U, Q) => {
                        ed(U, {
                          children: (ue, B) => {
                            var ne = Kg(), ce = K(ne);
                            fn(ce, 17, r, Er, (oe, he) => {
                              {
                                let q = /* @__PURE__ */ J(() => [
                                  o(he).width ? `width:${o(he).width}` : "",
                                  l() ? `background-color:${l()}` : ""
                                ].filter(Boolean).join(";"));
                                rs(oe, {
                                  header: !0,
                                  get style() {
                                    return o(q);
                                  },
                                  children: (ve, re) => {
                                    var W = Ve();
                                    de(() => Pe(W, o(he).header)), x(ve, W);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var we = z(ce, 2);
                            {
                              var _e = (oe) => {
                                {
                                  let he = /* @__PURE__ */ J(() => l() ? `background-color:${l()}` : void 0);
                                  rs(oe, {
                                    header: !0,
                                    get style() {
                                      return o(he);
                                    }
                                  });
                                }
                              };
                              ee(we, (oe) => {
                                o(h) && oe(_e);
                              });
                            }
                            x(ue, ne);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var G = z(X, 2);
                  Hg(G, {
                    children: (N, U) => {
                      var Q = ie(), ue = K(Q);
                      fn(ue, 19, t, (B, ne) => d()(B, ne), (B, ne) => {
                        {
                          let ce = /* @__PURE__ */ J(() => c() ? `background-color:${c()}` : void 0);
                          ed(B, {
                            get style() {
                              return o(ce);
                            },
                            children: (we, _e) => {
                              var oe = Yg(), he = K(oe);
                              fn(he, 17, r, Er, (re, W) => {
                                {
                                  let Y = /* @__PURE__ */ J(() => o(W).bold ? "cell-bold" : "");
                                  rs(re, {
                                    get class() {
                                      return o(Y);
                                    },
                                    onclick: () => {
                                      var ge;
                                      return (ge = e.onRowClick) == null ? void 0 : ge.call(e, o(ne));
                                    },
                                    children: (ge, Te) => {
                                      var De = Ve();
                                      de(() => {
                                        var Le;
                                        return Pe(De, ((Le = o(ne)) == null ? void 0 : Le[o(W).key]) ?? "");
                                      }), x(ge, De);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                }
                              });
                              var q = z(he, 2);
                              {
                                var ve = (re) => {
                                  rs(re, {
                                    numeric: !0,
                                    children: (W, Y) => {
                                      var ge = ie(), Te = K(ge);
                                      Ie(Te, () => e.actions ?? me, () => ({ item: o(ne) })), x(W, ge);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                ee(q, (re) => {
                                  o(h) && re(ve);
                                });
                              }
                              x(we, oe);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), x(N, Q);
                    },
                    $$slots: { default: !0 }
                  }), x(M, O);
                },
                $$slots: { default: !0 }
              });
            };
            ee(
              S,
              (L) => {
                !t() || t().length === 0 ? L(b) : L(w, !1);
              },
              !0
            );
          }
          x(T, C);
        };
        ee(
          E,
          (T) => {
            a() ? T(A) : T(y, !1);
          },
          !0
        );
      }
      x(p, I);
    };
    ee(v, (p) => {
      i() ? p(g) : p(m, !1);
    });
  }
  x(n, f), ye();
}
var $g = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function em(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = $g();
      de(() => nt(a, t())), x(r, a);
    }
  });
}
var tm = /* @__PURE__ */ j('<span class="secondary-label svelte-17mxdlc"> </span>'), nm = /* @__PURE__ */ j('<div class="separator svelte-17mxdlc"><!></div>'), rm = /* @__PURE__ */ j('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), im = /* @__PURE__ */ j('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function am(n, e) {
  be(e, !0);
  let t = _(e, "breadcrumbs", 19, () => []), r = _(e, "activeIndex", 3, 0);
  const i = (s) => {
    var l;
    const d = t()[s];
    !(d != null && d.enabled) || s === r() || (l = e.handleClick) == null || l.call(e, s);
  };
  var a = im();
  fn(a, 21, t, Er, (s, d, l) => {
    var c = rm(), u = k(c);
    let h;
    u.__click = () => i(l);
    let f;
    var v = k(u), g = k(v), m = z(v, 2);
    {
      var p = (A) => {
        var y = tm();
        let T;
        var C = k(y);
        de(
          (S) => {
            T = nt(y, "", T, S), Pe(C, o(d).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), x(A, y);
      };
      ee(m, (A) => {
        o(d).secondaryLabel && A(p);
      });
    }
    var I = z(u, 2);
    {
      var E = (A) => {
        var y = nm(), T = k(y);
        {
          let C = /* @__PURE__ */ J(() => e.color ? e.color : "#004552");
          em(T, {
            get svgStyles() {
              return `fill: ${o(C) ?? ""}`;
            }
          });
        }
        x(A, y);
      };
      ee(I, (A) => {
        l < t().length - 1 && A(E);
      });
    }
    de(
      (A, y) => {
        h = Sr(u, 1, "breadcrumb svelte-17mxdlc", null, h, A), At(u, "aria-current", l === r() ? "page" : void 0), At(u, "aria-disabled", o(d).enabled ? void 0 : "true"), f = nt(u, "", f, y), Pe(g, o(d).label);
      },
      [
        () => ({
          "br-disabled": !o(d).enabled,
          "br-active": l === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), x(s, c);
  }), x(n, a), ye();
}
ct(["click"]);
var sm = (n, e) => {
  var t;
  n.stopPropagation(), (t = e.onClick) == null || t.call(e, n);
}, om = /* @__PURE__ */ j('<button class="icon-button svelte-jv2py4"><!></button>');
function Ru(n, e) {
  be(e, !0);
  let t = _(e, "tooltipSide", 3, "top"), r = _(e, "showDelay", 3, 1e3), i = _(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = _(e, "size", 3, "25px"), s = /* @__PURE__ */ J(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Ou(n, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return t();
    },
    children: (d, l) => {
      var c = om();
      c.__click = [sm, e];
      var u = k(c);
      {
        var h = (v) => {
          wu(v, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (v) => {
          var g = ie(), m = K(g);
          {
            var p = (E) => {
              ag(E, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, I = (E) => {
              var A = ie(), y = K(A);
              {
                var T = (S) => {
                  xu(S, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, C = (S) => {
                  var b = ie(), w = K(b);
                  {
                    var L = (D) => {
                      rg(D, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, M = (D) => {
                      var O = ie(), X = K(O);
                      {
                        var G = (U) => {
                          vg(U, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, N = (U) => {
                          var Q = ie(), ue = K(Q);
                          {
                            var B = (ce) => {
                              mg(ce, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, ne = (ce) => {
                              var we = ie(), _e = K(we);
                              {
                                var oe = (q) => {
                                  _g(q, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, he = (q) => {
                                  var ve = ie(), re = K(ve);
                                  {
                                    var W = (ge) => {
                                      bg(ge, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, Y = (ge) => {
                                      var Te = Ve();
                                      de(() => Pe(Te, `Unsupported supported type: ${e.type ?? ""}`)), x(ge, Te);
                                    };
                                    ee(
                                      re,
                                      (ge) => {
                                        e.type === "star" ? ge(W) : ge(Y, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(q, ve);
                                };
                                ee(
                                  _e,
                                  (q) => {
                                    e.type === "close" ? q(oe) : q(he, !1);
                                  },
                                  !0
                                );
                              }
                              x(ce, we);
                            };
                            ee(
                              ue,
                              (ce) => {
                                e.type === "link-off" ? ce(B) : ce(ne, !1);
                              },
                              !0
                            );
                          }
                          x(U, Q);
                        };
                        ee(
                          X,
                          (U) => {
                            e.type === "wand-stars" ? U(G) : U(N, !1);
                          },
                          !0
                        );
                      }
                      x(D, O);
                    };
                    ee(
                      w,
                      (D) => {
                        e.type === "visibility" ? D(L) : D(M, !1);
                      },
                      !0
                    );
                  }
                  x(S, b);
                };
                ee(
                  y,
                  (S) => {
                    e.type === "edit" ? S(T) : S(C, !1);
                  },
                  !0
                );
              }
              x(E, A);
            };
            ee(
              m,
              (E) => {
                e.type === "duplicate" ? E(p) : E(I, !1);
              },
              !0
            );
          }
          x(v, g);
        };
        ee(u, (v) => {
          e.type === "delete" ? v(h) : v(f, !1);
        });
      }
      de(() => At(c, "aria-label", e.tooltip)), x(d, c);
    },
    $$slots: { default: !0 }
  }), ye();
}
ct(["click"]);
function td(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function Br(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? td(Object(t), !0).forEach(function(r) {
      ia(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : td(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function Bi(n) {
  "@babel/helpers - typeof";
  return Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Bi(n);
}
function ia(n, e, t) {
  return e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function lm(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function dm(n, e) {
  if (n == null) return {};
  var t = lm(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function um(n, e) {
  return fm(n) || vm(n, e) || sl(n, e) || mm();
}
function Ln(n) {
  return cm(n) || hm(n) || sl(n) || gm();
}
function cm(n) {
  if (Array.isArray(n)) return Fo(n);
}
function fm(n) {
  if (Array.isArray(n)) return n;
}
function hm(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function vm(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], i = !0, a = !1, s, d;
    try {
      for (t = t.call(n); !(i = (s = t.next()).done) && (r.push(s.value), !(e && r.length === e)); i = !0)
        ;
    } catch (l) {
      a = !0, d = l;
    } finally {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (a) throw d;
      }
    }
    return r;
  }
}
function sl(n, e) {
  if (n) {
    if (typeof n == "string") return Fo(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return Fo(n, e);
  }
}
function Fo(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function gm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function mm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Wa(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = sl(n)) || e) {
      t && (n = t);
      var r = 0, i = function() {
      };
      return {
        s: i,
        n: function() {
          return r >= n.length ? {
            done: !0
          } : {
            done: !1,
            value: n[r++]
          };
        },
        e: function(l) {
          throw l;
        },
        f: i
      };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var a = !0, s = !1, d;
  return {
    s: function() {
      t = t.call(n);
    },
    n: function() {
      var l = t.next();
      return a = l.done, l;
    },
    e: function(l) {
      s = !0, d = l;
    },
    f: function() {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (s) throw d;
      }
    }
  };
}
var pm = "finalize", _m = "consider";
function aa(n, e, t) {
  n.dispatchEvent(new CustomEvent(pm, {
    detail: {
      items: e,
      info: t
    }
  }));
}
function jr(n, e, t) {
  n.dispatchEvent(new CustomEvent(_m, {
    detail: {
      items: e,
      info: t
    }
  }));
}
var Zs = "draggedEntered", za = "draggedLeft", Xs = "draggedOverIndex", ol = "draggedLeftDocument", Es = {
  LEFT_FOR_ANOTHER: "leftForAnother",
  OUTSIDE_OF_ANY: "outsideOfAny"
};
function Im(n, e, t) {
  n.dispatchEvent(new CustomEvent(Zs, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function bm(n, e, t) {
  n.dispatchEvent(new CustomEvent(za, {
    detail: {
      draggedEl: e,
      type: Es.LEFT_FOR_ANOTHER,
      theOtherDz: t
    }
  }));
}
function ym(n, e) {
  n.dispatchEvent(new CustomEvent(za, {
    detail: {
      draggedEl: e,
      type: Es.OUTSIDE_OF_ANY
    }
  }));
}
function Cm(n, e, t) {
  n.dispatchEvent(new CustomEvent(Xs, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function Am(n) {
  window.dispatchEvent(new CustomEvent(ol, {
    detail: {
      draggedEl: n
    }
  }));
}
var Tt = {
  DRAG_STARTED: "dragStarted",
  DRAGGED_ENTERED: Zs,
  DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
  DRAGGED_OVER_INDEX: Xs,
  DRAGGED_LEFT: za,
  DRAGGED_LEFT_ALL: "draggedLeftAll",
  DROPPED_INTO_ZONE: "droppedIntoZone",
  DROPPED_INTO_ANOTHER: "droppedIntoAnother",
  DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
  DRAG_STOPPED: "dragStopped"
}, jt = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
}, ja = "isDndShadowItem", Ks = "data-is-dnd-shadow-item-internal", Em = "data-is-dnd-shadow-item-hint", Sm = "id:dnd-shadow-placeholder-0000", xm = "dnd-action-dragged-el", xt = "id", No = 0;
function Mu() {
  No++;
}
function Pu() {
  if (No === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  No--;
}
var ll = typeof window > "u";
function Uo(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t, r = e ? Dm(n) : n.getBoundingClientRect(), i = getComputedStyle(n), a = i.transform;
  if (a) {
    var s, d, l, c;
    if (a.startsWith("matrix3d("))
      t = a.slice(9, -1).split(/, /), s = +t[0], d = +t[5], l = +t[12], c = +t[13];
    else if (a.startsWith("matrix("))
      t = a.slice(7, -1).split(/, /), s = +t[0], d = +t[3], l = +t[4], c = +t[5];
    else
      return r;
    var u = i.transformOrigin, h = r.x - l - (1 - s) * parseFloat(u), f = r.y - c - (1 - d) * parseFloat(u.slice(u.indexOf(" ") + 1)), v = s ? r.width / s : n.offsetWidth, g = d ? r.height / d : n.offsetHeight;
    return {
      x: h,
      y: f,
      width: v,
      height: g,
      top: f,
      right: h + v,
      bottom: f + g,
      left: h
    };
  } else
    return r;
}
function ku(n) {
  var e = Uo(n);
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function Fu(n) {
  var e = n.getBoundingClientRect();
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function Nu(n) {
  return {
    x: (n.left + n.right) / 2,
    y: (n.top + n.bottom) / 2
  };
}
function wm(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Ys(n, e) {
  return n.y <= e.bottom && n.y >= e.top && n.x >= e.left && n.x <= e.right;
}
function Ra(n) {
  return Nu(Fu(n));
}
function nd(n, e) {
  var t = Ra(n), r = ku(e);
  return Ys(t, r);
}
function rd(n, e) {
  var t = Ra(n), r = Ra(e);
  return wm(t, r);
}
function Tm(n) {
  var e = Fu(n);
  return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight;
}
function Dm(n) {
  for (var e = n.getBoundingClientRect(), t = {
    top: e.top,
    bottom: e.bottom,
    left: e.left,
    right: e.right
  }, r = n.parentElement; r && r !== document.body; ) {
    var i = r.getBoundingClientRect(), a = window.getComputedStyle(r).overflowY, s = window.getComputedStyle(r).overflowX, d = a === "scroll" || a === "auto", l = s === "scroll" || s === "auto";
    d && (t.top = Math.max(t.top, i.top), t.bottom = Math.min(t.bottom, i.bottom)), l && (t.left = Math.max(t.left, i.left), t.right = Math.min(t.right, i.right)), r = r.parentElement;
  }
  return t.top = Math.max(t.top, 0), t.bottom = Math.min(t.bottom, window.innerHeight), t.left = Math.max(t.left, 0), t.right = Math.min(t.right, window.innerWidth), {
    top: t.top,
    bottom: t.bottom,
    left: t.left,
    right: t.right,
    width: Math.max(0, t.right - t.left),
    height: Math.max(0, t.bottom - t.top)
  };
}
var Wi;
function dl() {
  Wi = /* @__PURE__ */ new Map();
}
dl();
function Lm(n) {
  var e = Array.from(n.children).findIndex(function(t) {
    return t.getAttribute(Ks);
  });
  if (e >= 0)
    return Wi.has(n) || Wi.set(n, /* @__PURE__ */ new Map()), Wi.get(n).set(e, ku(n.children[e])), e;
}
function Om(n, e) {
  if (!nd(n, e))
    return null;
  var t = e.children;
  if (t.length === 0)
    return {
      index: 0,
      isProximityBased: !0
    };
  for (var r = Lm(e), i = 0; i < t.length; i++)
    if (nd(n, t[i])) {
      var a = Wi.has(e) && Wi.get(e).get(i);
      return a && !Ys(Ra(n), a) ? {
        index: r,
        isProximityBased: !1
      } : {
        index: i,
        isProximityBased: !1
      };
    }
  for (var s = Number.MAX_VALUE, d = void 0, l = 0; l < t.length; l++) {
    var c = rd(n, t[l]);
    c < s && (s = c, d = l);
  }
  if (t.length > 0) {
    var u = t.length, h = t[u - 1], f = h.cloneNode(!1);
    f.style.visibility = "hidden", f.style.pointerEvents = "none", e.appendChild(f);
    var v = rd(n, f);
    v < s && (d = u), e.removeChild(f);
  }
  return {
    index: d,
    isProximityBased: !0
  };
}
function Ca(n) {
  return JSON.stringify(n, null, 2);
}
function Ss(n) {
  if (!n)
    throw new Error("cannot get depth of a falsy node");
  return Uu(n, 0);
}
function Uu(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return n.parentElement ? Uu(n.parentElement, e + 1) : e - 1;
}
function Rm(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (var t in n)
    if (!{}.hasOwnProperty.call(e, t) || e[t] !== n[t])
      return !1;
  return !0;
}
function Mm(n, e) {
  if (n.length !== e.length)
    return !1;
  for (var t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
var Pm = 200, id = 10, Ho;
function km(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Pm, r = arguments.length > 3 ? arguments[3] : void 0, i, a, s = !1, d, l = Array.from(e).sort(function(u, h) {
    return Ss(h) - Ss(u);
  });
  function c() {
    var u = Ra(n), h = r.multiScrollIfNeeded();
    if (!h && d && Math.abs(d.x - u.x) < id && Math.abs(d.y - u.y) < id) {
      Ho = window.setTimeout(c, t);
      return;
    }
    if (Tm(n)) {
      Am(n);
      return;
    }
    d = u;
    var f = !1, v = Wa(l), g;
    try {
      for (v.s(); !(g = v.n()).done; ) {
        var m = g.value;
        h && dl();
        var p = Om(n, m);
        if (p !== null) {
          var I = p.index;
          f = !0, m !== i ? (i && bm(i, n, m), Im(m, p, n), i = m) : I !== a && (Cm(m, p, n), a = I);
          break;
        }
      }
    } catch (E) {
      v.e(E);
    } finally {
      v.f();
    }
    !f && s && i ? (ym(i, n), i = void 0, a = void 0, s = !1) : s = !0, Ho = window.setTimeout(c, t);
  }
  c();
}
function Fm() {
  clearTimeout(Ho), dl();
}
var Aa = 30;
function Nm() {
  var n;
  function e() {
    n = {
      directionObj: void 0,
      stepPx: 0
    };
  }
  e();
  function t(a) {
    var s = n, d = s.directionObj, l = s.stepPx;
    d && (a.scrollBy(d.x * l, d.y * l), window.requestAnimationFrame(function() {
      return t(a);
    }));
  }
  function r(a) {
    return Aa - a;
  }
  function i(a, s) {
    if (!s)
      return !1;
    var d = Um(a, s), l = !!n.directionObj;
    if (d === null)
      return l && e(), !1;
    var c = !1, u = !1;
    return s.scrollHeight > s.clientHeight && (d.bottom < Aa ? (c = !0, n.directionObj = {
      x: 0,
      y: 1
    }, n.stepPx = r(d.bottom)) : d.top < Aa && (c = !0, n.directionObj = {
      x: 0,
      y: -1
    }, n.stepPx = r(d.top)), !l && c) || s.scrollWidth > s.clientWidth && (d.right < Aa ? (u = !0, n.directionObj = {
      x: 1,
      y: 0
    }, n.stepPx = r(d.right)) : d.left < Aa && (u = !0, n.directionObj = {
      x: -1,
      y: 0
    }, n.stepPx = r(d.left)), !l && u) ? (t(s), !0) : (e(), !1);
  }
  return {
    scrollIfNeeded: i,
    resetScrolling: e
  };
}
function Um(n, e) {
  var t = e === document.scrollingElement ? {
    top: 0,
    bottom: window.innerHeight,
    left: 0,
    right: window.innerWidth
  } : e.getBoundingClientRect();
  return Ys(n, t) ? {
    top: n.y - t.top,
    bottom: t.bottom - n.y,
    left: n.x - t.left,
    right: t.right - n.x
  } : null;
}
function Hm() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, t = Gm(n), r = Array.from(t).sort(function(l, c) {
    return Ss(c) - Ss(l);
  }), i = Nm(), a = i.scrollIfNeeded, s = i.resetScrolling;
  function d() {
    var l = e();
    if (!l || !r)
      return !1;
    for (var c = r.filter(function(f) {
      return Ys(l, f.getBoundingClientRect()) || f === document.scrollingElement;
    }), u = 0; u < c.length; u++) {
      var h = a(l, c[u]);
      if (h)
        return !0;
    }
    return !1;
  }
  return {
    multiScrollIfNeeded: t.size > 0 ? d : function() {
      return !1;
    },
    destroy: function() {
      return s();
    }
  };
}
function Bm(n) {
  if (!n)
    return [];
  for (var e = [], t = n; t; ) {
    var r = window.getComputedStyle(t), i = r.overflow;
    i.split(" ").some(function(a) {
      return a.includes("auto") || a.includes("scroll");
    }) && e.push(t), t = t.parentElement;
  }
  return e;
}
function Gm(n) {
  var e = /* @__PURE__ */ new Set(), t = Wa(n), r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var i = r.value;
      Bm(i).forEach(function(a) {
        return e.add(a);
      });
    }
  } catch (a) {
    t.e(a);
  } finally {
    t.f();
  }
  return (document.scrollingElement.scrollHeight > document.scrollingElement.clientHeight || document.scrollingElement.scrollWidth > document.scrollingElement.clientHeight) && e.add(document.scrollingElement), e;
}
function Vm(n) {
  var e = n.cloneNode(!0), t = [], r = n.tagName === "SELECT", i = r ? [n] : Ln(n.querySelectorAll("select")), a = Wa(i), s;
  try {
    for (a.s(); !(s = a.n()).done; ) {
      var d = s.value;
      t.push(d.value);
    }
  } catch (A) {
    a.e(A);
  } finally {
    a.f();
  }
  if (i.length > 0)
    for (var l = r ? [e] : Ln(e.querySelectorAll("select")), c = 0; c < l.length; c++) {
      var u = l[c], h = t[c], f = u.querySelector('option[value="'.concat(h, '"'));
      f && f.setAttribute("selected", !0);
    }
  var v = n.tagName === "CANVAS", g = v ? [n] : Ln(n.querySelectorAll("canvas"));
  if (g.length > 0)
    for (var m = v ? [e] : Ln(e.querySelectorAll("canvas")), p = 0; p < m.length; p++) {
      var I = g[p], E = m[p];
      E.width = I.width, E.height = I.height, I.width > 0 && I.height > 0 && E.getContext("2d").drawImage(I, 0, 0);
    }
  return e;
}
var Ma = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
}), qm = ia({}, Ma.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
function Hu(n) {
  if (!Ma[n]) throw new Error("Can't get non existing feature flag ".concat(n, "! Supported flags: ").concat(Object.keys(Ma)));
  return qm[n];
}
var Wm = 0.2;
function oi(n) {
  return "".concat(n, " ").concat(Wm, "s ease");
}
function zm(n, e) {
  var t = n.getBoundingClientRect(), r = Vm(n);
  Bu(n, r), r.id = xm, r.style.position = "fixed";
  var i = t.top, a = t.left;
  if (r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px"), e) {
    var s = Nu(t);
    i -= s.y - e.y, a -= s.x - e.x, window.setTimeout(function() {
      r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px");
    }, 0);
  }
  return r.style.margin = "0", r.style.boxSizing = "border-box", r.style.height = "".concat(t.height, "px"), r.style.width = "".concat(t.width, "px"), r.style.transition = "".concat(oi("top"), ", ").concat(oi("left"), ", ").concat(oi("background-color"), ", ").concat(oi("opacity"), ", ").concat(oi("color"), " "), window.setTimeout(function() {
    return r.style.transition += ", ".concat(oi("width"), ", ").concat(oi("height"));
  }, 0), r.style.zIndex = "9999", r.style.cursor = "grabbing", r;
}
function jm(n) {
  n.style.cursor = "grab";
}
function Zm(n, e, t, r) {
  Bu(e, n);
  var i = e.getBoundingClientRect(), a = n.getBoundingClientRect(), s = i.width - a.width, d = i.height - a.height;
  if (s || d) {
    var l = {
      left: (t - a.left) / a.width,
      top: (r - a.top) / a.height
    };
    Hu(Ma.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (n.style.height = "".concat(i.height, "px"), n.style.width = "".concat(i.width, "px")), n.style.left = "".concat(parseFloat(n.style.left) - l.left * s, "px"), n.style.top = "".concat(parseFloat(n.style.top) - l.top * d, "px");
  }
}
function Bu(n, e) {
  var t = window.getComputedStyle(n);
  Array.from(t).filter(function(r) {
    return r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || // copying with and height to make up for rect update timing issues in some browsers
    Hu(Ma.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height");
  }).forEach(function(r) {
    return e.style.setProperty(r, t.getPropertyValue(r), t.getPropertyPriority(r));
  });
}
function Xm(n, e) {
  n.draggable = !1, n.ondragstart = function() {
    return !1;
  }, e ? (n.style.userSelect = "", n.style.WebkitUserSelect = "", n.style.cursor = "") : (n.style.userSelect = "none", n.style.WebkitUserSelect = "none", n.style.cursor = "grab");
}
function Gu(n) {
  n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5";
}
function Km(n) {
  n.style.visibility = "hidden", n.setAttribute(Ks, "true");
}
function Ym(n) {
  n.style.visibility = "", n.removeAttribute(Ks);
}
function fs(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  }, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    return [];
  };
  n.forEach(function(r) {
    var i = e(r);
    Object.keys(i).forEach(function(a) {
      r.style[a] = i[a];
    }), t(r).forEach(function(a) {
      return r.classList.add(a);
    });
  });
}
function xs(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : function() {
  }, t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : function() {
    return [];
  };
  n.forEach(function(r) {
    var i = e(r);
    Object.keys(i).forEach(function(a) {
      r.style[a] = "";
    }), t(r).forEach(function(a) {
      return r.classList.contains(a) && r.classList.remove(a);
    });
  });
}
function Jm(n) {
  var e = n.style.minHeight;
  n.style.minHeight = window.getComputedStyle(n).getPropertyValue("height");
  var t = n.style.minWidth;
  return n.style.minWidth = window.getComputedStyle(n).getPropertyValue("width"), function() {
    n.style.minHeight = e, n.style.minWidth = t;
  };
}
var Qm = "--any--", $m = 100, ep = 20, is = 3, tp = 80, ad = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, sd = "data-is-dnd-original-dragged-item", ln, St, dn, Js, ot, Qs, zr, kt, Kn, Vt, kr = !1, ul = !1, cl, Za = !1, hs = [], Ta, Yn, Sa = !1, Vn = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new WeakMap();
function np(n, e) {
  Vn.has(e) || Vn.set(e, /* @__PURE__ */ new Set()), Vn.get(e).has(n) || (Vn.get(e).add(n), Mu());
}
function od(n, e) {
  Vn.get(e).delete(n), Pu(), Vn.get(e).size === 0 && Vn.delete(e);
}
function rp() {
  var n = Vn.get(Js), e = Wa(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.addEventListener(Zs, Vu), r.addEventListener(za, qu), r.addEventListener(Xs, Wu);
    }
  } catch (s) {
    e.e(s);
  } finally {
    e.f();
  }
  window.addEventListener(ol, sa);
  var i = Math.max.apply(Math, Ln(Array.from(n.keys()).map(function(s) {
    return mt.get(s).dropAnimationDurationMs;
  }))), a = i === 0 ? ep : Math.max(i, $m);
  Ta = Hm(n, function() {
    return Vt;
  }), km(St, n, a * 1.07, Ta);
}
function ip() {
  var n = Vn.get(Js), e = Wa(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.removeEventListener(Zs, Vu), r.removeEventListener(za, qu), r.removeEventListener(Xs, Wu);
    }
  } catch (i) {
    e.e(i);
  } finally {
    e.f();
  }
  window.removeEventListener(ol, sa), Ta && (Ta.destroy(), Ta = void 0), Fm();
}
function $s(n) {
  return n.findIndex(function(e) {
    return !!e[ja];
  });
}
function ap(n) {
  var e;
  return Br(Br({}, n), {}, (e = {}, ia(e, ja, !0), ia(e, xt, Sm), e));
}
function Vu(n) {
  var e = mt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== ot)) {
    if (Za = !1, t = t.filter(function(d) {
      return d[xt] !== zr[xt];
    }), ot !== n.currentTarget) {
      var i = mt.get(ot).items, a = i.filter(function(d) {
        return !d[ja];
      });
      jr(ot, a, {
        trigger: Tt.DRAGGED_ENTERED_ANOTHER,
        id: dn[xt],
        source: jt.POINTER
      });
    }
    var s = n.detail.indexObj.index;
    kt = n.currentTarget, t.splice(s, 0, zr), jr(n.currentTarget, t, {
      trigger: Tt.DRAGGED_ENTERED,
      id: dn[xt],
      source: jt.POINTER
    });
  }
}
function qu(n) {
  if (kr) {
    var e = mt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
    if (!(r && n.currentTarget !== ot && n.currentTarget !== kt)) {
      var i = Ln(t), a = $s(i);
      a !== -1 && i.splice(a, 1);
      var s = kt;
      kt = void 0;
      var d = n.detail, l = d.type, c = d.theOtherDz;
      if (l === Es.OUTSIDE_OF_ANY || l === Es.LEFT_FOR_ANOTHER && c !== ot && mt.get(c).dropFromOthersDisabled) {
        Za = !0, kt = ot;
        var u = s === ot ? i : Ln(mt.get(ot).items);
        u.splice(Qs, 0, zr), jr(ot, u, {
          trigger: Tt.DRAGGED_LEFT_ALL,
          id: dn[xt],
          source: jt.POINTER
        });
      }
      jr(n.currentTarget, i, {
        trigger: Tt.DRAGGED_LEFT,
        id: dn[xt],
        source: jt.POINTER
      });
    }
  }
}
function Wu(n) {
  var e = mt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== ot)) {
    var i = Ln(t);
    Za = !1;
    var a = n.detail.indexObj.index, s = $s(i);
    s !== -1 && i.splice(s, 1), i.splice(a, 0, zr), jr(n.currentTarget, i, {
      trigger: Tt.DRAGGED_OVER_INDEX,
      id: dn[xt],
      source: jt.POINTER
    });
  }
}
function ws(n) {
  n.preventDefault();
  var e = n.touches ? n.touches[0] : n;
  Vt = {
    x: e.clientX,
    y: e.clientY
  }, St.style.transform = "translate3d(".concat(Vt.x - Kn.x, "px, ").concat(Vt.y - Kn.y, "px, 0)");
}
function sa() {
  ul = !0, window.removeEventListener("mousemove", ws), window.removeEventListener("touchmove", ws), window.removeEventListener("mouseup", sa), window.removeEventListener("touchend", sa), ip(), jm(St), kt || (kt = ot);
  var n = mt.get(kt), e = n.items, t = n.type;
  xs(Vn.get(t), function(a) {
    return mt.get(a).dropTargetStyle;
  }, function(a) {
    return mt.get(a).dropTargetClasses;
  });
  var r = $s(e);
  r === -1 && kt === ot && (r = Qs), e = e.map(function(a) {
    return a[ja] ? dn : a;
  });
  function i() {
    cl(), aa(kt, e, {
      trigger: Za ? Tt.DROPPED_OUTSIDE_OF_ANY : Tt.DROPPED_INTO_ZONE,
      id: dn[xt],
      source: jt.POINTER
    }), kt !== ot && aa(ot, mt.get(ot).items, {
      trigger: Tt.DROPPED_INTO_ANOTHER,
      id: dn[xt],
      source: jt.POINTER
    });
    var a = Array.from(kt.children).find(function(s) {
      return s.getAttribute(Ks);
    });
    a && Ym(a), lp();
  }
  mt.get(kt).dropAnimationDisabled ? i() : sp(r, i);
}
function sp(n, e) {
  var t = n > -1 ? Uo(kt.children[n], !1) : Uo(kt, !1), r = {
    x: t.left - parseFloat(St.style.left),
    y: t.top - parseFloat(St.style.top)
  }, i = mt.get(kt), a = i.dropAnimationDurationMs, s = "transform ".concat(a, "ms ease");
  St.style.transition = St.style.transition ? St.style.transition + "," + s : s, St.style.transform = "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)"), window.setTimeout(e, a);
}
function op(n, e) {
  hs.push({
    dz: n,
    destroy: e
  }), window.requestAnimationFrame(function() {
    Gu(n), document.body.appendChild(n);
  });
}
function lp() {
  St && St.remove && St.remove(), ln && ln.remove && ln.remove(), St = void 0, ln = void 0, dn = void 0, Js = void 0, ot = void 0, Qs = void 0, zr = void 0, kt = void 0, Kn = void 0, Vt = void 0, kr = !1, ul = !1, cl = void 0, Za = !1, Yn && clearTimeout(Yn), Yn = void 0, Sa = !1, hs.length && (hs.forEach(function(n) {
    var e = n.dz, t = n.destroy;
    t(), e.remove();
  }), hs = []);
}
function dp(n, e) {
  var t = !1, r = {
    items: void 0,
    type: void 0,
    flipDurationMs: 0,
    dragDisabled: !1,
    morphDisabled: !1,
    dropFromOthersDisabled: !1,
    dropTargetStyle: ad,
    dropTargetClasses: [],
    transformDraggedElement: function() {
    },
    centreDraggedOnCursor: !1,
    dropAnimationDisabled: !1,
    delayTouchStartMs: 0
  }, i = /* @__PURE__ */ new Map();
  function a() {
    window.addEventListener("mousemove", l, {
      passive: !1
    }), window.addEventListener("touchmove", l, {
      passive: !1,
      capture: !1
    }), window.addEventListener("mouseup", d, {
      passive: !1
    }), window.addEventListener("touchend", d, {
      passive: !1
    });
  }
  function s() {
    window.removeEventListener("mousemove", l), window.removeEventListener("touchmove", l), window.removeEventListener("mouseup", d), window.removeEventListener("touchend", d), Yn && (clearTimeout(Yn), Yn = void 0, Sa = !1);
  }
  function d(f) {
    if (s(), ln = void 0, Kn = void 0, Vt = void 0, f.type === "touchend") {
      var v = new Event("click", {
        bubbles: !0,
        cancelable: !0
      });
      f.target.dispatchEvent(v);
    }
  }
  function l(f) {
    var v = !!f.touches, g = v ? f.touches[0] : f;
    if (v && r.delayTouchStartMs > 0 && !Sa) {
      Vt = {
        x: g.clientX,
        y: g.clientY
      }, (Math.abs(Vt.x - Kn.x) >= is || Math.abs(Vt.y - Kn.y) >= is) && (Yn && (clearTimeout(Yn), Yn = void 0), d(f));
      return;
    }
    f.preventDefault(), Vt = {
      x: g.clientX,
      y: g.clientY
    }, (Math.abs(Vt.x - Kn.x) >= is || Math.abs(Vt.y - Kn.y) >= is) && (s(), u());
  }
  function c(f) {
    if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !kr) {
      var v = !!f.touches, g = v && r.delayTouchStartMs > 0;
      g || f.preventDefault(), f.stopPropagation();
      var m = v ? f.touches[0] : f;
      Kn = {
        x: m.clientX,
        y: m.clientY
      }, Vt = Br({}, Kn), ln = f.currentTarget, g && (Sa = !1, Yn = window.setTimeout(function() {
        ln && (Sa = !0, s(), u());
      }, r.delayTouchStartMs)), a();
    }
  }
  function u() {
    kr = !0;
    var f = i.get(ln);
    Qs = f, ot = ln.parentElement;
    var v = ot.closest("dialog") || ot.closest("[popover]") || ot.getRootNode(), g = v.body || v, m = r.items, p = r.type, I = r.centreDraggedOnCursor, E = Ln(m);
    dn = E[f], Js = p, zr = ap(dn), St = zm(ln, I && Vt), g.appendChild(St);
    function A() {
      ln.parentElement ? window.requestAnimationFrame(A) : (ln.setAttribute(sd, !0), g.appendChild(ln), rp(), Gu(ln), zr[xt] = dn[xt], St.focus());
    }
    window.requestAnimationFrame(A), fs(Array.from(Vn.get(r.type)).filter(function(y) {
      return y === ot || !mt.get(y).dropFromOthersDisabled;
    }), function(y) {
      return mt.get(y).dropTargetStyle;
    }, function(y) {
      return mt.get(y).dropTargetClasses;
    }), E.splice(f, 1, zr), cl = Jm(ot), jr(ot, E, {
      trigger: Tt.DRAG_STARTED,
      id: dn[xt],
      source: jt.POINTER
    }), window.addEventListener("mousemove", ws, {
      passive: !1
    }), window.addEventListener("touchmove", ws, {
      passive: !1,
      capture: !1
    }), window.addEventListener("mouseup", sa, {
      passive: !1
    }), window.addEventListener("touchend", sa, {
      passive: !1
    });
  }
  function h(f) {
    var v = f.items, g = v === void 0 ? void 0 : v, m = f.flipDurationMs, p = m === void 0 ? 0 : m, I = f.type, E = I === void 0 ? Qm : I, A = f.dragDisabled, y = A === void 0 ? !1 : A, T = f.morphDisabled, C = T === void 0 ? !1 : T, S = f.dropFromOthersDisabled, b = S === void 0 ? !1 : S, w = f.dropTargetStyle, L = w === void 0 ? ad : w, M = f.dropTargetClasses, D = M === void 0 ? [] : M, O = f.transformDraggedElement, X = O === void 0 ? function() {
    } : O, G = f.centreDraggedOnCursor, N = G === void 0 ? !1 : G, U = f.dropAnimationDisabled, Q = U === void 0 ? !1 : U, ue = f.delayTouchStart, B = ue === void 0 ? !1 : ue;
    r.dropAnimationDurationMs = p;
    var ne = 0;
    B === !0 ? ne = tp : typeof B == "number" && isFinite(B) && B >= 0 && (ne = B), r.delayTouchStartMs = ne, r.type && E !== r.type && od(n, r.type), r.type = E, r.items = Ln(g), r.dragDisabled = y, r.morphDisabled = C, r.transformDraggedElement = X, r.centreDraggedOnCursor = N, r.dropAnimationDisabled = Q, t && kr && !ul && (!Rm(L, r.dropTargetStyle) || !Mm(D, r.dropTargetClasses)) && (xs([n], function() {
      return r.dropTargetStyle;
    }, function() {
      return D;
    }), fs([n], function() {
      return L;
    }, function() {
      return D;
    })), r.dropTargetStyle = L, r.dropTargetClasses = Ln(D);
    function ce(he, q) {
      return mt.get(he) ? mt.get(he)[q] : r[q];
    }
    t && kr && r.dropFromOthersDisabled !== b && (b ? xs([n], function(he) {
      return ce(he, "dropTargetStyle");
    }, function(he) {
      return ce(he, "dropTargetClasses");
    }) : fs([n], function(he) {
      return ce(he, "dropTargetStyle");
    }, function(he) {
      return ce(he, "dropTargetClasses");
    })), r.dropFromOthersDisabled = b, mt.set(n, r), np(n, E);
    for (var we = kr ? $s(r.items) : -1, _e = 0; _e < n.children.length; _e++) {
      var oe = n.children[_e];
      if (Xm(oe, y), _e === we) {
        C || Zm(St, oe, Vt.x, Vt.y), r.transformDraggedElement(St, dn, _e), Km(oe);
        continue;
      }
      oe.removeEventListener("mousedown", po.get(oe)), oe.removeEventListener("touchstart", po.get(oe)), y || (oe.addEventListener("mousedown", c), oe.addEventListener("touchstart", c), po.set(oe, c)), i.set(oe, _e), t || (t = !0);
    }
  }
  return h(e), {
    update: function(v) {
      h(v);
    },
    destroy: function() {
      function v() {
        od(n, mt.get(n).type), mt.delete(n);
      }
      kr && !n.closest("[".concat(sd, "]")) ? op(n, v) : v();
    }
  };
}
var as, Bo = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
}, zu = (as = {}, ia(as, Bo.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), ia(as, Bo.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), as), up = "dnd-action-aria-alert", _t;
function Go() {
  _t || (_t = document.createElement("div"), function() {
    _t.id = up, _t.style.position = "fixed", _t.style.bottom = "0", _t.style.left = "0", _t.style.zIndex = "-5", _t.style.opacity = "0", _t.style.height = "0", _t.style.width = "0", _t.setAttribute("role", "alert");
  }(), document.body.prepend(_t), Object.entries(zu).forEach(function(n) {
    var e = um(n, 2), t = e[0], r = e[1];
    return document.body.prepend(hp(t, r));
  }));
}
function cp() {
  return ll ? null : (document.readyState === "complete" ? Go() : window.addEventListener("DOMContentLoaded", Go), Br({}, Bo));
}
function fp() {
  ll || !_t || (Object.keys(zu).forEach(function(n) {
    var e;
    return (e = document.getElementById(n)) === null || e === void 0 ? void 0 : e.remove();
  }), _t.remove(), _t = void 0);
}
function hp(n, e) {
  var t = document.createElement("div");
  return t.id = n, t.innerHTML = "<p>".concat(e, "</p>"), t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5", t;
}
function zi(n) {
  if (!ll) {
    _t || Go(), _t.innerHTML = "";
    var e = document.createTextNode(n);
    _t.appendChild(e), _t.style.display = "none", _t.style.display = "inline";
  }
}
var vp = "--any--", ld = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Dn = !1, Vo, Wt, Ii = "", li, tr, Gr = "", Ts = /* @__PURE__ */ new WeakSet(), dd = /* @__PURE__ */ new WeakMap(), ud = /* @__PURE__ */ new WeakMap(), qo = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Ds;
function gp(n, e) {
  Hn.size === 0 && (Ds = cp(), window.addEventListener("keydown", ju), window.addEventListener("click", Zu)), Hn.has(e) || Hn.set(e, /* @__PURE__ */ new Set()), Hn.get(e).has(n) || (Hn.get(e).add(n), Mu());
}
function cd(n, e) {
  Wt === n && Pa(), Hn.get(e).delete(n), Pu(), Hn.get(e).size === 0 && Hn.delete(e), Hn.size === 0 && (window.removeEventListener("keydown", ju), window.removeEventListener("click", Zu), Ds = void 0, fp());
}
function ju(n) {
  if (Dn)
    switch (n.key) {
      case "Escape": {
        Pa();
        break;
      }
    }
}
function Zu() {
  Dn && (Ts.has(document.activeElement) || Pa());
}
function mp(n) {
  if (Dn) {
    var e = n.currentTarget;
    if (e !== Wt) {
      Ii = e.getAttribute("aria-label") || "";
      var t = Mt.get(Wt), r = t.items, i = r.find(function(h) {
        return h[xt] === tr;
      }), a = r.indexOf(i), s = r.splice(a, 1)[0], d = Mt.get(e), l = d.items, c = d.autoAriaDisabled;
      e.getBoundingClientRect().top < Wt.getBoundingClientRect().top || e.getBoundingClientRect().left < Wt.getBoundingClientRect().left ? (l.push(s), c || zi("Moved item ".concat(Gr, " to the end of the list ").concat(Ii))) : (l.unshift(s), c || zi("Moved item ".concat(Gr, " to the beginning of the list ").concat(Ii)));
      var u = Wt;
      aa(u, r, {
        trigger: Tt.DROPPED_INTO_ANOTHER,
        id: tr,
        source: jt.KEYBOARD
      }), aa(e, l, {
        trigger: Tt.DROPPED_INTO_ZONE,
        id: tr,
        source: jt.KEYBOARD
      }), Wt = e;
    }
  }
}
function Xu() {
  qo.forEach(function(n, e) {
    var t = n.update;
    return t(Mt.get(e));
  });
}
function Pa() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  Mt.get(Wt).autoAriaDisabled || zi("Stopped dragging item ".concat(Gr)), Ts.has(document.activeElement) && document.activeElement.blur(), n && jr(Wt, Mt.get(Wt).items, {
    trigger: Tt.DRAG_STOPPED,
    id: tr,
    source: jt.KEYBOARD
  }), xs(Hn.get(Vo), function(e) {
    return Mt.get(e).dropTargetStyle;
  }, function(e) {
    return Mt.get(e).dropTargetClasses;
  }), li = null, tr = null, Gr = "", Vo = null, Wt = null, Ii = "", Dn = !1, Xu();
}
function pp(n, e) {
  var t = {
    items: void 0,
    type: void 0,
    dragDisabled: !1,
    zoneTabIndex: 0,
    zoneItemTabIndex: 0,
    dropFromOthersDisabled: !1,
    dropTargetStyle: ld,
    dropTargetClasses: [],
    autoAriaDisabled: !1
  };
  function r(u, h, f) {
    u.length <= 1 || u.splice(f, 1, u.splice(h, 1, u[f])[0]);
  }
  function i(u) {
    switch (u.key) {
      case "Enter":
      case " ": {
        if ((u.target.disabled !== void 0 || u.target.href || u.target.isContentEditable) && !Ts.has(u.target))
          return;
        u.preventDefault(), u.stopPropagation(), Dn ? Pa() : a(u);
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        if (!Dn) return;
        u.preventDefault(), u.stopPropagation();
        var h = Mt.get(n), f = h.items, v = Array.from(n.children), g = v.indexOf(u.currentTarget);
        g < v.length - 1 && (t.autoAriaDisabled || zi("Moved item ".concat(Gr, " to position ").concat(g + 2, " in the list ").concat(Ii)), r(f, g, g + 1), aa(n, f, {
          trigger: Tt.DROPPED_INTO_ZONE,
          id: tr,
          source: jt.KEYBOARD
        }));
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        if (!Dn) return;
        u.preventDefault(), u.stopPropagation();
        var m = Mt.get(n), p = m.items, I = Array.from(n.children), E = I.indexOf(u.currentTarget);
        E > 0 && (t.autoAriaDisabled || zi("Moved item ".concat(Gr, " to position ").concat(E, " in the list ").concat(Ii)), r(p, E, E - 1), aa(n, p, {
          trigger: Tt.DROPPED_INTO_ZONE,
          id: tr,
          source: jt.KEYBOARD
        }));
        break;
      }
    }
  }
  function a(u) {
    d(u.currentTarget), Wt = n, Vo = t.type, Dn = !0;
    var h = Array.from(Hn.get(t.type)).filter(function(v) {
      return v === Wt || !Mt.get(v).dropFromOthersDisabled;
    });
    if (fs(h, function(v) {
      return Mt.get(v).dropTargetStyle;
    }, function(v) {
      return Mt.get(v).dropTargetClasses;
    }), !t.autoAriaDisabled) {
      var f = "Started dragging item ".concat(Gr, ". Use the arrow keys to move it within its list ").concat(Ii);
      h.length > 1 && (f += ", or tab to another list in order to move the item into it"), zi(f);
    }
    jr(n, Mt.get(n).items, {
      trigger: Tt.DRAG_STARTED,
      id: tr,
      source: jt.KEYBOARD
    }), Xu();
  }
  function s(u) {
    Dn && u.currentTarget !== li && (u.stopPropagation(), Pa(!1), a(u));
  }
  function d(u) {
    var h = Mt.get(n), f = h.items, v = Array.from(n.children), g = v.indexOf(u);
    li = u, li.tabIndex = t.zoneItemTabIndex, tr = f[g][xt], Gr = v[g].getAttribute("aria-label") || "";
  }
  function l(u) {
    var h = u.items, f = h === void 0 ? [] : h, v = u.type, g = v === void 0 ? vp : v, m = u.dragDisabled, p = m === void 0 ? !1 : m, I = u.zoneTabIndex, E = I === void 0 ? 0 : I, A = u.zoneItemTabIndex, y = A === void 0 ? 0 : A, T = u.dropFromOthersDisabled, C = T === void 0 ? !1 : T, S = u.dropTargetStyle, b = S === void 0 ? ld : S, w = u.dropTargetClasses, L = w === void 0 ? [] : w, M = u.autoAriaDisabled, D = M === void 0 ? !1 : M;
    t.items = Ln(f), t.dragDisabled = p, t.dropFromOthersDisabled = C, t.zoneTabIndex = E, t.zoneItemTabIndex = y, t.dropTargetStyle = b, t.dropTargetClasses = L, t.autoAriaDisabled = D, t.type && g !== t.type && cd(n, t.type), t.type = g, gp(n, g), D || (n.setAttribute("aria-disabled", p), n.setAttribute("role", "list"), n.setAttribute("aria-describedby", p ? Ds.DND_ZONE_DRAG_DISABLED : Ds.DND_ZONE_ACTIVE)), Mt.set(n, t), Dn ? n.tabIndex = n === Wt || li.contains(n) || t.dropFromOthersDisabled || Wt && t.type !== Mt.get(Wt).type ? -1 : 0 : n.tabIndex = t.zoneTabIndex, n.addEventListener("focus", mp);
    for (var O = function(N) {
      var U = n.children[N];
      Ts.add(U), U.tabIndex = Dn ? -1 : t.zoneItemTabIndex, D || U.setAttribute("role", "listitem"), U.removeEventListener("keydown", dd.get(U)), U.removeEventListener("click", ud.get(U)), p || (U.addEventListener("keydown", i), dd.set(U, i), U.addEventListener("click", s), ud.set(U, s)), Dn && t.items[N][xt] === tr && (li = U, li.tabIndex = t.zoneItemTabIndex, U.focus());
    }, X = 0; X < n.children.length; X++)
      O(X);
  }
  l(e);
  var c = {
    update: function(h) {
      l(h);
    },
    destroy: function() {
      cd(n, t.type), Mt.delete(n), qo.delete(n);
    }
  };
  return qo.set(n, c), c;
}
var _p = ["items", "flipDurationMs", "type", "dragDisabled", "morphDisabled", "dropFromOthersDisabled", "zoneTabIndex", "zoneItemTabIndex", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor", "delayTouchStart", "dropAnimationDisabled"];
function Ip(n, e) {
  if (bp(n))
    return {
      update: function() {
      },
      destroy: function() {
      }
    };
  fd(e);
  var t = dp(n, e), r = pp(n, e);
  return {
    update: function(a) {
      fd(a), t.update(a), r.update(a);
    },
    destroy: function() {
      t.destroy(), r.destroy();
    }
  };
}
function bp(n) {
  return !!n.closest("[".concat(Em, '="true"]'));
}
function fd(n) {
  var e = n.items;
  n.flipDurationMs, n.type, n.dragDisabled, n.morphDisabled, n.dropFromOthersDisabled;
  var t = n.zoneTabIndex, r = n.zoneItemTabIndex;
  n.dropTargetStyle;
  var i = n.dropTargetClasses;
  n.transformDraggedElement, n.autoAriaDisabled, n.centreDraggedOnCursor;
  var a = n.delayTouchStart;
  n.dropAnimationDisabled;
  var s = dm(n, _p);
  if (Object.keys(s).length > 0 && console.warn("dndzone will ignore unknown options", s), !e)
    throw new Error("no 'items' key provided to dndzone");
  var d = e.find(function(u) {
    return !{}.hasOwnProperty.call(u, xt);
  });
  if (d)
    throw new Error("missing '".concat(xt, "' property for item ").concat(Ca(d)));
  if (i && !Array.isArray(i))
    throw new Error("dropTargetClasses should be an array but instead it is a ".concat(Bi(i), ", ").concat(Ca(i)));
  if (t && !hd(t))
    throw new Error("zoneTabIndex should be a number but instead it is a ".concat(Bi(t), ", ").concat(Ca(t)));
  if (r && !hd(r))
    throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(Bi(r), ", ").concat(Ca(r)));
  if (a !== void 0 && a !== !1) {
    var l = a === !0, c = typeof a == "number" && isFinite(a) && a >= 0;
    if (!l && !c)
      throw new Error("delayTouchStart should be a boolean (true/false) or a non-negative number but instead it is a ".concat(Bi(a), ", ").concat(Ca(a)));
  }
}
function hd(n) {
  return !isNaN(n) && function(e) {
    return (e | 0) === e;
  }(parseFloat(n));
}
function Ku(n) {
  var e = n, t = /* @__PURE__ */ new Set();
  return {
    get: function() {
      return e;
    },
    set: function(i) {
      e = i, Array.from(t).forEach(function(a) {
        return a(e);
      });
    },
    subscribe: function(i) {
      t.add(i), i(e);
    },
    unsubscribe: function(i) {
      t.delete(i);
    }
  };
}
var Nn = Ku(!0), ji = Ku(!1);
function vd() {
  return {
    dragDisabled: ji.get() || Nn.get(),
    zoneItemTabIndex: -1
  };
}
function yr(n, e) {
  var t;
  ji.set((t = e == null ? void 0 : e.dragDisabled) !== null && t !== void 0 ? t : !1);
  var r = e, i = Ip(n, Br(Br({}, r), vd()));
  function a() {
    i.update(Br(Br({}, r), vd()));
  }
  Nn.subscribe(a);
  function s(l) {
    var c = l.detail.info, u = c.source, h = c.trigger;
    u === jt.KEYBOARD && h === Tt.DRAG_STOPPED && Nn.set(!0);
  }
  function d(l) {
    var c = l.detail.info.source;
    c === jt.POINTER && Nn.set(!0);
  }
  return n.addEventListener("consider", s), n.addEventListener("finalize", d), {
    update: function(c) {
      var u, h;
      r = c, ji.set((u = (h = r) === null || h === void 0 ? void 0 : h.dragDisabled) !== null && u !== void 0 ? u : !1), a();
    },
    destroy: function() {
      n.removeEventListener("consider", s), n.removeEventListener("finalize", d), Nn.unsubscribe(a);
    }
  };
}
function Cr(n) {
  n.setAttribute("role", "button");
  function e(a) {
    a.preventDefault(), Nn.set(!1), window.addEventListener("mouseup", r), window.addEventListener("touchend", r);
  }
  function t(a) {
    (a.key === "Enter" || a.key === " ") && Nn.set(!1);
  }
  function r() {
    Nn.set(!0), window.removeEventListener("mouseup", r), window.removeEventListener("touchend", r);
  }
  var i = function() {
    var s = ji.get(), d = Nn.get();
    s ? (n.tabIndex = -1, n.style.cursor = "") : (n.tabIndex = d ? 0 : -1, n.style.cursor = d ? "grab" : "grabbing");
  };
  return ji.subscribe(i), Nn.subscribe(i), n.addEventListener("mousedown", e), n.addEventListener("touchstart", e), n.addEventListener("keydown", t), {
    update: function() {
    },
    destroy: function() {
      n.removeEventListener("mousedown", e), n.removeEventListener("touchstart", e), n.removeEventListener("keydown", t), ji.unsubscribe(i), Nn.unsubscribe(i);
    }
  };
}
function yp(n) {
  return n * n * n;
}
function Yu(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function eo(n, { from: e, to: t }, r = {}) {
  var { delay: i = 0, duration: a = (C) => Math.sqrt(C) * 120, easing: s = Yu } = r, d = getComputedStyle(n), l = d.transform === "none" ? "" : d.transform, [c, u] = d.transformOrigin.split(" ").map(parseFloat);
  c /= n.clientWidth, u /= n.clientHeight;
  var h = Cp(n), f = n.clientWidth / t.width / h, v = n.clientHeight / t.height / h, g = e.left + e.width * c, m = e.top + e.height * u, p = t.left + t.width * c, I = t.top + t.height * u, E = (g - p) * f, A = (m - I) * v, y = e.width / t.width, T = e.height / t.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(E * E + A * A)) : a,
    easing: s,
    css: (C, S) => {
      var b = S * E, w = S * A, L = C + S * y, M = C + S * T;
      return `transform: ${l} translate(${b}px, ${w}px) scale(${L}, ${M});`;
    }
  };
}
function Cp(n) {
  if ("currentCSSZoom" in n)
    return (
      /** @type {number} */
      n.currentCSSZoom
    );
  for (var e = n, t = 1; e !== null; )
    t *= +getComputedStyle(e).zoom, e = /** @type {Element | null} */
    e.parentElement;
  return t;
}
function Ap(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function gd(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
function md(n, { delay: e = 0, duration: t = 400, easing: r = Ap, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const d = getComputedStyle(n), l = +d.opacity, c = d.transform === "none" ? "" : d.transform, u = l * (1 - s), [h, f] = gd(i), [v, g] = gd(a);
  return {
    delay: e,
    duration: t,
    easing: r,
    css: (m, p) => `
			transform: ${c} translate(${(1 - m) * h}${f}, ${(1 - m) * v}${g});
			opacity: ${l - u * p}`
  };
}
ct([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
var Ep = /* @__PURE__ */ j("<div><!></div>");
function Ju(n, e) {
  let t = _(e, "variant", 3, "secondary");
  var r = Ep(), i = k(r);
  Ie(i, () => e.children ?? me), de(() => Sr(r, 1, `osc-card osc-card--${t()}`, "svelte-14hhvrx")), x(n, r);
}
var Sp = /* @__PURE__ */ j('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), xp = /* @__PURE__ */ j('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), wp = /* @__PURE__ */ j('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), Tp = /* @__PURE__ */ j('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function Qu(n, e) {
  let t = _(e, "backgroundColor", 3, "");
  var r = Tp(), i = k(r);
  {
    var a = (u) => {
      var h = Sp(), f = k(h);
      Ie(f, () => e.header), x(u, h);
    };
    ee(i, (u) => {
      e.header && u(a);
    });
  }
  var s = z(i, 2);
  {
    var d = (u) => {
      var h = xp(), f = k(h);
      Ie(f, () => e.content), x(u, h);
    };
    ee(s, (u) => {
      e.content && u(d);
    });
  }
  var l = z(s, 2);
  {
    var c = (u) => {
      var h = wp(), f = k(h);
      Ie(f, () => e.additional), x(u, h);
    };
    ee(l, (u) => {
      e.additional && u(c);
    });
  }
  de(() => nt(r, `--bg-color: ${t() ?? ""}`)), x(n, r);
}
function Dp(n, e) {
  var t;
  (t = e()) == null || t();
}
var Lp = /* @__PURE__ */ j('<div class="detail svelte-4xu36c"> </div>'), Op = /* @__PURE__ */ j('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function Rp(n, e) {
  be(e, !0);
  let t = _(e, "onClose", 3, () => {
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
  var a = Op(), s = k(a), d = k(s);
  Xl(d, {
    class: "material-icons",
    children: (m, p) => {
      var I = Ve();
      de(() => Pe(I, r[e.type])), x(m, I);
    },
    $$slots: { default: !0 }
  });
  var l = z(s, 2), c = k(l), u = k(c), h = z(c, 2);
  {
    var f = (m) => {
      var p = Lp(), I = k(p);
      de(() => Pe(I, e.detail)), x(m, p);
    };
    ee(h, (m) => {
      e.detail && m(f);
    });
  }
  var v = z(l, 2);
  v.__click = [Dp, t];
  var g = k(v);
  Xl(g, {
    class: "material-icons",
    children: (m, p) => {
      var I = Ve("close");
      x(m, I);
    },
    $$slots: { default: !0 }
  }), de(() => {
    nt(a, `--color:${i[e.type] ?? ""}`), Pe(u, e.summary);
  }), kl(1, a, () => md, () => ({ x: 0, y: 30, duration: 150, easing: yp })), kl(2, a, () => md, () => ({ x: 50, y: 0, duration: 150, easing: Yu })), x(n, a), ye();
}
ct(["click"]);
const Mp = 4e3;
function Pp() {
  let n = Ee({ items: [] }), e = 0;
  const t = (i) => {
    n.items = n.items.filter((a) => a.id !== i);
  }, r = (i, a, s, d = Mp) => {
    const l = e++, c = { id: l, summary: a, detail: s, type: i };
    return n.items = [...n.items, c], setTimeout(
      () => {
        t(l);
      },
      d
    ), l;
  };
  return {
    /** readonly state for UI host */
    get toasts() {
      return n;
    },
    success: (i, a, s) => r("success", i, a, s),
    error: (i, a, s) => r("error", i, a, s),
    info: (i, a, s) => r("info", i, a, s),
    warn: (i, a, s) => r("warn", i, a, s),
    remove: t
  };
}
const Ls = Pp();
var kp = /* @__PURE__ */ j("<div><!></div>"), Fp = /* @__PURE__ */ j('<div class="toast-host svelte-11vwiay"></div>');
function Np(n, e) {
  be(e, !1);
  const t = Ls.toasts;
  Yf();
  var r = Fp();
  fn(r, 13, () => t.items, (i) => i.id, (i, a) => {
    var s = kp(), d = k(s);
    Rp(d, {
      get summary() {
        return o(a).summary;
      },
      get detail() {
        return o(a).detail;
      },
      get type() {
        return o(a).type;
      },
      onClose: () => Ls.remove(o(a).id)
    }), Ws(s, () => eo, null), x(i, s);
  }), x(n, r), ye();
}
ct(["click"]);
ct(["click"]);
ct(["click"]);
ct(["input"]);
const Up = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+VHlwZXM8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dGVtcGxhdGUtZ2VuZXJhdG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImV4dGVybmFsIj4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dHlwZS1kZXNpZ25lci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+VHlwZSBEZXNpZ25lcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy90eXBlLWRlc2lnbmVyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50eXBlLWRpc3RyaWJ1dG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UeXBlIERpc3RyaWJ1dG9yPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJleHRlcm5hbCI+CiAgICAgICAgICAgIGh0dHBzOi8vYXNlLWNvbXBhcy5naXRodWIuaW8vY29tcGFzLXRyYW5zbmV0YnctcGx1Z2lucy9iZWFyaW5ncG9pbnQvY29tcGFzL3BsdWdpbnMvdHlwZS1kaXN0cmlidXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbmZpZ3VyYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi14eXo8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvcGx1Z2lucy9zcmMvZWRpdG9ycy9Db21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJpbnRlcm5hbCI+CiAgICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+cHVibGlzaGVyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5QdWJsaXNoZXI8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImludGVybmFsIj4KICAgICAgICAgICAgL2V4dGVybmFsLXBsdWdpbnMvb3NjZC1wdWJsaXNoZXIvb3NjZC1wdWJsaXNoZXIuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic2NyaWJlLWxhdGVyLWJpbmRpbmcteHl6PC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnNjcmliZTwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvZXh0ZXJuYWwtcGx1Z2lucy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50YXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+YXV0b2RvYy14eXo8L2lkPgogICAgICAgICAgPG5hbWU+QXV0b0RvYzwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy9hdXRvLWRvYy9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+bG9jYXRpb24tbWFuYWdlci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+TG9jYXRpb24gTWFuYWdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2xvY2F0aW9uLW1hbmFnZXIvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmhpc3Rvcnktdmlld2VyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5IaXN0b3J5IFZpZXdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2hpc3Rvcnktdmlld2VyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", Hp = Up, $u = "engineeringWizardProcesses", Bp = "external", Dt = Ee({ processes: [] }), Gi = Ee({ loading: !1, error: "" }), We = Ee({ process: null }), cn = Ee({ isEditing: !1 }), Ei = Ee({ process: null, lastSelectedPluginId: null }), fl = Ee({ plugins: [] });
function Gp() {
  if (typeof localStorage > "u") return;
  const n = localStorage.getItem($u);
  if (n)
    try {
      const e = JSON.parse(n);
      Array.isArray(e) && (Dt.processes = e);
    } catch {
    }
}
function Vp() {
  Dt.processes.forEach((e) => {
    var t;
    (t = e.pluginGroups) == null || t.forEach((r) => {
      var i;
      return (i = r.plugins) == null ? void 0 : i.length;
    });
  });
  const n = Us(Dt.processes);
  if (!(typeof localStorage > "u"))
    try {
      localStorage.setItem($u, JSON.stringify(n));
    } catch {
    }
}
Gp();
jd(() => {
  Se(() => {
    console.log("[processes] persistence module loaded"), Vp();
  });
});
function qp(n, e, t) {
  o(e) && t.handleStart(o(e));
}
var Wp = /* @__PURE__ */ j('<div class="process-banner svelte-xtmc4p"><div class="process-banner__info svelte-xtmc4p"><!> <span class="svelte-xtmc4p"> </span></div> <button type="button" class="banner-continue svelte-xtmc4p">CONTINUE</button></div>'), zp = /* @__PURE__ */ j("<!> <!>", 1), jp = /* @__PURE__ */ j('<div class="processes svelte-xtmc4p"><!> <div class="process-toolbar svelte-xtmc4p"><!> <!></div> <!></div>');
function Zp(n, e) {
  be(e, !0);
  let t = /* @__PURE__ */ se("");
  const r = /* @__PURE__ */ J(() => Dt.processes ?? []), i = /* @__PURE__ */ J(() => o(r).map((S) => ({ ...S, displayName: S.name || S.id }))), a = /* @__PURE__ */ J(() => o(t).trim().toLowerCase()), s = /* @__PURE__ */ J(() => o(a) ? o(i).filter((S) => S.displayName.toLowerCase().includes(o(a))) : o(i)), d = [
    { key: "displayName", header: "Name", bold: !0 },
    { key: "description", header: "Description" }
  ], l = /* @__PURE__ */ J(() => Ei.process), c = /* @__PURE__ */ J(() => {
    var S, b;
    return ((S = o(l)) == null ? void 0 : S.name) || ((b = o(l)) == null ? void 0 : b.id) || "";
  }), u = /* @__PURE__ */ J(() => Ei.lastSelectedPluginId);
  function h(S, b) {
    var w;
    if (!b) return "";
    for (const L of (S == null ? void 0 : S.pluginGroups) ?? []) {
      const M = (w = L.plugins) == null ? void 0 : w.find((D) => D.id === b);
      if (M) return M.name || M.id;
    }
    return "";
  }
  const f = /* @__PURE__ */ J(() => h(o(l), o(u)));
  function v() {
    const S = `A process “${o(c)}” has already been started`, b = [
      e.docName ? ` for the ${e.docName}` : "",
      o(f) ? ` at “${o(f)}”` : ""
    ];
    return `${S}${b.join("")}. Would you like to continue where you left off?`;
  }
  const g = /* @__PURE__ */ J(v);
  function m(S) {
    return !!o(l) && (S == null ? void 0 : S.id) === o(l).id;
  }
  var p = jp(), I = k(p);
  {
    var E = (S) => {
      var b = Wp(), w = k(b), L = k(w);
      fg(L, {});
      var M = z(L, 2), D = k(M), O = z(w, 2);
      O.__click = [qp, l, e], de(() => Pe(D, o(g))), x(S, b);
    };
    ee(I, (S) => {
      o(l) && S(E);
    });
  }
  var A = z(I, 2), y = k(A);
  Gn(y, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return o(t);
    },
    set value(S) {
      V(t, S, !0);
    }
  });
  var T = z(y, 2);
  In(T, {
    class: "mdc-button--raised",
    style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
    get onclick() {
      return e.handleAddNew;
    },
    "aria-label": "Start process",
    children: (S, b) => {
      var w = Ve("ADD NEW PROCESS");
      x(S, w);
    },
    $$slots: { default: !0 }
  });
  var C = z(A, 2);
  Qg(C, {
    get items() {
      return o(s);
    },
    get columns() {
      return d;
    },
    get loading() {
      return Gi.loading;
    },
    get errorMsg() {
      return Gi.error;
    },
    emptyText: "No processes available.",
    hasActions: !0,
    headerBg: "#DAE3E6",
    rowBg: "#ffffff",
    get onRowClick() {
      return e.handleView;
    },
    actions: (b, w) => {
      let L = () => w == null ? void 0 : w().item;
      var M = zp(), D = K(M);
      In(D, {
        type: "button",
        onclick: (N) => {
          N.stopPropagation(), e.handleEdit(L());
        },
        "aria-label": "Edit process",
        class: "mdc-button--raised",
        style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
        children: (N, U) => {
          var Q = Ve("Edit");
          x(N, Q);
        },
        $$slots: { default: !0 }
      });
      var O = z(D, 2);
      {
        var X = (N) => {
          In(N, {
            type: "button",
            "aria-label": "Start process",
            onclick: (U) => {
              U.stopPropagation(), e.handleStart(L());
            },
            class: "mdc-button--raised",
            style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
            children: (U, Q) => {
              var ue = Ve("Continue");
              x(U, ue);
            },
            $$slots: { default: !0 }
          });
        }, G = (N) => {
          In(N, {
            type: "button",
            "aria-label": "Start process",
            onclick: (U) => {
              U.stopPropagation(), e.handleStart(L());
            },
            class: "mdc-button--raised",
            style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
            children: (U, Q) => {
              var ue = Ve("Start");
              x(U, ue);
            },
            $$slots: { default: !0 }
          });
        };
        ee(O, (N) => {
          m(L()) ? N(X) : N(G, !1);
        });
      }
      x(b, M);
    },
    $$slots: { actions: !0 }
  }), x(n, p), ye();
}
ct(["click"]);
var Xp = /* @__PURE__ */ j('<div class="add-group-form svelte-dyj28k"><!> <!></div>');
function Kp(n, e) {
  be(e, !0);
  let t = _(e, "open", 15, !1), r = /* @__PURE__ */ se(""), i = /* @__PURE__ */ se(Ee((e.groups + 1).toString()));
  const a = () => sr("cancel"), s = () => sr("confirm", { name: o(r), position: Number(o(i)) });
  let d = /* @__PURE__ */ J(() => [
    ...Array.from({ length: e.groups + 1 }, (c, u) => ({ value: (u + 1).toString(), label: (u + 1).toString() }))
    // iterate from 1..groups+1
  ]), l = /* @__PURE__ */ J(() => o(r) && o(i));
  {
    const c = (h) => {
      var f = Xp(), v = k(f);
      rl(v, {
        label: "Name",
        placeholder: "Group 1",
        variant: "outlined",
        required: !0,
        get value() {
          return o(r);
        },
        set value(m) {
          V(r, m, !0);
        }
      });
      var g = z(v, 2);
      Mv(g, {
        get data() {
          return o(d);
        },
        label: "Position",
        variant: "outlined",
        required: !0,
        get value() {
          return o(i);
        },
        set value(m) {
          V(i, m, !0);
        }
      }), x(h, f);
    };
    let u = /* @__PURE__ */ J(() => !o(l));
    js(n, {
      title: "Add Groups",
      confirmActionText: "Add",
      maxWidth: "600px",
      onConfirm: s,
      onCancel: a,
      onClose: a,
      get confirmDisabled() {
        return o(u);
      },
      get open() {
        return t();
      },
      set open(h) {
        t(h);
      },
      content: c,
      $$slots: { content: !0 }
    });
  }
  ye();
}
var Yp = /* @__PURE__ */ j("<div><!></div>");
function hl(n, e) {
  const t = _(e, "active", 3, !1), r = _(e, "visited", 3, !1);
  var i = Yp(), a = k(i);
  {
    var s = (l) => {
      var c = ie(), u = K(c);
      {
        var h = (v) => {
          Tu(v, {});
        }, f = (v) => {
          var g = ie(), m = K(g);
          {
            var p = (E) => {
              lg(E);
            }, I = (E) => {
              var A = ie(), y = K(A);
              {
                var T = (C) => {
                  ug(C, {});
                };
                ee(
                  y,
                  (C) => {
                    e.status === "warning" && C(T);
                  },
                  !0
                );
              }
              x(E, A);
            };
            ee(
              m,
              (E) => {
                e.status === "error" ? E(p) : E(I, !1);
              },
              !0
            );
          }
          x(v, g);
        };
        ee(u, (v) => {
          e.status === "check" ? v(h) : v(f, !1);
        });
      }
      x(l, c);
    }, d = (l) => {
      var c = Ve();
      de(() => Pe(c, e.number)), x(l, c);
    };
    ee(a, (l) => {
      r() && e.status ? l(s) : l(d, !1);
    });
  }
  de(() => Sr(i, 1, `step-circle ${t() ? "active" : ""} ${r() ? "visited" : ""}`, "svelte-1as5ana")), x(n, i);
}
var Jp = /* @__PURE__ */ j('<div class="group-list-item svelte-15ukemk"><div><!></div> <div><!></div> <!> <!></div>'), Qp = /* @__PURE__ */ j('<div class="edit-groups-form"><h3>Drag & Drop to change Order</h3> <div></div></div>');
function $p(n, e) {
  be(e, !0);
  const t = 100;
  let r = _(e, "open", 15, !1), i = /* @__PURE__ */ se(Ee([...e.groups]));
  const a = () => sr("cancel"), s = () => {
    sr("confirm", { groups: o(i).map((h) => ({ ...h })) });
  }, d = (h) => () => {
    V(i, o(i).filter((f) => f.id !== h), !0);
  }, l = (h) => {
    V(i, h.detail.items, !0);
  };
  function c(h, f, v) {
    const g = h.querySelector(".step-circle");
    g && (g.innerHTML = v + 1);
  }
  let u = /* @__PURE__ */ J(() => o(i).every((h) => h.title.trim().length > 0));
  {
    const h = (v) => {
      var g = Qp(), m = z(k(g), 2);
      fn(m, 31, () => o(i), (p) => p.id, (p, I, E) => {
        var A = Jp(), y = k(A), T = k(y);
        {
          let L = /* @__PURE__ */ J(() => o(E) + 1);
          hl(T, {
            get number() {
              return o(L);
            }
          });
        }
        var C = z(y, 2), S = k(C);
        al(S, {}), Me(C, (L) => Cr == null ? void 0 : Cr(L));
        var b = z(C, 2);
        rl(b, {
          label: "Name",
          variant: "outlined",
          required: !0,
          get value() {
            return o(I).title;
          },
          set value(L) {
            o(I).title = L;
          }
        });
        var w = z(b, 2);
        {
          let L = /* @__PURE__ */ J(() => d(o(I).id));
          Ru(w, {
            type: "delete",
            tooltip: "Delete",
            fillColor: "#FF203A",
            get onClick() {
              return o(L);
            }
          });
        }
        de(() => At(A, "data-id", o(I).id)), Ws(A, () => eo, () => ({ duration: t })), x(p, A);
      }), Me(m, (p, I) => yr == null ? void 0 : yr(p, I), () => ({
        items: o(i),
        flipDurationMs: t,
        dropTargetStyle: {},
        transformDraggedElement: c,
        type: "order-ew-groups-zone"
      })), Kt("consider", m, l), Kt("finalize", m, l), x(v, g);
    };
    let f = /* @__PURE__ */ J(() => !o(u));
    js(n, {
      title: "Edit Groups",
      confirmActionText: "Save",
      maxWidth: "600px",
      onConfirm: s,
      onCancel: a,
      onClose: a,
      get confirmDisabled() {
        return o(f);
      },
      get open() {
        return r();
      },
      set open(v) {
        r(v);
      },
      content: h,
      $$slots: { content: !0 }
    });
  }
  ye();
}
async function e_(n, e, t) {
  const r = await Ai(Kp, { groups: e().length });
  r.type === "confirm" && t()(r.data.name, r.data.position);
}
async function t_(n, e, t) {
  const r = e().map((s, d) => ({ id: d.toString(), title: s.title })), i = await Ai($p, { groups: r });
  if (i.type !== "confirm") return;
  const a = i.data.groups.map((s) => {
    const d = parseInt(s.id, 10);
    return { ...e()[d], title: s.title };
  });
  t()(a);
}
var n_ = /* @__PURE__ */ j('<div class="plugin-list__header-action svelte-s6osjd"><!></div>'), r_ = /* @__PURE__ */ j('<header class="plugin-list__header svelte-s6osjd"><p class="plugin-list__title svelte-s6osjd"> </p> <!></header>'), i_ = /* @__PURE__ */ j('<div aria-label="drag-handle"><!></div>'), a_ = /* @__PURE__ */ j('<div class="plugin-list__item-action svelte-s6osjd"><!></div>'), s_ = /* @__PURE__ */ j('<div class="plugin-list__item-row svelte-s6osjd"><div class="plugin-list__item-row__left svelte-s6osjd"><!> <span class="plugin-list__item-name svelte-s6osjd"> </span></div> <!></div>'), o_ = /* @__PURE__ */ j("<div><!></div>"), l_ = /* @__PURE__ */ j('<div style="display: flex; justify-content: center; margin-top: 0.4rem;"><!></div>'), d_ = /* @__PURE__ */ j('<section class="plugin-list__group svelte-s6osjd"><header class="plugin-list__group-header svelte-s6osjd"><span class="plugin-list__group-index plugin-list__group-plugins__indicator svelte-s6osjd"><!></span> <span class="plugin-list__group-title svelte-s6osjd"> </span></header> <div class="plugin-list__group-plugins-section svelte-s6osjd"><div></div></div> <!></section>'), u_ = /* @__PURE__ */ j('<div class="plugin-list__body svelte-s6osjd"></div>'), c_ = /* @__PURE__ */ j('<div class="plugin-list__footer svelte-s6osjd"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-s6osjd"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-s6osjd"><!> <span>Add group</span></button></div>');
function vl(n, e) {
  be(e, !0);
  const t = (h) => {
    var f = r_(), v = k(f), g = k(v), m = z(v, 2);
    {
      var p = (I) => {
        var E = n_(), A = k(E);
        Ie(A, () => e.headerAction), x(I, E);
      };
      ee(m, (I) => {
        e.headerAction && I(p);
      });
    }
    de(() => Pe(g, s())), x(h, f);
  }, r = (h) => {
    var f = u_();
    fn(f, 21, a, Er, (v, g, m) => {
      var p = d_(), I = k(p), E = k(I), A = k(E);
      hl(A, { number: m + 1 });
      var y = z(E, 2), T = k(y), C = z(I, 2), S = k(C);
      let b;
      fn(S, 31, () => o(g).plugins, (M) => M.id, (M, D, O) => {
        var X = o_(), G = k(X);
        Ju(G, {
          variant: "secondary",
          children: (N, U) => {
            var Q = s_(), ue = k(Q), B = k(ue);
            {
              var ne = (he) => {
                var q = i_(), ve = k(q);
                al(ve, {}), Me(q, (re) => Cr == null ? void 0 : Cr(re)), x(he, q);
              };
              ee(B, (he) => {
                cn.isEditing && he(ne);
              });
            }
            var ce = z(B, 2), we = k(ce), _e = z(ue, 2);
            {
              var oe = (he) => {
                var q = a_(), ve = k(q);
                Ie(ve, () => e.itemAction, () => ({
                  group: o(g),
                  plugin: o(D),
                  groupIndex: m,
                  pluginIndex: o(O)
                })), x(he, q);
              };
              ee(_e, (he) => {
                e.itemAction && he(oe);
              });
            }
            de(() => Pe(we, o(D).name)), x(N, Q);
          },
          $$slots: { default: !0 }
        }), de(() => At(X, "data-id", o(D).id)), Ws(X, () => eo, () => ({ duration: 100 })), x(M, X);
      }), Me(S, (M, D) => yr == null ? void 0 : yr(M, D), () => ({
        items: o(g).plugins,
        flipDurationMs: 100,
        dropTargetStyle: {}
      }));
      var w = z(C, 2);
      {
        var L = (M) => {
          var D = l_(), O = k(D);
          Sg(O, { svgStyles: "fill: #6B9197;" }), x(M, D);
        };
        ee(w, (M) => {
          m < a().length - 1 && M(L);
        });
      }
      de(
        (M) => {
          Pe(T, o(g).title), b = Sr(S, 1, "plugin-list__group-plugins svelte-s6osjd", null, b, M);
        },
        [
          () => ({
            "plugin_list__group-plugins--dashed": cn.isEditing
          })
        ]
      ), Kt("consider", S, (M) => c(M, o(g))), Kt("finalize", S, (M) => u(M, o(g))), x(v, p);
    }), x(h, f);
  }, i = (h) => {
    var f = ie(), v = K(f);
    {
      var g = (m) => {
        var p = c_(), I = k(p);
        I.__click = [t_, a, l];
        var E = k(I);
        xu(E, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var A = z(I, 2);
        A.__click = [e_, a, d];
        var y = k(A);
        Du(y, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), x(m, p);
      };
      ee(v, (m) => {
        cn.isEditing && m(g);
      });
    }
    x(h, f);
  };
  let a = _(e, "pluginGroups", 19, () => []), s = _(e, "title", 3, "Process"), d = _(e, "onAddGroup", 3, () => {
  }), l = _(e, "onUpdateGroups", 3, (h) => {
  });
  function c(h, f) {
    f.plugins = h.detail.items;
  }
  function u(h, f) {
    h.detail.info.trigger === Tt.DROPPED_OUTSIDE_OF_ANY ? f.plugins = h.detail.items.filter((v) => h.detail.info.id !== v.id) : f.plugins = h.detail.items, l()(a());
  }
  Qu(n, {
    class: "plugin-list",
    backgroundColor: "var(--primary-base)",
    get header() {
      return t;
    },
    get content() {
      return r;
    },
    get additional() {
      return i;
    }
  }), ye();
}
ct(["click"]);
function f_(n, e) {
  const t = (i) => {
    In(i, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--white); --mdc-theme-on-primary: var(--primary-base)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (a, s) => {
        var d = Ve("EDIT");
        x(a, d);
      },
      $$slots: { default: !0 }
    });
  };
  let r = _(e, "pluginGroups", 19, () => []);
  vl(n, {
    get pluginGroups() {
      return r();
    },
    get headerAction() {
      return t;
    }
  });
}
function h_(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function v_() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function g_(n) {
  var e;
  (e = v_()) == null || e.dispatchEvent(new CustomEvent("toggle-editor-tabs", { detail: { visible: n }, bubbles: !0, composed: !0 }));
}
const qn = Ee({ visible: !0 });
jd(() => {
  Se(() => {
    g_(qn.visible);
  });
});
var m_ = /* @__PURE__ */ j('<button class="btn-engineering-wizard_title svelte-qwuvgs">Engineering Wizard</button>');
function ec(n, e) {
  var t = m_();
  t.__click = function(...r) {
    var i;
    (i = e.onClick) == null || i.apply(this, r);
  }, x(n, t);
}
ct(["click"]);
var p_ = (n, e, t) => e.onSelect(o(t).id), __ = /* @__PURE__ */ j('<button class="step-button svelte-de8jn9"><!></button>'), I_ = /* @__PURE__ */ j('<div class="step-line svelte-de8jn9" aria-hidden="true"></div>'), b_ = /* @__PURE__ */ j('<div class="step svelte-de8jn9"><!> <p> </p></div> <!>', 1), y_ = /* @__PURE__ */ j('<div class="steps svelte-de8jn9"></div>');
function C_(n, e) {
  be(e, !0);
  let t = _(e, "items", 19, () => []), r = _(e, "visited", 19, () => []), i = _(e, "currentId", 3, null), a = _(e, "status", 19, () => ({})), s = _(e, "tooltipMap", 19, () => ({}));
  var d = y_();
  fn(d, 21, t, Er, (l, c, u) => {
    var h = b_(), f = K(h), v = k(f);
    {
      let E = /* @__PURE__ */ J(() => s()[o(c).id] ?? "");
      Ou(v, {
        get content() {
          return o(E);
        },
        side: "bottom",
        children: (A, y) => {
          var T = __();
          T.__click = [p_, e, c];
          var C = k(T);
          {
            let S = /* @__PURE__ */ J(() => o(c).id === i()), b = /* @__PURE__ */ J(() => r().includes(o(c).id) && o(c).id !== i());
            hl(C, {
              number: u + 1,
              get active() {
                return o(S);
              },
              get visited() {
                return o(b);
              },
              get status() {
                return a()[o(c).id];
              }
            });
          }
          de(() => At(T, "aria-current", o(c).id === i() ? "step" : void 0)), x(A, T);
        },
        $$slots: { default: !0 }
      });
    }
    var g = z(v, 2), m = k(g), p = z(f, 2);
    {
      var I = (E) => {
        var A = I_();
        x(E, A);
      };
      ee(p, (E) => {
        u < t().length - 1 && E(I);
      });
    }
    de(() => Pe(m, o(c).label)), x(l, h);
  }), x(n, d), ye();
}
ct(["click"]);
function A_(n, e) {
  const t = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = _(e, "currentId", 3, null), i = _(e, "visited", 19, () => []);
  C_(n, {
    get items() {
      return t;
    },
    get visited() {
      return i();
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
var E_ = /* @__PURE__ */ j('<div class="stepper-actions svelte-1jrjxrv"><div class="stepper-navigation svelte-1jrjxrv"><button type="button" class="btn btn--back svelte-1jrjxrv" aria-label="Previous step"><span><!></span> <span>Back</span></button> <button type="button" class="btn btn--next svelte-1jrjxrv" aria-label="Next step"><span>Next</span> <span><!></span></button></div> <button type="button" class="btn btn--done svelte-1jrjxrv" aria-label="Done"><span><!></span> <span>Done</span></button></div>');
function tc(n, e) {
  const t = _(e, "isAtFirstStep", 3, !1), r = _(e, "isAtLastStep", 3, !1), i = _(e, "doneDisabled", 3, !1);
  var a = E_(), s = k(a), d = k(s);
  d.__click = function(...p) {
    var I;
    (I = e.onGoToPreviousStep) == null || I.apply(this, p);
  };
  var l = k(d), c = k(l);
  Dg(c, { svgStyles: "fill: var(--white)" });
  var u = z(d, 2);
  u.__click = function(...p) {
    var I;
    (I = e.onGoToNextStep) == null || I.apply(this, p);
  };
  var h = z(k(u), 2), f = k(h);
  wg(f, { svgStyles: "fill: var(--primary-base);" });
  var v = z(s, 2);
  v.__click = function(...p) {
    var I;
    (I = e.onDone) == null || I.apply(this, p);
  };
  var g = k(v), m = k(g);
  Tu(m, { svgStyles: "fill: var(--primary-base);" }), de(() => {
    d.disabled = t(), u.disabled = r(), v.disabled = i();
  }), x(n, a);
}
ct(["click"]);
var S_ = /* @__PURE__ */ j('<div class="empty-state svelte-iwa4yq"><p> </p></div>'), x_ = /* @__PURE__ */ j('<div class="validation-xml-container svelte-iwa4yq"><div class="validation-xml-container__meta svelte-iwa4yq"><span class="validation-xml-container__name svelte-iwa4yq"> </span> <div class="validation-xml-container__actions svelte-iwa4yq"><button type="button" class="delete-btn svelte-iwa4yq" title="Remove"><!></button></div></div> <div class="xml-viewer svelte-iwa4yq"><div class="xml-viewer__box svelte-iwa4yq"><div class="xml-viewer__label svelte-iwa4yq">Scope</div> <pre class="svelte-iwa4yq"> </pre></div> <div class="xml-viewer__box svelte-iwa4yq"><div class="xml-viewer__label svelte-iwa4yq">Rule</div> <pre class="svelte-iwa4yq"> </pre></div> <div class="xml-viewer__box svelte-iwa4yq"><div class="xml-viewer__label svelte-iwa4yq">Failure message</div> <pre class="svelte-iwa4yq"> </pre></div></div></div>'), w_ = /* @__PURE__ */ j('<div class="validation-xml-list svelte-iwa4yq"></div>');
function T_(n, e) {
  be(e, !0), _(e, "pluginGroups", 19, () => []);
  let t = _(e, "selectedPlugin", 3, null);
  const r = /* @__PURE__ */ J(() => {
    var u, h, f;
    const l = (u = We == null ? void 0 : We.process) == null ? void 0 : u.id, c = (h = t()) == null ? void 0 : h.id;
    return !l || !c ? [] : (((f = t()) == null ? void 0 : f.validations) ?? []).filter((v) => v.processId === l && v.pluginId === c);
  });
  function i(l) {
  }
  var a = ie(), s = K(a);
  {
    var d = (l) => {
      var c = ie(), u = K(c);
      {
        var h = (v) => {
          var g = S_(), m = k(g), p = k(m);
          de(() => Pe(p, `No validations configured for "${t().name ?? ""}" yet.`)), x(v, g);
        }, f = (v) => {
          var g = w_();
          fn(g, 21, () => o(r), Er, (m, p, I) => {
            var E = x_(), A = k(E), y = k(A), T = k(y), C = z(y, 2), S = k(C);
            S.__click = () => void 0;
            var b = k(S);
            wu(b, { svgStyles: "fill: #FF203A" });
            var w = z(A, 2), L = k(w), M = z(k(L), 2), D = k(M), O = z(L, 2), X = z(k(O), 2), G = k(X), N = z(O, 2), U = z(k(N), 2), Q = k(U);
            de(() => {
              Pe(T, o(p).title), Pe(D, o(p).context), Pe(G, o(p).assert), Pe(Q, o(p).message);
            }), x(m, E);
          }), x(v, g);
        };
        ee(u, (v) => {
          o(r).length === 0 ? v(h) : v(f, !1);
        });
      }
      x(l, c);
    };
    ee(s, (l) => {
      t() && l(d);
    });
  }
  x(n, a), ye();
}
ct(["click"]);
function D_(n) {
  const e = (n || "").trim() || "process", t = new Set((Dt.processes ?? []).map((a) => a.id));
  if (!t.has(e)) return e;
  let r = 2, i = `${e}-${r}`;
  for (; t.has(i); )
    r += 1, i = `${e}-${r}`;
  return i;
}
function L_(n) {
  var a;
  const e = Us(n), t = (e.id || e.name || "process").trim(), r = D_(t), i = {
    id: r,
    version: e.version || "1.0.0",
    name: e.name || r,
    description: e.description || "",
    pluginGroups: (a = e.pluginGroups) != null && a.length ? e.pluginGroups : [{ title: "Ungrouped", plugins: [] }]
  };
  return Dt.processes = [...Dt.processes ?? [], i], i;
}
function O_(n, e, t) {
  const r = "Ungrouped", i = Dt.processes.find((d) => d.id === n);
  if (!i) return;
  const a = i.pluginGroups ?? (i.pluginGroups = []);
  let s = a.find((d) => d.title === r);
  s || (s = { title: r, plugins: [] }, a.push(s)), s.plugins ?? (s.plugins = []), s.plugins.push(e);
}
function R_(n, e, t) {
  const r = Dt.processes ?? [];
  Dt.processes = r.map((i) => {
    if (i.id !== n || !i.pluginGroups) return i;
    const a = i.pluginGroups.map((s) => {
      const d = (s.plugins ?? []).map((l) => {
        if (l.id !== e) return l;
        const c = l.validations ?? [];
        return { ...l, validations: [...c, t] };
      });
      return { ...s, plugins: d };
    });
    return { ...i, pluginGroups: a };
  });
}
function M_(n, e) {
  const t = Dt.processes.find((r) => r.id === n);
  if (!t || !t.pluginGroups) return !1;
  for (const r of t.pluginGroups) {
    if (!(r != null && r.plugins)) continue;
    const i = r.plugins.findIndex((a) => a.id === e);
    if (i !== -1) {
      if (r.plugins.splice(i, 1), r.plugins.length === 0) {
        const a = t.pluginGroups.indexOf(r);
        a !== -1 && t.pluginGroups.splice(a, 1);
      }
      return !0;
    }
  }
  return !1;
}
function P_(n) {
  var t;
  const e = Dt.processes.find((r) => r.id === n);
  if (!(!e || !e.pluginGroups))
    for (const r of e.pluginGroups)
      (t = r.plugins) == null || t.splice(0, r.plugins.length);
}
function k_(n, e, t) {
  const r = Dt.processes.find((s) => s.id === n);
  if (!r) return;
  const i = r.pluginGroups ?? (r.pluginGroups = []);
  if (i.some((s) => s.title === e)) return;
  const a = { title: e, plugins: [] };
  if (t === void 0)
    i.push(a);
  else {
    const s = Math.max(0, t - 1);
    i.splice(s, 0, a);
  }
}
function F_(n, e) {
  const t = Dt.processes.find((r) => r.id === n);
  t && (t.pluginGroups ?? (t.pluginGroups = []), t.pluginGroups.splice(0, t.pluginGroups.length, ...e));
}
function N_(n) {
  fl.plugins = [...n];
}
function _o(n, e = null) {
  Ei.process = n ?? null, Ei.lastSelectedPluginId = e ?? null;
}
function U_(n) {
  Ei.lastSelectedPluginId = n ?? null;
}
var H_ = (n, e, t) => e(t().id), B_ = /* @__PURE__ */ j('<button type="button" class="plugin-list__removeBtn svelte-1qh2g9"><!></button>');
function G_(n, e) {
  be(e, !0);
  const t = (u) => {
    var h = ie(), f = K(h);
    {
      var v = (g) => {
        In(g, {
          variant: "raised",
          style: "background-color: #FF203A",
          "aria-label": "Remove all plugins",
          onclick: a,
          children: (m, p) => {
            var I = Ve("REMOVE ALL");
            x(m, I);
          },
          $$slots: { default: !0 }
        });
      };
      ee(f, (g) => {
        o(c) && g(v);
      });
    }
    x(u, h);
  }, r = (u, h) => {
    let f = () => h == null ? void 0 : h().plugin;
    var v = B_();
    v.__click = [H_, s, f];
    var g = k(v);
    Su(g, { svgStyles: "fill: #FF203A" }), de(() => At(v, "aria-label", `Remove ${f().name}`)), x(u, v);
  };
  let i = _(e, "pluginGroups", 19, () => []);
  async function a() {
    (await Ai(il, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && P_(We.process.id);
  }
  function s(u) {
    M_(We.process.id, u);
  }
  function d(u, h) {
    k_(We.process.id, u, h);
  }
  function l(u) {
    F_(We.process.id, u);
  }
  let c = /* @__PURE__ */ J(() => i().flatMap((u) => u.plugins).length > 0);
  vl(n, {
    get pluginGroups() {
      return i();
    },
    get headerAction() {
      return t;
    },
    get itemAction() {
      return r;
    },
    onAddGroup: (u, h) => d(u, h),
    onUpdateGroups: (u) => l(u)
  }), ye();
}
ct(["click"]);
var V_ = /* @__PURE__ */ j('<div class="card-header svelte-1sbzvyb"><p class="header-info svelte-1sbzvyb">Add External Plugins</p> <div class="search-input svelte-1sbzvyb"><!></div></div>'), q_ = (n, e, t) => e(o(t)), W_ = /* @__PURE__ */ j('<div class="card-item-content svelte-1sbzvyb"><div class="card-item-content__left svelte-1sbzvyb"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1sbzvyb"> </p></div> <button class="plugin-add-btn svelte-1sbzvyb"><!></button></div>'), z_ = /* @__PURE__ */ j("<div><!></div>"), j_ = /* @__PURE__ */ j('<div class="card-parent-content svelte-1sbzvyb"></div>');
function nc(n, e) {
  be(e, !0);
  const t = (h) => {
    var f = V_(), v = z(k(f), 2), g = k(v);
    Gn(g, {
      variant: "outlined",
      label: "Search Plugins",
      get value() {
        return a();
      },
      set value(m) {
        a(m);
      }
    }), x(h, f);
  }, r = (h) => {
    var f = j_();
    fn(f, 29, i, (v) => v.id, (v, g) => {
      var m = z_(), p = k(m);
      Ju(p, {
        variant: "secondary",
        children: (I, E) => {
          var A = W_(), y = k(A), T = k(y), C = k(T);
          al(C, {}), Me(T, (M) => Cr == null ? void 0 : Cr(M));
          var S = z(T, 2), b = k(S), w = z(y, 2);
          w.__click = [q_, u, g];
          var L = k(w);
          Du(L, { svgStyles: "fill: var(--primary-base);" }), de(() => {
            Pe(b, o(g).name), At(w, "aria-label", `Add ${o(g).name}`);
          }), x(I, A);
        },
        $$slots: { default: !0 }
      }), de(() => At(m, "data-id", o(g).id)), Ws(m, () => eo, () => ({ duration: 100 })), x(v, m);
    }), Me(f, (v, g) => yr == null ? void 0 : yr(v, g), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Kt("consider", f, l), Kt("finalize", f, d), x(h, f);
  };
  let i = _(e, "plugins", 23, () => []), a = _(e, "searchTerm", 15, ""), s = _(e, "onAddPlugin", 3, () => {
  });
  const d = (h) => {
    i(h.detail.items);
  }, l = (h) => {
    const { trigger: f, id: v } = h.detail.info;
    if (f === Tt.DRAG_STARTED) {
      const g = i().findIndex((p) => p.id === v);
      if (g < 0) return;
      const m = `${v}_copy`;
      h.detail.items = h.detail.items.filter((p) => !p[ja]), h.detail.items.splice(g, 0, { ...i()[g], id: m }), i(h.detail.items);
    } else
      i([...i()]);
  };
  function c(h) {
    const f = h.id.endsWith("_copy") ? h.id.slice(0, -5) : h.id;
    return i().find((v) => v.id === f) ?? { ...h, id: f };
  }
  function u(h) {
    s()(c(h));
  }
  Qu(n, {
    backgroundColor: "#DAE3E6",
    get header() {
      return t;
    },
    get content() {
      return r;
    }
  }), ye();
}
ct(["click"]);
function rc(n) {
  var r;
  const e = n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), t = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${t}`;
}
var Z_ = /* @__PURE__ */ j('<div class="process-definition-view svelte-3po5y4"><!> <div class="drag-and-drop-info svelte-3po5y4"><!> <p class="svelte-3po5y4">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function X_(n, e) {
  be(e, !0);
  let t = _(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ se(""), i = /* @__PURE__ */ J(() => {
    const f = fl.plugins.map((g) => ({
      id: rc(g.name),
      name: g.name,
      src: g.src,
      type: "internal"
    })), v = o(r).toLowerCase().trim();
    return v ? f.filter((g) => g.name.toLowerCase().includes(v)) : f;
  });
  function a(h) {
    const f = We.process.id;
    O_(f, h);
  }
  var s = Z_(), d = k(s);
  G_(d, {
    get pluginGroups() {
      return t();
    }
  });
  var l = z(d, 2), c = k(l);
  Lu(c, { svgStyles: "fill: #6B9197" });
  var u = z(l, 2);
  nc(u, {
    get plugins() {
      return o(i);
    },
    onAddPlugin: a,
    get searchTerm() {
      return o(r);
    },
    set searchTerm(h) {
      V(r, h, !0);
    }
  }), x(n, s), ye();
}
var K_ = /* @__PURE__ */ j('<button type="button"><span> </span></button>'), Y_ = /* @__PURE__ */ j('<div><button type="button" class="validation-groups__group-title svelte-4zr9uj"> </button> <!></div>'), J_ = /* @__PURE__ */ j('<div class="validation-groups svelte-4zr9uj"></div>');
function ic(n, e) {
  be(e, !0);
  let t = _(e, "pluginGroups", 19, () => []), r = _(e, "selectedGroupIndex", 15, 0), i = _(e, "selectedPluginIndex", 15, 0), a = _(e, "expandedGroupBackground", 3, "var(--primary-base)"), s = _(e, "expandedGroupBorderColor", 3, "var(--primary-base)"), d = null;
  Se(() => {
    var m, p, I, E, A;
    if (!((m = t()) != null && m.length)) {
      r(null), i(null), d = null;
      return;
    }
    let h = r() ?? 0;
    (h < 0 || h >= t().length) && (h = 0);
    let f = t()[h];
    if (!((p = f == null ? void 0 : f.plugins) != null && p.length)) {
      const y = t().findIndex((T) => {
        var C;
        return (C = T == null ? void 0 : T.plugins) == null ? void 0 : C.length;
      });
      if (y === -1) {
        r(h), i(null), d = null;
        return;
      }
      h = y, f = t()[h], r(h), i(0);
    }
    let v = i() ?? 0;
    (v < 0 || v >= (((I = f.plugins) == null ? void 0 : I.length) ?? 0)) && (v = 0), r(h), i(v);
    const g = (E = f.plugins) == null ? void 0 : E[v];
    g && g.id !== d && (d = g.id, (A = e.selectPlugin) == null || A.call(e, g));
  });
  function l(h) {
    var g, m, p;
    const f = t()[h];
    r(h), i((g = f == null ? void 0 : f.plugins) != null && g.length ? 0 : null);
    const v = (m = f == null ? void 0 : f.plugins) == null ? void 0 : m[0];
    v ? (d = v.id, (p = e.selectPlugin) == null || p.call(e, v)) : d = null;
  }
  function c(h, f) {
    var g, m, p;
    r(h), i(f);
    const v = (m = (g = t()[h]) == null ? void 0 : g.plugins) == null ? void 0 : m[f];
    v && (d = v.id, (p = e.selectPlugin) == null || p.call(e, v));
  }
  var u = J_();
  fn(u, 21, t, Er, (h, f, v) => {
    var g = Y_();
    let m;
    var p = k(g);
    p.__click = () => l(v);
    var I = k(p), E = z(p, 2);
    {
      var A = (y) => {
        var T = ie(), C = K(T);
        fn(C, 17, () => o(f).plugins, Er, (S, b, w) => {
          var L = K_();
          let M;
          L.__click = () => c(v, w);
          var D = k(L), O = k(D);
          de(
            (X) => {
              M = Sr(L, 1, "validation-groups__plugin svelte-4zr9uj", null, M, X), Pe(O, o(b).name);
            },
            [() => ({ active: w === i() })]
          ), x(S, L);
        }), x(y, T);
      };
      ee(E, (y) => {
        v === r() && y(A);
      });
    }
    de(
      (y) => {
        m = Sr(g, 1, "validation-groups__group svelte-4zr9uj", null, m, y), Pe(I, o(f).title);
      },
      [() => ({ expanded: v === r() })]
    ), x(h, g);
  }), de(() => nt(u, `--expanded-group-bg:${a()}; --expanded-group-border:${s()};`)), x(n, u), ye();
}
ct(["click"]);
let Q_ = 0;
var $_ = /* @__PURE__ */ j("<div><!></div>");
function vs(n, e) {
  be(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "id", 19, () => "SMUI-textfield-helper-text-" + Q_++), a = _(e, "persistent", 3, !1), s = _(e, "validationMsg", 3, !1), d = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, c = /* @__PURE__ */ se(void 0), u = Ee({}), h = Ee({}), f = /* @__PURE__ */ se(void 0);
  const v = Ce("SMUI:textfield:helper-text:id"), g = Ce("SMUI:textfield:helper-text:mount"), m = Ce("SMUI:textfield:helper-text:unmount");
  rt(() => (V(
    c,
    new Eh({
      addClass: I,
      removeClass: E,
      hasClass: p,
      getAttr: A,
      setAttr: y,
      removeAttr: T,
      setContent: (D) => {
        V(f, D, !0);
      }
    }),
    !0
  ), v && v(i()), g && g(o(c)), o(c).init(), () => {
    var D;
    m && o(c) && m(o(c)), (D = o(c)) == null || D.destroy();
  }));
  function p(D) {
    return D in u ? u[D] : C().classList.contains(D);
  }
  function I(D) {
    u[D] || (u[D] = !0);
  }
  function E(D) {
    (!(D in u) || u[D]) && (u[D] = !1);
  }
  function A(D) {
    return D in h ? h[D] ?? null : C().getAttribute(D);
  }
  function y(D, O) {
    h[D] !== O && (h[D] = O);
  }
  function T(D) {
    (!(D in h) || h[D] != null) && (h[D] = void 0);
  }
  function C() {
    return l;
  }
  var S = { getElement: C }, b = $_();
  qe(
    b,
    (D) => ({
      class: D,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...d
    }),
    [
      () => Be({
        "mdc-text-field-helper-text": !0,
        "mdc-text-field-helper-text--persistent": a(),
        "mdc-text-field-helper-text--validation-msg": s(),
        ...u,
        [r()]: !0
      })
    ]
  );
  var w = k(b);
  {
    var L = (D) => {
      var O = ie(), X = K(O);
      Ie(X, () => e.children ?? me), x(D, O);
    }, M = (D) => {
      var O = Ve();
      de(() => Pe(O, o(f))), x(D, O);
    };
    ee(w, (D) => {
      o(f) == null ? D(L) : D(M, !1);
    });
  }
  return xe(b, (D) => l = D, () => l), Me(b, (D, O) => te == null ? void 0 : te(D, O), t), x(n, b), ye(S);
}
var eI = /* @__PURE__ */ j('<div class="add-validation-form svelte-fau6z8"><!> <!> <!> <!></div>');
function tI(n, e) {
  be(e, !0);
  let t = _(e, "open", 15, !1), r = Ee({
    severity: "error",
    title: "",
    context: "",
    assert: "",
    message: "",
    processId: e.process.id,
    pluginId: e.plugin.id
  });
  const i = /* @__PURE__ */ J(() => {
    var d, l;
    return !!((d = r.title) != null && d.trim()) && !!((l = r.assert) != null && l.trim());
  });
  function a() {
    sr("confirm", {
      ...r,
      title: r.title.trim(),
      context: r.context ?? "",
      assert: r.assert.trim(),
      message: (r.message ?? "").trim()
    });
  }
  function s() {
    sr("cancel");
  }
  {
    const d = (c) => {
      var u = eI(), h = k(u);
      rl(h, {
        label: "Name",
        get placeholder() {
          return `${e.plugin.name ?? ""} Validation`;
        },
        variant: "outlined",
        required: !0,
        get value() {
          return r.title;
        },
        set value(m) {
          r.title = m;
        }
      });
      var f = z(h, 2);
      Gn(f, {
        textarea: !0,
        label: "Context",
        get value() {
          return r.context;
        },
        set value(p) {
          r.context = p;
        },
        helper: (p) => {
          vs(p, {
            children: (I, E) => {
              var A = Ve("Context");
              x(I, A);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { helper: !0 }
      });
      var v = z(f, 2);
      Gn(v, {
        textarea: !0,
        label: "assertion XML",
        get value() {
          return r.assert;
        },
        set value(p) {
          r.assert = p;
        },
        helper: (p) => {
          vs(p, {
            children: (I, E) => {
              var A = Ve("Assert");
              x(I, A);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { helper: !0 }
      });
      var g = z(v, 2);
      Gn(g, {
        textarea: !0,
        label: "Message",
        get value() {
          return r.message;
        },
        set value(p) {
          r.message = p;
        },
        helper: (p) => {
          vs(p, {
            children: (I, E) => {
              var A = Ve("Message");
              x(I, A);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { helper: !0 }
      }), x(c, u);
    };
    let l = /* @__PURE__ */ J(() => !o(i));
    js(n, {
      get title() {
        return `Add validation for ${e.plugin.name ?? ""}`;
      },
      confirmActionText: "Add",
      maxWidth: "600px",
      maxheight: "600px",
      onConfirm: a,
      onCancel: s,
      onClose: s,
      get confirmDisabled() {
        return o(l);
      },
      get open() {
        return t();
      },
      set open(c) {
        t(c);
      },
      content: d,
      $$slots: { content: !0 }
    });
  }
  ye();
}
var nI = /* @__PURE__ */ j('<div class="header svelte-1qdn6hx"><!> <!></div> <!>', 1), rI = /* @__PURE__ */ j('<div class="stepper svelte-1qdn6hx"><!> <!> <!></div> <div class="step-content svelte-1qdn6hx"><!></div>', 1);
function iI(n, e) {
  be(e, !0);
  const t = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ se(0), i = /* @__PURE__ */ J(() => t[o(r)] ?? t[0]), a = /* @__PURE__ */ J(() => o(r) === 0), s = /* @__PURE__ */ J(() => o(r) === t.length - 1), d = /* @__PURE__ */ J(() => We.process.pluginGroups), l = /* @__PURE__ */ se(null), c = /* @__PURE__ */ se(Ee([])), u = /* @__PURE__ */ se(null), h = /* @__PURE__ */ se(null), f = /* @__PURE__ */ J(() => {
    var N;
    const X = We.process, G = o(l);
    return !X || !G ? null : ((N = X.pluginGroups) == null ? void 0 : N.flatMap((U) => U.plugins ?? []).find((U) => U.id === G)) ?? null;
  });
  rt(() => (qn.visible = !1, () => {
    qn.visible = !0;
  }));
  function v(X) {
    X === 0 && (qn.visible = !0, We.process = null);
  }
  function g() {
    o(s) || (E(o(i)), V(r, o(r) + 1));
  }
  function m() {
    o(a) || V(r, o(r) - 1);
  }
  function p() {
    cn.isEditing = !1, qn.visible = !0, We.process = null;
  }
  function I(X) {
    const G = t.indexOf(X);
    G !== -1 && V(r, G, !0);
  }
  function E(X) {
    o(c).includes(X) || V(c, [...o(c), X], !0);
  }
  function A(X) {
    V(l, X.id, !0);
  }
  async function y() {
    var U;
    const X = We.process, G = o(f);
    if (!G || !X) return;
    const N = await Ai(tI, { plugin: G, process: X });
    (N == null ? void 0 : N.type) === "confirm" && (R_(X.id, G.id, N.data), We.process = ((U = Dt.processes) == null ? void 0 : U.find((Q) => Q.id === X.id)) ?? null);
  }
  var T = rI(), C = K(T), S = k(C);
  ec(S, { onClick: p });
  var b = z(S, 2);
  A_(b, {
    get currentId() {
      return o(i);
    },
    get visited() {
      return o(c);
    },
    onSelect: I
  });
  var w = z(b, 2);
  tc(w, {
    onGoToPreviousStep: m,
    onGoToNextStep: g,
    onDone: p,
    get isAtFirstStep() {
      return o(a);
    },
    get isAtLastStep() {
      return o(s);
    }
  });
  var L = z(C, 2), M = k(L);
  {
    var D = (X) => {
      X_(X, {
        get pluginGroups() {
          return o(d);
        }
      });
    }, O = (X) => {
      var G = ie(), N = K(G);
      {
        var U = (Q) => {
          var ue = nI(), B = K(ue), ne = k(B);
          ic(ne, {
            get pluginGroups() {
              return o(d);
            },
            selectPlugin: A,
            get selectedGroupIndex() {
              return o(u);
            },
            set selectedGroupIndex(_e) {
              V(u, _e, !0);
            },
            get selectedPluginIndex() {
              return o(h);
            },
            set selectedPluginIndex(_e) {
              V(h, _e, !0);
            }
          });
          var ce = z(ne, 2);
          {
            let _e = /* @__PURE__ */ J(() => !We.process || !o(f));
            In(ce, {
              variant: "raised",
              style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
              onclick: y,
              get disabled() {
                return o(_e);
              },
              "aria-label": "Add validation",
              children: (oe, he) => {
                var q = Ve("ADD NEW VALIDATION");
                x(oe, q);
              },
              $$slots: { default: !0 }
            });
          }
          var we = z(B, 2);
          T_(we, {
            get selectedPlugin() {
              return o(f);
            },
            get pluginGroups() {
              return o(d);
            },
            activeBreadcrumbIndex: 2,
            $$events: {
              addValidation: y,
              breadcrumbClick: v
            }
          }), x(Q, ue);
        };
        ee(
          N,
          (Q) => {
            o(i) === "validator-configuration" && Q(U);
          },
          !0
        );
      }
      x(X, G);
    };
    ee(M, (X) => {
      o(i) === "process-definition" ? X(D) : X(O, !1);
    });
  }
  x(n, T), ye();
}
var aI = /* @__PURE__ */ j('<div class="step-content svelte-1hp1kek"><div class="header svelte-1hp1kek"><!> <!></div> <!></div>'), sI = /* @__PURE__ */ j('<div class="page-content svelte-1hp1kek"><!></div>');
function oI(n, e) {
  be(e, !0);
  let t = /* @__PURE__ */ se(0), r = /* @__PURE__ */ J(() => h_(We.process, { edit: cn.isEditing })), i = /* @__PURE__ */ J(() => We.process.pluginGroups);
  function a(h) {
    h === 0 && (qn.visible = !0, We.process = null);
  }
  function s() {
    cn.isEditing = !0, qn.visible = !1, V(t, 0);
  }
  var d = sI(), l = k(d);
  {
    var c = (h) => {
      iI(h, {});
    }, u = (h) => {
      var f = aI(), v = k(f), g = k(v);
      am(g, {
        get breadcrumbs() {
          return o(r);
        },
        activeIndex: 1,
        handleClick: a
      });
      var m = z(g, 2);
      {
        let I = /* @__PURE__ */ J(() => !We.process);
        In(m, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
          onclick: () => e.handleStart(We.process),
          get disabled() {
            return o(I);
          },
          "aria-label": "Start process",
          children: (E, A) => {
            var y = Ve("START PROCESS");
            x(E, y);
          },
          $$slots: { default: !0 }
        });
      }
      var p = z(v, 2);
      f_(p, {
        get pluginGroups() {
          return o(i);
        },
        requestEdit: s
      }), x(h, f);
    };
    ee(l, (h) => {
      cn.isEditing ? h(c) : h(u, !1);
    });
  }
  x(n, d), ye();
}
var lI = /* @__PURE__ */ j("<div></div>");
function dI(n, e) {
  be(e, !0);
  function t(c) {
    let u = 3735928559, h = 1103547991;
    for (let f = 0, v; f < c.length; f++)
      v = c.charCodeAt(f), u = Math.imul(u ^ v, 2654435761), h = Math.imul(h ^ v, 1597334677);
    return u = Math.imul(u ^ u >>> 16, 2246822507) ^ Math.imul(h ^ h >>> 13, 3266489909), h = Math.imul(h ^ h >>> 16, 2246822507) ^ Math.imul(u ^ u >>> 13, 3266489909), "oscd-plugin" + ((h >>> 0).toString(16).padStart(8, "0") + (u >>> 0).toString(16).padStart(8, "0"));
  }
  let r = _(e, "editCount", 19, () => -1), i = _(e, "plugins", 19, () => []), a = null, s = null, d = "";
  Se(() => {
    var u;
    if (!a) return;
    if (!((u = e.plugin) != null && u.src)) {
      a.innerHTML = "", s = null, d = "";
      return;
    }
    const c = t(e.plugin.src);
    c !== d ? (d = c, a.innerHTML = "", s = document.createElement(c), s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi), a.appendChild(s)) : s && (s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi));
  });
  var l = lI();
  xe(l, (c) => a = c, () => a), x(n, l), ye();
}
const Io = /* @__PURE__ */ new Map();
function bo(n) {
  return !!customElements.get(n);
}
function uI(n) {
  if (!n.includes("-"))
    throw new Error(
      `Invalid custom element name "${n}". Custom element names must contain a dash.`
    );
}
async function ac(n) {
  if (n.type !== "external") return;
  const e = n.id;
  if (uI(e), bo(e)) return;
  const t = Io.get(e);
  if (t) return t;
  const r = (async () => {
    const i = await import(
      /* @vite-ignore */
      n.src
    ), a = (i == null ? void 0 : i.default) ?? (i == null ? void 0 : i.element);
    if (!a)
      throw new Error(
        `Plugin "${n.id}" did not export a custom element constructor.`
      );
    const s = a, d = class extends s {
    };
    if (!bo(e))
      try {
        customElements.define(e, d);
      } catch (l) {
        if (!bo(e)) throw l;
      }
    await customElements.whenDefined(e);
  })().finally(() => {
    Io.delete(e);
  });
  return Io.set(e, r), r;
}
async function cI(n) {
  await Promise.all(
    n.filter((e) => e.type === "external").map(async (e) => {
      try {
        await ac(e);
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
function fI(n, e, t = null) {
  return { parent: n, node: e, reference: t };
}
function hI(n) {
  return { node: n };
}
function vI(n, e) {
  return { element: n, textContent: e };
}
function gI(n, e) {
  return new CustomEvent("oscd-edit-v2", {
    composed: !0,
    bubbles: !0,
    detail: { ...e, edit: n }
  });
}
function mI(n, e) {
  if (!n)
    return console.warn("Host element is undefined, cannot dispatch event"), !1;
  const t = gI(e);
  return n.dispatchEvent(t);
}
const sc = "compas", oc = `${sc}:workflowProcessId`, lc = `${sc}:workflowLastPluginId`;
function to(n) {
  return n.documentElement;
}
function pI(n) {
  return to(n).querySelector(":scope > Header");
}
function dc(n, e) {
  return to(n).querySelector(`:scope > Private[type="${e}"]`);
}
function _I(n, e, t) {
  const r = n.createElementNS(to(n).namespaceURI, "Private");
  return r.setAttribute("type", e), r.textContent = t, r;
}
function pd(n, e, t, r) {
  const i = dc(n, t), a = (r ?? "").trim();
  if (!a) {
    i && e.push(hI(i));
    return;
  }
  if (i)
    e.push(vI(i, a));
  else {
    const s = pI(n);
    e.push(fI(to(n), _I(n, t, a), s));
  }
}
function uc(n) {
  const e = (t) => {
    var r, i;
    return ((i = (r = dc(n, t)) == null ? void 0 : r.textContent) == null ? void 0 : i.trim()) || null;
  };
  return {
    processId: e(oc),
    lastPluginId: e(lc)
  };
}
function gs(n, e, t) {
  const r = [];
  return "processId" in t && pd(n, r, oc, t.processId), "lastPluginId" in t && pd(
    n,
    r,
    lc,
    t.lastPluginId
  ), r.length ? mI(e, r) : !1;
}
function II(n, e, t) {
  const r = n.evaluate(t, e, null, XPathResult.ANY_TYPE, null);
  switch (r.resultType) {
    case XPathResult.BOOLEAN_TYPE:
      return r.booleanValue;
    case XPathResult.NUMBER_TYPE:
      return Number.isFinite(r.numberValue) && r.numberValue !== 0;
    case XPathResult.STRING_TYPE:
      return r.stringValue.length > 0;
    default:
      return n.evaluate(t, e, null, XPathResult.ANY_UNORDERED_NODE_TYPE, null).singleNodeValue != null;
  }
}
function bI(n, e) {
  return e.map((t) => {
    const r = n.evaluate(t.context, n, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
    if (r.snapshotLength === 0)
      return {
        validation: t,
        ok: !1,
        details: `Context matched 0 nodes for context XPath: ${t.context}`
      };
    for (let i = 0; i < r.snapshotLength; i++) {
      const a = r.snapshotItem(i);
      if (!II(n, a, t.assert))
        return {
          validation: t,
          ok: !1,
          details: t.message ?? `Assert failed: ${t.assert}`
        };
    }
    return {
      validation: t,
      ok: !0,
      details: `Passed (${r.snapshotLength} context node(s))`
    };
  });
}
var yI = /* @__PURE__ */ j('<div class="plugin-container svelte-1o7wsbo"><!></div>'), CI = /* @__PURE__ */ j('<div class="stepper svelte-1o7wsbo"><!> <!> <!></div> <!>', 1);
function AI(n, e) {
  be(e, !0);
  let t = _(e, "editCount", 19, () => -1), r = _(e, "plugins", 19, () => []), i = /* @__PURE__ */ se(null), a = /* @__PURE__ */ J(() => r().length > 0), s = /* @__PURE__ */ J(() => o(i) && o(a) ? r().findIndex((b) => b.id === o(i).id) : -1), d = /* @__PURE__ */ J(() => We.process.pluginGroups), l = /* @__PURE__ */ se(null), c = /* @__PURE__ */ se(null);
  function u(b) {
    var w, L;
    if (!((w = o(d)) != null && w.length)) return { groupIndex: null, pluginIndex: null };
    for (let M = 0; M < o(d).length; M++) {
      const O = ((L = o(d)[M].plugins) == null ? void 0 : L.findIndex((X) => X.id === b)) ?? -1;
      if (O >= 0) return { groupIndex: M, pluginIndex: O };
    }
    return { groupIndex: null, pluginIndex: null };
  }
  async function h(b) {
    var D, O;
    if (!b || ((D = o(i)) == null ? void 0 : D.id) === b.id) return;
    const w = o(i);
    e.doc && ((O = w == null ? void 0 : w.validations) != null && O.length) && bI(e.doc, w.validations).forEach((G) => {
      G.ok ? Ls.success("Validation passed", G.validation.title) : Ls.error("Validation failed ", G.validation.message);
    }), await ac(b), V(i, b, !0);
    const { groupIndex: L, pluginIndex: M } = u(b.id);
    V(l, L, !0), V(c, M, !0);
    try {
      e.doc && e.host && gs(e.doc, e.host, { lastPluginId: b.id });
    } catch {
    }
    U_(b.id);
  }
  function f(b) {
    if (!o(a)) return;
    const L = ((o(s) < 0 ? 0 : o(s)) + b + r().length) % r().length;
    h(r()[L]);
  }
  const v = () => f(1), g = () => f(-1);
  function m(b, w) {
    return Object.assign(b, w), {
      update(L) {
        Object.assign(b, L);
      }
    };
  }
  rt(() => {
    r().length && cI(r()).catch(console.error);
    let b = Ei.lastSelectedPluginId;
    if (!b && e.doc)
      try {
        const { lastPluginId: L } = uc(e.doc);
        b = L;
      } catch {
      }
    const w = r().find((L) => L.id === b) ?? r()[0];
    if (w) {
      const { groupIndex: L, pluginIndex: M } = u(w.id);
      V(l, L, !0), V(c, M, !0), h(w);
    }
    return qn.visible = !1, () => {
      qn.visible = !0;
    };
  });
  function p() {
    var b;
    qn.visible = !0, (b = e.onExit) == null || b.call(e);
  }
  var I = CI(), E = K(I), A = k(E);
  ec(A, { onClick: p });
  var y = z(A, 2);
  ic(y, {
    selectPlugin: h,
    get pluginGroups() {
      return o(d);
    },
    expandedGroupBackground: "var(--primary-base)",
    expandedGroupBorderColor: "white",
    get selectedGroupIndex() {
      return o(l);
    },
    set selectedGroupIndex(b) {
      V(l, b, !0);
    },
    get selectedPluginIndex() {
      return o(c);
    },
    set selectedPluginIndex(b) {
      V(c, b, !0);
    }
  });
  var T = z(y, 2);
  {
    let b = /* @__PURE__ */ J(() => !o(a)), w = /* @__PURE__ */ J(() => !o(a));
    tc(T, {
      onGoToPreviousStep: g,
      onGoToNextStep: v,
      onDone: p,
      get isAtFirstStep() {
        return o(b);
      },
      get isAtLastStep() {
        return o(w);
      }
    });
  }
  var C = z(E, 2);
  {
    var S = (b) => {
      var w = yI(), L = k(w);
      {
        var M = (O) => {
          dI(O, {
            get plugin() {
              return o(i);
            },
            get doc() {
              return e.doc;
            },
            get editCount() {
              return t();
            },
            get plugins() {
              return r();
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
        }, D = (O) => {
          var X = ie(), G = K(X);
          Oo(G, () => o(i).id, !1, (N, U) => {
            Me(N, (Q, ue) => m == null ? void 0 : m(Q, ue), () => ({
              doc: e.doc,
              editCount: t(),
              docs: e.docs,
              nsdoc: e.nsdoc,
              docName: e.docName,
              docId: e.docId,
              locale: e.locale,
              oscdApi: e.oscdApi,
              host: e.host
            })), Sr(N, 0, "svelte-1o7wsbo");
          }), x(O, X);
        };
        ee(L, (O) => {
          o(i).type === "internal" ? O(M) : O(D, !1);
        });
      }
      x(b, w);
    };
    ee(C, (b) => {
      o(i) && b(S);
    });
  }
  x(n, I), ye();
}
const EI = (n, e, t) => {
  n.target === n.currentTarget && (n.key === "Escape" && (n.preventDefault(), e("exit")), (n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()));
};
var SI = (n, e) => {
  n.target === n.currentTarget && e("exit");
}, xI = /* @__PURE__ */ j('<div class="ewf-dialog-backdrop svelte-1hw00aa" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-1hw00aa" role="document"><h2 id="ewf-title" class="sr-only svelte-1hw00aa">Engineering Workflow</h2> <!></div></div>');
function wI(n, e) {
  be(e, !0);
  let t = _(e, "editCount", 19, () => -1), r = _(e, "plugins", 19, () => []), i = /* @__PURE__ */ se(!1), a = /* @__PURE__ */ se(void 0), s = /* @__PURE__ */ se(null);
  const d = (f) => {
    o(i) || (V(i, !0), We.process = null, qn.visible = !0, sr(f));
  }, l = () => d("exit");
  Se(() => {
    var f;
    e.open !== o(a) && (V(a, e.open, !0), e.open ? (V(i, !1), (f = o(s)) == null || f.focus()) : d("cancel"));
  });
  var c = ie(), u = K(c);
  {
    var h = (f) => {
      var v = xI();
      v.__keydown = [EI, d, l], v.__click = [SI, d];
      var g = k(v), m = z(k(g), 2);
      AI(m, {
        get doc() {
          return e.doc;
        },
        get editCount() {
          return t();
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
        onExit: () => d("exit")
      }), xe(v, (p) => V(s, p), () => o(s)), x(f, v);
    };
    ee(u, (f) => {
      e.open && f(h);
    });
  }
  x(n, c), ye();
}
ct(["keydown", "click"]);
var TI = (n, e, t) => e(t().id), DI = /* @__PURE__ */ j('<button type="button" class="plugin-list__removeBtn svelte-h2qaw8"><!></button>'), LI = /* @__PURE__ */ j('<div class="page svelte-h2qaw8"><div class="topbar svelte-h2qaw8"><div class="topbar__left svelte-h2qaw8"><h2 class="title svelte-h2qaw8">Create new process</h2></div> <div class="topbar__actions svelte-h2qaw8"><!> <!></div></div> <div class="form svelte-h2qaw8"><div class="field svelte-h2qaw8"><!></div> <div class="field svelte-h2qaw8"><!></div> <div class="field svelte-h2qaw8"><!></div> <div class="field svelte-h2qaw8"><!></div></div> <div class="process-definition-view svelte-h2qaw8"><!> <div class="drag-and-drop-info svelte-h2qaw8"><!> <p class="svelte-h2qaw8">SELECT OR DRAG &amp; DROP PLUGINS</p></div> <!></div></div>');
function OI(n, e) {
  be(e, !0);
  const t = (W) => {
    var Y = ie(), ge = K(Y);
    {
      var Te = (De) => {
        In(De, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: E,
          children: (Le, et) => {
            var Ft = Ve("REMOVE ALL");
            x(Le, Ft);
          },
          $$slots: { default: !0 }
        });
      };
      ee(ge, (De) => {
        o(C) && De(Te);
      });
    }
    x(W, Y);
  }, r = (W, Y) => {
    let ge = () => Y == null ? void 0 : Y().plugin;
    var Te = DI();
    Te.__click = [TI, A, ge];
    var De = k(Te);
    Su(De, { svgStyles: "fill: #FF203A" }), de(() => At(Te, "aria-label", `Remove ${ge().name}`)), x(W, Te);
  };
  let i = /* @__PURE__ */ se(""), a = /* @__PURE__ */ J(() => o(i).trim().length === 0), s = /* @__PURE__ */ se(""), d = /* @__PURE__ */ se("1.0.0"), l = /* @__PURE__ */ se(""), c = /* @__PURE__ */ se(!1), u = /* @__PURE__ */ se(Ee([{ title: "Ungrouped", plugins: [] }])), h = /* @__PURE__ */ se("");
  const f = (W) => W.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  Se(() => {
    o(c) || V(l, f(o(i)), !0);
  });
  function v(W) {
    const Y = /* @__PURE__ */ new Set();
    for (const ge of W ?? []) for (const Te of ge.plugins ?? []) Y.add(Te.id);
    return Y;
  }
  function g(W, Y) {
    const ge = v(Y);
    if (!ge.has(W)) return W;
    let Te = 2, De = `${W}-${Te}`;
    for (; ge.has(De); )
      Te += 1, De = `${W}-${Te}`;
    return De;
  }
  function m(W = "Ungrouped") {
    let Y = o(u).find((ge) => ge.title === W);
    return Y || (Y = { title: W, plugins: [] }, V(u, [...o(u), Y], !0)), Y.plugins ?? (Y.plugins = []), Y;
  }
  function p(W) {
    const Y = [], ge = /* @__PURE__ */ new Set();
    for (const Te of W ?? []) {
      const De = [];
      for (const Le of Te.plugins ?? []) {
        let et = Le.id;
        ge.has(et) && (et = g(et, Y.concat([{ ...Te, plugins: De }]))), ge.add(et), De.push({ ...Le, id: et });
      }
      Y.push({ ...Te, plugins: De });
    }
    return Y;
  }
  function I(W, Y = "Ungrouped") {
    const ge = m(Y), Te = g(W.id, o(u));
    ge.plugins.push({ ...W, id: Te }), V(u, [...o(u)], !0);
  }
  async function E() {
    if ((await Ai(il, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm") {
      for (const Y of o(u)) (Y.plugins ?? (Y.plugins = [])).length = 0;
      V(u, [...o(u)], !0);
    }
  }
  function A(W) {
    for (let Y = 0; Y < o(u).length; Y += 1) {
      const ge = o(u)[Y], Te = (ge.plugins ?? []).findIndex((De) => De.id === W);
      if (Te !== -1) {
        ge.plugins.splice(Te, 1), ge.plugins.length === 0 && o(u).splice(Y, 1), V(u, [...o(u)], !0);
        return;
      }
    }
  }
  function y(W, Y) {
    const ge = W.trim();
    if (!ge || o(u).some((et) => et.title === ge)) return;
    const Te = { title: ge, plugins: [] };
    if (Y === void 0) {
      V(u, [...o(u), Te], !0);
      return;
    }
    const De = Math.max(0, Y - 1), Le = [...o(u)];
    Le.splice(De, 0, Te), V(u, Le, !0);
  }
  function T(W) {
    V(u, p(W), !0);
  }
  let C = /* @__PURE__ */ J(() => o(u).flatMap((W) => W.plugins ?? []).length > 0), S = /* @__PURE__ */ J(() => {
    const W = o(h).toLowerCase().trim(), Y = (fl.plugins ?? []).map((ge) => ({
      id: rc(ge.name),
      name: ge.name,
      src: ge.src,
      type: "internal"
    }));
    return W ? Y.filter((ge) => ge.name.toLowerCase().includes(W)) : Y;
  }), b = /* @__PURE__ */ J(() => !!o(i).trim());
  function w() {
    if (!o(b)) return;
    const W = {
      id: o(l).trim() || f(o(i)) || "process",
      version: o(d).trim() || "1.0.0",
      name: o(i).trim(),
      description: o(s).trim(),
      pluginGroups: Us(o(u))
    }, Y = L_(W);
    cn.isEditing = !1, e.handleSaved(Y);
  }
  function L() {
    cn.isEditing = !1, e.handleCancel();
  }
  rt(() => {
    cn.isEditing = !0;
  }), Mn(() => {
    cn.isEditing = !1;
  });
  var M = LI(), D = k(M), O = z(k(D), 2), X = k(O);
  In(X, {
    variant: "outlined",
    style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
    onclick: L,
    children: (W, Y) => {
      var ge = Ve("CANCEL");
      x(W, ge);
    },
    $$slots: { default: !0 }
  });
  var G = z(X, 2);
  {
    let W = /* @__PURE__ */ J(() => !o(b));
    In(G, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
      onclick: w,
      get disabled() {
        return o(W);
      },
      children: (Y, ge) => {
        var Te = Ve("SAVE");
        x(Y, Te);
      },
      $$slots: { default: !0 }
    });
  }
  var N = z(D, 2), U = k(N), Q = k(U);
  Gn(Q, {
    variant: "outlined",
    label: "Process name",
    get invalid() {
      return o(a);
    },
    get value() {
      return o(i);
    },
    set value(Y) {
      V(i, Y, !0);
    },
    helper: (Y) => {
      vs(Y, {
        validationMsg: !0,
        children: (ge, Te) => {
          var De = Ve("Process name is required.");
          x(ge, De);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { helper: !0 }
  });
  var ue = z(U, 2), B = k(ue);
  Gn(B, {
    variant: "outlined",
    label: "Process id",
    oninput: () => V(c, !0),
    get value() {
      return o(l);
    },
    set value(W) {
      V(l, W, !0);
    }
  });
  var ne = z(ue, 2), ce = k(ne);
  Gn(ce, {
    variant: "outlined",
    label: "Version",
    get value() {
      return o(d);
    },
    set value(W) {
      V(d, W, !0);
    }
  });
  var we = z(ne, 2), _e = k(we);
  Gn(_e, {
    variant: "outlined",
    label: "Description",
    get value() {
      return o(s);
    },
    set value(W) {
      V(s, W, !0);
    }
  });
  var oe = z(N, 2), he = k(oe);
  vl(he, {
    get pluginGroups() {
      return o(u);
    },
    title: "Process",
    get headerAction() {
      return t;
    },
    get itemAction() {
      return r;
    },
    onAddGroup: (W, Y) => y(W, Y),
    onUpdateGroups: (W) => T(W)
  });
  var q = z(he, 2), ve = k(q);
  Lu(ve, { svgStyles: "fill: #6B9197" });
  var re = z(q, 2);
  nc(re, {
    get plugins() {
      return o(S);
    },
    onAddPlugin: (W) => I(W, "Ungrouped"),
    get searchTerm() {
      return o(h);
    },
    set searchTerm(W) {
      V(h, W, !0);
    }
  }), x(n, M), ye();
}
ct(["click"]);
const br = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.textContent) == null ? void 0 : e.trim()) ?? "";
}, RI = (n, e) => (n == null ? void 0 : n.getAttribute(e)) ?? void 0, ss = (n, e) => Array.from(n.querySelectorAll(e));
function MI(n) {
  const e = RI(n.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : Bp;
}
function _d(n) {
  return {
    id: br(n.querySelector("id")),
    name: br(n.querySelector("name")),
    src: br(n.querySelector("src")) || void 0,
    sourceUrl: br(n.querySelector("sourceUrl")) || void 0,
    type: MI(n)
  };
}
function PI(n) {
  return ss(n, "process").map((e) => {
    const t = ss(e, ":scope > plugins-sequence > group"), r = t.length ? t.map((i) => ({
      title: br(i.querySelector(":scope > title")) || "Untitled",
      plugins: ss(i, ":scope > plugin").map(_d)
    })) : [
      {
        title: "Ungrouped",
        plugins: ss(e, ":scope > plugins-sequence > plugin").map(
          _d
        )
      }
    ];
    return {
      id: br(e.querySelector(":scope > id")),
      version: br(e.querySelector(":scope > version")),
      name: br(e.querySelector(":scope > name")),
      description: br(e.querySelector(":scope > description")),
      pluginGroups: r
    };
  });
}
function kI(n) {
  if (typeof DOMParser > "u")
    throw new Error("DOMParser is not available in this environment.");
  const e = new DOMParser().parseFromString(n, "application/xml");
  if (e.getElementsByTagName("parsererror").length)
    throw new Error("Invalid XML file format.");
  return e;
}
function FI(n, e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of n) t.set(r.id, r);
  for (const r of e) t.set(r.id, r);
  return Array.from(t.values());
}
async function NI() {
  Gi.loading = !0, Gi.error = "";
  try {
    const n = await fetch(Hp, { cache: "no-cache" });
    if (!n.ok)
      throw new Error(`HTTP ${n.status}${n.statusText ? `: ${n.statusText}` : ""}`);
    const e = await n.text(), t = kI(e), r = PI(t), i = Us(Dt.processes), a = Array.isArray(i) && i.length ? FI(r, i) : r;
    return Dt.processes = a, a;
  } catch (n) {
    throw Gi.error = n instanceof Error ? n.message : "Failed to load processes.", n;
  } finally {
    Gi.loading = !1;
  }
}
function UI(n) {
  return (n.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var HI = /* @__PURE__ */ j('<link rel="stylesheet" href="/material-icon.css"/>'), BI = /* @__PURE__ */ j("<!> <!> <!>", 1);
function GI(n, e) {
  be(e, !0);
  let t = /* @__PURE__ */ se(!1);
  rt(async () => {
    await NI();
    try {
      if (e.doc) {
        const { processId: p, lastPluginId: I } = uc(e.doc);
        if (p) {
          const E = (Dt.processes ?? []).find((A) => A.id === p);
          E && _o(E, I ?? null);
        }
      }
    } catch {
    }
  });
  async function r(p) {
    const I = Ei.process;
    if (I && I.id !== p.id) {
      if ((await Ai(il, {
        title: "Do you want to start a new process?",
        message: "Starting a new process will stop the current running process. Any unsaved progress will be lost.",
        confirmActionText: "Start New Process",
        cancelActionText: "Cancel"
      })).type === "cancel")
        return;
      _o(p, null), e.doc && e.host && gs(e.doc, e.host, { processId: p.id, lastPluginId: null });
    } else I ? e.doc && e.host && gs(e.doc, e.host, { processId: p.id }) : (_o(p, null), e.doc && e.host && gs(e.doc, e.host, { processId: p.id, lastPluginId: null }));
    (!We.process || We.process.id !== p.id) && (We.process = p);
    const E = UI(We.process);
    Ai(wI, {
      doc: e.doc,
      editCount: e.editCount,
      host: e.host,
      plugins: E,
      nsdoc: e.nsdoc,
      docId: e.docId,
      docName: e.docName,
      docs: e.docs,
      locale: e.locale,
      oscdApi: e.oscdApi
    });
  }
  Se(() => {
    Zv({ editCount: e.editCount, doc: e.doc });
  });
  function i(p) {
    We.process = p;
  }
  function a(p) {
    cn.isEditing = !0, We.process = p;
  }
  function s() {
    We.process = null;
  }
  function d() {
    cn.isEditing = !1, We.process = null, V(t, !0);
  }
  function l() {
    cn.isEditing = !1, V(t, !1);
  }
  function c(p) {
    V(t, !1), We.process = p;
  }
  var u = BI();
  Af((p) => {
    var I = HI();
    x(p, I);
  });
  var h = K(u);
  jv(h, {});
  var f = z(h, 2);
  {
    var v = (p) => {
      OI(p, { handleCancel: l, handleSaved: c });
    }, g = (p) => {
      var I = ie(), E = K(I);
      {
        var A = (T) => {
          oI(T, { handleBack: s, handleStart: r });
        }, y = (T) => {
          Zp(T, {
            handleView: i,
            handleEdit: a,
            handleStart: r,
            handleAddNew: d,
            get docName() {
              return e.docName;
            }
          });
        };
        ee(
          E,
          (T) => {
            We.process ? T(A) : T(y, !1);
          },
          !0
        );
      }
      x(p, I);
    };
    ee(f, (p) => {
      o(t) ? p(v) : p(g, !1);
    });
  }
  var m = z(f, 2);
  Np(m, {}), x(n, u), ye();
}
const cc = "archive-explorer", fc = "0.0.1";
var VI = /* @__PURE__ */ j('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function qI(n, e) {
  be(e, !0);
  let t = _(e, "dev", 3, !1), r = _(e, "editCount", 3, 0), i = _(e, "plugins", 19, () => []);
  var a = VI(), s = K(a);
  {
    var d = (u) => {
      GI(u, {
        get doc() {
          return e.doc;
        },
        get editCount() {
          return r();
        },
        get plugins() {
          return i();
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
    ee(s, (u) => {
      (e.doc || t()) && u(d);
    });
  }
  var l = z(s, 2), c = z(l, 2);
  de(() => {
    Rl(l, cc), Rl(c, fc);
  }), x(n, a), ye();
}
var Qi;
class XI extends HTMLElement {
  constructor() {
    super();
    Xe(this, Qi);
    Oe(this, Qi, /* @__PURE__ */ se(Ee({
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
    return o(ae(this, Qi));
  }
  set _props(t) {
    V(ae(this, Qi), t, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), Rf(qI, { target: this.shadowRoot, props: this._props });
    const t = WI();
    this.shadowRoot.appendChild(t);
  }
  set doc(t) {
    this._doc = t, this._props.doc = t;
  }
  get doc() {
    return this._doc;
  }
  set plugins(t) {
    this._props.plugins = t;
    const r = t.filter((i) => i.kind === "editor");
    N_(r);
  }
  set editCount(t) {
    this._props.editCount = t;
  }
  set docId(t) {
    this._props.docId = t;
  }
  set pluginId(t) {
    this._props.pluginId = t;
  }
  set docName(t) {
    this._props.docName = t;
  }
  set nsdoc(t) {
    this._props.nsdoc = t;
  }
  set docs(t) {
    this._props.docs = t;
  }
  set locale(t) {
    this._props.locale = t;
  }
  set oscdApi(t) {
    this._props.oscdApi = t;
  }
}
Qi = new WeakMap();
function WI() {
  const n = `${cc}-v${fc}-style`, e = zI(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function zI() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  XI as default
};
