var _c = Object.defineProperty;
var _l = (n) => {
  throw TypeError(n);
};
var Ic = (n, e, t) => e in n ? _c(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ri = (n, e, t) => Ic(n, typeof e != "symbol" ? e + "" : e, t), ao = (n, e, t) => e.has(n) || _l("Cannot " + t);
var ae = (n, e, t) => (ao(n, e, "read from private field"), t ? t.call(n) : e.get(n)), Xe = (n, e, t) => e.has(n) ? _l("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), Oe = (n, e, t, r) => (ao(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Gt = (n, e, t) => (ao(n, e, "access private method"), t);
const Et = Symbol(), bc = "http://www.w3.org/1999/xhtml", yc = "http://www.w3.org/2000/svg", Cc = "@attach", bd = !1;
var Ha = Array.isArray, Ac = Array.prototype.indexOf, jo = Array.from, ms = Object.defineProperty, Br = Object.getOwnPropertyDescriptor, yd = Object.getOwnPropertyDescriptors, Cd = Object.prototype, Ec = Array.prototype, Ps = Object.getPrototypeOf, Il = Object.isExtensible;
function Ni(n) {
  return typeof n == "function";
}
const ve = () => {
};
function Sc(n) {
  return n();
}
function Co(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function Ad() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const $t = 2, Zo = 4, ks = 8, zr = 16, xr = 32, jr = 64, Xo = 128, On = 256, ps = 512, zt = 1024, bn = 2048, Zr = 4096, Wn = 8192, Si = 16384, Fs = 32768, Xr = 65536, bl = 1 << 17, xc = 1 << 18, xi = 1 << 19, Ed = 1 << 20, Ao = 1 << 21, Ns = 1 << 22, gi = 1 << 23, ir = Symbol("$state"), Sd = Symbol("legacy props"), wc = Symbol(""), Ui = new class extends Error {
  constructor() {
    super(...arguments);
    Ri(this, "name", "StaleReactionError");
    Ri(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Ko(n) {
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
function xd(n) {
  return n === this.v;
}
function Yo(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function wd(n) {
  return !Yo(n, this.v);
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
    if (Ha(n)) {
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
function ye(n) {
  return (
    /** @type {T} */
    Td().get(n)
  );
}
function oe(n, e) {
  return Td().set(n, e), e;
}
function _e(n, e = !1, t) {
  tt = {
    p: tt,
    c: null,
    e: null,
    s: n,
    x: null,
    l: oa && !e ? { s: null, u: null, $: [] } : null
  };
}
function Ie(n) {
  var e = (
    /** @type {ComponentContext} */
    tt
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var r of t)
      Wd(r);
  }
  return n !== void 0 && (e.x = n), tt = e.p, n ?? /** @type {T} */
  {};
}
function Ba() {
  return !oa || tt !== null && tt.l === null;
}
function Td(n) {
  return tt === null && Ko(), tt.c ?? (tt.c = new Map(Wc(tt) || void 0));
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
function Dd() {
  var n = di;
  di = [], Co(n);
}
function Ar(n) {
  if (di.length === 0 && !wa) {
    var e = di;
    queueMicrotask(() => {
      e === di && Dd();
    });
  }
  di.push(n);
}
function zc() {
  for (; di.length > 0; )
    Dd();
}
const jc = /* @__PURE__ */ new WeakMap();
function Ld(n) {
  var e = Ne;
  if (e === null)
    return Fe.f |= gi, n;
  if (e.f & Fs)
    ea(n, e);
  else {
    if (!(e.f & Xo))
      throw !e.parent && n instanceof Error && Od(n), n;
    e.b.error(n);
  }
}
function ea(n, e) {
  for (; e !== null; ) {
    if (e.f & Xo)
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    e = e.parent;
  }
  throw n instanceof Error && Od(n), n;
}
function Od(n) {
  const e = jc.get(n);
  e && (ms(n, "message", {
    value: e.message
  }), ms(n, "stack", {
    value: e.stack
  }));
}
const Qa = /* @__PURE__ */ new Set();
let Qe = null, ls = null, Pt = null, Eo = /* @__PURE__ */ new Set(), er = [], Hs = null, So = !1, wa = !1;
var Zi, Xi, ui, Fa, Ki, Yi, ci, Ji, Na, Ua, Rn, xo, ds, wo;
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
    Xe(this, Fa, null);
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
    Xe(this, Na, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    Xe(this, Ua, []);
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
      Gt(this, Rn, xo).call(this, s);
    if (ae(this, ui) === 0) {
      var t = Pt;
      Gt(this, Rn, wo).call(this);
      var r = ae(this, Yi), i = ae(this, ci);
      Oe(this, Yi, []), Oe(this, ci, []), Oe(this, Ji, []), ls = this, Qe = null, Pt = t, yl(r), yl(i), ls = null, (a = ae(this, Fa)) == null || a.resolve();
    } else
      Gt(this, Rn, ds).call(this, ae(this, Yi)), Gt(this, Rn, ds).call(this, ae(this, ci)), Gt(this, Rn, ds).call(this, ae(this, Ji));
    Pt = null;
    for (const s of ae(this, Ki))
      Oa(s);
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
      if (this.activate(), Rd(), Qe !== null && Qe !== this)
        return;
    } else ae(this, ui) === 0 && Gt(this, Rn, wo).call(this);
    this.deactivate();
    for (const e of Eo)
      if (Eo.delete(e), e(), Qe !== null)
        break;
  }
  increment() {
    Oe(this, ui, ae(this, ui) + 1);
  }
  decrement() {
    Oe(this, ui, ae(this, ui) - 1);
    for (const e of ae(this, Na))
      Jt(e, bn), bi(e);
    for (const e of ae(this, Ua))
      Jt(e, Zr), bi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    ae(this, Xi).add(e);
  }
  settled() {
    return (ae(this, Fa) ?? Oe(this, Fa, Ad())).promise;
  }
  static ensure() {
    if (Qe === null) {
      const e = Qe = new Os();
      Qa.add(Qe), wa || Os.enqueue(() => {
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
Zi = new WeakMap(), Xi = new WeakMap(), ui = new WeakMap(), Fa = new WeakMap(), Ki = new WeakMap(), Yi = new WeakMap(), ci = new WeakMap(), Ji = new WeakMap(), Na = new WeakMap(), Ua = new WeakMap(), Rn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
xo = function(e) {
  var c;
  e.f ^= zt;
  for (var t = e.first; t !== null; ) {
    var r = t.f, i = (r & (xr | jr)) !== 0, a = i && (r & zt) !== 0, s = a || (r & Wn) !== 0 || this.skipped_effects.has(t);
    if (!s && t.fn !== null) {
      i ? t.f ^= zt : r & Zo ? ae(this, ci).push(t) : r & zt || (r & Ns && ((c = t.b) != null && c.is_pending()) ? ae(this, Ki).push(t) : qs(t) && (t.f & zr && ae(this, Ji).push(t), Oa(t)));
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
    (t.f & bn ? ae(this, Na) : ae(this, Ua)).push(t), Jt(t, zt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
wo = function() {
  var e;
  for (const t of ae(this, Xi))
    t();
  if (ae(this, Xi).clear(), Qa.size > 1) {
    ae(this, Zi).clear();
    let t = !0;
    for (const r of Qa) {
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
          Md(s, a);
        if (er.length > 0) {
          Qe = r, r.apply();
          for (const s of er)
            Gt(e = r, Rn, xo).call(e, s);
          er = [], r.deactivate();
        }
      }
    }
    Qe = null;
  }
  Qa.delete(this);
};
let nr = Os;
function Zc(n) {
  var e = wa;
  wa = !0;
  try {
    for (var t; ; ) {
      if (zc(), er.length === 0 && (Qe == null || Qe.flush(), er.length === 0))
        return Hs = null, /** @type {T} */
        t;
      Rd();
    }
  } finally {
    wa = e;
  }
}
function Rd() {
  var n = Vi;
  So = !0;
  try {
    var e = 0;
    for (El(!0); er.length > 0; ) {
      var t = nr.ensure();
      if (e++ > 1e3) {
        var r, i;
        Xc();
      }
      t.process(er), Gr.clear();
    }
  } finally {
    So = !1, El(n), Hs = null;
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
function yl(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if (!(r.f & (Si | Wn)) && qs(r) && (_r = [], Oa(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Xd(r) : r.fn = null), (_r == null ? void 0 : _r.length) > 0)) {
        Gr.clear();
        for (const i of _r)
          Oa(i);
        _r = [];
      }
    }
    _r = null;
  }
}
function Md(n, e) {
  if (n.reactions !== null)
    for (const t of n.reactions) {
      const r = t.f;
      r & $t ? Md(
        /** @type {Derived} */
        t,
        e
      ) : r & (Ns | zr) && Pd(t, e) && (Jt(t, bn), bi(
        /** @type {Effect} */
        t
      ));
    }
}
function Pd(n, e) {
  if (n.deps !== null) {
    for (const t of n.deps)
      if (e.includes(t) || t.f & $t && Pd(
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
    if (So && e === Ne && t & zr)
      return;
    if (t & (jr | xr)) {
      if (!(t & zt)) return;
      e.f ^= zt;
    }
  }
  er.push(e);
}
function Kc(n) {
  let e = 0, t = yi(0), r;
  return () => {
    hf() && (o(t), Gs(() => (e === 0 && (r = lr(() => n(() => Ta(t)))), e += 1, () => {
      Ar(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, Ta(t));
      });
    })));
  };
}
var Yc = Xr | xi | Xo;
function Jc(n, e, t) {
  new Qc(n, e, t);
}
var kn, wn, zo, Jn, fi, Qn, Tn, on, $n, Pr, hi, kr, vi, Fr, Rs, Ms, Qt, $c, ef, us, cs, To;
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
    Xe(this, zo, null);
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
    Xe(this, Pr, null);
    Xe(this, hi, 0);
    Xe(this, kr, 0);
    Xe(this, vi, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    Xe(this, Fr, null);
    Xe(this, Rs, () => {
      ae(this, Fr) && ta(ae(this, Fr), ae(this, hi));
    });
    Xe(this, Ms, Kc(() => (Oe(this, Fr, yi(ae(this, hi))), () => {
      Oe(this, Fr, null);
    })));
    Oe(this, wn, e), Oe(this, Jn, t), Oe(this, fi, r), this.parent = /** @type {Effect} */
    Ne.b, Oe(this, kn, !!ae(this, Jn).pending), Oe(this, Qn, Yr(() => {
      Ne.b = this;
      {
        try {
          Oe(this, Tn, qt(() => r(ae(this, wn))));
        } catch (i) {
          this.error(i);
        }
        ae(this, kr) > 0 ? Gt(this, Qt, cs).call(this) : Oe(this, kn, !1);
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
    Gt(this, Qt, To).call(this, e), Oe(this, hi, ae(this, hi) + e), Eo.add(ae(this, Rs));
  }
  get_effect_pending() {
    return ae(this, Ms).call(this), o(
      /** @type {Source<number>} */
      ae(this, Fr)
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
      i = !0, a && Nc(), nr.ensure(), Oe(this, hi, 0), ae(this, $n) !== null && Vr(ae(this, $n), () => {
        Oe(this, $n, null);
      }), Oe(this, kn, this.has_pending_snippet()), Oe(this, Tn, Gt(this, Qt, us).call(this, () => (Oe(this, vi, !1), qt(() => ae(this, fi).call(this, ae(this, wn)))))), ae(this, kr) > 0 ? Gt(this, Qt, cs).call(this) : Oe(this, kn, !1);
    };
    var d = Fe;
    try {
      cn(null), a = !0, t == null || t(e, s), a = !1;
    } catch (l) {
      ea(l, ae(this, Qn) && ae(this, Qn).parent);
    } finally {
      cn(d);
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
kn = new WeakMap(), wn = new WeakMap(), zo = new WeakMap(), Jn = new WeakMap(), fi = new WeakMap(), Qn = new WeakMap(), Tn = new WeakMap(), on = new WeakMap(), $n = new WeakMap(), Pr = new WeakMap(), hi = new WeakMap(), kr = new WeakMap(), vi = new WeakMap(), Fr = new WeakMap(), Rs = new WeakMap(), Ms = new WeakMap(), Qt = new WeakSet(), $c = function() {
  try {
    Oe(this, Tn, qt(() => ae(this, fi).call(this, ae(this, wn))));
  } catch (e) {
    this.error(e);
  }
  Oe(this, kn, !1);
}, ef = function() {
  const e = ae(this, Jn).pending;
  e && (Oe(this, on, qt(() => e(ae(this, wn)))), nr.enqueue(() => {
    Oe(this, Tn, Gt(this, Qt, us).call(this, () => (nr.ensure(), qt(() => ae(this, fi).call(this, ae(this, wn)))))), ae(this, kr) > 0 ? Gt(this, Qt, cs).call(this) : (Vr(
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
  or(ae(this, Qn)), cn(ae(this, Qn)), $i(ae(this, Qn).ctx);
  try {
    return e();
  } catch (a) {
    return Ld(a), null;
  } finally {
    or(t), cn(r), $i(i);
  }
}, cs = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    ae(this, Jn).pending
  );
  ae(this, Tn) !== null && (Oe(this, Pr, document.createDocumentFragment()), tf(ae(this, Tn), ae(this, Pr))), ae(this, on) === null && Oe(this, on, qt(() => e(ae(this, wn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
To = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && Gt(t = this.parent, Qt, To).call(t, e);
    return;
  }
  Oe(this, kr, ae(this, kr) + e), ae(this, kr) === 0 && (Oe(this, kn, !1), ae(this, on) && Vr(ae(this, on), () => {
    Oe(this, on, null);
  }), ae(this, Pr) && (ae(this, wn).before(ae(this, Pr)), Oe(this, Pr, null)), Ar(() => {
    nr.ensure().flush();
  }));
};
function tf(n, e) {
  for (var t = n.nodes_start, r = n.nodes_end; t !== null; ) {
    var i = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Va(t)
    );
    e.append(t), t = i;
  }
}
function kd(n, e, t) {
  const r = Ba() ? Ga : Jo;
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
    i == null || i.deactivate(), Do();
  }).catch((d) => {
    ea(d, a);
  });
}
function nf() {
  var n = Ne, e = Fe, t = tt, r = Qe;
  return function() {
    or(n), cn(e), $i(t), r == null || r.activate();
  };
}
function Do() {
  or(null), cn(null), $i(null);
}
// @__NO_SIDE_EFFECTS__
function Ga(n) {
  var e = $t | bn, t = Fe !== null && Fe.f & $t ? (
    /** @type {Derived} */
    Fe
  ) : null;
  return Ne === null || t !== null && t.f & On ? e |= On : Ne.f |= xi, {
    ctx: tt,
    deps: null,
    effects: null,
    equals: xd,
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
      Promise.resolve(n()).then(l.resolve, l.reject).then(Do);
    } catch (v) {
      l.reject(v), Do();
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
        for (const [m, _] of d) {
          if (d.delete(m), m === c) break;
          _.reject(Ui);
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
function Q(n) {
  const e = /* @__PURE__ */ Ga(n);
  return Jd(e), e;
}
// @__NO_SIDE_EFFECTS__
function Jo(n) {
  const e = /* @__PURE__ */ Ga(n);
  return e.equals = wd, e;
}
function Fd(n) {
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
function Qo(n) {
  var e, t = Ne;
  or(af(n));
  try {
    Fd(n), e = tu(n);
  } finally {
    or(t);
  }
  return e;
}
function Nd(n) {
  var e = Qo(n);
  if (n.equals(e) || (n.v = e, n.wv = $d()), !wi)
    if (Pt !== null)
      Pt.set(n, n.v);
    else {
      var t = (Nr || n.f & On) && n.deps !== null ? Zr : zt;
      Jt(n, t);
    }
}
const Gr = /* @__PURE__ */ new Map();
function yi(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: xd,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function se(n, e) {
  const t = yi(n);
  return Jd(t), t;
}
// @__NO_SIDE_EFFECTS__
function Ud(n, e = !1, t = !0) {
  var i;
  const r = yi(n);
  return e || (r.equals = wd), oa && t && tt !== null && tt.l !== null && ((i = tt.l).s ?? (i.s = [])).push(r), r;
}
function V(n, e, t = !1) {
  Fe !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Un || Fe.f & bl) && Ba() && Fe.f & ($t | zr | Ns | bl) && !(Yt != null && Yt.includes(n)) && Fc();
  let r = t ? Ee(e) : e;
  return ta(n, r);
}
function ta(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    wi ? Gr.set(n, e) : Gr.set(n, t), n.v = e;
    var r = nr.ensure();
    r.capture(n, t), n.f & $t && (n.f & bn && Qo(
      /** @type {Derived} */
      n
    ), Jt(n, n.f & On ? Zr : zt)), n.wv = $d(), Hd(n, bn), Ba() && Ne !== null && Ne.f & zt && !(Ne.f & (xr | jr)) && (xn === null ? If([n]) : xn.push(n));
  }
  return e;
}
function Ta(n) {
  V(n, n.v + 1);
}
function Hd(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = Ba(), i = t.length, a = 0; a < i; a++) {
      var s = t[a], d = s.f;
      if (!(!r && s === Ne)) {
        var l = (d & bn) === 0;
        l && Jt(s, e), d & $t ? Hd(
          /** @type {Derived} */
          s,
          Zr
        ) : l && (d & zr && _r !== null && _r.push(
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
  if (e !== Cd && e !== Ec)
    return n;
  var t = /* @__PURE__ */ new Map(), r = Ha(n), i = /* @__PURE__ */ se(0), a = mi, s = (d) => {
    if (mi === a)
      return d();
    var l = Fe, c = mi;
    cn(null), xl(a);
    var u = d();
    return cn(l), xl(c), u;
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
            t.set(l, u), Ta(i);
          }
        } else
          V(c, Et), Ta(i);
        return !0;
      },
      get(d, l, c) {
        var v;
        if (l === ir)
          return n;
        var u = t.get(l), h = l in d;
        if (u === void 0 && (!h || (v = Br(d, l)) != null && v.writable) && (u = s(() => {
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
        if (c !== void 0 || Ne !== null && (!u || (f = Br(d, l)) != null && f.writable)) {
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
        var E;
        var h = t.get(l), f = l in d;
        if (r && l === "length")
          for (var v = c; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var g = t.get(v + "");
            g !== void 0 ? V(g, Et) : v in d && (g = s(() => /* @__PURE__ */ se(Et)), t.set(v + "", g));
          }
        if (h === void 0)
          (!f || (E = Br(d, l)) != null && E.writable) && (h = s(() => /* @__PURE__ */ se(void 0)), V(h, Ee(c)), t.set(l, h));
        else {
          f = h.v !== Et;
          var m = s(() => Ee(c));
          V(h, m);
        }
        var _ = Reflect.getOwnPropertyDescriptor(d, l);
        if (_ != null && _.set && _.set.call(u, c), !f) {
          if (r && typeof l == "string") {
            var b = (
              /** @type {Source<number>} */
              t.get("length")
            ), A = Number(l);
            Number.isInteger(A) && A >= b.v && V(b, A + 1);
          }
          Ta(i);
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
function Cl(n) {
  try {
    if (n !== null && typeof n == "object" && ir in n)
      return n[ir];
  } catch {
  }
  return n;
}
function sf(n, e) {
  return Object.is(Cl(n), Cl(e));
}
var _s, $o, Bd, Gd, Vd;
function of() {
  if (_s === void 0) {
    _s = window, $o = document, Bd = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Gd = Br(e, "firstChild").get, Vd = Br(e, "nextSibling").get, Il(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), Il(t) && (t.__t = void 0);
  }
}
function Kr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function na(n) {
  return Gd.call(n);
}
// @__NO_SIDE_EFFECTS__
function Va(n) {
  return Vd.call(n);
}
function N(n, e) {
  return /* @__PURE__ */ na(n);
}
function Y(n, e = !1) {
  {
    var t = (
      /** @type {DocumentFragment} */
      /* @__PURE__ */ na(
        /** @type {Node} */
        n
      )
    );
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Va(t) : t;
  }
}
function z(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Va(r);
  return r;
}
function lf(n) {
  n.textContent = "";
}
function el() {
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
let Al = !1;
function uf() {
  Al || (Al = !0, document.addEventListener(
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
  cn(null), or(null);
  try {
    return n();
  } finally {
    cn(e), or(t);
  }
}
function cf(n, e, t, r = t) {
  n.addEventListener(e, () => la(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), uf();
}
function qd(n) {
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
      Oa(a), a.f |= Fs;
    } catch (l) {
      throw wt(a), l;
    }
  else e !== null && bi(a);
  if (r) {
    var s = a;
    if (t && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & xi) && (s = s.first), s !== null && (s.parent = i, i !== null && ff(s, i), Fe !== null && Fe.f & $t && !(n & jr))) {
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
function xe(n) {
  qd();
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
    return Wd(n);
}
function Wd(n) {
  return zn(Zo | Ed, n, !1);
}
function vf(n) {
  return qd(), zn(ks | Ed, n, !0);
}
function zd(n) {
  nr.ensure();
  const e = zn(jr | xi, n, !0);
  return () => {
    wt(e);
  };
}
function gf(n) {
  nr.ensure();
  const e = zn(jr | xi, n, !0);
  return (t = {}) => new Promise((r) => {
    t.outro ? Vr(e, () => {
      wt(e), r(void 0);
    }) : (wt(e), r(void 0));
  });
}
function da(n) {
  return zn(Zo, n, !1);
}
function mf(n) {
  return zn(Ns | xi, n, !0);
}
function Gs(n, e = 0) {
  return zn(ks | e, n, !0);
}
function ue(n, e = [], t = []) {
  kd(e, t, (r) => {
    zn(ks, () => n(...r.map(o)), !0);
  });
}
function Yr(n, e = 0) {
  var t = zn(zr | e, n, !0);
  return t;
}
function qt(n, e = !0) {
  return zn(xr | xi, n, !0, e);
}
function jd(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = wi, r = Fe;
    Sl(!0), cn(null);
    try {
      e.call(null);
    } finally {
      Sl(t), cn(r);
    }
  }
}
function Zd(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && la(() => {
      i.abort(Ui);
    });
    var r = t.next;
    t.f & jr ? t.parent = null : wt(t, e), t = r;
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
  (e || n.f & xc) && n.nodes_start !== null && n.nodes_end !== null && (_f(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), Zd(n, e && !t), Is(n, 0), Jt(n, Si);
  var r = n.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  jd(n);
  var i = n.parent;
  i !== null && i.first !== null && Xd(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function _f(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Va(n)
    );
    n.remove(), n = t;
  }
}
function Xd(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Vr(n, e) {
  var t = [];
  tl(n, t, !0), Kd(t, () => {
    wt(n), e && e();
  });
}
function Kd(n, e) {
  var t = n.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var i of n)
      i.out(r);
  } else
    e();
}
function tl(n, e, t) {
  if (!(n.f & Wn)) {
    if (n.f ^= Wn, n.transitions !== null)
      for (const s of n.transitions)
        (s.is_global || t) && e.push(s);
    for (var r = n.first; r !== null; ) {
      var i = r.next, a = (r.f & Xr) !== 0 || (r.f & xr) !== 0;
      tl(r, e, a ? t : !1), r = i;
    }
  }
}
function Vs(n) {
  Yd(n, !0);
}
function Yd(n, e) {
  if (n.f & Wn) {
    n.f ^= Wn, n.f & zt || (Jt(n, bn), bi(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & Xr) !== 0 || (t.f & xr) !== 0;
      Yd(t, i ? e : !1), t = r;
    }
    if (n.transitions !== null)
      for (const a of n.transitions)
        (a.is_global || e) && a.in();
  }
}
let Vi = !1;
function El(n) {
  Vi = n;
}
let wi = !1;
function Sl(n) {
  wi = n;
}
let Fe = null, Un = !1;
function cn(n) {
  Fe = n;
}
let Ne = null;
function or(n) {
  Ne = n;
}
let Yt = null;
function Jd(n) {
  Fe !== null && (Yt === null ? Yt = [n] : Yt.push(n));
}
let Xt = null, _n = 0, xn = null;
function If(n) {
  xn = n;
}
let Qd = 1, La = 0, mi = La;
function xl(n) {
  mi = n;
}
let Nr = !1;
function $d() {
  return ++Qd;
}
function qs(n) {
  var h;
  var e = n.f;
  if (e & bn)
    return !0;
  if (e & Zr) {
    var t = n.deps, r = (e & On) !== 0;
    if (t !== null) {
      var i, a, s = (e & ps) !== 0, d = r && Ne !== null && !Nr, l = t.length;
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
        ) && Nd(
          /** @type {Derived} */
          a
        ), a.wv > n.wv)
          return !0;
    }
    (!r || Ne !== null && !Nr) && Jt(n, zt);
  }
  return !1;
}
function eu(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(Yt != null && Yt.includes(n)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & $t ? eu(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? Jt(a, bn) : a.f & zt && Jt(a, Zr), bi(
        /** @type {Effect} */
        a
      ));
    }
}
function tu(n) {
  var m;
  var e = Xt, t = _n, r = xn, i = Fe, a = Nr, s = Yt, d = tt, l = Un, c = mi, u = n.f;
  Xt = /** @type {null | Value[]} */
  null, _n = 0, xn = null, Nr = (u & On) !== 0 && (Un || !Vi || Fe === null), Fe = u & (xr | jr) ? null : n, Yt = null, $i(n.ctx), Un = !1, mi = ++La, n.ac !== null && (la(() => {
    n.ac.abort(Ui);
  }), n.ac = null);
  try {
    n.f |= Ao;
    var h = (
      /** @type {Function} */
      n.fn
    ), f = h(), v = n.deps;
    if (Xt !== null) {
      var g;
      if (Is(n, _n), v !== null && _n > 0)
        for (v.length = _n + Xt.length, g = 0; g < Xt.length; g++)
          v[_n + g] = Xt[g];
      else
        n.deps = v = Xt;
      if (!Nr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      u & $t && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (g = _n; g < v.length; g++)
          ((m = v[g]).reactions ?? (m.reactions = [])).push(n);
    } else v !== null && _n < v.length && (Is(n, _n), v.length = _n);
    if (Ba() && xn !== null && !Un && v !== null && !(n.f & ($t | Zr | bn)))
      for (g = 0; g < /** @type {Source[]} */
      xn.length; g++)
        eu(
          xn[g],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (La++, xn !== null && (r === null ? r = xn : r.push(.../** @type {Source[]} */
    xn))), n.f & gi && (n.f ^= gi), f;
  } catch (_) {
    return Ld(_);
  } finally {
    n.f ^= Ao, Xt = e, _n = t, xn = r, Fe = i, Nr = a, Yt = s, $i(d), Un = l, mi = c;
  }
}
function bf(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = Ac.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  t === null && e.f & $t && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Xt === null || !Xt.includes(e)) && (Jt(e, Zr), e.f & (On | ps) || (e.f ^= ps), Fd(
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
function Oa(n) {
  var e = n.f;
  if (!(e & Si)) {
    Jt(n, zt);
    var t = Ne, r = Vi;
    Ne = n, Vi = !0;
    try {
      e & zr ? pf(n) : Zd(n), jd(n);
      var i = tu(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Qd;
      var a;
      bd && Gc && n.f & bn && n.deps;
    } finally {
      Vi = r, Ne = t;
    }
  }
}
async function nu() {
  await Promise.resolve(), Zc();
}
function o(n) {
  var e = n.f, t = (e & $t) !== 0;
  if (Fe !== null && !Un) {
    var r = Ne !== null && (Ne.f & Si) !== 0;
    if (!r && !(Yt != null && Yt.includes(n))) {
      var i = Fe.deps;
      if (Fe.f & Ao)
        n.rv < La && (n.rv = La, Xt === null && i !== null && i[_n] === n ? _n++ : Xt === null ? Xt = [n] : (!Nr || !Xt.includes(n)) && Xt.push(n));
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
    if (Gr.has(n))
      return Gr.get(n);
    if (t) {
      s = /** @type {Derived} */
      n;
      var l = s.v;
      return (!(s.f & zt) && s.reactions !== null || ru(s)) && (l = Qo(s)), Gr.set(s, l), l;
    }
  } else if (t) {
    if (s = /** @type {Derived} */
    n, Pt != null && Pt.has(s))
      return Pt.get(s);
    qs(s) && Nd(s);
  }
  if (Pt != null && Pt.has(n))
    return Pt.get(n);
  if (n.f & gi)
    throw n.v;
  return n.v;
}
function ru(n) {
  if (n.v === Et) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Gr.has(e) || e.f & $t && ru(
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
function iu(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (ir in n)
      Lo(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && ir in t && Lo(t);
      }
  }
}
function Lo(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        Lo(n[r], e);
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
const au = /* @__PURE__ */ new Set(), Oo = /* @__PURE__ */ new Set();
function nl(n, e, t, r = {}) {
  function i(a) {
    if (r.capture || Sa.call(e, a), !a.cancelBubble)
      return la(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Ar(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function Cf(n, e, t, r = {}) {
  var i = nl(e, n, t, r);
  return () => {
    n.removeEventListener(e, i, r);
  };
}
function Kt(n, e, t, r, i) {
  var a = { capture: r, passive: i }, s = nl(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Bs(() => {
    e.removeEventListener(n, s, a);
  });
}
function ft(n) {
  for (var e = 0; e < n.length; e++)
    au.add(n[e]);
  for (var t of Oo)
    t(n);
}
let wl = null;
function Sa(n) {
  var A;
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = ((A = n.composedPath) == null ? void 0 : A.call(n)) || [], a = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  wl = n;
  var s = 0, d = wl === n && n.__root;
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
    cn(null), or(null);
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
            if (Ha(m)) {
              var [_, ...b] = m;
              _.apply(a, [n, ...b]);
            } else
              m.call(a, n);
        } catch (E) {
          f ? v.push(E) : f = E;
        }
        if (n.cancelBubble || g === e || g === null)
          break;
        a = g;
      }
      if (f) {
        for (let E of v)
          queueMicrotask(() => {
            throw E;
          });
        throw f;
      }
    } finally {
      n.__root = e, delete n.currentTarget, cn(u), or(h);
    }
  }
}
function su(n) {
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
    i === void 0 && (i = su(a ? n : "<!>" + n), t || (i = /** @type {Node} */
    /* @__PURE__ */ na(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Bd ? document.importNode(i, !0) : i.cloneNode(!0)
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
function Af(n, e, t = "svg") {
  var r = !n.startsWith("<!>"), i = `<${t}>${r ? n : "<!>" + n}</${t}>`, a;
  return () => {
    if (!a) {
      var s = (
        /** @type {DocumentFragment} */
        su(i)
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
  return /* @__PURE__ */ Af(n, e, "svg");
}
function He(n = "") {
  {
    var e = Kr(n + "");
    return ra(e, e), e;
  }
}
function ie() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = Kr();
  return n.append(e, t), ra(e, t), n;
}
function x(n, e) {
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Ef(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const Sf = [
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
function xf(n) {
  return Sf.includes(n);
}
const wf = {
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
function Tf(n) {
  return n = n.toLowerCase(), wf[n] ?? n;
}
const Df = ["touchstart", "touchmove"];
function Lf(n) {
  return Df.includes(n);
}
let bs = !0;
function Tl(n) {
  bs = n;
}
function Pe(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function Of(n, e) {
  return Rf(n, e);
}
const Mi = /* @__PURE__ */ new Map();
function Rf(n, { target: e, anchor: t, props: r = {}, events: i, context: a, intro: s = !0 }) {
  of();
  var d = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!d.has(v)) {
        d.add(v);
        var g = Lf(v);
        e.addEventListener(v, Sa, { passive: g });
        var m = Mi.get(v);
        m === void 0 ? (document.addEventListener(v, Sa, { passive: g }), Mi.set(v, 1)) : Mi.set(v, m + 1);
      }
    }
  };
  l(jo(au)), Oo.add(l);
  var c = void 0, u = gf(() => {
    var h = t ?? e.appendChild(Kr());
    return Jc(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (a) {
          _e({});
          var v = (
            /** @type {ComponentContext} */
            tt
          );
          v.c = a;
        }
        i && (r.$$events = i), bs = s, c = n(f, r) || {}, bs = !0, a && Ie();
      }
    ), () => {
      var g;
      for (var f of d) {
        e.removeEventListener(f, Sa);
        var v = (
          /** @type {number} */
          Mi.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, Sa), Mi.delete(f)) : Mi.set(f, v);
      }
      Oo.delete(l), h !== t && ((g = h.parentNode) == null || g.removeChild(h));
    };
  });
  return Mf.set(c, u), c;
}
let Mf = /* @__PURE__ */ new WeakMap();
function pe(n, e, ...t) {
  var r = n, i = ve, a;
  Yr(() => {
    i !== (i = e()) && (a && (wt(a), a = null), a = qt(() => (
      /** @type {SnippetFn} */
      i(r, ...t)
    )));
  }, Xr);
}
function rt(n) {
  tt === null && Ko(), oa && tt.l !== null ? Pf(tt).m.push(n) : xe(() => {
    const e = lr(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Mn(n) {
  tt === null && Ko(), rt(() => () => lr(n));
}
function Pf(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function te(n, e, t = !1) {
  var r = n, i = null, a = null, s = Et, d = t ? Xr : 0, l = !1;
  const c = (v, g = !0) => {
    l = !0, f(g, v);
  };
  var u = null;
  function h() {
    u !== null && (u.lastChild.remove(), r.before(u), u = null);
    var v = s ? i : a, g = s ? a : i;
    v && Vs(v), g && Vr(g, () => {
      s ? a = null : i = null;
    });
  }
  const f = (v, g) => {
    if (s !== (s = v)) {
      var m = el(), _ = r;
      if (m && (u = document.createDocumentFragment(), u.append(_ = Kr())), s ? i ?? (i = g && qt(() => g(_))) : a ?? (a = g && qt(() => g(_))), m) {
        var b = (
          /** @type {Batch} */
          Qe
        ), A = s ? i : a, E = s ? a : i;
        A && b.skipped_effects.delete(A), E && b.skipped_effects.add(E), b.add_callback(h);
      } else
        h();
    }
  };
  Yr(() => {
    l = !1, e(c), l || f(null, null);
  }, d);
}
let pi = null;
function Dl(n) {
  pi = n;
}
function Er(n, e) {
  return e;
}
function kf(n, e, t) {
  for (var r = n.items, i = [], a = e.length, s = 0; s < a; s++)
    tl(e[s].e, i, !0);
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
  Kd(i, () => {
    for (var c = 0; c < a; c++) {
      var u = e[c];
      d || (r.delete(u.k), Xn(n, u.prev, u.next)), wt(u.e, !d);
    }
  });
}
function hn(n, e, t, r, i, a = null) {
  var s = n, d = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var c = (
      /** @type {Element} */
      n
    );
    s = c.appendChild(Kr());
  }
  var u = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Jo(() => {
    var b = t();
    return Ha(b) ? b : b == null ? [] : jo(b);
  }), g, m;
  function _() {
    Ff(
      m,
      g,
      d,
      f,
      s,
      i,
      e,
      r,
      t
    ), a !== null && (g.length === 0 ? u ? Vs(u) : u = qt(() => a(s)) : u !== null && Vr(u, () => {
      u = null;
    }));
  }
  Yr(() => {
    m ?? (m = /** @type {Effect} */
    Ne), g = /** @type {V[]} */
    o(v);
    var b = g.length;
    if (!(h && b === 0)) {
      h = b === 0;
      var A, E, y, T;
      if (el()) {
        var C = /* @__PURE__ */ new Set(), w = (
          /** @type {Batch} */
          Qe
        );
        for (E = 0; E < b; E += 1) {
          y = g[E], T = r(y, E);
          var I = d.items.get(T) ?? f.get(T);
          I ? e & 3 && ou(I, y, E, e) : (A = lu(
            null,
            d,
            null,
            null,
            y,
            T,
            E,
            i,
            e,
            t,
            !0
          ), f.set(T, A)), C.add(T);
        }
        for (const [S, L] of d.items)
          C.has(S) || w.skipped_effects.add(L.e);
        w.add_callback(_);
      } else
        _();
      o(v);
    }
  });
}
function Ff(n, e, t, r, i, a, s, d, l) {
  var le, P, ee, ce;
  var c = (s & 8) !== 0, u = (s & 3) !== 0, h = e.length, f = t.items, v = t.first, g = v, m, _ = null, b, A = [], E = [], y, T, C, w;
  if (c)
    for (w = 0; w < h; w += 1)
      y = e[w], T = d(y, w), C = f.get(T), C !== void 0 && ((le = C.a) == null || le.measure(), (b ?? (b = /* @__PURE__ */ new Set())).add(C));
  for (w = 0; w < h; w += 1) {
    if (y = e[w], T = d(y, w), C = f.get(T), C === void 0) {
      var I = r.get(T);
      if (I !== void 0) {
        r.delete(T), f.set(T, I);
        var S = _ ? _.next : g;
        Xn(t, _, I), Xn(t, I, S), so(I, S, i), _ = I;
      } else {
        var L = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        _ = lu(
          L,
          t,
          _,
          _ === null ? t.first : _.next,
          y,
          T,
          w,
          a,
          s,
          l
        );
      }
      f.set(T, _), A = [], E = [], g = _.next;
      continue;
    }
    if (u && ou(C, y, w, s), C.e.f & Wn && (Vs(C.e), c && ((P = C.a) == null || P.unfix(), (b ?? (b = /* @__PURE__ */ new Set())).delete(C))), C !== g) {
      if (m !== void 0 && m.has(C)) {
        if (A.length < E.length) {
          var k = E[0], D;
          _ = k.prev;
          var O = A[0], Z = A[A.length - 1];
          for (D = 0; D < A.length; D += 1)
            so(A[D], k, i);
          for (D = 0; D < E.length; D += 1)
            m.delete(E[D]);
          Xn(t, O.prev, Z.next), Xn(t, _, O), Xn(t, Z, k), g = k, _ = Z, w -= 1, A = [], E = [];
        } else
          m.delete(C), so(C, g, i), Xn(t, C.prev, C.next), Xn(t, C, _ === null ? t.first : _.next), Xn(t, _, C), _ = C;
        continue;
      }
      for (A = [], E = []; g !== null && g.k !== T; )
        g.e.f & Wn || (m ?? (m = /* @__PURE__ */ new Set())).add(g), E.push(g), g = g.next;
      if (g === null)
        continue;
      C = g;
    }
    A.push(C), _ = C, g = C.next;
  }
  if (g !== null || m !== void 0) {
    for (var G = m === void 0 ? [] : jo(m); g !== null; )
      g.e.f & Wn || G.push(g), g = g.next;
    var B = G.length;
    if (B > 0) {
      var M = s & 4 && h === 0 ? i : null;
      if (c) {
        for (w = 0; w < B; w += 1)
          (ee = G[w].a) == null || ee.measure();
        for (w = 0; w < B; w += 1)
          (ce = G[w].a) == null || ce.fix();
      }
      kf(t, G, M);
    }
  }
  c && Ar(() => {
    var Se;
    if (b !== void 0)
      for (C of b)
        (Se = C.a) == null || Se.apply();
  }), n.first = t.first && t.first.e, n.last = _ && _.e;
  for (var X of r.values())
    wt(X.e);
  r.clear();
}
function ou(n, e, t, r) {
  r & 1 && ta(n.v, e), r & 2 ? ta(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function lu(n, e, t, r, i, a, s, d, l, c, u) {
  var h = pi, f = (l & 1) !== 0, v = (l & 16) === 0, g = f ? v ? /* @__PURE__ */ Ud(i, !1, !1) : yi(i) : i, m = l & 2 ? yi(s) : s, _ = {
    i: m,
    v: g,
    k: a,
    a: null,
    // @ts-expect-error
    e: null,
    prev: t,
    next: r
  };
  pi = _;
  try {
    if (n === null) {
      var b = document.createDocumentFragment();
      b.append(n = Kr());
    }
    return _.e = qt(() => d(
      /** @type {Node} */
      n,
      g,
      m,
      c
    ), Bc), _.e.prev = t && t.e, _.e.next = r && r.e, t === null ? u || (e.first = _) : (t.next = _, t.e.next = _.e), r !== null && (r.prev = _, r.e.prev = _.e), _;
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
      /* @__PURE__ */ Va(a)
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
    a && (Vr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = d, d = null;
  }
  Yr(() => {
    if (i !== (i = e())) {
      var c = el();
      if (i) {
        var u = r;
        c && (s = document.createDocumentFragment(), s.append(u = Kr()), a && Qe.skipped_effects.add(a)), d = qt(() => t(u, i));
      }
      c ? Qe.add_callback(l) : l();
    }
  }, Xr);
}
function Ro(n, e, t, r, i, a) {
  var s, d, l = null, c = (
    /** @type {TemplateNode} */
    n
  ), u, h = pi;
  Yr(() => {
    const f = e() || null;
    var v = f === "svg" ? yc : null;
    if (f !== s) {
      var g = pi;
      Dl(h), u && (f === null ? Vr(u, () => {
        u = null, d = null;
      }) : f === d ? Vs(u) : (wt(u), Tl(!1))), f && f !== d && (u = qt(() => {
        if (l = v ? document.createElementNS(v, f) : document.createElement(f), ra(l, l), r) {
          var m = (
            /** @type {TemplateNode} */
            l.appendChild(Kr())
          );
          r(l, m);
        }
        Ne.nodes_end = l, c.before(l);
      })), s = f, s && (d = s), Tl(!0), Dl(g);
    }
  }, Xr);
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
        iu(s), i && Yo(a, s) && (a = s, r.update(s));
      }), i = !0;
    }
    if (r != null && r.destroy)
      return () => (
        /** @type {Function} */
        r.destroy()
      );
  });
}
function Nf(n, e) {
  var t = void 0, r;
  Yr(() => {
    t !== (t = e()) && (r && (wt(r), r = null), t && (r = qt(() => {
      da(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function du(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = du(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function Uf() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = du(n)) && (r && (r += " "), r += e);
  return r;
}
function uu(n) {
  return typeof n == "object" ? Uf(n) : n ?? "";
}
const Ll = [...` 	
\r\f \v\uFEFF`];
function Hf(n, e, t) {
  var r = n == null ? "" : "" + n;
  if (e && (r = r ? r + " " + e : e), t) {
    for (var i in t)
      if (t[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var d = s + a;
          (s === 0 || Ll.includes(r[s - 1])) && (d === r.length || Ll.includes(r[d])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(d + 1) : s = d;
        }
  }
  return r === "" ? null : r;
}
function Ol(n, e = !1) {
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
function Bf(n, e) {
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
    return r && (t += Ol(r)), i && (t += Ol(i, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function Sr(n, e, t, r, i, a) {
  var s = n.__className;
  if (s !== t || s === void 0) {
    var d = Hf(t, r, a);
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
    var a = Bf(e, r);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else r && (Array.isArray(r) ? (lo(n, t == null ? void 0 : t[0], r[0]), lo(n, t == null ? void 0 : t[1], r[1], "important")) : lo(n, t, r));
  return r;
}
function Mo(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ha(e))
      return Uc();
    for (var r of n.options)
      r.selected = e.includes(Rl(r));
    return;
  }
  for (r of n.options) {
    var i = Rl(r);
    if (sf(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Gf(n) {
  var e = new MutationObserver(() => {
    Mo(n, n.__value);
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
function Rl(n) {
  return "__value" in n ? n.__value : n.value;
}
const _a = Symbol("class"), Ia = Symbol("style"), cu = Symbol("is custom element"), fu = Symbol("is html");
function Ml(n, e) {
  var t = rl(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function Vf(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function At(n, e, t, r) {
  var i = rl(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[wc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && hu(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function qf(n, e, t, r, i = !1, a = !1) {
  var s = rl(n), d = s[cu], l = !s[fu], c = e || {}, u = n.tagName === "OPTION";
  for (var h in e)
    h in t || (t[h] = null);
  t.class ? t.class = uu(t.class) : t[_a] && (t.class = null), t[Ia] && (t.style ?? (t.style = null));
  var f = hu(n);
  for (const E in t) {
    let y = t[E];
    if (u && E === "value" && y == null) {
      n.value = n.__value = "", c[E] = y;
      continue;
    }
    if (E === "class") {
      var v = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      Sr(n, v, y, r, e == null ? void 0 : e[_a], t[_a]), c[E] = y, c[_a] = t[_a];
      continue;
    }
    if (E === "style") {
      nt(n, y, e == null ? void 0 : e[Ia], t[Ia]), c[E] = y, c[Ia] = t[Ia];
      continue;
    }
    var g = c[E];
    if (!(y === g && !(y === void 0 && n.hasAttribute(E)))) {
      c[E] = y;
      var m = E[0] + E[1];
      if (m !== "$$")
        if (m === "on") {
          const T = {}, C = "$$" + E;
          let w = E.slice(2);
          var _ = xf(w);
          if (Ef(w) && (w = w.slice(0, -7), T.capture = !0), !_ && g) {
            if (y != null) continue;
            n.removeEventListener(w, c[C], T), c[C] = null;
          }
          if (y != null)
            if (_)
              n[`__${w}`] = y, ft([w]);
            else {
              let I = function(S) {
                c[E].call(this, S);
              };
              c[C] = nl(w, n, I, T);
            }
          else _ && (n[`__${w}`] = void 0);
        } else if (E === "style")
          At(n, E, y);
        else if (E === "autofocus")
          df(
            /** @type {HTMLElement} */
            n,
            !!y
          );
        else if (!d && (E === "__value" || E === "value" && y != null))
          n.value = n.__value = y;
        else if (E === "selected" && u)
          Vf(
            /** @type {HTMLOptionElement} */
            n,
            y
          );
        else {
          var b = E;
          l || (b = Tf(b));
          var A = b === "defaultValue" || b === "defaultChecked";
          if (y == null && !d && !A)
            if (s[E] = null, b === "value" || b === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                n
              );
              const C = e === void 0;
              if (b === "value") {
                let w = T.defaultValue;
                T.removeAttribute(b), T.defaultValue = w, T.value = T.__value = C ? w : null;
              } else {
                let w = T.defaultChecked;
                T.removeAttribute(b), T.defaultChecked = w, T.checked = C ? w : !1;
              }
            } else
              n.removeAttribute(E);
          else A || f.includes(b) && (d || typeof y != "string") ? (n[b] = y, b in s && (s[b] = Et)) : typeof y != "function" && At(n, b, y);
        }
    }
  }
  return c;
}
function qe(n, e, t = [], r = [], i, a = !1, s = !1) {
  kd(t, r, (d) => {
    var l = void 0, c = {}, u = n.nodeName === "SELECT", h = !1;
    if (Yr(() => {
      var v = e(...d.map(o)), g = qf(
        n,
        l,
        v,
        i,
        a,
        s
      );
      h && u && "value" in v && Mo(
        /** @type {HTMLSelectElement} */
        n,
        v.value
      );
      for (let _ of Object.getOwnPropertySymbols(c))
        v[_] || wt(c[_]);
      for (let _ of Object.getOwnPropertySymbols(v)) {
        var m = v[_];
        _.description === Cc && (!l || m !== l[_]) && (c[_] && wt(c[_]), c[_] = qt(() => Nf(n, () => m))), g[_] = m;
      }
      l = g;
    }), u) {
      var f = (
        /** @type {HTMLSelectElement} */
        n
      );
      da(() => {
        Mo(
          f,
          /** @type {Record<string | symbol, any>} */
          l.value,
          !0
        ), Gf(f);
      });
    }
    h = !0;
  });
}
function rl(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [cu]: n.nodeName.includes("-"),
      [fu]: n.namespaceURI === bc
    })
  );
}
var Pl = /* @__PURE__ */ new Map();
function hu(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Pl.get(e);
  if (t) return t;
  Pl.set(e, t = []);
  for (var r, i = n, a = Element.prototype; a !== i; ) {
    r = yd(i);
    for (var s in r)
      r[s].set && t.push(s);
    i = Ps(i);
  }
  return t;
}
const Wf = () => performance.now(), Ir = {
  // don't access requestAnimationFrame eagerly outside method
  // this allows basic testing of user code without JSDOM
  // bunder will eval and remove ternary when the user's app is built
  tick: (
    /** @param {any} _ */
    (n) => requestAnimationFrame(n)
  ),
  now: () => Wf(),
  tasks: /* @__PURE__ */ new Set()
};
function vu() {
  const n = Ir.now();
  Ir.tasks.forEach((e) => {
    e.c(n) || (Ir.tasks.delete(e), e.f());
  }), Ir.tasks.size !== 0 && Ir.tick(vu);
}
function zf(n) {
  let e;
  return Ir.tasks.size === 0 && Ir.tick(vu), {
    promise: new Promise((t) => {
      Ir.tasks.add(e = { c: n, f: t });
    }),
    abort() {
      Ir.tasks.delete(e);
    }
  };
}
function $a(n, e) {
  la(() => {
    n.dispatchEvent(new CustomEvent(e));
  });
}
function jf(n) {
  if (n === "float") return "cssFloat";
  if (n === "offset") return "cssOffset";
  if (n.startsWith("--")) return n;
  const e = n.split("-");
  return e.length === 1 ? e[0] : e[0] + e.slice(1).map(
    /** @param {any} word */
    (t) => t[0].toUpperCase() + t.slice(1)
  ).join("");
}
function kl(n) {
  const e = {}, t = n.split(";");
  for (const r of t) {
    const [i, a] = r.split(":");
    if (!i || a === void 0) break;
    const s = jf(i.trim());
    e[s] = a.trim();
  }
  return e;
}
const Zf = (n) => n;
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
function Fl(n, e, t, r) {
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
      var E;
      if (e.inert = u, !i) {
        v == null || v.abort(), (E = v == null ? void 0 : v.reset) == null || E.call(v);
        return;
      }
      a || f == null || f.abort(), $a(e, "introstart"), f = ys(e, g(), v, 1, () => {
        $a(e, "introend"), f == null || f.abort(), f = c = void 0, e.style.overflow = h;
      });
    },
    out(E) {
      if (!a) {
        E == null || E(), c = void 0;
        return;
      }
      e.inert = !0, $a(e, "outrostart"), v = ys(e, g(), f, 0, () => {
        $a(e, "outroend"), E == null || E();
      });
    },
    stop: () => {
      f == null || f.abort(), v == null || v.abort();
    }
  }, _ = (
    /** @type {Effect} */
    Ne
  );
  if ((_.transitions ?? (_.transitions = [])).push(m), i && bs) {
    var b = d;
    if (!b) {
      for (var A = (
        /** @type {Effect | null} */
        _.parent
      ); A && A.f & Xr; )
        for (; (A = A.parent) && !(A.f & zr); )
          ;
      b = !A || (A.f & Fs) !== 0;
    }
    b && da(() => {
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
        var _ = e({ direction: a ? "in" : "out" });
        s = ys(n, _, t, r, i);
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
      abort: ve,
      deactivate: ve,
      reset: ve,
      t: () => r
    };
  const { delay: l = 0, css: c, tick: u, easing: h = Zf } = e;
  var f = [];
  if (a && t === void 0 && (u && u(0, 1), c)) {
    var v = kl(c(0, 1));
    f.push(v, v);
  }
  var g = () => 1 - r, m = n.animate(f, { duration: l, fill: "forwards" });
  return m.onfinish = () => {
    m.cancel();
    var _ = (t == null ? void 0 : t.t()) ?? 1 - r;
    t == null || t.abort();
    var b = r - _, A = (
      /** @type {number} */
      e.duration * Math.abs(b)
    ), E = [];
    if (A > 0) {
      var y = !1;
      if (c)
        for (var T = Math.ceil(A / 16.666666666666668), C = 0; C <= T; C += 1) {
          var w = _ + b * h(C / T), I = kl(c(w, 1 - w));
          E.push(I), y || (y = I.overflow === "hidden");
        }
      y && (n.style.overflow = "hidden"), g = () => {
        var S = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          m.currentTime
        );
        return _ + b * h(S / A);
      }, u && zf(() => {
        if (m.playState !== "running") return !1;
        var S = g();
        return u(S, 1 - S), !0;
      });
    }
    m = n.animate(E, { duration: A, fill: "forwards" }), m.onfinish = () => {
      g = () => r, u == null || u(r, 1 - r), i();
    };
  }, {
    abort: () => {
      m && (m.cancel(), m.effect = null, m.onfinish = ve);
    },
    deactivate: () => {
      i = ve;
    },
    reset: () => {
      r === 0 && (u == null || u(1, 0));
    },
    t: () => g()
  };
}
function Xf(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  cf(n, "input", async (i) => {
    var a = i ? n.defaultValue : n.value;
    if (a = uo(n) ? co(a) : a, t(a), Qe !== null && r.add(Qe), await nu(), a !== (a = e())) {
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
function Nl(n, e) {
  return n === e || (n == null ? void 0 : n[ir]) === e;
}
function we(n = {}, e, t, r) {
  return da(() => {
    var i, a;
    return Gs(() => {
      i = a, a = [], lr(() => {
        n !== t(...a) && (e(n, ...a), i && Nl(t(...i), n) && e(null, ...i));
      });
    }), () => {
      Ar(() => {
        a && Nl(t(...a), n) && e(null, ...a);
      });
    };
  }), n;
}
function Kf(n = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    tt
  ), t = e.l.u;
  if (!t) return;
  let r = () => iu(e.s);
  if (n) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ga(() => {
      let d = !1;
      const l = e.s;
      for (const c in l)
        l[c] !== a[c] && (a[c] = l[c], d = !0);
      return d && i++, i;
    });
    r = () => o(s);
  }
  t.b.length && vf(() => {
    Ul(e, r), Co(t.b);
  }), xe(() => {
    const i = lr(() => t.m.map(Sc));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), t.a.length && xe(() => {
    Ul(e, r), Co(t.a);
  });
}
function Ul(n, e) {
  if (n.l.s)
    for (const t of n.l.s) o(t);
  e();
}
function gu(n, e, t) {
  if (n == null)
    return e(void 0), ve;
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
function ar(n, e = ve) {
  let t = null;
  const r = /* @__PURE__ */ new Set();
  function i(d) {
    if (Yo(n, d) && (n = d, t)) {
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
  function s(d, l = ve) {
    const c = [d, l];
    return r.add(c), r.size === 1 && (t = e(i, a) || ve), d(
      /** @type {T} */
      n
    ), () => {
      r.delete(c), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Yf(n) {
  let e;
  return gu(n, (t) => e = t)(), e;
}
let es = !1, Po = Symbol();
function Ci(n, e, t) {
  const r = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ Ud(void 0),
    unsubscribe: ve
  });
  if (r.store !== n && !(Po in t))
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = ve;
    else {
      var i = !0;
      r.unsubscribe = gu(n, (a) => {
        i ? r.source.v = a : V(r.source, a);
      }), i = !1;
    }
  return n && Po in t ? Yf(n) : o(r.source);
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
      ms(n, Po, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function Jf(n) {
  var e = es;
  try {
    return es = !1, [n(), es];
  } finally {
    es = e;
  }
}
const Qf = {
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
    Qf
  );
}
const $f = {
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
      const a = Br(i, e);
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
        const i = Br(r, e);
        return i && !i.configurable && (i.configurable = !0), i;
      }
    }
  },
  has(n, e) {
    if (e === ir || e === Sd) return !1;
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
  return new Proxy({ props: n }, $f);
}
function p(n, e, t, r) {
  var E;
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
    var h = ir in n || Sd in n;
    u = ((E = Br(n, e)) == null ? void 0 : E.set) ?? (h && e in n ? (y) => n[e] = y : void 0);
  }
  var f, v = !1;
  a ? [f, v] = Jf(() => (
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
  var _ = !1, b = (t & 1 ? Ga : Jo)(() => (_ = !1, g()));
  a && o(b);
  var A = (
    /** @type {Effect} */
    Ne
  );
  return (
    /** @type {() => V} */
    function(y, T) {
      if (arguments.length > 0) {
        const C = T ? o(b) : i && a ? Ee(y) : y;
        return V(b, C), _ = !0, d !== void 0 && (d = C), y;
      }
      return wi && _ || A.f & Si ? b.v : o(b);
    }
  );
}
const eh = "5";
var Id;
typeof window < "u" && ((Id = window.__svelte ?? (window.__svelte = {})).v ?? (Id.v = /* @__PURE__ */ new Set())).add(eh);
var ko = function(n, e) {
  return ko = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, ko(n, e);
};
function vn(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  ko(n, e);
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
function th(n, e, t, r) {
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
function nh(n, e) {
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
function Hl(n, e) {
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
function rh(n, e, t) {
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
var gn = (
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
function ih(n) {
  return n === void 0 && (n = window), ah(n) ? { passive: !0 } : !1;
}
function ah(n) {
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
const mu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  applyPassive: ih
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
function sh(n, e) {
  if (n.closest)
    return n.closest(e);
  for (var t = n; t; ) {
    if (pu(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function pu(n, e) {
  var t = n.matches || n.webkitMatchesSelector || n.msMatchesSelector;
  return t.call(n, e);
}
function oh(n) {
  var e = n;
  if (e.offsetParent !== null)
    return e.scrollWidth;
  var t = e.cloneNode(!0);
  t.style.setProperty("position", "absolute"), t.style.setProperty("transform", "translate(-9999px, -9999px)"), document.documentElement.appendChild(t);
  var r = t.scrollWidth;
  return document.documentElement.removeChild(t), r;
}
const qa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: sh,
  estimateScrollWidth: oh,
  matches: pu
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
var lh = {
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
var dh = (
  /** @class */
  function(n) {
    vn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.shakeAnimationEndHandler = function() {
        r.handleShakeAnimationEnd();
      }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lh;
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
var uh = (
  /** @class */
  function(n) {
    vn(e, n);
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
var ch = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Bl = {
  // This should stay in sync with $mdc-notched-outline-padding * 2.
  NOTCH_ELEMENT_PADDING: 8
}, fh = {
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
var hh = (
  /** @class */
  function(n) {
    vn(e, n);
    function e(t) {
      return n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return ch;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return fh;
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
      t > 0 && (t += Bl.NOTCH_ELEMENT_PADDING), this.adapter.setNotchWidthProperty(t), this.adapter.addClass(r);
    }, e.prototype.closeNotch = function() {
      var t = e.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(t), this.adapter.removeNotchWidthProperty();
    }, e;
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
var vh = {
  // Ripple is a special case where the "root" component is really a "mixin" of sorts,
  // given that it's an 'upgrade' to an existing component. That being said it is the root
  // CSS class that all other CSS classes derive from.
  BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
  FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
  FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
  ROOT: "mdc-ripple-upgraded",
  UNBOUNDED: "mdc-ripple-upgraded--unbounded"
}, gh = {
  VAR_FG_SCALE: "--mdc-ripple-fg-scale",
  VAR_FG_SIZE: "--mdc-ripple-fg-size",
  VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
  VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
  VAR_LEFT: "--mdc-ripple-left",
  VAR_TOP: "--mdc-ripple-top"
}, Gl = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, ts;
function mh(n, e) {
  e === void 0 && (e = !1);
  var t = n.CSS, r = ts;
  if (typeof ts == "boolean" && !e)
    return ts;
  var i = t && typeof t.supports == "function";
  if (!i)
    return !1;
  var a = t.supports("--css-vars", "yes"), s = t.supports("(--css-vars: yes)") && t.supports("color", "#00000000");
  return r = a || s, e || (ts = r), r;
}
function ph(n, e, t) {
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
var Vl = [
  "touchstart",
  "pointerdown",
  "mousedown",
  "keydown"
], ql = [
  "touchend",
  "pointerup",
  "mouseup",
  "contextmenu"
], ns = [], _h = (
  /** @class */
  function(n) {
    vn(e, n);
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
        return vh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return gh;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return Gl;
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
          for (var a = Bn(Vl), s = a.next(); !s.done; s = a.next()) {
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
          for (var a = Bn(ql), s = a.next(); !s.done; s = a.next()) {
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
        for (var i = Bn(Vl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Bn(ql), a = i.next(); !a.done; a = i.next()) {
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
            var d = t !== void 0 && ns.length > 0 && ns.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (d) {
              this.resetActivationState();
              return;
            }
            t !== void 0 && (ns.push(t.target), this.registerDeactivationHandlers(t)), i.wasElementMadeActive = this.checkElementMadeActive(t), i.wasElementMadeActive && this.animateActivation(), requestAnimationFrame(function() {
              ns = [], !i.wasElementMadeActive && t !== void 0 && (t.key === " " || t.keyCode === 32) && (i.wasElementMadeActive = r.checkElementMadeActive(t), i.wasElementMadeActive && r.animateActivation()), i.wasElementMadeActive || (r.activationState = r.defaultActivationState());
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
      i ? a = ph(r, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect()) : a = {
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
      }, Gl.FG_DEACTIVATION_MS));
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
}, Ih = {
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
}, Wl = {
  LABEL_SCALE: 0.75
}, bh = [
  "pattern",
  "min",
  "max",
  "required",
  "step",
  "minlength",
  "maxlength"
], yh = [
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
var zl = ["mousedown", "touchstart"], jl = ["click", "keydown"], Ch = (
  /** @class */
  function(n) {
    vn(e, n);
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
        return Ih;
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
        return Wl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "shouldAlwaysFloat", {
      get: function() {
        var t = this.getNativeInput().type;
        return yh.indexOf(t) >= 0;
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
        for (var s = Bn(zl), d = s.next(); !d.done; d = s.next()) {
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
        for (var c = Bn(jl), u = c.next(); !u.done; u = c.next()) {
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
        for (var s = Bn(zl), d = s.next(); !d.done; d = s.next()) {
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
        for (var c = Bn(jl), u = c.next(); !u.done; u = c.next()) {
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
        return bh.indexOf(i) > -1 ? (r.styleValidity(!0), r.adapter.setLabelRequired(r.getNativeInput().required), !0) : !1;
      }), t.indexOf("maxlength") > -1 && this.setcharacterCounter(this.getValue().length);
    }, e.prototype.notchOutline = function(t) {
      if (!(!this.adapter.hasOutline() || !this.adapter.hasLabel()))
        if (t) {
          var r = this.adapter.getLabelWidth() * Wl.LABEL_SCALE;
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
var Ah = (
  /** @class */
  function(n) {
    vn(e, n);
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
var Zl = {
  ICON_EVENT: "MDCTextField:icon",
  ICON_ROLE: "button"
}, Eh = {
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
var Xl = ["click", "keydown"], Sh = (
  /** @class */
  function(n) {
    vn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.savedTabIndex = null, r.interactionHandler = function(i) {
        r.handleInteraction(i);
      }, r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Zl;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return Eh;
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
        for (var i = Bn(Xl), a = i.next(); !a.done; a = i.next()) {
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
        for (var i = Bn(Xl), a = i.next(); !a.done; a = i.next()) {
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
      this.savedTabIndex && (t ? (this.adapter.setAttr("tabindex", "-1"), this.adapter.removeAttr("role")) : (this.adapter.setAttr("tabindex", this.savedTabIndex), this.adapter.setAttr("role", Zl.ICON_ROLE)));
    }, e.prototype.setAriaLabel = function(t) {
      this.adapter.setAttr("aria-label", t);
    }, e.prototype.setContent = function(t) {
      this.adapter.setContent(t);
    }, e.prototype.handleInteraction = function(t) {
      var r = t.key === "Enter" || t.keyCode === 13;
      (t.type === "click" || r) && (t.preventDefault(), this.adapter.notifyIconAction());
    }, e;
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
var ho = "mdc-dom-focus-sentinel", xh = (
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
const wh = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FocusTrap: xh
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
}, tn = /* @__PURE__ */ new Map();
tn.set(mn.BACKSPACE, ke.BACKSPACE);
tn.set(mn.ENTER, ke.ENTER);
tn.set(mn.SPACEBAR, ke.SPACEBAR);
tn.set(mn.PAGE_UP, ke.PAGE_UP);
tn.set(mn.PAGE_DOWN, ke.PAGE_DOWN);
tn.set(mn.END, ke.END);
tn.set(mn.HOME, ke.HOME);
tn.set(mn.ARROW_LEFT, ke.ARROW_LEFT);
tn.set(mn.ARROW_UP, ke.ARROW_UP);
tn.set(mn.ARROW_RIGHT, ke.ARROW_RIGHT);
tn.set(mn.ARROW_DOWN, ke.ARROW_DOWN);
tn.set(mn.DELETE, ke.DELETE);
tn.set(mn.ESCAPE, ke.ESCAPE);
tn.set(mn.TAB, ke.TAB);
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
function Ge(n) {
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
function Ra(n, e) {
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
function ne(n, e) {
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
function Kl(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "on", 3, !1), a = p(e, "component", 3, Wa), s = p(e, "tag", 3, "i"), d = /* @__PURE__ */ ze(e, [
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
  const c = /* @__PURE__ */ Q(() => s() === "svg" || a() === Lh), u = ye("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = ie(), g = Y(v);
  {
    let m = /* @__PURE__ */ Q(() => Ge({
      "mdc-button__icon": u === "button",
      "mdc-fab__icon": u === "fab",
      "mdc-icon-button__icon": u === "icon-button",
      "mdc-icon-button__icon--on": u === "icon-button" && i(),
      "mdc-tab__icon": u === "tab",
      "mdc-banner__icon": u === "banner",
      "mdc-segmented-button__icon": u === "segmented-button",
      [r()]: !0
    }));
    ua(g, a, (_, b) => {
      we(
        b(_, $e(
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
            children: (A, E) => {
              var y = ie(), T = Y(y);
              pe(T, () => e.children ?? ve), x(A, y);
            },
            $$slots: { default: !0 }
          }
        )),
        (A) => l = A,
        () => l
      );
    });
  }
  return x(n, v), Ie(f);
}
var Th = /* @__PURE__ */ ht("<svg><!></svg>");
function Wa(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "tag", 3, "div"), i = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ Q(() => [
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
  var l = { getElement: d }, c = ie(), u = Y(c);
  {
    var h = (v) => {
      var g = Th();
      qe(g, () => ({ ...i }));
      var m = N(g);
      pe(m, () => e.children ?? ve), we(g, (_) => s = _, () => s), Me(g, (_, b) => ne == null ? void 0 : ne(_, b), t), x(v, g);
    }, f = (v) => {
      var g = ie(), m = Y(g);
      {
        var _ = (A) => {
          var E = ie(), y = Y(E);
          Ro(y, r, !1, (T, C) => {
            we(T, (w) => s = w, () => s), Me(T, (w, I) => ne == null ? void 0 : ne(w, I), t), qe(T, () => ({ ...i }));
          }), x(A, E);
        }, b = (A) => {
          var E = ie(), y = Y(E);
          Ro(y, r, !1, (T, C) => {
            we(T, (S) => s = S, () => s), Me(T, (S, L) => ne == null ? void 0 : ne(S, L), t), qe(T, () => ({ ...i }));
            var w = ie(), I = Y(w);
            pe(I, () => e.children ?? ve), x(C, w);
          }), x(A, E);
        };
        te(
          m,
          (A) => {
            o(a) ? A(_) : A(b, !1);
          },
          !0
        );
      }
      x(v, g);
    };
    te(u, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return x(n, c), Ie(l);
}
var Dh = /* @__PURE__ */ ht("<svg><!></svg>");
function Lh(n, e) {
  _e(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let t = p(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, d = Dh();
  qe(d, () => ({ ...r }));
  var l = N(d);
  return pe(l, () => e.children ?? ve), we(d, (c) => i = c, () => i), Me(d, (c, u) => ne == null ? void 0 : ne(c, u), t), x(n, d), Ie(s);
}
function rs(n, e) {
  _e(e, !0);
  const [t, r] = Ti(), i = ar(e.value);
  oe(e.key, i), xe(() => {
    rr(i, e.value);
  }), Mn(() => {
    i.set(void 0);
  });
  var a = ie(), s = Y(a);
  pe(s, () => e.children ?? ve), x(n, a), Ie(), r();
}
const { applyPassive: Yl } = mu, { matches: Oh } = qa;
function Fn(n, { ripple: e = !0, surface: t = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: d, eventTarget: l, activeTarget: c, addClass: u = (g) => n.classList.add(g), removeClass: h = (g) => n.classList.remove(g), addStyle: f = (g, m) => n.style.setProperty(g, m), initPromise: v = Promise.resolve() } = {}) {
  let g, m = new ca(), _ = ye("SMUI:addLayoutListener"), b, A = s, E = l, y = c;
  function T() {
    t ? (u("mdc-ripple-surface"), a === "primary" ? (u("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), u("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), g && A !== s && (A = s, s ? g.activate() : s === !1 && g.deactivate()), e && !g ? (g = new _h({
      addClass: u,
      browserSupportsCssVars: () => mh(window),
      computeBoundingRect: () => (d || n).getBoundingClientRect(),
      containsEventTarget: (w) => n.contains(w),
      deregisterDocumentInteractionHandler: (w, I) => m.off(document.documentElement, w, I),
      deregisterInteractionHandler: (w, I) => m.off(l || n, w, I),
      deregisterResizeHandler: (w) => window.removeEventListener("resize", w),
      getWindowPageOffset: () => {
        var w, I;
        return {
          x: (w = window.pageXOffset) !== null && w !== void 0 ? w : window.scrollX,
          y: (I = window.pageYOffset) !== null && I !== void 0 ? I : window.scrollY
        };
      },
      isSurfaceActive: () => s ?? Oh(c || n, ":active"),
      isSurfaceDisabled: () => !!i,
      isUnbounded: () => !!r,
      registerDocumentInteractionHandler: (w, I) => {
        const S = Yl();
        m.on(document.documentElement, w, I, typeof S == "boolean" ? { capture: S } : S);
      },
      registerInteractionHandler: (w, I) => {
        const S = Yl();
        m.on(l || n, w, I, typeof S == "boolean" ? { capture: S } : S);
      },
      registerResizeHandler: (w) => m.on(window, "resize", w),
      removeClass: h,
      updateCssVariable: f
    }), v.then(() => {
      g && (g.init(), g.setUnbounded(r));
    })) : g && !e && v.then(() => {
      g && (g.destroy(), g = void 0, m.clear());
    }), g && (E !== l || y !== c) && (E = l, y = c, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !e && r && u("mdc-ripple-upgraded--unbounded");
  }
  T(), _ && (b = _(C));
  function C() {
    g && g.layout();
  }
  return {
    update(w) {
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
      } = Object.assign({ ripple: !0, surface: !1, unbounded: !1, disabled: !1, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (I) => n.classList.add(I), removeClass: (I) => n.classList.remove(I), addStyle: (I, S) => n.style.setProperty(I, S), initPromise: Promise.resolve() }, w)), T();
    },
    destroy() {
      g && (g.destroy(), g = void 0, m.clear(), h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), b && b();
    }
  };
}
var Rh = /* @__PURE__ */ j("<span><!></span>"), Mh = /* @__PURE__ */ j("<label><!></label>");
function Cs(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "floatAbove", 15, !1), s = p(e, "required", 15, !1), d = p(e, "wrapped", 3, !1), l = /* @__PURE__ */ ze(e, [
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
  ]), c, u = /* @__PURE__ */ se(void 0), h = new ca(), f = Ee({}), v = Ee({}), g = ye("SMUI:generic:input:props") ?? {}, m = a();
  xe(() => {
    o(u) && m !== a() && (m = a(), o(u).float(a()));
  });
  let _ = s();
  xe(() => {
    o(u) && _ !== s() && (_ = s(), o(u).setRequired(s()));
  });
  const b = ye("SMUI:floating-label:mount"), A = ye("SMUI:floating-label:unmount");
  rt(() => {
    V(
      u,
      new dh({
        addClass: E,
        removeClass: y,
        getWidth: () => {
          var ee, ce;
          const X = k(), le = X.cloneNode(!0);
          (ee = X.parentNode) == null || ee.appendChild(le), le.classList.add("smui-floating-label--remove-transition"), le.classList.add("smui-floating-label--force-size"), le.classList.remove("mdc-floating-label--float-above");
          const P = le.scrollWidth;
          return (ce = X.parentNode) == null || ce.removeChild(le), P;
        },
        registerInteractionHandler: (X, le) => h.on(k(), X, le),
        deregisterInteractionHandler: (X, le) => h.off(k(), X, le)
      }),
      !0
    );
    const M = {
      get element() {
        return k();
      },
      addStyle: T,
      removeStyle: C
    };
    return b && b(M), o(u).init(), () => {
      var X;
      A && A(M), (X = o(u)) == null || X.destroy(), h.clear();
    };
  });
  function E(M) {
    f[M] || (f[M] = !0);
  }
  function y(M) {
    (!(M in f) || f[M]) && (f[M] = !1);
  }
  function T(M, X) {
    v[M] != X && (X === "" || X == null ? delete v[M] : v[M] = X);
  }
  function C(M) {
    M in v && delete v[M];
  }
  function w(M) {
    var X;
    (X = o(u)) == null || X.shake(M);
  }
  function I(M) {
    a(M);
  }
  function S(M) {
    s(M);
  }
  function L() {
    if (o(u) == null)
      throw new Error("Instance is undefined.");
    return o(u).getWidth();
  }
  function k() {
    return c;
  }
  var D = { shake: w, float: I, setRequired: S, getWidth: L, getElement: k }, O = ie(), Z = Y(O);
  {
    var G = (M) => {
      var X = Rh();
      qe(X, (P, ee) => ({ class: P, style: ee, ...l }), [
        () => Ge({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([P, ee]) => `${P}: ${ee};`).concat([i()]).join(" ")
      ]);
      var le = N(X);
      pe(le, () => e.children ?? ve), we(X, (P) => c = P, () => c), Me(X, (P, ee) => ne == null ? void 0 : ne(P, ee), t), x(M, X);
    }, B = (M) => {
      var X = Mh();
      qe(
        X,
        (P, ee) => ({
          class: P,
          style: ee,
          for: e.for || (g ? g.id : void 0),
          ...l
        }),
        [
          () => Ge({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(v).map(([P, ee]) => `${P}: ${ee};`).concat([i()]).join(" ")
        ]
      );
      var le = N(X);
      pe(le, () => e.children ?? ve), we(X, (P) => c = P, () => c), Me(X, (P, ee) => ne == null ? void 0 : ne(P, ee), t), x(M, X);
    };
    te(Z, (M) => {
      d() ? M(G) : M(B, !1);
    });
  }
  return x(n, O), Ie(D);
}
var Ph = /* @__PURE__ */ j("<div></div>");
function _u(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "active", 3, !1), s = /* @__PURE__ */ ze(e, [
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
    new uh({
      addClass: v,
      removeClass: g,
      hasClass: f,
      setStyle: m,
      registerEventHandler: (C, w) => c.on(E(), C, w),
      deregisterEventHandler: (C, w) => c.off(E(), C, w)
    }),
    !0
  ), o(l).init(), () => {
    var C;
    (C = o(l)) == null || C.destroy(), c.clear();
  }));
  function f(C) {
    return C in u ? u[C] : E().classList.contains(C);
  }
  function v(C) {
    u[C] || (u[C] = !0);
  }
  function g(C) {
    (!(C in u) || u[C]) && (u[C] = !1);
  }
  function m(C, w) {
    h[C] != w && (w === "" || w == null ? delete h[C] : h[C] = w);
  }
  function _() {
    var C;
    (C = o(l)) == null || C.activate();
  }
  function b() {
    var C;
    (C = o(l)) == null || C.deactivate();
  }
  function A(C) {
    var w;
    (w = o(l)) == null || w.setRippleCenter(C);
  }
  function E() {
    return d;
  }
  var y = { activate: _, deactivate: b, setRippleCenter: A, getElement: E }, T = Ph();
  return qe(T, (C, w) => ({ class: C, style: w, ...s }), [
    () => Ge({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...u,
      [r()]: !0
    }),
    () => Object.entries(h).map(([C, w]) => `${C}: ${w};`).concat([i()]).join(" ")
  ]), we(T, (C) => d = C, () => d), Me(T, (C, w) => ne == null ? void 0 : ne(C, w), t), x(n, T), Ie(y);
}
var kh = /* @__PURE__ */ j('<div class="mdc-notched-outline__notch"><!></div>'), Fh = /* @__PURE__ */ j('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Iu(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "notched", 3, !1), a = p(e, "noLabel", 3, !1), s = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), d, l = /* @__PURE__ */ se(void 0), c = /* @__PURE__ */ se(void 0), u = Ee({}), h = Ee({}), f;
  xe(() => {
    o(c) !== f && (o(c) ? (o(c).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(c) && o(c).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), f = o(c));
  }), oe("SMUI:floating-label:mount", (I) => {
    V(c, I, !0);
  }), oe("SMUI:floating-label:unmount", () => {
    V(c, void 0);
  }), rt(() => (V(
    l,
    new hh({
      addClass: v,
      removeClass: g,
      setNotchWidthProperty: (I) => m("width", I + "px"),
      removeNotchWidthProperty: () => _("width")
    }),
    !0
  ), o(l).init(), () => {
    var I;
    (I = o(l)) == null || I.destroy();
  }));
  function v(I) {
    u[I] || (u[I] = !0);
  }
  function g(I) {
    (!(I in u) || u[I]) && (u[I] = !1);
  }
  function m(I, S) {
    h[I] != S && (S === "" || S == null ? delete h[I] : h[I] = S);
  }
  function _(I) {
    I in h && delete h[I];
  }
  function b(I) {
    var S;
    (S = o(l)) == null || S.notch(I);
  }
  function A() {
    var I;
    (I = o(l)) == null || I.closeNotch();
  }
  function E() {
    return d;
  }
  var y = { notch: b, closeNotch: A, getElement: E }, T = Fh();
  qe(T, (I) => ({ class: I, ...s }), [
    () => Ge({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...u,
      [r()]: !0
    })
  ]);
  var C = z(N(T), 2);
  {
    var w = (I) => {
      var S = kh(), L = N(S);
      pe(L, () => e.children ?? ve), ue((k) => nt(S, k), [
        () => Object.entries(h).map(([k, D]) => `${k}: ${D};`).join(" ")
      ]), x(I, S);
    };
    te(C, (I) => {
      a() || I(w);
    });
  }
  return we(T, (I) => d = I, () => d), Me(T, (I, S) => ne == null ? void 0 : ne(I, S), t), x(n, T), Ie(y);
}
function fa(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "component", 3, Wa), a = p(e, "tag", 3, "div"), s = p(e, "_smuiClass", 3, ""), d = p(e, "_smuiClassMap", 23, () => ({})), l = p(e, "_smuiContexts", 19, () => ({})), c = p(e, "_smuiProps", 19, () => ({})), u = /* @__PURE__ */ ze(e, [
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
  Object.entries(d()).forEach(([b, A]) => {
    const E = ye(A);
    E && "subscribe" in E && f.push(E.subscribe((y) => {
      d()[b] = y;
    }));
  });
  for (let b in l())
    l().hasOwnProperty(b) && oe(b, l()[b]);
  Mn(() => {
    for (const b of f)
      b();
  });
  function v() {
    return h.getElement();
  }
  var g = { getElement: v }, m = ie(), _ = Y(m);
  {
    let b = /* @__PURE__ */ Q(() => Ge({
      [s()]: !0,
      ...d(),
      [r()]: !0
    }));
    ua(_, i, (A, E) => {
      we(
        E(A, $e(
          {
            get tag() {
              return a();
            },
            get use() {
              return t();
            },
            get class() {
              return o(b);
            }
          },
          c,
          () => u,
          {
            children: (y, T) => {
              var C = ie(), w = Y(C);
              pe(w, () => e.children ?? ve), x(y, C);
            },
            $$slots: { default: !0 }
          }
        )),
        (y) => h = y,
        () => h
      );
    });
  }
  return x(n, m), Ie(g);
}
function Nh(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    fa(n, $e({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, d) => {
        var l = ie(), c = Y(l);
        pe(c, () => e.children ?? ve), x(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ie(a);
}
function Uh(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    fa(n, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, d) => {
          var l = ie(), c = Y(l);
          pe(c, () => e.children ?? ve), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ie(a);
}
function Hh(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    fa(n, $e(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, d) => {
          var l = ie(), c = Y(l);
          pe(c, () => e.children ?? ve), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ie(a);
}
var Bh = /* @__PURE__ */ j("<input/>");
function Gh(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "type", 3, "text"), a = p(e, "placeholder", 3, " "), s = p(e, "value", 15), d = p(e, "files", 15, null), l = p(e, "dirty", 15, !1), c = p(e, "invalid", 15, !1), u = p(e, "updateInvalid", 3, !0), h = p(e, "initialInvalid", 3, !1), f = p(e, "emptyValueNull", 19, () => s() === null), v = p(e, "emptyValueUndefined", 19, () => s() === void 0), g = /* @__PURE__ */ ze(e, [
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
  ]), m, _ = Ee({}), b = Ee({});
  xe(() => {
    i() === "file" ? delete b.value : b.value = s() == null ? "" : s();
  }), rt(() => {
    u() && h() && c(L().matches(":invalid"));
  });
  function A(G) {
    return G === "" ? Number.NaN : +G;
  }
  function E(G) {
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
        s(A(G.currentTarget.value));
        break;
      default:
        s(G.currentTarget.value);
        break;
    }
  }
  function y(G) {
    (i() === "file" || i() === "range") && E(G), l(!0), u() && c(L().matches(":invalid"));
  }
  function T(G) {
    return G in _ ? _[G] ?? null : L().getAttribute(G);
  }
  function C(G, B) {
    _[G] !== B && (_[G] = B);
  }
  function w(G) {
    (!(G in _) || _[G] != null) && (_[G] = void 0);
  }
  function I() {
    L().focus();
  }
  function S() {
    L().blur();
  }
  function L() {
    return m;
  }
  var k = { getAttr: T, addAttr: C, removeAttr: w, focus: I, blur: S, getElement: L }, D = Bh(), O = (G) => {
    var B;
    i() !== "file" && E(G), (B = e.oninput) == null || B.call(e, G);
  }, Z = (G) => {
    var B;
    y(G), (B = e.onchange) == null || B.call(e, G);
  };
  return qe(
    D,
    (G) => ({
      class: G,
      type: i(),
      placeholder: a(),
      ...b,
      ..._,
      ...g,
      oninput: O,
      onchange: Z
    }),
    [
      () => Ge({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), we(D, (G) => m = G, () => m), Me(D, (G, B) => ne == null ? void 0 : ne(G, B), t), x(n, D), Ie(k);
}
var Vh = /* @__PURE__ */ j("<textarea></textarea>");
function qh(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "value", 15, ""), s = p(e, "dirty", 15, !1), d = p(e, "invalid", 15, !1), l = p(e, "updateInvalid", 3, !0), c = p(e, "initialInvalid", 3, !1), u = p(e, "resizable", 3, !0), h = /* @__PURE__ */ ze(e, [
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
  function m(I) {
    return I in v ? v[I] ?? null : y().getAttribute(I);
  }
  function _(I, S) {
    v[I] !== S && (v[I] = S);
  }
  function b(I) {
    (!(I in v) || v[I] != null) && (v[I] = void 0);
  }
  function A() {
    y().focus();
  }
  function E() {
    y().blur();
  }
  function y() {
    return f;
  }
  var T = { getAttr: m, addAttr: _, removeAttr: b, focus: A, blur: E, getElement: y }, C = Vh(), w = (I) => {
    var S;
    g(), (S = e.onchange) == null || S.call(e, I);
  };
  return qe(
    C,
    (I) => ({
      class: I,
      style: `${u() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: w
    }),
    [
      () => Ge({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), we(C, (I) => f = I, () => f), Me(C, (I, S) => ne == null ? void 0 : ne(I, S), t), da(() => Xf(C, a)), x(n, C), Ie(T);
}
var Wh = /* @__PURE__ */ j('<span class="mdc-text-field__ripple"></span>'), zh = /* @__PURE__ */ j("<!> <!>", 1), jh = /* @__PURE__ */ j("<span><!> <!></span>"), Zh = /* @__PURE__ */ j("<!> <!> <!>", 1), Xh = /* @__PURE__ */ j("<label><!> <!> <!> <!> <!> <!> <!></label>"), Kh = /* @__PURE__ */ j("<div><!> <!> <!> <!> <!></div>"), Yh = /* @__PURE__ */ j("<!> <!>", 1);
function Gn(n, e) {
  _e(e, !0);
  const { applyPassive: t } = mu;
  let r = () => {
  };
  function i(F) {
    return F === r;
  }
  let a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), d = p(e, "style", 3, ""), l = p(e, "ripple", 3, !0), c = p(e, "disabled", 3, !1), u = p(e, "required", 3, !1), h = p(e, "textarea", 3, !1), f = p(e, "variant", 19, () => h() ? "outlined" : "standard"), v = p(e, "noLabel", 3, !1), g = p(e, "type", 3, "text"), m = p(e, "value", 15), _ = p(e, "files", 15, r), b = p(e, "invalid", 15, r), A = p(e, "updateInvalid", 19, () => i(b())), E = p(e, "initialInvalid", 3, !1), y = p(e, "dirty", 15, !1), T = p(e, "validateOnValueChange", 19, A), C = p(e, "useNativeValidation", 19, A), w = p(e, "withLeadingIcon", 3, r), I = p(e, "withTrailingIcon", 3, r), S = p(e, "input", 7), L = p(e, "floatingLabel", 7), k = p(e, "lineRipple", 7), D = p(e, "notchedOutline", 7), O = /* @__PURE__ */ ze(e, [
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
  const Z = m() !== void 0 || m() === void 0 && e.input$emptyValueUndefined || !i(_());
  i(_()) && _(null), i(b()) && b(!1);
  let G, B = /* @__PURE__ */ se(void 0), M = new ca(), X = Ee({}), le = Ee({}), P = /* @__PURE__ */ se(void 0), ee = /* @__PURE__ */ se(!1), ce = /* @__PURE__ */ se(Ee(E())), Se = ye("SMUI:addLayoutListener"), be, de, Ce = new Promise((F) => de = F), q, ge, re, W;
  const J = /* @__PURE__ */ Q(() => S() && S().getElement());
  xe(() => {
    (y() || o(ce) || !A()) && o(B) && o(B).isValid() !== !b() && (A() ? b(!o(B).isValid()) : o(B).setValid(!b()));
  }), xe(() => {
    o(B) && o(B).getValidateOnValueChange() !== T() && o(B).setValidateOnValueChange(i(T()) ? !1 : T());
  }), xe(() => {
    o(B) && o(B).setUseNativeValidation(i(C()) ? !0 : C());
  }), xe(() => {
    o(B) && o(B).setDisabled(c());
  });
  let he = m();
  xe(() => {
    if (o(B) && Z && he !== m()) {
      he = m();
      const F = `${m() == null ? "" : m()}`;
      o(B).getValue() !== F && o(B).setValue(F);
    }
  }), Se && (be = Se(H)), oe("SMUI:textfield:leading-icon:mount", (F) => {
    q = F;
  }), oe("SMUI:textfield:leading-icon:unmount", () => {
    q = void 0;
  }), oe("SMUI:textfield:trailing-icon:mount", (F) => {
    ge = F;
  }), oe("SMUI:textfield:trailing-icon:unmount", () => {
    ge = void 0;
  }), oe("SMUI:textfield:helper-text:id", (F) => {
    V(P, F, !0);
  }), oe("SMUI:textfield:helper-text:mount", (F) => {
    re = F;
  }), oe("SMUI:textfield:helper-text:unmount", () => {
    V(P, void 0), re = void 0;
  }), oe("SMUI:textfield:character-counter:mount", (F) => {
    W = F;
  }), oe("SMUI:textfield:character-counter:unmount", () => {
    W = void 0;
  }), rt(() => {
    var F;
    if (V(
      B,
      new Ch(
        {
          // getRootAdapterMethods_
          addClass: De,
          removeClass: Le,
          hasClass: Te,
          registerTextFieldInteractionHandler: ($, Re) => M.on(K(), $, Re),
          deregisterTextFieldInteractionHandler: ($, Re) => M.off(K(), $, Re),
          registerValidationAttributeChangeHandler: ($) => {
            const Re = (Nt) => Nt.map((an) => an.attributeName).filter((an) => an), lt = new MutationObserver((Nt) => {
              C() && $(Re(Nt));
            }), pt = { attributes: !0 };
            return S() && lt.observe(S().getElement(), pt), lt;
          },
          deregisterValidationAttributeChangeHandler: ($) => {
            $.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var $;
            return (($ = S()) == null ? void 0 : $.getElement()) ?? null;
          },
          setInputAttr: ($, Re) => {
            var lt;
            (lt = S()) == null || lt.addAttr($, Re);
          },
          removeInputAttr: ($) => {
            var Re;
            (Re = S()) == null || Re.removeAttr($);
          },
          isFocused: () => {
            var $;
            return document.activeElement === (($ = S()) == null ? void 0 : $.getElement());
          },
          registerInputInteractionHandler: ($, Re) => {
            var pt;
            const lt = (pt = S()) == null ? void 0 : pt.getElement();
            if (lt) {
              const Nt = t();
              M.on(lt, $, Re, typeof Nt == "boolean" ? { capture: Nt } : Nt);
            }
          },
          deregisterInputInteractionHandler: ($, Re) => {
            var pt;
            const lt = (pt = S()) == null ? void 0 : pt.getElement();
            lt && M.off(lt, $, Re);
          },
          // getLabelAdapterMethods_
          floatLabel: ($) => L() && L().float($),
          getLabelWidth: () => L() ? L().getWidth() : 0,
          hasLabel: () => !!L(),
          shakeLabel: ($) => L() && L().shake($),
          setLabelRequired: ($) => L() && L().setRequired($),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => k() && k().activate(),
          deactivateLineRipple: () => k() && k().deactivate(),
          setLineRippleTransformOrigin: ($) => k() && k().setRippleCenter($),
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
            return ge;
          }
        }
      ),
      !0
    ), Z) {
      if (S() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (F = o(B)) == null || F.init();
    } else
      nu().then(() => {
        var $;
        if (S() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        ($ = o(B)) == null || $.init();
      });
    return de(), () => {
      var $;
      ($ = o(B)) == null || $.destroy(), M.clear();
    };
  }), Mn(() => {
    be && be();
  });
  function Te(F) {
    return F in X ? X[F] ?? null : K().classList.contains(F);
  }
  function De(F) {
    X[F] || (X[F] = !0);
  }
  function Le(F) {
    (!(F in X) || X[F]) && (X[F] = !1);
  }
  function et(F, $) {
    le[F] != $ && ($ === "" || $ == null ? delete le[F] : le[F] = $);
  }
  function Ft() {
    var F;
    (F = S()) == null || F.focus();
  }
  function nn() {
    var F;
    (F = S()) == null || F.blur();
  }
  function H() {
    if (o(B)) {
      const F = o(B).shouldFloat;
      o(B).notchOutline(F);
    }
  }
  function K() {
    return G;
  }
  var Ae = { focus: Ft, blur: nn, layout: H, getElement: K }, Be = Yh(), rn = Y(Be);
  {
    var pn = (F) => {
      var $ = Xh();
      qe($, (Ve, it, Ye) => ({ class: Ve, style: it, for: void 0, ...Ye }), [
        () => Ge({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": o(ee) || m() != null && m() !== "",
          "mdc-text-field--with-leading-icon": i(w()) ? e.leadingIcon : w(),
          "mdc-text-field--with-trailing-icon": i(I()) ? e.trailingIcon : I(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": b(),
          ...X,
          [s()]: !0
        }),
        () => Object.entries(le).map(([Ve, it]) => `${Ve}: ${it};`).concat([d()]).join(" "),
        () => Ra(O, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Re = N($);
      {
        var lt = (Ve) => {
          var it = zh(), Ye = Y(it);
          {
            var Ht = (bt) => {
              var Ot = Wh();
              x(bt, Ot);
            };
            te(Ye, (bt) => {
              f() === "filled" && bt(Ht);
            });
          }
          var Pn = z(Ye, 2);
          {
            var at = (bt) => {
              {
                let Ot = /* @__PURE__ */ Q(() => o(ee) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), Ke = /* @__PURE__ */ Q(() => ut(O, "label$"));
                we(
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
                        var yn = ie(), yt = Y(yn);
                        {
                          var Bt = (Zt) => {
                          }, Cn = (Zt) => {
                            var Qr = ie(), An = Y(Qr);
                            {
                              var Dr = (En) => {
                                var cr = He();
                                ue(() => Pe(cr, e.label)), x(En, cr);
                              }, ha = (En) => {
                                var cr = ie(), jn = Y(cr);
                                pe(jn, () => e.label), x(En, cr);
                              };
                              te(
                                An,
                                (En) => {
                                  typeof e.label == "string" ? En(Dr) : En(ha, !1);
                                },
                                !0
                              );
                            }
                            x(Zt, Qr);
                          };
                          te(yt, (Zt) => {
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
            te(Pn, (bt) => {
              !v() && e.label != null && bt(at);
            });
          }
          x(Ve, it);
        };
        te(Re, (Ve) => {
          !h() && f() !== "outlined" && Ve(lt);
        });
      }
      var pt = z(Re, 2);
      {
        var Nt = (Ve) => {
          {
            let it = /* @__PURE__ */ Q(() => v() || e.label == null), Ye = /* @__PURE__ */ Q(() => ut(O, "outline$"));
            we(
              Iu(Ve, $e(
                {
                  get noLabel() {
                    return o(it);
                  }
                },
                () => o(Ye),
                {
                  children: (Ht, Pn) => {
                    var at = ie(), bt = Y(at);
                    {
                      var Ot = (Ke) => {
                        {
                          let Rt = /* @__PURE__ */ Q(() => o(ee) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), ur = /* @__PURE__ */ Q(() => ut(O, "label$"));
                          we(
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
                                  var Bt = ie(), Cn = Y(Bt);
                                  {
                                    var Zt = (An) => {
                                    }, Qr = (An) => {
                                      var Dr = ie(), ha = Y(Dr);
                                      {
                                        var En = (jn) => {
                                          var $r = He();
                                          ue(() => Pe($r, e.label)), x(jn, $r);
                                        }, cr = (jn) => {
                                          var $r = ie(), no = Y($r);
                                          pe(no, () => e.label), x(jn, $r);
                                        };
                                        te(
                                          ha,
                                          (jn) => {
                                            typeof e.label == "string" ? jn(En) : jn(cr, !1);
                                          },
                                          !0
                                        );
                                      }
                                      x(An, Dr);
                                    };
                                    te(Cn, (An) => {
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
                      te(bt, (Ke) => {
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
        te(pt, (Ve) => {
          (h() || f() === "outlined") && Ve(Nt);
        });
      }
      var an = z(pt, 2);
      rs(an, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (Ve, it) => {
          var Ye = ie(), Ht = Y(Ye);
          pe(Ht, () => e.leadingIcon ?? ve), x(Ve, Ye);
        },
        $$slots: { default: !0 }
      });
      var Di = z(an, 2);
      pe(Di, () => e.children ?? ve);
      var ct = z(Di, 2);
      {
        var Ut = (Ve) => {
          var it = jh(), Ye = N(it);
          {
            let Pn = /* @__PURE__ */ Q(() => ut(O, "input$"));
            we(
              qh(Ye, $e(
                {
                  get disabled() {
                    return c();
                  },
                  get required() {
                    return u();
                  },
                  get updateInvalid() {
                    return A();
                  },
                  get initialInvalid() {
                    return o(ce);
                  },
                  get "aria-controls"() {
                    return o(P);
                  },
                  get "aria-describedby"() {
                    return o(P);
                  }
                },
                () => o(Pn),
                {
                  onblur: (at) => {
                    var bt;
                    V(ee, !1), V(ce, !0), je(K(), "blur", at), (bt = e.input$onblur) == null || bt.call(e, at);
                  },
                  onfocus: (at) => {
                    var bt;
                    V(ee, !0), je(K(), "focus", at), (bt = e.input$onfocus) == null || bt.call(e, at);
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
                    return b();
                  },
                  set invalid(at) {
                    b(at);
                  }
                }
              )),
              (at) => S(at),
              () => S()
            );
          }
          var Ht = z(Ye, 2);
          pe(Ht, () => e.internalCounter ?? ve), ue((Pn) => Sr(it, 1, Pn), [
            () => uu(Ge({
              "mdc-text-field__resizer": !("input$resizable" in O) || e.input$resizable
            }))
          ]), x(Ve, it);
        }, sn = (Ve) => {
          var it = Zh(), Ye = Y(it);
          {
            var Ht = (Ot) => {
              var Ke = ie(), Rt = Y(Ke);
              {
                var ur = (yt) => {
                  Uh(yt, {
                    children: (Bt, Cn) => {
                      var Zt = He();
                      ue(() => Pe(Zt, e.prefix)), x(Bt, Zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, yn = (yt) => {
                  var Bt = ie(), Cn = Y(Bt);
                  pe(Cn, () => e.prefix ?? ve), x(yt, Bt);
                };
                te(Rt, (yt) => {
                  typeof e.prefix == "string" ? yt(ur) : yt(yn, !1);
                });
              }
              x(Ot, Ke);
            };
            te(Ye, (Ot) => {
              e.prefix != null && Ot(Ht);
            });
          }
          var Pn = z(Ye, 2);
          {
            let Ot = /* @__PURE__ */ Q(() => ut(O, "input$"));
            we(
              Gh(Pn, $e(
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
                    return A();
                  },
                  get initialInvalid() {
                    return o(ce);
                  },
                  get "aria-controls"() {
                    return o(P);
                  },
                  get "aria-describedby"() {
                    return o(P);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Ot),
                {
                  onblur: (Ke) => {
                    var Rt;
                    V(ee, !1), V(ce, !0), je(K(), "blur", Ke), (Rt = e.input$onblur) == null || Rt.call(e, Ke);
                  },
                  onfocus: (Ke) => {
                    var Rt;
                    V(ee, !0), je(K(), "focus", Ke), (Rt = e.input$onfocus) == null || Rt.call(e, Ke);
                  },
                  get value() {
                    return m();
                  },
                  set value(Ke) {
                    m(Ke);
                  },
                  get files() {
                    return _();
                  },
                  set files(Ke) {
                    _(Ke);
                  },
                  get dirty() {
                    return y();
                  },
                  set dirty(Ke) {
                    y(Ke);
                  },
                  get invalid() {
                    return b();
                  },
                  set invalid(Ke) {
                    b(Ke);
                  }
                }
              )),
              (Ke) => S(Ke),
              () => S()
            );
          }
          var at = z(Pn, 2);
          {
            var bt = (Ot) => {
              var Ke = ie(), Rt = Y(Ke);
              {
                var ur = (yt) => {
                  Hh(yt, {
                    children: (Bt, Cn) => {
                      var Zt = He();
                      ue(() => Pe(Zt, e.suffix)), x(Bt, Zt);
                    },
                    $$slots: { default: !0 }
                  });
                }, yn = (yt) => {
                  var Bt = ie(), Cn = Y(Bt);
                  pe(Cn, () => e.suffix ?? ve), x(yt, Bt);
                };
                te(Rt, (yt) => {
                  typeof e.suffix == "string" ? yt(ur) : yt(yn, !1);
                });
              }
              x(Ot, Ke);
            };
            te(at, (Ot) => {
              e.suffix != null && Ot(bt);
            });
          }
          x(Ve, it);
        };
        te(ct, (Ve) => {
          h() && typeof m() == "string" ? Ve(Ut) : Ve(sn, !1);
        });
      }
      var wr = z(ct, 2);
      rs(wr, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (Ve, it) => {
          var Ye = ie(), Ht = Y(Ye);
          pe(Ht, () => e.trailingIcon ?? ve), x(Ve, Ye);
        },
        $$slots: { default: !0 }
      });
      var Ka = z(wr, 2);
      {
        var Tr = (Ve) => {
          {
            let it = /* @__PURE__ */ Q(() => ut(O, "ripple$"));
            we(_u(Ve, $e(() => o(it))), (Ye) => k(Ye), () => k());
          }
        };
        te(Ka, (Ve) => {
          !h() && f() !== "outlined" && l() && Ve(Tr);
        });
      }
      we($, (Ve) => G = Ve, () => G), Me($, (Ve, it) => Fn == null ? void 0 : Fn(Ve, it), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: De,
        removeClass: Le,
        addStyle: et,
        eventTarget: o(J),
        activeTarget: o(J),
        initPromise: Ce
      })), Me($, (Ve, it) => ne == null ? void 0 : ne(Ve, it), a), x(F, $);
    }, dr = (F) => {
      var $ = Kh();
      qe($, (ct, Ut, sn) => ({ class: ct, style: Ut, ...sn }), [
        () => Ge({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": c(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--with-leading-icon": e.leadingIcon,
          "mdc-text-field--with-trailing-icon": e.trailingIcon,
          "mdc-text-field--invalid": b(),
          ...X,
          [s()]: !0
        }),
        () => Object.entries(le).map(([ct, Ut]) => `${ct}: ${Ut};`).concat([d()]).join(" "),
        () => Ra(O, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Re = N($);
      {
        var lt = (ct) => {
          var Ut = ie(), sn = Y(Ut);
          pe(sn, () => e.label ?? ve), x(ct, Ut);
        };
        te(Re, (ct) => {
          typeof e.label != "string" && ct(lt);
        });
      }
      var pt = z(Re, 2);
      rs(pt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ct, Ut) => {
          var sn = ie(), wr = Y(sn);
          pe(wr, () => e.leadingIcon ?? ve), x(ct, sn);
        },
        $$slots: { default: !0 }
      });
      var Nt = z(pt, 2);
      pe(Nt, () => e.children ?? ve);
      var an = z(Nt, 2);
      rs(an, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ct, Ut) => {
          var sn = ie(), wr = Y(sn);
          pe(wr, () => e.trailingIcon ?? ve), x(ct, sn);
        },
        $$slots: { default: !0 }
      });
      var Di = z(an, 2);
      pe(Di, () => e.line ?? ve), we($, (ct) => G = ct, () => G), Me($, (ct, Ut) => Fn == null ? void 0 : Fn(ct, Ut), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: De,
        removeClass: Le,
        addStyle: et
      })), Me($, (ct, Ut) => ne == null ? void 0 : ne(ct, Ut), a), x(F, $);
    };
    te(rn, (F) => {
      Z ? F(pn) : F(dr, !1);
    });
  }
  var me = z(rn, 2);
  {
    var U = (F) => {
      {
        let $ = /* @__PURE__ */ Q(() => ut(O, "helperLine$"));
        Nh(F, $e(() => o($), {
          children: (Re, lt) => {
            var pt = ie(), Nt = Y(pt);
            pe(Nt, () => e.helper ?? ve), x(Re, pt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    te(me, (F) => {
      e.helper && F(U);
    });
  }
  return x(n, Be), Ie(Ae);
}
var Jh = /* @__PURE__ */ j('<div class="mdc-button__touch"></div>'), Qh = /* @__PURE__ */ j('<div class="mdc-button__ripple"></div> <!><!>', 1);
function dn(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "ripple", 3, !0), s = p(e, "color", 3, "primary"), d = p(e, "variant", 3, "text"), l = p(e, "touch", 3, !1), c = p(e, "action", 3, "close"), u = p(e, "defaultAction", 3, !1), h = p(e, "secondary", 3, !1), f = p(e, "component", 3, Wa), v = p(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ ze(e, [
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
  ]), m, _ = Ee({}), b = Ee({}), A = ye("SMUI:button:context");
  const E = /* @__PURE__ */ Q(() => A === "dialog:action" && c() != null ? { "data-mdc-dialog-action": c() } : { action: c() }), y = /* @__PURE__ */ Q(() => A === "dialog:action" && u() ? { "data-mdc-dialog-button-default": "" } : {}), T = /* @__PURE__ */ Q(() => A === "banner" ? {} : { secondary: h() });
  let C = e.disabled;
  xe(() => {
    if (C !== e.disabled) {
      if (m) {
        const G = k();
        "blur" in G && G.blur();
      }
      C = g.disabled;
    }
  }), oe("SMUI:label:context", "button"), oe("SMUI:icon:context", "button");
  function w(G) {
    _[G] || (_[G] = !0);
  }
  function I(G) {
    (!(G in _) || _[G]) && (_[G] = !1);
  }
  function S(G, B) {
    b[G] != B && (B === "" || B == null ? delete b[G] : b[G] = B);
  }
  function L() {
    A === "banner" && je(k(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function k() {
    return m.getElement();
  }
  var D = { getElement: k }, O = ie(), Z = Y(O);
  {
    let G = /* @__PURE__ */ Q(() => [
      [
        Fn,
        {
          ripple: a(),
          unbounded: !1,
          color: s(),
          disabled: !!e.disabled,
          addClass: w,
          removeClass: I,
          addStyle: S
        }
      ],
      ...t()
    ]), B = /* @__PURE__ */ Q(() => Ge({
      "mdc-button": !0,
      "mdc-button--raised": d() === "raised",
      "mdc-button--unelevated": d() === "unelevated",
      "mdc-button--outlined": d() === "outlined",
      "smui-button--color-secondary": s() === "secondary",
      "mdc-button--touch": l(),
      "mdc-card__action": A === "card:action",
      "mdc-card__action--button": A === "card:action",
      "mdc-dialog__button": A === "dialog:action",
      "mdc-top-app-bar__navigation-icon": A === "top-app-bar:navigation",
      "mdc-top-app-bar__action-item": A === "top-app-bar:action",
      "mdc-snackbar__action": A === "snackbar:actions",
      "mdc-banner__secondary-action": A === "banner" && h(),
      "mdc-banner__primary-action": A === "banner" && !h(),
      "mdc-tooltip__action": A === "tooltip:rich-actions",
      ..._,
      [r()]: !0
    })), M = /* @__PURE__ */ Q(() => Object.entries(b).map(([X, le]) => `${X}: ${le};`).concat([i()]).join(" "));
    ua(Z, f, (X, le) => {
      we(
        le(X, $e(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(G);
            },
            get class() {
              return o(B);
            },
            get style() {
              return o(M);
            }
          },
          () => o(E),
          () => o(y),
          () => o(T),
          {
            get href() {
              return e.href;
            }
          },
          () => g,
          {
            onclick: (P) => {
              var ee;
              L(), (ee = e.onclick) == null || ee.call(e, P);
            },
            children: (P, ee) => {
              var ce = Qh(), Se = z(Y(ce), 2);
              pe(Se, () => e.children ?? ve);
              var be = z(Se);
              {
                var de = (Ce) => {
                  var q = Jh();
                  x(Ce, q);
                };
                te(be, (Ce) => {
                  l() && Ce(de);
                });
              }
              x(P, ce);
            },
            $$slots: { default: !0 }
          }
        )),
        (P) => m = P,
        () => m
      );
    });
  }
  return x(n, O), Ie(D);
}
var $h = /* @__PURE__ */ j("<i><!></i>");
function ev(n, e) {
  _e(e, !0);
  const t = () => Ci(g, "$leadingStore", r), [r, i] = Ti();
  let a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), d = p(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = p(e, "disabled", 3, !1), c = /* @__PURE__ */ ze(e, [
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
  const g = ye("SMUI:textfield:icon:leading"), m = t();
  let _ = /* @__PURE__ */ se(void 0);
  const b = /* @__PURE__ */ Q(() => ({ role: e.role, tabindex: d() })), A = ye("SMUI:textfield:leading-icon:mount"), E = ye("SMUI:textfield:leading-icon:unmount"), y = ye("SMUI:textfield:trailing-icon:mount"), T = ye("SMUI:textfield:trailing-icon:unmount");
  rt(() => (V(
    h,
    new Sh({
      getAttr: C,
      setAttr: w,
      removeAttr: I,
      setContent: (B) => {
        V(_, B, !0);
      },
      registerInteractionHandler: (B, M) => f.on(S(), B, M),
      deregisterInteractionHandler: (B, M) => f.off(S(), B, M),
      notifyIconAction: () => je(S(), "SMUITextFieldIcon")
    }),
    !0
  ), m ? A && A(o(h)) : y && y(o(h)), o(h).init(), () => {
    var B;
    o(h) && (m ? E && E(o(h)) : T && T(o(h))), (B = o(h)) == null || B.destroy(), f.clear();
  }));
  function C(B) {
    return B in v ? v[B] ?? null : S().getAttribute(B);
  }
  function w(B, M) {
    v[B] !== M && (v[B] = M);
  }
  function I(B) {
    (!(B in v) || v[B] != null) && (v[B] = void 0);
  }
  function S() {
    return u;
  }
  var L = { getElement: S }, k = $h();
  qe(
    k,
    (B) => ({
      class: B,
      "aria-hidden": d() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(b),
      ...v,
      ...c
    }),
    [
      () => Ge({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": m,
        "mdc-text-field__icon--trailing": !m,
        [s()]: !0
      })
    ]
  );
  var D = N(k);
  {
    var O = (B) => {
      var M = ie(), X = Y(M);
      pe(X, () => e.children ?? ve), x(B, M);
    }, Z = (B) => {
      var M = He();
      ue(() => Pe(M, o(_))), x(B, M);
    };
    te(D, (B) => {
      o(_) == null ? B(O) : B(Z, !1);
    });
  }
  we(k, (B) => u = B, () => u), Me(k, (B, M) => ne == null ? void 0 : ne(B, M), a), x(n, k);
  var G = Ie(L);
  return i(), G;
}
function il(n, e) {
  _e(e, !0);
  let t = p(e, "placeholder", 3, ""), r = p(e, "label", 3, ""), i = p(e, "icon", 3, ""), a = p(e, "value", 15, ""), s = p(e, "variant", 3, "standard"), d = p(e, "styles", 3, ""), l = p(e, "required", 3, !1), c = p(e, "oninput", 3, () => {
  });
  var u = ie(), h = Y(u);
  {
    var f = (g) => {
      {
        const m = (b) => {
          ev(b, {
            class: "material-icons",
            children: (A, E) => {
              var y = He();
              ue(() => Pe(y, i())), x(A, y);
            },
            $$slots: { default: !0 }
          });
        };
        let _ = /* @__PURE__ */ Q(() => `width: 100%; ${d()}`);
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
            return o(_);
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
          set value(b) {
            a(b);
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
    te(h, (g) => {
      i() ? g(f) : g(v, !1);
    });
  }
  x(n, u), Ie();
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
var tv = {
  ANCHOR: "mdc-menu-surface--anchor",
  ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
  ANIMATING_OPEN: "mdc-menu-surface--animating-open",
  FIXED: "mdc-menu-surface--fixed",
  IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
  OPEN: "mdc-menu-surface--open",
  ROOT: "mdc-menu-surface"
}, nv = {
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
var Or, gr, Ue = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Or = {}, Or["" + Ue.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Or["" + Ue.LIST_ITEM_CLASS] = "mdc-list-item", Or["" + Ue.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Or["" + Ue.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Or["" + Ue.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Or["" + Ue.ROOT] = "mdc-list";
var ki = (gr = {}, gr["" + Ue.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", gr["" + Ue.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", gr["" + Ue.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", gr["" + Ue.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", gr["" + Ue.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", gr["" + Ue.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", gr["" + Ue.ROOT] = "mdc-deprecated-list", gr), Rr = {
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
var rv = ["input", "button", "textarea", "select"], Sn = function(n) {
  var e = n.target;
  if (e) {
    var t = ("" + e.tagName).toLowerCase();
    rv.indexOf(t) === -1 && n.preventDefault();
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
function iv() {
  var n = {
    bufferClearTimeout: 0,
    currentFirstChar: "",
    sortedIndexCursor: 0,
    typeaheadBuffer: ""
  };
  return n;
}
function av(n, e) {
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
function Fo(n, e) {
  var t = n.nextChar, r = n.focusItemAtIndex, i = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, d = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    yu(e);
  }, vt.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = sv(i, a, d, e) : l = ov(i, d, e), l !== -1 && !s && r(l), l;
}
function sv(n, e, t, r) {
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
function ov(n, e, t) {
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
function bu(n) {
  return n.typeaheadBuffer.length > 0;
}
function yu(n) {
  n.typeaheadBuffer = "";
}
function Jl(n, e) {
  var t = n.event, r = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, d = n.isItemAtIndexDisabled, l = It(t) === "ArrowLeft", c = It(t) === "ArrowUp", u = It(t) === "ArrowRight", h = It(t) === "ArrowDown", f = It(t) === "Home", v = It(t) === "End", g = It(t) === "Enter", m = It(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || l || c || u || h || f || v || g)
    return -1;
  var _ = !m && t.key.length === 1;
  if (_) {
    Sn(t);
    var b = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: t.key.toLowerCase(),
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: d
    };
    return Fo(b, e);
  }
  if (!m)
    return -1;
  r && Sn(t);
  var A = r && bu(e);
  if (A) {
    var b = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: d
    };
    return Fo(b, e);
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
function lv(n) {
  return n instanceof Array;
}
var dv = ["Alt", "Control", "Meta", "Shift"];
function Ql(n) {
  var e = new Set(n ? dv.filter(function(t) {
    return n.getModifierState(t);
  }) : []);
  return function(t) {
    return t.every(function(r) {
      return e.has(r);
    }) && t.length === e.size;
  };
}
var uv = (
  /** @class */
  function(n) {
    vn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = vt.UNSET_INDEX, r.focusedItemIndex = vt.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = iv(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Rr;
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
      return this.hasTypeahead && bu(this.typeaheadState);
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
      var a = this, s, d = It(t) === "ArrowLeft", l = It(t) === "ArrowUp", c = It(t) === "ArrowRight", u = It(t) === "ArrowDown", h = It(t) === "Home", f = It(t) === "End", v = It(t) === "Enter", g = It(t) === "Spacebar", m = this.isVertical && u || !this.isVertical && c, _ = this.isVertical && l || !this.isVertical && d, b = t.key === "A" || t.key === "a", A = Ql(t);
      if (this.adapter.isRootFocused()) {
        if ((_ || f) && A([]))
          t.preventDefault(), this.focusLastElement();
        else if ((m || h) && A([]))
          t.preventDefault(), this.focusFirstElement();
        else if (_ && A(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var E = this.focusLastElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (m && A(["Shift"]) && this.isCheckboxList) {
          t.preventDefault();
          var E = this.focusFirstElement();
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        }
        if (this.hasTypeahead) {
          var y = {
            event: t,
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
          Jl(y, this.typeaheadState);
        }
        return;
      }
      var T = this.adapter.getFocusedElementIndex();
      if (!(T === -1 && (T = i, T < 0))) {
        if (m && A([]))
          Sn(t), this.focusNextElement(T);
        else if (_ && A([]))
          Sn(t), this.focusPrevElement(T);
        else if (m && A(["Shift"]) && this.isCheckboxList) {
          Sn(t);
          var E = this.focusNextElement(T);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (_ && A(["Shift"]) && this.isCheckboxList) {
          Sn(t);
          var E = this.focusPrevElement(T);
          E !== -1 && this.setSelectedIndexOnAction(E, !1);
        } else if (h && A([]))
          Sn(t), this.focusFirstElement();
        else if (f && A([]))
          Sn(t), this.focusLastElement();
        else if (h && A(["Control", "Shift"]) && this.isCheckboxList) {
          if (Sn(t), this.isIndexDisabled(T))
            return;
          this.focusFirstElement(), this.toggleCheckboxRange(0, T, T);
        } else if (f && A(["Control", "Shift"]) && this.isCheckboxList) {
          if (Sn(t), this.isIndexDisabled(T))
            return;
          this.focusLastElement(), this.toggleCheckboxRange(T, this.adapter.getListItemCount() - 1, T);
        } else if (b && A(["Control"]) && this.isCheckboxList)
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex, !0);
        else if ((v || g) && A([])) {
          if (r) {
            var C = t.target;
            if (C && C.tagName === "A" && v || (Sn(t), this.isIndexDisabled(T)))
              return;
            this.isTypeaheadInProgress() || (this.isSelectableList() && this.setSelectedIndexOnAction(T, !1), this.adapter.notifyAction(T));
          }
        } else if ((v || g) && A(["Shift"]) && this.isCheckboxList) {
          var C = t.target;
          if (C && C.tagName === "A" && v || (Sn(t), this.isIndexDisabled(T)))
            return;
          this.isTypeaheadInProgress() || (this.toggleCheckboxRange((s = this.lastSelectedIndex) !== null && s !== void 0 ? s : T, T, T), this.adapter.notifyAction(T));
        }
        if (this.hasTypeahead) {
          var y = {
            event: t,
            focusItemAtIndex: function(I) {
              a.focusItemAtIndex(I);
            },
            focusedItemIndex: this.focusedItemIndex,
            isTargetListItem: r,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(I) {
              return a.isIndexDisabled(I);
            }
          };
          Jl(y, this.typeaheadState);
        }
      }
    }, e.prototype.handleClick = function(t, r, i) {
      var a, s = Ql(i);
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
      this.isIndexValid(t, !1) && (r ? (this.adapter.removeClassForElementIndex(t, Ue.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Rr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, Ue.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Rr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === t && !r.forceUpdate)) {
        var i = Ue.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = Ue.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== vt.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== vt.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === vt.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Rr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Rr.ARIA_CURRENT : Rr.ARIA_SELECTED;
      if (this.selectedIndex !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== vt.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Rr.ARIA_SELECTED : Rr.ARIA_CHECKED;
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
      for (var a = new Set(this.selectedIndex === vt.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), d = Hl([t, r].sort(), 2), l = d[0], c = d[1], u = this.getSelectionAttribute(), h = [], f = l; f <= c; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          s !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, u, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = rh([], Hl(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === vt.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== vt.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== vt.UNSET_INDEX ? this.selectedIndex : lv(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, r) {
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
      return Fo(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return av(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      yu(this.typeaheadState);
    }, e;
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
var Cu = (
  /** @class */
  function(n) {
    vn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.isSurfaceOpen = !1, r.isQuickOpen = !1, r.isHoistedElement = !1, r.isFixedPosition = !1, r.isHorizontallyCenteredOnViewport = !1, r.maxHeight = 0, r.openBottomBias = 0, r.openAnimationEndTimerId = 0, r.closeAnimationEndTimerId = 0, r.animationRequestId = 0, r.anchorCorner = _i.TOP_START, r.originCorner = _i.TOP_START, r.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 }, r.position = { x: 0, y: 0 }, r;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return tv;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "strings", {
      get: function() {
        return nv;
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
      var _, b;
      m ? (_ = i.left + a.width + this.anchorMargin.right, b = i.right - this.anchorMargin.right) : (_ = i.left + this.anchorMargin.left, b = i.right + a.width - this.anchorMargin.left);
      var A = _ - s.width > 0, E = b - s.width > 0, y = this.hasBit(t, gt.FLIP_RTL) && this.hasBit(t, gt.RIGHT);
      return E && y && f || !A && y ? t = this.unsetBit(t, gt.RIGHT) : (A && m && f || A && !m && g || !E && _ >= b) && (t = this.setBit(t, gt.RIGHT)), t;
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
}, cv = {
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
var fv = (
  /** @class */
  function(n) {
    vn(e, n);
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
        return cv;
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
        }, Cu.numbers.TRANSITION_CLOSE_DURATION);
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
var hv = (
  /** @class */
  function(n) {
    vn(e, n);
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
var vv = (
  /** @class */
  function(n) {
    vn(e, n);
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
  }(gn)
), gv = /* @__PURE__ */ j("<div><!></div>");
function mv(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "style", 3, ""), a = p(e, "static", 3, !1), s = p(e, "anchor", 3, !0), d = p(e, "fixed", 3, !1), l = p(e, "open", 31, () => Ee(a())), c = p(e, "managed", 3, !1), u = p(e, "fullWidth", 3, !1), h = p(e, "quickOpen", 3, !1), f = p(e, "anchorElement", 15), v = p(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), g = p(e, "maxHeight", 3, 0), m = p(e, "horizontallyCenteredOnViewport", 3, !1), _ = p(e, "openBottomBias", 3, 0), b = p(e, "neverRestoreFocus", 3, !1), A = /* @__PURE__ */ ze(e, [
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
  ]), E, y = /* @__PURE__ */ se(void 0), T = Ee({}), C = Ee({}), w = /* @__PURE__ */ se(void 0);
  oe("SMUI:list:role", "menu"), oe("SMUI:list:item:role", "menuitem"), xe(() => {
    var q, ge;
    E && s() && !((q = E.parentElement) != null && q.classList.contains("mdc-menu-surface--anchor")) && ((ge = E.parentElement) == null || ge.classList.add("mdc-menu-surface--anchor"), f(E.parentElement ?? void 0));
  }), xe(() => {
    o(y) && o(y).isOpen() !== l() && (l() ? o(y).open() : o(y).close());
  }), xe(() => {
    o(y) && o(y).setQuickOpen(h());
  }), xe(() => {
    o(y) && o(y).setFixedPosition(d());
  }), xe(() => {
    o(y) && o(y).setMaxHeight(g());
  }), xe(() => {
    o(y) && o(y).setIsHorizontallyCenteredOnViewport(m());
  });
  const I = _i;
  xe(() => {
    o(y) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(y).setAnchorCorner(I[e.anchorCorner]) : o(y).setAnchorCorner(e.anchorCorner));
  }), xe(() => {
    o(y) && o(y).setAnchorMargin(v());
  }), xe(() => {
    o(y) && o(y).setOpenBottomBias(_());
  });
  const S = ye("SMUI:menu-surface:mount"), L = ye("SMUI:menu-surface:unmount");
  rt(() => {
    V(
      y,
      new Cu({
        addClass: D,
        removeClass: O,
        hasClass: k,
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
        isElementInContainer: (ge) => ce().contains(ge),
        isRtl: () => getComputedStyle(ce()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ge) => {
          C["transform-origin"] = ge;
        },
        isFocused: () => document.activeElement === ce(),
        saveFocus: () => {
          V(w, document.activeElement ?? void 0, !0);
        },
        restoreFocus: () => {
          !b() && (!E || ce().contains(document.activeElement)) && o(w) && document.contains(o(w)) && "focus" in o(w) && o(w).focus();
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
        setPosition: (ge) => {
          C.left = "left" in ge ? `${ge.left}px` : "", C.right = "right" in ge ? `${ge.right}px` : "", C.top = "top" in ge ? `${ge.top}px` : "", C.bottom = "bottom" in ge ? `${ge.bottom}px` : "";
        },
        setMaxHeight: (ge) => {
          C["max-height"] = ge;
        }
      }),
      !0
    );
    const q = {
      get open() {
        return l();
      },
      set open(ge) {
        l(ge);
      },
      closeProgrammatic: Z
    };
    return S && S(q), o(y).init(), () => {
      var re, W;
      L && L(q);
      const ge = o(y).isHoistedElement;
      (re = o(y)) == null || re.destroy(), ge && ((W = ce().parentNode) == null || W.removeChild(ce()));
    };
  }), Mn(() => {
    var q;
    s() && ce() && ((q = ce().parentElement) == null || q.classList.remove("mdc-menu-surface--anchor"));
  });
  function k(q) {
    return q in T ? T[q] : ce().classList.contains(q);
  }
  function D(q) {
    T[q] || (T[q] = !0);
  }
  function O(q) {
    (!(q in T) || T[q]) && (T[q] = !1);
  }
  function Z(q) {
    var ge;
    (ge = o(y)) == null || ge.close(q), l(!1);
  }
  function G(q) {
    o(y) && l() && !c() && o(y).handleBodyClick(q);
  }
  function B() {
    return l();
  }
  function M(q) {
    l(q);
  }
  function X(q, ge) {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).setAbsolutePosition(q, ge);
  }
  function le(q) {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).setIsHoisted(q);
  }
  function P() {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).isFixed();
  }
  function ee() {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).flipCornerHorizontally();
  }
  function ce() {
    return E;
  }
  var Se = {
    isOpen: B,
    setOpen: M,
    setAbsolutePosition: X,
    setIsHoisted: le,
    isFixed: P,
    flipCornerHorizontally: ee,
    getElement: ce
  }, be = gv();
  Kt("click", $o.body, G, !0);
  var de = (q) => {
    var ge;
    o(y) && !c() && o(y).handleKeydown(q), (ge = e.onkeydown) == null || ge.call(e, q);
  };
  qe(
    be,
    (q, ge) => ({
      class: q,
      style: ge,
      role: "dialog",
      ...A,
      onkeydown: de
    }),
    [
      () => Ge({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": d(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": u(),
        ...T,
        [r()]: !0
      }),
      () => Object.entries(C).map(([q, ge]) => `${q}: ${ge};`).concat([i()]).join(" ")
    ]
  );
  var Ce = N(be);
  return pe(Ce, () => e.children ?? ve), we(be, (q) => E = q, () => E), Me(be, (q, ge) => ne == null ? void 0 : ne(q, ge), t), x(n, be), Ie(Se);
}
function go(n, { addClass: e = (r) => n.classList.add(r), removeClass: t = (r) => n.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function pv(n, e) {
  _e(e, !0);
  const { closest: t } = qa;
  let r = p(e, "use", 19, () => []), i = p(e, "class", 3, ""), a = p(e, "open", 15, !1), s = p(e, "anchorElement", 15), d = p(e, "managed", 3, !1), l = /* @__PURE__ */ ze(e, [
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
  oe("SMUI:menu-surface:mount", (I) => {
    o(h) || V(h, I, !0);
  });
  const v = ye("SMUI:list:mount");
  oe("SMUI:list:mount", (I) => {
    o(f) || V(f, I, !0), v && v(I);
  });
  const g = ye("SMUI:menu:mount"), m = ye("SMUI:menu:unmount");
  rt(() => (V(
    u,
    new fv({
      addClassToElementAtIndex: (I, S) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).addClassForElementIndex(I, S);
      },
      removeClassFromElementAtIndex: (I, S) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeClassForElementIndex(I, S);
      },
      addAttributeToElementAtIndex: (I, S, L) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).setAttributeForElementIndex(I, S, L);
      },
      removeAttributeFromElementAtIndex: (I, S) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).removeAttributeForElementIndex(I, S);
      },
      getAttributeFromElementAtIndex: (I, S) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getAttributeFromElementIndex(I, S);
      },
      elementContainsClass: (I, S) => I.classList.contains(S),
      closeSurface: (I) => {
        var S;
        d() || ((S = o(h)) == null || S.closeProgrammatic(I), je(C(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (I) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((S) => S.element).indexOf(I);
      },
      notifySelected: (I) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        je(C(), "SMUIMenuSelected", {
          index: I.index,
          item: o(f).getOrderedList()[I.index].element
        });
      },
      getMenuItemCount: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).items.length;
      },
      focusItemAtIndex: (I) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        o(f).focusItemAtIndex(I);
      },
      focusListRoot: () => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        "focus" in o(f).element && o(f).element.focus();
      },
      isSelectableItemAtIndex: (I) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return !!t(o(f).getOrderedList()[I].element, `.${qi.MENU_SELECTION_GROUP}`);
      },
      getSelectedSiblingOfItemAtIndex: (I) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        const S = o(f).getOrderedList(), L = t(S[I].element, `.${qi.MENU_SELECTION_GROUP}`), k = L == null ? void 0 : L.querySelector(`.${qi.MENU_SELECTED_LIST_ITEM}`);
        return k ? S.map((D) => D.element).indexOf(k) : -1;
      }
    }),
    !0
  ), g && g(o(u)), o(u).init(), () => {
    var I;
    m && o(u) && m(o(u)), (I = o(u)) == null || I.destroy();
  }));
  function _(I) {
    o(u) && o(u).handleKeydown(I);
  }
  function b() {
    return a();
  }
  function A(I) {
    a(I);
  }
  function E(I) {
    if (o(u) == null)
      throw new Error("Instance is undefined.");
    o(u).setDefaultFocusState(I);
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
  var w = {
    isOpen: b,
    setOpen: A,
    setDefaultFocusState: E,
    getSelectedIndex: y,
    getMenuSurface: T,
    getElement: C
  };
  {
    let I = /* @__PURE__ */ Q(() => Ge({ "mdc-menu": !0, [i()]: !0 }));
    we(
      mv(n, $e(
        {
          get use() {
            return r();
          },
          get class() {
            return o(I);
          },
          get managed() {
            return d();
          }
        },
        () => l,
        {
          onkeydown: (S) => {
            var L;
            _(S), (L = e.onkeydown) == null || L.call(e, S);
          },
          onSMUIMenuSurfaceOpened: (S) => {
            var L;
            o(u) && o(u).handleMenuSurfaceOpened(), (L = e.onSMUIMenuSurfaceOpened) == null || L.call(e, S);
          },
          onSMUIListAction: (S) => {
            var L;
            o(u) && o(f) && o(u).handleItemAction(o(f).getOrderedList()[S.detail.index].element), (L = e.onSMUIListAction) == null || L.call(e, S);
          },
          get open() {
            return a();
          },
          set open(S) {
            a(S);
          },
          get anchorElement() {
            return s();
          },
          set anchorElement(S) {
            s(S);
          },
          children: (S, L) => {
            var k = ie(), D = Y(k);
            pe(D, () => e.children ?? ve), x(S, k);
          },
          $$slots: { default: !0 }
        }
      )),
      (S) => c = S,
      () => c
    );
  }
  return Ie(w);
}
function _v(n, e) {
  _e(e, !0);
  const { closest: t, matches: r } = qa;
  let i = ye("SMUI:list:nav"), a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), d = p(e, "nonInteractive", 3, !1), l = p(e, "dense", 3, !1), c = p(e, "textualList", 3, !1), u = p(e, "avatarList", 3, !1), h = p(e, "iconList", 3, !1), f = p(e, "imageList", 3, !1), v = p(e, "thumbnailList", 3, !1), g = p(e, "videoList", 3, !1), m = p(e, "twoLine", 3, !1), _ = p(e, "threeLine", 3, !1), b = p(e, "vertical", 3, !0), A = p(e, "wrapFocus", 19, () => ye("SMUI:list:wrapFocus") ?? !1), E = p(e, "singleSelection", 3, !1), y = p(e, "disabledItemsFocusable", 3, !1), T = p(e, "selectedIndex", 31, () => -1), C = p(e, "radioList", 3, !1), w = p(e, "checkList", 3, !1), I = p(e, "hasTypeahead", 3, !1), S = p(e, "component", 3, Wa), L = p(e, "tag", 3, i ? "nav" : "ul"), k = /* @__PURE__ */ ze(e, [
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
  ]), D, O = /* @__PURE__ */ se(void 0), Z = [], G = ye("SMUI:list:role");
  const B = /* @__PURE__ */ new WeakMap();
  let M = ye("SMUI:dialog:selection"), X = ye("SMUI:addLayoutListener"), le;
  oe("SMUI:list:nonInteractive", d()), oe("SMUI:separator:context", "list"), G || (E() ? (G = "listbox", oe("SMUI:list:item:role", "option")) : C() ? (G = "radiogroup", oe("SMUI:list:item:role", "radio")) : w() ? (G = "group", oe("SMUI:list:item:role", "checkbox")) : (G = "list", oe("SMUI:list:item:role", void 0))), xe(() => {
    o(O) && o(O).setVerticalOrientation(b());
  }), xe(() => {
    o(O) && o(O).setWrapFocus(A());
  }), xe(() => {
    o(O) && o(O).setHasTypeahead(I());
  }), xe(() => {
    o(O) && o(O).setSingleSelection(E());
  }), xe(() => {
    o(O) && o(O).setDisabledItemsFocusable(y());
  }), xe(() => {
    o(O) && E() && H() !== T() && o(O).setSelectedIndex(T());
  }), X && (le = X(et)), oe("SMUI:list:item:mount", (me) => {
    Z.push(me), B.set(me.element, me), E() && me.selected && T(Le(me.element));
  }), oe("SMUI:list:item:unmount", (me) => {
    const U = (me && Z.findIndex((F) => F === me)) ?? -1;
    U !== -1 && (Z.splice(U, 1), B.delete(me.element));
  });
  const P = ye("SMUI:list:mount"), ee = ye("SMUI:list:unmount");
  rt(() => {
    V(
      O,
      new uv({
        addClassForElementIndex: re,
        focusItemAtIndex: Ae,
        getAttributeForElementIndex: (U, F) => {
          var $;
          return (($ = q()[U]) == null ? void 0 : $.getAttr(F)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? q().map((U) => U.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => Z.length,
        getPrimaryTextAtIndex: De,
        hasCheckboxAtIndex: (U) => {
          var F;
          return ((F = q()[U]) == null ? void 0 : F.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (U) => {
          var F;
          return ((F = q()[U]) == null ? void 0 : F.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (U) => {
          const F = q()[U];
          return ((F == null ? void 0 : F.hasCheckbox) && F.checked) ?? !1;
        },
        isFocusInsideList: () => D != null && Be() !== document.activeElement && Be().contains(document.activeElement),
        isRootFocused: () => D != null && document.activeElement === Be(),
        listItemAtIndexHasClass: ge,
        notifyAction: (U) => {
          T(U), D != null && je(Be(), "SMUIListAction", { index: U });
        },
        notifySelectionChange: (U) => {
          D != null && je(Be(), "SMUIListSelectionChange", { changedIndices: U });
        },
        removeClassForElementIndex: W,
        setAttributeForElementIndex: J,
        setCheckedCheckboxOrRadioAtIndex: (U, F) => {
          q()[U].checked = F;
        },
        setTabIndexForListItemChildren: (U, F) => {
          const $ = q()[U];
          Array.prototype.forEach.call($.element.querySelectorAll("button:not(:disabled), a"), (lt) => {
            lt.setAttribute("tabindex", F);
          });
        }
      }),
      !0
    );
    const me = {
      get element() {
        return Be();
      },
      get items() {
        return Z;
      },
      get typeaheadInProgress() {
        if (!o(O))
          throw new Error("Instance is undefined.");
        return o(O).isTypeaheadInProgress();
      },
      typeaheadMatchItem(U, F) {
        if (!o(O))
          throw new Error("Instance is undefined.");
        return o(O).typeaheadMatchItem(
          U,
          F,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: q,
      focusItemAtIndex: Ae,
      addClassForElementIndex: re,
      removeClassForElementIndex: W,
      setAttributeForElementIndex: J,
      removeAttributeForElementIndex: he,
      getAttributeFromElementIndex: Te,
      getPrimaryTextAtIndex: De
    };
    return P && P(me), o(O).init(), o(O).layout(), () => {
      var U;
      ee && ee(me), (U = o(O)) == null || U.destroy();
    };
  }), Mn(() => {
    le && le();
  });
  function ce(me) {
    o(O) && me.target && o(O).handleKeydown(me, me.target.classList.contains("mdc-deprecated-list-item"), Le(me.target));
  }
  function Se(me) {
    o(O) && me.target && o(O).handleFocusIn(Le(me.target));
  }
  function be(me) {
    o(O) && me.target && o(O).handleFocusOut(Le(me.target));
  }
  function de(me) {
    o(O) && me.target && o(O).handleClick(Le(me.target), !r(me.target, 'input[type="checkbox"], input[type="radio"]'), me);
  }
  function Ce(me) {
    if (C() || w()) {
      const U = Le(me.target);
      if (U !== -1) {
        const F = q()[U];
        F && (C() && !F.checked || w()) && (r(me.detail.target, 'input[type="checkbox"], input[type="radio"]') || (F.checked = !F.checked), F.activateRipple(), window.requestAnimationFrame(() => {
          F.deactivateRipple();
        }));
      }
    }
  }
  function q() {
    return D == null ? [] : [...Be().children].map((me) => B.get(me)).filter((me) => me && me._smui_list_item_accessor);
  }
  function ge(me, U) {
    const F = q()[me];
    return (F && F.hasClass(U)) ?? !1;
  }
  function re(me, U) {
    const F = q()[me];
    F && F.addClass(U);
  }
  function W(me, U) {
    const F = q()[me];
    F && F.removeClass(U);
  }
  function J(me, U, F) {
    const $ = q()[me];
    $ && $.addAttr(U, F);
  }
  function he(me, U) {
    const F = q()[me];
    F && F.removeAttr(U);
  }
  function Te(me, U) {
    const F = q()[me];
    return F ? F.getAttr(U) : null;
  }
  function De(me) {
    const U = q()[me];
    return (U && U.getPrimaryText()) ?? "";
  }
  function Le(me) {
    const U = t(me, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return U && r(U, ".mdc-deprecated-list-item") ? q().map((F) => F == null ? void 0 : F.element).indexOf(U) : -1;
  }
  function et() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).layout();
  }
  function Ft(me, U) {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).setEnabled(me, U);
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
  function K() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).getFocusedItemIndex();
  }
  function Ae(me) {
    const U = q()[me];
    U && "focus" in U.element && U.element.focus();
  }
  function Be() {
    return D.getElement();
  }
  var rn = {
    layout: et,
    setEnabled: Ft,
    getTypeaheadInProgress: nn,
    getSelectedIndex: H,
    getFocusedItemIndex: K,
    focusItemAtIndex: Ae,
    getElement: Be
  }, pn = ie(), dr = Y(pn);
  {
    let me = /* @__PURE__ */ Q(() => Ge({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": d(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": c(),
      "mdc-deprecated-list--avatar-list": u() || M,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": g(),
      "mdc-deprecated-list--two-line": m(),
      "smui-list--three-line": _() && !m(),
      [s()]: !0
    }));
    ua(dr, S, (U, F) => {
      we(
        F(U, $e(
          {
            get tag() {
              return L();
            },
            get use() {
              return a();
            },
            get class() {
              return o(me);
            },
            get role() {
              return G;
            }
          },
          () => k,
          {
            onkeydown: ($) => {
              var Re;
              ce($), (Re = e.onkeydown) == null || Re.call(e, $);
            },
            onfocusin: ($) => {
              var Re;
              Se($), (Re = e.onfocusin) == null || Re.call(e, $);
            },
            onfocusout: ($) => {
              var Re;
              be($), (Re = e.onfocusout) == null || Re.call(e, $);
            },
            onclick: ($) => {
              var Re;
              de($), (Re = e.onclick) == null || Re.call(e, $);
            },
            onSMUIAction: ($) => {
              var Re;
              Ce($), (Re = e.onSMUIAction) == null || Re.call(e, $);
            },
            children: ($, Re) => {
              var lt = ie(), pt = Y(lt);
              pe(pt, () => e.children ?? ve), x($, lt);
            },
            $$slots: { default: !0 }
          }
        )),
        ($) => D = $,
        () => D
      );
    });
  }
  return x(n, pn), Ie(rn);
}
let Iv = 0;
var bv = /* @__PURE__ */ j('<span class="mdc-deprecated-list-item__ripple"></span>'), yv = /* @__PURE__ */ j("<!><!>", 1);
function Cv(n, e) {
  _e(e, !0);
  let t = () => {
  };
  function r(re) {
    return re === t;
  }
  let i = ye("SMUI:list:item:nav"), a = p(e, "use", 19, () => []), s = p(e, "class", 3, ""), d = p(e, "style", 3, ""), l = p(e, "nonInteractive", 19, () => ye("SMUI:list:nonInteractive") ?? !1), c = p(e, "ripple", 19, () => !l()), u = p(e, "wrapper", 3, !1), h = p(e, "activated", 15, !1), f = p(e, "role", 19, () => u() ? "presentation" : ye("SMUI:list:item:role")), v = p(e, "selected", 15, !1), g = p(e, "disabled", 3, !1), m = p(e, "skipRestoreFocus", 3, !1), _ = p(e, "tabindex", 15, t), b = p(e, "inputId", 19, () => "SMUI-form-field-list-" + Iv++), A = p(e, "component", 3, Wa), E = p(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), y = /* @__PURE__ */ ze(e, [
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
  let T, C = Ee({}), w = Ee({}), I = Ee({}), S = /* @__PURE__ */ se(void 0), L = /* @__PURE__ */ se(void 0);
  const k = /* @__PURE__ */ Q(() => r(_()) ? !l() && !g() && (v() || o(S) && o(S).checked) ? 0 : -1 : _());
  oe("SMUI:generic:input:props", { id: b() }), oe("SMUI:separator:context", void 0), oe("SMUI:generic:input:mount", (re) => {
    ("_smui_checkbox_accessor" in re || "_smui_radio_accessor" in re) && V(S, re, !0);
  }), oe("SMUI:generic:input:unmount", () => {
    V(S, void 0);
  });
  const D = ye("SMUI:list:item:mount"), O = ye("SMUI:list:item:unmount");
  rt(() => {
    if (!v() && !l()) {
      let W = !0, J = T.getElement();
      for (; J.previousElementSibling; )
        if (J = J.previousElementSibling, J.nodeType === 1 && J.classList.contains("mdc-deprecated-list-item") && !J.classList.contains("mdc-deprecated-list-item--disabled")) {
          W = !1;
          break;
        }
      W && V(L, window.requestAnimationFrame(() => ee(J)), !0);
    }
    const re = {
      _smui_list_item_accessor: !0,
      get element() {
        return de();
      },
      get selected() {
        return v();
      },
      set selected(W) {
        v(W);
      },
      hasClass: Z,
      addClass: G,
      removeClass: B,
      getAttr: X,
      addAttr: le,
      removeAttr: P,
      getPrimaryText: be,
      // For inputs within item.
      get checked() {
        return (o(S) && o(S).checked) ?? !1;
      },
      set checked(W) {
        o(S) && (o(S).checked = !!W);
      },
      get hasCheckbox() {
        return !!(o(S) && "_smui_checkbox_accessor" in o(S));
      },
      get hasRadio() {
        return !!(o(S) && "_smui_radio_accessor" in o(S));
      },
      activateRipple() {
        o(S) && o(S).activateRipple();
      },
      deactivateRipple() {
        o(S) && o(S).deactivateRipple();
      },
      // For select options.
      getValue() {
        return e.value;
      },
      // For autocomplete
      action: Se,
      get tabindex() {
        return o(k);
      },
      set tabindex(W) {
        _(W);
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
  function Z(re) {
    return re in C ? C[re] : de().classList.contains(re);
  }
  function G(re) {
    C[re] || (C[re] = !0);
  }
  function B(re) {
    (!(re in C) || C[re]) && (C[re] = !1);
  }
  function M(re, W) {
    w[re] != W && (W === "" || W == null ? delete w[re] : w[re] = W);
  }
  function X(re) {
    return re in I ? I[re] ?? null : de().getAttribute(re);
  }
  function le(re, W) {
    I[re] !== W && (I[re] = W);
  }
  function P(re) {
    (!(re in I) || I[re] != null) && (I[re] = void 0);
  }
  function ee(re) {
    let W = !0;
    for (; re.nextElementSibling; )
      if (re = re.nextElementSibling, re.nodeType === 1 && re.classList.contains("mdc-deprecated-list-item")) {
        const J = re.attributes.getNamedItem("tabindex");
        if (J && J.value === "0") {
          W = !1;
          break;
        }
      }
    W && _(0);
  }
  function ce(re) {
    const W = re.key === "Enter", J = re.key === "Space";
    (W || J) && Se(re);
  }
  function Se(re) {
    g() || je(de(), "SMUIAction", re);
  }
  function be() {
    const re = de(), W = re.querySelector(".mdc-deprecated-list-item__primary-text");
    if (W)
      return W.textContent ?? "";
    const J = re.querySelector(".mdc-deprecated-list-item__text");
    return J ? J.textContent ?? "" : re.textContent ?? "";
  }
  function de() {
    return T.getElement();
  }
  var Ce = { action: Se, getPrimaryText: be, getElement: de }, q = ie(), ge = Y(q);
  {
    let re = /* @__PURE__ */ Q(() => [
      ...l() ? [] : [
        [
          Fn,
          {
            ripple: !o(S),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: g(),
            addClass: G,
            removeClass: B,
            addStyle: M
          }
        ]
      ],
      ...a()
    ]), W = /* @__PURE__ */ Q(() => Ge({
      "mdc-deprecated-list-item": !u(),
      "mdc-deprecated-list-item__wrapper": u(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": g(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...C,
      [s()]: !0
    })), J = /* @__PURE__ */ Q(() => Object.entries(w).map(([Te, De]) => `${Te}: ${De};`).concat([d()]).join(" ")), he = /* @__PURE__ */ Q(() => m() || void 0);
    ua(ge, A, (Te, De) => {
      we(
        De(Te, $e(
          {
            get tag() {
              return E();
            },
            get use() {
              return o(re);
            },
            get class() {
              return o(W);
            },
            get style() {
              return o(J);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || u() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(S) && o(S).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": g() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(he);
            },
            get tabindex() {
              return o(k);
            },
            get href() {
              return e.href;
            }
          },
          () => I,
          () => y,
          {
            onclick: (Le) => {
              var et;
              Se(Le), (et = e.onclick) == null || et.call(e, Le);
            },
            onkeydown: (Le) => {
              var et;
              ce(Le), (et = e.onkeydown) == null || et.call(e, Le);
            },
            children: (Le, et) => {
              var Ft = yv(), nn = Y(Ft);
              {
                var H = (Ae) => {
                  var Be = bv();
                  x(Ae, Be);
                };
                te(nn, (Ae) => {
                  c() && Ae(H);
                });
              }
              var K = z(nn);
              pe(K, () => e.children ?? ve), x(Le, Ft);
            },
            $$slots: { default: !0 }
          }
        )),
        (Le) => T = Le,
        () => T
      );
    });
  }
  return x(n, q), Ie(Ce);
}
let Av = 0;
var Ev = /* @__PURE__ */ j("<div><!></div>");
function Sv(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-select-helper-text-" + Av++), a = p(e, "persistent", 3, !1), s = p(e, "validationMsg", 3, !1), d = /* @__PURE__ */ ze(e, [
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
  const v = ye("SMUI:select:helper-text:id"), g = ye("SMUI:select:helper-text:mount"), m = ye("SMUI:select:helper-text:unmount");
  rt(() => (V(
    c,
    new vv({
      addClass: b,
      removeClass: A,
      hasClass: _,
      getAttr: E,
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
  function _(D) {
    return D in u ? u[D] : C().classList.contains(D);
  }
  function b(D) {
    u[D] || (u[D] = !0);
  }
  function A(D) {
    (!(D in u) || u[D]) && (u[D] = !1);
  }
  function E(D) {
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
  var w = { getElement: C }, I = Ev();
  qe(
    I,
    (D) => ({
      class: D,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...d
    }),
    [
      () => Ge({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...u,
        [r()]: !0
      })
    ]
  );
  var S = N(I);
  {
    var L = (D) => {
      var O = ie(), Z = Y(O);
      pe(Z, () => e.children ?? ve), x(D, O);
    }, k = (D) => {
      var O = He();
      ue(() => Pe(O, o(f))), x(D, O);
    };
    te(S, (D) => {
      o(f) == null ? D(L) : D(k, !1);
    });
  }
  return we(I, (D) => l = D, () => l), Me(I, (D, O) => ne == null ? void 0 : ne(D, O), t), x(n, I), Ie(w);
}
let xv = 0;
var wv = /* @__PURE__ */ j("<input/>"), Tv = /* @__PURE__ */ j('<span class="mdc-select__ripple"></span>'), Dv = /* @__PURE__ */ j('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Lv(n, e) {
  _e(e, !0);
  const t = () => Ci(Be, "$selectedTextStore", r), [r, i] = Ti();
  let a = () => {
  };
  function s(R) {
    return R === a;
  }
  let d = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "style", 3, ""), u = p(e, "ripple", 3, !0), h = p(e, "disabled", 3, !1), f = p(e, "variant", 3, "standard"), v = p(e, "noLabel", 3, !1), g = p(e, "label", 3, void 0), m = p(e, "value", 15), _ = p(e, "key", 3, (R) => R), b = p(e, "dirty", 15, !1), A = p(e, "invalid", 15, a), E = p(e, "updateInvalid", 19, () => s(A())), y = p(e, "required", 3, !1), T = p(e, "inputId", 19, () => "SMUI-select-" + xv++), C = p(e, "hiddenInput", 3, !1), w = p(e, "withLeadingIcon", 3, a), I = p(e, "anchor$use", 19, () => []), S = p(e, "anchor$class", 3, ""), L = p(e, "selectedTextContainer$use", 19, () => []), k = p(e, "selectedTextContainer$class", 3, ""), D = p(e, "selectedText$use", 19, () => []), O = p(e, "selectedText$class", 3, ""), Z = p(e, "dropdownIcon$use", 19, () => []), G = p(e, "dropdownIcon$class", 3, ""), B = p(e, "menu$class", 3, ""), M = /* @__PURE__ */ ze(e, [
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
  const X = s(A());
  s(A()) && A(!1);
  let le, P = /* @__PURE__ */ se(void 0), ee = Ee({}), ce = Ee({}), Se, be = Ee({}), de = /* @__PURE__ */ se(-1);
  const Ce = /* @__PURE__ */ Q(() => M.menu$id ?? T() + "-menu");
  let q = /* @__PURE__ */ se(void 0), ge = ye("SMUI:addLayoutListener"), re, W = /* @__PURE__ */ se(!1), J = Ee({}), he = /* @__PURE__ */ se(void 0), Te = /* @__PURE__ */ se(void 0), De = /* @__PURE__ */ se(!1), Le, et = ye("SMUI:select:context"), Ft, nn, H, K, Ae;
  oe("SMUI:list:role", ""), oe("SMUI:list:nav", !1);
  const Be = ar("");
  oe("SMUI:select:selectedText", Be);
  const rn = ar(m());
  xe(() => {
    rr(rn, m());
  }), oe("SMUI:select:value", rn), xe(() => {
    o(P) && o(P).getValue() !== _()(m()) && o(P).setValue(_()(m()));
  });
  let pn = o(de);
  xe(() => {
    if (pn !== o(de))
      if (pn = o(de), o(P))
        o(P).setSelectedIndex(
          o(de),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = an();
        m() !== R[o(de)] && m(R[o(de)]);
      }
  }), xe(() => {
    o(P) && o(P).getDisabled() !== h() && o(P).setDisabled(h());
  }), xe(() => {
    o(P) && b() && o(P).isValid() !== !A() && (E() ? A(!o(P).isValid()) : o(P).setValid(!A()));
  }), xe(() => {
    o(P) && o(P).getRequired() !== y() && o(P).setRequired(y());
  }), ge && (re = ge(Ka)), oe("SMUI:select:leading-icon:mount", (R) => {
    Ft = R;
  }), oe("SMUI:select:leading-icon:unmount", () => {
    Ft = void 0;
  }), oe("SMUI:list:mount", (R) => {
    Le = R;
  }), oe("SMUI:select:helper-text:id", (R) => {
    V(q, R, !0);
  }), oe("SMUI:select:helper-text:mount", (R) => {
    nn = R;
  }), oe("SMUI:select:helper-text:unmount", () => {
    V(q, void 0), nn = void 0;
  }), rt(() => (V(
    P,
    new hv(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          rr(Be, R);
        },
        isSelectAnchorFocused: () => document.activeElement === Se,
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
        getAnchorElement: () => Se,
        setMenuAnchorElement: (R) => {
          V(he, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          V(Te, R, !0);
        },
        setMenuWrapFocus: (R) => {
          V(De, R, !0);
        },
        getSelectedIndex: () => o(de),
        setSelectedIndex: (R) => {
          pn = R, V(de, R, !0), m(an()[o(de)]);
        },
        focusMenuItemAtIndex: (R) => {
          Le.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Le.items.length,
        getMenuItemValues: () => an().map(_()),
        getMenuItemTextAtIndex: (R) => Le.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Le.typeaheadInProgress,
        typeaheadMatchItem: (R, fe) => Le.typeaheadMatchItem(R, fe),
        // getCommonAdapterMethods
        addClass: me,
        removeClass: U,
        hasClass: dr,
        setRippleCenter: (R) => K && K.setRippleCenter(R),
        activateBottomLine: () => K && K.activate(),
        deactivateBottomLine: () => K && K.deactivate(),
        notifyChange: (R) => {
          var fe;
          b(!0), E() && A(!((fe = o(P)) != null && fe.isValid())), je(Tr(), "SMUISelectChange", { value: m(), index: o(de) });
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
  ), V(de, an().indexOf(m()), !0), o(P).init(), sn(X), () => {
    var R;
    (R = o(P)) == null || R.destroy();
  })), Mn(() => {
    re && re();
  });
  function dr(R) {
    return R in ee ? ee[R] : Tr().classList.contains(R);
  }
  function me(R) {
    ee[R] || (ee[R] = !0);
  }
  function U(R) {
    (!(R in ee) || ee[R]) && (ee[R] = !1);
  }
  function F(R, fe) {
    ce[R] != fe && (fe === "" || fe == null ? delete ce[R] : ce[R] = fe);
  }
  function $(R) {
    J[R] || (J[R] = !0);
  }
  function Re(R) {
    (!(R in J) || J[R]) && (J[R] = !1);
  }
  function lt(R) {
    return R in be ? be[R] ?? null : Tr().getAttribute(R);
  }
  function pt(R, fe) {
    be[R] !== fe && (be[R] = fe);
  }
  function Nt(R) {
    (!(R in be) || be[R] != null) && (be[R] = void 0);
  }
  function an() {
    return Le.getOrderedList().map((R) => R.getValue());
  }
  function Di(R) {
    const fe = R.currentTarget.getBoundingClientRect();
    return (ct(R) ? R.touches[0].clientX : R.clientX) - fe.left;
  }
  function ct(R) {
    return "touches" in R;
  }
  function Ut() {
    if (o(P) == null)
      throw new Error("Instance is undefined.");
    return o(P).getUseDefaultValidation();
  }
  function sn(R) {
    var fe;
    (fe = o(P)) == null || fe.setUseDefaultValidation(R);
  }
  function wr() {
    Se.focus();
  }
  function Ka() {
    var R;
    (R = o(P)) == null || R.layout();
  }
  function Tr() {
    return le;
  }
  var Ve = {
    getUseDefaultValidation: Ut,
    setUseDefaultValidation: sn,
    focus: wr,
    layout: Ka,
    getElement: Tr
  }, it = Dv(), Ye = Y(it);
  qe(Ye, (R, fe, st) => ({ class: R, style: fe, ...st }), [
    () => Ge({
      "mdc-select": !0,
      "mdc-select--required": y(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(w()) ? e.leadingIcon : w(),
      "mdc-select--no-label": v() || g() == null,
      "mdc-select--invalid": A(),
      "mdc-select--activated": o(W),
      "mdc-data-table__pagination-rows-per-page-select": et === "data-table:pagination",
      ...ee,
      [l()]: !0
    }),
    () => Object.entries(ce).map(([R, fe]) => `${R}: ${fe};`).concat([c()]).join(" "),
    () => Ra(M, [
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
  var Ht = N(Ye);
  {
    var Pn = (R) => {
      var fe = wv();
      qe(
        fe,
        (st) => ({
          type: "hidden",
          required: y(),
          disabled: h(),
          value: m(),
          ...st
        }),
        [() => ut(M, "input$")],
        void 0,
        void 0,
        !0
      ), x(R, fe);
    };
    te(Ht, (R) => {
      C() && R(Pn);
    });
  }
  var at = z(Ht, 2), bt = (R) => {
    var fe;
    Se.focus(), o(P) && o(P).handleClick(Di(R)), (fe = e.anchor$onclick) == null || fe.call(e, R);
  }, Ot = (R) => {
    var fe;
    o(P) && o(P).handleKeydown(R), (fe = e.onkeydown) == null || fe.call(e, R);
  }, Ke = (R) => {
    var fe;
    o(P) && o(P).handleBlur(), je(Tr(), "blur", R), (fe = e.anchor$onblur) == null || fe.call(e, R);
  }, Rt = (R) => {
    var fe;
    o(P) && o(P).handleFocus(), je(Tr(), "focus", R), (fe = e.anchor$onfocus) == null || fe.call(e, R);
  };
  qe(
    at,
    (R, fe) => ({
      class: R,
      "aria-required": y() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(Ce),
      "aria-expanded": o(W) ? "true" : "false",
      "aria-describedby": o(q),
      role: "combobox",
      tabindex: "0",
      ...be,
      ...fe,
      onclick: bt,
      onkeydown: Ot,
      onblur: Ke,
      onfocus: Rt
    }),
    [
      () => Ge({ "mdc-select__anchor": !0, [S()]: !0 }),
      () => ut(M, "anchor$")
    ]
  );
  var ur = N(at);
  {
    var yn = (R) => {
      var fe = Tv();
      x(R, fe);
    };
    te(ur, (R) => {
      f() === "filled" && R(yn);
    });
  }
  var yt = z(ur, 2);
  {
    var Bt = (R) => {
      {
        let fe = /* @__PURE__ */ Q(() => T() + "-smui-label"), st = /* @__PURE__ */ Q(() => t() !== ""), Ct = /* @__PURE__ */ Q(() => ut(M, "label$"));
        we(
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
                var va = ie(), Li = Y(va);
                {
                  var ei = (ti) => {
                  }, ro = (ti) => {
                    var Ya = ie(), ga = Y(Ya);
                    {
                      var ml = (Lr) => {
                        var ni = He();
                        ue(() => Pe(ni, g())), x(Lr, ni);
                      }, Ja = (Lr) => {
                        var ni = ie(), io = Y(ni);
                        pe(io, g), x(Lr, ni);
                      };
                      te(
                        ga,
                        (Lr) => {
                          typeof g() == "string" ? Lr(ml) : Lr(Ja, !1);
                        },
                        !0
                      );
                    }
                    x(ti, Ya);
                  };
                  te(Li, (ti) => {
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
    te(yt, (R) => {
      f() !== "outlined" && !v() && g() != null && R(Bt);
    });
  }
  var Cn = z(yt, 2);
  {
    var Zt = (R) => {
      {
        let fe = /* @__PURE__ */ Q(() => v() || g() == null), st = /* @__PURE__ */ Q(() => ut(M, "outline$"));
        we(
          Iu(R, $e(
            {
              get noLabel() {
                return o(fe);
              }
            },
            () => o(st),
            {
              children: (Ct, fr) => {
                var hr = ie(), va = Y(hr);
                {
                  var Li = (ei) => {
                    {
                      let ro = /* @__PURE__ */ Q(() => T() + "-smui-label"), ti = /* @__PURE__ */ Q(() => t() !== ""), Ya = /* @__PURE__ */ Q(() => ut(M, "label$"));
                      we(
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
                          () => o(Ya),
                          {
                            children: (ga, ml) => {
                              var Ja = ie(), Lr = Y(Ja);
                              {
                                var ni = (ma) => {
                                }, io = (ma) => {
                                  var pl = ie(), vc = Y(pl);
                                  {
                                    var gc = (Oi) => {
                                      var pa = He();
                                      ue(() => Pe(pa, g())), x(Oi, pa);
                                    }, mc = (Oi) => {
                                      var pa = ie(), pc = Y(pa);
                                      pe(pc, g), x(Oi, pa);
                                    };
                                    te(
                                      vc,
                                      (Oi) => {
                                        typeof g() == "string" ? Oi(gc) : Oi(mc, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(ma, pl);
                                };
                                te(Lr, (ma) => {
                                  g() == null ? ma(ni) : ma(io, !1);
                                });
                              }
                              x(ga, Ja);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ga) => H = ga,
                        () => H
                      );
                    }
                  };
                  te(va, (ei) => {
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
    te(Cn, (R) => {
      f() === "outlined" && R(Zt);
    });
  }
  var Qr = z(Cn, 2);
  pe(Qr, () => e.leadingIcon ?? ve);
  var An = z(Qr, 2);
  qe(An, (R, fe) => ({ class: R, ...fe }), [
    () => Ge({
      "mdc-select__selected-text-container": !0,
      [k()]: !0
    }),
    () => ut(M, "selectedTextContainer$")
  ]);
  var Dr = N(An);
  qe(
    Dr,
    (R, fe) => ({
      id: T() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": T() + "-smui-label",
      ...fe
    }),
    [
      () => Ge({
        "mdc-select__selected-text": !0,
        [O()]: !0
      }),
      () => ut(M, "selectedText$")
    ]
  );
  var ha = N(Dr);
  Me(Dr, (R, fe) => ne == null ? void 0 : ne(R, fe), D), Me(An, (R, fe) => ne == null ? void 0 : ne(R, fe), L);
  var En = z(An, 2);
  qe(En, (R, fe) => ({ class: R, ...fe }), [
    () => Ge({
      "mdc-select__dropdown-icon": !0,
      [G()]: !0
    }),
    () => ut(M, "dropdownIcon$")
  ]), Me(En, (R, fe) => ne == null ? void 0 : ne(R, fe), Z);
  var cr = z(En, 2);
  {
    var jn = (R) => {
      {
        let fe = /* @__PURE__ */ Q(() => ut(M, "ripple$"));
        we(_u(R, $e(() => o(fe))), (st) => K = st, () => K);
      }
    };
    te(cr, (R) => {
      f() !== "outlined" && u() && R(jn);
    });
  }
  we(at, (R) => Se = R, () => Se), Me(at, (R, fe) => ne == null ? void 0 : ne(R, fe), I);
  var $r = z(at, 2);
  {
    let R = /* @__PURE__ */ Q(() => Ge({
      "mdc-select__menu": !0,
      ...J,
      [B()]: !0
    })), fe = /* @__PURE__ */ Q(() => ut(M, "menu$"));
    pv($r, $e(
      {
        get class() {
          return o(R);
        },
        get id() {
          return o(Ce);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(he);
        },
        get anchorCorner() {
          return o(Te);
        }
      },
      () => o(fe),
      {
        onSMUIMenuSelected: (st) => {
          var Ct;
          o(P) && o(P).handleMenuItemAction(st.detail.index), (Ct = e.onSMUIMenuSelected) == null || Ct.call(e, st);
        },
        onSMUIMenuSurfaceClosing: (st) => {
          var Ct;
          o(P) && o(P).handleMenuClosing(), (Ct = e.onSMUIMenuSurfaceClosing) == null || Ct.call(e, st);
        },
        onSMUIMenuSurfaceClosed: (st) => {
          var Ct;
          o(P) && o(P).handleMenuClosed(), (Ct = e.onSMUIMenuSurfaceClosed) == null || Ct.call(e, st);
        },
        onSMUIMenuSurfaceOpened: (st) => {
          var Ct;
          o(P) && o(P).handleMenuOpened(), (Ct = e.onSMUIMenuSurfaceOpened) == null || Ct.call(e, st);
        },
        get open() {
          return o(W);
        },
        set open(st) {
          V(W, st, !0);
        },
        children: (st, Ct) => {
          {
            let fr = /* @__PURE__ */ Q(() => ut(M, "list$"));
            _v(st, $e(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(De);
                }
              },
              () => o(fr),
              {
                get selectedIndex() {
                  return o(de);
                },
                set selectedIndex(hr) {
                  V(de, hr, !0);
                },
                children: (hr, va) => {
                  var Li = ie(), ei = Y(Li);
                  pe(ei, () => e.children ?? ve), x(hr, Li);
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
  we(Ye, (R) => le = R, () => le), Me(Ye, (R, fe) => Fn == null ? void 0 : Fn(R, fe), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: me,
    removeClass: U,
    addStyle: F
  })), Me(Ye, (R, fe) => go == null ? void 0 : go(R, fe), () => ({ addClass: me, removeClass: U })), Me(Ye, (R, fe) => ne == null ? void 0 : ne(R, fe), d);
  var no = z(Ye, 2);
  {
    var fc = (R) => {
      {
        let fe = /* @__PURE__ */ Q(() => ut(M, "helperText$"));
        Sv(R, $e(() => o(fe), {
          children: (st, Ct) => {
            var fr = ie(), hr = Y(fr);
            pe(hr, () => e.helperText ?? ve), x(st, fr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    te(no, (R) => {
      e.helperText && R(fc);
    });
  }
  ue(() => Pe(ha, t())), x(n, it);
  var hc = Ie(Ve);
  return i(), hc;
}
function Ov(n, e) {
  _e(e, !0);
  const t = () => Ci(u, "$selectedValue", r), [r, i] = Ti();
  let a = p(e, "use", 19, () => []);
  p(e, "class", 3, "");
  let s = p(e, "value", 3, ""), d = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const c = ye("SMUI:select:selectedText"), u = ye("SMUI:select:value");
  oe("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ Q(() => s() != null && s() !== "" && t() === s());
  rt(f), Mn(f);
  function f() {
    o(h) && l && rr(c, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var g = { getElement: v };
  we(
    Cv(n, $e(
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
        children: (_, b) => {
          var A = ie(), E = Y(A);
          pe(E, () => e.children ?? ve), x(_, A);
        },
        $$slots: { default: !0 }
      }
    )),
    (_) => l = _,
    () => l
  );
  var m = Ie(g);
  return i(), m;
}
function Rv(n, e) {
  _e(e, !0);
  let t = p(e, "data", 19, () => []);
  p(e, "placeholder", 3, "");
  let r = p(e, "label", 3, "");
  p(e, "description", 3, "");
  let i = p(e, "value", 15), a = p(e, "required", 3, !1);
  p(e, "size", 3, "sm");
  let s = p(e, "variant", 3, "standard"), d = p(e, "selectedOptionIndex", 31, () => -1), l = p(e, "disabled", 3, !1);
  function c(u) {
    return () => d(u);
  }
  Lv(n, {
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
      var f = ie(), v = Y(f);
      hn(v, 17, t, Er, (g, m, _) => {
        {
          let b = /* @__PURE__ */ Q(() => c(_));
          Ov(g, {
            get onclick() {
              return o(b);
            },
            get value() {
              return o(m).value;
            },
            children: (A, E) => {
              var y = He();
              ue(() => Pe(y, o(m).label)), x(A, y);
            },
            $$slots: { default: !0 }
          });
        }
      }), x(u, f);
    },
    $$slots: { default: !0 }
  }), Ie();
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
function Mv(n) {
  return n ? n.scrollHeight > n.offsetHeight : !1;
}
function Pv(n) {
  return n ? n.scrollTop === 0 : !1;
}
function kv(n) {
  return n ? Math.ceil(n.scrollHeight - n.scrollTop) === n.clientHeight : !1;
}
function Fv(n) {
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
var Nv = (
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
var Uv = (
  /** @class */
  function(n) {
    vn(e, n);
    function e(t) {
      var r = n.call(this, Ze(Ze({}, e.defaultAdapter), t)) || this;
      return r.dialogOpen = !1, r.isFullscreen = !1, r.animationFrame = 0, r.animationTimer = 0, r.escapeKeyAction = ya.CLOSE_ACTION, r.scrimClickAction = ya.CLOSE_ACTION, r.autoStackButtons = !0, r.areButtonsStacked = !1, r.suppressDefaultPressSelector = ya.SUPPRESS_DEFAULT_PRESS_SELECTOR, r.animFrame = new Nv(), r.contentScrollHandler = function() {
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
  }(gn)
), Hv = /* @__PURE__ */ j('<div class="mdc-dialog__surface-scrim"></div>'), Bv = /* @__PURE__ */ j('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function Gv(n, e) {
  _e(e, !0);
  const t = () => Ci(D, "$aboveFullscreenShown", r), [r, i] = Ti(), { FocusTrap: a } = wh, { closest: s, matches: d } = qa;
  let l = p(e, "use", 19, () => []), c = p(e, "class", 3, ""), u = p(e, "open", 15, !1), h = p(e, "selection", 3, !1), f = p(e, "escapeKeyAction", 3, "close"), v = p(e, "scrimClickAction", 3, "close"), g = p(e, "autoStackButtons", 3, !0), m = p(e, "fullscreen", 3, !1), _ = p(e, "sheet", 3, !1), b = p(e, "noContentPadding", 3, !1), A = p(e, "container$class", 3, ""), E = p(e, "surface$class", 3, ""), y = /* @__PURE__ */ ze(e, [
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
  ]), T, C = /* @__PURE__ */ se(void 0), w = new ca(), I = Ee({}), S, L = ar(!1), k = ye("SMUI:dialog:aboveFullscreen"), D = ye("SMUI:dialog:aboveFullscreenShown") ?? ar(!1), O = ye("SMUI:addLayoutListener"), Z, G = [], B = (U) => (G.push(U), () => {
    const F = G.indexOf(U);
    F >= 0 && G.splice(F, 1);
  });
  oe("SMUI:dialog:actions:reversed", L), oe("SMUI:addLayoutListener", B), oe("SMUI:dialog:selection", h()), oe("SMUI:dialog:aboveFullscreen", k || m()), oe("SMUI:dialog:aboveFullscreenShown", D), _() && oe("SMUI:icon-button:context", "dialog:sheet"), xe(() => {
    o(C) && o(C).getEscapeKeyAction() !== f() && o(C).setEscapeKeyAction(f());
  }), xe(() => {
    o(C) && o(C).getScrimClickAction() !== v() && o(C).setScrimClickAction(v());
  }), xe(() => {
    o(C) && o(C).getAutoStackButtons() !== g() && o(C).setAutoStackButtons(g());
  }), xe(() => {
    g() || rr(L, !0);
  }), O && (Z = O(W)), xe(() => {
    o(C) && o(C).isOpen() !== u() && (u() ? o(C).open({ isAboveFullscreenDialog: !!k }) : o(C).close());
  });
  let M = t();
  xe(() => {
    m() && o(C) && M !== t() && (M = t(), t() ? o(C).showSurfaceScrim() : o(C).hideSurfaceScrim());
  }), rt(() => (S = new a(T, { initialFocusEl: be() ?? void 0 }), V(
    C,
    new Uv({
      addBodyClass: (U) => document.body.classList.add(U),
      addClass: le,
      areButtonsStacked: () => Fv(ee()),
      clickDefaultButton: () => {
        const U = ce();
        U && U.click();
      },
      eventTargetMatches: (U, F) => U ? d(U, F) : !1,
      getActionFromEvent: (U) => {
        if (!U.target)
          return "";
        const F = s(U.target, "[data-mdc-dialog-action]");
        return F && F.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: be,
      hasClass: X,
      isContentScrollable: () => Mv(Se()),
      notifyClosed: (U) => {
        u(!1), je(J(), "SMUIDialogClosed", U ? { action: U } : {});
      },
      notifyClosing: (U) => je(J(), "SMUIDialogClosing", U ? { action: U } : {}),
      notifyOpened: () => je(J(), "SMUIDialogOpened", {}),
      notifyOpening: () => je(J(), "SMUIDialogOpening", {}),
      releaseFocus: () => S.releaseFocus(),
      removeBodyClass: (U) => document.body.classList.remove(U),
      removeClass: P,
      reverseButtons: () => {
        rr(L, !0);
      },
      trapFocus: () => S.trapFocus(),
      registerContentEventHandler: (U, F) => {
        const $ = Se();
        $ instanceof HTMLElement && w.on($, U, F);
      },
      deregisterContentEventHandler: (U, F) => {
        const $ = Se();
        $ instanceof HTMLElement && w.off($, U, F);
      },
      isScrollableContentAtTop: () => Pv(Se()),
      isScrollableContentAtBottom: () => kv(Se()),
      registerWindowEventHandler: (U, F) => w.on(window, U, F),
      deregisterWindowEventHandler: (U, F) => w.off(window, U, F)
    }),
    !0
  ), o(C).init(), () => {
    var U;
    (U = o(C)) == null || U.destroy(), w.clear();
  })), Mn(() => {
    Z && Z();
  });
  function X(U) {
    return U in I ? I[U] : J().classList.contains(U);
  }
  function le(U) {
    I[U] || (I[U] = !0);
  }
  function P(U) {
    (!(U in I) || I[U]) && (I[U] = !1);
  }
  function ee() {
    return [].slice.call(J().querySelectorAll(".mdc-dialog__button"));
  }
  function ce() {
    return J().querySelector("[data-mdc-dialog-button-default]");
  }
  function Se() {
    return J().querySelector(".mdc-dialog__content");
  }
  function be() {
    return J().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function de() {
    k && rr(D, !0), requestAnimationFrame(() => {
      G.forEach((U) => U());
    });
  }
  function Ce() {
    G.forEach((U) => U());
  }
  function q() {
    k && rr(D, !1);
  }
  function ge() {
    return u();
  }
  function re(U) {
    u(U);
  }
  function W() {
    var U;
    return (U = o(C)) == null ? void 0 : U.layout();
  }
  function J() {
    return T;
  }
  var he = { isOpen: ge, setOpen: re, layout: W, getElement: J }, Te = Bv();
  Kt("resize", _s, () => u() && o(C) && o(C).layout()), Kt("orientationchange", _s, () => u() && o(C) && o(C).layout()), Kt("keydown", $o.body, (U) => o(C) && o(C).handleDocumentKeydown(U));
  var De = Y(Te), Le = (U) => {
    var F;
    de(), (F = e.onSMUIDialogOpening) == null || F.call(e, U);
  }, et = (U) => {
    var F;
    Ce(), (F = e.onSMUIDialogOpened) == null || F.call(e, U);
  }, Ft = (U) => {
    var F;
    q(), (F = e.onSMUIDialogClosed) == null || F.call(e, U);
  }, nn = (U) => {
    var F;
    o(C) && o(C).handleClick(U), (F = e.onclick) == null || F.call(e, U);
  }, H = (U) => {
    var F;
    o(C) && o(C).handleKeydown(U), (F = e.onkeydown) == null || F.call(e, U);
  };
  qe(
    De,
    (U, F) => ({
      class: U,
      role: "alertdialog",
      "aria-modal": "true",
      ...F,
      onSMUIDialogOpening: Le,
      onSMUIDialogOpened: et,
      onSMUIDialogClosed: Ft,
      onclick: nn,
      onkeydown: H
    }),
    [
      () => Ge({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": m(),
        "mdc-dialog--sheet": _(),
        "mdc-dialog--no-content-padding": b(),
        "smui-dialog--selection": h(),
        ...I,
        [c()]: !0
      }),
      () => Ra(y, ["container$", "surface$"])
    ]
  );
  var K = N(De);
  qe(K, (U, F) => ({ class: U, ...F }), [
    () => Ge({ "mdc-dialog__container": !0, [A()]: !0 }),
    () => ut(y, "container$")
  ]);
  var Ae = N(K);
  qe(Ae, (U, F) => ({ class: U, role: "alertdialog", "aria-modal": "true", ...F }), [
    () => Ge({ "mdc-dialog__surface": !0, [E()]: !0 }),
    () => ut(y, "surface$")
  ]);
  var Be = N(Ae);
  pe(Be, () => e.children ?? ve);
  var rn = z(Be, 2);
  {
    var pn = (U) => {
      var F = Hv();
      Kt("transitionend", F, () => o(C) && o(C).handleSurfaceScrimTransitionEnd()), x(U, F);
    };
    te(rn, (U) => {
      m() && U(pn);
    });
  }
  we(De, (U) => T = U, () => T), Me(De, (U, F) => ne == null ? void 0 : ne(U, F), l);
  var dr = z(De, 2);
  pe(dr, () => e.over ?? ve), x(n, Te);
  var me = Ie(he);
  return i(), me;
}
function Vv(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    fa(n, $e(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => t,
      {
        children: (s, d) => {
          var l = ie(), c = Y(l);
          pe(c, () => e.children ?? ve), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ie(a);
}
function Au(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
    fa(n, $e({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, {
      children: (s, d) => {
        var l = ie(), c = Y(l);
        pe(c, () => e.children ?? ve), x(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ie(a);
}
function qv(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return we(
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
          var l = ie(), c = Y(l);
          pe(c, () => e.children ?? ve), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ie(a);
}
const zs = ar({
  component: null,
  props: {},
  isOpen: !1
}), Wv = ar([]);
Wv.subscribe;
const $l = Ee({ freeze: !1 });
function zv(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ se(void 0), r = /* @__PURE__ */ se(!1);
  const i = zs.subscribe((l) => {
    V(t, l, !0), V(r, l.isOpen, !0), $l.freeze = !1;
  });
  rt(() => () => i()), xe(() => {
    $l.freeze = o(
      r
      // freeze drawer controls when dialog is open
    );
  });
  var a = ie(), s = Y(a);
  {
    var d = (l) => {
      var c = ie(), u = Y(c);
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
    te(s, (l) => {
      o(t).isOpen && o(t).component && l(d);
    });
  }
  x(n, a), Ie();
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
function jv(n) {
  zs.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
var Zv = /* @__PURE__ */ j('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function al(n, e) {
  _e(e, !0);
  let t = p(e, "open", 15, !1), r = p(e, "title", 3, ""), i = p(e, "message", 3, ""), a = p(e, "confirmActionText", 3, "OK"), s = p(e, "confirmActionColor", 3, "primary"), d = p(e, "cancelActionText", 3, "Cancel"), l = p(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
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
      Au(f, {
        children: (v, g) => {
          var m = Zv(), _ = N(m);
          ue(() => Pe(_, i())), x(v, m);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Ie();
}
var Xv = /* @__PURE__ */ j('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), Kv = /* @__PURE__ */ j("<!> <!>", 1), Yv = /* @__PURE__ */ j('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function js(n, e) {
  _e(e, !0);
  let t = p(e, "open", 15, !1), r = p(e, "title", 3, ""), i = p(e, "confirmActionText", 3, "Confirm"), a = p(e, "confirmActionColor", 3, "primary"), s = p(e, "cancelActionText", 3, "Cancel"), d = p(e, "width", 3, "80vw"), l = p(e, "maxWidth", 3, "85vw"), c = p(e, "height", 3, "85vh"), u = p(e, "maxHeight", 3, "85vh"), h = p(e, "confirmDisabled", 3, !1), f = p(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), v = p(e, "showCloseButton", 3, !0), g = p(e, "onClose", 3, () => {
  }), m = p(e, "onCancel", 3, () => {
  }), _ = p(e, "onConfirm", 3, () => {
  });
  function b(E) {
    E.detail.action === "cancel" ? m()() : E.detail.action === "confirm" ? _()() : (E.detail.action, g()());
  }
  let A = /* @__PURE__ */ Q(() => {
    let E;
    return a() === "primary" ? E = f() : E = "#FF203A", h() ? "" : `background-color: ${E}; color: white;`;
  });
  {
    let E = /* @__PURE__ */ Q(() => `width: ${d()}; max-width: ${l()}; height: ${c()}; max-height: ${u()};`);
    Gv(n, {
      "aria-labelledby": "large-scroll-title",
      "aria-describedby": "large-scroll-content",
      onSMUIDialogClosed: b,
      get surface$style() {
        return o(E);
      },
      get open() {
        return t();
      },
      set open(y) {
        t(y);
      },
      children: (y, T) => {
        var C = Yv(), w = Y(C);
        Vv(w, {
          children: (k, D) => {
            var O = Xv(), Z = N(O), G = N(Z), B = z(Z, 2);
            {
              var M = (X) => {
                Ou(X, {
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
              te(B, (X) => {
                v() && X(M);
              });
            }
            ue(() => {
              nt(O, `background-color: ${f()};`), Pe(G, r());
            }), x(k, O);
          },
          $$slots: { default: !0 }
        });
        var I = z(w, 2);
        Au(I, {
          id: "dialog__content",
          children: (k, D) => {
            var O = ie(), Z = Y(O);
            pe(Z, () => e.content ?? ve), x(k, O);
          },
          $$slots: { default: !0 }
        });
        var S = z(I, 2), L = N(S);
        qv(L, {
          class: "oscd-dialog__actions",
          children: (k, D) => {
            var O = Kv(), Z = Y(O);
            {
              var G = (M) => {
                dn(M, {
                  type: "button",
                  action: "cancel",
                  color: "secondary",
                  children: (X, le) => {
                    var P = He();
                    ue(() => Pe(P, s())), x(X, P);
                  },
                  $$slots: { default: !0 }
                });
              };
              te(Z, (M) => {
                s() && M(G);
              });
            }
            var B = z(Z, 2);
            dn(B, {
              type: "button",
              action: "confirm",
              get disabled() {
                return h();
              },
              get style() {
                return o(A);
              },
              children: (M, X) => {
                var le = He();
                ue(() => Pe(le, i())), x(M, le);
              },
              $$slots: { default: !0 }
            }), x(k, O);
          },
          $$slots: { default: !0 }
        }), x(y, C);
      },
      $$slots: { default: !0 }
    });
  }
  Ie();
}
var Jv = /* @__PURE__ */ j('<span class="oscd-icon"><!></span>');
function Lt(n, e) {
  var t = Jv(), r = N(t);
  pe(r, () => e.children ?? ve), x(n, t);
}
var Qv = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Eu(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Qv();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var $v = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Su(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = $v();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var eg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function xu(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = eg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var tg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function ng(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = tg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var rg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function ig(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = rg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var ag = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function wu(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = ag();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
Vc();
var sg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function og(n) {
  var e = sg();
  x(n, e);
}
var lg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function dg(n, e) {
  let t = p(e, "size", 3, "24px"), r = p(e, "fill", 3, "#004552");
  var i = lg();
  ue(() => {
    At(i, "height", t()), At(i, "width", t()), At(i, "fill", r());
  }), x(n, i);
}
var ug = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function cg(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = ug();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var fg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function hg(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = fg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var vg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function gg(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = vg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var mg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function pg(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = mg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var _g = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function Ig(n, e) {
  let t = p(e, "svgStyles", 8, "");
  Lt(n, {
    children: (r, i) => {
      var a = _g();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var bg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Tu(n, e) {
  let t = p(e, "svgStyles", 8, "");
  Lt(n, {
    children: (r, i) => {
      var a = bg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var yg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function Du(n, e) {
  let t = p(e, "svgStyles", 8, "");
  Lt(n, {
    children: (r, i) => {
      var a = yg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var Cg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg>');
function sl(n, e) {
  let t = p(e, "svgStyles", 3, "fill: gray; width: 25px; height: 25px");
  Lt(n, {
    children: (r, i) => {
      var a = Cg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var Ag = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"></path></svg>');
function Eg(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Ag();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var Sg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path></svg>');
function xg(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Sg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var wg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');
function Tg(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = wg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
ft(["change"]);
ft(["change"]);
function Dg(n, e, t, r) {
  e() && ((n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()), n.key === "Escape" && (n.preventDefault(), r()));
}
var Lg = /* @__PURE__ */ j('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Lu(n, e) {
  _e(e, !0);
  let t = p(e, "content", 3, ""), r = p(e, "side", 3, "top"), i = p(e, "hoverDelay", 3, 0), a = p(e, "transitionDuration", 3, 80), s = p(e, "disabled", 3, !1);
  const d = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ se(null), c = /* @__PURE__ */ se(null), u = /* @__PURE__ */ se(null), h = /* @__PURE__ */ se(null), f = /* @__PURE__ */ se(!1), v = /* @__PURE__ */ se(null), g = /* @__PURE__ */ se(null);
  function m() {
    !t() || s() || (o(v) && clearTimeout(o(v)), i() > 0 ? V(v, setTimeout(() => V(f, !0), i()), !0) : V(f, !0));
  }
  function _() {
    o(v) && clearTimeout(o(v)), V(f, !1);
  }
  function b() {
    m();
  }
  function A() {
    _();
  }
  function E() {
    m();
  }
  function y() {
    _();
  }
  function T() {
    if (!o(c) || !o(h) || !o(l) || s()) return;
    const S = o(l).getBoundingClientRect(), L = o(h).getBoundingClientRect();
    let k = 0, D = 0;
    const O = 8;
    switch (r()) {
      case "top":
        k = S.top - L.height - O, D = S.left + S.width / 2 - L.width / 2;
        break;
      case "bottom":
        k = S.bottom + O, D = S.left + S.width / 2 - L.width / 2;
        break;
      case "left":
        k = S.top + S.height / 2 - L.height / 2, D = S.left - L.width - O;
        break;
      case "right":
        k = S.top + S.height / 2 - L.height / 2, D = S.right + O;
        break;
    }
    o(c).style.top = `${k + window.scrollY}px`, o(c).style.left = `${D + window.scrollX}px`;
  }
  function C() {
    var S;
    (S = o(g)) == null || S.disconnect(), V(g, null), o(c) && o(c).parentNode && o(c).parentNode.removeChild(o(c)), V(c, null), V(h, null), V(u, null), o(v) && clearTimeout(o(v));
  }
  Mn(C), xe(() => {
    if (!(!o(f) || !t() || s())) {
      if (!o(c)) {
        V(c, document.createElement("div"), !0), o(c).style.position = "absolute", o(c).style.zIndex = "9999", o(c).style.pointerEvents = "none", o(c).style.opacity = "0", o(c).style.transition = `opacity ${a()}ms ease`, o(c).id = d, o(c).setAttribute("role", "tooltip"), document.body.appendChild(o(c)), V(u, o(c).attachShadow({ mode: "open" }), !0);
        const S = document.createElement("style");
        S.textContent = `
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
      `, o(u).appendChild(S), V(h, document.createElement("div"), !0), o(u).appendChild(o(h)), V(
          g,
          new MutationObserver(() => {
            o(f) && T();
          }),
          !0
        ), o(g).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = t()), o(c) && (o(c).style.opacity = "1", T());
    }
  }), xe(() => {
    if (o(f) || !o(c))
      return;
    o(c).style.opacity = "0";
    const S = o(c), L = setTimeout(
      () => {
        S && S.parentNode && S.parentNode.removeChild(S), o(c) === S && C();
      },
      a()
    );
    return () => clearTimeout(L);
  });
  var w = Lg();
  w.__keydown = [Dg, t, m, _];
  var I = N(w);
  pe(I, () => e.children ?? ve), we(w, (S) => V(l, S), () => o(l)), ue(() => {
    At(w, "aria-describedby", t() && !s() ? d : void 0), At(w, "aria-haspopup", t() ? "true" : void 0), At(w, "aria-expanded", t() ? o(f) ? "true" : "false" : void 0);
  }), Kt("mouseenter", w, b), Kt("mouseleave", w, A), Kt("focus", w, E), Kt("blur", w, y), x(n, w), Ie();
}
ft(["keydown"]);
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
}, ed = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, si = {
  ARIA_SELECTED: ed.ARIA_SELECTED,
  ARIA_SORT: ed.ARIA_SORT
}, In;
(function(n) {
  n.ASCENDING = "ascending", n.DESCENDING = "descending", n.NONE = "none", n.OTHER = "other";
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
var Og = (
  /** @class */
  function(n) {
    vn(e, n);
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
      return th(this, void 0, void 0, function() {
        return nh(this, function(t) {
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, pr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, pr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, si.ARIA_SORT, In.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, In.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, pr.HEADER_CELL_SORTED);
      var d = this.adapter.getAttributeByHeaderCellIndex(i, si.ARIA_SORT), l = In.NONE;
      d === In.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, pr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, si.ARIA_SORT, In.DESCENDING), l = In.DESCENDING) : d === In.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, pr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, si.ARIA_SORT, In.ASCENDING), l = In.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, si.ARIA_SORT, In.ASCENDING), l = In.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
  }(gn)
), Rg = /* @__PURE__ */ j('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Mg = /* @__PURE__ */ j("<div><div><table><!></table></div> <!> <!></div>");
function Pg(n, e) {
  _e(e, !0);
  const t = () => Ci(O, "$progressClosed", r), [r, i] = Ti(), { closest: a } = qa;
  let s = p(e, "use", 19, () => []), d = p(e, "class", 3, ""), l = p(e, "stickyHeader", 3, !1), c = p(e, "sortable", 3, !1), u = p(e, "sort", 15, null), h = p(e, "sortDirection", 15, "ascending"), f = p(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = p(e, "sortDescendingAriaLabel", 3, "sorted, descending"), g = p(e, "container$use", 19, () => []), m = p(e, "container$class", 3, ""), _ = p(e, "table$use", 19, () => []), b = p(e, "table$class", 3, ""), A = /* @__PURE__ */ ze(e, [
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
  ]), E, y = /* @__PURE__ */ se(void 0), T, C = /* @__PURE__ */ se(void 0), w = /* @__PURE__ */ se(void 0), I = Ee({}), S = /* @__PURE__ */ se(Ee({ height: "auto", top: "initial" })), L = ye("SMUI:addLayoutListener"), k, D = !1, O = ar(!1), Z = ar(u());
  xe(() => {
    rr(Z, u());
  });
  let G = ar(h());
  xe(() => {
    rr(G, h());
  }), oe("SMUI:checkbox:context", "data-table"), oe("SMUI:linear-progress:context", "data-table"), oe("SMUI:linear-progress:closed", O), oe("SMUI:data-table:sortable", c()), oe("SMUI:data-table:sort", Z), oe("SMUI:data-table:sortDirection", G), oe("SMUI:data-table:sortAscendingAriaLabel", f()), oe("SMUI:data-table:sortDescendingAriaLabel", v()), L && (k = L(be));
  let B;
  xe(() => {
    e.progress && o(y) && B !== t() && (B = t(), t() ? o(y).hideProgress() : o(y).showProgress());
  }), oe("SMUI:checkbox:mount", () => {
    o(y) && D && o(y).layout();
  }), oe("SMUI:data-table:header:mount", (H) => {
    V(C, H, !0);
  }), oe("SMUI:data-table:header:unmount", () => {
    V(C, void 0);
  }), oe("SMUI:data-table:body:mount", (H) => {
    V(w, H, !0);
  }), oe("SMUI:data-table:body:unmount", () => {
    V(w, void 0);
  }), rt(() => (V(
    y,
    new Og({
      addClass: X,
      removeClass: le,
      getHeaderCellElements: () => {
        var H;
        return ((H = o(C)) == null ? void 0 : H.cells.map((K) => K.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var H;
        return ((H = o(C)) == null ? void 0 : H.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (H, K) => {
        var Ae;
        return ((Ae = o(C)) == null ? void 0 : Ae.orderedCells[H].getAttr(K)) ?? null;
      },
      setAttributeByHeaderCellIndex: (H, K, Ae) => {
        var Be;
        (Be = o(C)) == null || Be.orderedCells[H].addAttr(K, Ae);
      },
      setClassNameByHeaderCellIndex: (H, K) => {
        var Ae;
        (Ae = o(C)) == null || Ae.orderedCells[H].addClass(K);
      },
      removeClassNameByHeaderCellIndex: (H, K) => {
        var Ae;
        (Ae = o(C)) == null || Ae.orderedCells[H].removeClass(K);
      },
      notifySortAction: (H) => {
        u(H.columnId), h(H.sortValue), je(de(), "SMUIDataTableSorted", H);
      },
      getTableContainerHeight: () => T.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const H = de().querySelector(".mdc-data-table__header-row");
        if (!H)
          throw new Error("MDCDataTable: Table header element not found.");
        return H.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (H) => {
        V(S, H, !0);
      },
      addClassAtRowIndex: (H, K) => {
        var Ae;
        (Ae = o(w)) == null || Ae.orderedRows[H].addClass(K);
      },
      getRowCount: () => {
        var H;
        return ((H = o(w)) == null ? void 0 : H.rows.length) ?? 0;
      },
      getRowElements: () => {
        var H;
        return ((H = o(w)) == null ? void 0 : H.rows.map((K) => K.element)) ?? [];
      },
      getRowIdAtIndex: (H) => {
        var K;
        return ((K = o(w)) == null ? void 0 : K.orderedRows[H].rowId) ?? null;
      },
      getRowIndexByChildElement: (H) => {
        var K;
        return ((K = o(w)) == null ? void 0 : K.orderedRows.map((Ae) => Ae.element).indexOf(a(H, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var H;
        return ((H = o(w)) == null ? void 0 : H.rows.filter((K) => K.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (H) => {
        var Ae;
        const K = (Ae = o(w)) == null ? void 0 : Ae.orderedRows[H].checkbox;
        return K ? K.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var K;
        const H = (K = o(C)) == null ? void 0 : K.checkbox;
        return H ? H.checked : !1;
      },
      isRowsSelectable: () => !!de().querySelector(".mdc-data-table__row-checkbox") || !!de().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (H) => {
        var Ae;
        const K = (Ae = o(w)) == null ? void 0 : Ae.orderedRows[H.rowIndex];
        K && je(de(), "SMUIDataTableSelectionChanged", {
          row: K.element,
          rowId: K.rowId,
          rowIndex: H.rowIndex,
          selected: H.selected
        });
      },
      notifySelectedAll: () => {
        P(!1), je(de(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        P(!1), je(de(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (H) => je(de(), "SMUIDataTableClickRow", H),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (H, K) => {
        var Ae;
        (Ae = o(w)) == null || Ae.orderedRows[H].removeClass(K);
      },
      setAttributeAtRowIndex: (H, K, Ae) => {
        var Be;
        (Be = o(w)) == null || Be.orderedRows[H].addAttr(K, Ae);
      },
      setHeaderRowCheckboxChecked: (H) => {
        var Ae;
        const K = (Ae = o(C)) == null ? void 0 : Ae.checkbox;
        K && (K.checked = H);
      },
      setHeaderRowCheckboxIndeterminate: P,
      setRowCheckboxCheckedAtIndex: (H, K) => {
        var Be;
        const Ae = (Be = o(w)) == null ? void 0 : Be.orderedRows[H].checkbox;
        Ae && (Ae.checked = K);
      },
      setSortStatusLabelByHeaderCellIndex: (H, K) => {
      }
    }),
    !0
  ), o(y).init(), o(y).layout(), D = !0, () => {
    var H;
    (H = o(y)) == null || H.destroy();
  })), Mn(() => {
    k && k();
  });
  function M(H) {
    o(y) && o(y).handleRowCheckboxChange(H);
  }
  function X(H) {
    I[H] || (I[H] = !0);
  }
  function le(H) {
    (!(H in I) || I[H]) && (I[H] = !1);
  }
  function P(H) {
    var Ae;
    const K = (Ae = o(C)) == null ? void 0 : Ae.checkbox;
    K && (K.indeterminate = H);
  }
  function ee(H) {
    if (!o(y) || !H.detail.target)
      return;
    const K = a(H.detail.target, ".mdc-data-table__header-cell--with-sort");
    K && Se(K);
  }
  function ce(H) {
    if (!o(y) || !H.detail.target)
      return;
    const K = a(H.detail.target, ".mdc-data-table__row");
    K && o(y) && o(y).handleRowClick({ rowId: H.detail.rowId, row: K });
  }
  function Se(H) {
    var rn, pn;
    const K = ((rn = o(C)) == null ? void 0 : rn.orderedCells) ?? [], Ae = K.map((dr) => dr.element).indexOf(H);
    if (Ae === -1)
      return;
    const Be = K[Ae].columnId ?? null;
    (pn = o(y)) == null || pn.handleSortAction({ columnId: Be, columnIndex: Ae, headerCell: H });
  }
  function be() {
    var H;
    return (H = o(y)) == null ? void 0 : H.layout();
  }
  function de() {
    return E;
  }
  var Ce = { layout: be, getElement: de }, q = Mg(), ge = (H) => {
    var K;
    o(y) && o(y).handleHeaderRowCheckboxChange(), (K = e.onSMUIDataTableHeaderCheckboxChange) == null || K.call(e, H);
  }, re = (H) => {
    var K;
    ee(H), (K = e.onSMUIDataTableHeaderClick) == null || K.call(e, H);
  }, W = (H) => {
    var K;
    ce(H), (K = e.onSMUIDataTableRowClick) == null || K.call(e, H);
  }, J = (H) => {
    var K;
    M(H), (K = e.onSMUIDataTableBodyCheckboxChange) == null || K.call(e, H);
  };
  qe(
    q,
    (H, K) => ({
      class: H,
      ...K,
      onSMUIDataTableHeaderCheckboxChange: ge,
      onSMUIDataTableHeaderClick: re,
      onSMUIDataTableRowClick: W,
      onSMUIDataTableBodyCheckboxChange: J
    }),
    [
      () => Ge({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...I,
        [d()]: !0
      }),
      () => Ra(A, ["container$", "table$"])
    ]
  );
  var he = N(q);
  qe(he, (H, K) => ({ class: H, ...K }), [
    () => Ge({
      "mdc-data-table__table-container": !0,
      [m()]: !0
    }),
    () => ut(A, "container$")
  ]);
  var Te = N(he);
  qe(Te, (H, K) => ({ class: H, ...K }), [
    () => Ge({ "mdc-data-table__table": !0, [b()]: !0 }),
    () => ut(A, "table$")
  ]);
  var De = N(Te);
  pe(De, () => e.children ?? ve), Me(Te, (H, K) => ne == null ? void 0 : ne(H, K), _), we(he, (H) => T = H, () => T), Me(he, (H, K) => ne == null ? void 0 : ne(H, K), g);
  var Le = z(he, 2);
  {
    var et = (H) => {
      var K = Rg(), Ae = z(N(K), 2);
      pe(Ae, () => e.progress ?? ve), ue((Be) => nt(K, Be), [
        () => Object.entries(o(S)).map(([Be, rn]) => `${Be}: ${rn};`).join(" ")
      ]), x(H, K);
    };
    te(Le, (H) => {
      e.progress && H(et);
    });
  }
  var Ft = z(Le, 2);
  pe(Ft, () => e.paginate ?? ve), we(q, (H) => E = H, () => E), Me(q, (H, K) => ne == null ? void 0 : ne(H, K), s), x(n, q);
  var nn = Ie(Ce);
  return i(), nn;
}
var kg = /* @__PURE__ */ j("<thead><!></thead>");
function Fg(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = /* @__PURE__ */ ze(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ se(void 0), s = [];
  const d = /* @__PURE__ */ new WeakMap();
  oe("SMUI:data-table:row:header", !0);
  const l = ye("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (b) => {
    V(a, b, !0), l && l(b);
  });
  const c = ye("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (b) => {
    V(a, void 0), c && c(b);
  }), oe("SMUI:data-table:cell:mount", (b) => {
    s.push(b), d.set(b.element, b);
  }), oe("SMUI:data-table:cell:unmount", (b) => {
    const A = s.findIndex((E) => E === b);
    A !== -1 && s.splice(A, 1), d.delete(b.element);
  });
  const u = ye("SMUI:data-table:header:mount"), h = ye("SMUI:data-table:header:unmount");
  rt(() => {
    const b = {
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
    return u && u(b), () => {
      h && h(b);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((b) => d.get(b)).filter((b) => b && b._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var g = { getElement: v }, m = kg();
  qe(m, () => ({ ...r }));
  var _ = N(m);
  return pe(_, () => e.children ?? ve), we(m, (b) => i = b, () => i), Me(m, (b, A) => ne == null ? void 0 : ne(b, A), t), x(n, m), Ie(g);
}
var Ng = /* @__PURE__ */ j("<tbody><!></tbody>");
function Ug(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const d = /* @__PURE__ */ new WeakMap();
  oe("SMUI:data-table:row:header", !1), oe("SMUI:data-table:row:mount", (m) => {
    s.push(m), d.set(m.element, m);
  }), oe("SMUI:data-table:row:unmount", (m) => {
    const _ = s.findIndex((b) => b === m);
    _ !== -1 && s.splice(_, 1), d.delete(m.element);
  });
  const l = ye("SMUI:data-table:body:mount"), c = ye("SMUI:data-table:body:unmount");
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
  var f = { getElement: h }, v = Ng();
  qe(v, (m) => ({ class: m, ...i }), [
    () => Ge({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = N(v);
  return pe(g, () => e.children ?? ve), we(v, (m) => a = m, () => a), Me(v, (m, _) => ne == null ? void 0 : ne(m, _), t), x(n, v), Ie(f);
}
let Hg = 0;
var Bg = /* @__PURE__ */ j("<tr><!></tr>");
function po(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "rowId", 19, () => "SMUI-data-table-row-" + Hg++), a = /* @__PURE__ */ ze(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, d = /* @__PURE__ */ se(void 0), l = Ee({}), c = Ee({}), u = ye("SMUI:data-table:row:header");
  const h = ye("SMUI:checkbox:mount");
  oe("SMUI:checkbox:mount", (L) => {
    V(d, L, !0), h && h(L);
  });
  const f = ye("SMUI:checkbox:unmount");
  oe("SMUI:checkbox:unmount", (L) => {
    V(d, void 0), f && f(L);
  });
  const v = ye("SMUI:data-table:row:mount"), g = ye("SMUI:data-table:row:unmount");
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
      removeClass: _,
      getAttr: b,
      addAttr: A
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
      removeClass: _,
      getAttr: b,
      addAttr: A
    };
    return v && v(L), () => {
      g && g(L);
    };
  });
  function m(L) {
    l[L] || (l[L] = !0);
  }
  function _(L) {
    (!(L in l) || l[L]) && (l[L] = !1);
  }
  function b(L) {
    return L in c ? c[L] ?? null : T().getAttribute(L);
  }
  function A(L, k) {
    c[L] !== k && (c[L] = k);
  }
  function E(L) {
    je(T(), "SMUIDataTableHeaderClick", L);
  }
  function y(L) {
    je(T(), "SMUIDataTableRowClick", { rowId: i(), target: L.target });
  }
  function T() {
    return s;
  }
  var C = { getElement: T }, w = Bg(), I = (L) => {
    var k;
    u ? E(L) : y(L), (k = e.onclick) == null || k.call(e, L);
  };
  qe(
    w,
    (L) => ({
      class: L,
      "aria-selected": o(d) ? o(d).checked ? "true" : "false" : void 0,
      ...c,
      ...a,
      onclick: I
    }),
    [
      () => Ge({
        "mdc-data-table__header-row": u,
        "mdc-data-table__row": !u,
        "mdc-data-table__row--selected": !u && o(d) && o(d).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var S = N(w);
  return pe(S, () => e.children ?? ve), we(w, (L) => s = L, () => s), Me(w, (L, k) => ne == null ? void 0 : ne(L, k), t), x(n, w), Ie(C);
}
let Gg = 0;
var Vg = /* @__PURE__ */ j('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), qg = /* @__PURE__ */ j("<th><!></th>"), Wg = /* @__PURE__ */ j("<td><!></td>");
function Ca(n, e) {
  _e(e, !0);
  const t = () => Ci(b, "$sort", i), r = () => Ci(A, "$sortDirection", i), [i, a] = Ti();
  let s = ye("SMUI:data-table:row:header"), d = p(e, "use", 19, () => []), l = p(e, "class", 3, ""), c = p(e, "numeric", 3, !1), u = p(e, "checkbox", 3, !1), h = p(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Gg++ : "SMUI-data-table-unused"), f = p(e, "sortable", 19, () => ye("SMUI:data-table:sortable")), v = /* @__PURE__ */ ze(e, [
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
  ]), g, m = Ee({}), _ = Ee({}), b = ye("SMUI:data-table:sort"), A = ye("SMUI:data-table:sortDirection"), E = ye("SMUI:data-table:sortAscendingAriaLabel"), y = ye("SMUI:data-table:sortDescendingAriaLabel");
  f() && (oe("SMUI:label:context", "data-table:sortable-header-cell"), oe("SMUI:icon-button:context", "data-table:sortable-header-cell"), oe("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const T = ye("SMUI:data-table:cell:mount"), C = ye("SMUI:data-table:cell:unmount");
  rt(() => {
    const P = s ? {
      _smui_data_table_header_cell_accessor: !0,
      get element() {
        return O();
      },
      get columnId() {
        return h();
      },
      addClass: w,
      removeClass: I,
      getAttr: S,
      addAttr: L
    } : {
      _smui_data_table_header_cell_accessor: !1,
      get element() {
        return O();
      },
      get columnId() {
      },
      addClass: w,
      removeClass: I,
      getAttr: S,
      addAttr: L
    };
    return T && T(P), () => {
      C && C(P);
    };
  });
  function w(P) {
    m[P] || (m[P] = !0);
  }
  function I(P) {
    (!(P in m) || m[P]) && (m[P] = !1);
  }
  function S(P) {
    return P in _ ? _[P] ?? null : O().getAttribute(P);
  }
  function L(P, ee) {
    _[P] !== ee && (_[P] = ee);
  }
  function k(P) {
    je(O(), "SMUIDataTableHeaderCheckboxChange", P);
  }
  function D(P) {
    je(O(), "SMUIDataTableBodyCheckboxChange", P);
  }
  function O() {
    return g;
  }
  var Z = { getElement: O }, G = ie(), B = Y(G);
  {
    var M = (P) => {
      var ee = qg(), ce = (Ce) => {
        var q;
        u() && k(Ce), (q = e.onchange) == null || q.call(e, Ce);
      };
      qe(
        ee,
        (Ce) => ({
          class: Ce,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? t() === h() ? r() : "none" : void 0,
          ..._,
          ...v,
          onchange: ce
        }),
        [
          () => Ge({
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
      var Se = N(ee);
      {
        var be = (Ce) => {
          var q = Vg(), ge = N(q);
          pe(ge, () => e.children ?? ve);
          var re = z(ge, 2), W = N(re);
          ue(() => {
            At(re, "id", `${h() ?? ""}-status-label`), Pe(W, t() === h() ? r() === "ascending" ? E : y : "");
          }), x(Ce, q);
        }, de = (Ce) => {
          var q = ie(), ge = Y(q);
          pe(ge, () => e.children ?? ve), x(Ce, q);
        };
        te(Se, (Ce) => {
          f() ? Ce(be) : Ce(de, !1);
        });
      }
      we(ee, (Ce) => g = Ce, () => g), Me(ee, (Ce, q) => ne == null ? void 0 : ne(Ce, q), d), x(P, ee);
    }, X = (P) => {
      var ee = Wg(), ce = (be) => {
        var de;
        u() && D(be), (de = e.onchange) == null || de.call(e, be);
      };
      qe(
        ee,
        (be) => ({
          class: be,
          ..._,
          ...v,
          onchange: ce
        }),
        [
          () => Ge({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": c(),
            "mdc-data-table__cell--checkbox": u(),
            ...m,
            [l()]: !0
          })
        ]
      );
      var Se = N(ee);
      pe(Se, () => e.children ?? ve), we(ee, (be) => g = be, () => g), Me(ee, (be, de) => ne == null ? void 0 : ne(be, de), d), x(P, ee);
    };
    te(B, (P) => {
      s ? P(M) : P(X, !1);
    });
  }
  x(n, G);
  var le = Ie(Z);
  return a(), le;
}
var zg = /* @__PURE__ */ j('<p class="status svelte-185z1ay">Loading…</p>'), jg = /* @__PURE__ */ j('<p class="status error svelte-185z1ay"> </p>'), Zg = /* @__PURE__ */ j("<!> <!>", 1), Xg = /* @__PURE__ */ j("<!> <!>", 1), Kg = /* @__PURE__ */ j("<!> <!>", 1);
function Yg(n, e) {
  _e(e, !0);
  let t = p(e, "items", 19, () => []), r = p(e, "columns", 19, () => []), i = p(e, "loading", 3, !1), a = p(e, "errorMsg", 3, ""), s = p(e, "emptyText", 3, "Nothing to show."), d = p(e, "getRowId", 3, (_, b) => (_ && (_.id ?? _.key)) ?? b), l = p(e, "headerBg", 3, null), c = p(e, "rowBg", 3, null), u = p(e, "hasActions", 3, !1), h = /* @__PURE__ */ Q(() => u() || !!e.actions);
  var f = ie(), v = Y(f);
  {
    var g = (_) => {
      var b = zg();
      x(_, b);
    }, m = (_) => {
      var b = ie(), A = Y(b);
      {
        var E = (T) => {
          var C = jg(), w = N(C);
          ue(() => Pe(w, a())), x(T, C);
        }, y = (T) => {
          Pg(T, {
            style: "width: 100%;",
            children: (C, w) => {
              var I = Kg(), S = Y(I);
              {
                let k = /* @__PURE__ */ Q(() => l() ? `background-color:${l()}` : void 0);
                Fg(S, {
                  get style() {
                    return o(k);
                  },
                  children: (D, O) => {
                    po(D, {
                      children: (Z, G) => {
                        var B = Zg(), M = Y(B);
                        hn(M, 17, r, Er, (P, ee) => {
                          {
                            let ce = /* @__PURE__ */ Q(() => [
                              o(ee).width ? `width:${o(ee).width}` : "",
                              l() ? `background-color:${l()}` : ""
                            ].filter(Boolean).join(";"));
                            Ca(P, {
                              header: !0,
                              get style() {
                                return o(ce);
                              },
                              children: (Se, be) => {
                                var de = He();
                                ue(() => Pe(de, o(ee).header)), x(Se, de);
                              },
                              $$slots: { default: !0 }
                            });
                          }
                        });
                        var X = z(M, 2);
                        {
                          var le = (P) => {
                            {
                              let ee = /* @__PURE__ */ Q(() => l() ? `background-color:${l()}` : void 0);
                              Ca(P, {
                                header: !0,
                                get style() {
                                  return o(ee);
                                }
                              });
                            }
                          };
                          te(X, (P) => {
                            o(h) && P(le);
                          });
                        }
                        x(Z, B);
                      },
                      $$slots: { default: !0 }
                    });
                  },
                  $$slots: { default: !0 }
                });
              }
              var L = z(S, 2);
              Ug(L, {
                children: (k, D) => {
                  var O = ie(), Z = Y(O);
                  {
                    var G = (M) => {
                      po(M, {
                        children: (X, le) => {
                          {
                            let P = /* @__PURE__ */ Q(() => r().length + (o(h) ? 1 : 0));
                            Ca(X, {
                              class: "oscd-basic-table__empty-row",
                              get colspan() {
                                return o(P);
                              },
                              style: "text-align:center; padding: 24px; opacity: 0.6; background: rgba(0,0,0,0.05);",
                              children: (ee, ce) => {
                                var Se = He();
                                ue(() => Pe(Se, s())), x(ee, Se);
                              },
                              $$slots: { default: !0 }
                            });
                          }
                        },
                        $$slots: { default: !0 }
                      });
                    }, B = (M) => {
                      var X = ie(), le = Y(X);
                      hn(le, 19, t, (P, ee) => d()(P, ee), (P, ee) => {
                        {
                          let ce = /* @__PURE__ */ Q(() => c() ? `background-color:${c()}` : void 0);
                          po(P, {
                            get style() {
                              return o(ce);
                            },
                            children: (Se, be) => {
                              var de = Xg(), Ce = Y(de);
                              hn(Ce, 17, r, Er, (re, W) => {
                                {
                                  let J = /* @__PURE__ */ Q(() => o(W).bold ? "cell-bold" : "");
                                  Ca(re, {
                                    get class() {
                                      return o(J);
                                    },
                                    onclick: () => {
                                      var he;
                                      return (he = e.onRowClick) == null ? void 0 : he.call(e, o(ee));
                                    },
                                    children: (he, Te) => {
                                      var De = He();
                                      ue(() => {
                                        var Le;
                                        return Pe(De, ((Le = o(ee)) == null ? void 0 : Le[o(W).key]) ?? "");
                                      }), x(he, De);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                }
                              });
                              var q = z(Ce, 2);
                              {
                                var ge = (re) => {
                                  Ca(re, {
                                    numeric: !0,
                                    children: (W, J) => {
                                      var he = ie(), Te = Y(he);
                                      pe(Te, () => e.actions ?? ve, () => ({ item: o(ee) })), x(W, he);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                te(q, (re) => {
                                  o(h) && re(ge);
                                });
                              }
                              x(Se, de);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), x(M, X);
                    };
                    te(Z, (M) => {
                      !t() || t().length === 0 ? M(G) : M(B, !1);
                    });
                  }
                  x(k, O);
                },
                $$slots: { default: !0 }
              }), x(C, I);
            },
            $$slots: { default: !0 }
          });
        };
        te(
          A,
          (T) => {
            a() ? T(E) : T(y, !1);
          },
          !0
        );
      }
      x(_, b);
    };
    te(v, (_) => {
      i() ? _(g) : _(m, !1);
    });
  }
  x(n, f), Ie();
}
var Jg = /* @__PURE__ */ ht('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function Qg(n, e) {
  let t = p(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Jg();
      ue(() => nt(a, t())), x(r, a);
    }
  });
}
var $g = /* @__PURE__ */ j('<span class="secondary-label svelte-17mxdlc"> </span>'), em = /* @__PURE__ */ j('<div class="separator svelte-17mxdlc"><!></div>'), tm = /* @__PURE__ */ j('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), nm = /* @__PURE__ */ j('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function rm(n, e) {
  _e(e, !0);
  let t = p(e, "breadcrumbs", 19, () => []), r = p(e, "activeIndex", 3, 0);
  const i = (s) => {
    var l;
    const d = t()[s];
    !(d != null && d.enabled) || s === r() || (l = e.handleClick) == null || l.call(e, s);
  };
  var a = nm();
  hn(a, 21, t, Er, (s, d, l) => {
    var c = tm(), u = N(c);
    let h;
    u.__click = () => i(l);
    let f;
    var v = N(u), g = N(v), m = z(v, 2);
    {
      var _ = (E) => {
        var y = $g();
        let T;
        var C = N(y);
        ue(
          (w) => {
            T = nt(y, "", T, w), Pe(C, o(d).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), x(E, y);
      };
      te(m, (E) => {
        o(d).secondaryLabel && E(_);
      });
    }
    var b = z(u, 2);
    {
      var A = (E) => {
        var y = em(), T = N(y);
        {
          let C = /* @__PURE__ */ Q(() => e.color ? e.color : "#004552");
          Qg(T, {
            get svgStyles() {
              return `fill: ${o(C) ?? ""}`;
            }
          });
        }
        x(E, y);
      };
      te(b, (E) => {
        l < t().length - 1 && E(A);
      });
    }
    ue(
      (E, y) => {
        h = Sr(u, 1, "breadcrumb svelte-17mxdlc", null, h, E), At(u, "aria-current", l === r() ? "page" : void 0), At(u, "aria-disabled", o(d).enabled ? void 0 : "true"), f = nt(u, "", f, y), Pe(g, o(d).label);
      },
      [
        () => ({
          "br-disabled": !o(d).enabled,
          "br-active": l === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), x(s, c);
  }), x(n, a), Ie();
}
ft(["click"]);
var im = (n, e) => {
  var t;
  n.stopPropagation(), (t = e.onClick) == null || t.call(e, n);
}, am = /* @__PURE__ */ j('<button class="icon-button svelte-jv2py4"><!></button>');
function Ou(n, e) {
  _e(e, !0);
  let t = p(e, "tooltipSide", 3, "top"), r = p(e, "showDelay", 3, 1e3), i = p(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = p(e, "size", 3, "25px"), s = /* @__PURE__ */ Q(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Lu(n, {
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
      var c = am();
      c.__click = [im, e];
      var u = N(c);
      {
        var h = (v) => {
          xu(v, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (v) => {
          var g = ie(), m = Y(g);
          {
            var _ = (A) => {
              ig(A, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, b = (A) => {
              var E = ie(), y = Y(E);
              {
                var T = (w) => {
                  Su(w, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, C = (w) => {
                  var I = ie(), S = Y(I);
                  {
                    var L = (D) => {
                      ng(D, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, k = (D) => {
                      var O = ie(), Z = Y(O);
                      {
                        var G = (M) => {
                          hg(M, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, B = (M) => {
                          var X = ie(), le = Y(X);
                          {
                            var P = (ce) => {
                              gg(ce, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, ee = (ce) => {
                              var Se = ie(), be = Y(Se);
                              {
                                var de = (q) => {
                                  pg(q, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, Ce = (q) => {
                                  var ge = ie(), re = Y(ge);
                                  {
                                    var W = (he) => {
                                      Ig(he, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, J = (he) => {
                                      var Te = He();
                                      ue(() => Pe(Te, `Unsupported supported type: ${e.type ?? ""}`)), x(he, Te);
                                    };
                                    te(
                                      re,
                                      (he) => {
                                        e.type === "star" ? he(W) : he(J, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(q, ge);
                                };
                                te(
                                  be,
                                  (q) => {
                                    e.type === "close" ? q(de) : q(Ce, !1);
                                  },
                                  !0
                                );
                              }
                              x(ce, Se);
                            };
                            te(
                              le,
                              (ce) => {
                                e.type === "link-off" ? ce(P) : ce(ee, !1);
                              },
                              !0
                            );
                          }
                          x(M, X);
                        };
                        te(
                          Z,
                          (M) => {
                            e.type === "wand-stars" ? M(G) : M(B, !1);
                          },
                          !0
                        );
                      }
                      x(D, O);
                    };
                    te(
                      S,
                      (D) => {
                        e.type === "visibility" ? D(L) : D(k, !1);
                      },
                      !0
                    );
                  }
                  x(w, I);
                };
                te(
                  y,
                  (w) => {
                    e.type === "edit" ? w(T) : w(C, !1);
                  },
                  !0
                );
              }
              x(A, E);
            };
            te(
              m,
              (A) => {
                e.type === "duplicate" ? A(_) : A(b, !1);
              },
              !0
            );
          }
          x(v, g);
        };
        te(u, (v) => {
          e.type === "delete" ? v(h) : v(f, !1);
        });
      }
      ue(() => At(c, "aria-label", e.tooltip)), x(d, c);
    },
    $$slots: { default: !0 }
  }), Ie();
}
ft(["click"]);
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
function Ur(n) {
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
function sm(n, e) {
  if (n == null) return {};
  var t = {}, r = Object.keys(n), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function om(n, e) {
  if (n == null) return {};
  var t = sm(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(n);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(n, r) && (t[r] = n[r]);
  }
  return t;
}
function lm(n, e) {
  return um(n) || fm(n, e) || ol(n, e) || vm();
}
function Ln(n) {
  return dm(n) || cm(n) || ol(n) || hm();
}
function dm(n) {
  if (Array.isArray(n)) return No(n);
}
function um(n) {
  if (Array.isArray(n)) return n;
}
function cm(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function fm(n, e) {
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
function ol(n, e) {
  if (n) {
    if (typeof n == "string") return No(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return No(n, e);
  }
}
function No(n, e) {
  (e == null || e > n.length) && (e = n.length);
  for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t];
  return r;
}
function hm() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function vm() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function za(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = ol(n)) || e) {
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
var gm = "finalize", mm = "consider";
function aa(n, e, t) {
  n.dispatchEvent(new CustomEvent(gm, {
    detail: {
      items: e,
      info: t
    }
  }));
}
function Wr(n, e, t) {
  n.dispatchEvent(new CustomEvent(mm, {
    detail: {
      items: e,
      info: t
    }
  }));
}
var Zs = "draggedEntered", ja = "draggedLeft", Xs = "draggedOverIndex", ll = "draggedLeftDocument", Es = {
  LEFT_FOR_ANOTHER: "leftForAnother",
  OUTSIDE_OF_ANY: "outsideOfAny"
};
function pm(n, e, t) {
  n.dispatchEvent(new CustomEvent(Zs, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function _m(n, e, t) {
  n.dispatchEvent(new CustomEvent(ja, {
    detail: {
      draggedEl: e,
      type: Es.LEFT_FOR_ANOTHER,
      theOtherDz: t
    }
  }));
}
function Im(n, e) {
  n.dispatchEvent(new CustomEvent(ja, {
    detail: {
      draggedEl: e,
      type: Es.OUTSIDE_OF_ANY
    }
  }));
}
function bm(n, e, t) {
  n.dispatchEvent(new CustomEvent(Xs, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function ym(n) {
  window.dispatchEvent(new CustomEvent(ll, {
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
  DRAGGED_LEFT: ja,
  DRAGGED_LEFT_ALL: "draggedLeftAll",
  DROPPED_INTO_ZONE: "droppedIntoZone",
  DROPPED_INTO_ANOTHER: "droppedIntoAnother",
  DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
  DRAG_STOPPED: "dragStopped"
}, jt = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
}, Za = "isDndShadowItem", Ks = "data-is-dnd-shadow-item-internal", Cm = "data-is-dnd-shadow-item-hint", Am = "id:dnd-shadow-placeholder-0000", Em = "dnd-action-dragged-el", xt = "id", Uo = 0;
function Ru() {
  Uo++;
}
function Mu() {
  if (Uo === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  Uo--;
}
var dl = typeof window > "u";
function Ho(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t, r = e ? wm(n) : n.getBoundingClientRect(), i = getComputedStyle(n), a = i.transform;
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
function Pu(n) {
  var e = Ho(n);
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function ku(n) {
  var e = n.getBoundingClientRect();
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function Fu(n) {
  return {
    x: (n.left + n.right) / 2,
    y: (n.top + n.bottom) / 2
  };
}
function Sm(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Ys(n, e) {
  return n.y <= e.bottom && n.y >= e.top && n.x >= e.left && n.x <= e.right;
}
function Ma(n) {
  return Fu(ku(n));
}
function nd(n, e) {
  var t = Ma(n), r = Pu(e);
  return Ys(t, r);
}
function rd(n, e) {
  var t = Ma(n), r = Ma(e);
  return Sm(t, r);
}
function xm(n) {
  var e = ku(n);
  return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight;
}
function wm(n) {
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
function ul() {
  Wi = /* @__PURE__ */ new Map();
}
ul();
function Tm(n) {
  var e = Array.from(n.children).findIndex(function(t) {
    return t.getAttribute(Ks);
  });
  if (e >= 0)
    return Wi.has(n) || Wi.set(n, /* @__PURE__ */ new Map()), Wi.get(n).set(e, Pu(n.children[e])), e;
}
function Dm(n, e) {
  if (!nd(n, e))
    return null;
  var t = e.children;
  if (t.length === 0)
    return {
      index: 0,
      isProximityBased: !0
    };
  for (var r = Tm(e), i = 0; i < t.length; i++)
    if (nd(n, t[i])) {
      var a = Wi.has(e) && Wi.get(e).get(i);
      return a && !Ys(Ma(n), a) ? {
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
function Aa(n) {
  return JSON.stringify(n, null, 2);
}
function Ss(n) {
  if (!n)
    throw new Error("cannot get depth of a falsy node");
  return Nu(n, 0);
}
function Nu(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return n.parentElement ? Nu(n.parentElement, e + 1) : e - 1;
}
function Lm(n, e) {
  if (Object.keys(n).length !== Object.keys(e).length)
    return !1;
  for (var t in n)
    if (!{}.hasOwnProperty.call(e, t) || e[t] !== n[t])
      return !1;
  return !0;
}
function Om(n, e) {
  if (n.length !== e.length)
    return !1;
  for (var t = 0; t < n.length; t++)
    if (n[t] !== e[t])
      return !1;
  return !0;
}
var Rm = 200, id = 10, Bo;
function Mm(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rm, r = arguments.length > 3 ? arguments[3] : void 0, i, a, s = !1, d, l = Array.from(e).sort(function(u, h) {
    return Ss(h) - Ss(u);
  });
  function c() {
    var u = Ma(n), h = r.multiScrollIfNeeded();
    if (!h && d && Math.abs(d.x - u.x) < id && Math.abs(d.y - u.y) < id) {
      Bo = window.setTimeout(c, t);
      return;
    }
    if (xm(n)) {
      ym(n);
      return;
    }
    d = u;
    var f = !1, v = za(l), g;
    try {
      for (v.s(); !(g = v.n()).done; ) {
        var m = g.value;
        h && ul();
        var _ = Dm(n, m);
        if (_ !== null) {
          var b = _.index;
          f = !0, m !== i ? (i && _m(i, n, m), pm(m, _, n), i = m) : b !== a && (bm(m, _, n), a = b);
          break;
        }
      }
    } catch (A) {
      v.e(A);
    } finally {
      v.f();
    }
    !f && s && i ? (Im(i, n), i = void 0, a = void 0, s = !1) : s = !0, Bo = window.setTimeout(c, t);
  }
  c();
}
function Pm() {
  clearTimeout(Bo), ul();
}
var Ea = 30;
function km() {
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
    return Ea - a;
  }
  function i(a, s) {
    if (!s)
      return !1;
    var d = Fm(a, s), l = !!n.directionObj;
    if (d === null)
      return l && e(), !1;
    var c = !1, u = !1;
    return s.scrollHeight > s.clientHeight && (d.bottom < Ea ? (c = !0, n.directionObj = {
      x: 0,
      y: 1
    }, n.stepPx = r(d.bottom)) : d.top < Ea && (c = !0, n.directionObj = {
      x: 0,
      y: -1
    }, n.stepPx = r(d.top)), !l && c) || s.scrollWidth > s.clientWidth && (d.right < Ea ? (u = !0, n.directionObj = {
      x: 1,
      y: 0
    }, n.stepPx = r(d.right)) : d.left < Ea && (u = !0, n.directionObj = {
      x: -1,
      y: 0
    }, n.stepPx = r(d.left)), !l && u) ? (t(s), !0) : (e(), !1);
  }
  return {
    scrollIfNeeded: i,
    resetScrolling: e
  };
}
function Fm(n, e) {
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
function Nm() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, t = Hm(n), r = Array.from(t).sort(function(l, c) {
    return Ss(c) - Ss(l);
  }), i = km(), a = i.scrollIfNeeded, s = i.resetScrolling;
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
function Um(n) {
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
function Hm(n) {
  var e = /* @__PURE__ */ new Set(), t = za(n), r;
  try {
    for (t.s(); !(r = t.n()).done; ) {
      var i = r.value;
      Um(i).forEach(function(a) {
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
function Bm(n) {
  var e = n.cloneNode(!0), t = [], r = n.tagName === "SELECT", i = r ? [n] : Ln(n.querySelectorAll("select")), a = za(i), s;
  try {
    for (a.s(); !(s = a.n()).done; ) {
      var d = s.value;
      t.push(d.value);
    }
  } catch (E) {
    a.e(E);
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
    for (var m = v ? [e] : Ln(e.querySelectorAll("canvas")), _ = 0; _ < m.length; _++) {
      var b = g[_], A = m[_];
      A.width = b.width, A.height = b.height, b.width > 0 && b.height > 0 && A.getContext("2d").drawImage(b, 0, 0);
    }
  return e;
}
var Pa = Object.freeze({
  // This flag exists as a workaround for issue 454 (basically a browser bug) - seems like these rect values take time to update when in grid layout. Setting it to true can cause strange behaviour in the REPL for non-grid zones, see issue 470
  USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT: "USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT"
}), Gm = ia({}, Pa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
function Uu(n) {
  if (!Pa[n]) throw new Error("Can't get non existing feature flag ".concat(n, "! Supported flags: ").concat(Object.keys(Pa)));
  return Gm[n];
}
var Vm = 0.2;
function oi(n) {
  return "".concat(n, " ").concat(Vm, "s ease");
}
function qm(n, e) {
  var t = n.getBoundingClientRect(), r = Bm(n);
  Hu(n, r), r.id = Em, r.style.position = "fixed";
  var i = t.top, a = t.left;
  if (r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px"), e) {
    var s = Fu(t);
    i -= s.y - e.y, a -= s.x - e.x, window.setTimeout(function() {
      r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px");
    }, 0);
  }
  return r.style.margin = "0", r.style.boxSizing = "border-box", r.style.height = "".concat(t.height, "px"), r.style.width = "".concat(t.width, "px"), r.style.transition = "".concat(oi("top"), ", ").concat(oi("left"), ", ").concat(oi("background-color"), ", ").concat(oi("opacity"), ", ").concat(oi("color"), " "), window.setTimeout(function() {
    return r.style.transition += ", ".concat(oi("width"), ", ").concat(oi("height"));
  }, 0), r.style.zIndex = "9999", r.style.cursor = "grabbing", r;
}
function Wm(n) {
  n.style.cursor = "grab";
}
function zm(n, e, t, r) {
  Hu(e, n);
  var i = e.getBoundingClientRect(), a = n.getBoundingClientRect(), s = i.width - a.width, d = i.height - a.height;
  if (s || d) {
    var l = {
      left: (t - a.left) / a.width,
      top: (r - a.top) / a.height
    };
    Uu(Pa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (n.style.height = "".concat(i.height, "px"), n.style.width = "".concat(i.width, "px")), n.style.left = "".concat(parseFloat(n.style.left) - l.left * s, "px"), n.style.top = "".concat(parseFloat(n.style.top) - l.top * d, "px");
  }
}
function Hu(n, e) {
  var t = window.getComputedStyle(n);
  Array.from(t).filter(function(r) {
    return r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || // copying with and height to make up for rect update timing issues in some browsers
    Uu(Pa.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height");
  }).forEach(function(r) {
    return e.style.setProperty(r, t.getPropertyValue(r), t.getPropertyPriority(r));
  });
}
function jm(n, e) {
  n.draggable = !1, n.ondragstart = function() {
    return !1;
  }, e ? (n.style.userSelect = "", n.style.WebkitUserSelect = "", n.style.cursor = "") : (n.style.userSelect = "none", n.style.WebkitUserSelect = "none", n.style.cursor = "grab");
}
function Bu(n) {
  n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5";
}
function Zm(n) {
  n.style.visibility = "hidden", n.setAttribute(Ks, "true");
}
function Xm(n) {
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
function Km(n) {
  var e = n.style.minHeight;
  n.style.minHeight = window.getComputedStyle(n).getPropertyValue("height");
  var t = n.style.minWidth;
  return n.style.minWidth = window.getComputedStyle(n).getPropertyValue("width"), function() {
    n.style.minHeight = e, n.style.minWidth = t;
  };
}
var Ym = "--any--", Jm = 100, Qm = 20, is = 3, $m = 80, ad = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, sd = "data-is-dnd-original-dragged-item", ln, St, un, Js, ot, Qs, qr, kt, Kn, Vt, Mr = !1, cl = !1, fl, Xa = !1, hs = [], Da, Yn, xa = !1, Vn = /* @__PURE__ */ new Map(), mt = /* @__PURE__ */ new Map(), _o = /* @__PURE__ */ new WeakMap();
function ep(n, e) {
  Vn.has(e) || Vn.set(e, /* @__PURE__ */ new Set()), Vn.get(e).has(n) || (Vn.get(e).add(n), Ru());
}
function od(n, e) {
  Vn.get(e).delete(n), Mu(), Vn.get(e).size === 0 && Vn.delete(e);
}
function tp() {
  var n = Vn.get(Js), e = za(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.addEventListener(Zs, Gu), r.addEventListener(ja, Vu), r.addEventListener(Xs, qu);
    }
  } catch (s) {
    e.e(s);
  } finally {
    e.f();
  }
  window.addEventListener(ll, sa);
  var i = Math.max.apply(Math, Ln(Array.from(n.keys()).map(function(s) {
    return mt.get(s).dropAnimationDurationMs;
  }))), a = i === 0 ? Qm : Math.max(i, Jm);
  Da = Nm(n, function() {
    return Vt;
  }), Mm(St, n, a * 1.07, Da);
}
function np() {
  var n = Vn.get(Js), e = za(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.removeEventListener(Zs, Gu), r.removeEventListener(ja, Vu), r.removeEventListener(Xs, qu);
    }
  } catch (i) {
    e.e(i);
  } finally {
    e.f();
  }
  window.removeEventListener(ll, sa), Da && (Da.destroy(), Da = void 0), Pm();
}
function $s(n) {
  return n.findIndex(function(e) {
    return !!e[Za];
  });
}
function rp(n) {
  var e;
  return Ur(Ur({}, n), {}, (e = {}, ia(e, Za, !0), ia(e, xt, Am), e));
}
function Gu(n) {
  var e = mt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== ot)) {
    if (Xa = !1, t = t.filter(function(d) {
      return d[xt] !== qr[xt];
    }), ot !== n.currentTarget) {
      var i = mt.get(ot).items, a = i.filter(function(d) {
        return !d[Za];
      });
      Wr(ot, a, {
        trigger: Tt.DRAGGED_ENTERED_ANOTHER,
        id: un[xt],
        source: jt.POINTER
      });
    }
    var s = n.detail.indexObj.index;
    kt = n.currentTarget, t.splice(s, 0, qr), Wr(n.currentTarget, t, {
      trigger: Tt.DRAGGED_ENTERED,
      id: un[xt],
      source: jt.POINTER
    });
  }
}
function Vu(n) {
  if (Mr) {
    var e = mt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
    if (!(r && n.currentTarget !== ot && n.currentTarget !== kt)) {
      var i = Ln(t), a = $s(i);
      a !== -1 && i.splice(a, 1);
      var s = kt;
      kt = void 0;
      var d = n.detail, l = d.type, c = d.theOtherDz;
      if (l === Es.OUTSIDE_OF_ANY || l === Es.LEFT_FOR_ANOTHER && c !== ot && mt.get(c).dropFromOthersDisabled) {
        Xa = !0, kt = ot;
        var u = s === ot ? i : Ln(mt.get(ot).items);
        u.splice(Qs, 0, qr), Wr(ot, u, {
          trigger: Tt.DRAGGED_LEFT_ALL,
          id: un[xt],
          source: jt.POINTER
        });
      }
      Wr(n.currentTarget, i, {
        trigger: Tt.DRAGGED_LEFT,
        id: un[xt],
        source: jt.POINTER
      });
    }
  }
}
function qu(n) {
  var e = mt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== ot)) {
    var i = Ln(t);
    Xa = !1;
    var a = n.detail.indexObj.index, s = $s(i);
    s !== -1 && i.splice(s, 1), i.splice(a, 0, qr), Wr(n.currentTarget, i, {
      trigger: Tt.DRAGGED_OVER_INDEX,
      id: un[xt],
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
  cl = !0, window.removeEventListener("mousemove", ws), window.removeEventListener("touchmove", ws), window.removeEventListener("mouseup", sa), window.removeEventListener("touchend", sa), np(), Wm(St), kt || (kt = ot);
  var n = mt.get(kt), e = n.items, t = n.type;
  xs(Vn.get(t), function(a) {
    return mt.get(a).dropTargetStyle;
  }, function(a) {
    return mt.get(a).dropTargetClasses;
  });
  var r = $s(e);
  r === -1 && kt === ot && (r = Qs), e = e.map(function(a) {
    return a[Za] ? un : a;
  });
  function i() {
    fl(), aa(kt, e, {
      trigger: Xa ? Tt.DROPPED_OUTSIDE_OF_ANY : Tt.DROPPED_INTO_ZONE,
      id: un[xt],
      source: jt.POINTER
    }), kt !== ot && aa(ot, mt.get(ot).items, {
      trigger: Tt.DROPPED_INTO_ANOTHER,
      id: un[xt],
      source: jt.POINTER
    });
    var a = Array.from(kt.children).find(function(s) {
      return s.getAttribute(Ks);
    });
    a && Xm(a), sp();
  }
  mt.get(kt).dropAnimationDisabled ? i() : ip(r, i);
}
function ip(n, e) {
  var t = n > -1 ? Ho(kt.children[n], !1) : Ho(kt, !1), r = {
    x: t.left - parseFloat(St.style.left),
    y: t.top - parseFloat(St.style.top)
  }, i = mt.get(kt), a = i.dropAnimationDurationMs, s = "transform ".concat(a, "ms ease");
  St.style.transition = St.style.transition ? St.style.transition + "," + s : s, St.style.transform = "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)"), window.setTimeout(e, a);
}
function ap(n, e) {
  hs.push({
    dz: n,
    destroy: e
  }), window.requestAnimationFrame(function() {
    Bu(n), document.body.appendChild(n);
  });
}
function sp() {
  St && St.remove && St.remove(), ln && ln.remove && ln.remove(), St = void 0, ln = void 0, un = void 0, Js = void 0, ot = void 0, Qs = void 0, qr = void 0, kt = void 0, Kn = void 0, Vt = void 0, Mr = !1, cl = !1, fl = void 0, Xa = !1, Yn && clearTimeout(Yn), Yn = void 0, xa = !1, hs.length && (hs.forEach(function(n) {
    var e = n.dz, t = n.destroy;
    t(), e.remove();
  }), hs = []);
}
function op(n, e) {
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
    window.removeEventListener("mousemove", l), window.removeEventListener("touchmove", l), window.removeEventListener("mouseup", d), window.removeEventListener("touchend", d), Yn && (clearTimeout(Yn), Yn = void 0, xa = !1);
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
    if (v && r.delayTouchStartMs > 0 && !xa) {
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
    if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !Mr) {
      var v = !!f.touches, g = v && r.delayTouchStartMs > 0;
      g || f.preventDefault(), f.stopPropagation();
      var m = v ? f.touches[0] : f;
      Kn = {
        x: m.clientX,
        y: m.clientY
      }, Vt = Ur({}, Kn), ln = f.currentTarget, g && (xa = !1, Yn = window.setTimeout(function() {
        ln && (xa = !0, s(), u());
      }, r.delayTouchStartMs)), a();
    }
  }
  function u() {
    Mr = !0;
    var f = i.get(ln);
    Qs = f, ot = ln.parentElement;
    var v = ot.closest("dialog") || ot.closest("[popover]") || ot.getRootNode(), g = v.body || v, m = r.items, _ = r.type, b = r.centreDraggedOnCursor, A = Ln(m);
    un = A[f], Js = _, qr = rp(un), St = qm(ln, b && Vt), g.appendChild(St);
    function E() {
      ln.parentElement ? window.requestAnimationFrame(E) : (ln.setAttribute(sd, !0), g.appendChild(ln), tp(), Bu(ln), qr[xt] = un[xt], St.focus());
    }
    window.requestAnimationFrame(E), fs(Array.from(Vn.get(r.type)).filter(function(y) {
      return y === ot || !mt.get(y).dropFromOthersDisabled;
    }), function(y) {
      return mt.get(y).dropTargetStyle;
    }, function(y) {
      return mt.get(y).dropTargetClasses;
    }), A.splice(f, 1, qr), fl = Km(ot), Wr(ot, A, {
      trigger: Tt.DRAG_STARTED,
      id: un[xt],
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
    var v = f.items, g = v === void 0 ? void 0 : v, m = f.flipDurationMs, _ = m === void 0 ? 0 : m, b = f.type, A = b === void 0 ? Ym : b, E = f.dragDisabled, y = E === void 0 ? !1 : E, T = f.morphDisabled, C = T === void 0 ? !1 : T, w = f.dropFromOthersDisabled, I = w === void 0 ? !1 : w, S = f.dropTargetStyle, L = S === void 0 ? ad : S, k = f.dropTargetClasses, D = k === void 0 ? [] : k, O = f.transformDraggedElement, Z = O === void 0 ? function() {
    } : O, G = f.centreDraggedOnCursor, B = G === void 0 ? !1 : G, M = f.dropAnimationDisabled, X = M === void 0 ? !1 : M, le = f.delayTouchStart, P = le === void 0 ? !1 : le;
    r.dropAnimationDurationMs = _;
    var ee = 0;
    P === !0 ? ee = $m : typeof P == "number" && isFinite(P) && P >= 0 && (ee = P), r.delayTouchStartMs = ee, r.type && A !== r.type && od(n, r.type), r.type = A, r.items = Ln(g), r.dragDisabled = y, r.morphDisabled = C, r.transformDraggedElement = Z, r.centreDraggedOnCursor = B, r.dropAnimationDisabled = X, t && Mr && !cl && (!Lm(L, r.dropTargetStyle) || !Om(D, r.dropTargetClasses)) && (xs([n], function() {
      return r.dropTargetStyle;
    }, function() {
      return D;
    }), fs([n], function() {
      return L;
    }, function() {
      return D;
    })), r.dropTargetStyle = L, r.dropTargetClasses = Ln(D);
    function ce(Ce, q) {
      return mt.get(Ce) ? mt.get(Ce)[q] : r[q];
    }
    t && Mr && r.dropFromOthersDisabled !== I && (I ? xs([n], function(Ce) {
      return ce(Ce, "dropTargetStyle");
    }, function(Ce) {
      return ce(Ce, "dropTargetClasses");
    }) : fs([n], function(Ce) {
      return ce(Ce, "dropTargetStyle");
    }, function(Ce) {
      return ce(Ce, "dropTargetClasses");
    })), r.dropFromOthersDisabled = I, mt.set(n, r), ep(n, A);
    for (var Se = Mr ? $s(r.items) : -1, be = 0; be < n.children.length; be++) {
      var de = n.children[be];
      if (jm(de, y), be === Se) {
        C || zm(St, de, Vt.x, Vt.y), r.transformDraggedElement(St, un, be), Zm(de);
        continue;
      }
      de.removeEventListener("mousedown", _o.get(de)), de.removeEventListener("touchstart", _o.get(de)), y || (de.addEventListener("mousedown", c), de.addEventListener("touchstart", c), _o.set(de, c)), i.set(de, be), t || (t = !0);
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
      Mr && !n.closest("[".concat(sd, "]")) ? ap(n, v) : v();
    }
  };
}
var as, Go = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
}, Wu = (as = {}, ia(as, Go.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), ia(as, Go.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), as), lp = "dnd-action-aria-alert", _t;
function Vo() {
  _t || (_t = document.createElement("div"), function() {
    _t.id = lp, _t.style.position = "fixed", _t.style.bottom = "0", _t.style.left = "0", _t.style.zIndex = "-5", _t.style.opacity = "0", _t.style.height = "0", _t.style.width = "0", _t.setAttribute("role", "alert");
  }(), document.body.prepend(_t), Object.entries(Wu).forEach(function(n) {
    var e = lm(n, 2), t = e[0], r = e[1];
    return document.body.prepend(cp(t, r));
  }));
}
function dp() {
  return dl ? null : (document.readyState === "complete" ? Vo() : window.addEventListener("DOMContentLoaded", Vo), Ur({}, Go));
}
function up() {
  dl || !_t || (Object.keys(Wu).forEach(function(n) {
    var e;
    return (e = document.getElementById(n)) === null || e === void 0 ? void 0 : e.remove();
  }), _t.remove(), _t = void 0);
}
function cp(n, e) {
  var t = document.createElement("div");
  return t.id = n, t.innerHTML = "<p>".concat(e, "</p>"), t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5", t;
}
function zi(n) {
  if (!dl) {
    _t || Vo(), _t.innerHTML = "";
    var e = document.createTextNode(n);
    _t.appendChild(e), _t.style.display = "none", _t.style.display = "inline";
  }
}
var fp = "--any--", ld = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Dn = !1, qo, Wt, Ii = "", li, tr, Hr = "", Ts = /* @__PURE__ */ new WeakSet(), dd = /* @__PURE__ */ new WeakMap(), ud = /* @__PURE__ */ new WeakMap(), Wo = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Ds;
function hp(n, e) {
  Hn.size === 0 && (Ds = dp(), window.addEventListener("keydown", zu), window.addEventListener("click", ju)), Hn.has(e) || Hn.set(e, /* @__PURE__ */ new Set()), Hn.get(e).has(n) || (Hn.get(e).add(n), Ru());
}
function cd(n, e) {
  Wt === n && ka(), Hn.get(e).delete(n), Mu(), Hn.get(e).size === 0 && Hn.delete(e), Hn.size === 0 && (window.removeEventListener("keydown", zu), window.removeEventListener("click", ju), Ds = void 0, up());
}
function zu(n) {
  if (Dn)
    switch (n.key) {
      case "Escape": {
        ka();
        break;
      }
    }
}
function ju() {
  Dn && (Ts.has(document.activeElement) || ka());
}
function vp(n) {
  if (Dn) {
    var e = n.currentTarget;
    if (e !== Wt) {
      Ii = e.getAttribute("aria-label") || "";
      var t = Mt.get(Wt), r = t.items, i = r.find(function(h) {
        return h[xt] === tr;
      }), a = r.indexOf(i), s = r.splice(a, 1)[0], d = Mt.get(e), l = d.items, c = d.autoAriaDisabled;
      e.getBoundingClientRect().top < Wt.getBoundingClientRect().top || e.getBoundingClientRect().left < Wt.getBoundingClientRect().left ? (l.push(s), c || zi("Moved item ".concat(Hr, " to the end of the list ").concat(Ii))) : (l.unshift(s), c || zi("Moved item ".concat(Hr, " to the beginning of the list ").concat(Ii)));
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
function Zu() {
  Wo.forEach(function(n, e) {
    var t = n.update;
    return t(Mt.get(e));
  });
}
function ka() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  Mt.get(Wt).autoAriaDisabled || zi("Stopped dragging item ".concat(Hr)), Ts.has(document.activeElement) && document.activeElement.blur(), n && Wr(Wt, Mt.get(Wt).items, {
    trigger: Tt.DRAG_STOPPED,
    id: tr,
    source: jt.KEYBOARD
  }), xs(Hn.get(qo), function(e) {
    return Mt.get(e).dropTargetStyle;
  }, function(e) {
    return Mt.get(e).dropTargetClasses;
  }), li = null, tr = null, Hr = "", qo = null, Wt = null, Ii = "", Dn = !1, Zu();
}
function gp(n, e) {
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
        u.preventDefault(), u.stopPropagation(), Dn ? ka() : a(u);
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        if (!Dn) return;
        u.preventDefault(), u.stopPropagation();
        var h = Mt.get(n), f = h.items, v = Array.from(n.children), g = v.indexOf(u.currentTarget);
        g < v.length - 1 && (t.autoAriaDisabled || zi("Moved item ".concat(Hr, " to position ").concat(g + 2, " in the list ").concat(Ii)), r(f, g, g + 1), aa(n, f, {
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
        var m = Mt.get(n), _ = m.items, b = Array.from(n.children), A = b.indexOf(u.currentTarget);
        A > 0 && (t.autoAriaDisabled || zi("Moved item ".concat(Hr, " to position ").concat(A, " in the list ").concat(Ii)), r(_, A, A - 1), aa(n, _, {
          trigger: Tt.DROPPED_INTO_ZONE,
          id: tr,
          source: jt.KEYBOARD
        }));
        break;
      }
    }
  }
  function a(u) {
    d(u.currentTarget), Wt = n, qo = t.type, Dn = !0;
    var h = Array.from(Hn.get(t.type)).filter(function(v) {
      return v === Wt || !Mt.get(v).dropFromOthersDisabled;
    });
    if (fs(h, function(v) {
      return Mt.get(v).dropTargetStyle;
    }, function(v) {
      return Mt.get(v).dropTargetClasses;
    }), !t.autoAriaDisabled) {
      var f = "Started dragging item ".concat(Hr, ". Use the arrow keys to move it within its list ").concat(Ii);
      h.length > 1 && (f += ", or tab to another list in order to move the item into it"), zi(f);
    }
    Wr(n, Mt.get(n).items, {
      trigger: Tt.DRAG_STARTED,
      id: tr,
      source: jt.KEYBOARD
    }), Zu();
  }
  function s(u) {
    Dn && u.currentTarget !== li && (u.stopPropagation(), ka(!1), a(u));
  }
  function d(u) {
    var h = Mt.get(n), f = h.items, v = Array.from(n.children), g = v.indexOf(u);
    li = u, li.tabIndex = t.zoneItemTabIndex, tr = f[g][xt], Hr = v[g].getAttribute("aria-label") || "";
  }
  function l(u) {
    var h = u.items, f = h === void 0 ? [] : h, v = u.type, g = v === void 0 ? fp : v, m = u.dragDisabled, _ = m === void 0 ? !1 : m, b = u.zoneTabIndex, A = b === void 0 ? 0 : b, E = u.zoneItemTabIndex, y = E === void 0 ? 0 : E, T = u.dropFromOthersDisabled, C = T === void 0 ? !1 : T, w = u.dropTargetStyle, I = w === void 0 ? ld : w, S = u.dropTargetClasses, L = S === void 0 ? [] : S, k = u.autoAriaDisabled, D = k === void 0 ? !1 : k;
    t.items = Ln(f), t.dragDisabled = _, t.dropFromOthersDisabled = C, t.zoneTabIndex = A, t.zoneItemTabIndex = y, t.dropTargetStyle = I, t.dropTargetClasses = L, t.autoAriaDisabled = D, t.type && g !== t.type && cd(n, t.type), t.type = g, hp(n, g), D || (n.setAttribute("aria-disabled", _), n.setAttribute("role", "list"), n.setAttribute("aria-describedby", _ ? Ds.DND_ZONE_DRAG_DISABLED : Ds.DND_ZONE_ACTIVE)), Mt.set(n, t), Dn ? n.tabIndex = n === Wt || li.contains(n) || t.dropFromOthersDisabled || Wt && t.type !== Mt.get(Wt).type ? -1 : 0 : n.tabIndex = t.zoneTabIndex, n.addEventListener("focus", vp);
    for (var O = function(B) {
      var M = n.children[B];
      Ts.add(M), M.tabIndex = Dn ? -1 : t.zoneItemTabIndex, D || M.setAttribute("role", "listitem"), M.removeEventListener("keydown", dd.get(M)), M.removeEventListener("click", ud.get(M)), _ || (M.addEventListener("keydown", i), dd.set(M, i), M.addEventListener("click", s), ud.set(M, s)), Dn && t.items[B][xt] === tr && (li = M, li.tabIndex = t.zoneItemTabIndex, M.focus());
    }, Z = 0; Z < n.children.length; Z++)
      O(Z);
  }
  l(e);
  var c = {
    update: function(h) {
      l(h);
    },
    destroy: function() {
      cd(n, t.type), Mt.delete(n), Wo.delete(n);
    }
  };
  return Wo.set(n, c), c;
}
var mp = ["items", "flipDurationMs", "type", "dragDisabled", "morphDisabled", "dropFromOthersDisabled", "zoneTabIndex", "zoneItemTabIndex", "dropTargetStyle", "dropTargetClasses", "transformDraggedElement", "autoAriaDisabled", "centreDraggedOnCursor", "delayTouchStart", "dropAnimationDisabled"];
function pp(n, e) {
  if (_p(n))
    return {
      update: function() {
      },
      destroy: function() {
      }
    };
  fd(e);
  var t = op(n, e), r = gp(n, e);
  return {
    update: function(a) {
      fd(a), t.update(a), r.update(a);
    },
    destroy: function() {
      t.destroy(), r.destroy();
    }
  };
}
function _p(n) {
  return !!n.closest("[".concat(Cm, '="true"]'));
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
  var s = om(n, mp);
  if (Object.keys(s).length > 0 && console.warn("dndzone will ignore unknown options", s), !e)
    throw new Error("no 'items' key provided to dndzone");
  var d = e.find(function(u) {
    return !{}.hasOwnProperty.call(u, xt);
  });
  if (d)
    throw new Error("missing '".concat(xt, "' property for item ").concat(Aa(d)));
  if (i && !Array.isArray(i))
    throw new Error("dropTargetClasses should be an array but instead it is a ".concat(Bi(i), ", ").concat(Aa(i)));
  if (t && !hd(t))
    throw new Error("zoneTabIndex should be a number but instead it is a ".concat(Bi(t), ", ").concat(Aa(t)));
  if (r && !hd(r))
    throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(Bi(r), ", ").concat(Aa(r)));
  if (a !== void 0 && a !== !1) {
    var l = a === !0, c = typeof a == "number" && isFinite(a) && a >= 0;
    if (!l && !c)
      throw new Error("delayTouchStart should be a boolean (true/false) or a non-negative number but instead it is a ".concat(Bi(a), ", ").concat(Aa(a)));
  }
}
function hd(n) {
  return !isNaN(n) && function(e) {
    return (e | 0) === e;
  }(parseFloat(n));
}
function Xu(n) {
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
var Nn = Xu(!0), ji = Xu(!1);
function vd() {
  return {
    dragDisabled: ji.get() || Nn.get(),
    zoneItemTabIndex: -1
  };
}
function yr(n, e) {
  var t;
  ji.set((t = e == null ? void 0 : e.dragDisabled) !== null && t !== void 0 ? t : !1);
  var r = e, i = pp(n, Ur(Ur({}, r), vd()));
  function a() {
    i.update(Ur(Ur({}, r), vd()));
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
function Ip(n) {
  return n * n * n;
}
function Ku(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function eo(n, { from: e, to: t }, r = {}) {
  var { delay: i = 0, duration: a = (C) => Math.sqrt(C) * 120, easing: s = Ku } = r, d = getComputedStyle(n), l = d.transform === "none" ? "" : d.transform, [c, u] = d.transformOrigin.split(" ").map(parseFloat);
  c /= n.clientWidth, u /= n.clientHeight;
  var h = bp(n), f = n.clientWidth / t.width / h, v = n.clientHeight / t.height / h, g = e.left + e.width * c, m = e.top + e.height * u, _ = t.left + t.width * c, b = t.top + t.height * u, A = (g - _) * f, E = (m - b) * v, y = e.width / t.width, T = e.height / t.height;
  return {
    delay: i,
    duration: typeof a == "function" ? a(Math.sqrt(A * A + E * E)) : a,
    easing: s,
    css: (C, w) => {
      var I = w * A, S = w * E, L = C + w * y, k = C + w * T;
      return `transform: ${l} translate(${I}px, ${S}px) scale(${L}, ${k});`;
    }
  };
}
function bp(n) {
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
function yp(n) {
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
function md(n, { delay: e = 0, duration: t = 400, easing: r = yp, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const d = getComputedStyle(n), l = +d.opacity, c = d.transform === "none" ? "" : d.transform, u = l * (1 - s), [h, f] = gd(i), [v, g] = gd(a);
  return {
    delay: e,
    duration: t,
    easing: r,
    css: (m, _) => `
			transform: ${c} translate(${(1 - m) * h}${f}, ${(1 - m) * v}${g});
			opacity: ${l - u * _}`
  };
}
ft([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
var Cp = /* @__PURE__ */ j("<div><!></div>");
function Yu(n, e) {
  let t = p(e, "variant", 3, "secondary");
  var r = Cp(), i = N(r);
  pe(i, () => e.children ?? ve), ue(() => Sr(r, 1, `osc-card osc-card--${t()}`, "svelte-14hhvrx")), x(n, r);
}
var Ap = /* @__PURE__ */ j('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), Ep = /* @__PURE__ */ j('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), Sp = /* @__PURE__ */ j('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), xp = /* @__PURE__ */ j('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function Ju(n, e) {
  let t = p(e, "backgroundColor", 3, "");
  var r = xp(), i = N(r);
  {
    var a = (u) => {
      var h = Ap(), f = N(h);
      pe(f, () => e.header), x(u, h);
    };
    te(i, (u) => {
      e.header && u(a);
    });
  }
  var s = z(i, 2);
  {
    var d = (u) => {
      var h = Ep(), f = N(h);
      pe(f, () => e.content), x(u, h);
    };
    te(s, (u) => {
      e.content && u(d);
    });
  }
  var l = z(s, 2);
  {
    var c = (u) => {
      var h = Sp(), f = N(h);
      pe(f, () => e.additional), x(u, h);
    };
    te(l, (u) => {
      e.additional && u(c);
    });
  }
  ue(() => nt(r, `--bg-color: ${t() ?? ""}`)), x(n, r);
}
function wp(n, e) {
  var t;
  (t = e()) == null || t();
}
var Tp = /* @__PURE__ */ j('<div class="detail svelte-4xu36c"> </div>'), Dp = /* @__PURE__ */ j('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function Lp(n, e) {
  _e(e, !0);
  let t = p(e, "onClose", 3, () => {
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
  var a = Dp(), s = N(a), d = N(s);
  Kl(d, {
    class: "material-icons",
    children: (m, _) => {
      var b = He();
      ue(() => Pe(b, r[e.type])), x(m, b);
    },
    $$slots: { default: !0 }
  });
  var l = z(s, 2), c = N(l), u = N(c), h = z(c, 2);
  {
    var f = (m) => {
      var _ = Tp(), b = N(_);
      ue(() => Pe(b, e.detail)), x(m, _);
    };
    te(h, (m) => {
      e.detail && m(f);
    });
  }
  var v = z(l, 2);
  v.__click = [wp, t];
  var g = N(v);
  Kl(g, {
    class: "material-icons",
    children: (m, _) => {
      var b = He("close");
      x(m, b);
    },
    $$slots: { default: !0 }
  }), ue(() => {
    nt(a, `--color:${i[e.type] ?? ""}`), Pe(u, e.summary);
  }), Fl(1, a, () => md, () => ({ x: 0, y: 30, duration: 150, easing: Ip })), Fl(2, a, () => md, () => ({ x: 50, y: 0, duration: 150, easing: Ku })), x(n, a), Ie();
}
ft(["click"]);
const Op = 4e3;
function Rp() {
  let n = Ee({ items: [] }), e = 0;
  const t = (i) => {
    n.items = n.items.filter((a) => a.id !== i);
  }, r = (i, a, s, d = Op) => {
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
const Ls = Rp();
var Mp = /* @__PURE__ */ j("<div><!></div>"), Pp = /* @__PURE__ */ j('<div class="toast-host svelte-11vwiay"></div>');
function kp(n, e) {
  _e(e, !1);
  const t = Ls.toasts;
  Kf();
  var r = Pp();
  hn(r, 13, () => t.items, (i) => i.id, (i, a) => {
    var s = Mp(), d = N(s);
    Lp(d, {
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
  }), x(n, r), Ie();
}
ft(["click"]);
ft(["click"]);
ft(["click"]);
ft(["input"]);
const Fp = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+VHlwZXM8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dGVtcGxhdGUtZ2VuZXJhdG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImV4dGVybmFsIj4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dHlwZS1kZXNpZ25lci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+VHlwZSBEZXNpZ25lcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy90eXBlLWRlc2lnbmVyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50eXBlLWRpc3RyaWJ1dG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UeXBlIERpc3RyaWJ1dG9yPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJleHRlcm5hbCI+CiAgICAgICAgICAgIGh0dHBzOi8vYXNlLWNvbXBhcy5naXRodWIuaW8vY29tcGFzLXRyYW5zbmV0YnctcGx1Z2lucy9iZWFyaW5ncG9pbnQvY29tcGFzL3BsdWdpbnMvdHlwZS1kaXN0cmlidXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbmZpZ3VyYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi14eXo8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvcGx1Z2lucy9zcmMvZWRpdG9ycy9Db21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJpbnRlcm5hbCI+CiAgICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+cHVibGlzaGVyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5QdWJsaXNoZXI8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImludGVybmFsIj4KICAgICAgICAgICAgL2V4dGVybmFsLXBsdWdpbnMvb3NjZC1wdWJsaXNoZXIvb3NjZC1wdWJsaXNoZXIuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic2NyaWJlLWxhdGVyLWJpbmRpbmcteHl6PC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnNjcmliZTwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvZXh0ZXJuYWwtcGx1Z2lucy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50YXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+YXV0b2RvYy14eXo8L2lkPgogICAgICAgICAgPG5hbWU+QXV0b0RvYzwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy9hdXRvLWRvYy9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+bG9jYXRpb24tbWFuYWdlci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+TG9jYXRpb24gTWFuYWdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2xvY2F0aW9uLW1hbmFnZXIvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmhpc3Rvcnktdmlld2VyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5IaXN0b3J5IFZpZXdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2hpc3Rvcnktdmlld2VyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", Np = Fp, Qu = "engineeringWizardProcesses", Up = "external", Dt = Ee({ processes: [] }), Gi = Ee({ loading: !1, error: "" }), We = Ee({ process: null }), fn = Ee({ isEditing: !1 }), Ei = Ee({ process: null, lastSelectedPluginId: null }), hl = Ee({ plugins: [] });
function Hp() {
  if (typeof localStorage > "u") return;
  const n = localStorage.getItem(Qu);
  if (n)
    try {
      const e = JSON.parse(n);
      Array.isArray(e) && (Dt.processes = e);
    } catch {
    }
}
function Bp() {
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
      localStorage.setItem(Qu, JSON.stringify(n));
    } catch {
    }
}
Hp();
zd(() => {
  xe(() => {
    console.log("[processes] persistence module loaded"), Bp();
  });
});
var Gp = /* @__PURE__ */ j('<div class="process-banner svelte-xtmc4p"><div class="process-banner__info svelte-xtmc4p"><!> <span class="svelte-xtmc4p"> </span></div> <!></div>'), Vp = /* @__PURE__ */ j("<!> <!>", 1), qp = /* @__PURE__ */ j('<div class="processes svelte-xtmc4p"><!> <div class="process-toolbar svelte-xtmc4p"><!> <!></div> <!></div>');
function Wp(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ se("");
  const r = /* @__PURE__ */ Q(() => Dt.processes ?? []), i = /* @__PURE__ */ Q(() => o(r).map((I) => ({ ...I, displayName: I.name || I.id }))), a = /* @__PURE__ */ Q(() => o(t).trim().toLowerCase()), s = /* @__PURE__ */ Q(() => o(a) ? o(i).filter((I) => I.displayName.toLowerCase().includes(o(a))) : o(i)), d = [
    { key: "displayName", header: "Name", bold: !0 },
    { key: "description", header: "Description" }
  ], l = /* @__PURE__ */ Q(() => Ei.process), c = /* @__PURE__ */ Q(() => {
    var I, S;
    return ((I = o(l)) == null ? void 0 : I.name) || ((S = o(l)) == null ? void 0 : S.id) || "";
  }), u = /* @__PURE__ */ Q(() => Ei.lastSelectedPluginId);
  function h(I, S) {
    var L;
    if (!S) return "";
    for (const k of (I == null ? void 0 : I.pluginGroups) ?? []) {
      const D = (L = k.plugins) == null ? void 0 : L.find((O) => O.id === S);
      if (D) return D.name || D.id;
    }
    return "";
  }
  const f = /* @__PURE__ */ Q(() => h(o(l), o(u)));
  function v() {
    const I = `A process “${o(c)}” has already been started`, S = [
      e.docName ? ` for the ${e.docName}` : "",
      o(f) ? ` at “${o(f)}”` : ""
    ];
    return `${I}${S.join("")}. Would you like to continue where you left off?`;
  }
  const g = /* @__PURE__ */ Q(v);
  function m() {
    o(l) && e.handleStart(o(l));
  }
  function _(I) {
    return !!o(l) && (I == null ? void 0 : I.id) === o(l).id;
  }
  var b = qp(), A = N(b);
  {
    var E = (I) => {
      var S = Gp(), L = N(S), k = N(L);
      cg(k, {});
      var D = z(k, 2), O = N(D), Z = z(L, 2);
      dn(Z, {
        type: "button",
        style: "background: var(--white); color: var(--primary-base);",
        onclick: m,
        children: (G, B) => {
          var M = He("CONTINUE");
          x(G, M);
        },
        $$slots: { default: !0 }
      }), ue(() => Pe(O, o(g))), x(I, S);
    };
    te(A, (I) => {
      o(l) && I(E);
    });
  }
  var y = z(A, 2), T = N(y);
  Gn(T, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return o(t);
    },
    set value(I) {
      V(t, I, !0);
    }
  });
  var C = z(T, 2);
  dn(C, {
    class: "mdc-button--raised",
    style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
    get onclick() {
      return e.handleAddNew;
    },
    "aria-label": "Start process",
    children: (I, S) => {
      var L = He("ADD NEW PROCESS");
      x(I, L);
    },
    $$slots: { default: !0 }
  });
  var w = z(y, 2);
  Yg(w, {
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
    actions: (S, L) => {
      let k = () => L == null ? void 0 : L().item;
      var D = Vp(), O = Y(D);
      dn(O, {
        type: "button",
        onclick: (M) => {
          M.stopPropagation(), e.handleEdit(k());
        },
        "aria-label": "Edit process",
        class: "mdc-button--raised",
        style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
        children: (M, X) => {
          var le = He("Edit");
          x(M, le);
        },
        $$slots: { default: !0 }
      });
      var Z = z(O, 2);
      {
        var G = (M) => {
          dn(M, {
            variant: "raised",
            type: "button",
            "aria-label": "Start process",
            onclick: (X) => {
              X.stopPropagation(), e.handleStart(k());
            },
            class: "mdc-button--raised",
            style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
            children: (X, le) => {
              var P = He("Continue");
              x(X, P);
            },
            $$slots: { default: !0 }
          });
        }, B = (M) => {
          dn(M, {
            type: "button",
            "aria-label": "Start process",
            onclick: (X) => {
              X.stopPropagation(), e.handleStart(k());
            },
            class: "mdc-button--raised",
            style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
            children: (X, le) => {
              var P = He("Start");
              x(X, P);
            },
            $$slots: { default: !0 }
          });
        };
        te(Z, (M) => {
          _(k()) ? M(G) : M(B, !1);
        });
      }
      x(S, D);
    },
    $$slots: { actions: !0 }
  }), x(n, b), Ie();
}
var zp = /* @__PURE__ */ j('<div class="add-group-form svelte-dyj28k"><!> <!></div>');
function jp(n, e) {
  _e(e, !0);
  let t = p(e, "open", 15, !1), r = /* @__PURE__ */ se(""), i = /* @__PURE__ */ se(Ee((e.groups + 1).toString()));
  const a = () => sr("cancel"), s = () => sr("confirm", { name: o(r), position: Number(o(i)) });
  let d = /* @__PURE__ */ Q(() => [
    ...Array.from({ length: e.groups + 1 }, (c, u) => ({ value: (u + 1).toString(), label: (u + 1).toString() }))
    // iterate from 1..groups+1
  ]), l = /* @__PURE__ */ Q(() => o(r) && o(i));
  {
    const c = (h) => {
      var f = zp(), v = N(f);
      il(v, {
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
      Rv(g, {
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
    let u = /* @__PURE__ */ Q(() => !o(l));
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
  Ie();
}
var Zp = /* @__PURE__ */ j("<div><!></div>");
function vl(n, e) {
  const t = p(e, "active", 3, !1), r = p(e, "visited", 3, !1);
  var i = Zp(), a = N(i);
  {
    var s = (l) => {
      var c = ie(), u = Y(c);
      {
        var h = (v) => {
          wu(v, {});
        }, f = (v) => {
          var g = ie(), m = Y(g);
          {
            var _ = (A) => {
              og(A);
            }, b = (A) => {
              var E = ie(), y = Y(E);
              {
                var T = (C) => {
                  dg(C, {});
                };
                te(
                  y,
                  (C) => {
                    e.status === "warning" && C(T);
                  },
                  !0
                );
              }
              x(A, E);
            };
            te(
              m,
              (A) => {
                e.status === "error" ? A(_) : A(b, !1);
              },
              !0
            );
          }
          x(v, g);
        };
        te(u, (v) => {
          e.status === "check" ? v(h) : v(f, !1);
        });
      }
      x(l, c);
    }, d = (l) => {
      var c = He();
      ue(() => Pe(c, e.number)), x(l, c);
    };
    te(a, (l) => {
      r() && e.status ? l(s) : l(d, !1);
    });
  }
  ue(() => Sr(i, 1, `step-circle ${t() ? "active" : ""} ${r() ? "visited" : ""}`, "svelte-1as5ana")), x(n, i);
}
var Xp = /* @__PURE__ */ j('<div class="group-list-item svelte-15ukemk"><div><!></div> <div><!></div> <!> <!></div>'), Kp = /* @__PURE__ */ j('<div class="edit-groups-form"><h3>Drag & Drop to change Order</h3> <div></div></div>');
function Yp(n, e) {
  _e(e, !0);
  const t = 100;
  let r = p(e, "open", 15, !1), i = /* @__PURE__ */ se(Ee([...e.groups]));
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
  let u = /* @__PURE__ */ Q(() => o(i).every((h) => h.title.trim().length > 0));
  {
    const h = (v) => {
      var g = Kp(), m = z(N(g), 2);
      hn(m, 31, () => o(i), (_) => _.id, (_, b, A) => {
        var E = Xp(), y = N(E), T = N(y);
        {
          let L = /* @__PURE__ */ Q(() => o(A) + 1);
          vl(T, {
            get number() {
              return o(L);
            }
          });
        }
        var C = z(y, 2), w = N(C);
        sl(w, {}), Me(C, (L) => Cr == null ? void 0 : Cr(L));
        var I = z(C, 2);
        il(I, {
          label: "Name",
          variant: "outlined",
          required: !0,
          get value() {
            return o(b).title;
          },
          set value(L) {
            o(b).title = L;
          }
        });
        var S = z(I, 2);
        {
          let L = /* @__PURE__ */ Q(() => d(o(b).id));
          Ou(S, {
            type: "delete",
            tooltip: "Delete",
            fillColor: "#FF203A",
            get onClick() {
              return o(L);
            }
          });
        }
        ue(() => At(E, "data-id", o(b).id)), Ws(E, () => eo, () => ({ duration: t })), x(_, E);
      }), Me(m, (_, b) => yr == null ? void 0 : yr(_, b), () => ({
        items: o(i),
        flipDurationMs: t,
        dropTargetStyle: {},
        transformDraggedElement: c,
        type: "order-ew-groups-zone"
      })), Kt("consider", m, l), Kt("finalize", m, l), x(v, g);
    };
    let f = /* @__PURE__ */ Q(() => !o(u));
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
  Ie();
}
async function Jp(n, e, t) {
  const r = await Ai(jp, { groups: e().length });
  r.type === "confirm" && t()(r.data.name, r.data.position);
}
async function Qp(n, e, t) {
  const r = e().map((s, d) => ({ id: d.toString(), title: s.title })), i = await Ai(Yp, { groups: r });
  if (i.type !== "confirm") return;
  const a = i.data.groups.map((s) => {
    const d = parseInt(s.id, 10);
    return { ...e()[d], title: s.title };
  });
  t()(a);
}
var $p = /* @__PURE__ */ j('<div class="plugin-list__header-action svelte-s6osjd"><!></div>'), e_ = /* @__PURE__ */ j('<header class="plugin-list__header svelte-s6osjd"><p class="plugin-list__title svelte-s6osjd"> </p> <!></header>'), t_ = /* @__PURE__ */ j('<div aria-label="drag-handle"><!></div>'), n_ = /* @__PURE__ */ j('<div class="plugin-list__item-action svelte-s6osjd"><!></div>'), r_ = /* @__PURE__ */ j('<div class="plugin-list__item-row svelte-s6osjd"><div class="plugin-list__item-row__left svelte-s6osjd"><!> <span class="plugin-list__item-name svelte-s6osjd"> </span></div> <!></div>'), i_ = /* @__PURE__ */ j("<div><!></div>"), a_ = /* @__PURE__ */ j('<div style="display: flex; justify-content: center; margin-top: 0.4rem;"><!></div>'), s_ = /* @__PURE__ */ j('<section class="plugin-list__group svelte-s6osjd"><header class="plugin-list__group-header svelte-s6osjd"><span class="plugin-list__group-index plugin-list__group-plugins__indicator svelte-s6osjd"><!></span> <span class="plugin-list__group-title svelte-s6osjd"> </span></header> <div class="plugin-list__group-plugins-section svelte-s6osjd"><div></div></div> <!></section>'), o_ = /* @__PURE__ */ j('<div class="plugin-list__body svelte-s6osjd"></div>'), l_ = /* @__PURE__ */ j('<div class="plugin-list__footer svelte-s6osjd"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-s6osjd"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-s6osjd"><!> <span>Add group</span></button></div>');
function gl(n, e) {
  _e(e, !0);
  const t = (h) => {
    var f = e_(), v = N(f), g = N(v), m = z(v, 2);
    {
      var _ = (b) => {
        var A = $p(), E = N(A);
        pe(E, () => e.headerAction), x(b, A);
      };
      te(m, (b) => {
        e.headerAction && b(_);
      });
    }
    ue(() => Pe(g, s())), x(h, f);
  }, r = (h) => {
    var f = o_();
    hn(f, 21, a, Er, (v, g, m) => {
      var _ = s_(), b = N(_), A = N(b), E = N(A);
      vl(E, { number: m + 1 });
      var y = z(A, 2), T = N(y), C = z(b, 2), w = N(C);
      let I;
      hn(w, 31, () => o(g).plugins, (k) => k.id, (k, D, O) => {
        var Z = i_(), G = N(Z);
        Yu(G, {
          variant: "secondary",
          children: (B, M) => {
            var X = r_(), le = N(X), P = N(le);
            {
              var ee = (Ce) => {
                var q = t_(), ge = N(q);
                sl(ge, {}), Me(q, (re) => Cr == null ? void 0 : Cr(re)), x(Ce, q);
              };
              te(P, (Ce) => {
                fn.isEditing && Ce(ee);
              });
            }
            var ce = z(P, 2), Se = N(ce), be = z(le, 2);
            {
              var de = (Ce) => {
                var q = n_(), ge = N(q);
                pe(ge, () => e.itemAction, () => ({
                  group: o(g),
                  plugin: o(D),
                  groupIndex: m,
                  pluginIndex: o(O)
                })), x(Ce, q);
              };
              te(be, (Ce) => {
                e.itemAction && Ce(de);
              });
            }
            ue(() => Pe(Se, o(D).name)), x(B, X);
          },
          $$slots: { default: !0 }
        }), ue(() => At(Z, "data-id", o(D).id)), Ws(Z, () => eo, () => ({ duration: 100 })), x(k, Z);
      }), Me(w, (k, D) => yr == null ? void 0 : yr(k, D), () => ({
        items: o(g).plugins,
        flipDurationMs: 100,
        dropTargetStyle: {}
      }));
      var S = z(C, 2);
      {
        var L = (k) => {
          var D = a_(), O = N(D);
          Eg(O, { svgStyles: "fill: #6B9197;" }), x(k, D);
        };
        te(S, (k) => {
          m < a().length - 1 && k(L);
        });
      }
      ue(
        (k) => {
          Pe(T, o(g).title), I = Sr(w, 1, "plugin-list__group-plugins svelte-s6osjd", null, I, k);
        },
        [
          () => ({
            "plugin_list__group-plugins--dashed": fn.isEditing
          })
        ]
      ), Kt("consider", w, (k) => c(k, o(g))), Kt("finalize", w, (k) => u(k, o(g))), x(v, _);
    }), x(h, f);
  }, i = (h) => {
    var f = ie(), v = Y(f);
    {
      var g = (m) => {
        var _ = l_(), b = N(_);
        b.__click = [Qp, a, l];
        var A = N(b);
        Su(A, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var E = z(b, 2);
        E.__click = [Jp, a, d];
        var y = N(E);
        Tu(y, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), x(m, _);
      };
      te(v, (m) => {
        fn.isEditing && m(g);
      });
    }
    x(h, f);
  };
  let a = p(e, "pluginGroups", 19, () => []), s = p(e, "title", 3, "Process"), d = p(e, "onAddGroup", 3, () => {
  }), l = p(e, "onUpdateGroups", 3, (h) => {
  });
  function c(h, f) {
    f.plugins = h.detail.items;
  }
  function u(h, f) {
    h.detail.info.trigger === Tt.DROPPED_OUTSIDE_OF_ANY ? f.plugins = h.detail.items.filter((v) => h.detail.info.id !== v.id) : f.plugins = h.detail.items, l()(a());
  }
  Ju(n, {
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
  }), Ie();
}
ft(["click"]);
function d_(n, e) {
  const t = (i) => {
    dn(i, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--white); --mdc-theme-on-primary: var(--primary-base)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (a, s) => {
        var d = He("EDIT");
        x(a, d);
      },
      $$slots: { default: !0 }
    });
  };
  let r = p(e, "pluginGroups", 19, () => []);
  gl(n, {
    get pluginGroups() {
      return r();
    },
    get headerAction() {
      return t;
    }
  });
}
function u_(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function c_() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function f_(n) {
  var e;
  (e = c_()) == null || e.dispatchEvent(new CustomEvent("toggle-editor-tabs", { detail: { visible: n }, bubbles: !0, composed: !0 }));
}
const qn = Ee({ visible: !0 });
zd(() => {
  xe(() => {
    f_(qn.visible);
  });
});
var h_ = /* @__PURE__ */ j('<button class="btn-engineering-wizard_title svelte-qwuvgs">Engineering Wizard</button>');
function $u(n, e) {
  var t = h_();
  t.__click = function(...r) {
    var i;
    (i = e.onClick) == null || i.apply(this, r);
  }, x(n, t);
}
ft(["click"]);
var v_ = (n, e, t) => e.onSelect(o(t).id), g_ = /* @__PURE__ */ j('<button class="step-button svelte-de8jn9"><!></button>'), m_ = /* @__PURE__ */ j('<div class="step-line svelte-de8jn9" aria-hidden="true"></div>'), p_ = /* @__PURE__ */ j('<div class="step svelte-de8jn9"><!> <p> </p></div> <!>', 1), __ = /* @__PURE__ */ j('<div class="steps svelte-de8jn9"></div>');
function I_(n, e) {
  _e(e, !0);
  let t = p(e, "items", 19, () => []), r = p(e, "visited", 19, () => []), i = p(e, "currentId", 3, null), a = p(e, "status", 19, () => ({})), s = p(e, "tooltipMap", 19, () => ({}));
  var d = __();
  hn(d, 21, t, Er, (l, c, u) => {
    var h = p_(), f = Y(h), v = N(f);
    {
      let A = /* @__PURE__ */ Q(() => s()[o(c).id] ?? "");
      Lu(v, {
        get content() {
          return o(A);
        },
        side: "bottom",
        children: (E, y) => {
          var T = g_();
          T.__click = [v_, e, c];
          var C = N(T);
          {
            let w = /* @__PURE__ */ Q(() => o(c).id === i()), I = /* @__PURE__ */ Q(() => r().includes(o(c).id) && o(c).id !== i());
            vl(C, {
              number: u + 1,
              get active() {
                return o(w);
              },
              get visited() {
                return o(I);
              },
              get status() {
                return a()[o(c).id];
              }
            });
          }
          ue(() => At(T, "aria-current", o(c).id === i() ? "step" : void 0)), x(E, T);
        },
        $$slots: { default: !0 }
      });
    }
    var g = z(v, 2), m = N(g), _ = z(f, 2);
    {
      var b = (A) => {
        var E = m_();
        x(A, E);
      };
      te(_, (A) => {
        u < t().length - 1 && A(b);
      });
    }
    ue(() => Pe(m, o(c).label)), x(l, h);
  }), x(n, d), Ie();
}
ft(["click"]);
function b_(n, e) {
  const t = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = p(e, "currentId", 3, null), i = p(e, "visited", 19, () => []);
  I_(n, {
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
var y_ = /* @__PURE__ */ j('<div class="stepper-actions svelte-1jrjxrv"><div class="stepper-navigation svelte-1jrjxrv"><button type="button" class="btn btn--back svelte-1jrjxrv" aria-label="Previous step"><span><!></span> <span>Back</span></button> <button type="button" class="btn btn--next svelte-1jrjxrv" aria-label="Next step"><span>Next</span> <span><!></span></button></div> <button type="button" class="btn btn--done svelte-1jrjxrv" aria-label="Done"><span><!></span> <span>Done</span></button></div>');
function ec(n, e) {
  const t = p(e, "isAtFirstStep", 3, !1), r = p(e, "isAtLastStep", 3, !1), i = p(e, "doneDisabled", 3, !1);
  var a = y_(), s = N(a), d = N(s);
  d.__click = function(..._) {
    var b;
    (b = e.onGoToPreviousStep) == null || b.apply(this, _);
  };
  var l = N(d), c = N(l);
  Tg(c, { svgStyles: "fill: var(--white)" });
  var u = z(d, 2);
  u.__click = function(..._) {
    var b;
    (b = e.onGoToNextStep) == null || b.apply(this, _);
  };
  var h = z(N(u), 2), f = N(h);
  xg(f, { svgStyles: "fill: var(--primary-base);" });
  var v = z(s, 2);
  v.__click = function(..._) {
    var b;
    (b = e.onDone) == null || b.apply(this, _);
  };
  var g = N(v), m = N(g);
  wu(m, { svgStyles: "fill: var(--primary-base);" }), ue(() => {
    d.disabled = t(), u.disabled = r(), v.disabled = i();
  }), x(n, a);
}
ft(["click"]);
var C_ = /* @__PURE__ */ j('<div class="empty-state svelte-iwa4yq"><p> </p></div>'), A_ = /* @__PURE__ */ j('<div class="validation-xml-container svelte-iwa4yq"><div class="validation-xml-container__meta svelte-iwa4yq"><span class="validation-xml-container__name svelte-iwa4yq"> </span> <div class="validation-xml-container__actions svelte-iwa4yq"><button type="button" class="delete-btn svelte-iwa4yq" title="Remove"><!></button></div></div> <div class="xml-viewer svelte-iwa4yq"><div class="xml-viewer__box svelte-iwa4yq"><div class="xml-viewer__label svelte-iwa4yq">Scope</div> <pre class="svelte-iwa4yq"> </pre></div> <div class="xml-viewer__box svelte-iwa4yq"><div class="xml-viewer__label svelte-iwa4yq">Rule</div> <pre class="svelte-iwa4yq"> </pre></div> <div class="xml-viewer__box svelte-iwa4yq"><div class="xml-viewer__label svelte-iwa4yq">Failure message</div> <pre class="svelte-iwa4yq"> </pre></div></div></div>'), E_ = /* @__PURE__ */ j('<div class="validation-xml-list svelte-iwa4yq"></div>');
function S_(n, e) {
  _e(e, !0), p(e, "pluginGroups", 19, () => []);
  let t = p(e, "selectedPlugin", 3, null);
  const r = /* @__PURE__ */ Q(() => {
    var u, h, f;
    const l = (u = We == null ? void 0 : We.process) == null ? void 0 : u.id, c = (h = t()) == null ? void 0 : h.id;
    return !l || !c ? [] : (((f = t()) == null ? void 0 : f.validations) ?? []).filter((v) => v.processId === l && v.pluginId === c);
  });
  function i(l) {
  }
  var a = ie(), s = Y(a);
  {
    var d = (l) => {
      var c = ie(), u = Y(c);
      {
        var h = (v) => {
          var g = C_(), m = N(g), _ = N(m);
          ue(() => Pe(_, `No validations configured for "${t().name ?? ""}" yet.`)), x(v, g);
        }, f = (v) => {
          var g = E_();
          hn(g, 21, () => o(r), Er, (m, _, b) => {
            var A = A_(), E = N(A), y = N(E), T = N(y), C = z(y, 2), w = N(C);
            w.__click = () => void 0;
            var I = N(w);
            xu(I, { svgStyles: "fill: #FF203A" });
            var S = z(E, 2), L = N(S), k = z(N(L), 2), D = N(k), O = z(L, 2), Z = z(N(O), 2), G = N(Z), B = z(O, 2), M = z(N(B), 2), X = N(M);
            ue(() => {
              Pe(T, o(_).title), Pe(D, o(_).context), Pe(G, o(_).assert), Pe(X, o(_).message);
            }), x(m, A);
          }), x(v, g);
        };
        te(u, (v) => {
          o(r).length === 0 ? v(h) : v(f, !1);
        });
      }
      x(l, c);
    };
    te(s, (l) => {
      t() && l(d);
    });
  }
  x(n, a), Ie();
}
ft(["click"]);
function x_(n) {
  const e = (n || "").trim() || "process", t = new Set((Dt.processes ?? []).map((a) => a.id));
  if (!t.has(e)) return e;
  let r = 2, i = `${e}-${r}`;
  for (; t.has(i); )
    r += 1, i = `${e}-${r}`;
  return i;
}
function w_(n) {
  var a;
  const e = Us(n), t = (e.id || e.name || "process").trim(), r = x_(t), i = {
    id: r,
    version: e.version || "1.0.0",
    name: e.name || r,
    description: e.description || "",
    pluginGroups: (a = e.pluginGroups) != null && a.length ? e.pluginGroups : [{ title: "Ungrouped", plugins: [] }]
  };
  return Dt.processes = [...Dt.processes ?? [], i], i;
}
function T_(n, e, t) {
  const r = "Ungrouped", i = Dt.processes.find((d) => d.id === n);
  if (!i) return;
  const a = i.pluginGroups ?? (i.pluginGroups = []);
  let s = a.find((d) => d.title === r);
  s || (s = { title: r, plugins: [] }, a.push(s)), s.plugins ?? (s.plugins = []), s.plugins.push(e);
}
function D_(n, e, t) {
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
function L_(n, e) {
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
function O_(n) {
  var t;
  const e = Dt.processes.find((r) => r.id === n);
  if (!(!e || !e.pluginGroups))
    for (const r of e.pluginGroups)
      (t = r.plugins) == null || t.splice(0, r.plugins.length);
}
function R_(n, e, t) {
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
function M_(n, e) {
  const t = Dt.processes.find((r) => r.id === n);
  t && (t.pluginGroups ?? (t.pluginGroups = []), t.pluginGroups.splice(0, t.pluginGroups.length, ...e));
}
function P_(n) {
  hl.plugins = [...n];
}
function Io(n, e = null) {
  Ei.process = n ?? null, Ei.lastSelectedPluginId = e ?? null;
}
function k_(n) {
  Ei.lastSelectedPluginId = n ?? null;
}
var F_ = (n, e, t) => e(t().id), N_ = /* @__PURE__ */ j('<button type="button" class="plugin-list__removeBtn svelte-1qh2g9"><!></button>');
function U_(n, e) {
  _e(e, !0);
  const t = (u) => {
    var h = ie(), f = Y(h);
    {
      var v = (g) => {
        dn(g, {
          variant: "raised",
          style: "background-color: #FF203A",
          "aria-label": "Remove all plugins",
          onclick: a,
          children: (m, _) => {
            var b = He("REMOVE ALL");
            x(m, b);
          },
          $$slots: { default: !0 }
        });
      };
      te(f, (g) => {
        o(c) && g(v);
      });
    }
    x(u, h);
  }, r = (u, h) => {
    let f = () => h == null ? void 0 : h().plugin;
    var v = N_();
    v.__click = [F_, s, f];
    var g = N(v);
    Eu(g, { svgStyles: "fill: #FF203A" }), ue(() => At(v, "aria-label", `Remove ${f().name}`)), x(u, v);
  };
  let i = p(e, "pluginGroups", 19, () => []);
  async function a() {
    (await Ai(al, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && O_(We.process.id);
  }
  function s(u) {
    L_(We.process.id, u);
  }
  function d(u, h) {
    R_(We.process.id, u, h);
  }
  function l(u) {
    M_(We.process.id, u);
  }
  let c = /* @__PURE__ */ Q(() => i().flatMap((u) => u.plugins).length > 0);
  gl(n, {
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
  }), Ie();
}
ft(["click"]);
var H_ = /* @__PURE__ */ j('<div class="card-header svelte-1sbzvyb"><p class="header-info svelte-1sbzvyb">Add External Plugins</p> <div class="search-input svelte-1sbzvyb"><!></div></div>'), B_ = (n, e, t) => e(o(t)), G_ = /* @__PURE__ */ j('<div class="card-item-content svelte-1sbzvyb"><div class="card-item-content__left svelte-1sbzvyb"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1sbzvyb"> </p></div> <button class="plugin-add-btn svelte-1sbzvyb"><!></button></div>'), V_ = /* @__PURE__ */ j("<div><!></div>"), q_ = /* @__PURE__ */ j('<div class="card-parent-content svelte-1sbzvyb"></div>');
function tc(n, e) {
  _e(e, !0);
  const t = (h) => {
    var f = H_(), v = z(N(f), 2), g = N(v);
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
    var f = q_();
    hn(f, 29, i, (v) => v.id, (v, g) => {
      var m = V_(), _ = N(m);
      Yu(_, {
        variant: "secondary",
        children: (b, A) => {
          var E = G_(), y = N(E), T = N(y), C = N(T);
          sl(C, {}), Me(T, (k) => Cr == null ? void 0 : Cr(k));
          var w = z(T, 2), I = N(w), S = z(y, 2);
          S.__click = [B_, u, g];
          var L = N(S);
          Tu(L, { svgStyles: "fill: var(--primary-base);" }), ue(() => {
            Pe(I, o(g).name), At(S, "aria-label", `Add ${o(g).name}`);
          }), x(b, E);
        },
        $$slots: { default: !0 }
      }), ue(() => At(m, "data-id", o(g).id)), Ws(m, () => eo, () => ({ duration: 100 })), x(v, m);
    }), Me(f, (v, g) => yr == null ? void 0 : yr(v, g), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Kt("consider", f, l), Kt("finalize", f, d), x(h, f);
  };
  let i = p(e, "plugins", 23, () => []), a = p(e, "searchTerm", 15, ""), s = p(e, "onAddPlugin", 3, () => {
  });
  const d = (h) => {
    i(h.detail.items);
  }, l = (h) => {
    const { trigger: f, id: v } = h.detail.info;
    if (f === Tt.DRAG_STARTED) {
      const g = i().findIndex((_) => _.id === v);
      if (g < 0) return;
      const m = `${v}_copy`;
      h.detail.items = h.detail.items.filter((_) => !_[Za]), h.detail.items.splice(g, 0, { ...i()[g], id: m }), i(h.detail.items);
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
  Ju(n, {
    backgroundColor: "#DAE3E6",
    get header() {
      return t;
    },
    get content() {
      return r;
    }
  }), Ie();
}
ft(["click"]);
function nc(n) {
  var r;
  const e = n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), t = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${t}`;
}
var W_ = /* @__PURE__ */ j('<div class="process-definition-view svelte-3po5y4"><!> <div class="drag-and-drop-info svelte-3po5y4"><!> <p class="svelte-3po5y4">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function z_(n, e) {
  _e(e, !0);
  let t = p(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ se(""), i = /* @__PURE__ */ Q(() => {
    const f = hl.plugins.map((g) => ({
      id: nc(g.name),
      name: g.name,
      src: g.src,
      type: "internal"
    })), v = o(r).toLowerCase().trim();
    return v ? f.filter((g) => g.name.toLowerCase().includes(v)) : f;
  });
  function a(h) {
    const f = We.process.id;
    T_(f, h);
  }
  var s = W_(), d = N(s);
  U_(d, {
    get pluginGroups() {
      return t();
    }
  });
  var l = z(d, 2), c = N(l);
  Du(c, { svgStyles: "fill: #6B9197" });
  var u = z(l, 2);
  tc(u, {
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
  }), x(n, s), Ie();
}
var j_ = /* @__PURE__ */ j('<button type="button"><span> </span></button>'), Z_ = /* @__PURE__ */ j('<div><button type="button" class="validation-groups__group-title svelte-4zr9uj"> </button> <!></div>'), X_ = /* @__PURE__ */ j('<div class="validation-groups svelte-4zr9uj"></div>');
function rc(n, e) {
  _e(e, !0);
  let t = p(e, "pluginGroups", 19, () => []), r = p(e, "selectedGroupIndex", 15, 0), i = p(e, "selectedPluginIndex", 15, 0), a = p(e, "expandedGroupBackground", 3, "var(--primary-base)"), s = p(e, "expandedGroupBorderColor", 3, "var(--primary-base)"), d = null;
  xe(() => {
    var m, _, b, A, E;
    if (!((m = t()) != null && m.length)) {
      r(null), i(null), d = null;
      return;
    }
    let h = r() ?? 0;
    (h < 0 || h >= t().length) && (h = 0);
    let f = t()[h];
    if (!((_ = f == null ? void 0 : f.plugins) != null && _.length)) {
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
    (v < 0 || v >= (((b = f.plugins) == null ? void 0 : b.length) ?? 0)) && (v = 0), r(h), i(v);
    const g = (A = f.plugins) == null ? void 0 : A[v];
    g && g.id !== d && (d = g.id, (E = e.selectPlugin) == null || E.call(e, g));
  });
  function l(h) {
    var g, m, _;
    const f = t()[h];
    r(h), i((g = f == null ? void 0 : f.plugins) != null && g.length ? 0 : null);
    const v = (m = f == null ? void 0 : f.plugins) == null ? void 0 : m[0];
    v ? (d = v.id, (_ = e.selectPlugin) == null || _.call(e, v)) : d = null;
  }
  function c(h, f) {
    var g, m, _;
    r(h), i(f);
    const v = (m = (g = t()[h]) == null ? void 0 : g.plugins) == null ? void 0 : m[f];
    v && (d = v.id, (_ = e.selectPlugin) == null || _.call(e, v));
  }
  var u = X_();
  hn(u, 21, t, Er, (h, f, v) => {
    var g = Z_();
    let m;
    var _ = N(g);
    _.__click = () => l(v);
    var b = N(_), A = z(_, 2);
    {
      var E = (y) => {
        var T = ie(), C = Y(T);
        hn(C, 17, () => o(f).plugins, Er, (w, I, S) => {
          var L = j_();
          let k;
          L.__click = () => c(v, S);
          var D = N(L), O = N(D);
          ue(
            (Z) => {
              k = Sr(L, 1, "validation-groups__plugin svelte-4zr9uj", null, k, Z), Pe(O, o(I).name);
            },
            [() => ({ active: S === i() })]
          ), x(w, L);
        }), x(y, T);
      };
      te(A, (y) => {
        v === r() && y(E);
      });
    }
    ue(
      (y) => {
        m = Sr(g, 1, "validation-groups__group svelte-4zr9uj", null, m, y), Pe(b, o(f).title);
      },
      [() => ({ expanded: v === r() })]
    ), x(h, g);
  }), ue(() => nt(u, `--expanded-group-bg:${a()}; --expanded-group-border:${s()};`)), x(n, u), Ie();
}
ft(["click"]);
let K_ = 0;
var Y_ = /* @__PURE__ */ j("<div><!></div>");
function vs(n, e) {
  _e(e, !0);
  let t = p(e, "use", 19, () => []), r = p(e, "class", 3, ""), i = p(e, "id", 19, () => "SMUI-textfield-helper-text-" + K_++), a = p(e, "persistent", 3, !1), s = p(e, "validationMsg", 3, !1), d = /* @__PURE__ */ ze(e, [
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
  const v = ye("SMUI:textfield:helper-text:id"), g = ye("SMUI:textfield:helper-text:mount"), m = ye("SMUI:textfield:helper-text:unmount");
  rt(() => (V(
    c,
    new Ah({
      addClass: b,
      removeClass: A,
      hasClass: _,
      getAttr: E,
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
  function _(D) {
    return D in u ? u[D] : C().classList.contains(D);
  }
  function b(D) {
    u[D] || (u[D] = !0);
  }
  function A(D) {
    (!(D in u) || u[D]) && (u[D] = !1);
  }
  function E(D) {
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
  var w = { getElement: C }, I = Y_();
  qe(
    I,
    (D) => ({
      class: D,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...d
    }),
    [
      () => Ge({
        "mdc-text-field-helper-text": !0,
        "mdc-text-field-helper-text--persistent": a(),
        "mdc-text-field-helper-text--validation-msg": s(),
        ...u,
        [r()]: !0
      })
    ]
  );
  var S = N(I);
  {
    var L = (D) => {
      var O = ie(), Z = Y(O);
      pe(Z, () => e.children ?? ve), x(D, O);
    }, k = (D) => {
      var O = He();
      ue(() => Pe(O, o(f))), x(D, O);
    };
    te(S, (D) => {
      o(f) == null ? D(L) : D(k, !1);
    });
  }
  return we(I, (D) => l = D, () => l), Me(I, (D, O) => ne == null ? void 0 : ne(D, O), t), x(n, I), Ie(w);
}
var J_ = /* @__PURE__ */ j('<div class="add-validation-form svelte-fau6z8"><!> <!> <!> <!></div>');
function Q_(n, e) {
  _e(e, !0);
  let t = p(e, "open", 15, !1), r = Ee({
    severity: "error",
    title: "",
    context: "",
    assert: "",
    message: "",
    processId: e.process.id,
    pluginId: e.plugin.id
  });
  const i = /* @__PURE__ */ Q(() => {
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
      var u = J_(), h = N(u);
      il(h, {
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
        set value(_) {
          r.context = _;
        },
        helper: (_) => {
          vs(_, {
            children: (b, A) => {
              var E = He("Context");
              x(b, E);
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
        set value(_) {
          r.assert = _;
        },
        helper: (_) => {
          vs(_, {
            children: (b, A) => {
              var E = He("Assert");
              x(b, E);
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
        set value(_) {
          r.message = _;
        },
        helper: (_) => {
          vs(_, {
            children: (b, A) => {
              var E = He("Message");
              x(b, E);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { helper: !0 }
      }), x(c, u);
    };
    let l = /* @__PURE__ */ Q(() => !o(i));
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
  Ie();
}
var $_ = /* @__PURE__ */ j('<div class="header svelte-1qdn6hx"><!> <!></div> <!>', 1), eI = /* @__PURE__ */ j('<div class="stepper svelte-1qdn6hx"><!> <!> <!></div> <div class="step-content svelte-1qdn6hx"><!></div>', 1);
function tI(n, e) {
  _e(e, !0);
  const t = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ se(0), i = /* @__PURE__ */ Q(() => t[o(r)] ?? t[0]), a = /* @__PURE__ */ Q(() => o(r) === 0), s = /* @__PURE__ */ Q(() => o(r) === t.length - 1), d = /* @__PURE__ */ Q(() => We.process.pluginGroups), l = /* @__PURE__ */ se(null), c = /* @__PURE__ */ se(Ee([])), u = /* @__PURE__ */ se(null), h = /* @__PURE__ */ se(null), f = /* @__PURE__ */ Q(() => {
    var B;
    const Z = We.process, G = o(l);
    return !Z || !G ? null : ((B = Z.pluginGroups) == null ? void 0 : B.flatMap((M) => M.plugins ?? []).find((M) => M.id === G)) ?? null;
  });
  rt(() => (qn.visible = !1, () => {
    qn.visible = !0;
  }));
  function v(Z) {
    Z === 0 && (qn.visible = !0, We.process = null);
  }
  function g() {
    o(s) || (A(o(i)), V(r, o(r) + 1));
  }
  function m() {
    o(a) || V(r, o(r) - 1);
  }
  function _() {
    fn.isEditing = !1, qn.visible = !0, We.process = null;
  }
  function b(Z) {
    const G = t.indexOf(Z);
    G !== -1 && V(r, G, !0);
  }
  function A(Z) {
    o(c).includes(Z) || V(c, [...o(c), Z], !0);
  }
  function E(Z) {
    V(l, Z.id, !0);
  }
  async function y() {
    var M;
    const Z = We.process, G = o(f);
    if (!G || !Z) return;
    const B = await Ai(Q_, { plugin: G, process: Z });
    (B == null ? void 0 : B.type) === "confirm" && (D_(Z.id, G.id, B.data), We.process = ((M = Dt.processes) == null ? void 0 : M.find((X) => X.id === Z.id)) ?? null);
  }
  var T = eI(), C = Y(T), w = N(C);
  $u(w, { onClick: _ });
  var I = z(w, 2);
  b_(I, {
    get currentId() {
      return o(i);
    },
    get visited() {
      return o(c);
    },
    onSelect: b
  });
  var S = z(I, 2);
  ec(S, {
    onGoToPreviousStep: m,
    onGoToNextStep: g,
    onDone: _,
    get isAtFirstStep() {
      return o(a);
    },
    get isAtLastStep() {
      return o(s);
    }
  });
  var L = z(C, 2), k = N(L);
  {
    var D = (Z) => {
      z_(Z, {
        get pluginGroups() {
          return o(d);
        }
      });
    }, O = (Z) => {
      var G = ie(), B = Y(G);
      {
        var M = (X) => {
          var le = $_(), P = Y(le), ee = N(P);
          rc(ee, {
            get pluginGroups() {
              return o(d);
            },
            selectPlugin: E,
            get selectedGroupIndex() {
              return o(u);
            },
            set selectedGroupIndex(be) {
              V(u, be, !0);
            },
            get selectedPluginIndex() {
              return o(h);
            },
            set selectedPluginIndex(be) {
              V(h, be, !0);
            }
          });
          var ce = z(ee, 2);
          {
            let be = /* @__PURE__ */ Q(() => !We.process || !o(f));
            dn(ce, {
              variant: "raised",
              style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
              onclick: y,
              get disabled() {
                return o(be);
              },
              "aria-label": "Add validation",
              children: (de, Ce) => {
                var q = He("ADD NEW VALIDATION");
                x(de, q);
              },
              $$slots: { default: !0 }
            });
          }
          var Se = z(P, 2);
          S_(Se, {
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
          }), x(X, le);
        };
        te(
          B,
          (X) => {
            o(i) === "validator-configuration" && X(M);
          },
          !0
        );
      }
      x(Z, G);
    };
    te(k, (Z) => {
      o(i) === "process-definition" ? Z(D) : Z(O, !1);
    });
  }
  x(n, T), Ie();
}
var nI = /* @__PURE__ */ j('<div class="step-content svelte-1hp1kek"><div class="header svelte-1hp1kek"><!> <!></div> <!></div>'), rI = /* @__PURE__ */ j('<div class="page-content svelte-1hp1kek"><!></div>');
function iI(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ se(0), r = /* @__PURE__ */ Q(() => u_(We.process, { edit: fn.isEditing })), i = /* @__PURE__ */ Q(() => We.process.pluginGroups);
  function a(h) {
    h === 0 && (qn.visible = !0, We.process = null);
  }
  function s() {
    fn.isEditing = !0, qn.visible = !1, V(t, 0);
  }
  var d = rI(), l = N(d);
  {
    var c = (h) => {
      tI(h, {});
    }, u = (h) => {
      var f = nI(), v = N(f), g = N(v);
      rm(g, {
        get breadcrumbs() {
          return o(r);
        },
        activeIndex: 1,
        handleClick: a
      });
      var m = z(g, 2);
      {
        let b = /* @__PURE__ */ Q(() => !We.process);
        dn(m, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
          onclick: () => e.handleStart(We.process),
          get disabled() {
            return o(b);
          },
          "aria-label": "Start process",
          children: (A, E) => {
            var y = He("START PROCESS");
            x(A, y);
          },
          $$slots: { default: !0 }
        });
      }
      var _ = z(v, 2);
      d_(_, {
        get pluginGroups() {
          return o(i);
        },
        requestEdit: s
      }), x(h, f);
    };
    te(l, (h) => {
      fn.isEditing ? h(c) : h(u, !1);
    });
  }
  x(n, d), Ie();
}
var aI = /* @__PURE__ */ j("<div></div>");
function sI(n, e) {
  _e(e, !0);
  function t(c) {
    let u = 3735928559, h = 1103547991;
    for (let f = 0, v; f < c.length; f++)
      v = c.charCodeAt(f), u = Math.imul(u ^ v, 2654435761), h = Math.imul(h ^ v, 1597334677);
    return u = Math.imul(u ^ u >>> 16, 2246822507) ^ Math.imul(h ^ h >>> 13, 3266489909), h = Math.imul(h ^ h >>> 16, 2246822507) ^ Math.imul(u ^ u >>> 13, 3266489909), "oscd-plugin" + ((h >>> 0).toString(16).padStart(8, "0") + (u >>> 0).toString(16).padStart(8, "0"));
  }
  let r = p(e, "editCount", 19, () => -1), i = p(e, "plugins", 19, () => []), a = null, s = null, d = "";
  xe(() => {
    var u;
    if (!a) return;
    if (!((u = e.plugin) != null && u.src)) {
      a.innerHTML = "", s = null, d = "";
      return;
    }
    const c = t(e.plugin.src);
    c !== d ? (d = c, a.innerHTML = "", s = document.createElement(c), s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi), a.appendChild(s)) : s && (s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi));
  });
  var l = aI();
  we(l, (c) => a = c, () => a), x(n, l), Ie();
}
const bo = /* @__PURE__ */ new Map();
function yo(n) {
  return !!customElements.get(n);
}
function oI(n) {
  if (!n.includes("-"))
    throw new Error(
      `Invalid custom element name "${n}". Custom element names must contain a dash.`
    );
}
async function ic(n) {
  if (n.type !== "external") return;
  const e = n.id;
  if (oI(e), yo(e)) return;
  const t = bo.get(e);
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
    if (!yo(e))
      try {
        customElements.define(e, d);
      } catch (l) {
        if (!yo(e)) throw l;
      }
    await customElements.whenDefined(e);
  })().finally(() => {
    bo.delete(e);
  });
  return bo.set(e, r), r;
}
async function lI(n) {
  await Promise.all(
    n.filter((e) => e.type === "external").map(async (e) => {
      try {
        await ic(e);
      } catch (t) {
        console.error("Failed to preload plugin", e.id, t);
      }
    })
  );
}
function dI(n, e, t = null) {
  return { parent: n, node: e, reference: t };
}
function uI(n) {
  return { node: n };
}
function cI(n, e) {
  return { element: n, textContent: e };
}
function fI(n, e) {
  return new CustomEvent("oscd-edit-v2", {
    composed: !0,
    bubbles: !0,
    detail: { ...e, edit: n }
  });
}
function hI(n, e) {
  if (!n)
    return console.warn("Host element is undefined, cannot dispatch event"), !1;
  const t = fI(e);
  return n.dispatchEvent(t);
}
const ac = "compas", sc = `${ac}:workflowProcessId`, oc = `${ac}:workflowLastPluginId`;
function to(n) {
  return n.documentElement;
}
function vI(n) {
  return to(n).querySelector(":scope > Header");
}
function lc(n, e) {
  return to(n).querySelector(`:scope > Private[type="${e}"]`);
}
function gI(n, e, t) {
  const r = n.createElementNS(to(n).namespaceURI, "Private");
  return r.setAttribute("type", e), r.textContent = t, r;
}
function pd(n, e, t, r) {
  const i = lc(n, t), a = (r ?? "").trim();
  if (!a) {
    i && e.push(uI(i));
    return;
  }
  if (i)
    e.push(cI(i, a));
  else {
    const s = vI(n);
    e.push(dI(to(n), gI(n, t, a), s));
  }
}
function dc(n) {
  const e = (t) => {
    var r, i;
    return ((i = (r = lc(n, t)) == null ? void 0 : r.textContent) == null ? void 0 : i.trim()) || null;
  };
  return {
    processId: e(sc),
    lastPluginId: e(oc)
  };
}
function gs(n, e, t) {
  const r = [];
  return "processId" in t && pd(n, r, sc, t.processId), "lastPluginId" in t && pd(
    n,
    r,
    oc,
    t.lastPluginId
  ), r.length ? hI(e, r) : !1;
}
function mI(n, e, t) {
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
function pI(n, e) {
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
      if (!mI(n, a, t.assert))
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
var _I = /* @__PURE__ */ j('<div class="plugin-container svelte-1o7wsbo"><!></div>'), II = /* @__PURE__ */ j('<div class="stepper svelte-1o7wsbo"><!> <!> <!></div> <!>', 1);
function bI(n, e) {
  _e(e, !0);
  let t = p(e, "editCount", 19, () => -1), r = p(e, "plugins", 19, () => []), i = /* @__PURE__ */ se(null), a = /* @__PURE__ */ Q(() => r().length > 0), s = /* @__PURE__ */ Q(() => o(i) && o(a) ? r().findIndex((I) => I.id === o(i).id) : -1), d = /* @__PURE__ */ Q(() => We.process.pluginGroups), l = /* @__PURE__ */ se(null), c = /* @__PURE__ */ se(null);
  function u(I) {
    var S, L;
    if (!((S = o(d)) != null && S.length)) return { groupIndex: null, pluginIndex: null };
    for (let k = 0; k < o(d).length; k++) {
      const O = ((L = o(d)[k].plugins) == null ? void 0 : L.findIndex((Z) => Z.id === I)) ?? -1;
      if (O >= 0) return { groupIndex: k, pluginIndex: O };
    }
    return { groupIndex: null, pluginIndex: null };
  }
  async function h(I) {
    var D, O;
    if (!I || ((D = o(i)) == null ? void 0 : D.id) === I.id) return;
    const S = o(i);
    e.doc && ((O = S == null ? void 0 : S.validations) != null && O.length) && pI(e.doc, S.validations).forEach((G) => {
      G.ok ? Ls.success("Validation passed", G.validation.title) : Ls.error("Validation failed ", G.validation.message);
    }), await ic(I), V(i, I, !0);
    const { groupIndex: L, pluginIndex: k } = u(I.id);
    V(l, L, !0), V(c, k, !0);
    try {
      e.doc && e.host && gs(e.doc, e.host, { lastPluginId: I.id });
    } catch {
    }
    k_(I.id);
  }
  function f(I) {
    if (!o(a)) return;
    const L = ((o(s) < 0 ? 0 : o(s)) + I + r().length) % r().length;
    h(r()[L]);
  }
  const v = () => f(1), g = () => f(-1);
  function m(I, S) {
    return Object.assign(I, S), {
      update(L) {
        Object.assign(I, L);
      }
    };
  }
  rt(() => {
    r().length && lI(r()).catch(console.error);
    let I = Ei.lastSelectedPluginId;
    if (!I && e.doc)
      try {
        const { lastPluginId: L } = dc(e.doc);
        I = L;
      } catch {
      }
    const S = r().find((L) => L.id === I) ?? r()[0];
    if (S) {
      const { groupIndex: L, pluginIndex: k } = u(S.id);
      V(l, L, !0), V(c, k, !0), h(S);
    }
    return qn.visible = !1, () => {
      qn.visible = !0;
    };
  });
  function _() {
    var I;
    qn.visible = !0, (I = e.onExit) == null || I.call(e);
  }
  var b = II(), A = Y(b), E = N(A);
  $u(E, { onClick: _ });
  var y = z(E, 2);
  rc(y, {
    selectPlugin: h,
    get pluginGroups() {
      return o(d);
    },
    expandedGroupBackground: "var(--primary-base)",
    expandedGroupBorderColor: "white",
    get selectedGroupIndex() {
      return o(l);
    },
    set selectedGroupIndex(I) {
      V(l, I, !0);
    },
    get selectedPluginIndex() {
      return o(c);
    },
    set selectedPluginIndex(I) {
      V(c, I, !0);
    }
  });
  var T = z(y, 2);
  {
    let I = /* @__PURE__ */ Q(() => !o(a)), S = /* @__PURE__ */ Q(() => !o(a));
    ec(T, {
      onGoToPreviousStep: g,
      onGoToNextStep: v,
      onDone: _,
      get isAtFirstStep() {
        return o(I);
      },
      get isAtLastStep() {
        return o(S);
      }
    });
  }
  var C = z(A, 2);
  {
    var w = (I) => {
      var S = _I(), L = N(S);
      {
        var k = (O) => {
          sI(O, {
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
          var Z = ie(), G = Y(Z);
          Ro(G, () => o(i).id, !1, (B, M) => {
            Me(B, (X, le) => m == null ? void 0 : m(X, le), () => ({
              doc: e.doc,
              editCount: t(),
              docs: e.docs,
              nsdoc: e.nsdoc,
              docName: e.docName,
              docId: e.docId,
              locale: e.locale,
              oscdApi: e.oscdApi,
              host: e.host
            })), Sr(B, 0, "svelte-1o7wsbo");
          }), x(O, Z);
        };
        te(L, (O) => {
          o(i).type === "internal" ? O(k) : O(D, !1);
        });
      }
      x(I, S);
    };
    te(C, (I) => {
      o(i) && I(w);
    });
  }
  x(n, b), Ie();
}
const yI = (n, e, t) => {
  n.target === n.currentTarget && (n.key === "Escape" && (n.preventDefault(), e("exit")), (n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()));
};
var CI = (n, e) => {
  n.target === n.currentTarget && e("exit");
}, AI = /* @__PURE__ */ j('<div class="ewf-dialog-backdrop svelte-1hw00aa" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-1hw00aa" role="document"><h2 id="ewf-title" class="sr-only svelte-1hw00aa">Engineering Workflow</h2> <!></div></div>');
function EI(n, e) {
  _e(e, !0);
  let t = p(e, "editCount", 19, () => -1), r = p(e, "plugins", 19, () => []), i = /* @__PURE__ */ se(!1), a = /* @__PURE__ */ se(void 0), s = /* @__PURE__ */ se(null);
  const d = (f) => {
    o(i) || (V(i, !0), We.process = null, qn.visible = !0, sr(f));
  }, l = () => d("exit");
  xe(() => {
    var f;
    e.open !== o(a) && (V(a, e.open, !0), e.open ? (V(i, !1), (f = o(s)) == null || f.focus()) : d("cancel"));
  });
  var c = ie(), u = Y(c);
  {
    var h = (f) => {
      var v = AI();
      v.__keydown = [yI, d, l], v.__click = [CI, d];
      var g = N(v), m = z(N(g), 2);
      bI(m, {
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
      }), we(v, (_) => V(s, _), () => o(s)), x(f, v);
    };
    te(u, (f) => {
      e.open && f(h);
    });
  }
  x(n, c), Ie();
}
ft(["keydown", "click"]);
var SI = (n, e, t) => e(t().id), xI = /* @__PURE__ */ j('<button type="button" class="plugin-list__removeBtn svelte-h2qaw8"><!></button>'), wI = /* @__PURE__ */ j('<div class="page svelte-h2qaw8"><div class="topbar svelte-h2qaw8"><div class="topbar__left svelte-h2qaw8"><h2 class="title svelte-h2qaw8">Create new process</h2></div> <div class="topbar__actions svelte-h2qaw8"><!> <!></div></div> <div class="form svelte-h2qaw8"><div class="field svelte-h2qaw8"><!></div> <div class="field svelte-h2qaw8"><!></div> <div class="field svelte-h2qaw8"><!></div> <div class="field svelte-h2qaw8"><!></div></div> <div class="process-definition-view svelte-h2qaw8"><!> <div class="drag-and-drop-info svelte-h2qaw8"><!> <p class="svelte-h2qaw8">SELECT OR DRAG &amp; DROP PLUGINS</p></div> <!></div></div>');
function TI(n, e) {
  _e(e, !0);
  const t = (W) => {
    var J = ie(), he = Y(J);
    {
      var Te = (De) => {
        dn(De, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: A,
          children: (Le, et) => {
            var Ft = He("REMOVE ALL");
            x(Le, Ft);
          },
          $$slots: { default: !0 }
        });
      };
      te(he, (De) => {
        o(C) && De(Te);
      });
    }
    x(W, J);
  }, r = (W, J) => {
    let he = () => J == null ? void 0 : J().plugin;
    var Te = xI();
    Te.__click = [SI, E, he];
    var De = N(Te);
    Eu(De, { svgStyles: "fill: #FF203A" }), ue(() => At(Te, "aria-label", `Remove ${he().name}`)), x(W, Te);
  };
  let i = /* @__PURE__ */ se(""), a = /* @__PURE__ */ Q(() => o(i).trim().length === 0), s = /* @__PURE__ */ se(""), d = /* @__PURE__ */ se("1.0.0"), l = /* @__PURE__ */ se(""), c = /* @__PURE__ */ se(!1), u = /* @__PURE__ */ se(Ee([{ title: "Ungrouped", plugins: [] }])), h = /* @__PURE__ */ se("");
  const f = (W) => W.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  xe(() => {
    o(c) || V(l, f(o(i)), !0);
  });
  function v(W) {
    const J = /* @__PURE__ */ new Set();
    for (const he of W ?? []) for (const Te of he.plugins ?? []) J.add(Te.id);
    return J;
  }
  function g(W, J) {
    const he = v(J);
    if (!he.has(W)) return W;
    let Te = 2, De = `${W}-${Te}`;
    for (; he.has(De); )
      Te += 1, De = `${W}-${Te}`;
    return De;
  }
  function m(W = "Ungrouped") {
    let J = o(u).find((he) => he.title === W);
    return J || (J = { title: W, plugins: [] }, V(u, [...o(u), J], !0)), J.plugins ?? (J.plugins = []), J;
  }
  function _(W) {
    const J = [], he = /* @__PURE__ */ new Set();
    for (const Te of W ?? []) {
      const De = [];
      for (const Le of Te.plugins ?? []) {
        let et = Le.id;
        he.has(et) && (et = g(et, J.concat([{ ...Te, plugins: De }]))), he.add(et), De.push({ ...Le, id: et });
      }
      J.push({ ...Te, plugins: De });
    }
    return J;
  }
  function b(W, J = "Ungrouped") {
    const he = m(J), Te = g(W.id, o(u));
    he.plugins.push({ ...W, id: Te }), V(u, [...o(u)], !0);
  }
  async function A() {
    if ((await Ai(al, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm") {
      for (const J of o(u)) (J.plugins ?? (J.plugins = [])).length = 0;
      V(u, [...o(u)], !0);
    }
  }
  function E(W) {
    for (let J = 0; J < o(u).length; J += 1) {
      const he = o(u)[J], Te = (he.plugins ?? []).findIndex((De) => De.id === W);
      if (Te !== -1) {
        he.plugins.splice(Te, 1), he.plugins.length === 0 && o(u).splice(J, 1), V(u, [...o(u)], !0);
        return;
      }
    }
  }
  function y(W, J) {
    const he = W.trim();
    if (!he || o(u).some((et) => et.title === he)) return;
    const Te = { title: he, plugins: [] };
    if (J === void 0) {
      V(u, [...o(u), Te], !0);
      return;
    }
    const De = Math.max(0, J - 1), Le = [...o(u)];
    Le.splice(De, 0, Te), V(u, Le, !0);
  }
  function T(W) {
    V(u, _(W), !0);
  }
  let C = /* @__PURE__ */ Q(() => o(u).flatMap((W) => W.plugins ?? []).length > 0), w = /* @__PURE__ */ Q(() => {
    const W = o(h).toLowerCase().trim(), J = (hl.plugins ?? []).map((he) => ({
      id: nc(he.name),
      name: he.name,
      src: he.src,
      type: "internal"
    }));
    return W ? J.filter((he) => he.name.toLowerCase().includes(W)) : J;
  }), I = /* @__PURE__ */ Q(() => !!o(i).trim());
  function S() {
    if (!o(I)) return;
    const W = {
      id: o(l).trim() || f(o(i)) || "process",
      version: o(d).trim() || "1.0.0",
      name: o(i).trim(),
      description: o(s).trim(),
      pluginGroups: Us(o(u))
    }, J = w_(W);
    fn.isEditing = !1, e.handleSaved(J);
  }
  function L() {
    fn.isEditing = !1, e.handleCancel();
  }
  rt(() => {
    fn.isEditing = !0;
  }), Mn(() => {
    fn.isEditing = !1;
  });
  var k = wI(), D = N(k), O = z(N(D), 2), Z = N(O);
  dn(Z, {
    variant: "outlined",
    style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
    onclick: L,
    children: (W, J) => {
      var he = He("CANCEL");
      x(W, he);
    },
    $$slots: { default: !0 }
  });
  var G = z(Z, 2);
  {
    let W = /* @__PURE__ */ Q(() => !o(I));
    dn(G, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
      onclick: S,
      get disabled() {
        return o(W);
      },
      children: (J, he) => {
        var Te = He("SAVE");
        x(J, Te);
      },
      $$slots: { default: !0 }
    });
  }
  var B = z(D, 2), M = N(B), X = N(M);
  Gn(X, {
    variant: "outlined",
    label: "Process name",
    get invalid() {
      return o(a);
    },
    get value() {
      return o(i);
    },
    set value(J) {
      V(i, J, !0);
    },
    helper: (J) => {
      vs(J, {
        validationMsg: !0,
        children: (he, Te) => {
          var De = He("Process name is required.");
          x(he, De);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { helper: !0 }
  });
  var le = z(M, 2), P = N(le);
  Gn(P, {
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
  var ee = z(le, 2), ce = N(ee);
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
  var Se = z(ee, 2), be = N(Se);
  Gn(be, {
    variant: "outlined",
    label: "Description",
    get value() {
      return o(s);
    },
    set value(W) {
      V(s, W, !0);
    }
  });
  var de = z(B, 2), Ce = N(de);
  gl(Ce, {
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
    onAddGroup: (W, J) => y(W, J),
    onUpdateGroups: (W) => T(W)
  });
  var q = z(Ce, 2), ge = N(q);
  Du(ge, { svgStyles: "fill: #6B9197" });
  var re = z(q, 2);
  tc(re, {
    get plugins() {
      return o(w);
    },
    onAddPlugin: (W) => b(W, "Ungrouped"),
    get searchTerm() {
      return o(h);
    },
    set searchTerm(W) {
      V(h, W, !0);
    }
  }), x(n, k), Ie();
}
ft(["click"]);
const br = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.textContent) == null ? void 0 : e.trim()) ?? "";
}, DI = (n, e) => (n == null ? void 0 : n.getAttribute(e)) ?? void 0, ss = (n, e) => Array.from(n.querySelectorAll(e));
function LI(n) {
  const e = DI(n.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : Up;
}
function _d(n) {
  return {
    id: br(n.querySelector("id")),
    name: br(n.querySelector("name")),
    src: br(n.querySelector("src")) || void 0,
    sourceUrl: br(n.querySelector("sourceUrl")) || void 0,
    type: LI(n)
  };
}
function OI(n) {
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
function RI(n) {
  if (typeof DOMParser > "u")
    throw new Error("DOMParser is not available in this environment.");
  const e = new DOMParser().parseFromString(n, "application/xml");
  if (e.getElementsByTagName("parsererror").length)
    throw new Error("Invalid XML file format.");
  return e;
}
function MI(n, e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of n) t.set(r.id, r);
  for (const r of e) t.set(r.id, r);
  return Array.from(t.values());
}
async function PI() {
  Gi.loading = !0, Gi.error = "";
  try {
    const n = await fetch(Np, { cache: "no-cache" });
    if (!n.ok)
      throw new Error(`HTTP ${n.status}${n.statusText ? `: ${n.statusText}` : ""}`);
    const e = await n.text(), t = RI(e), r = OI(t), i = Us(Dt.processes), a = Array.isArray(i) && i.length ? MI(r, i) : r;
    return Dt.processes = a, a;
  } catch (n) {
    throw Gi.error = n instanceof Error ? n.message : "Failed to load processes.", n;
  } finally {
    Gi.loading = !1;
  }
}
function kI(n) {
  return (n.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var FI = /* @__PURE__ */ j("<!> <!> <!>", 1);
function NI(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ se(!1);
  rt(async () => {
    await PI();
    try {
      if (e.doc) {
        const { processId: _, lastPluginId: b } = dc(e.doc);
        if (_) {
          const A = (Dt.processes ?? []).find((E) => E.id === _);
          A && Io(A, b ?? null);
        }
      }
    } catch {
    }
  });
  async function r(_) {
    const b = Ei.process;
    if (b && b.id !== _.id) {
      if ((await Ai(al, {
        title: "Do you want to start a new process?",
        message: "Starting a new process will stop the current running process. Any unsaved progress will be lost.",
        confirmActionText: "Start New Process",
        cancelActionText: "Cancel"
      })).type === "cancel")
        return;
      Io(_, null), e.doc && e.host && gs(e.doc, e.host, { processId: _.id, lastPluginId: null });
    } else b ? e.doc && e.host && gs(e.doc, e.host, { processId: _.id }) : (Io(_, null), e.doc && e.host && gs(e.doc, e.host, { processId: _.id, lastPluginId: null }));
    (!We.process || We.process.id !== _.id) && (We.process = _);
    const A = kI(We.process);
    Ai(EI, {
      doc: e.doc,
      editCount: e.editCount,
      host: e.host,
      plugins: A,
      nsdoc: e.nsdoc,
      docId: e.docId,
      docName: e.docName,
      docs: e.docs,
      locale: e.locale,
      oscdApi: e.oscdApi
    });
  }
  xe(() => {
    jv({ editCount: e.editCount, doc: e.doc });
  });
  function i(_) {
    We.process = _;
  }
  function a(_) {
    fn.isEditing = !0, We.process = _;
  }
  function s() {
    We.process = null;
  }
  function d() {
    fn.isEditing = !1, We.process = null, V(t, !0);
  }
  function l() {
    fn.isEditing = !1, V(t, !1);
  }
  function c(_) {
    V(t, !1), We.process = _;
  }
  var u = FI(), h = Y(u);
  zv(h, {});
  var f = z(h, 2);
  {
    var v = (_) => {
      TI(_, { handleCancel: l, handleSaved: c });
    }, g = (_) => {
      var b = ie(), A = Y(b);
      {
        var E = (T) => {
          iI(T, { handleBack: s, handleStart: r });
        }, y = (T) => {
          Wp(T, {
            handleView: i,
            handleEdit: a,
            handleStart: r,
            handleAddNew: d,
            get docName() {
              return e.docName;
            }
          });
        };
        te(
          A,
          (T) => {
            We.process ? T(E) : T(y, !1);
          },
          !0
        );
      }
      x(_, b);
    };
    te(f, (_) => {
      o(t) ? _(v) : _(g, !1);
    });
  }
  var m = z(f, 2);
  kp(m, {}), x(n, u), Ie();
}
const uc = "archive-explorer", cc = "0.0.1";
var UI = /* @__PURE__ */ j('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function HI(n, e) {
  _e(e, !0);
  let t = p(e, "dev", 3, !1), r = p(e, "editCount", 3, 0), i = p(e, "plugins", 19, () => []);
  var a = UI(), s = Y(a);
  {
    var d = (u) => {
      NI(u, {
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
    te(s, (u) => {
      (e.doc || t()) && u(d);
    });
  }
  var l = z(s, 2), c = z(l, 2);
  ue(() => {
    Ml(l, uc), Ml(c, cc);
  }), x(n, a), Ie();
}
var Qi;
class WI extends HTMLElement {
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
    this.attachShadow({ mode: "open" }), Of(HI, { target: this.shadowRoot, props: this._props });
    const t = BI();
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
    P_(r);
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
function BI() {
  const n = `${uc}-v${cc}-style`, e = GI(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function GI() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  WI as default
};
