var _c = Object.defineProperty;
var pl = (n) => {
  throw TypeError(n);
};
var Ic = (n, e, t) => e in n ? _c(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var Ri = (n, e, t) => Ic(n, typeof e != "symbol" ? e + "" : e, t), ro = (n, e, t) => e.has(n) || pl("Cannot " + t);
var se = (n, e, t) => (ro(n, e, "read from private field"), t ? t.call(n) : e.get(n)), je = (n, e, t) => e.has(n) ? pl("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(n) : e.set(n, t), we = (n, e, t, r) => (ro(n, e, "write to private field"), r ? r.call(n, t) : e.set(n, t), t), Bt = (n, e, t) => (ro(n, e, "access private method"), t);
const Et = Symbol(), bc = "http://www.w3.org/1999/xhtml", yc = "http://www.w3.org/2000/svg", Cc = "@attach", Iu = !1;
var Ua = Array.isArray, Ac = Array.prototype.indexOf, Wo = Array.from, gs = Object.defineProperty, Vr = Object.getOwnPropertyDescriptor, bu = Object.getOwnPropertyDescriptors, yu = Object.prototype, Ec = Array.prototype, Ms = Object.getPrototypeOf, _l = Object.isExtensible;
function Ni(n) {
  return typeof n == "function";
}
const ve = () => {
};
function Sc(n) {
  return n();
}
function bo(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function Cu() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const Qt = 2, zo = 4, Ps = 8, Zr = 16, xr = 32, Xr = 64, jo = 128, On = 256, ms = 512, Wt = 1024, bn = 2048, Kr = 4096, Wn = 8192, Si = 16384, ks = 32768, Yr = 65536, Il = 1 << 17, Au = 1 << 18, xi = 1 << 19, Eu = 1 << 20, yo = 1 << 21, Fs = 1 << 22, gi = 1 << 23, ir = Symbol("$state"), Su = Symbol("legacy props"), xc = Symbol(""), Ui = new class extends Error {
  constructor() {
    super(...arguments);
    Ri(this, "name", "StaleReactionError");
    Ri(this, "message", "The reaction that called `getAbortSignal()` was re-run or destroyed");
  }
}();
function Zo(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function wc() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Tc(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Dc() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Lc(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Oc() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Rc(n) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Mc() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pc() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function kc() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Fc() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Nc() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Uc() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let Hc = !1;
function xu(n) {
  return n === this.v;
}
function Xo(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function wu(n) {
  return !Xo(n, this.v);
}
let oa = !1, Bc = !1;
function Gc() {
  oa = !0;
}
const Vc = [];
function Ns(n, e = !1, t = !1) {
  return os(n, /* @__PURE__ */ new Map(), "", Vc, null, t);
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
      var u = (
        /** @type {Snapshot<any>} */
        Array(n.length)
      );
      e.set(n, u), i !== null && e.set(i, u);
      for (var l = 0; l < n.length; l += 1) {
        var d = n[l];
        l in n && (u[l] = os(d, e, t, r, null, a));
      }
      return u;
    }
    if (Ms(n) === yu) {
      u = {}, e.set(n, u), i !== null && e.set(i, u);
      for (var c in n)
        u[c] = os(
          // @ts-expect-error
          n[c],
          e,
          t,
          r,
          null,
          a
        );
      return u;
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
let Qe = null;
function $i(n) {
  Qe = n;
}
function be(n) {
  return (
    /** @type {T} */
    Tu().get(n)
  );
}
function le(n, e) {
  return Tu().set(n, e), e;
}
function _e(n, e = !1, t) {
  Qe = {
    p: Qe,
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
    Qe
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var r of t)
      Wu(r);
  }
  return n !== void 0 && (e.x = n), Qe = e.p, n ?? /** @type {T} */
  {};
}
function Ha() {
  return !oa || Qe !== null && Qe.l === null;
}
function Tu(n) {
  return Qe === null && Zo(), Qe.c ?? (Qe.c = new Map(qc(Qe) || void 0));
}
function qc(n) {
  let e = n.p;
  for (; e !== null; ) {
    const t = e.c;
    if (t !== null)
      return t;
    e = e.p;
  }
  return null;
}
let ui = [];
function Du() {
  var n = ui;
  ui = [], bo(n);
}
function Ar(n) {
  if (ui.length === 0 && !xa) {
    var e = ui;
    queueMicrotask(() => {
      e === ui && Du();
    });
  }
  ui.push(n);
}
function Wc() {
  for (; ui.length > 0; )
    Du();
}
const zc = /* @__PURE__ */ new WeakMap();
function Lu(n) {
  var e = Me;
  if (e === null)
    return Re.f |= gi, n;
  if (e.f & ks)
    ea(n, e);
  else {
    if (!(e.f & jo))
      throw !e.parent && n instanceof Error && Ou(n), n;
    e.b.error(n);
  }
}
function ea(n, e) {
  for (; e !== null; ) {
    if (e.f & jo)
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    e = e.parent;
  }
  throw n instanceof Error && Ou(n), n;
}
function Ou(n) {
  const e = zc.get(n);
  e && (gs(n, "message", {
    value: e.message
  }), gs(n, "stack", {
    value: e.stack
  }));
}
const Ja = /* @__PURE__ */ new Set();
let Ye = null, ls = null, Pt = null, Co = /* @__PURE__ */ new Set(), er = [], Us = null, Ao = !1, xa = !1;
var Zi, Xi, di, ka, Ki, Yi, ci, Ji, Fa, Na, Rn, Eo, us, So;
const Ls = class Ls {
  constructor() {
    je(this, Rn);
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
    je(this, Zi, /* @__PURE__ */ new Map());
    /**
     * When the batch is committed (and the DOM is updated), we need to remove old branches
     * and append new ones by calling the functions added inside (if/each/key/etc) blocks
     * @type {Set<() => void>}
     */
    je(this, Xi, /* @__PURE__ */ new Set());
    /**
     * The number of async effects that are currently in flight
     */
    je(this, di, 0);
    /**
     * A deferred that resolves when the batch is committed, used with `settled()`
     * TODO replace with Promise.withResolvers once supported widely enough
     * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
     */
    je(this, ka, null);
    /**
     * Async effects inside a newly-created `<svelte:boundary>`
     * — these do not prevent the batch from committing
     * @type {Effect[]}
     */
    je(this, Ki, []);
    /**
     * Template effects and `$effect.pre` effects, which run when
     * a batch is committed
     * @type {Effect[]}
     */
    je(this, Yi, []);
    /**
     * The same as `#render_effects`, but for `$effect` (which runs after)
     * @type {Effect[]}
     */
    je(this, ci, []);
    /**
     * Block effects, which may need to re-run on subsequent flushes
     * in order to update internal sources (e.g. each block items)
     * @type {Effect[]}
     */
    je(this, Ji, []);
    /**
     * Deferred effects (which run after async work has completed) that are DIRTY
     * @type {Effect[]}
     */
    je(this, Fa, []);
    /**
     * Deferred effects that are MAYBE_DIRTY
     * @type {Effect[]}
     */
    je(this, Na, []);
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
      Bt(this, Rn, Eo).call(this, s);
    if (se(this, di) === 0) {
      var t = Pt;
      Bt(this, Rn, So).call(this);
      var r = se(this, Yi), i = se(this, ci);
      we(this, Yi, []), we(this, ci, []), we(this, Ji, []), ls = this, Ye = null, Pt = t, bl(r), bl(i), ls = null, (a = se(this, ka)) == null || a.resolve();
    } else
      Bt(this, Rn, us).call(this, se(this, Yi)), Bt(this, Rn, us).call(this, se(this, ci)), Bt(this, Rn, us).call(this, se(this, Ji));
    Pt = null;
    for (const s of se(this, Ki))
      La(s);
    we(this, Ki, []);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    se(this, Zi).has(e) || se(this, Zi).set(e, t), this.current.set(e, e.v), Pt == null || Pt.set(e, e.v);
  }
  activate() {
    Ye = this;
  }
  deactivate() {
    Ye = null, Pt = null;
  }
  flush() {
    if (er.length > 0) {
      if (this.activate(), Ru(), Ye !== null && Ye !== this)
        return;
    } else se(this, di) === 0 && Bt(this, Rn, So).call(this);
    this.deactivate();
    for (const e of Co)
      if (Co.delete(e), e(), Ye !== null)
        break;
  }
  increment() {
    we(this, di, se(this, di) + 1);
  }
  decrement() {
    we(this, di, se(this, di) - 1);
    for (const e of se(this, Fa))
      Yt(e, bn), bi(e);
    for (const e of se(this, Na))
      Yt(e, Kr), bi(e);
    this.flush();
  }
  /** @param {() => void} fn */
  add_callback(e) {
    se(this, Xi).add(e);
  }
  settled() {
    return (se(this, ka) ?? we(this, ka, Cu())).promise;
  }
  static ensure() {
    if (Ye === null) {
      const e = Ye = new Ls();
      Ja.add(Ye), xa || Ls.enqueue(() => {
        Ye === e && e.flush();
      });
    }
    return Ye;
  }
  /** @param {() => void} task */
  static enqueue(e) {
    Ar(e);
  }
  apply() {
  }
};
Zi = new WeakMap(), Xi = new WeakMap(), di = new WeakMap(), ka = new WeakMap(), Ki = new WeakMap(), Yi = new WeakMap(), ci = new WeakMap(), Ji = new WeakMap(), Fa = new WeakMap(), Na = new WeakMap(), Rn = new WeakSet(), /**
 * Traverse the effect tree, executing effects or stashing
 * them for later execution as appropriate
 * @param {Effect} root
 */
Eo = function(e) {
  var d;
  e.f ^= Wt;
  for (var t = e.first; t !== null; ) {
    var r = t.f, i = (r & (xr | Xr)) !== 0, a = i && (r & Wt) !== 0, s = a || (r & Wn) !== 0 || this.skipped_effects.has(t);
    if (!s && t.fn !== null) {
      i ? t.f ^= Wt : r & zo ? se(this, ci).push(t) : r & Wt || (r & Fs && ((d = t.b) != null && d.is_pending()) ? se(this, Ki).push(t) : Vs(t) && (t.f & Zr && se(this, Ji).push(t), La(t)));
      var u = t.first;
      if (u !== null) {
        t = u;
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
us = function(e) {
  for (const t of e)
    (t.f & bn ? se(this, Fa) : se(this, Na)).push(t), Yt(t, Wt);
  e.length = 0;
}, /**
 * Append and remove branches to/from the DOM
 */
So = function() {
  var e;
  for (const t of se(this, Xi))
    t();
  if (se(this, Xi).clear(), Ja.size > 1) {
    se(this, Zi).clear();
    let t = !0;
    for (const r of Ja) {
      if (r === this) {
        t = !1;
        continue;
      }
      const i = [];
      for (const [s, u] of this.current) {
        if (r.current.has(s))
          if (t && u !== r.current.get(s))
            r.current.set(s, u);
          else
            continue;
        i.push(s);
      }
      if (i.length === 0)
        continue;
      const a = [...r.current.keys()].filter((s) => !this.current.has(s));
      if (a.length > 0) {
        for (const s of i)
          Mu(s, a);
        if (er.length > 0) {
          Ye = r, r.apply();
          for (const s of er)
            Bt(e = r, Rn, Eo).call(e, s);
          er = [], r.deactivate();
        }
      }
    }
    Ye = null;
  }
  Ja.delete(this);
};
let nr = Ls;
function jc(n) {
  var e = xa;
  xa = !0;
  try {
    for (var t; ; ) {
      if (Wc(), er.length === 0 && (Ye == null || Ye.flush(), er.length === 0))
        return Us = null, /** @type {T} */
        t;
      Ru();
    }
  } finally {
    xa = e;
  }
}
function Ru() {
  var n = Vi;
  Ao = !0;
  try {
    var e = 0;
    for (Al(!0); er.length > 0; ) {
      var t = nr.ensure();
      if (e++ > 1e3) {
        var r, i;
        Zc();
      }
      t.process(er), qr.clear();
    }
  } finally {
    Ao = !1, Al(n), Us = null;
  }
}
function Zc() {
  try {
    Oc();
  } catch (n) {
    ea(n, Us);
  }
}
let _r = null;
function bl(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if (!(r.f & (Si | Wn)) && Vs(r) && (_r = [], La(r), r.deps === null && r.first === null && r.nodes_start === null && (r.teardown === null && r.ac === null ? Xu(r) : r.fn = null), (_r == null ? void 0 : _r.length) > 0)) {
        qr.clear();
        for (const i of _r)
          La(i);
        _r = [];
      }
    }
    _r = null;
  }
}
function Mu(n, e) {
  if (n.reactions !== null)
    for (const t of n.reactions) {
      const r = t.f;
      r & Qt ? Mu(
        /** @type {Derived} */
        t,
        e
      ) : r & (Fs | Zr) && Pu(t, e) && (Yt(t, bn), bi(
        /** @type {Effect} */
        t
      ));
    }
}
function Pu(n, e) {
  if (n.deps !== null) {
    for (const t of n.deps)
      if (e.includes(t) || t.f & Qt && Pu(
        /** @type {Derived} */
        t,
        e
      ))
        return !0;
  }
  return !1;
}
function bi(n) {
  for (var e = Us = n; e.parent !== null; ) {
    e = e.parent;
    var t = e.f;
    if (Ao && e === Me && t & Zr)
      return;
    if (t & (Xr | xr)) {
      if (!(t & Wt)) return;
      e.f ^= Wt;
    }
  }
  er.push(e);
}
function Xc(n) {
  let e = 0, t = yi(0), r;
  return () => {
    ff() && (o(t), Bs(() => (e === 0 && (r = lr(() => n(() => wa(t)))), e += 1, () => {
      Ar(() => {
        e -= 1, e === 0 && (r == null || r(), r = void 0, wa(t));
      });
    })));
  };
}
var Kc = Yr | xi | jo;
function Yc(n, e, t) {
  new Jc(n, e, t);
}
var kn, wn, qo, Jn, fi, Qn, Tn, on, $n, Fr, hi, Nr, vi, Ur, Os, Rs, Jt, Qc, $c, ds, cs, xo;
class Jc {
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(e, t, r) {
    je(this, Jt);
    /** @type {Boundary | null} */
    Ri(this, "parent");
    je(this, kn, !1);
    /** @type {TemplateNode} */
    je(this, wn);
    /** @type {TemplateNode | null} */
    je(this, qo, null);
    /** @type {BoundaryProps} */
    je(this, Jn);
    /** @type {((anchor: Node) => void)} */
    je(this, fi);
    /** @type {Effect} */
    je(this, Qn);
    /** @type {Effect | null} */
    je(this, Tn, null);
    /** @type {Effect | null} */
    je(this, on, null);
    /** @type {Effect | null} */
    je(this, $n, null);
    /** @type {DocumentFragment | null} */
    je(this, Fr, null);
    je(this, hi, 0);
    je(this, Nr, 0);
    je(this, vi, !1);
    /**
     * A source containing the number of pending async deriveds/expressions.
     * Only created if `$effect.pending()` is used inside the boundary,
     * otherwise updating the source results in needless `Batch.ensure()`
     * calls followed by no-op flushes
     * @type {Source<number> | null}
     */
    je(this, Ur, null);
    je(this, Os, () => {
      se(this, Ur) && ta(se(this, Ur), se(this, hi));
    });
    je(this, Rs, Xc(() => (we(this, Ur, yi(se(this, hi))), () => {
      we(this, Ur, null);
    })));
    we(this, wn, e), we(this, Jn, t), we(this, fi, r), this.parent = /** @type {Effect} */
    Me.b, we(this, kn, !!se(this, Jn).pending), we(this, Qn, Tr(() => {
      Me.b = this;
      {
        try {
          we(this, Tn, Vt(() => r(se(this, wn))));
        } catch (i) {
          this.error(i);
        }
        se(this, Nr) > 0 ? Bt(this, Jt, cs).call(this) : we(this, kn, !1);
      }
    }, Kc));
  }
  /**
   * Returns `true` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_pending() {
    return se(this, kn) || !!this.parent && this.parent.is_pending();
  }
  has_pending_snippet() {
    return !!se(this, Jn).pending;
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    Bt(this, Jt, xo).call(this, e), we(this, hi, se(this, hi) + e), Co.add(se(this, Os));
  }
  get_effect_pending() {
    return se(this, Rs).call(this), o(
      /** @type {Source<number>} */
      se(this, Ur)
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = se(this, Jn).onerror;
    let r = se(this, Jn).failed;
    if (se(this, vi) || !t && !r)
      throw e;
    se(this, Tn) && (wt(se(this, Tn)), we(this, Tn, null)), se(this, on) && (wt(se(this, on)), we(this, on, null)), se(this, $n) && (wt(se(this, $n)), we(this, $n, null));
    var i = !1, a = !1;
    const s = () => {
      if (i) {
        Uc();
        return;
      }
      i = !0, a && Fc(), nr.ensure(), we(this, hi, 0), se(this, $n) !== null && Wr(se(this, $n), () => {
        we(this, $n, null);
      }), we(this, kn, this.has_pending_snippet()), we(this, Tn, Bt(this, Jt, ds).call(this, () => (we(this, vi, !1), Vt(() => se(this, fi).call(this, se(this, wn)))))), se(this, Nr) > 0 ? Bt(this, Jt, cs).call(this) : we(this, kn, !1);
    };
    var u = Re;
    try {
      dn(null), a = !0, t == null || t(e, s), a = !1;
    } catch (l) {
      ea(l, se(this, Qn) && se(this, Qn).parent);
    } finally {
      dn(u);
    }
    r && Ar(() => {
      we(this, $n, Bt(this, Jt, ds).call(this, () => {
        we(this, vi, !0);
        try {
          return Vt(() => {
            r(
              se(this, wn),
              () => e,
              () => s
            );
          });
        } catch (l) {
          return ea(
            l,
            /** @type {Effect} */
            se(this, Qn).parent
          ), null;
        } finally {
          we(this, vi, !1);
        }
      }));
    });
  }
}
kn = new WeakMap(), wn = new WeakMap(), qo = new WeakMap(), Jn = new WeakMap(), fi = new WeakMap(), Qn = new WeakMap(), Tn = new WeakMap(), on = new WeakMap(), $n = new WeakMap(), Fr = new WeakMap(), hi = new WeakMap(), Nr = new WeakMap(), vi = new WeakMap(), Ur = new WeakMap(), Os = new WeakMap(), Rs = new WeakMap(), Jt = new WeakSet(), Qc = function() {
  try {
    we(this, Tn, Vt(() => se(this, fi).call(this, se(this, wn))));
  } catch (e) {
    this.error(e);
  }
  we(this, kn, !1);
}, $c = function() {
  const e = se(this, Jn).pending;
  e && (we(this, on, Vt(() => e(se(this, wn)))), nr.enqueue(() => {
    we(this, Tn, Bt(this, Jt, ds).call(this, () => (nr.ensure(), Vt(() => se(this, fi).call(this, se(this, wn)))))), se(this, Nr) > 0 ? Bt(this, Jt, cs).call(this) : (Wr(
      /** @type {Effect} */
      se(this, on),
      () => {
        we(this, on, null);
      }
    ), we(this, kn, !1));
  }));
}, /**
 * @param {() => Effect | null} fn
 */
ds = function(e) {
  var t = Me, r = Re, i = Qe;
  or(se(this, Qn)), dn(se(this, Qn)), $i(se(this, Qn).ctx);
  try {
    return e();
  } catch (a) {
    return Lu(a), null;
  } finally {
    or(t), dn(r), $i(i);
  }
}, cs = function() {
  const e = (
    /** @type {(anchor: Node) => void} */
    se(this, Jn).pending
  );
  se(this, Tn) !== null && (we(this, Fr, document.createDocumentFragment()), ef(se(this, Tn), se(this, Fr))), se(this, on) === null && we(this, on, Vt(() => e(se(this, wn))));
}, /**
 * Updates the pending count associated with the currently visible pending snippet,
 * if any, such that we can replace the snippet with content once work is done
 * @param {1 | -1} d
 */
xo = function(e) {
  var t;
  if (!this.has_pending_snippet()) {
    this.parent && Bt(t = this.parent, Jt, xo).call(t, e);
    return;
  }
  we(this, Nr, se(this, Nr) + e), se(this, Nr) === 0 && (we(this, kn, !1), se(this, on) && Wr(se(this, on), () => {
    we(this, on, null);
  }), se(this, Fr) && (se(this, wn).before(se(this, Fr)), we(this, Fr, null)), Ar(() => {
    nr.ensure().flush();
  }));
};
function ef(n, e) {
  for (var t = n.nodes_start, r = n.nodes_end; t !== null; ) {
    var i = t === r ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ga(t)
    );
    e.append(t), t = i;
  }
}
function ku(n, e, t) {
  const r = Ha() ? Ba : Ko;
  if (e.length === 0) {
    t(n.map(r));
    return;
  }
  var i = Ye, a = (
    /** @type {Effect} */
    Me
  ), s = tf();
  Promise.all(e.map((u) => /* @__PURE__ */ nf(u))).then((u) => {
    s();
    try {
      t([...n.map(r), ...u]);
    } catch (l) {
      a.f & Si || ea(l, a);
    }
    i == null || i.deactivate(), wo();
  }).catch((u) => {
    ea(u, a);
  });
}
function tf() {
  var n = Me, e = Re, t = Qe, r = Ye;
  return function() {
    or(n), dn(e), $i(t), r == null || r.activate();
  };
}
function wo() {
  or(null), dn(null), $i(null);
}
// @__NO_SIDE_EFFECTS__
function Ba(n) {
  var e = Qt | bn, t = Re !== null && Re.f & Qt ? (
    /** @type {Derived} */
    Re
  ) : null;
  return Me === null || t !== null && t.f & On ? e |= On : Me.f |= xi, {
    ctx: Qe,
    deps: null,
    effects: null,
    equals: xu,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      Et
    ),
    wv: 0,
    parent: t ?? Me,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function nf(n, e) {
  let t = (
    /** @type {Effect | null} */
    Me
  );
  t === null && wc();
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
  ), s = !Re, u = /* @__PURE__ */ new Map();
  return gf(() => {
    var f;
    var l = Cu();
    i = l.promise;
    try {
      Promise.resolve(n()).then(l.resolve, l.reject).then(wo);
    } catch (v) {
      l.reject(v), wo();
    }
    var d = (
      /** @type {Batch} */
      Ye
    ), c = r.is_pending();
    s && (r.update_pending_count(1), c || (d.increment(), (f = u.get(d)) == null || f.reject(Ui), u.delete(d), u.set(d, l)));
    const h = (v, g = void 0) => {
      if (c || d.activate(), g)
        g !== Ui && (a.f |= gi, ta(a, g));
      else {
        a.f & gi && (a.f ^= gi), ta(a, v);
        for (const [m, p] of u) {
          if (u.delete(m), m === d) break;
          p.reject(Ui);
        }
      }
      s && (r.update_pending_count(-1), c || d.decrement());
    };
    l.promise.then(h, (v) => h(null, v || "unknown"));
  }), Hs(() => {
    for (const l of u.values())
      l.reject(Ui);
  }), new Promise((l) => {
    function d(c) {
      function h() {
        c === i ? l(a) : d(i);
      }
      c.then(h, h);
    }
    d(i);
  });
}
// @__NO_SIDE_EFFECTS__
function $(n) {
  const e = /* @__PURE__ */ Ba(n);
  return Ju(e), e;
}
// @__NO_SIDE_EFFECTS__
function Ko(n) {
  const e = /* @__PURE__ */ Ba(n);
  return e.equals = wu, e;
}
function Fu(n) {
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
function rf(n) {
  for (var e = n.parent; e !== null; ) {
    if (!(e.f & Qt))
      return (
        /** @type {Effect} */
        e
      );
    e = e.parent;
  }
  return null;
}
function Yo(n) {
  var e, t = Me;
  or(rf(n));
  try {
    Fu(n), e = td(n);
  } finally {
    or(t);
  }
  return e;
}
function Nu(n) {
  var e = Yo(n);
  if (n.equals(e) || (n.v = e, n.wv = $u()), !wi)
    if (Pt !== null)
      Pt.set(n, n.v);
    else {
      var t = (Hr || n.f & On) && n.deps !== null ? Kr : Wt;
      Yt(n, t);
    }
}
const qr = /* @__PURE__ */ new Map();
function yi(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: xu,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function oe(n, e) {
  const t = yi(n);
  return Ju(t), t;
}
// @__NO_SIDE_EFFECTS__
function Uu(n, e = !1, t = !0) {
  var i;
  const r = yi(n);
  return e || (r.equals = wu), oa && t && Qe !== null && Qe.l !== null && ((i = Qe.l).s ?? (i.s = [])).push(r), r;
}
function W(n, e, t = !1) {
  Re !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Un || Re.f & Il) && Ha() && Re.f & (Qt | Zr | Fs | Il) && !(Kt != null && Kt.includes(n)) && kc();
  let r = t ? Ae(e) : e;
  return ta(n, r);
}
function ta(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    wi ? qr.set(n, e) : qr.set(n, t), n.v = e;
    var r = nr.ensure();
    r.capture(n, t), n.f & Qt && (n.f & bn && Yo(
      /** @type {Derived} */
      n
    ), Yt(n, n.f & On ? Kr : Wt)), n.wv = $u(), Hu(n, bn), Ha() && Me !== null && Me.f & Wt && !(Me.f & (xr | Xr)) && (xn === null ? _f([n]) : xn.push(n));
  }
  return e;
}
function wa(n) {
  W(n, n.v + 1);
}
function Hu(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = Ha(), i = t.length, a = 0; a < i; a++) {
      var s = t[a], u = s.f;
      if (!(!r && s === Me)) {
        var l = (u & bn) === 0;
        l && Yt(s, e), u & Qt ? Hu(
          /** @type {Derived} */
          s,
          Kr
        ) : l && (u & Zr && _r !== null && _r.push(
          /** @type {Effect} */
          s
        ), bi(
          /** @type {Effect} */
          s
        ));
      }
    }
}
function Ae(n) {
  if (typeof n != "object" || n === null || ir in n)
    return n;
  const e = Ms(n);
  if (e !== yu && e !== Ec)
    return n;
  var t = /* @__PURE__ */ new Map(), r = Ua(n), i = /* @__PURE__ */ oe(0), a = mi, s = (u) => {
    if (mi === a)
      return u();
    var l = Re, d = mi;
    dn(null), Sl(a);
    var c = u();
    return dn(l), Sl(d), c;
  };
  return r && t.set("length", /* @__PURE__ */ oe(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(u, l, d) {
        (!("value" in d) || d.configurable === !1 || d.enumerable === !1 || d.writable === !1) && Mc();
        var c = t.get(l);
        return c === void 0 ? c = s(() => {
          var h = /* @__PURE__ */ oe(d.value);
          return t.set(l, h), h;
        }) : W(c, d.value, !0), !0;
      },
      deleteProperty(u, l) {
        var d = t.get(l);
        if (d === void 0) {
          if (l in u) {
            const c = s(() => /* @__PURE__ */ oe(Et));
            t.set(l, c), wa(i);
          }
        } else
          W(d, Et), wa(i);
        return !0;
      },
      get(u, l, d) {
        var v;
        if (l === ir)
          return n;
        var c = t.get(l), h = l in u;
        if (c === void 0 && (!h || (v = Vr(u, l)) != null && v.writable) && (c = s(() => {
          var g = Ae(h ? u[l] : Et), m = /* @__PURE__ */ oe(g);
          return m;
        }), t.set(l, c)), c !== void 0) {
          var f = o(c);
          return f === Et ? void 0 : f;
        }
        return Reflect.get(u, l, d);
      },
      getOwnPropertyDescriptor(u, l) {
        var d = Reflect.getOwnPropertyDescriptor(u, l);
        if (d && "value" in d) {
          var c = t.get(l);
          c && (d.value = o(c));
        } else if (d === void 0) {
          var h = t.get(l), f = h == null ? void 0 : h.v;
          if (h !== void 0 && f !== Et)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return d;
      },
      has(u, l) {
        var f;
        if (l === ir)
          return !0;
        var d = t.get(l), c = d !== void 0 && d.v !== Et || Reflect.has(u, l);
        if (d !== void 0 || Me !== null && (!c || (f = Vr(u, l)) != null && f.writable)) {
          d === void 0 && (d = s(() => {
            var v = c ? Ae(u[l]) : Et, g = /* @__PURE__ */ oe(v);
            return g;
          }), t.set(l, d));
          var h = o(d);
          if (h === Et)
            return !1;
        }
        return c;
      },
      set(u, l, d, c) {
        var A;
        var h = t.get(l), f = l in u;
        if (r && l === "length")
          for (var v = d; v < /** @type {Source<number>} */
          h.v; v += 1) {
            var g = t.get(v + "");
            g !== void 0 ? W(g, Et) : v in u && (g = s(() => /* @__PURE__ */ oe(Et)), t.set(v + "", g));
          }
        if (h === void 0)
          (!f || (A = Vr(u, l)) != null && A.writable) && (h = s(() => /* @__PURE__ */ oe(void 0)), W(h, Ae(d)), t.set(l, h));
        else {
          f = h.v !== Et;
          var m = s(() => Ae(d));
          W(h, m);
        }
        var p = Reflect.getOwnPropertyDescriptor(u, l);
        if (p != null && p.set && p.set.call(c, d), !f) {
          if (r && typeof l == "string") {
            var I = (
              /** @type {Source<number>} */
              t.get("length")
            ), E = Number(l);
            Number.isInteger(E) && E >= I.v && W(I, E + 1);
          }
          wa(i);
        }
        return !0;
      },
      ownKeys(u) {
        o(i);
        var l = Reflect.ownKeys(u).filter((h) => {
          var f = t.get(h);
          return f === void 0 || f.v !== Et;
        });
        for (var [d, c] of t)
          c.v !== Et && !(d in u) && l.push(d);
        return l;
      },
      setPrototypeOf() {
        Pc();
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
function af(n, e) {
  return Object.is(yl(n), yl(e));
}
var ps, Jo, Bu, Gu, Vu;
function sf() {
  if (ps === void 0) {
    ps = window, Jo = document, Bu = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Gu = Vr(e, "firstChild").get, Vu = Vr(e, "nextSibling").get, _l(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), _l(t) && (t.__t = void 0);
  }
}
function wr(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function na(n) {
  return Gu.call(n);
}
// @__NO_SIDE_EFFECTS__
function Ga(n) {
  return Vu.call(n);
}
function F(n, e) {
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
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ Ga(t) : t;
  }
}
function j(n, e = 1, t = !1) {
  let r = n;
  for (; e--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Ga(r);
  return r;
}
function of(n) {
  n.textContent = "";
}
function Qo() {
  return !1;
}
function lf(n, e) {
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
  var e = Re, t = Me;
  dn(null), or(null);
  try {
    return n();
  } finally {
    dn(e), or(t);
  }
}
function df(n, e, t, r = t) {
  n.addEventListener(e, () => la(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), uf();
}
function qu(n) {
  Me === null && Re === null && Lc(), Re !== null && Re.f & On && Me === null && Dc(), wi && Tc();
}
function cf(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function zn(n, e, t, r = !0) {
  var i = Me;
  i !== null && i.f & Wn && (n |= Wn);
  var a = {
    ctx: Qe,
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
      La(a), a.f |= ks;
    } catch (l) {
      throw wt(a), l;
    }
  else e !== null && bi(a);
  if (r) {
    var s = a;
    if (t && s.deps === null && s.teardown === null && s.nodes_start === null && s.first === s.last && // either `null`, or a singular child
    !(s.f & xi) && (s = s.first), s !== null && (s.parent = i, i !== null && cf(s, i), Re !== null && Re.f & Qt && !(n & Xr))) {
      var u = (
        /** @type {Derived} */
        Re
      );
      (u.effects ?? (u.effects = [])).push(s);
    }
  }
  return a;
}
function ff() {
  return Re !== null && !Un;
}
function Hs(n) {
  const e = zn(Ps, null, !1);
  return Yt(e, Wt), e.teardown = n, e;
}
function Ee(n) {
  qu();
  var e = (
    /** @type {Effect} */
    Me.f
  ), t = !Re && (e & xr) !== 0 && (e & ks) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      Qe
    );
    (r.e ?? (r.e = [])).push(n);
  } else
    return Wu(n);
}
function Wu(n) {
  return zn(zo | Eu, n, !1);
}
function hf(n) {
  return qu(), zn(Ps | Eu, n, !0);
}
function zu(n) {
  nr.ensure();
  const e = zn(Xr | xi, n, !0);
  return () => {
    wt(e);
  };
}
function vf(n) {
  nr.ensure();
  const e = zn(Xr | xi, n, !0);
  return (t = {}) => new Promise((r) => {
    t.outro ? Wr(e, () => {
      wt(e), r(void 0);
    }) : (wt(e), r(void 0));
  });
}
function ua(n) {
  return zn(zo, n, !1);
}
function gf(n) {
  return zn(Fs | xi, n, !0);
}
function Bs(n, e = 0) {
  return zn(Ps | e, n, !0);
}
function ue(n, e = [], t = []) {
  ku(e, t, (r) => {
    zn(Ps, () => n(...r.map(o)), !0);
  });
}
function Tr(n, e = 0) {
  var t = zn(Zr | e, n, !0);
  return t;
}
function Vt(n, e = !0) {
  return zn(xr | xi, n, !0, e);
}
function ju(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = wi, r = Re;
    El(!0), dn(null);
    try {
      e.call(null);
    } finally {
      El(t), dn(r);
    }
  }
}
function Zu(n, e = !1) {
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
function mf(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    e.f & xr || wt(e), e = t;
  }
}
function wt(n, e = !0) {
  var t = !1;
  (e || n.f & Au) && n.nodes_start !== null && n.nodes_end !== null && (pf(
    n.nodes_start,
    /** @type {TemplateNode} */
    n.nodes_end
  ), t = !0), Zu(n, e && !t), _s(n, 0), Yt(n, Si);
  var r = n.transitions;
  if (r !== null)
    for (const a of r)
      a.stop();
  ju(n);
  var i = n.parent;
  i !== null && i.first !== null && Xu(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes_start = n.nodes_end = n.ac = null;
}
function pf(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : (
      /** @type {TemplateNode} */
      /* @__PURE__ */ Ga(n)
    );
    n.remove(), n = t;
  }
}
function Xu(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function Wr(n, e) {
  var t = [];
  $o(n, t, !0), Ku(t, () => {
    wt(n), e && e();
  });
}
function Ku(n, e) {
  var t = n.length;
  if (t > 0) {
    var r = () => --t || e();
    for (var i of n)
      i.out(r);
  } else
    e();
}
function $o(n, e, t) {
  if (!(n.f & Wn)) {
    if (n.f ^= Wn, n.transitions !== null)
      for (const s of n.transitions)
        (s.is_global || t) && e.push(s);
    for (var r = n.first; r !== null; ) {
      var i = r.next, a = (r.f & Yr) !== 0 || (r.f & xr) !== 0;
      $o(r, e, a ? t : !1), r = i;
    }
  }
}
function Gs(n) {
  Yu(n, !0);
}
function Yu(n, e) {
  if (n.f & Wn) {
    n.f ^= Wn, n.f & Wt || (Yt(n, bn), bi(n));
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & Yr) !== 0 || (t.f & xr) !== 0;
      Yu(t, i ? e : !1), t = r;
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
let Re = null, Un = !1;
function dn(n) {
  Re = n;
}
let Me = null;
function or(n) {
  Me = n;
}
let Kt = null;
function Ju(n) {
  Re !== null && (Kt === null ? Kt = [n] : Kt.push(n));
}
let Zt = null, pn = 0, xn = null;
function _f(n) {
  xn = n;
}
let Qu = 1, Da = 0, mi = Da;
function Sl(n) {
  mi = n;
}
let Hr = !1;
function $u() {
  return ++Qu;
}
function Vs(n) {
  var h;
  var e = n.f;
  if (e & bn)
    return !0;
  if (e & Kr) {
    var t = n.deps, r = (e & On) !== 0;
    if (t !== null) {
      var i, a, s = (e & ms) !== 0, u = r && Me !== null && !Hr, l = t.length;
      if ((s || u) && (Me === null || !(Me.f & Si))) {
        var d = (
          /** @type {Derived} */
          n
        ), c = d.parent;
        for (i = 0; i < l; i++)
          a = t[i], (s || !((h = a == null ? void 0 : a.reactions) != null && h.includes(d))) && (a.reactions ?? (a.reactions = [])).push(d);
        s && (d.f ^= ms), u && c !== null && !(c.f & On) && (d.f ^= On);
      }
      for (i = 0; i < l; i++)
        if (a = t[i], Vs(
          /** @type {Derived} */
          a
        ) && Nu(
          /** @type {Derived} */
          a
        ), a.wv > n.wv)
          return !0;
    }
    (!r || Me !== null && !Hr) && Yt(n, Wt);
  }
  return !1;
}
function ed(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(Kt != null && Kt.includes(n)))
    for (var i = 0; i < r.length; i++) {
      var a = r[i];
      a.f & Qt ? ed(
        /** @type {Derived} */
        a,
        e,
        !1
      ) : e === a && (t ? Yt(a, bn) : a.f & Wt && Yt(a, Kr), bi(
        /** @type {Effect} */
        a
      ));
    }
}
function td(n) {
  var m;
  var e = Zt, t = pn, r = xn, i = Re, a = Hr, s = Kt, u = Qe, l = Un, d = mi, c = n.f;
  Zt = /** @type {null | Value[]} */
  null, pn = 0, xn = null, Hr = (c & On) !== 0 && (Un || !Vi || Re === null), Re = c & (xr | Xr) ? null : n, Kt = null, $i(n.ctx), Un = !1, mi = ++Da, n.ac !== null && (la(() => {
    n.ac.abort(Ui);
  }), n.ac = null);
  try {
    n.f |= yo;
    var h = (
      /** @type {Function} */
      n.fn
    ), f = h(), v = n.deps;
    if (Zt !== null) {
      var g;
      if (_s(n, pn), v !== null && pn > 0)
        for (v.length = pn + Zt.length, g = 0; g < Zt.length; g++)
          v[pn + g] = Zt[g];
      else
        n.deps = v = Zt;
      if (!Hr || // Deriveds that already have reactions can cleanup, so we still add them as reactions
      c & Qt && /** @type {import('#client').Derived} */
      n.reactions !== null)
        for (g = pn; g < v.length; g++)
          ((m = v[g]).reactions ?? (m.reactions = [])).push(n);
    } else v !== null && pn < v.length && (_s(n, pn), v.length = pn);
    if (Ha() && xn !== null && !Un && v !== null && !(n.f & (Qt | Kr | bn)))
      for (g = 0; g < /** @type {Source[]} */
      xn.length; g++)
        ed(
          xn[g],
          /** @type {Effect} */
          n
        );
    return i !== null && i !== n && (Da++, xn !== null && (r === null ? r = xn : r.push(.../** @type {Source[]} */
    xn))), n.f & gi && (n.f ^= gi), f;
  } catch (p) {
    return Lu(p);
  } finally {
    n.f ^= yo, Zt = e, pn = t, xn = r, Re = i, Hr = a, Kt = s, $i(u), Un = l, mi = d;
  }
}
function If(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = Ac.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  t === null && e.f & Qt && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Zt === null || !Zt.includes(e)) && (Yt(e, Kr), e.f & (On | ms) || (e.f ^= ms), Fu(
    /** @type {Derived} **/
    e
  ), _s(
    /** @type {Derived} **/
    e,
    0
  ));
}
function _s(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      If(n, t[r]);
}
function La(n) {
  var e = n.f;
  if (!(e & Si)) {
    Yt(n, Wt);
    var t = Me, r = Vi;
    Me = n, Vi = !0;
    try {
      e & Zr ? mf(n) : Zu(n), ju(n);
      var i = td(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Qu;
      var a;
      Iu && Bc && n.f & bn && n.deps;
    } finally {
      Vi = r, Me = t;
    }
  }
}
async function nd() {
  await Promise.resolve(), jc();
}
function o(n) {
  var e = n.f, t = (e & Qt) !== 0;
  if (Re !== null && !Un) {
    var r = Me !== null && (Me.f & Si) !== 0;
    if (!r && !(Kt != null && Kt.includes(n))) {
      var i = Re.deps;
      if (Re.f & yo)
        n.rv < Da && (n.rv = Da, Zt === null && i !== null && i[pn] === n ? pn++ : Zt === null ? Zt = [n] : (!Hr || !Zt.includes(n)) && Zt.push(n));
      else {
        (Re.deps ?? (Re.deps = [])).push(n);
        var a = n.reactions;
        a === null ? n.reactions = [Re] : a.includes(Re) || a.push(Re);
      }
    }
  } else if (t && /** @type {Derived} */
  n.deps === null && /** @type {Derived} */
  n.effects === null) {
    var s = (
      /** @type {Derived} */
      n
    ), u = s.parent;
    u !== null && !(u.f & On) && (s.f ^= On);
  }
  if (wi) {
    if (qr.has(n))
      return qr.get(n);
    if (t) {
      s = /** @type {Derived} */
      n;
      var l = s.v;
      return (!(s.f & Wt) && s.reactions !== null || rd(s)) && (l = Yo(s)), qr.set(s, l), l;
    }
  } else if (t) {
    if (s = /** @type {Derived} */
    n, Pt != null && Pt.has(s))
      return Pt.get(s);
    Vs(s) && Nu(s);
  }
  if (Pt != null && Pt.has(n))
    return Pt.get(n);
  if (n.f & gi)
    throw n.v;
  return n.v;
}
function rd(n) {
  if (n.v === Et) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (qr.has(e) || e.f & Qt && rd(
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
const bf = -7169;
function Yt(n, e) {
  n.f = n.f & bf | e;
}
function id(n) {
  if (!(typeof n != "object" || !n || n instanceof EventTarget)) {
    if (ir in n)
      To(n);
    else if (!Array.isArray(n))
      for (let e in n) {
        const t = n[e];
        typeof t == "object" && t && ir in t && To(t);
      }
  }
}
function To(n, e = /* @__PURE__ */ new Set()) {
  if (typeof n == "object" && n !== null && // We don't want to traverse DOM elements
  !(n instanceof EventTarget) && !e.has(n)) {
    e.add(n), n instanceof Date && n.getTime();
    for (let r in n)
      try {
        To(n[r], e);
      } catch {
      }
    const t = Ms(n);
    if (t !== Object.prototype && t !== Array.prototype && t !== Map.prototype && t !== Set.prototype && t !== Date.prototype) {
      const r = bu(t);
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
const ad = /* @__PURE__ */ new Set(), Do = /* @__PURE__ */ new Set();
function el(n, e, t, r = {}) {
  function i(a) {
    if (r.capture || Ea.call(e, a), !a.cancelBubble)
      return la(() => t == null ? void 0 : t.call(this, a));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? Ar(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function yf(n, e, t, r = {}) {
  var i = el(e, n, t, r);
  return () => {
    n.removeEventListener(e, i, r);
  };
}
function Xt(n, e, t, r, i) {
  var a = { capture: r, passive: i }, s = el(n, e, t, a);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && Hs(() => {
    e.removeEventListener(n, s, a);
  });
}
function dt(n) {
  for (var e = 0; e < n.length; e++)
    ad.add(n[e]);
  for (var t of Do)
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
  var s = 0, u = xl === n && n.__root;
  if (u) {
    var l = i.indexOf(u);
    if (l !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n.__root = e;
      return;
    }
    var d = i.indexOf(e);
    if (d === -1)
      return;
    l <= d && (s = l);
  }
  if (a = /** @type {Element} */
  i[s] || n.target, a !== e) {
    gs(n, "currentTarget", {
      configurable: !0,
      get() {
        return a || t;
      }
    });
    var c = Re, h = Me;
    dn(null), or(null);
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
      n.__root = e, delete n.currentTarget, dn(c), or(h);
    }
  }
}
function Cf(n) {
  var e;
  e = document.head.appendChild(wr());
  try {
    Tr(() => n(e), Au);
  } finally {
  }
}
function sd(n) {
  var e = document.createElement("template");
  return e.innerHTML = n.replaceAll("<!>", "<!---->"), e.content;
}
function ra(n, e) {
  var t = (
    /** @type {Effect} */
    Me
  );
  t.nodes_start === null && (t.nodes_start = n, t.nodes_end = e);
}
// @__NO_SIDE_EFFECTS__
function Z(n, e) {
  var t = (e & 1) !== 0, r = (e & 2) !== 0, i, a = !n.startsWith("<!>");
  return () => {
    i === void 0 && (i = sd(a ? n : "<!>" + n), t || (i = /** @type {Node} */
    /* @__PURE__ */ na(i)));
    var s = (
      /** @type {TemplateNode} */
      r || Bu ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var u = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ na(s)
      ), l = (
        /** @type {TemplateNode} */
        s.lastChild
      );
      ra(u, l);
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
        sd(i)
      ), u = (
        /** @type {Element} */
        /* @__PURE__ */ na(s)
      );
      a = /** @type {Element} */
      /* @__PURE__ */ na(u);
    }
    var l = (
      /** @type {TemplateNode} */
      a.cloneNode(!0)
    );
    return ra(l, l), l;
  };
}
// @__NO_SIDE_EFFECTS__
function ft(n, e) {
  return /* @__PURE__ */ Af(n, e, "svg");
}
function Ge(n = "") {
  {
    var e = wr(n + "");
    return ra(e, e), e;
  }
}
function ae() {
  var n = document.createDocumentFragment(), e = document.createComment(""), t = wr();
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
let Is = !0;
function wl(n) {
  Is = n;
}
function Le(n, e) {
  var t = e == null ? "" : typeof e == "object" ? e + "" : e;
  t !== (n.__t ?? (n.__t = n.nodeValue)) && (n.__t = t, n.nodeValue = t + "");
}
function Of(n, e) {
  return Rf(n, e);
}
const Mi = /* @__PURE__ */ new Map();
function Rf(n, { target: e, anchor: t, props: r = {}, events: i, context: a, intro: s = !0 }) {
  sf();
  var u = /* @__PURE__ */ new Set(), l = (h) => {
    for (var f = 0; f < h.length; f++) {
      var v = h[f];
      if (!u.has(v)) {
        u.add(v);
        var g = Lf(v);
        e.addEventListener(v, Ea, { passive: g });
        var m = Mi.get(v);
        m === void 0 ? (document.addEventListener(v, Ea, { passive: g }), Mi.set(v, 1)) : Mi.set(v, m + 1);
      }
    }
  };
  l(Wo(ad)), Do.add(l);
  var d = void 0, c = vf(() => {
    var h = t ?? e.appendChild(wr());
    return Yc(
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
            Qe
          );
          v.c = a;
        }
        i && (r.$$events = i), Is = s, d = n(f, r) || {}, Is = !0, a && Ie();
      }
    ), () => {
      var g;
      for (var f of u) {
        e.removeEventListener(f, Ea);
        var v = (
          /** @type {number} */
          Mi.get(f)
        );
        --v === 0 ? (document.removeEventListener(f, Ea), Mi.delete(f)) : Mi.set(f, v);
      }
      Do.delete(l), h !== t && ((g = h.parentNode) == null || g.removeChild(h));
    };
  });
  return Mf.set(d, c), d;
}
let Mf = /* @__PURE__ */ new WeakMap();
function pe(n, e, ...t) {
  var r = n, i = ve, a;
  Tr(() => {
    i !== (i = e()) && (a && (wt(a), a = null), a = Vt(() => (
      /** @type {SnippetFn} */
      i(r, ...t)
    )));
  }, Yr);
}
function et(n) {
  Qe === null && Zo(), oa && Qe.l !== null ? Pf(Qe).m.push(n) : Ee(() => {
    const e = lr(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function Mn(n) {
  Qe === null && Zo(), et(() => () => lr(n));
}
function Pf(n) {
  var e = (
    /** @type {ComponentContextLegacy} */
    n.l
  );
  return e.u ?? (e.u = { a: [], b: [], m: [] });
}
function ne(n, e, t = !1) {
  var r = n, i = null, a = null, s = Et, u = t ? Yr : 0, l = !1;
  const d = (v, g = !0) => {
    l = !0, f(g, v);
  };
  var c = null;
  function h() {
    c !== null && (c.lastChild.remove(), r.before(c), c = null);
    var v = s ? i : a, g = s ? a : i;
    v && Gs(v), g && Wr(g, () => {
      s ? a = null : i = null;
    });
  }
  const f = (v, g) => {
    if (s !== (s = v)) {
      var m = Qo(), p = r;
      if (m && (c = document.createDocumentFragment(), c.append(p = wr())), s ? i ?? (i = g && Vt(() => g(p))) : a ?? (a = g && Vt(() => g(p))), m) {
        var I = (
          /** @type {Batch} */
          Ye
        ), E = s ? i : a, A = s ? a : i;
        E && I.skipped_effects.delete(E), A && I.skipped_effects.add(A), I.add_callback(h);
      } else
        h();
    }
  };
  Tr(() => {
    l = !1, e(d), l || f(null, null);
  }, u);
}
let pi = null;
function Tl(n) {
  pi = n;
}
function Er(n, e) {
  return e;
}
function kf(n, e, t) {
  for (var r = n.items, i = [], a = e.length, s = 0; s < a; s++)
    $o(e[s].e, i, !0);
  var u = a > 0 && i.length === 0 && t !== null;
  if (u) {
    var l = (
      /** @type {Element} */
      /** @type {Element} */
      t.parentNode
    );
    of(l), l.append(
      /** @type {Element} */
      t
    ), r.clear(), Xn(n, e[0].prev, e[a - 1].next);
  }
  Ku(i, () => {
    for (var d = 0; d < a; d++) {
      var c = e[d];
      u || (r.delete(c.k), Xn(n, c.prev, c.next)), wt(c.e, !u);
    }
  });
}
function fn(n, e, t, r, i, a = null) {
  var s = n, u = { flags: e, items: /* @__PURE__ */ new Map(), first: null }, l = (e & 4) !== 0;
  if (l) {
    var d = (
      /** @type {Element} */
      n
    );
    s = d.appendChild(wr());
  }
  var c = null, h = !1, f = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ Ko(() => {
    var I = t();
    return Ua(I) ? I : I == null ? [] : Wo(I);
  }), g, m;
  function p() {
    Ff(
      m,
      g,
      u,
      f,
      s,
      i,
      e,
      r,
      t
    ), a !== null && (g.length === 0 ? c ? Gs(c) : c = Vt(() => a(s)) : c !== null && Wr(c, () => {
      c = null;
    }));
  }
  Tr(() => {
    m ?? (m = /** @type {Effect} */
    Me), g = /** @type {V[]} */
    o(v);
    var I = g.length;
    if (!(h && I === 0)) {
      h = I === 0;
      var E, A, y, T;
      if (Qo()) {
        var C = /* @__PURE__ */ new Set(), S = (
          /** @type {Batch} */
          Ye
        );
        for (A = 0; A < I; A += 1) {
          y = g[A], T = r(y, A);
          var b = u.items.get(T) ?? f.get(T);
          b ? e & 3 && od(b, y, A, e) : (E = ld(
            null,
            u,
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
        for (const [w, L] of u.items)
          C.has(w) || S.skipped_effects.add(L.e);
        S.add_callback(p);
      } else
        p();
      o(v);
    }
  });
}
function Ff(n, e, t, r, i, a, s, u, l) {
  var de, G, ie, ce;
  var d = (s & 8) !== 0, c = (s & 3) !== 0, h = e.length, f = t.items, v = t.first, g = v, m, p = null, I, E = [], A = [], y, T, C, S;
  if (d)
    for (S = 0; S < h; S += 1)
      y = e[S], T = u(y, S), C = f.get(T), C !== void 0 && ((de = C.a) == null || de.measure(), (I ?? (I = /* @__PURE__ */ new Set())).add(C));
  for (S = 0; S < h; S += 1) {
    if (y = e[S], T = u(y, S), C = f.get(T), C === void 0) {
      var b = r.get(T);
      if (b !== void 0) {
        r.delete(T), f.set(T, b);
        var w = p ? p.next : g;
        Xn(t, p, b), Xn(t, b, w), io(b, w, i), p = b;
      } else {
        var L = g ? (
          /** @type {TemplateNode} */
          g.e.nodes_start
        ) : i;
        p = ld(
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
    if (c && od(C, y, S, s), C.e.f & Wn && (Gs(C.e), d && ((G = C.a) == null || G.unfix(), (I ?? (I = /* @__PURE__ */ new Set())).delete(C))), C !== g) {
      if (m !== void 0 && m.has(C)) {
        if (E.length < A.length) {
          var M = A[0], D;
          p = M.prev;
          var O = E[0], J = E[E.length - 1];
          for (D = 0; D < E.length; D += 1)
            io(E[D], M, i);
          for (D = 0; D < A.length; D += 1)
            m.delete(A[D]);
          Xn(t, O.prev, J.next), Xn(t, p, O), Xn(t, J, M), g = M, p = J, S -= 1, E = [], A = [];
        } else
          m.delete(C), io(C, g, i), Xn(t, C.prev, C.next), Xn(t, C, p === null ? t.first : p.next), Xn(t, p, C), p = C;
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
    for (var V = m === void 0 ? [] : Wo(m); g !== null; )
      g.e.f & Wn || V.push(g), g = g.next;
    var U = V.length;
    if (U > 0) {
      var H = s & 4 && h === 0 ? i : null;
      if (d) {
        for (S = 0; S < U; S += 1)
          (ie = V[S].a) == null || ie.measure();
        for (S = 0; S < U; S += 1)
          (ce = V[S].a) == null || ce.fix();
      }
      kf(t, V, H);
    }
  }
  d && Ar(() => {
    var xe;
    if (I !== void 0)
      for (C of I)
        (xe = C.a) == null || xe.apply();
  }), n.first = t.first && t.first.e, n.last = p && p.e;
  for (var Q of r.values())
    wt(Q.e);
  r.clear();
}
function od(n, e, t, r) {
  r & 1 && ta(n.v, e), r & 2 ? ta(
    /** @type {Value<number>} */
    n.i,
    t
  ) : n.i = t;
}
function ld(n, e, t, r, i, a, s, u, l, d, c) {
  var h = pi, f = (l & 1) !== 0, v = (l & 16) === 0, g = f ? v ? /* @__PURE__ */ Uu(i, !1, !1) : yi(i) : i, m = l & 2 ? yi(s) : s, p = {
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
    return p.e = Vt(() => u(
      /** @type {Node} */
      n,
      g,
      m,
      d
    ), Hc), p.e.prev = t && t.e, p.e.next = r && r.e, t === null ? c || (e.first = p) : (t.next = p, t.e.next = p.e), r !== null && (r.prev = p, r.e.prev = p.e), p;
  } finally {
    pi = h;
  }
}
function io(n, e, t) {
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
function da(n, e, t) {
  var r = n, i, a, s = null, u = null;
  function l() {
    a && (Wr(a), a = null), s && (s.lastChild.remove(), r.before(s), s = null), a = u, u = null;
  }
  Tr(() => {
    if (i !== (i = e())) {
      var d = Qo();
      if (i) {
        var c = r;
        d && (s = document.createDocumentFragment(), s.append(c = wr()), a && Ye.skipped_effects.add(a)), u = Vt(() => t(c, i));
      }
      d ? Ye.add_callback(l) : l();
    }
  }, Yr);
}
function Lo(n, e, t, r, i, a) {
  var s, u, l = null, d = (
    /** @type {TemplateNode} */
    n
  ), c, h = pi;
  Tr(() => {
    const f = e() || null;
    var v = f === "svg" ? yc : null;
    if (f !== s) {
      var g = pi;
      Tl(h), c && (f === null ? Wr(c, () => {
        c = null, u = null;
      }) : f === u ? Gs(c) : (wt(c), wl(!1))), f && f !== u && (c = Vt(() => {
        if (l = v ? document.createElementNS(v, f) : document.createElement(f), ra(l, l), r) {
          var m = (
            /** @type {TemplateNode} */
            l.appendChild(wr())
          );
          r(l, m);
        }
        Me.nodes_end = l, d.before(l);
      })), s = f, s && (u = s), wl(!0), Tl(g);
    }
  }, Yr);
}
function De(n, e, t) {
  ua(() => {
    var r = lr(() => e(n, t == null ? void 0 : t()) || {});
    if (t && (r != null && r.update)) {
      var i = !1, a = (
        /** @type {any} */
        {}
      );
      Bs(() => {
        var s = t();
        id(s), i && Xo(a, s) && (a = s, r.update(s));
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
  Tr(() => {
    t !== (t = e()) && (r && (wt(r), r = null), t && (r = Vt(() => {
      ua(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function ud(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = ud(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function Uf() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = ud(n)) && (r && (r += " "), r += e);
  return r;
}
function dd(n) {
  return typeof n == "object" ? Uf(n) : n ?? "";
}
const Dl = [...` 	
\r\f \v\uFEFF`];
function Hf(n, e, t) {
  var r = n == null ? "" : "" + n;
  if (e && (r = r ? r + " " + e : e), t) {
    for (var i in t)
      if (t[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var a = i.length, s = 0; (s = r.indexOf(i, s)) >= 0; ) {
          var u = s + a;
          (s === 0 || Dl.includes(r[s - 1])) && (u === r.length || Dl.includes(r[u])) ? r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1) : s = u;
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
function ao(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function Bf(n, e) {
  if (e) {
    var t = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var a = !1, s = 0, u = !1, l = [];
      r && l.push(...Object.keys(r).map(ao)), i && l.push(...Object.keys(i).map(ao));
      var d = 0, c = -1;
      const m = n.length;
      for (var h = 0; h < m; h++) {
        var f = n[h];
        if (u ? f === "/" && n[h - 1] === "*" && (u = !1) : a ? a === f && (a = !1) : f === "/" && n[h + 1] === "*" ? u = !0 : f === '"' || f === "'" ? a = f : f === "(" ? s++ : f === ")" && s--, !u && a === !1 && s === 0) {
          if (f === ":" && c === -1)
            c = h;
          else if (f === ";" || h === m - 1) {
            if (c !== -1) {
              var v = ao(n.substring(d, c).trim());
              if (!l.includes(v)) {
                f !== ";" && h++;
                var g = n.substring(d, h).trim();
                t += " " + g + ";";
              }
            }
            d = h + 1, c = -1;
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
    var u = Hf(t, r, a);
    u == null ? n.removeAttribute("class") : e ? n.className = u : n.setAttribute("class", u), n.__className = t;
  } else if (a && i !== a)
    for (var l in a) {
      var d = !!a[l];
      (i == null || d !== !!i[l]) && n.classList.toggle(l, d);
    }
  return a;
}
function so(n, e = {}, t, r) {
  for (var i in t) {
    var a = t[i];
    e[i] !== a && (t[i] == null ? n.style.removeProperty(i) : n.style.setProperty(i, a, r));
  }
}
function $e(n, e, t, r) {
  var i = n.__style;
  if (i !== e) {
    var a = Bf(e, r);
    a == null ? n.removeAttribute("style") : n.style.cssText = a, n.__style = e;
  } else r && (Array.isArray(r) ? (so(n, t == null ? void 0 : t[0], r[0]), so(n, t == null ? void 0 : t[1], r[1], "important")) : so(n, t, r));
  return r;
}
function Oo(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!Ua(e))
      return Nc();
    for (var r of n.options)
      r.selected = e.includes(Ol(r));
    return;
  }
  for (r of n.options) {
    var i = Ol(r);
    if (af(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Gf(n) {
  var e = new MutationObserver(() => {
    Oo(n, n.__value);
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
  }), Hs(() => {
    e.disconnect();
  });
}
function Ol(n) {
  return "__value" in n ? n.__value : n.value;
}
const _a = Symbol("class"), Ia = Symbol("style"), cd = Symbol("is custom element"), fd = Symbol("is html");
function Rl(n, e) {
  var t = tl(n);
  t.value === (t.value = // treat null and undefined the same for the initial value
  e ?? void 0) || // @ts-expect-error
  // `progress` elements always need their value set when it's `0`
  n.value === e && (e !== 0 || n.nodeName !== "PROGRESS") || (n.value = e ?? "");
}
function Vf(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function Ct(n, e, t, r) {
  var i = tl(n);
  i[e] !== (i[e] = t) && (e === "loading" && (n[xc] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && hd(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function qf(n, e, t, r, i = !1, a = !1) {
  var s = tl(n), u = s[cd], l = !s[fd], d = e || {}, c = n.tagName === "OPTION";
  for (var h in e)
    h in t || (t[h] = null);
  t.class ? t.class = dd(t.class) : t[_a] && (t.class = null), t[Ia] && (t.style ?? (t.style = null));
  var f = hd(n);
  for (const A in t) {
    let y = t[A];
    if (c && A === "value" && y == null) {
      n.value = n.__value = "", d[A] = y;
      continue;
    }
    if (A === "class") {
      var v = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      Sr(n, v, y, r, e == null ? void 0 : e[_a], t[_a]), d[A] = y, d[_a] = t[_a];
      continue;
    }
    if (A === "style") {
      $e(n, y, e == null ? void 0 : e[Ia], t[Ia]), d[A] = y, d[Ia] = t[Ia];
      continue;
    }
    var g = d[A];
    if (!(y === g && !(y === void 0 && n.hasAttribute(A)))) {
      d[A] = y;
      var m = A[0] + A[1];
      if (m !== "$$")
        if (m === "on") {
          const T = {}, C = "$$" + A;
          let S = A.slice(2);
          var p = xf(S);
          if (Ef(S) && (S = S.slice(0, -7), T.capture = !0), !p && g) {
            if (y != null) continue;
            n.removeEventListener(S, d[C], T), d[C] = null;
          }
          if (y != null)
            if (p)
              n[`__${S}`] = y, dt([S]);
            else {
              let b = function(w) {
                d[A].call(this, w);
              };
              d[C] = el(S, n, b, T);
            }
          else p && (n[`__${S}`] = void 0);
        } else if (A === "style")
          Ct(n, A, y);
        else if (A === "autofocus")
          lf(
            /** @type {HTMLElement} */
            n,
            !!y
          );
        else if (!u && (A === "__value" || A === "value" && y != null))
          n.value = n.__value = y;
        else if (A === "selected" && c)
          Vf(
            /** @type {HTMLOptionElement} */
            n,
            y
          );
        else {
          var I = A;
          l || (I = Tf(I));
          var E = I === "defaultValue" || I === "defaultChecked";
          if (y == null && !u && !E)
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
          else E || f.includes(I) && (u || typeof y != "string") ? (n[I] = y, I in s && (s[I] = Et)) : typeof y != "function" && Ct(n, I, y);
        }
    }
  }
  return d;
}
function Be(n, e, t = [], r = [], i, a = !1, s = !1) {
  ku(t, r, (u) => {
    var l = void 0, d = {}, c = n.nodeName === "SELECT", h = !1;
    if (Tr(() => {
      var v = e(...u.map(o)), g = qf(
        n,
        l,
        v,
        i,
        a,
        s
      );
      h && c && "value" in v && Oo(
        /** @type {HTMLSelectElement} */
        n,
        v.value
      );
      for (let p of Object.getOwnPropertySymbols(d))
        v[p] || wt(d[p]);
      for (let p of Object.getOwnPropertySymbols(v)) {
        var m = v[p];
        p.description === Cc && (!l || m !== l[p]) && (d[p] && wt(d[p]), d[p] = Vt(() => Nf(n, () => m))), g[p] = m;
      }
      l = g;
    }), c) {
      var f = (
        /** @type {HTMLSelectElement} */
        n
      );
      ua(() => {
        Oo(
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
function tl(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ?? (n.__attributes = {
      [cd]: n.nodeName.includes("-"),
      [fd]: n.namespaceURI === bc
    })
  );
}
var Ml = /* @__PURE__ */ new Map();
function hd(n) {
  var e = n.getAttribute("is") || n.nodeName, t = Ml.get(e);
  if (t) return t;
  Ml.set(e, t = []);
  for (var r, i = n, a = Element.prototype; a !== i; ) {
    r = bu(i);
    for (var s in r)
      r[s].set && t.push(s);
    i = Ms(i);
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
function vd() {
  const n = Ir.now();
  Ir.tasks.forEach((e) => {
    e.c(n) || (Ir.tasks.delete(e), e.f());
  }), Ir.tasks.size !== 0 && Ir.tick(vd);
}
function zf(n) {
  let e;
  return Ir.tasks.size === 0 && Ir.tick(vd), {
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
function Pl(n) {
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
function qs(n, e, t) {
  var r = (
    /** @type {EachItem} */
    pi
  ), i, a, s, u = null;
  r.a ?? (r.a = {
    element: n,
    measure() {
      i = this.element.getBoundingClientRect();
    },
    apply() {
      if (s == null || s.abort(), a = this.element.getBoundingClientRect(), i.left !== a.left || i.right !== a.right || i.top !== a.top || i.bottom !== a.bottom) {
        const l = e()(this.element, { from: i, to: a }, t == null ? void 0 : t());
        s = bs(this.element, l, void 0, 1, () => {
          s == null || s.abort(), s = void 0;
        });
      }
    },
    fix() {
      if (!n.getAnimations().length) {
        var { position: l, width: d, height: c } = getComputedStyle(n);
        if (l !== "absolute" && l !== "fixed") {
          var h = (
            /** @type {HTMLElement | SVGElement} */
            n.style
          );
          u = {
            position: h.position,
            width: h.width,
            height: h.height,
            transform: h.transform
          }, h.position = "absolute", h.width = d, h.height = c;
          var f = n.getBoundingClientRect();
          if (i.left !== f.left || i.top !== f.top) {
            var v = `translate(${i.left - f.left}px, ${i.top - f.top}px)`;
            h.transform = h.transform ? `${h.transform} ${v}` : v;
          }
        }
      }
    },
    unfix() {
      if (u) {
        var l = (
          /** @type {HTMLElement | SVGElement} */
          n.style
        );
        l.position = u.position, l.width = u.width, l.height = u.height, l.transform = u.transform;
      }
    }
  }), r.a.element = n;
}
function kl(n, e, t, r) {
  var i = (n & 1) !== 0, a = (n & 2) !== 0, s = i && a, u = (n & 4) !== 0, l = s ? "both" : i ? "in" : "out", d, c = e.inert, h = e.style.overflow, f, v;
  function g() {
    return la(() => d ?? (d = t()(e, (r == null ? void 0 : r()) ?? /** @type {P} */
    {}, {
      direction: l
    })));
  }
  var m = {
    is_global: u,
    in() {
      var A;
      if (e.inert = c, !i) {
        v == null || v.abort(), (A = v == null ? void 0 : v.reset) == null || A.call(v);
        return;
      }
      a || f == null || f.abort(), Qa(e, "introstart"), f = bs(e, g(), v, 1, () => {
        Qa(e, "introend"), f == null || f.abort(), f = d = void 0, e.style.overflow = h;
      });
    },
    out(A) {
      if (!a) {
        A == null || A(), d = void 0;
        return;
      }
      e.inert = !0, Qa(e, "outrostart"), v = bs(e, g(), f, 0, () => {
        Qa(e, "outroend"), A == null || A();
      });
    },
    stop: () => {
      f == null || f.abort(), v == null || v.abort();
    }
  }, p = (
    /** @type {Effect} */
    Me
  );
  if ((p.transitions ?? (p.transitions = [])).push(m), i && Is) {
    var I = u;
    if (!I) {
      for (var E = (
        /** @type {Effect | null} */
        p.parent
      ); E && E.f & Yr; )
        for (; (E = E.parent) && !(E.f & Zr); )
          ;
      I = !E || (E.f & ks) !== 0;
    }
    I && ua(() => {
      lr(() => m.in());
    });
  }
}
function bs(n, e, t, r, i) {
  var a = r === 1;
  if (Ni(e)) {
    var s, u = !1;
    return Ar(() => {
      if (!u) {
        var p = e({ direction: a ? "in" : "out" });
        s = bs(n, p, t, r, i);
      }
    }), {
      abort: () => {
        u = !0, s == null || s.abort();
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
  const { delay: l = 0, css: d, tick: c, easing: h = Zf } = e;
  var f = [];
  if (a && t === void 0 && (c && c(0, 1), d)) {
    var v = Pl(d(0, 1));
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
      if (d)
        for (var T = Math.ceil(E / 16.666666666666668), C = 0; C <= T; C += 1) {
          var S = p + I * h(C / T), b = Pl(d(S, 1 - S));
          A.push(b), y || (y = b.overflow === "hidden");
        }
      y && (n.style.overflow = "hidden"), g = () => {
        var w = (
          /** @type {number} */
          /** @type {globalThis.Animation} */
          m.currentTime
        );
        return p + I * h(w / E);
      }, c && zf(() => {
        if (m.playState !== "running") return !1;
        var w = g();
        return c(w, 1 - w), !0;
      });
    }
    m = n.animate(A, { duration: E, fill: "forwards" }), m.onfinish = () => {
      g = () => r, c == null || c(r, 1 - r), i();
    };
  }, {
    abort: () => {
      m && (m.cancel(), m.effect = null, m.onfinish = ve);
    },
    deactivate: () => {
      i = ve;
    },
    reset: () => {
      r === 0 && (c == null || c(1, 0));
    },
    t: () => g()
  };
}
function Xf(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  df(n, "input", async (i) => {
    var a = i ? n.defaultValue : n.value;
    if (a = oo(n) ? lo(a) : a, t(a), Ye !== null && r.add(Ye), await nd(), a !== (a = e())) {
      var s = n.selectionStart, u = n.selectionEnd, l = n.value.length;
      if (n.value = a ?? "", u !== null) {
        var d = n.value.length;
        s === u && u === l && d > l ? (n.selectionStart = d, n.selectionEnd = d) : (n.selectionStart = s, n.selectionEnd = Math.min(u, d));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  lr(e) == null && n.value && (t(oo(n) ? lo(n.value) : n.value), Ye !== null && r.add(Ye)), Bs(() => {
    var i = e();
    if (n === document.activeElement) {
      var a = (
        /** @type {Batch} */
        ls ?? Ye
      );
      if (r.has(a))
        return;
    }
    oo(n) && i === lo(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function oo(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function lo(n) {
  return n === "" ? null : +n;
}
function Fl(n, e) {
  return n === e || (n == null ? void 0 : n[ir]) === e;
}
function Se(n = {}, e, t, r) {
  return ua(() => {
    var i, a;
    return Bs(() => {
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
function Kf(n = !1) {
  const e = (
    /** @type {ComponentContextLegacy} */
    Qe
  ), t = e.l.u;
  if (!t) return;
  let r = () => id(e.s);
  if (n) {
    let i = 0, a = (
      /** @type {Record<string, any>} */
      {}
    );
    const s = /* @__PURE__ */ Ba(() => {
      let u = !1;
      const l = e.s;
      for (const d in l)
        l[d] !== a[d] && (a[d] = l[d], u = !0);
      return u && i++, i;
    });
    r = () => o(s);
  }
  t.b.length && hf(() => {
    Nl(e, r), bo(t.b);
  }), Ee(() => {
    const i = lr(() => t.m.map(Sc));
    return () => {
      for (const a of i)
        typeof a == "function" && a();
    };
  }), t.a.length && Ee(() => {
    Nl(e, r), bo(t.a);
  });
}
function Nl(n, e) {
  if (n.l.s)
    for (const t of n.l.s) o(t);
  e();
}
function gd(n, e, t) {
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
  function i(u) {
    if (Xo(n, u) && (n = u, t)) {
      const l = !Pi.length;
      for (const d of r)
        d[1](), Pi.push(d, n);
      if (l) {
        for (let d = 0; d < Pi.length; d += 2)
          Pi[d][0](Pi[d + 1]);
        Pi.length = 0;
      }
    }
  }
  function a(u) {
    i(u(
      /** @type {T} */
      n
    ));
  }
  function s(u, l = ve) {
    const d = [u, l];
    return r.add(d), r.size === 1 && (t = e(i, a) || ve), u(
      /** @type {T} */
      n
    ), () => {
      r.delete(d), r.size === 0 && t && (t(), t = null);
    };
  }
  return { set: i, update: a, subscribe: s };
}
function Yf(n) {
  let e;
  return gd(n, (t) => e = t)(), e;
}
let $a = !1, Ro = Symbol();
function Ci(n, e, t) {
  const r = t[e] ?? (t[e] = {
    store: null,
    source: /* @__PURE__ */ Uu(void 0),
    unsubscribe: ve
  });
  if (r.store !== n && !(Ro in t))
    if (r.unsubscribe(), r.store = n ?? null, n == null)
      r.source.v = void 0, r.unsubscribe = ve;
    else {
      var i = !0;
      r.unsubscribe = gd(n, (a) => {
        i ? r.source.v = a : W(r.source, a);
      }), i = !1;
    }
  return n && Ro in t ? Yf(n) : o(r.source);
}
function rr(n, e) {
  return n.set(e), e;
}
function Ti() {
  const n = {};
  function e() {
    Hs(() => {
      for (var t in n)
        n[t].unsubscribe();
      gs(n, Ro, {
        enumerable: !1,
        value: !0
      });
    });
  }
  return [n, e];
}
function Jf(n) {
  var e = $a;
  try {
    return $a = !1, [n(), $a];
  } finally {
    $a = e;
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
function qe(n, e, t) {
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
    if (e === ir || e === Su) return !1;
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
function Je(...n) {
  return new Proxy({ props: n }, $f);
}
function _(n, e, t, r) {
  var A;
  var i = !oa || (t & 2) !== 0, a = (t & 8) !== 0, s = (t & 16) !== 0, u = (
    /** @type {V} */
    r
  ), l = !0, d = () => (l && (l = !1, u = s ? lr(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), u), c;
  if (a) {
    var h = ir in n || Su in n;
    c = ((A = Vr(n, e)) == null ? void 0 : A.set) ?? (h && e in n ? (y) => n[e] = y : void 0);
  }
  var f, v = !1;
  a ? [f, v] = Jf(() => (
    /** @type {V} */
    n[e]
  )) : f = /** @type {V} */
  n[e], f === void 0 && r !== void 0 && (f = d(), c && (i && Rc(), c(f)));
  var g;
  if (i ? g = () => {
    var y = (
      /** @type {V} */
      n[e]
    );
    return y === void 0 ? d() : (l = !0, y);
  } : g = () => {
    var y = (
      /** @type {V} */
      n[e]
    );
    return y !== void 0 && (u = /** @type {V} */
    void 0), y === void 0 ? u : y;
  }, i && !(t & 4))
    return g;
  if (c) {
    var m = n.$$legacy;
    return (
      /** @type {() => V} */
      function(y, T) {
        return arguments.length > 0 ? ((!i || !T || m || v) && c(T ? g() : y), y) : g();
      }
    );
  }
  var p = !1, I = (t & 1 ? Ba : Ko)(() => (p = !1, g()));
  a && o(I);
  var E = (
    /** @type {Effect} */
    Me
  );
  return (
    /** @type {() => V} */
    function(y, T) {
      if (arguments.length > 0) {
        const C = T ? o(I) : i && a ? Ae(y) : y;
        return W(I, C), p = !0, u !== void 0 && (u = C), y;
      }
      return wi && p || E.f & Si ? I.v : o(I);
    }
  );
}
const eh = "5";
var _u;
typeof window < "u" && ((_u = window.__svelte ?? (window.__svelte = {})).v ?? (_u.v = /* @__PURE__ */ new Set())).add(eh);
var Mo = function(n, e) {
  return Mo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
  }, Mo(n, e);
};
function hn(n, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Mo(n, e);
  function t() {
    this.constructor = n;
  }
  n.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var ze = function() {
  return ze = Object.assign || function(e) {
    for (var t, r = 1, i = arguments.length; r < i; r++) {
      t = arguments[r];
      for (var a in t) Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, ze.apply(this, arguments);
};
function th(n, e, t, r) {
  function i(a) {
    return a instanceof t ? a : new t(function(s) {
      s(a);
    });
  }
  return new (t || (t = Promise))(function(a, s) {
    function u(c) {
      try {
        d(r.next(c));
      } catch (h) {
        s(h);
      }
    }
    function l(c) {
      try {
        d(r.throw(c));
      } catch (h) {
        s(h);
      }
    }
    function d(c) {
      c.done ? a(c.value) : i(c.value).then(u, l);
    }
    d((r = r.apply(n, e || [])).next());
  });
}
function nh(n, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, s = Object.create((typeof Iterator == "function" ? Iterator : Object).prototype);
  return s.next = u(0), s.throw = u(1), s.return = u(2), typeof Symbol == "function" && (s[Symbol.iterator] = function() {
    return this;
  }), s;
  function u(d) {
    return function(c) {
      return l([d, c]);
    };
  }
  function l(d) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; s && (s = 0, d[0] && (t = 0)), t; ) try {
      if (r = 1, i && (a = d[0] & 2 ? i.return : d[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, d[1])).done) return a;
      switch (i = 0, a && (d = [d[0] & 2, a.value]), d[0]) {
        case 0:
        case 1:
          a = d;
          break;
        case 4:
          return t.label++, { value: d[1], done: !1 };
        case 5:
          t.label++, i = d[1], d = [0];
          continue;
        case 7:
          d = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (d[0] === 6 || d[0] === 2)) {
            t = 0;
            continue;
          }
          if (d[0] === 3 && (!a || d[1] > a[0] && d[1] < a[3])) {
            t.label = d[1];
            break;
          }
          if (d[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = d;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(d);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      d = e.call(n, t);
    } catch (c) {
      d = [6, c], i = 0;
    } finally {
      r = a = 0;
    }
    if (d[0] & 5) throw d[1];
    return { value: d[0] ? d[1] : void 0, done: !0 };
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
  } catch (u) {
    s = { error: u };
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
const md = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
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
    if (pd(t, e))
      return t;
    t = t.parentElement;
  }
  return null;
}
function pd(n, e) {
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
const Va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  closest: sh,
  estimateScrollWidth: oh,
  matches: pd
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
var uh = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
var dh = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
var ch = {
  NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
}, Hl = {
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
    hn(e, n);
    function e(t) {
      return n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
}, Bl = {
  DEACTIVATION_TIMEOUT_MS: 225,
  FG_DEACTIVATION_MS: 150,
  INITIAL_ORIGIN_SCALE: 0.6,
  PADDING: 10,
  TAP_DELAY_MS: 300
  // Delay between touch and simulated mouse events on touch devices
}, es;
function mh(n, e) {
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
function ph(n, e, t) {
  if (!n)
    return { x: 0, y: 0 };
  var r = e.x, i = e.y, a = r + t.left, s = i + t.top, u, l;
  if (n.type === "touchstart") {
    var d = n;
    u = d.changedTouches[0].pageX - a, l = d.changedTouches[0].pageY - s;
  } else {
    var c = n;
    u = c.pageX - a, l = c.pageY - s;
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
], ts = [], _h = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
            var u = s.value;
            this.adapter.registerInteractionHandler(u, this.activateHandler);
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
            var u = s.value;
            this.adapter.registerDocumentInteractionHandler(u, this.deactivateHandler);
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
      } catch (u) {
        t = { error: u };
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
      } catch (u) {
        t = { error: u };
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
            var u = t !== void 0 && ts.length > 0 && ts.some(function(l) {
              return r.adapter.containsEventTarget(l);
            });
            if (u) {
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
      var t = this, r = e.strings, i = r.VAR_FG_TRANSLATE_START, a = r.VAR_FG_TRANSLATE_END, s = e.cssClasses, u = s.FG_DEACTIVATION, l = s.FG_ACTIVATION, d = e.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var c = "", h = "";
      if (!this.adapter.isUnbounded()) {
        var f = this.getFgTranslationCoordinates(), v = f.startPoint, g = f.endPoint;
        c = v.x + "px, " + v.y + "px", h = g.x + "px, " + g.y + "px";
      }
      this.adapter.updateCssVariable(i, c), this.adapter.updateCssVariable(a, h), clearTimeout(this.activationTimer), clearTimeout(this.fgDeactivationRemovalTimer), this.rmBoundedActivationClasses(), this.adapter.removeClass(u), this.adapter.computeBoundingRect(), this.adapter.addClass(l), this.activationTimer = setTimeout(function() {
        t.activationTimerCallback();
      }, d);
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
      var t = this, r = e.cssClasses.FG_DEACTIVATION, i = this.activationState, a = i.hasDeactivationUXRun, s = i.isActivated, u = a || !s;
      u && this.activationAnimationHasEnded && (this.rmBoundedActivationClasses(), this.adapter.addClass(r), this.fgDeactivationRemovalTimer = setTimeout(function() {
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
        var i = ze({}, r);
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
var uo = {
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
}, ql = {
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
var Wl = ["mousedown", "touchstart"], zl = ["click", "keydown"], Ch = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
        return uo;
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
        for (var s = Bn(Wl), u = s.next(); !u.done; u = s.next()) {
          var l = u.value;
          this.adapter.registerInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          u && !u.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = Bn(zl), c = d.next(); !c.done; c = d.next()) {
          var l = c.value;
          this.adapter.registerTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          c && !c.done && (a = d.return) && a.call(d);
        } finally {
          if (i) throw i.error;
        }
      }
      this.validationObserver = this.adapter.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler), this.setcharacterCounter(this.getValue().length);
    }, e.prototype.destroy = function() {
      var t, r, i, a;
      this.adapter.deregisterInputInteractionHandler("focus", this.inputFocusHandler), this.adapter.deregisterInputInteractionHandler("blur", this.inputBlurHandler), this.adapter.deregisterInputInteractionHandler("input", this.inputInputHandler);
      try {
        for (var s = Bn(Wl), u = s.next(); !u.done; u = s.next()) {
          var l = u.value;
          this.adapter.deregisterInputInteractionHandler(l, this.setPointerXOffset);
        }
      } catch (h) {
        t = { error: h };
      } finally {
        try {
          u && !u.done && (r = s.return) && r.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      try {
        for (var d = Bn(zl), c = d.next(); !c.done; c = d.next()) {
          var l = c.value;
          this.adapter.deregisterTextFieldInteractionHandler(l, this.textFieldInteractionHandler);
        }
      } catch (h) {
        i = { error: h };
      } finally {
        try {
          c && !c.done && (a = d.return) && a.call(d);
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
        a && s ? this.adapter.setInputAttr(uo.ARIA_DESCRIBEDBY, s) : this.adapter.removeInputAttr(uo.ARIA_DESCRIBEDBY);
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
var Ah = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      return n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
var Zl = ["click", "keydown"], Sh = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
        for (var i = Bn(Zl), a = i.next(); !a.done; a = i.next()) {
          var s = a.value;
          this.adapter.registerInteractionHandler(s, this.interactionHandler);
        }
      } catch (u) {
        t = { error: u };
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
      } catch (u) {
        t = { error: u };
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
var co = "mdc-dom-focus-sentinel", xh = (
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
      [].slice.call(this.root.querySelectorAll("." + co)).forEach(function(e) {
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
        var i = r.getAttribute("aria-disabled") === "true" || r.getAttribute("disabled") != null || r.getAttribute("hidden") != null || r.getAttribute("aria-hidden") === "true", a = r.tabIndex >= 0 && r.getBoundingClientRect().width > 0 && !r.classList.contains(co) && !i, s = !1;
        if (a) {
          var u = getComputedStyle(r);
          s = u.display === "none" || u.visibility === "hidden";
        }
        return a && !s;
      });
    }, n.prototype.createSentinel = function() {
      var e = document.createElement("div");
      return e.setAttribute("tabindex", "0"), e.setAttribute("aria-hidden", "true"), e.classList.add(co), e;
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
var Oe = {
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
}, $t = /* @__PURE__ */ new Set();
$t.add(Oe.BACKSPACE);
$t.add(Oe.ENTER);
$t.add(Oe.SPACEBAR);
$t.add(Oe.PAGE_UP);
$t.add(Oe.PAGE_DOWN);
$t.add(Oe.END);
$t.add(Oe.HOME);
$t.add(Oe.ARROW_LEFT);
$t.add(Oe.ARROW_UP);
$t.add(Oe.ARROW_RIGHT);
$t.add(Oe.ARROW_DOWN);
$t.add(Oe.DELETE);
$t.add(Oe.ESCAPE);
$t.add(Oe.TAB);
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
}, en = /* @__PURE__ */ new Map();
en.set(gn.BACKSPACE, Oe.BACKSPACE);
en.set(gn.ENTER, Oe.ENTER);
en.set(gn.SPACEBAR, Oe.SPACEBAR);
en.set(gn.PAGE_UP, Oe.PAGE_UP);
en.set(gn.PAGE_DOWN, Oe.PAGE_DOWN);
en.set(gn.END, Oe.END);
en.set(gn.HOME, Oe.HOME);
en.set(gn.ARROW_LEFT, Oe.ARROW_LEFT);
en.set(gn.ARROW_UP, Oe.ARROW_UP);
en.set(gn.ARROW_RIGHT, Oe.ARROW_RIGHT);
en.set(gn.ARROW_DOWN, Oe.ARROW_DOWN);
en.set(gn.DELETE, Oe.DELETE);
en.set(gn.ESCAPE, Oe.ESCAPE);
en.set(gn.TAB, Oe.TAB);
var Jr = /* @__PURE__ */ new Set();
Jr.add(Oe.PAGE_UP);
Jr.add(Oe.PAGE_DOWN);
Jr.add(Oe.END);
Jr.add(Oe.HOME);
Jr.add(Oe.ARROW_LEFT);
Jr.add(Oe.ARROW_UP);
Jr.add(Oe.ARROW_RIGHT);
Jr.add(Oe.ARROW_DOWN);
function _t(n) {
  var e = n.key;
  if ($t.has(e))
    return e;
  var t = en.get(n.keyCode);
  return t || Oe.UNKNOWN;
}
function Ne(n) {
  return Object.entries(n).filter(([e, t]) => e !== "" && t).map(([e]) => e).join(" ");
}
function We(n, e, t, r = { bubbles: !0 }) {
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
    t in a || (a[t] = /* @__PURE__ */ new Map()), a[t].set(r, yf(e, t, r, i));
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
function re(n, e) {
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
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "on", 3, !1), a = _(e, "component", 3, qa), s = _(e, "tag", 3, "i"), u = /* @__PURE__ */ qe(e, [
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
  const d = /* @__PURE__ */ $(() => s() === "svg" || a() === Lh), c = be("SMUI:icon:context");
  function h() {
    return l.getElement();
  }
  var f = { getElement: h }, v = ae(), g = Y(v);
  {
    let m = /* @__PURE__ */ $(() => Ne({
      "mdc-button__icon": c === "button",
      "mdc-fab__icon": c === "fab",
      "mdc-icon-button__icon": c === "icon-button",
      "mdc-icon-button__icon--on": c === "icon-button" && i(),
      "mdc-tab__icon": c === "tab",
      "mdc-banner__icon": c === "banner",
      "mdc-segmented-button__icon": c === "segmented-button",
      [r()]: !0
    }));
    da(g, a, (p, I) => {
      Se(
        I(p, Je(
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
          () => o(d) ? { focusable: "false", tabindex: "-1" } : {},
          () => u,
          {
            children: (E, A) => {
              var y = ae(), T = Y(y);
              pe(T, () => e.children ?? ve), x(E, y);
            },
            $$slots: { default: !0 }
          }
        )),
        (E) => l = E,
        () => l
      );
    });
  }
  return x(n, v), Ie(f);
}
var Th = /* @__PURE__ */ ft("<svg><!></svg>");
function qa(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "tag", 3, "div"), i = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "tag", "children"]);
  const a = /* @__PURE__ */ $(() => [
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
  function u() {
    return s;
  }
  var l = { getElement: u }, d = ae(), c = Y(d);
  {
    var h = (v) => {
      var g = Th();
      Be(g, () => ({ ...i }));
      var m = F(g);
      pe(m, () => e.children ?? ve), Se(g, (p) => s = p, () => s), De(g, (p, I) => re == null ? void 0 : re(p, I), t), x(v, g);
    }, f = (v) => {
      var g = ae(), m = Y(g);
      {
        var p = (E) => {
          var A = ae(), y = Y(A);
          Lo(y, r, !1, (T, C) => {
            Se(T, (S) => s = S, () => s), De(T, (S, b) => re == null ? void 0 : re(S, b), t), Be(T, () => ({ ...i }));
          }), x(E, A);
        }, I = (E) => {
          var A = ae(), y = Y(A);
          Lo(y, r, !1, (T, C) => {
            Se(T, (w) => s = w, () => s), De(T, (w, L) => re == null ? void 0 : re(w, L), t), Be(T, () => ({ ...i }));
            var S = ae(), b = Y(S);
            pe(b, () => e.children ?? ve), x(C, S);
          }), x(E, A);
        };
        ne(
          m,
          (E) => {
            o(a) ? E(p) : E(I, !1);
          },
          !0
        );
      }
      x(v, g);
    };
    ne(c, (v) => {
      r() === "svg" ? v(h) : v(f, !1);
    });
  }
  return x(n, d), Ie(l);
}
var Dh = /* @__PURE__ */ ft("<svg><!></svg>");
function Lh(n, e) {
  _e(e, !0), console && console.warn && console.warn('The @smui/common Svg component is deprecated. You can use `tag="svg"` now.');
  let t = _(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i;
  function a() {
    return i;
  }
  var s = { getElement: a }, u = Dh();
  Be(u, () => ({ ...r }));
  var l = F(u);
  return pe(l, () => e.children ?? ve), Se(u, (d) => i = d, () => i), De(u, (d, c) => re == null ? void 0 : re(d, c), t), x(n, u), Ie(s);
}
function ns(n, e) {
  _e(e, !0);
  const [t, r] = Ti(), i = ar(e.value);
  le(e.key, i), Ee(() => {
    rr(i, e.value);
  }), Mn(() => {
    i.set(void 0);
  });
  var a = ae(), s = Y(a);
  pe(s, () => e.children ?? ve), x(n, a), Ie(), r();
}
const { applyPassive: Kl } = md, { matches: Oh } = Va;
function Fn(n, { ripple: e = !0, surface: t = !1, unbounded: r = !1, disabled: i = !1, color: a, active: s, rippleElement: u, eventTarget: l, activeTarget: d, addClass: c = (g) => n.classList.add(g), removeClass: h = (g) => n.classList.remove(g), addStyle: f = (g, m) => n.style.setProperty(g, m), initPromise: v = Promise.resolve() } = {}) {
  let g, m = new ca(), p = be("SMUI:addLayoutListener"), I, E = s, A = l, y = d;
  function T() {
    t ? (c("mdc-ripple-surface"), a === "primary" ? (c("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")) : a === "secondary" ? (h("smui-ripple-surface--primary"), c("smui-ripple-surface--secondary")) : (h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary"))) : (h("mdc-ripple-surface"), h("smui-ripple-surface--primary"), h("smui-ripple-surface--secondary")), g && E !== s && (E = s, s ? g.activate() : s === !1 && g.deactivate()), e && !g ? (g = new _h({
      addClass: c,
      browserSupportsCssVars: () => mh(window),
      computeBoundingRect: () => (u || n).getBoundingClientRect(),
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
      isSurfaceActive: () => s ?? Oh(d || n, ":active"),
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
    }), g && (A !== l || y !== d) && (A = l, y = d, g.destroy(), requestAnimationFrame(() => {
      g && (g.init(), g.setUnbounded(r));
    })), !e && r && c("mdc-ripple-upgraded--unbounded");
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
        rippleElement: u,
        eventTarget: l,
        activeTarget: d,
        addClass: c,
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
var Rh = /* @__PURE__ */ Z("<span><!></span>"), Mh = /* @__PURE__ */ Z("<label><!></label>");
function ys(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "style", 3, ""), a = _(e, "floatAbove", 15, !1), s = _(e, "required", 15, !1), u = _(e, "wrapped", 3, !1), l = /* @__PURE__ */ qe(e, [
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
  ]), d, c = /* @__PURE__ */ oe(void 0), h = new ca(), f = Ae({}), v = Ae({}), g = be("SMUI:generic:input:props") ?? {}, m = a();
  Ee(() => {
    o(c) && m !== a() && (m = a(), o(c).float(a()));
  });
  let p = s();
  Ee(() => {
    o(c) && p !== s() && (p = s(), o(c).setRequired(s()));
  });
  const I = be("SMUI:floating-label:mount"), E = be("SMUI:floating-label:unmount");
  et(() => {
    W(
      c,
      new uh({
        addClass: A,
        removeClass: y,
        getWidth: () => {
          var ie, ce;
          const Q = M(), de = Q.cloneNode(!0);
          (ie = Q.parentNode) == null || ie.appendChild(de), de.classList.add("smui-floating-label--remove-transition"), de.classList.add("smui-floating-label--force-size"), de.classList.remove("mdc-floating-label--float-above");
          const G = de.scrollWidth;
          return (ce = Q.parentNode) == null || ce.removeChild(de), G;
        },
        registerInteractionHandler: (Q, de) => h.on(M(), Q, de),
        deregisterInteractionHandler: (Q, de) => h.off(M(), Q, de)
      }),
      !0
    );
    const H = {
      get element() {
        return M();
      },
      addStyle: T,
      removeStyle: C
    };
    return I && I(H), o(c).init(), () => {
      var Q;
      E && E(H), (Q = o(c)) == null || Q.destroy(), h.clear();
    };
  });
  function A(H) {
    f[H] || (f[H] = !0);
  }
  function y(H) {
    (!(H in f) || f[H]) && (f[H] = !1);
  }
  function T(H, Q) {
    v[H] != Q && (Q === "" || Q == null ? delete v[H] : v[H] = Q);
  }
  function C(H) {
    H in v && delete v[H];
  }
  function S(H) {
    var Q;
    (Q = o(c)) == null || Q.shake(H);
  }
  function b(H) {
    a(H);
  }
  function w(H) {
    s(H);
  }
  function L() {
    if (o(c) == null)
      throw new Error("Instance is undefined.");
    return o(c).getWidth();
  }
  function M() {
    return d;
  }
  var D = { shake: S, float: b, setRequired: w, getWidth: L, getElement: M }, O = ae(), J = Y(O);
  {
    var V = (H) => {
      var Q = Rh();
      Be(Q, (G, ie) => ({ class: G, style: ie, ...l }), [
        () => Ne({
          "mdc-floating-label": !0,
          "mdc-floating-label--float-above": a(),
          "mdc-floating-label--required": s(),
          ...f,
          [r()]: !0
        }),
        () => Object.entries(v).map(([G, ie]) => `${G}: ${ie};`).concat([i()]).join(" ")
      ]);
      var de = F(Q);
      pe(de, () => e.children ?? ve), Se(Q, (G) => d = G, () => d), De(Q, (G, ie) => re == null ? void 0 : re(G, ie), t), x(H, Q);
    }, U = (H) => {
      var Q = Mh();
      Be(
        Q,
        (G, ie) => ({
          class: G,
          style: ie,
          for: e.for || (g ? g.id : void 0),
          ...l
        }),
        [
          () => Ne({
            "mdc-floating-label": !0,
            "mdc-floating-label--float-above": a(),
            "mdc-floating-label--required": s(),
            ...f,
            [r()]: !0
          }),
          () => Object.entries(v).map(([G, ie]) => `${G}: ${ie};`).concat([i()]).join(" ")
        ]
      );
      var de = F(Q);
      pe(de, () => e.children ?? ve), Se(Q, (G) => d = G, () => d), De(Q, (G, ie) => re == null ? void 0 : re(G, ie), t), x(H, Q);
    };
    ne(J, (H) => {
      u() ? H(V) : H(U, !1);
    });
  }
  return x(n, O), Ie(D);
}
var Ph = /* @__PURE__ */ Z("<div></div>");
function _d(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "style", 3, ""), a = _(e, "active", 3, !1), s = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "style",
    "active"
  ]), u, l = /* @__PURE__ */ oe(void 0), d = new ca(), c = Ae({}), h = Ae({});
  et(() => (W(
    l,
    new dh({
      addClass: v,
      removeClass: g,
      hasClass: f,
      setStyle: m,
      registerEventHandler: (C, S) => d.on(A(), C, S),
      deregisterEventHandler: (C, S) => d.off(A(), C, S)
    }),
    !0
  ), o(l).init(), () => {
    var C;
    (C = o(l)) == null || C.destroy(), d.clear();
  }));
  function f(C) {
    return C in c ? c[C] : A().classList.contains(C);
  }
  function v(C) {
    c[C] || (c[C] = !0);
  }
  function g(C) {
    (!(C in c) || c[C]) && (c[C] = !1);
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
    return u;
  }
  var y = { activate: p, deactivate: I, setRippleCenter: E, getElement: A }, T = Ph();
  return Be(T, (C, S) => ({ class: C, style: S, ...s }), [
    () => Ne({
      "mdc-line-ripple": !0,
      "mdc-line-ripple--active": a(),
      ...c,
      [r()]: !0
    }),
    () => Object.entries(h).map(([C, S]) => `${C}: ${S};`).concat([i()]).join(" ")
  ]), Se(T, (C) => u = C, () => u), De(T, (C, S) => re == null ? void 0 : re(C, S), t), x(n, T), Ie(y);
}
var kh = /* @__PURE__ */ Z('<div class="mdc-notched-outline__notch"><!></div>'), Fh = /* @__PURE__ */ Z('<div><div class="mdc-notched-outline__leading"></div> <!> <div class="mdc-notched-outline__trailing"></div></div>');
function Id(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "notched", 3, !1), a = _(e, "noLabel", 3, !1), s = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "notched",
    "noLabel",
    "children"
  ]), u, l = /* @__PURE__ */ oe(void 0), d = /* @__PURE__ */ oe(void 0), c = Ae({}), h = Ae({}), f;
  Ee(() => {
    o(d) !== f && (o(d) ? (o(d).addStyle("transition-duration", "0s"), v("mdc-notched-outline--upgraded"), requestAnimationFrame(() => {
      o(d) && o(d).removeStyle("transition-duration");
    })) : g("mdc-notched-outline--upgraded"), f = o(d));
  }), le("SMUI:floating-label:mount", (b) => {
    W(d, b, !0);
  }), le("SMUI:floating-label:unmount", () => {
    W(d, void 0);
  }), et(() => (W(
    l,
    new hh({
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
    c[b] || (c[b] = !0);
  }
  function g(b) {
    (!(b in c) || c[b]) && (c[b] = !1);
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
    return u;
  }
  var y = { notch: I, closeNotch: E, getElement: A }, T = Fh();
  Be(T, (b) => ({ class: b, ...s }), [
    () => Ne({
      "mdc-notched-outline": !0,
      "mdc-notched-outline--notched": i(),
      "mdc-notched-outline--no-label": a(),
      ...c,
      [r()]: !0
    })
  ]);
  var C = j(F(T), 2);
  {
    var S = (b) => {
      var w = kh(), L = F(w);
      pe(L, () => e.children ?? ve), ue((M) => $e(w, M), [
        () => Object.entries(h).map(([M, D]) => `${M}: ${D};`).join(" ")
      ]), x(b, w);
    };
    ne(C, (b) => {
      a() || b(S);
    });
  }
  return Se(T, (b) => u = b, () => u), De(T, (b, w) => re == null ? void 0 : re(b, w), t), x(n, T), Ie(y);
}
function fa(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "component", 3, qa), a = _(e, "tag", 3, "div"), s = _(e, "_smuiClass", 3, ""), u = _(e, "_smuiClassMap", 23, () => ({})), l = _(e, "_smuiContexts", 19, () => ({})), d = _(e, "_smuiProps", 19, () => ({})), c = /* @__PURE__ */ qe(e, [
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
  Object.entries(u()).forEach(([I, E]) => {
    const A = be(E);
    A && "subscribe" in A && f.push(A.subscribe((y) => {
      u()[I] = y;
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
  var g = { getElement: v }, m = ae(), p = Y(m);
  {
    let I = /* @__PURE__ */ $(() => Ne({
      [s()]: !0,
      ...u(),
      [r()]: !0
    }));
    da(p, i, (E, A) => {
      Se(
        A(E, Je(
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
          d,
          () => c,
          {
            children: (y, T) => {
              var C = ae(), S = Y(C);
              pe(S, () => e.children ?? ve), x(y, C);
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
  let t = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    fa(n, Je({ _smuiClass: "mdc-text-field-helper-line", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = ae(), d = Y(l);
        pe(d, () => e.children ?? ve), x(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ie(a);
}
function Uh(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    fa(n, Je(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--prefix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = ae(), d = Y(l);
          pe(d, () => e.children ?? ve), x(s, l);
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
  let t = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    fa(n, Je(
      {
        _smuiClass: "mdc-text-field__affix mdc-text-field__affix--suffix",
        tag: "span"
      },
      () => t,
      {
        children: (s, u) => {
          var l = ae(), d = Y(l);
          pe(d, () => e.children ?? ve), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ie(a);
}
var Bh = /* @__PURE__ */ Z("<input/>");
function Gh(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "type", 3, "text"), a = _(e, "placeholder", 3, " "), s = _(e, "value", 15), u = _(e, "files", 15, null), l = _(e, "dirty", 15, !1), d = _(e, "invalid", 15, !1), c = _(e, "updateInvalid", 3, !0), h = _(e, "initialInvalid", 3, !1), f = _(e, "emptyValueNull", 19, () => s() === null), v = _(e, "emptyValueUndefined", 19, () => s() === void 0), g = /* @__PURE__ */ qe(e, [
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
  ]), m, p = Ae({}), I = Ae({});
  Ee(() => {
    i() === "file" ? delete I.value : I.value = s() == null ? "" : s();
  }), et(() => {
    c() && h() && d(L().matches(":invalid"));
  });
  function E(V) {
    return V === "" ? Number.NaN : +V;
  }
  function A(V) {
    if (i() === "file") {
      u(V.currentTarget.files);
      return;
    }
    if (V.currentTarget.value === "" && f()) {
      s(null);
      return;
    }
    if (V.currentTarget.value === "" && v()) {
      s(void 0);
      return;
    }
    switch (i()) {
      case "number":
      case "range":
        s(E(V.currentTarget.value));
        break;
      default:
        s(V.currentTarget.value);
        break;
    }
  }
  function y(V) {
    (i() === "file" || i() === "range") && A(V), l(!0), c() && d(L().matches(":invalid"));
  }
  function T(V) {
    return V in p ? p[V] ?? null : L().getAttribute(V);
  }
  function C(V, U) {
    p[V] !== U && (p[V] = U);
  }
  function S(V) {
    (!(V in p) || p[V] != null) && (p[V] = void 0);
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
  var M = { getAttr: T, addAttr: C, removeAttr: S, focus: b, blur: w, getElement: L }, D = Bh(), O = (V) => {
    var U;
    i() !== "file" && A(V), (U = e.oninput) == null || U.call(e, V);
  }, J = (V) => {
    var U;
    y(V), (U = e.onchange) == null || U.call(e, V);
  };
  return Be(
    D,
    (V) => ({
      class: V,
      type: i(),
      placeholder: a(),
      ...I,
      ...p,
      ...g,
      oninput: O,
      onchange: J
    }),
    [
      () => Ne({ "mdc-text-field__input": !0, [r()]: !0 })
    ],
    void 0,
    void 0,
    !0
  ), Se(D, (V) => m = V, () => m), De(D, (V, U) => re == null ? void 0 : re(V, U), t), x(n, D), Ie(M);
}
var Vh = /* @__PURE__ */ Z("<textarea></textarea>");
function qh(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "style", 3, ""), a = _(e, "value", 15, ""), s = _(e, "dirty", 15, !1), u = _(e, "invalid", 15, !1), l = _(e, "updateInvalid", 3, !0), d = _(e, "initialInvalid", 3, !1), c = _(e, "resizable", 3, !0), h = /* @__PURE__ */ qe(e, [
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
  ]), f, v = Ae({});
  et(() => {
    l() && d() && u(y().matches(":invalid"));
  });
  function g() {
    s(!0), l() && u(y().matches(":invalid"));
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
  var T = { getAttr: m, addAttr: p, removeAttr: I, focus: E, blur: A, getElement: y }, C = Vh(), S = (b) => {
    var w;
    g(), (w = e.onchange) == null || w.call(e, b);
  };
  return Be(
    C,
    (b) => ({
      class: b,
      style: `${c() ? "" : "resize: none; "}${i()}`,
      ...v,
      ...h,
      onchange: S
    }),
    [
      () => Ne({ "mdc-text-field__input": !0, [r()]: !0 })
    ]
  ), Se(C, (b) => f = b, () => f), De(C, (b, w) => re == null ? void 0 : re(b, w), t), ua(() => Xf(C, a)), x(n, C), Ie(T);
}
var Wh = /* @__PURE__ */ Z('<span class="mdc-text-field__ripple"></span>'), zh = /* @__PURE__ */ Z("<!> <!>", 1), jh = /* @__PURE__ */ Z("<span><!> <!></span>"), Zh = /* @__PURE__ */ Z("<!> <!> <!>", 1), Xh = /* @__PURE__ */ Z("<label><!> <!> <!> <!> <!> <!> <!></label>"), Kh = /* @__PURE__ */ Z("<div><!> <!> <!> <!> <!></div>"), Yh = /* @__PURE__ */ Z("<!> <!>", 1);
function Gn(n, e) {
  _e(e, !0);
  const { applyPassive: t } = md;
  let r = () => {
  };
  function i(k) {
    return k === r;
  }
  let a = _(e, "use", 19, () => []), s = _(e, "class", 3, ""), u = _(e, "style", 3, ""), l = _(e, "ripple", 3, !0), d = _(e, "disabled", 3, !1), c = _(e, "required", 3, !1), h = _(e, "textarea", 3, !1), f = _(e, "variant", 19, () => h() ? "outlined" : "standard"), v = _(e, "noLabel", 3, !1), g = _(e, "type", 3, "text"), m = _(e, "value", 15), p = _(e, "files", 15, r), I = _(e, "invalid", 15, r), E = _(e, "updateInvalid", 19, () => i(I())), A = _(e, "initialInvalid", 3, !1), y = _(e, "dirty", 15, !1), T = _(e, "validateOnValueChange", 19, E), C = _(e, "useNativeValidation", 19, E), S = _(e, "withLeadingIcon", 3, r), b = _(e, "withTrailingIcon", 3, r), w = _(e, "input", 7), L = _(e, "floatingLabel", 7), M = _(e, "lineRipple", 7), D = _(e, "notchedOutline", 7), O = /* @__PURE__ */ qe(e, [
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
  const J = m() !== void 0 || m() === void 0 && e.input$emptyValueUndefined || !i(p());
  i(p()) && p(null), i(I()) && I(!1);
  let V, U = /* @__PURE__ */ oe(void 0), H = new ca(), Q = Ae({}), de = Ae({}), G = /* @__PURE__ */ oe(void 0), ie = /* @__PURE__ */ oe(!1), ce = /* @__PURE__ */ oe(Ae(A())), xe = be("SMUI:addLayoutListener"), me, q, z = new Promise((k) => q = k), P, ee, K, fe;
  const Ce = /* @__PURE__ */ $(() => w() && w().getElement());
  Ee(() => {
    (y() || o(ce) || !E()) && o(U) && o(U).isValid() !== !I() && (E() ? I(!o(U).isValid()) : o(U).setValid(!I()));
  }), Ee(() => {
    o(U) && o(U).getValidateOnValueChange() !== T() && o(U).setValidateOnValueChange(i(T()) ? !1 : T());
  }), Ee(() => {
    o(U) && o(U).setUseNativeValidation(i(C()) ? !0 : C());
  }), Ee(() => {
    o(U) && o(U).setDisabled(d());
  });
  let Ue = m();
  Ee(() => {
    if (o(U) && J && Ue !== m()) {
      Ue = m();
      const k = `${m() == null ? "" : m()}`;
      o(U).getValue() !== k && o(U).setValue(k);
    }
  }), xe && (me = xe(B)), le("SMUI:textfield:leading-icon:mount", (k) => {
    P = k;
  }), le("SMUI:textfield:leading-icon:unmount", () => {
    P = void 0;
  }), le("SMUI:textfield:trailing-icon:mount", (k) => {
    ee = k;
  }), le("SMUI:textfield:trailing-icon:unmount", () => {
    ee = void 0;
  }), le("SMUI:textfield:helper-text:id", (k) => {
    W(G, k, !0);
  }), le("SMUI:textfield:helper-text:mount", (k) => {
    K = k;
  }), le("SMUI:textfield:helper-text:unmount", () => {
    W(G, void 0), K = void 0;
  }), le("SMUI:textfield:character-counter:mount", (k) => {
    fe = k;
  }), le("SMUI:textfield:character-counter:unmount", () => {
    fe = void 0;
  }), et(() => {
    var k;
    if (W(
      U,
      new Ch(
        {
          // getRootAdapterMethods_
          addClass: it,
          removeClass: Pe,
          hasClass: st,
          registerTextFieldInteractionHandler: (te, Te) => H.on(X(), te, Te),
          deregisterTextFieldInteractionHandler: (te, Te) => H.off(X(), te, Te),
          registerValidationAttributeChangeHandler: (te) => {
            const Te = (Ft) => Ft.map((an) => an.attributeName).filter((an) => an), ot = new MutationObserver((Ft) => {
              C() && te(Te(Ft));
            }), mt = { attributes: !0 };
            return w() && ot.observe(w().getElement(), mt), ot;
          },
          deregisterValidationAttributeChangeHandler: (te) => {
            te.disconnect();
          },
          // getInputAdapterMethods_
          getNativeInput: () => {
            var te;
            return ((te = w()) == null ? void 0 : te.getElement()) ?? null;
          },
          setInputAttr: (te, Te) => {
            var ot;
            (ot = w()) == null || ot.addAttr(te, Te);
          },
          removeInputAttr: (te) => {
            var Te;
            (Te = w()) == null || Te.removeAttr(te);
          },
          isFocused: () => {
            var te;
            return document.activeElement === ((te = w()) == null ? void 0 : te.getElement());
          },
          registerInputInteractionHandler: (te, Te) => {
            var mt;
            const ot = (mt = w()) == null ? void 0 : mt.getElement();
            if (ot) {
              const Ft = t();
              H.on(ot, te, Te, typeof Ft == "boolean" ? { capture: Ft } : Ft);
            }
          },
          deregisterInputInteractionHandler: (te, Te) => {
            var mt;
            const ot = (mt = w()) == null ? void 0 : mt.getElement();
            ot && H.off(ot, te, Te);
          },
          // getLabelAdapterMethods_
          floatLabel: (te) => L() && L().float(te),
          getLabelWidth: () => L() ? L().getWidth() : 0,
          hasLabel: () => !!L(),
          shakeLabel: (te) => L() && L().shake(te),
          setLabelRequired: (te) => L() && L().setRequired(te),
          // getLineRippleAdapterMethods_
          activateLineRipple: () => M() && M().activate(),
          deactivateLineRipple: () => M() && M().deactivate(),
          setLineRippleTransformOrigin: (te) => M() && M().setRippleCenter(te),
          // getOutlineAdapterMethods_
          closeOutline: () => D() && D().closeNotch(),
          hasOutline: () => !!D(),
          notchOutline: (te) => D() && D().notch(te)
        },
        {
          get helperText() {
            return K;
          },
          get characterCounter() {
            return fe;
          },
          get leadingIcon() {
            return P;
          },
          get trailingIcon() {
            return ee;
          }
        }
      ),
      !0
    ), J) {
      if (w() == null)
        throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
      (k = o(U)) == null || k.init();
    } else
      nd().then(() => {
        var te;
        if (w() == null)
          throw new Error("SMUI Textfield must be initialized with either a non-undefined initial value or an Input component.");
        (te = o(U)) == null || te.init();
      });
    return q(), () => {
      var te;
      (te = o(U)) == null || te.destroy(), H.clear();
    };
  }), Mn(() => {
    me && me();
  });
  function st(k) {
    return k in Q ? Q[k] ?? null : X().classList.contains(k);
  }
  function it(k) {
    Q[k] || (Q[k] = !0);
  }
  function Pe(k) {
    (!(k in Q) || Q[k]) && (Q[k] = !1);
  }
  function At(k, te) {
    de[k] != te && (te === "" || te == null ? delete de[k] : de[k] = te);
  }
  function tn() {
    var k;
    (k = w()) == null || k.focus();
  }
  function nn() {
    var k;
    (k = w()) == null || k.blur();
  }
  function B() {
    if (o(U)) {
      const k = o(U).shouldFloat;
      o(U).notchOutline(k);
    }
  }
  function X() {
    return V;
  }
  var ye = { focus: tn, blur: nn, layout: B, getElement: X }, Fe = Yh(), rn = Y(Fe);
  {
    var mn = (k) => {
      var te = Xh();
      Be(te, (He, tt, Xe) => ({ class: He, style: tt, for: void 0, ...Xe }), [
        () => Ne({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
          "mdc-text-field--textarea": h(),
          "mdc-text-field--filled": f() === "filled",
          "mdc-text-field--outlined": f() === "outlined",
          "smui-text-field--standard": f() === "standard" && !h(),
          "mdc-text-field--no-label": v() || e.label == null,
          "mdc-text-field--label-floating": o(ie) || m() != null && m() !== "",
          "mdc-text-field--with-leading-icon": i(S()) ? e.leadingIcon : S(),
          "mdc-text-field--with-trailing-icon": i(b()) ? e.trailingIcon : b(),
          "mdc-text-field--with-internal-counter": h() && e.internalCounter,
          "mdc-text-field--invalid": I(),
          ...Q,
          [s()]: !0
        }),
        () => Object.entries(de).map(([He, tt]) => `${He}: ${tt};`).concat([u()]).join(" "),
        () => Oa(O, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = F(te);
      {
        var ot = (He) => {
          var tt = zh(), Xe = Y(tt);
          {
            var Ut = (It) => {
              var Ot = Wh();
              x(It, Ot);
            };
            ne(Xe, (It) => {
              f() === "filled" && It(Ut);
            });
          }
          var Pn = j(Xe, 2);
          {
            var nt = (It) => {
              {
                let Ot = /* @__PURE__ */ $(() => o(ie) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), Ze = /* @__PURE__ */ $(() => ut(O, "label$"));
                Se(
                  ys(It, Je(
                    {
                      get floatAbove() {
                        return o(Ot);
                      },
                      get required() {
                        return c();
                      },
                      wrapped: !0
                    },
                    () => o(Ze),
                    {
                      children: (Rt, dr) => {
                        var yn = ae(), bt = Y(yn);
                        {
                          var Ht = (jt) => {
                          }, Cn = (jt) => {
                            var Qr = ae(), An = Y(Qr);
                            {
                              var Or = (En) => {
                                var cr = Ge();
                                ue(() => Le(cr, e.label)), x(En, cr);
                              }, ha = (En) => {
                                var cr = ae(), jn = Y(cr);
                                pe(jn, () => e.label), x(En, cr);
                              };
                              ne(
                                An,
                                (En) => {
                                  typeof e.label == "string" ? En(Or) : En(ha, !1);
                                },
                                !0
                              );
                            }
                            x(jt, Qr);
                          };
                          ne(bt, (jt) => {
                            e.label == null ? jt(Ht) : jt(Cn, !1);
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
            ne(Pn, (It) => {
              !v() && e.label != null && It(nt);
            });
          }
          x(He, tt);
        };
        ne(Te, (He) => {
          !h() && f() !== "outlined" && He(ot);
        });
      }
      var mt = j(Te, 2);
      {
        var Ft = (He) => {
          {
            let tt = /* @__PURE__ */ $(() => v() || e.label == null), Xe = /* @__PURE__ */ $(() => ut(O, "outline$"));
            Se(
              Id(He, Je(
                {
                  get noLabel() {
                    return o(tt);
                  }
                },
                () => o(Xe),
                {
                  children: (Ut, Pn) => {
                    var nt = ae(), It = Y(nt);
                    {
                      var Ot = (Ze) => {
                        {
                          let Rt = /* @__PURE__ */ $(() => o(ie) || m() != null && m() !== "" && (typeof m() != "number" || !isNaN(m()))), dr = /* @__PURE__ */ $(() => ut(O, "label$"));
                          Se(
                            ys(Ze, Je(
                              {
                                get floatAbove() {
                                  return o(Rt);
                                },
                                get required() {
                                  return c();
                                },
                                wrapped: !0
                              },
                              () => o(dr),
                              {
                                children: (yn, bt) => {
                                  var Ht = ae(), Cn = Y(Ht);
                                  {
                                    var jt = (An) => {
                                    }, Qr = (An) => {
                                      var Or = ae(), ha = Y(Or);
                                      {
                                        var En = (jn) => {
                                          var $r = Ge();
                                          ue(() => Le($r, e.label)), x(jn, $r);
                                        }, cr = (jn) => {
                                          var $r = ae(), eo = Y($r);
                                          pe(eo, () => e.label), x(jn, $r);
                                        };
                                        ne(
                                          ha,
                                          (jn) => {
                                            typeof e.label == "string" ? jn(En) : jn(cr, !1);
                                          },
                                          !0
                                        );
                                      }
                                      x(An, Or);
                                    };
                                    ne(Cn, (An) => {
                                      e.label == null ? An(jt) : An(Qr, !1);
                                    });
                                  }
                                  x(yn, Ht);
                                },
                                $$slots: { default: !0 }
                              }
                            )),
                            (yn) => L(yn),
                            () => L()
                          );
                        }
                      };
                      ne(It, (Ze) => {
                        !v() && e.label != null && Ze(Ot);
                      });
                    }
                    x(Ut, nt);
                  },
                  $$slots: { default: !0 }
                }
              )),
              (Ut) => D(Ut),
              () => D()
            );
          }
        };
        ne(mt, (He) => {
          (h() || f() === "outlined") && He(Ft);
        });
      }
      var an = j(mt, 2);
      ns(an, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (He, tt) => {
          var Xe = ae(), Ut = Y(Xe);
          pe(Ut, () => e.leadingIcon ?? ve), x(He, Xe);
        },
        $$slots: { default: !0 }
      });
      var Di = j(an, 2);
      pe(Di, () => e.children ?? ve);
      var ct = j(Di, 2);
      {
        var Nt = (He) => {
          var tt = jh(), Xe = F(tt);
          {
            let Pn = /* @__PURE__ */ $(() => ut(O, "input$"));
            Se(
              qh(Xe, Je(
                {
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(ce);
                  },
                  get "aria-controls"() {
                    return o(G);
                  },
                  get "aria-describedby"() {
                    return o(G);
                  }
                },
                () => o(Pn),
                {
                  onblur: (nt) => {
                    var It;
                    W(ie, !1), W(ce, !0), We(X(), "blur", nt), (It = e.input$onblur) == null || It.call(e, nt);
                  },
                  onfocus: (nt) => {
                    var It;
                    W(ie, !0), We(X(), "focus", nt), (It = e.input$onfocus) == null || It.call(e, nt);
                  },
                  get value() {
                    return m();
                  },
                  set value(nt) {
                    m(nt);
                  },
                  get dirty() {
                    return y();
                  },
                  set dirty(nt) {
                    y(nt);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(nt) {
                    I(nt);
                  }
                }
              )),
              (nt) => w(nt),
              () => w()
            );
          }
          var Ut = j(Xe, 2);
          pe(Ut, () => e.internalCounter ?? ve), ue((Pn) => Sr(tt, 1, Pn), [
            () => dd(Ne({
              "mdc-text-field__resizer": !("input$resizable" in O) || e.input$resizable
            }))
          ]), x(He, tt);
        }, sn = (He) => {
          var tt = Zh(), Xe = Y(tt);
          {
            var Ut = (Ot) => {
              var Ze = ae(), Rt = Y(Ze);
              {
                var dr = (bt) => {
                  Uh(bt, {
                    children: (Ht, Cn) => {
                      var jt = Ge();
                      ue(() => Le(jt, e.prefix)), x(Ht, jt);
                    },
                    $$slots: { default: !0 }
                  });
                }, yn = (bt) => {
                  var Ht = ae(), Cn = Y(Ht);
                  pe(Cn, () => e.prefix ?? ve), x(bt, Ht);
                };
                ne(Rt, (bt) => {
                  typeof e.prefix == "string" ? bt(dr) : bt(yn, !1);
                });
              }
              x(Ot, Ze);
            };
            ne(Xe, (Ot) => {
              e.prefix != null && Ot(Ut);
            });
          }
          var Pn = j(Xe, 2);
          {
            let Ot = /* @__PURE__ */ $(() => ut(O, "input$"));
            Se(
              Gh(Pn, Je(
                {
                  get type() {
                    return g();
                  },
                  get disabled() {
                    return d();
                  },
                  get required() {
                    return c();
                  },
                  get updateInvalid() {
                    return E();
                  },
                  get initialInvalid() {
                    return o(ce);
                  },
                  get "aria-controls"() {
                    return o(G);
                  },
                  get "aria-describedby"() {
                    return o(G);
                  }
                },
                () => v() && e.label != null && typeof e.label == "string" ? { placeholder: e.label } : {},
                () => o(Ot),
                {
                  onblur: (Ze) => {
                    var Rt;
                    W(ie, !1), W(ce, !0), We(X(), "blur", Ze), (Rt = e.input$onblur) == null || Rt.call(e, Ze);
                  },
                  onfocus: (Ze) => {
                    var Rt;
                    W(ie, !0), We(X(), "focus", Ze), (Rt = e.input$onfocus) == null || Rt.call(e, Ze);
                  },
                  get value() {
                    return m();
                  },
                  set value(Ze) {
                    m(Ze);
                  },
                  get files() {
                    return p();
                  },
                  set files(Ze) {
                    p(Ze);
                  },
                  get dirty() {
                    return y();
                  },
                  set dirty(Ze) {
                    y(Ze);
                  },
                  get invalid() {
                    return I();
                  },
                  set invalid(Ze) {
                    I(Ze);
                  }
                }
              )),
              (Ze) => w(Ze),
              () => w()
            );
          }
          var nt = j(Pn, 2);
          {
            var It = (Ot) => {
              var Ze = ae(), Rt = Y(Ze);
              {
                var dr = (bt) => {
                  Hh(bt, {
                    children: (Ht, Cn) => {
                      var jt = Ge();
                      ue(() => Le(jt, e.suffix)), x(Ht, jt);
                    },
                    $$slots: { default: !0 }
                  });
                }, yn = (bt) => {
                  var Ht = ae(), Cn = Y(Ht);
                  pe(Cn, () => e.suffix ?? ve), x(bt, Ht);
                };
                ne(Rt, (bt) => {
                  typeof e.suffix == "string" ? bt(dr) : bt(yn, !1);
                });
              }
              x(Ot, Ze);
            };
            ne(nt, (Ot) => {
              e.suffix != null && Ot(It);
            });
          }
          x(He, tt);
        };
        ne(ct, (He) => {
          h() && typeof m() == "string" ? He(Nt) : He(sn, !1);
        });
      }
      var Dr = j(ct, 2);
      ns(Dr, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (He, tt) => {
          var Xe = ae(), Ut = Y(Xe);
          pe(Ut, () => e.trailingIcon ?? ve), x(He, Xe);
        },
        $$slots: { default: !0 }
      });
      var Xa = j(Dr, 2);
      {
        var Lr = (He) => {
          {
            let tt = /* @__PURE__ */ $(() => ut(O, "ripple$"));
            Se(_d(He, Je(() => o(tt))), (Xe) => M(Xe), () => M());
          }
        };
        ne(Xa, (He) => {
          !h() && f() !== "outlined" && l() && He(Lr);
        });
      }
      Se(te, (He) => V = He, () => V), De(te, (He, tt) => Fn == null ? void 0 : Fn(He, tt), () => ({
        ripple: !h() && f() === "filled",
        unbounded: !1,
        addClass: it,
        removeClass: Pe,
        addStyle: At,
        eventTarget: o(Ce),
        activeTarget: o(Ce),
        initPromise: z
      })), De(te, (He, tt) => re == null ? void 0 : re(He, tt), a), x(k, te);
    }, ur = (k) => {
      var te = Kh();
      Be(te, (ct, Nt, sn) => ({ class: ct, style: Nt, ...sn }), [
        () => Ne({
          "mdc-text-field": !0,
          "mdc-text-field--disabled": d(),
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
        () => Object.entries(de).map(([ct, Nt]) => `${ct}: ${Nt};`).concat([u()]).join(" "),
        () => Oa(O, ["input$", "label$", "ripple$", "outline$", "helperLine$"])
      ]);
      var Te = F(te);
      {
        var ot = (ct) => {
          var Nt = ae(), sn = Y(Nt);
          pe(sn, () => e.label ?? ve), x(ct, Nt);
        };
        ne(Te, (ct) => {
          typeof e.label != "string" && ct(ot);
        });
      }
      var mt = j(Te, 2);
      ns(mt, {
        key: "SMUI:textfield:icon:leading",
        value: !0,
        children: (ct, Nt) => {
          var sn = ae(), Dr = Y(sn);
          pe(Dr, () => e.leadingIcon ?? ve), x(ct, sn);
        },
        $$slots: { default: !0 }
      });
      var Ft = j(mt, 2);
      pe(Ft, () => e.children ?? ve);
      var an = j(Ft, 2);
      ns(an, {
        key: "SMUI:textfield:icon:leading",
        value: !1,
        children: (ct, Nt) => {
          var sn = ae(), Dr = Y(sn);
          pe(Dr, () => e.trailingIcon ?? ve), x(ct, sn);
        },
        $$slots: { default: !0 }
      });
      var Di = j(an, 2);
      pe(Di, () => e.line ?? ve), Se(te, (ct) => V = ct, () => V), De(te, (ct, Nt) => Fn == null ? void 0 : Fn(ct, Nt), () => ({
        ripple: l(),
        unbounded: !1,
        addClass: it,
        removeClass: Pe,
        addStyle: At
      })), De(te, (ct, Nt) => re == null ? void 0 : re(ct, Nt), a), x(k, te);
    };
    ne(rn, (k) => {
      J ? k(mn) : k(ur, !1);
    });
  }
  var ge = j(rn, 2);
  {
    var N = (k) => {
      {
        let te = /* @__PURE__ */ $(() => ut(O, "helperLine$"));
        Nh(k, Je(() => o(te), {
          children: (Te, ot) => {
            var mt = ae(), Ft = Y(mt);
            pe(Ft, () => e.helper ?? ve), x(Te, mt);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ne(ge, (k) => {
      e.helper && k(N);
    });
  }
  return x(n, Fe), Ie(ye);
}
var Jh = /* @__PURE__ */ Z('<div class="mdc-button__touch"></div>'), Qh = /* @__PURE__ */ Z('<div class="mdc-button__ripple"></div> <!><!>', 1);
function In(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "style", 3, ""), a = _(e, "ripple", 3, !0), s = _(e, "color", 3, "primary"), u = _(e, "variant", 3, "text"), l = _(e, "touch", 3, !1), d = _(e, "action", 3, "close"), c = _(e, "defaultAction", 3, !1), h = _(e, "secondary", 3, !1), f = _(e, "component", 3, qa), v = _(e, "tag", 19, () => e.href == null ? "button" : "a"), g = /* @__PURE__ */ qe(e, [
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
  ]), m, p = Ae({}), I = Ae({}), E = be("SMUI:button:context");
  const A = /* @__PURE__ */ $(() => E === "dialog:action" && d() != null ? { "data-mdc-dialog-action": d() } : { action: d() }), y = /* @__PURE__ */ $(() => E === "dialog:action" && c() ? { "data-mdc-dialog-button-default": "" } : {}), T = /* @__PURE__ */ $(() => E === "banner" ? {} : { secondary: h() });
  let C = e.disabled;
  Ee(() => {
    if (C !== e.disabled) {
      if (m) {
        const V = M();
        "blur" in V && V.blur();
      }
      C = g.disabled;
    }
  }), le("SMUI:label:context", "button"), le("SMUI:icon:context", "button");
  function S(V) {
    p[V] || (p[V] = !0);
  }
  function b(V) {
    (!(V in p) || p[V]) && (p[V] = !1);
  }
  function w(V, U) {
    I[V] != U && (U === "" || U == null ? delete I[V] : I[V] = U);
  }
  function L() {
    E === "banner" && We(M(), h() ? "SMUIBannerButtonSecondaryActionClick" : "SMUIBannerButtonPrimaryActionClick");
  }
  function M() {
    return m.getElement();
  }
  var D = { getElement: M }, O = ae(), J = Y(O);
  {
    let V = /* @__PURE__ */ $(() => [
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
    ]), U = /* @__PURE__ */ $(() => Ne({
      "mdc-button": !0,
      "mdc-button--raised": u() === "raised",
      "mdc-button--unelevated": u() === "unelevated",
      "mdc-button--outlined": u() === "outlined",
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
    })), H = /* @__PURE__ */ $(() => Object.entries(I).map(([Q, de]) => `${Q}: ${de};`).concat([i()]).join(" "));
    da(J, f, (Q, de) => {
      Se(
        de(Q, Je(
          {
            get tag() {
              return v();
            },
            get use() {
              return o(V);
            },
            get class() {
              return o(U);
            },
            get style() {
              return o(H);
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
            onclick: (G) => {
              var ie;
              L(), (ie = e.onclick) == null || ie.call(e, G);
            },
            children: (G, ie) => {
              var ce = Qh(), xe = j(Y(ce), 2);
              pe(xe, () => e.children ?? ve);
              var me = j(xe);
              {
                var q = (z) => {
                  var P = Jh();
                  x(z, P);
                };
                ne(me, (z) => {
                  l() && z(q);
                });
              }
              x(G, ce);
            },
            $$slots: { default: !0 }
          }
        )),
        (G) => m = G,
        () => m
      );
    });
  }
  return x(n, O), Ie(D);
}
var $h = /* @__PURE__ */ Z("<i><!></i>");
function ev(n, e) {
  _e(e, !0);
  const t = () => Ci(g, "$leadingStore", r), [r, i] = Ti();
  let a = _(e, "use", 19, () => []), s = _(e, "class", 3, ""), u = _(e, "tabindex", 19, () => e.role === "button" ? 0 : -1), l = _(e, "disabled", 3, !1), d = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "role",
    "tabindex",
    "disabled",
    "children"
  ]), c, h = /* @__PURE__ */ oe(void 0), f = new ca(), v = Ae({});
  const g = be("SMUI:textfield:icon:leading"), m = t();
  let p = /* @__PURE__ */ oe(void 0);
  const I = /* @__PURE__ */ $(() => ({ role: e.role, tabindex: u() })), E = be("SMUI:textfield:leading-icon:mount"), A = be("SMUI:textfield:leading-icon:unmount"), y = be("SMUI:textfield:trailing-icon:mount"), T = be("SMUI:textfield:trailing-icon:unmount");
  et(() => (W(
    h,
    new Sh({
      getAttr: C,
      setAttr: S,
      removeAttr: b,
      setContent: (U) => {
        W(p, U, !0);
      },
      registerInteractionHandler: (U, H) => f.on(w(), U, H),
      deregisterInteractionHandler: (U, H) => f.off(w(), U, H),
      notifyIconAction: () => We(w(), "SMUITextFieldIcon")
    }),
    !0
  ), m ? E && E(o(h)) : y && y(o(h)), o(h).init(), () => {
    var U;
    o(h) && (m ? A && A(o(h)) : T && T(o(h))), (U = o(h)) == null || U.destroy(), f.clear();
  }));
  function C(U) {
    return U in v ? v[U] ?? null : w().getAttribute(U);
  }
  function S(U, H) {
    v[U] !== H && (v[U] = H);
  }
  function b(U) {
    (!(U in v) || v[U] != null) && (v[U] = void 0);
  }
  function w() {
    return c;
  }
  var L = { getElement: w }, M = $h();
  Be(
    M,
    (U) => ({
      class: U,
      "aria-hidden": u() === -1 ? "true" : "false",
      "aria-disabled": e.role === "button" ? l() ? "true" : "false" : void 0,
      ...o(I),
      ...v,
      ...d
    }),
    [
      () => Ne({
        "mdc-text-field__icon": !0,
        "mdc-text-field__icon--leading": m,
        "mdc-text-field__icon--trailing": !m,
        [s()]: !0
      })
    ]
  );
  var D = F(M);
  {
    var O = (U) => {
      var H = ae(), Q = Y(H);
      pe(Q, () => e.children ?? ve), x(U, H);
    }, J = (U) => {
      var H = Ge();
      ue(() => Le(H, o(p))), x(U, H);
    };
    ne(D, (U) => {
      o(p) == null ? U(O) : U(J, !1);
    });
  }
  Se(M, (U) => c = U, () => c), De(M, (U, H) => re == null ? void 0 : re(U, H), a), x(n, M);
  var V = Ie(L);
  return i(), V;
}
function nl(n, e) {
  _e(e, !0);
  let t = _(e, "placeholder", 3, ""), r = _(e, "label", 3, ""), i = _(e, "icon", 3, ""), a = _(e, "value", 15, ""), s = _(e, "variant", 3, "standard"), u = _(e, "styles", 3, ""), l = _(e, "required", 3, !1), d = _(e, "oninput", 3, () => {
  });
  var c = ae(), h = Y(c);
  {
    var f = (g) => {
      {
        const m = (I) => {
          ev(I, {
            class: "material-icons",
            children: (E, A) => {
              var y = Ge();
              ue(() => Le(y, i())), x(E, y);
            },
            $$slots: { default: !0 }
          });
        };
        let p = /* @__PURE__ */ $(() => `width: 100%; ${u()}`);
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
            return d();
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
          return d();
        },
        get value() {
          return a();
        },
        set value(m) {
          a(m);
        }
      });
    };
    ne(h, (g) => {
      i() ? g(f) : g(v, !1);
    });
  }
  x(n, c), Ie();
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
}, vt;
(function(n) {
  n[n.BOTTOM = 1] = "BOTTOM", n[n.CENTER = 2] = "CENTER", n[n.RIGHT = 4] = "RIGHT", n[n.FLIP_RTL = 8] = "FLIP_RTL";
})(vt || (vt = {}));
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
var Mr, gr, ke = {
  LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
  LIST_ITEM_CLASS: "mdc-list-item",
  LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
  LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
  LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
  LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
  ROOT: "mdc-list"
};
Mr = {}, Mr["" + ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", Mr["" + ke.LIST_ITEM_CLASS] = "mdc-list-item", Mr["" + ke.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", Mr["" + ke.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", Mr["" + ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", Mr["" + ke.ROOT] = "mdc-list";
var ki = (gr = {}, gr["" + ke.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", gr["" + ke.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", gr["" + ke.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", gr["" + ke.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", gr["" + ke.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", gr["" + ke.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", gr["" + ke.ROOT] = "mdc-deprecated-list", gr), Pr = {
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
    .` + ke.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ke.LIST_ITEM_CLASS + ` a,
    .` + ki[ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ki[ke.LIST_ITEM_CLASS] + ` a
  `,
  DEPRECATED_SELECTOR: ".mdc-deprecated-list",
  FOCUSABLE_CHILD_ELEMENTS: `
    .` + ke.LIST_ITEM_CLASS + ` button:not(:disabled),
    .` + ke.LIST_ITEM_CLASS + ` a,
    .` + ke.LIST_ITEM_CLASS + ` input[type="radio"]:not(:disabled),
    .` + ke.LIST_ITEM_CLASS + ` input[type="checkbox"]:not(:disabled),
    .` + ki[ke.LIST_ITEM_CLASS] + ` button:not(:disabled),
    .` + ki[ke.LIST_ITEM_CLASS] + ` a,
    .` + ki[ke.LIST_ITEM_CLASS] + ` input[type="radio"]:not(:disabled),
    .` + ki[ke.LIST_ITEM_CLASS] + ` input[type="checkbox"]:not(:disabled)
  `,
  RADIO_SELECTOR: 'input[type="radio"]',
  SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
}, ht = {
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
    s.sort(function(u, l) {
      return u.index - l.index;
    });
  }), t;
}
function Po(n, e) {
  var t = n.nextChar, r = n.focusItemAtIndex, i = n.sortedIndexByFirstChar, a = n.focusedItemIndex, s = n.skipFocus, u = n.isItemAtIndexDisabled;
  clearTimeout(e.bufferClearTimeout), e.bufferClearTimeout = setTimeout(function() {
    yd(e);
  }, ht.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS), e.typeaheadBuffer = e.typeaheadBuffer + t;
  var l;
  return e.typeaheadBuffer.length === 1 ? l = sv(i, a, u, e) : l = ov(i, u, e), l !== -1 && !s && r(l), l;
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
  var u = -1, l;
  for (l = 0; l < a.length; l++)
    if (!t(a[l].index)) {
      u = l;
      break;
    }
  for (; l < a.length; l++)
    if (a[l].index > e && !t(a[l].index)) {
      u = l;
      break;
    }
  return u !== -1 ? (r.sortedIndexCursor = u, a[r.sortedIndexCursor].index) : -1;
}
function ov(n, e, t) {
  var r = t.typeaheadBuffer[0], i = n.get(r);
  if (!i)
    return -1;
  var a = i[t.sortedIndexCursor];
  if (a.text.lastIndexOf(t.typeaheadBuffer, 0) === 0 && !e(a.index))
    return a.index;
  for (var s = (t.sortedIndexCursor + 1) % i.length, u = -1; s !== t.sortedIndexCursor; ) {
    var l = i[s], d = l.text.lastIndexOf(t.typeaheadBuffer, 0) === 0, c = !e(l.index);
    if (d && c) {
      u = s;
      break;
    }
    s = (s + 1) % i.length;
  }
  return u !== -1 ? (t.sortedIndexCursor = u, i[t.sortedIndexCursor].index) : -1;
}
function bd(n) {
  return n.typeaheadBuffer.length > 0;
}
function yd(n) {
  n.typeaheadBuffer = "";
}
function Yl(n, e) {
  var t = n.event, r = n.isTargetListItem, i = n.focusedItemIndex, a = n.focusItemAtIndex, s = n.sortedIndexByFirstChar, u = n.isItemAtIndexDisabled, l = _t(t) === "ArrowLeft", d = _t(t) === "ArrowUp", c = _t(t) === "ArrowRight", h = _t(t) === "ArrowDown", f = _t(t) === "Home", v = _t(t) === "End", g = _t(t) === "Enter", m = _t(t) === "Spacebar";
  if (t.altKey || t.ctrlKey || t.metaKey || l || d || c || h || f || v || g)
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
      isItemAtIndexDisabled: u
    };
    return Po(I, e);
  }
  if (!m)
    return -1;
  r && Sn(t);
  var E = r && bd(e);
  if (E) {
    var I = {
      focusItemAtIndex: a,
      focusedItemIndex: i,
      nextChar: " ",
      sortedIndexByFirstChar: s,
      skipFocus: !1,
      isItemAtIndexDisabled: u
    };
    return Po(I, e);
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
var dv = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return r.wrapFocus = !1, r.isVertical = !0, r.isSingleSelectionList = !1, r.areDisabledItemsFocusable = !0, r.selectedIndex = ht.UNSET_INDEX, r.focusedItemIndex = ht.UNSET_INDEX, r.useActivatedClass = !1, r.useSelectedAttr = !1, r.ariaCurrentAttrValue = null, r.isCheckboxList = !1, r.isRadioList = !1, r.lastSelectedIndex = null, r.hasTypeahead = !1, r.typeaheadState = iv(), r.sortedIndexByFirstChar = /* @__PURE__ */ new Map(), r;
    }
    return Object.defineProperty(e, "strings", {
      get: function() {
        return Pr;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "cssClasses", {
      get: function() {
        return ke;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e, "numbers", {
      get: function() {
        return ht;
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
      if (t !== ht.UNSET_INDEX) {
        var r = this.adapter.listItemAtIndexHasClass(t, ke.LIST_ITEM_ACTIVATED_CLASS);
        r && this.setUseActivatedClass(!0), this.isSingleSelectionList = !0, this.selectedIndex = t;
      }
    }, e.prototype.getSelectedIndexFromDOM = function() {
      for (var t = ht.UNSET_INDEX, r = this.adapter.getListItemCount(), i = 0; i < r; i++) {
        var a = this.adapter.listItemAtIndexHasClass(i, ke.LIST_ITEM_SELECTED_CLASS), s = this.adapter.listItemAtIndexHasClass(i, ke.LIST_ITEM_ACTIVATED_CLASS);
        if (a || s) {
          t = i;
          break;
        }
      }
      return t;
    }, e.prototype.setHasTypeahead = function(t) {
      this.hasTypeahead = t, t && (this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex());
    }, e.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && bd(this.typeaheadState);
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
      return this.adapter.listItemAtIndexHasClass(t, ke.LIST_ITEM_DISABLED_CLASS);
    }, e.prototype.handleKeydown = function(t, r, i) {
      var a = this, s, u = _t(t) === "ArrowLeft", l = _t(t) === "ArrowUp", d = _t(t) === "ArrowRight", c = _t(t) === "ArrowDown", h = _t(t) === "Home", f = _t(t) === "End", v = _t(t) === "Enter", g = _t(t) === "Spacebar", m = this.isVertical && c || !this.isVertical && d, p = this.isVertical && l || !this.isVertical && u, I = t.key === "A" || t.key === "a", E = Jl(t);
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
          t.preventDefault(), this.checkboxListToggleAll(this.selectedIndex === ht.UNSET_INDEX ? [] : this.selectedIndex, !0);
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
      t !== ht.UNSET_INDEX && (this.isIndexDisabled(t) || (s([]) ? (this.isSelectableList() && this.setSelectedIndexOnAction(t, r), this.adapter.notifyAction(t)) : this.isCheckboxList && s(["Shift"]) && (this.toggleCheckboxRange((a = this.lastSelectedIndex) !== null && a !== void 0 ? a : t, t, t), this.adapter.notifyAction(t))));
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
      this.isIndexValid(t, !1) && (r ? (this.adapter.removeClassForElementIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Pr.ARIA_DISABLED, "false")) : (this.adapter.addClassForElementIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.setAttributeForElementIndex(t, Pr.ARIA_DISABLED, "true")));
    }, e.prototype.setSingleSelectionAtIndex = function(t, r) {
      if (r === void 0 && (r = {}), !(this.selectedIndex === t && !r.forceUpdate)) {
        var i = ke.LIST_ITEM_SELECTED_CLASS;
        this.useActivatedClass && (i = ke.LIST_ITEM_ACTIVATED_CLASS), this.selectedIndex !== ht.UNSET_INDEX && this.adapter.removeClassForElementIndex(this.selectedIndex, i), this.setAriaForSingleSelectionAtIndex(t), this.setTabindexAtIndex(t), t !== ht.UNSET_INDEX && this.adapter.addClassForElementIndex(t, i), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]);
      }
    }, e.prototype.setAriaForSingleSelectionAtIndex = function(t) {
      this.selectedIndex === ht.UNSET_INDEX && (this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(t, Pr.ARIA_CURRENT));
      var r = this.ariaCurrentAttrValue !== null, i = r ? Pr.ARIA_CURRENT : Pr.ARIA_SELECTED;
      if (this.selectedIndex !== ht.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), t !== ht.UNSET_INDEX) {
        var a = r ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(t, i, a);
      }
    }, e.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? Pr.ARIA_SELECTED : Pr.ARIA_CHECKED;
    }, e.prototype.setRadioAtIndex = function(t, r) {
      r === void 0 && (r = {});
      var i = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(t, !0), !(this.selectedIndex === t && !r.forceUpdate) && (this.selectedIndex !== ht.UNSET_INDEX && this.adapter.setAttributeForElementIndex(this.selectedIndex, i, "false"), this.adapter.setAttributeForElementIndex(t, i, "true"), this.selectedIndex = t, r.isUserInteraction && !r.forceUpdate && this.adapter.notifySelectionChange([t]));
    }, e.prototype.setCheckboxAtIndex = function(t, r) {
      r === void 0 && (r = {});
      for (var i = this.selectedIndex, a = r.isUserInteraction ? new Set(i === ht.UNSET_INDEX ? [] : i) : null, s = this.getSelectionAttribute(), u = [], l = 0; l < this.adapter.getListItemCount(); l++) {
        var d = a == null ? void 0 : a.has(l), c = t.indexOf(l) >= 0;
        c !== d && u.push(l), this.adapter.setCheckedCheckboxOrRadioAtIndex(l, c), this.adapter.setAttributeForElementIndex(l, s, c ? "true" : "false");
      }
      this.selectedIndex = t, r.isUserInteraction && u.length && this.adapter.notifySelectionChange(u);
    }, e.prototype.toggleCheckboxRange = function(t, r, i) {
      this.lastSelectedIndex = i;
      for (var a = new Set(this.selectedIndex === ht.UNSET_INDEX ? [] : this.selectedIndex), s = !(a != null && a.has(i)), u = Ul([t, r].sort(), 2), l = u[0], d = u[1], c = this.getSelectionAttribute(), h = [], f = l; f <= d; f++)
        if (!this.isIndexDisabled(f)) {
          var v = a.has(f);
          s !== v && (h.push(f), this.adapter.setCheckedCheckboxOrRadioAtIndex(f, s), this.adapter.setAttributeForElementIndex(f, c, "" + s), s ? a.add(f) : a.delete(f));
        }
      h.length && (this.selectedIndex = rh([], Ul(a)), this.adapter.notifySelectionChange(h));
    }, e.prototype.setTabindexAtIndex = function(t) {
      this.focusedItemIndex === ht.UNSET_INDEX && t !== 0 ? this.adapter.setAttributeForElementIndex(0, "tabindex", "-1") : this.focusedItemIndex >= 0 && this.focusedItemIndex !== t && this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1"), !(this.selectedIndex instanceof Array) && this.selectedIndex !== t && this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1"), t !== ht.UNSET_INDEX && this.adapter.setAttributeForElementIndex(t, "tabindex", "0");
    }, e.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    }, e.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var t = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(t);
    }, e.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      return this.isSelectableList() ? typeof this.selectedIndex == "number" && this.selectedIndex !== ht.UNSET_INDEX ? this.selectedIndex : lv(this.selectedIndex) && this.selectedIndex.length > 0 ? this.selectedIndex.reduce(function(t, r) {
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
        return this.isIndexInRange(t) || this.isSingleSelectionList && t === ht.UNSET_INDEX;
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
      var u = this.selectedIndex === ht.UNSET_INDEX ? [] : this.selectedIndex.slice();
      s ? u.push(t) : u = u.filter(function(l) {
        return l !== t;
      }), this.selectedIndex = u;
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
        focusItemAtIndex: function(u) {
          a.focusItemAtIndex(u);
        },
        focusedItemIndex: r || this.focusedItemIndex,
        nextChar: t,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus: i,
        isItemAtIndexDisabled: function(u) {
          return a.isIndexDisabled(u);
        }
      };
      return Po(s, this.typeaheadState);
    }, e.prototype.typeaheadInitSortedIndex = function() {
      return av(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    }, e.prototype.clearTypeaheadBuffer = function() {
      yd(this.typeaheadState);
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
var Cd = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
      this.originCorner = this.originCorner ^ vt.RIGHT;
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
      var r = this.getoriginCorner(), i = this.getMenuSurfaceMaxHeight(r), a = this.hasBit(r, vt.BOTTOM) ? "bottom" : "top", s = this.hasBit(r, vt.RIGHT) ? "right" : "left", u = this.getHorizontalOriginOffset(r), l = this.getVerticalOriginOffset(r), d = this.measurements, c = d.anchorSize, h = d.surfaceSize, f = (t = {}, t[s] = u, t[a] = l, t);
      c.width / h.width > ba.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO && (s = "center"), (this.isHoistedElement || this.isFixedPosition) && this.adjustPositionForHoistedElement(f), this.adapter.setTransformOrigin(s + " " + a), this.adapter.setPosition(f), this.adapter.setMaxHeight(i ? i + "px" : ""), this.hasBit(r, vt.BOTTOM) || this.adapter.addClass(e.cssClasses.IS_OPEN_BELOW);
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
      var t = this.originCorner, r = this.measurements, i = r.viewportDistance, a = r.anchorSize, s = r.surfaceSize, u = e.numbers.MARGIN_TO_EDGE, l = this.hasBit(this.anchorCorner, vt.BOTTOM), d, c;
      l ? (d = i.top - u + this.anchorMargin.bottom, c = i.bottom - u - this.anchorMargin.bottom) : (d = i.top - u + this.anchorMargin.top, c = i.bottom - u + a.height - this.anchorMargin.top);
      var h = c - s.height > 0;
      !h && d > c + this.openBottomBias && (t = this.setBit(t, vt.BOTTOM));
      var f = this.adapter.isRtl(), v = this.hasBit(this.anchorCorner, vt.FLIP_RTL), g = this.hasBit(this.anchorCorner, vt.RIGHT) || this.hasBit(t, vt.RIGHT), m = !1;
      f && v ? m = !g : m = g;
      var p, I;
      m ? (p = i.left + a.width + this.anchorMargin.right, I = i.right - this.anchorMargin.right) : (p = i.left + this.anchorMargin.left, I = i.right + a.width - this.anchorMargin.left);
      var E = p - s.width > 0, A = I - s.width > 0, y = this.hasBit(t, vt.FLIP_RTL) && this.hasBit(t, vt.RIGHT);
      return A && y && f || !E && y ? t = this.unsetBit(t, vt.RIGHT) : (E && m && f || E && !m && g || !A && p >= I) && (t = this.setBit(t, vt.RIGHT)), t;
    }, e.prototype.getMenuSurfaceMaxHeight = function(t) {
      if (this.maxHeight > 0)
        return this.maxHeight;
      var r = this.measurements.viewportDistance, i = 0, a = this.hasBit(t, vt.BOTTOM), s = this.hasBit(this.anchorCorner, vt.BOTTOM), u = e.numbers.MARGIN_TO_EDGE;
      return a ? (i = r.top + this.anchorMargin.top - u, s || (i += this.measurements.anchorSize.height)) : (i = r.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - u, s && (i -= this.measurements.anchorSize.height)), i;
    }, e.prototype.getHorizontalOriginOffset = function(t) {
      var r = this.measurements.anchorSize, i = this.hasBit(t, vt.RIGHT), a = this.hasBit(this.anchorCorner, vt.RIGHT);
      if (i) {
        var s = a ? r.width - this.anchorMargin.left : this.anchorMargin.right;
        return this.isHoistedElement || this.isFixedPosition ? s - (this.measurements.viewportSize.width - this.measurements.bodySize.width) : s;
      }
      return a ? r.width - this.anchorMargin.right : this.anchorMargin.left;
    }, e.prototype.getVerticalOriginOffset = function(t) {
      var r = this.measurements.anchorSize, i = this.hasBit(t, vt.BOTTOM), a = this.hasBit(this.anchorCorner, vt.BOTTOM), s = 0;
      return i ? s = a ? r.height - this.anchorMargin.top : -this.anchorMargin.bottom : s = a ? r.height + this.anchorMargin.bottom : this.anchorMargin.top, s;
    }, e.prototype.adjustPositionForHoistedElement = function(t) {
      var r, i, a = this.measurements, s = a.windowScroll, u = a.viewportDistance, l = a.surfaceSize, d = a.viewportSize, c = Object.keys(t);
      try {
        for (var h = Bn(c), f = h.next(); !f.done; f = h.next()) {
          var v = f.value, g = t[v] || 0;
          if (this.isHorizontallyCenteredOnViewport && (v === "left" || v === "right")) {
            t[v] = (d.width - l.width) / 2;
            continue;
          }
          g += u[v], this.isFixedPosition || (v === "top" ? g += s.y : v === "bottom" ? g -= s.y : v === "left" ? g += s.x : g -= s.x), t[v] = g;
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
    hn(e, n);
    function e(t) {
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
        }, Cd.numbers.TRANSITION_CLOSE_DURATION);
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
      this.validatedIndex(t), r ? (this.adapter.removeClassFromElementAtIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Fi.ARIA_DISABLED_ATTR, "false")) : (this.adapter.addClassToElementAtIndex(t, ke.LIST_ITEM_DISABLED_CLASS), this.adapter.addAttributeToElementAtIndex(t, Fi.ARIA_DISABLED_ATTR, "true"));
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
var lt = {
  ACTIVATED: "mdc-select--activated",
  DISABLED: "mdc-select--disabled",
  FOCUSED: "mdc-select--focused",
  INVALID: "mdc-select--invalid",
  MENU_INVALID: "mdc-select__menu--invalid",
  OUTLINED: "mdc-select--outlined",
  REQUIRED: "mdc-select--required",
  ROOT: "mdc-select",
  WITH_LEADING_ICON: "mdc-select--with-leading-icon"
}, fo = {
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
    hn(e, n);
    function e(t, r) {
      r === void 0 && (r = {});
      var i = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
      return i.disabled = !1, i.isMenuOpen = !1, i.useDefaultValidation = !0, i.customValidity = !0, i.lastSelectedIndex = ii.UNSET_INDEX, i.clickDebounceTimeout = 0, i.recentlyClicked = !1, i.leadingIcon = r.leadingIcon, i.helperText = r.helperText, i;
    }
    return Object.defineProperty(e, "cssClasses", {
      get: function() {
        return lt;
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
        return fo;
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
      this.disabled = t, this.disabled ? (this.adapter.addClass(lt.DISABLED), this.adapter.closeMenu()) : this.adapter.removeClass(lt.DISABLED), this.leadingIcon && this.leadingIcon.setDisabled(this.disabled), this.disabled ? this.adapter.removeSelectAnchorAttr("tabindex") : this.adapter.setSelectAnchorAttr("tabindex", "0"), this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    }, e.prototype.openMenu = function() {
      this.adapter.addClass(lt.ACTIVATED), this.adapter.openMenu(), this.isMenuOpen = !0, this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    }, e.prototype.setHelperTextContent = function(t) {
      this.helperText && this.helperText.setContent(t);
    }, e.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var t = this.getValue().length > 0, r = this.adapter.hasClass(lt.FOCUSED), i = t || r, a = this.adapter.hasClass(lt.REQUIRED);
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
      this.adapter.removeClass(lt.ACTIVATED), this.isMenuOpen = !1, this.adapter.isSelectAnchorFocused() || this.blur();
    }, e.prototype.handleChange = function() {
      this.layout(), this.adapter.notifyChange(this.getValue());
      var t = this.adapter.hasClass(lt.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.handleMenuItemAction = function(t) {
      this.setSelectedIndex(
        t,
        /** closeMenu */
        !0
      );
    }, e.prototype.handleFocus = function() {
      this.adapter.addClass(lt.FOCUSED), this.layout(), this.adapter.activateBottomLine();
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
      if (!(this.isMenuOpen || !this.adapter.hasClass(lt.FOCUSED))) {
        var r = _t(t) === Oe.ENTER, i = _t(t) === Oe.SPACEBAR, a = _t(t) === Oe.ARROW_UP, s = _t(t) === Oe.ARROW_DOWN, u = t.ctrlKey || t.metaKey;
        if (!u && (!i && t.key && t.key.length === 1 || i && this.adapter.isTypeaheadInProgress())) {
          var l = i ? " " : t.key, d = this.adapter.typeaheadMatchItem(l, this.getSelectedIndex());
          d >= 0 && this.setSelectedIndex(d), t.preventDefault();
          return;
        }
        !r && !i && !a && !s || (this.openMenu(), t.preventDefault());
      }
    }, e.prototype.notchOutline = function(t) {
      if (this.adapter.hasOutline()) {
        var r = this.adapter.hasClass(lt.FOCUSED);
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
      this.useDefaultValidation || (this.customValidity = t), this.adapter.setSelectAnchorAttr("aria-invalid", (!t).toString()), t ? (this.adapter.removeClass(lt.INVALID), this.adapter.removeMenuClass(lt.MENU_INVALID)) : (this.adapter.addClass(lt.INVALID), this.adapter.addMenuClass(lt.MENU_INVALID)), this.syncHelperTextValidity(t);
    }, e.prototype.isValid = function() {
      return this.useDefaultValidation && this.adapter.hasClass(lt.REQUIRED) && !this.adapter.hasClass(lt.DISABLED) ? this.getSelectedIndex() !== ii.UNSET_INDEX && (this.getSelectedIndex() !== 0 || !!this.getValue()) : this.customValidity;
    }, e.prototype.setRequired = function(t) {
      t ? this.adapter.addClass(lt.REQUIRED) : this.adapter.removeClass(lt.REQUIRED), this.adapter.setSelectAnchorAttr("aria-required", t.toString()), this.adapter.setLabelRequired(t);
    }, e.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    }, e.prototype.init = function() {
      var t = this.adapter.getAnchorElement();
      t && (this.adapter.setMenuAnchorElement(t), this.adapter.setMenuAnchorCorner(_i.BOTTOM_START)), this.adapter.setMenuWrapFocus(!1), this.setDisabled(this.adapter.hasClass(lt.DISABLED)), this.syncHelperTextValidity(!this.adapter.hasClass(lt.INVALID)), this.layout(), this.layoutOptions();
    }, e.prototype.blur = function() {
      this.adapter.removeClass(lt.FOCUSED), this.layout(), this.adapter.deactivateBottomLine();
      var t = this.adapter.hasClass(lt.REQUIRED);
      t && this.useDefaultValidation && this.setValid(this.isValid());
    }, e.prototype.syncHelperTextValidity = function(t) {
      if (this.helperText) {
        this.helperText.setValidity(t);
        var r = this.helperText.isVisible(), i = this.helperText.getId();
        r && i ? this.adapter.setSelectAnchorAttr(fo.ARIA_DESCRIBEDBY, i) : this.adapter.removeSelectAnchorAttr(fo.ARIA_DESCRIBEDBY);
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
var vv = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      return n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
), gv = /* @__PURE__ */ Z("<div><!></div>");
function mv(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "style", 3, ""), a = _(e, "static", 3, !1), s = _(e, "anchor", 3, !0), u = _(e, "fixed", 3, !1), l = _(e, "open", 31, () => Ae(a())), d = _(e, "managed", 3, !1), c = _(e, "fullWidth", 3, !1), h = _(e, "quickOpen", 3, !1), f = _(e, "anchorElement", 15), v = _(e, "anchorMargin", 19, () => ({ top: 0, right: 0, bottom: 0, left: 0 })), g = _(e, "maxHeight", 3, 0), m = _(e, "horizontallyCenteredOnViewport", 3, !1), p = _(e, "openBottomBias", 3, 0), I = _(e, "neverRestoreFocus", 3, !1), E = /* @__PURE__ */ qe(e, [
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
  ]), A, y = /* @__PURE__ */ oe(void 0), T = Ae({}), C = Ae({}), S = /* @__PURE__ */ oe(void 0);
  le("SMUI:list:role", "menu"), le("SMUI:list:item:role", "menuitem"), Ee(() => {
    var P, ee;
    A && s() && !((P = A.parentElement) != null && P.classList.contains("mdc-menu-surface--anchor")) && ((ee = A.parentElement) == null || ee.classList.add("mdc-menu-surface--anchor"), f(A.parentElement ?? void 0));
  }), Ee(() => {
    o(y) && o(y).isOpen() !== l() && (l() ? o(y).open() : o(y).close());
  }), Ee(() => {
    o(y) && o(y).setQuickOpen(h());
  }), Ee(() => {
    o(y) && o(y).setFixedPosition(u());
  }), Ee(() => {
    o(y) && o(y).setMaxHeight(g());
  }), Ee(() => {
    o(y) && o(y).setIsHorizontallyCenteredOnViewport(m());
  });
  const b = _i;
  Ee(() => {
    o(y) && e.anchorCorner != null && (typeof e.anchorCorner == "string" ? o(y).setAnchorCorner(b[e.anchorCorner]) : o(y).setAnchorCorner(e.anchorCorner));
  }), Ee(() => {
    o(y) && o(y).setAnchorMargin(v());
  }), Ee(() => {
    o(y) && o(y).setOpenBottomBias(p());
  });
  const w = be("SMUI:menu-surface:mount"), L = be("SMUI:menu-surface:unmount");
  et(() => {
    W(
      y,
      new Cd({
        addClass: D,
        removeClass: O,
        hasClass: M,
        hasAnchor: () => !!f(),
        notifyClose: () => {
          d() || l(a()), l() || We(ce(), "SMUIMenuSurfaceClosed");
        },
        notifyClosing: () => {
          d() || l(a()), l() || We(ce(), "SMUIMenuSurfaceClosing");
        },
        notifyOpen: () => {
          d() || l(!0), l() && We(ce(), "SMUIMenuSurfaceOpened");
        },
        notifyOpening: () => {
          l() || We(ce(), "SMUIMenuSurfaceOpening");
        },
        isElementInContainer: (ee) => ce().contains(ee),
        isRtl: () => getComputedStyle(ce()).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (ee) => {
          C["transform-origin"] = ee;
        },
        isFocused: () => document.activeElement === ce(),
        saveFocus: () => {
          W(S, document.activeElement ?? void 0, !0);
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
        setPosition: (ee) => {
          C.left = "left" in ee ? `${ee.left}px` : "", C.right = "right" in ee ? `${ee.right}px` : "", C.top = "top" in ee ? `${ee.top}px` : "", C.bottom = "bottom" in ee ? `${ee.bottom}px` : "";
        },
        setMaxHeight: (ee) => {
          C["max-height"] = ee;
        }
      }),
      !0
    );
    const P = {
      get open() {
        return l();
      },
      set open(ee) {
        l(ee);
      },
      closeProgrammatic: J
    };
    return w && w(P), o(y).init(), () => {
      var K, fe;
      L && L(P);
      const ee = o(y).isHoistedElement;
      (K = o(y)) == null || K.destroy(), ee && ((fe = ce().parentNode) == null || fe.removeChild(ce()));
    };
  }), Mn(() => {
    var P;
    s() && ce() && ((P = ce().parentElement) == null || P.classList.remove("mdc-menu-surface--anchor"));
  });
  function M(P) {
    return P in T ? T[P] : ce().classList.contains(P);
  }
  function D(P) {
    T[P] || (T[P] = !0);
  }
  function O(P) {
    (!(P in T) || T[P]) && (T[P] = !1);
  }
  function J(P) {
    var ee;
    (ee = o(y)) == null || ee.close(P), l(!1);
  }
  function V(P) {
    o(y) && l() && !d() && o(y).handleBodyClick(P);
  }
  function U() {
    return l();
  }
  function H(P) {
    l(P);
  }
  function Q(P, ee) {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).setAbsolutePosition(P, ee);
  }
  function de(P) {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).setIsHoisted(P);
  }
  function G() {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).isFixed();
  }
  function ie() {
    if (o(y) == null)
      throw new Error("Instance is not defined.");
    return o(y).flipCornerHorizontally();
  }
  function ce() {
    return A;
  }
  var xe = {
    isOpen: U,
    setOpen: H,
    setAbsolutePosition: Q,
    setIsHoisted: de,
    isFixed: G,
    flipCornerHorizontally: ie,
    getElement: ce
  }, me = gv();
  Xt("click", Jo.body, V, !0);
  var q = (P) => {
    var ee;
    o(y) && !d() && o(y).handleKeydown(P), (ee = e.onkeydown) == null || ee.call(e, P);
  };
  Be(
    me,
    (P, ee) => ({
      class: P,
      style: ee,
      role: "dialog",
      ...E,
      onkeydown: q
    }),
    [
      () => Ne({
        "mdc-menu-surface": !0,
        "mdc-menu-surface--fixed": u(),
        "mdc-menu-surface--open": a(),
        "smui-menu-surface--static": a(),
        "mdc-menu-surface--fullwidth": c(),
        ...T,
        [r()]: !0
      }),
      () => Object.entries(C).map(([P, ee]) => `${P}: ${ee};`).concat([i()]).join(" ")
    ]
  );
  var z = F(me);
  return pe(z, () => e.children ?? ve), Se(me, (P) => A = P, () => A), De(me, (P, ee) => re == null ? void 0 : re(P, ee), t), x(n, me), Ie(xe);
}
function ho(n, { addClass: e = (r) => n.classList.add(r), removeClass: t = (r) => n.classList.remove(r) } = {}) {
  return e("mdc-menu-surface--anchor"), {
    destroy() {
      t("mdc-menu-surface--anchor");
    }
  };
}
function pv(n, e) {
  _e(e, !0);
  const { closest: t } = Va;
  let r = _(e, "use", 19, () => []), i = _(e, "class", 3, ""), a = _(e, "open", 15, !1), s = _(e, "anchorElement", 15), u = _(e, "managed", 3, !1), l = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "open",
    "anchorElement",
    "managed",
    "children"
  ]), d, c = /* @__PURE__ */ oe(void 0), h = /* @__PURE__ */ oe(void 0), f = /* @__PURE__ */ oe(void 0);
  le("SMUI:menu-surface:mount", (b) => {
    o(h) || W(h, b, !0);
  });
  const v = be("SMUI:list:mount");
  le("SMUI:list:mount", (b) => {
    o(f) || W(f, b, !0), v && v(b);
  });
  const g = be("SMUI:menu:mount"), m = be("SMUI:menu:unmount");
  et(() => (W(
    c,
    new fv({
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
        u() || ((w = o(h)) == null || w.closeProgrammatic(b), We(C(), "SMUIMenuClosedProgrammatically"));
      },
      getElementIndex: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        return o(f).getOrderedList().map((w) => w.element).indexOf(b);
      },
      notifySelected: (b) => {
        if (o(f) == null)
          throw new Error("List accessor is undefined.");
        We(C(), "SMUIMenuSelected", {
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
  ), g && g(o(c)), o(c).init(), () => {
    var b;
    m && o(c) && m(o(c)), (b = o(c)) == null || b.destroy();
  }));
  function p(b) {
    o(c) && o(c).handleKeydown(b);
  }
  function I() {
    return a();
  }
  function E(b) {
    a(b);
  }
  function A(b) {
    if (o(c) == null)
      throw new Error("Instance is undefined.");
    o(c).setDefaultFocusState(b);
  }
  function y() {
    if (o(c) == null)
      throw new Error("Instance is undefined.");
    return o(c).getSelectedIndex();
  }
  function T() {
    return d;
  }
  function C() {
    return d.getElement();
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
    let b = /* @__PURE__ */ $(() => Ne({ "mdc-menu": !0, [i()]: !0 }));
    Se(
      mv(n, Je(
        {
          get use() {
            return r();
          },
          get class() {
            return o(b);
          },
          get managed() {
            return u();
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
            o(c) && o(c).handleMenuSurfaceOpened(), (L = e.onSMUIMenuSurfaceOpened) == null || L.call(e, w);
          },
          onSMUIListAction: (w) => {
            var L;
            o(c) && o(f) && o(c).handleItemAction(o(f).getOrderedList()[w.detail.index].element), (L = e.onSMUIListAction) == null || L.call(e, w);
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
            var M = ae(), D = Y(M);
            pe(D, () => e.children ?? ve), x(w, M);
          },
          $$slots: { default: !0 }
        }
      )),
      (w) => d = w,
      () => d
    );
  }
  return Ie(S);
}
function _v(n, e) {
  _e(e, !0);
  const { closest: t, matches: r } = Va;
  let i = be("SMUI:list:nav"), a = _(e, "use", 19, () => []), s = _(e, "class", 3, ""), u = _(e, "nonInteractive", 3, !1), l = _(e, "dense", 3, !1), d = _(e, "textualList", 3, !1), c = _(e, "avatarList", 3, !1), h = _(e, "iconList", 3, !1), f = _(e, "imageList", 3, !1), v = _(e, "thumbnailList", 3, !1), g = _(e, "videoList", 3, !1), m = _(e, "twoLine", 3, !1), p = _(e, "threeLine", 3, !1), I = _(e, "vertical", 3, !0), E = _(e, "wrapFocus", 19, () => be("SMUI:list:wrapFocus") ?? !1), A = _(e, "singleSelection", 3, !1), y = _(e, "disabledItemsFocusable", 3, !1), T = _(e, "selectedIndex", 31, () => -1), C = _(e, "radioList", 3, !1), S = _(e, "checkList", 3, !1), b = _(e, "hasTypeahead", 3, !1), w = _(e, "component", 3, qa), L = _(e, "tag", 3, i ? "nav" : "ul"), M = /* @__PURE__ */ qe(e, [
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
  ]), D, O = /* @__PURE__ */ oe(void 0), J = [], V = be("SMUI:list:role");
  const U = /* @__PURE__ */ new WeakMap();
  let H = be("SMUI:dialog:selection"), Q = be("SMUI:addLayoutListener"), de;
  le("SMUI:list:nonInteractive", u()), le("SMUI:separator:context", "list"), V || (A() ? (V = "listbox", le("SMUI:list:item:role", "option")) : C() ? (V = "radiogroup", le("SMUI:list:item:role", "radio")) : S() ? (V = "group", le("SMUI:list:item:role", "checkbox")) : (V = "list", le("SMUI:list:item:role", void 0))), Ee(() => {
    o(O) && o(O).setVerticalOrientation(I());
  }), Ee(() => {
    o(O) && o(O).setWrapFocus(E());
  }), Ee(() => {
    o(O) && o(O).setHasTypeahead(b());
  }), Ee(() => {
    o(O) && o(O).setSingleSelection(A());
  }), Ee(() => {
    o(O) && o(O).setDisabledItemsFocusable(y());
  }), Ee(() => {
    o(O) && A() && B() !== T() && o(O).setSelectedIndex(T());
  }), Q && (de = Q(At)), le("SMUI:list:item:mount", (ge) => {
    J.push(ge), U.set(ge.element, ge), A() && ge.selected && T(Pe(ge.element));
  }), le("SMUI:list:item:unmount", (ge) => {
    const N = (ge && J.findIndex((k) => k === ge)) ?? -1;
    N !== -1 && (J.splice(N, 1), U.delete(ge.element));
  });
  const G = be("SMUI:list:mount"), ie = be("SMUI:list:unmount");
  et(() => {
    W(
      O,
      new dv({
        addClassForElementIndex: K,
        focusItemAtIndex: ye,
        getAttributeForElementIndex: (N, k) => {
          var te;
          return ((te = P()[N]) == null ? void 0 : te.getAttr(k)) ?? null;
        },
        getFocusedElementIndex: () => document.activeElement ? P().map((N) => N.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => J.length,
        getPrimaryTextAtIndex: it,
        hasCheckboxAtIndex: (N) => {
          var k;
          return ((k = P()[N]) == null ? void 0 : k.hasCheckbox) ?? !1;
        },
        hasRadioAtIndex: (N) => {
          var k;
          return ((k = P()[N]) == null ? void 0 : k.hasRadio) ?? !1;
        },
        isCheckboxCheckedAtIndex: (N) => {
          const k = P()[N];
          return ((k == null ? void 0 : k.hasCheckbox) && k.checked) ?? !1;
        },
        isFocusInsideList: () => D != null && Fe() !== document.activeElement && Fe().contains(document.activeElement),
        isRootFocused: () => D != null && document.activeElement === Fe(),
        listItemAtIndexHasClass: ee,
        notifyAction: (N) => {
          T(N), D != null && We(Fe(), "SMUIListAction", { index: N });
        },
        notifySelectionChange: (N) => {
          D != null && We(Fe(), "SMUIListSelectionChange", { changedIndices: N });
        },
        removeClassForElementIndex: fe,
        setAttributeForElementIndex: Ce,
        setCheckedCheckboxOrRadioAtIndex: (N, k) => {
          P()[N].checked = k;
        },
        setTabIndexForListItemChildren: (N, k) => {
          const te = P()[N];
          Array.prototype.forEach.call(te.element.querySelectorAll("button:not(:disabled), a"), (ot) => {
            ot.setAttribute("tabindex", k);
          });
        }
      }),
      !0
    );
    const ge = {
      get element() {
        return Fe();
      },
      get items() {
        return J;
      },
      get typeaheadInProgress() {
        if (!o(O))
          throw new Error("Instance is undefined.");
        return o(O).isTypeaheadInProgress();
      },
      typeaheadMatchItem(N, k) {
        if (!o(O))
          throw new Error("Instance is undefined.");
        return o(O).typeaheadMatchItem(
          N,
          k,
          /** skipFocus */
          !0
        );
      },
      getOrderedList: P,
      focusItemAtIndex: ye,
      addClassForElementIndex: K,
      removeClassForElementIndex: fe,
      setAttributeForElementIndex: Ce,
      removeAttributeForElementIndex: Ue,
      getAttributeFromElementIndex: st,
      getPrimaryTextAtIndex: it
    };
    return G && G(ge), o(O).init(), o(O).layout(), () => {
      var N;
      ie && ie(ge), (N = o(O)) == null || N.destroy();
    };
  }), Mn(() => {
    de && de();
  });
  function ce(ge) {
    o(O) && ge.target && o(O).handleKeydown(ge, ge.target.classList.contains("mdc-deprecated-list-item"), Pe(ge.target));
  }
  function xe(ge) {
    o(O) && ge.target && o(O).handleFocusIn(Pe(ge.target));
  }
  function me(ge) {
    o(O) && ge.target && o(O).handleFocusOut(Pe(ge.target));
  }
  function q(ge) {
    o(O) && ge.target && o(O).handleClick(Pe(ge.target), !r(ge.target, 'input[type="checkbox"], input[type="radio"]'), ge);
  }
  function z(ge) {
    if (C() || S()) {
      const N = Pe(ge.target);
      if (N !== -1) {
        const k = P()[N];
        k && (C() && !k.checked || S()) && (r(ge.detail.target, 'input[type="checkbox"], input[type="radio"]') || (k.checked = !k.checked), k.activateRipple(), window.requestAnimationFrame(() => {
          k.deactivateRipple();
        }));
      }
    }
  }
  function P() {
    return D == null ? [] : [...Fe().children].map((ge) => U.get(ge)).filter((ge) => ge && ge._smui_list_item_accessor);
  }
  function ee(ge, N) {
    const k = P()[ge];
    return (k && k.hasClass(N)) ?? !1;
  }
  function K(ge, N) {
    const k = P()[ge];
    k && k.addClass(N);
  }
  function fe(ge, N) {
    const k = P()[ge];
    k && k.removeClass(N);
  }
  function Ce(ge, N, k) {
    const te = P()[ge];
    te && te.addAttr(N, k);
  }
  function Ue(ge, N) {
    const k = P()[ge];
    k && k.removeAttr(N);
  }
  function st(ge, N) {
    const k = P()[ge];
    return k ? k.getAttr(N) : null;
  }
  function it(ge) {
    const N = P()[ge];
    return (N && N.getPrimaryText()) ?? "";
  }
  function Pe(ge) {
    const N = t(ge, ".mdc-deprecated-list-item, .mdc-deprecated-list");
    return N && r(N, ".mdc-deprecated-list-item") ? P().map((k) => k == null ? void 0 : k.element).indexOf(N) : -1;
  }
  function At() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).layout();
  }
  function tn(ge, N) {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).setEnabled(ge, N);
  }
  function nn() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).isTypeaheadInProgress();
  }
  function B() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).getSelectedIndex();
  }
  function X() {
    if (!o(O))
      throw new Error("Instance is undefined.");
    return o(O).getFocusedItemIndex();
  }
  function ye(ge) {
    const N = P()[ge];
    N && "focus" in N.element && N.element.focus();
  }
  function Fe() {
    return D.getElement();
  }
  var rn = {
    layout: At,
    setEnabled: tn,
    getTypeaheadInProgress: nn,
    getSelectedIndex: B,
    getFocusedItemIndex: X,
    focusItemAtIndex: ye,
    getElement: Fe
  }, mn = ae(), ur = Y(mn);
  {
    let ge = /* @__PURE__ */ $(() => Ne({
      "mdc-deprecated-list": !0,
      "mdc-deprecated-list--non-interactive": u(),
      "mdc-deprecated-list--dense": l(),
      "mdc-deprecated-list--textual-list": d(),
      "mdc-deprecated-list--avatar-list": c() || H,
      "mdc-deprecated-list--icon-list": h(),
      "mdc-deprecated-list--image-list": f(),
      "mdc-deprecated-list--thumbnail-list": v(),
      "mdc-deprecated-list--video-list": g(),
      "mdc-deprecated-list--two-line": m(),
      "smui-list--three-line": p() && !m(),
      [s()]: !0
    }));
    da(ur, w, (N, k) => {
      Se(
        k(N, Je(
          {
            get tag() {
              return L();
            },
            get use() {
              return a();
            },
            get class() {
              return o(ge);
            },
            get role() {
              return V;
            }
          },
          () => M,
          {
            onkeydown: (te) => {
              var Te;
              ce(te), (Te = e.onkeydown) == null || Te.call(e, te);
            },
            onfocusin: (te) => {
              var Te;
              xe(te), (Te = e.onfocusin) == null || Te.call(e, te);
            },
            onfocusout: (te) => {
              var Te;
              me(te), (Te = e.onfocusout) == null || Te.call(e, te);
            },
            onclick: (te) => {
              var Te;
              q(te), (Te = e.onclick) == null || Te.call(e, te);
            },
            onSMUIAction: (te) => {
              var Te;
              z(te), (Te = e.onSMUIAction) == null || Te.call(e, te);
            },
            children: (te, Te) => {
              var ot = ae(), mt = Y(ot);
              pe(mt, () => e.children ?? ve), x(te, ot);
            },
            $$slots: { default: !0 }
          }
        )),
        (te) => D = te,
        () => D
      );
    });
  }
  return x(n, mn), Ie(rn);
}
let Iv = 0;
var bv = /* @__PURE__ */ Z('<span class="mdc-deprecated-list-item__ripple"></span>'), yv = /* @__PURE__ */ Z("<!><!>", 1);
function Cv(n, e) {
  _e(e, !0);
  let t = () => {
  };
  function r(K) {
    return K === t;
  }
  let i = be("SMUI:list:item:nav"), a = _(e, "use", 19, () => []), s = _(e, "class", 3, ""), u = _(e, "style", 3, ""), l = _(e, "nonInteractive", 19, () => be("SMUI:list:nonInteractive") ?? !1), d = _(e, "ripple", 19, () => !l()), c = _(e, "wrapper", 3, !1), h = _(e, "activated", 15, !1), f = _(e, "role", 19, () => c() ? "presentation" : be("SMUI:list:item:role")), v = _(e, "selected", 15, !1), g = _(e, "disabled", 3, !1), m = _(e, "skipRestoreFocus", 3, !1), p = _(e, "tabindex", 15, t), I = _(e, "inputId", 19, () => "SMUI-form-field-list-" + Iv++), E = _(e, "component", 3, qa), A = _(e, "tag", 19, () => i ? e.href ? "a" : "span" : "li"), y = /* @__PURE__ */ qe(e, [
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
  let T, C = Ae({}), S = Ae({}), b = Ae({}), w = /* @__PURE__ */ oe(void 0), L = /* @__PURE__ */ oe(void 0);
  const M = /* @__PURE__ */ $(() => r(p()) ? !l() && !g() && (v() || o(w) && o(w).checked) ? 0 : -1 : p());
  le("SMUI:generic:input:props", { id: I() }), le("SMUI:separator:context", void 0), le("SMUI:generic:input:mount", (K) => {
    ("_smui_checkbox_accessor" in K || "_smui_radio_accessor" in K) && W(w, K, !0);
  }), le("SMUI:generic:input:unmount", () => {
    W(w, void 0);
  });
  const D = be("SMUI:list:item:mount"), O = be("SMUI:list:item:unmount");
  et(() => {
    if (!v() && !l()) {
      let fe = !0, Ce = T.getElement();
      for (; Ce.previousElementSibling; )
        if (Ce = Ce.previousElementSibling, Ce.nodeType === 1 && Ce.classList.contains("mdc-deprecated-list-item") && !Ce.classList.contains("mdc-deprecated-list-item--disabled")) {
          fe = !1;
          break;
        }
      fe && W(L, window.requestAnimationFrame(() => ie(Ce)), !0);
    }
    const K = {
      _smui_list_item_accessor: !0,
      get element() {
        return q();
      },
      get selected() {
        return v();
      },
      set selected(fe) {
        v(fe);
      },
      hasClass: J,
      addClass: V,
      removeClass: U,
      getAttr: Q,
      addAttr: de,
      removeAttr: G,
      getPrimaryText: me,
      // For inputs within item.
      get checked() {
        return (o(w) && o(w).checked) ?? !1;
      },
      set checked(fe) {
        o(w) && (o(w).checked = !!fe);
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
      action: xe,
      get tabindex() {
        return o(M);
      },
      set tabindex(fe) {
        p(fe);
      },
      get disabled() {
        return g();
      },
      get activated() {
        return h();
      },
      set activated(fe) {
        h(fe);
      }
    };
    return D && D(K), () => {
      O && O(K);
    };
  }), Mn(() => {
    o(L) && window.cancelAnimationFrame(o(L));
  });
  function J(K) {
    return K in C ? C[K] : q().classList.contains(K);
  }
  function V(K) {
    C[K] || (C[K] = !0);
  }
  function U(K) {
    (!(K in C) || C[K]) && (C[K] = !1);
  }
  function H(K, fe) {
    S[K] != fe && (fe === "" || fe == null ? delete S[K] : S[K] = fe);
  }
  function Q(K) {
    return K in b ? b[K] ?? null : q().getAttribute(K);
  }
  function de(K, fe) {
    b[K] !== fe && (b[K] = fe);
  }
  function G(K) {
    (!(K in b) || b[K] != null) && (b[K] = void 0);
  }
  function ie(K) {
    let fe = !0;
    for (; K.nextElementSibling; )
      if (K = K.nextElementSibling, K.nodeType === 1 && K.classList.contains("mdc-deprecated-list-item")) {
        const Ce = K.attributes.getNamedItem("tabindex");
        if (Ce && Ce.value === "0") {
          fe = !1;
          break;
        }
      }
    fe && p(0);
  }
  function ce(K) {
    const fe = K.key === "Enter", Ce = K.key === "Space";
    (fe || Ce) && xe(K);
  }
  function xe(K) {
    g() || We(q(), "SMUIAction", K);
  }
  function me() {
    const K = q(), fe = K.querySelector(".mdc-deprecated-list-item__primary-text");
    if (fe)
      return fe.textContent ?? "";
    const Ce = K.querySelector(".mdc-deprecated-list-item__text");
    return Ce ? Ce.textContent ?? "" : K.textContent ?? "";
  }
  function q() {
    return T.getElement();
  }
  var z = { action: xe, getPrimaryText: me, getElement: q }, P = ae(), ee = Y(P);
  {
    let K = /* @__PURE__ */ $(() => [
      ...l() ? [] : [
        [
          Fn,
          {
            ripple: !o(w),
            unbounded: !1,
            color: (h() || v()) && e.color == null ? "primary" : e.color,
            disabled: g(),
            addClass: V,
            removeClass: U,
            addStyle: H
          }
        ]
      ],
      ...a()
    ]), fe = /* @__PURE__ */ $(() => Ne({
      "mdc-deprecated-list-item": !c(),
      "mdc-deprecated-list-item__wrapper": c(),
      "mdc-deprecated-list-item--activated": h(),
      "mdc-deprecated-list-item--selected": v(),
      "mdc-deprecated-list-item--disabled": g(),
      "mdc-menu-item--selected": !i && f() === "menuitem" && v(),
      "smui-menu-item--non-interactive": l(),
      ...C,
      [s()]: !0
    })), Ce = /* @__PURE__ */ $(() => Object.entries(S).map(([st, it]) => `${st}: ${it};`).concat([u()]).join(" ")), Ue = /* @__PURE__ */ $(() => m() || void 0);
    da(ee, E, (st, it) => {
      Se(
        it(st, Je(
          {
            get tag() {
              return A();
            },
            get use() {
              return o(K);
            },
            get class() {
              return o(fe);
            },
            get style() {
              return o(Ce);
            }
          },
          () => i && h() ? { "aria-current": "page" } : {},
          () => !i || c() ? { role: f() } : {},
          () => !i && f() === "option" ? { "aria-selected": v() ? "true" : "false" } : {},
          () => !i && (f() === "radio" || f() === "checkbox") ? {
            "aria-checked": o(w) && o(w).checked ? "true" : "false"
          } : {},
          () => i ? {} : { "aria-disabled": g() ? "true" : "false" },
          {
            get "data-menu-item-skip-restore-focus"() {
              return o(Ue);
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
            onclick: (Pe) => {
              var At;
              xe(Pe), (At = e.onclick) == null || At.call(e, Pe);
            },
            onkeydown: (Pe) => {
              var At;
              ce(Pe), (At = e.onkeydown) == null || At.call(e, Pe);
            },
            children: (Pe, At) => {
              var tn = yv(), nn = Y(tn);
              {
                var B = (ye) => {
                  var Fe = bv();
                  x(ye, Fe);
                };
                ne(nn, (ye) => {
                  d() && ye(B);
                });
              }
              var X = j(nn);
              pe(X, () => e.children ?? ve), x(Pe, tn);
            },
            $$slots: { default: !0 }
          }
        )),
        (Pe) => T = Pe,
        () => T
      );
    });
  }
  return x(n, P), Ie(z);
}
let Av = 0;
var Ev = /* @__PURE__ */ Z("<div><!></div>");
function Sv(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "id", 19, () => "SMUI-select-helper-text-" + Av++), a = _(e, "persistent", 3, !1), s = _(e, "validationMsg", 3, !1), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, d = /* @__PURE__ */ oe(void 0), c = Ae({}), h = Ae({}), f = /* @__PURE__ */ oe(void 0);
  const v = be("SMUI:select:helper-text:id"), g = be("SMUI:select:helper-text:mount"), m = be("SMUI:select:helper-text:unmount");
  et(() => (W(
    d,
    new vv({
      addClass: I,
      removeClass: E,
      hasClass: p,
      getAttr: A,
      setAttr: y,
      removeAttr: T,
      setContent: (D) => {
        W(f, D, !0);
      }
    }),
    !0
  ), v && v(i()), g && g(o(d)), o(d).init(), () => {
    var D;
    m && o(d) && m(o(d)), (D = o(d)) == null || D.destroy();
  }));
  function p(D) {
    return D in c ? c[D] : C().classList.contains(D);
  }
  function I(D) {
    c[D] || (c[D] = !0);
  }
  function E(D) {
    (!(D in c) || c[D]) && (c[D] = !1);
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
  var S = { getElement: C }, b = Ev();
  Be(
    b,
    (D) => ({
      class: D,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...u
    }),
    [
      () => Ne({
        "mdc-select-helper-text": !0,
        "mdc-select-helper-text--validation-msg": s(),
        "mdc-select-helper-text--validation-msg-persistent": a(),
        ...c,
        [r()]: !0
      })
    ]
  );
  var w = F(b);
  {
    var L = (D) => {
      var O = ae(), J = Y(O);
      pe(J, () => e.children ?? ve), x(D, O);
    }, M = (D) => {
      var O = Ge();
      ue(() => Le(O, o(f))), x(D, O);
    };
    ne(w, (D) => {
      o(f) == null ? D(L) : D(M, !1);
    });
  }
  return Se(b, (D) => l = D, () => l), De(b, (D, O) => re == null ? void 0 : re(D, O), t), x(n, b), Ie(S);
}
let xv = 0;
var wv = /* @__PURE__ */ Z("<input/>"), Tv = /* @__PURE__ */ Z('<span class="mdc-select__ripple"></span>'), Dv = /* @__PURE__ */ Z('<div><!> <div><!> <!> <!> <!> <span><span> </span></span> <span><svg class="mdc-select__dropdown-icon-graphic" viewBox="7 10 10 5" focusable="false"><polygon class="mdc-select__dropdown-icon-inactive" stroke="none" fill-rule="evenodd" points="7 10 12 15 17 10"></polygon><polygon class="mdc-select__dropdown-icon-active" stroke="none" fill-rule="evenodd" points="7 15 12 10 17 15"></polygon></svg></span> <!></div> <!></div> <!>', 1);
function Lv(n, e) {
  _e(e, !0);
  const t = () => Ci(Fe, "$selectedTextStore", r), [r, i] = Ti();
  let a = () => {
  };
  function s(R) {
    return R === a;
  }
  let u = _(e, "use", 19, () => []), l = _(e, "class", 3, ""), d = _(e, "style", 3, ""), c = _(e, "ripple", 3, !0), h = _(e, "disabled", 3, !1), f = _(e, "variant", 3, "standard"), v = _(e, "noLabel", 3, !1), g = _(e, "label", 3, void 0), m = _(e, "value", 15), p = _(e, "key", 3, (R) => R), I = _(e, "dirty", 15, !1), E = _(e, "invalid", 15, a), A = _(e, "updateInvalid", 19, () => s(E())), y = _(e, "required", 3, !1), T = _(e, "inputId", 19, () => "SMUI-select-" + xv++), C = _(e, "hiddenInput", 3, !1), S = _(e, "withLeadingIcon", 3, a), b = _(e, "anchor$use", 19, () => []), w = _(e, "anchor$class", 3, ""), L = _(e, "selectedTextContainer$use", 19, () => []), M = _(e, "selectedTextContainer$class", 3, ""), D = _(e, "selectedText$use", 19, () => []), O = _(e, "selectedText$class", 3, ""), J = _(e, "dropdownIcon$use", 19, () => []), V = _(e, "dropdownIcon$class", 3, ""), U = _(e, "menu$class", 3, ""), H = /* @__PURE__ */ qe(e, [
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
  let de, G = /* @__PURE__ */ oe(void 0), ie = Ae({}), ce = Ae({}), xe, me = Ae({}), q = /* @__PURE__ */ oe(-1);
  const z = /* @__PURE__ */ $(() => H.menu$id ?? T() + "-menu");
  let P = /* @__PURE__ */ oe(void 0), ee = be("SMUI:addLayoutListener"), K, fe = /* @__PURE__ */ oe(!1), Ce = Ae({}), Ue = /* @__PURE__ */ oe(void 0), st = /* @__PURE__ */ oe(void 0), it = /* @__PURE__ */ oe(!1), Pe, At = be("SMUI:select:context"), tn, nn, B, X, ye;
  le("SMUI:list:role", ""), le("SMUI:list:nav", !1);
  const Fe = ar("");
  le("SMUI:select:selectedText", Fe);
  const rn = ar(m());
  Ee(() => {
    rr(rn, m());
  }), le("SMUI:select:value", rn), Ee(() => {
    o(G) && o(G).getValue() !== p()(m()) && o(G).setValue(p()(m()));
  });
  let mn = o(q);
  Ee(() => {
    if (mn !== o(q))
      if (mn = o(q), o(G))
        o(G).setSelectedIndex(
          o(q),
          /* closeMenu */
          !1,
          /* skipNotify */
          !0
        );
      else {
        const R = an();
        m() !== R[o(q)] && m(R[o(q)]);
      }
  }), Ee(() => {
    o(G) && o(G).getDisabled() !== h() && o(G).setDisabled(h());
  }), Ee(() => {
    o(G) && I() && o(G).isValid() !== !E() && (A() ? E(!o(G).isValid()) : o(G).setValid(!E()));
  }), Ee(() => {
    o(G) && o(G).getRequired() !== y() && o(G).setRequired(y());
  }), ee && (K = ee(Xa)), le("SMUI:select:leading-icon:mount", (R) => {
    tn = R;
  }), le("SMUI:select:leading-icon:unmount", () => {
    tn = void 0;
  }), le("SMUI:list:mount", (R) => {
    Pe = R;
  }), le("SMUI:select:helper-text:id", (R) => {
    W(P, R, !0);
  }), le("SMUI:select:helper-text:mount", (R) => {
    nn = R;
  }), le("SMUI:select:helper-text:unmount", () => {
    W(P, void 0), nn = void 0;
  }), et(() => (W(
    G,
    new hv(
      {
        // getSelectAdapterMethods
        // getMenuItemAttr: (menuItem: Element, attr: string) =>
        //   menuItem.getAttribute(attr),
        setSelectedText: (R) => {
          rr(Fe, R);
        },
        isSelectAnchorFocused: () => document.activeElement === xe,
        getSelectAnchorAttr: ot,
        setSelectAnchorAttr: mt,
        removeSelectAnchorAttr: Ft,
        addMenuClass: te,
        removeMenuClass: Te,
        openMenu: () => {
          W(fe, !0);
        },
        closeMenu: () => {
          W(fe, !1);
        },
        getAnchorElement: () => xe,
        setMenuAnchorElement: (R) => {
          W(Ue, R, !0);
        },
        setMenuAnchorCorner: (R) => {
          W(st, R, !0);
        },
        setMenuWrapFocus: (R) => {
          W(it, R, !0);
        },
        getSelectedIndex: () => o(q),
        setSelectedIndex: (R) => {
          mn = R, W(q, R, !0), m(an()[o(q)]);
        },
        focusMenuItemAtIndex: (R) => {
          Pe.focusItemAtIndex(R);
        },
        getMenuItemCount: () => Pe.items.length,
        getMenuItemValues: () => an().map(p()),
        getMenuItemTextAtIndex: (R) => Pe.getPrimaryTextAtIndex(R),
        isTypeaheadInProgress: () => Pe.typeaheadInProgress,
        typeaheadMatchItem: (R, he) => Pe.typeaheadMatchItem(R, he),
        // getCommonAdapterMethods
        addClass: ge,
        removeClass: N,
        hasClass: ur,
        setRippleCenter: (R) => X && X.setRippleCenter(R),
        activateBottomLine: () => X && X.activate(),
        deactivateBottomLine: () => X && X.deactivate(),
        notifyChange: (R) => {
          var he;
          I(!0), A() && E(!((he = o(G)) != null && he.isValid())), We(Lr(), "SMUISelectChange", { value: m(), index: o(q) });
        },
        // getOutlineAdapterMethods
        hasOutline: () => !!ye,
        notchOutline: (R) => ye && ye.notch(R),
        closeOutline: () => ye && ye.closeNotch(),
        // getLabelAdapterMethods
        hasLabel: () => !!B,
        floatLabel: (R) => B && B.float(R),
        getLabelWidth: () => B ? B.getWidth() : 0,
        setLabelRequired: (R) => B && B.setRequired(R)
      },
      {
        get helperText() {
          return nn;
        },
        get leadingIcon() {
          return tn;
        }
      }
    ),
    !0
  ), W(q, an().indexOf(m()), !0), o(G).init(), sn(Q), () => {
    var R;
    (R = o(G)) == null || R.destroy();
  })), Mn(() => {
    K && K();
  });
  function ur(R) {
    return R in ie ? ie[R] : Lr().classList.contains(R);
  }
  function ge(R) {
    ie[R] || (ie[R] = !0);
  }
  function N(R) {
    (!(R in ie) || ie[R]) && (ie[R] = !1);
  }
  function k(R, he) {
    ce[R] != he && (he === "" || he == null ? delete ce[R] : ce[R] = he);
  }
  function te(R) {
    Ce[R] || (Ce[R] = !0);
  }
  function Te(R) {
    (!(R in Ce) || Ce[R]) && (Ce[R] = !1);
  }
  function ot(R) {
    return R in me ? me[R] ?? null : Lr().getAttribute(R);
  }
  function mt(R, he) {
    me[R] !== he && (me[R] = he);
  }
  function Ft(R) {
    (!(R in me) || me[R] != null) && (me[R] = void 0);
  }
  function an() {
    return Pe.getOrderedList().map((R) => R.getValue());
  }
  function Di(R) {
    const he = R.currentTarget.getBoundingClientRect();
    return (ct(R) ? R.touches[0].clientX : R.clientX) - he.left;
  }
  function ct(R) {
    return "touches" in R;
  }
  function Nt() {
    if (o(G) == null)
      throw new Error("Instance is undefined.");
    return o(G).getUseDefaultValidation();
  }
  function sn(R) {
    var he;
    (he = o(G)) == null || he.setUseDefaultValidation(R);
  }
  function Dr() {
    xe.focus();
  }
  function Xa() {
    var R;
    (R = o(G)) == null || R.layout();
  }
  function Lr() {
    return de;
  }
  var He = {
    getUseDefaultValidation: Nt,
    setUseDefaultValidation: sn,
    focus: Dr,
    layout: Xa,
    getElement: Lr
  }, tt = Dv(), Xe = Y(tt);
  Be(Xe, (R, he, rt) => ({ class: R, style: he, ...rt }), [
    () => Ne({
      "mdc-select": !0,
      "mdc-select--required": y(),
      "mdc-select--disabled": h(),
      "mdc-select--filled": f() === "filled",
      "mdc-select--outlined": f() === "outlined",
      "smui-select--standard": f() === "standard",
      "mdc-select--with-leading-icon": s(S()) ? e.leadingIcon : S(),
      "mdc-select--no-label": v() || g() == null,
      "mdc-select--invalid": E(),
      "mdc-select--activated": o(fe),
      "mdc-data-table__pagination-rows-per-page-select": At === "data-table:pagination",
      ...ie,
      [l()]: !0
    }),
    () => Object.entries(ce).map(([R, he]) => `${R}: ${he};`).concat([d()]).join(" "),
    () => Oa(H, [
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
  var Ut = F(Xe);
  {
    var Pn = (R) => {
      var he = wv();
      Be(
        he,
        (rt) => ({
          type: "hidden",
          required: y(),
          disabled: h(),
          value: m(),
          ...rt
        }),
        [() => ut(H, "input$")],
        void 0,
        void 0,
        !0
      ), x(R, he);
    };
    ne(Ut, (R) => {
      C() && R(Pn);
    });
  }
  var nt = j(Ut, 2), It = (R) => {
    var he;
    xe.focus(), o(G) && o(G).handleClick(Di(R)), (he = e.anchor$onclick) == null || he.call(e, R);
  }, Ot = (R) => {
    var he;
    o(G) && o(G).handleKeydown(R), (he = e.onkeydown) == null || he.call(e, R);
  }, Ze = (R) => {
    var he;
    o(G) && o(G).handleBlur(), We(Lr(), "blur", R), (he = e.anchor$onblur) == null || he.call(e, R);
  }, Rt = (R) => {
    var he;
    o(G) && o(G).handleFocus(), We(Lr(), "focus", R), (he = e.anchor$onfocus) == null || he.call(e, R);
  };
  Be(
    nt,
    (R, he) => ({
      class: R,
      "aria-required": y() ? "true" : void 0,
      "aria-disabled": h() ? "true" : void 0,
      "aria-controls": o(z),
      "aria-expanded": o(fe) ? "true" : "false",
      "aria-describedby": o(P),
      role: "combobox",
      tabindex: "0",
      ...me,
      ...he,
      onclick: It,
      onkeydown: Ot,
      onblur: Ze,
      onfocus: Rt
    }),
    [
      () => Ne({ "mdc-select__anchor": !0, [w()]: !0 }),
      () => ut(H, "anchor$")
    ]
  );
  var dr = F(nt);
  {
    var yn = (R) => {
      var he = Tv();
      x(R, he);
    };
    ne(dr, (R) => {
      f() === "filled" && R(yn);
    });
  }
  var bt = j(dr, 2);
  {
    var Ht = (R) => {
      {
        let he = /* @__PURE__ */ $(() => T() + "-smui-label"), rt = /* @__PURE__ */ $(() => t() !== ""), yt = /* @__PURE__ */ $(() => ut(H, "label$"));
        Se(
          ys(R, Je(
            {
              get id() {
                return o(he);
              },
              get floatAbove() {
                return o(rt);
              },
              get required() {
                return y();
              }
            },
            () => o(yt),
            {
              children: (fr, hr) => {
                var va = ae(), Li = Y(va);
                {
                  var ei = (ti) => {
                  }, to = (ti) => {
                    var Ka = ae(), ga = Y(Ka);
                    {
                      var gl = (Rr) => {
                        var ni = Ge();
                        ue(() => Le(ni, g())), x(Rr, ni);
                      }, Ya = (Rr) => {
                        var ni = ae(), no = Y(ni);
                        pe(no, g), x(Rr, ni);
                      };
                      ne(
                        ga,
                        (Rr) => {
                          typeof g() == "string" ? Rr(gl) : Rr(Ya, !1);
                        },
                        !0
                      );
                    }
                    x(ti, Ka);
                  };
                  ne(Li, (ti) => {
                    g() == null ? ti(ei) : ti(to, !1);
                  });
                }
                x(fr, va);
              },
              $$slots: { default: !0 }
            }
          )),
          (fr) => B = fr,
          () => B
        );
      }
    };
    ne(bt, (R) => {
      f() !== "outlined" && !v() && g() != null && R(Ht);
    });
  }
  var Cn = j(bt, 2);
  {
    var jt = (R) => {
      {
        let he = /* @__PURE__ */ $(() => v() || g() == null), rt = /* @__PURE__ */ $(() => ut(H, "outline$"));
        Se(
          Id(R, Je(
            {
              get noLabel() {
                return o(he);
              }
            },
            () => o(rt),
            {
              children: (yt, fr) => {
                var hr = ae(), va = Y(hr);
                {
                  var Li = (ei) => {
                    {
                      let to = /* @__PURE__ */ $(() => T() + "-smui-label"), ti = /* @__PURE__ */ $(() => t() !== ""), Ka = /* @__PURE__ */ $(() => ut(H, "label$"));
                      Se(
                        ys(ei, Je(
                          {
                            get id() {
                              return o(to);
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
                              var Ya = ae(), Rr = Y(Ya);
                              {
                                var ni = (ma) => {
                                }, no = (ma) => {
                                  var ml = ae(), vc = Y(ml);
                                  {
                                    var gc = (Oi) => {
                                      var pa = Ge();
                                      ue(() => Le(pa, g())), x(Oi, pa);
                                    }, mc = (Oi) => {
                                      var pa = ae(), pc = Y(pa);
                                      pe(pc, g), x(Oi, pa);
                                    };
                                    ne(
                                      vc,
                                      (Oi) => {
                                        typeof g() == "string" ? Oi(gc) : Oi(mc, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(ma, ml);
                                };
                                ne(Rr, (ma) => {
                                  g() == null ? ma(ni) : ma(no, !1);
                                });
                              }
                              x(ga, Ya);
                            },
                            $$slots: { default: !0 }
                          }
                        )),
                        (ga) => B = ga,
                        () => B
                      );
                    }
                  };
                  ne(va, (ei) => {
                    !v() && g() != null && ei(Li);
                  });
                }
                x(yt, hr);
              },
              $$slots: { default: !0 }
            }
          )),
          (yt) => ye = yt,
          () => ye
        );
      }
    };
    ne(Cn, (R) => {
      f() === "outlined" && R(jt);
    });
  }
  var Qr = j(Cn, 2);
  pe(Qr, () => e.leadingIcon ?? ve);
  var An = j(Qr, 2);
  Be(An, (R, he) => ({ class: R, ...he }), [
    () => Ne({
      "mdc-select__selected-text-container": !0,
      [M()]: !0
    }),
    () => ut(H, "selectedTextContainer$")
  ]);
  var Or = F(An);
  Be(
    Or,
    (R, he) => ({
      id: T() + "-smui-selected-text",
      class: R,
      role: "button",
      "aria-haspopup": "listbox",
      "aria-labelledby": T() + "-smui-label",
      ...he
    }),
    [
      () => Ne({
        "mdc-select__selected-text": !0,
        [O()]: !0
      }),
      () => ut(H, "selectedText$")
    ]
  );
  var ha = F(Or);
  De(Or, (R, he) => re == null ? void 0 : re(R, he), D), De(An, (R, he) => re == null ? void 0 : re(R, he), L);
  var En = j(An, 2);
  Be(En, (R, he) => ({ class: R, ...he }), [
    () => Ne({
      "mdc-select__dropdown-icon": !0,
      [V()]: !0
    }),
    () => ut(H, "dropdownIcon$")
  ]), De(En, (R, he) => re == null ? void 0 : re(R, he), J);
  var cr = j(En, 2);
  {
    var jn = (R) => {
      {
        let he = /* @__PURE__ */ $(() => ut(H, "ripple$"));
        Se(_d(R, Je(() => o(he))), (rt) => X = rt, () => X);
      }
    };
    ne(cr, (R) => {
      f() !== "outlined" && c() && R(jn);
    });
  }
  Se(nt, (R) => xe = R, () => xe), De(nt, (R, he) => re == null ? void 0 : re(R, he), b);
  var $r = j(nt, 2);
  {
    let R = /* @__PURE__ */ $(() => Ne({
      "mdc-select__menu": !0,
      ...Ce,
      [U()]: !0
    })), he = /* @__PURE__ */ $(() => ut(H, "menu$"));
    pv($r, Je(
      {
        get class() {
          return o(R);
        },
        get id() {
          return o(z);
        },
        fullWidth: !0,
        anchor: !1,
        get anchorElement() {
          return o(Ue);
        },
        get anchorCorner() {
          return o(st);
        }
      },
      () => o(he),
      {
        onSMUIMenuSelected: (rt) => {
          var yt;
          o(G) && o(G).handleMenuItemAction(rt.detail.index), (yt = e.onSMUIMenuSelected) == null || yt.call(e, rt);
        },
        onSMUIMenuSurfaceClosing: (rt) => {
          var yt;
          o(G) && o(G).handleMenuClosing(), (yt = e.onSMUIMenuSurfaceClosing) == null || yt.call(e, rt);
        },
        onSMUIMenuSurfaceClosed: (rt) => {
          var yt;
          o(G) && o(G).handleMenuClosed(), (yt = e.onSMUIMenuSurfaceClosed) == null || yt.call(e, rt);
        },
        onSMUIMenuSurfaceOpened: (rt) => {
          var yt;
          o(G) && o(G).handleMenuOpened(), (yt = e.onSMUIMenuSurfaceOpened) == null || yt.call(e, rt);
        },
        get open() {
          return o(fe);
        },
        set open(rt) {
          W(fe, rt, !0);
        },
        children: (rt, yt) => {
          {
            let fr = /* @__PURE__ */ $(() => ut(H, "list$"));
            _v(rt, Je(
              {
                role: "listbox",
                get wrapFocus() {
                  return o(it);
                }
              },
              () => o(fr),
              {
                get selectedIndex() {
                  return o(q);
                },
                set selectedIndex(hr) {
                  W(q, hr, !0);
                },
                children: (hr, va) => {
                  var Li = ae(), ei = Y(Li);
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
  Se(Xe, (R) => de = R, () => de), De(Xe, (R, he) => Fn == null ? void 0 : Fn(R, he), () => ({
    ripple: f() === "filled",
    unbounded: !1,
    addClass: ge,
    removeClass: N,
    addStyle: k
  })), De(Xe, (R, he) => ho == null ? void 0 : ho(R, he), () => ({ addClass: ge, removeClass: N })), De(Xe, (R, he) => re == null ? void 0 : re(R, he), u);
  var eo = j(Xe, 2);
  {
    var fc = (R) => {
      {
        let he = /* @__PURE__ */ $(() => ut(H, "helperText$"));
        Sv(R, Je(() => o(he), {
          children: (rt, yt) => {
            var fr = ae(), hr = Y(fr);
            pe(hr, () => e.helperText ?? ve), x(rt, fr);
          },
          $$slots: { default: !0 }
        }));
      }
    };
    ne(eo, (R) => {
      e.helperText && R(fc);
    });
  }
  ue(() => Le(ha, t())), x(n, tt);
  var hc = Ie(He);
  return i(), hc;
}
function Ov(n, e) {
  _e(e, !0);
  const t = () => Ci(c, "$selectedValue", r), [r, i] = Ti();
  let a = _(e, "use", 19, () => []);
  _(e, "class", 3, "");
  let s = _(e, "value", 3, ""), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "value",
    "children"
  ]), l;
  const d = be("SMUI:select:selectedText"), c = be("SMUI:select:value");
  le("SMUI:list:item:role", "option");
  const h = /* @__PURE__ */ $(() => s() != null && s() !== "" && t() === s());
  et(f), Mn(f);
  function f() {
    o(h) && l && rr(d, l.getPrimaryText());
  }
  function v() {
    return l.getElement();
  }
  var g = { getElement: v };
  Se(
    Cv(n, Je(
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
      () => u,
      {
        children: (p, I) => {
          var E = ae(), A = Y(E);
          pe(A, () => e.children ?? ve), x(p, E);
        },
        $$slots: { default: !0 }
      }
    )),
    (p) => l = p,
    () => l
  );
  var m = Ie(g);
  return i(), m;
}
function Rv(n, e) {
  _e(e, !0);
  let t = _(e, "data", 19, () => []);
  _(e, "placeholder", 3, "");
  let r = _(e, "label", 3, "");
  _(e, "description", 3, "");
  let i = _(e, "value", 15), a = _(e, "required", 3, !1);
  _(e, "size", 3, "sm");
  let s = _(e, "variant", 3, "standard"), u = _(e, "selectedOptionIndex", 31, () => -1), l = _(e, "disabled", 3, !1);
  function d(c) {
    return () => u(c);
  }
  Lv(n, {
    get disabled() {
      return l();
    },
    key: (c) => `${c ?? ""}`,
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
    set value(c) {
      i(c);
    },
    children: (c, h) => {
      var f = ae(), v = Y(f);
      fn(v, 17, t, Er, (g, m, p) => {
        {
          let I = /* @__PURE__ */ $(() => d(p));
          Ov(g, {
            get onclick() {
              return o(I);
            },
            get value() {
              return o(m).value;
            },
            children: (E, A) => {
              var y = Ge();
              ue(() => Le(y, o(m).label)), x(E, y);
            },
            $$slots: { default: !0 }
          });
        }
      }), x(c, f);
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
var Ke = {
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
}, vo = {
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
var Cs;
(function(n) {
  n.POLL_SCROLL_POS = "poll_scroll_position", n.POLL_LAYOUT_CHANGE = "poll_layout_change";
})(Cs || (Cs = {}));
var Uv = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      var r = n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
        return Ke;
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
        return vo;
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
      this.adapter.hasClass(Ke.STACKED) && this.setAutoStackButtons(!1), this.isFullscreen = this.adapter.hasClass(Ke.FULLSCREEN);
    }, e.prototype.destroy = function() {
      this.animationTimer && (clearTimeout(this.animationTimer), this.handleAnimationTimerEnd()), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.animFrame.cancelAll(), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler);
    }, e.prototype.open = function(t) {
      var r = this;
      this.dialogOpen = !0, this.adapter.notifyOpening(), this.adapter.addClass(Ke.OPENING), this.isFullscreen && this.adapter.registerContentEventHandler("scroll", this.contentScrollHandler), t && t.isAboveFullscreenDialog && this.adapter.addClass(Ke.SCRIM_HIDDEN), this.adapter.registerWindowEventHandler("resize", this.windowResizeHandler), this.adapter.registerWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), this.runNextAnimationFrame(function() {
        r.adapter.addClass(Ke.OPEN), r.adapter.addBodyClass(Ke.SCROLL_LOCK), r.layout(), r.animationTimer = setTimeout(function() {
          r.handleAnimationTimerEnd(), r.adapter.trapFocus(r.adapter.getInitialFocusEl()), r.adapter.notifyOpened();
        }, vo.DIALOG_ANIMATION_OPEN_TIME_MS);
      });
    }, e.prototype.close = function(t) {
      var r = this;
      t === void 0 && (t = ""), this.dialogOpen && (this.dialogOpen = !1, this.adapter.notifyClosing(t), this.adapter.addClass(Ke.CLOSING), this.adapter.removeClass(Ke.OPEN), this.adapter.removeBodyClass(Ke.SCROLL_LOCK), this.isFullscreen && this.adapter.deregisterContentEventHandler("scroll", this.contentScrollHandler), this.adapter.deregisterWindowEventHandler("resize", this.windowResizeHandler), this.adapter.deregisterWindowEventHandler("orientationchange", this.windowOrientationChangeHandler), cancelAnimationFrame(this.animationFrame), this.animationFrame = 0, clearTimeout(this.animationTimer), this.animationTimer = setTimeout(function() {
        r.adapter.releaseFocus(), r.handleAnimationTimerEnd(), r.adapter.notifyClosed(t);
      }, vo.DIALOG_ANIMATION_CLOSE_TIME_MS));
    }, e.prototype.showSurfaceScrim = function() {
      var t = this;
      this.adapter.addClass(Ke.SURFACE_SCRIM_SHOWING), this.runNextAnimationFrame(function() {
        t.adapter.addClass(Ke.SURFACE_SCRIM_SHOWN);
      });
    }, e.prototype.hideSurfaceScrim = function() {
      this.adapter.removeClass(Ke.SURFACE_SCRIM_SHOWN), this.adapter.addClass(Ke.SURFACE_SCRIM_HIDING);
    }, e.prototype.handleSurfaceScrimTransitionEnd = function() {
      this.adapter.removeClass(Ke.SURFACE_SCRIM_HIDING), this.adapter.removeClass(Ke.SURFACE_SCRIM_SHOWING);
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
      this.animFrame.request(Cs.POLL_LAYOUT_CHANGE, function() {
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
      this.animFrame.request(Cs.POLL_SCROLL_POS, function() {
        t.toggleScrollDividerHeader(), t.toggleScrollDividerFooter();
      });
    }, e.prototype.layoutInternal = function() {
      this.autoStackButtons && this.detectStackedButtons(), this.toggleScrollableClasses();
    }, e.prototype.handleAnimationTimerEnd = function() {
      this.animationTimer = 0, this.adapter.removeClass(Ke.OPENING), this.adapter.removeClass(Ke.CLOSING);
    }, e.prototype.runNextAnimationFrame = function(t) {
      var r = this;
      cancelAnimationFrame(this.animationFrame), this.animationFrame = requestAnimationFrame(function() {
        r.animationFrame = 0, clearTimeout(r.animationTimer), r.animationTimer = setTimeout(t, 0);
      });
    }, e.prototype.detectStackedButtons = function() {
      this.adapter.removeClass(Ke.STACKED);
      var t = this.adapter.areButtonsStacked();
      t && this.adapter.addClass(Ke.STACKED), t !== this.areButtonsStacked && (this.adapter.reverseButtons(), this.areButtonsStacked = t);
    }, e.prototype.toggleScrollableClasses = function() {
      this.adapter.removeClass(Ke.SCROLLABLE), this.adapter.isContentScrollable() && (this.adapter.addClass(Ke.SCROLLABLE), this.isFullscreen && (this.toggleScrollDividerHeader(), this.toggleScrollDividerFooter()));
    }, e.prototype.toggleScrollDividerHeader = function() {
      this.adapter.isScrollableContentAtTop() ? this.adapter.hasClass(Ke.SCROLL_DIVIDER_HEADER) && this.adapter.removeClass(Ke.SCROLL_DIVIDER_HEADER) : this.adapter.addClass(Ke.SCROLL_DIVIDER_HEADER);
    }, e.prototype.toggleScrollDividerFooter = function() {
      this.adapter.isScrollableContentAtBottom() ? this.adapter.hasClass(Ke.SCROLL_DIVIDER_FOOTER) && this.adapter.removeClass(Ke.SCROLL_DIVIDER_FOOTER) : this.adapter.addClass(Ke.SCROLL_DIVIDER_FOOTER);
    }, e;
  }(vn)
), Hv = /* @__PURE__ */ Z('<div class="mdc-dialog__surface-scrim"></div>'), Bv = /* @__PURE__ */ Z('<div><div><div><!> <!></div></div> <div class="mdc-dialog__scrim"></div></div> <!>', 1);
function Gv(n, e) {
  _e(e, !0);
  const t = () => Ci(D, "$aboveFullscreenShown", r), [r, i] = Ti(), { FocusTrap: a } = wh, { closest: s, matches: u } = Va;
  let l = _(e, "use", 19, () => []), d = _(e, "class", 3, ""), c = _(e, "open", 15, !1), h = _(e, "selection", 3, !1), f = _(e, "escapeKeyAction", 3, "close"), v = _(e, "scrimClickAction", 3, "close"), g = _(e, "autoStackButtons", 3, !0), m = _(e, "fullscreen", 3, !1), p = _(e, "sheet", 3, !1), I = _(e, "noContentPadding", 3, !1), E = _(e, "container$class", 3, ""), A = _(e, "surface$class", 3, ""), y = /* @__PURE__ */ qe(e, [
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
  ]), T, C = /* @__PURE__ */ oe(void 0), S = new ca(), b = Ae({}), w, L = ar(!1), M = be("SMUI:dialog:aboveFullscreen"), D = be("SMUI:dialog:aboveFullscreenShown") ?? ar(!1), O = be("SMUI:addLayoutListener"), J, V = [], U = (N) => (V.push(N), () => {
    const k = V.indexOf(N);
    k >= 0 && V.splice(k, 1);
  });
  le("SMUI:dialog:actions:reversed", L), le("SMUI:addLayoutListener", U), le("SMUI:dialog:selection", h()), le("SMUI:dialog:aboveFullscreen", M || m()), le("SMUI:dialog:aboveFullscreenShown", D), p() && le("SMUI:icon-button:context", "dialog:sheet"), Ee(() => {
    o(C) && o(C).getEscapeKeyAction() !== f() && o(C).setEscapeKeyAction(f());
  }), Ee(() => {
    o(C) && o(C).getScrimClickAction() !== v() && o(C).setScrimClickAction(v());
  }), Ee(() => {
    o(C) && o(C).getAutoStackButtons() !== g() && o(C).setAutoStackButtons(g());
  }), Ee(() => {
    g() || rr(L, !0);
  }), O && (J = O(fe)), Ee(() => {
    o(C) && o(C).isOpen() !== c() && (c() ? o(C).open({ isAboveFullscreenDialog: !!M }) : o(C).close());
  });
  let H = t();
  Ee(() => {
    m() && o(C) && H !== t() && (H = t(), t() ? o(C).showSurfaceScrim() : o(C).hideSurfaceScrim());
  }), et(() => (w = new a(T, { initialFocusEl: me() ?? void 0 }), W(
    C,
    new Uv({
      addBodyClass: (N) => document.body.classList.add(N),
      addClass: de,
      areButtonsStacked: () => Fv(ie()),
      clickDefaultButton: () => {
        const N = ce();
        N && N.click();
      },
      eventTargetMatches: (N, k) => N ? u(N, k) : !1,
      getActionFromEvent: (N) => {
        if (!N.target)
          return "";
        const k = s(N.target, "[data-mdc-dialog-action]");
        return k && k.getAttribute("data-mdc-dialog-action");
      },
      getInitialFocusEl: me,
      hasClass: Q,
      isContentScrollable: () => Mv(xe()),
      notifyClosed: (N) => {
        c(!1), We(Ce(), "SMUIDialogClosed", N ? { action: N } : {});
      },
      notifyClosing: (N) => We(Ce(), "SMUIDialogClosing", N ? { action: N } : {}),
      notifyOpened: () => We(Ce(), "SMUIDialogOpened", {}),
      notifyOpening: () => We(Ce(), "SMUIDialogOpening", {}),
      releaseFocus: () => w.releaseFocus(),
      removeBodyClass: (N) => document.body.classList.remove(N),
      removeClass: G,
      reverseButtons: () => {
        rr(L, !0);
      },
      trapFocus: () => w.trapFocus(),
      registerContentEventHandler: (N, k) => {
        const te = xe();
        te instanceof HTMLElement && S.on(te, N, k);
      },
      deregisterContentEventHandler: (N, k) => {
        const te = xe();
        te instanceof HTMLElement && S.off(te, N, k);
      },
      isScrollableContentAtTop: () => Pv(xe()),
      isScrollableContentAtBottom: () => kv(xe()),
      registerWindowEventHandler: (N, k) => S.on(window, N, k),
      deregisterWindowEventHandler: (N, k) => S.off(window, N, k)
    }),
    !0
  ), o(C).init(), () => {
    var N;
    (N = o(C)) == null || N.destroy(), S.clear();
  })), Mn(() => {
    J && J();
  });
  function Q(N) {
    return N in b ? b[N] : Ce().classList.contains(N);
  }
  function de(N) {
    b[N] || (b[N] = !0);
  }
  function G(N) {
    (!(N in b) || b[N]) && (b[N] = !1);
  }
  function ie() {
    return [].slice.call(Ce().querySelectorAll(".mdc-dialog__button"));
  }
  function ce() {
    return Ce().querySelector("[data-mdc-dialog-button-default]");
  }
  function xe() {
    return Ce().querySelector(".mdc-dialog__content");
  }
  function me() {
    return Ce().querySelector("[data-mdc-dialog-initial-focus]");
  }
  function q() {
    M && rr(D, !0), requestAnimationFrame(() => {
      V.forEach((N) => N());
    });
  }
  function z() {
    V.forEach((N) => N());
  }
  function P() {
    M && rr(D, !1);
  }
  function ee() {
    return c();
  }
  function K(N) {
    c(N);
  }
  function fe() {
    var N;
    return (N = o(C)) == null ? void 0 : N.layout();
  }
  function Ce() {
    return T;
  }
  var Ue = { isOpen: ee, setOpen: K, layout: fe, getElement: Ce }, st = Bv();
  Xt("resize", ps, () => c() && o(C) && o(C).layout()), Xt("orientationchange", ps, () => c() && o(C) && o(C).layout()), Xt("keydown", Jo.body, (N) => o(C) && o(C).handleDocumentKeydown(N));
  var it = Y(st), Pe = (N) => {
    var k;
    q(), (k = e.onSMUIDialogOpening) == null || k.call(e, N);
  }, At = (N) => {
    var k;
    z(), (k = e.onSMUIDialogOpened) == null || k.call(e, N);
  }, tn = (N) => {
    var k;
    P(), (k = e.onSMUIDialogClosed) == null || k.call(e, N);
  }, nn = (N) => {
    var k;
    o(C) && o(C).handleClick(N), (k = e.onclick) == null || k.call(e, N);
  }, B = (N) => {
    var k;
    o(C) && o(C).handleKeydown(N), (k = e.onkeydown) == null || k.call(e, N);
  };
  Be(
    it,
    (N, k) => ({
      class: N,
      role: "alertdialog",
      "aria-modal": "true",
      ...k,
      onSMUIDialogOpening: Pe,
      onSMUIDialogOpened: At,
      onSMUIDialogClosed: tn,
      onclick: nn,
      onkeydown: B
    }),
    [
      () => Ne({
        "mdc-dialog": !0,
        "mdc-dialog--stacked": !g(),
        "mdc-dialog--fullscreen": m(),
        "mdc-dialog--sheet": p(),
        "mdc-dialog--no-content-padding": I(),
        "smui-dialog--selection": h(),
        ...b,
        [d()]: !0
      }),
      () => Oa(y, ["container$", "surface$"])
    ]
  );
  var X = F(it);
  Be(X, (N, k) => ({ class: N, ...k }), [
    () => Ne({ "mdc-dialog__container": !0, [E()]: !0 }),
    () => ut(y, "container$")
  ]);
  var ye = F(X);
  Be(ye, (N, k) => ({ class: N, role: "alertdialog", "aria-modal": "true", ...k }), [
    () => Ne({ "mdc-dialog__surface": !0, [A()]: !0 }),
    () => ut(y, "surface$")
  ]);
  var Fe = F(ye);
  pe(Fe, () => e.children ?? ve);
  var rn = j(Fe, 2);
  {
    var mn = (N) => {
      var k = Hv();
      Xt("transitionend", k, () => o(C) && o(C).handleSurfaceScrimTransitionEnd()), x(N, k);
    };
    ne(rn, (N) => {
      m() && N(mn);
    });
  }
  Se(it, (N) => T = N, () => T), De(it, (N, k) => re == null ? void 0 : re(N, k), l);
  var ur = j(it, 2);
  pe(ur, () => e.over ?? ve), x(n, st);
  var ge = Ie(Ue);
  return i(), ge;
}
function Vv(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    fa(n, Je(
      {
        _smuiClass: "mdc-dialog__header",
        _smuiContexts: { "SMUI:icon-button:context": "dialog:header" },
        tag: "div"
      },
      () => t,
      {
        children: (s, u) => {
          var l = ae(), d = Y(l);
          pe(d, () => e.children ?? ve), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ie(a);
}
function Ad(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    fa(n, Je({ _smuiClass: "mdc-dialog__content", tag: "div" }, () => t, {
      children: (s, u) => {
        var l = ae(), d = Y(l);
        pe(d, () => e.children ?? ve), x(s, l);
      },
      $$slots: { default: !0 }
    })),
    (s) => r = s,
    () => r
  ), Ie(a);
}
function qv(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "children"]), r;
  function i() {
    return r.getElement();
  }
  var a = { getElement: i };
  return Se(
    fa(n, Je(
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
        children: (s, u) => {
          var l = ae(), d = Y(l);
          pe(d, () => e.children ?? ve), x(s, l);
        },
        $$slots: { default: !0 }
      }
    )),
    (s) => r = s,
    () => r
  ), Ie(a);
}
const Ws = ar({
  component: null,
  props: {},
  isOpen: !1
});
function Wv(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ oe(void 0), r = /* @__PURE__ */ oe(!1);
  const i = Ws.subscribe((l) => {
    W(t, l, !0), W(r, l.isOpen, !0);
  });
  et(() => () => i());
  var a = ae(), s = Y(a);
  {
    var u = (l) => {
      var d = ae(), c = Y(d);
      da(c, () => o(t).component, (h, f) => {
        f(h, Je(() => o(t).props, {
          get open() {
            return o(r);
          },
          set open(v) {
            W(r, v, !0);
          }
        }));
      }), x(l, d);
    };
    ne(s, (l) => {
      o(t).isOpen && o(t).component && l(u);
    });
  }
  x(n, a), Ie();
}
function Ai(n, e = {}) {
  return new Promise((t) => {
    Ws.set({
      component: n,
      props: e,
      isOpen: !0,
      resolve: t
    });
  });
}
function sr(n, e) {
  Ws.update((t) => {
    var r;
    return (r = t.resolve) == null || r.call(t, { type: n, data: e }), { component: null, props: {}, isOpen: !1 };
  });
}
function zv(n) {
  Ws.update((e) => e.isOpen ? { ...e, props: { ...e.props, ...n } } : e);
}
var jv = /* @__PURE__ */ Z('<div class="oscd-confirm-dialog__content svelte-1eipd40"> </div>');
function rl(n, e) {
  _e(e, !0);
  let t = _(e, "open", 15, !1), r = _(e, "title", 3, ""), i = _(e, "message", 3, ""), a = _(e, "confirmActionText", 3, "OK"), s = _(e, "confirmActionColor", 3, "primary"), u = _(e, "cancelActionText", 3, "Cancel"), l = _(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)");
  function d() {
    sr("confirm");
  }
  function c() {
    sr("cancel");
  }
  zs(n, {
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
      return u();
    },
    get color() {
      return l();
    },
    onConfirm: () => d(),
    onCancel: () => c(),
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
      Ad(f, {
        children: (v, g) => {
          var m = jv(), p = F(m);
          ue(() => Le(p, i())), x(v, m);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { content: !0 }
  }), Ie();
}
var Zv = /* @__PURE__ */ Z('<div class="dialog__title svelte-ec2c4h"><h4 class="svelte-ec2c4h"> </h4> <!></div>'), Xv = /* @__PURE__ */ Z("<!> <!>", 1), Kv = /* @__PURE__ */ Z('<!> <!> <div class="dialog__actions svelte-ec2c4h"><!></div>', 1);
function zs(n, e) {
  _e(e, !0);
  let t = _(e, "open", 15, !1), r = _(e, "title", 3, ""), i = _(e, "confirmActionText", 3, "Confirm"), a = _(e, "confirmActionColor", 3, "primary"), s = _(e, "cancelActionText", 3, "Cancel"), u = _(e, "width", 3, "80vw"), l = _(e, "maxWidth", 3, "85vw"), d = _(e, "height", 3, "85vh"), c = _(e, "maxHeight", 3, "85vh"), h = _(e, "confirmDisabled", 3, !1), f = _(e, "color", 3, "var(--mdc-theme-primary, #ff3e00)"), v = _(e, "showCloseButton", 3, !0), g = _(e, "onClose", 3, () => {
  }), m = _(e, "onCancel", 3, () => {
  }), p = _(e, "onConfirm", 3, () => {
  });
  function I(A) {
    A.detail.action === "cancel" ? m()() : A.detail.action === "confirm" ? p()() : (A.detail.action, g()());
  }
  let E = /* @__PURE__ */ $(() => {
    let A;
    return a() === "primary" ? A = f() : A = "#FF203A", h() ? "" : `background-color: ${A}; color: white;`;
  });
  {
    let A = /* @__PURE__ */ $(() => `width: ${u()}; max-width: ${l()}; height: ${d()}; max-height: ${c()};`);
    Gv(n, {
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
        var C = Kv(), S = Y(C);
        Vv(S, {
          children: (M, D) => {
            var O = Zv(), J = F(O), V = F(J), U = j(J, 2);
            {
              var H = (Q) => {
                Od(Q, {
                  onClick: () => {
                    t(!1), g()();
                  },
                  tooltip: "Close",
                  tooltipSide: "left",
                  type: "close",
                  fillColor: "white"
                });
              };
              ne(U, (Q) => {
                v() && Q(H);
              });
            }
            ue(() => {
              $e(O, `background-color: ${f()};`), Le(V, r());
            }), x(M, O);
          },
          $$slots: { default: !0 }
        });
        var b = j(S, 2);
        Ad(b, {
          id: "dialog__content",
          children: (M, D) => {
            var O = ae(), J = Y(O);
            pe(J, () => e.content ?? ve), x(M, O);
          },
          $$slots: { default: !0 }
        });
        var w = j(b, 2), L = F(w);
        qv(L, {
          class: "oscd-dialog__actions",
          children: (M, D) => {
            var O = Xv(), J = Y(O);
            {
              var V = (H) => {
                In(H, {
                  action: "cancel",
                  color: "secondary",
                  tabindex: "1",
                  children: (Q, de) => {
                    var G = Ge();
                    ue(() => Le(G, s())), x(Q, G);
                  },
                  $$slots: { default: !0 }
                });
              };
              ne(J, (H) => {
                s() && H(V);
              });
            }
            var U = j(J, 2);
            In(U, {
              action: "confirm",
              get disabled() {
                return h();
              },
              get style() {
                return o(E);
              },
              tabindex: "0",
              children: (H, Q) => {
                var de = Ge();
                ue(() => Le(de, i())), x(H, de);
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
  Ie();
}
var Yv = /* @__PURE__ */ Z('<span class="oscd-icon"><!></span>');
function Lt(n, e) {
  var t = Yv(), r = F(t);
  pe(r, () => e.children ?? ve), x(n, t);
}
var Jv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M200-440v-80h560v80H200Z"></path></svg>');
function Ed(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Jv();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var Qv = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z"></path></svg>');
function Sd(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Qv();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var $v = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"></path></svg>');
function xd(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = $v();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var eg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z"></path></svg>');
function tg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = eg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var ng = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16 8h-2v3h-3v2h3v3h2v-3h3v-2h-3zM2 12c0-2.79 1.64-5.2 4.01-6.32V3.52C2.52 4.76 0 8.09 0 12s2.52 7.24 6.01 8.48v-2.16C3.64 17.2 2 14.79 2 12zm13-9c-4.96 0-9 4.04-9 9s4.04 9 9 9 9-4.04 9-9-4.04-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"></path></svg>');
function rg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = ng();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var ig = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" width="24" height="24"><path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"></path></svg>');
function wd(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = ig();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
Gc();
var ag = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#004552"><path d="M480-280q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm-40-160h80v-240h-80v240Zm40 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function sg(n) {
  var e = ag();
  x(n, e);
}
var og = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m40-120 440-760 440 760H40Zm138-80h604L480-720 178-200Zm302-40q17 0 28.5-11.5T520-280q0-17-11.5-28.5T480-320q-17 0-28.5 11.5T440-280q0 17 11.5 28.5T480-240Zm-40-120h80v-200h-80v200Zm40-100Z"></path></svg>');
function lg(n, e) {
  let t = _(e, "size", 3, "24px"), r = _(e, "fill", 3, "#004552");
  var i = og();
  ue(() => {
    Ct(i, "height", t()), Ct(i, "width", t()), Ct(i, "fill", r());
  }), x(n, i);
}
var ug = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function dg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = ug();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var cg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960"><path d="m176-120-56-56 301-302-181-45 198-123-17-234 179 151 216-88-87 217 151 178-234-16-124 198-45-181-301 301Zm24-520-80-80 80-80 80 80-80 80Zm355 197 48-79 93 7-60-71 35-86-86 35-71-59 7 92-79 49 90 22 23 90Zm165 323-80-80 80-80 80 80-80 80ZM569-570Z"></path></svg>');
function fg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = cg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var hg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="m770-302-60-62q40-11 65-42.5t25-73.5q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 57-29.5 105T770-302ZM634-440l-80-80h86v80h-6ZM792-56 56-792l56-56 736 736-56 56ZM440-280H280q-83 0-141.5-58.5T80-480q0-69 42-123t108-71l74 74h-24q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h65l79 80H320Z"></path></svg>');
function vg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = hg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var gg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"></path></svg>');
function mg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = gg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var pg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" height="24px"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"></path></svg>');
function _g(n, e) {
  let t = _(e, "svgStyles", 8, "");
  Lt(n, {
    children: (r, i) => {
      var a = pg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var Ig = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3" cursor="pointer"><path d="M440-280h80v-160h160v-80H520v-160h-80v160H280v80h160v160Zm40 200q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"></path></svg>');
function Td(n, e) {
  let t = _(e, "svgStyles", 8, "");
  Lt(n, {
    children: (r, i) => {
      var a = Ig();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var bg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z"></path></svg>');
function Dd(n, e) {
  let t = _(e, "svgStyles", 8, "");
  Lt(n, {
    children: (r, i) => {
      var a = bg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var yg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M360-160q-33 0-56.5-23.5T280-240q0-33 23.5-56.5T360-320q33 0 56.5 23.5T440-240q0 33-23.5 56.5T360-160Zm240 0q-33 0-56.5-23.5T520-240q0-33 23.5-56.5T600-320q33 0 56.5 23.5T680-240q0 33-23.5 56.5T600-160ZM360-400q-33 0-56.5-23.5T280-480q0-33 23.5-56.5T360-560q33 0 56.5 23.5T440-480q0 33-23.5 56.5T360-400Zm240 0q-33 0-56.5-23.5T520-480q0-33 23.5-56.5T600-560q33 0 56.5 23.5T680-480q0 33-23.5 56.5T600-400ZM360-640q-33 0-56.5-23.5T280-720q0-33 23.5-56.5T360-800q33 0 56.5 23.5T440-720q0 33-23.5 56.5T360-640Zm240 0q-33 0-56.5-23.5T520-720q0-33 23.5-56.5T600-800q33 0 56.5 23.5T680-720q0 33-23.5 56.5T600-640Z"></path></svg>');
function il(n, e) {
  let t = _(e, "svgStyles", 3, "fill: gray; width: 25px; height: 25px");
  Lt(n, {
    children: (r, i) => {
      var a = yg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var Cg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"></path></svg>');
function Ag(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Cg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var Eg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"></path></svg>');
function Sg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Eg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var xg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"></path></svg>');
function wg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = xg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
dt(["change"]);
dt(["change"]);
function Tg(n, e, t, r) {
  e() && ((n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()), n.key === "Escape" && (n.preventDefault(), r()));
}
var Dg = /* @__PURE__ */ Z('<span role="button" tabindex="0" aria-labelledby="tooltip"><!></span>');
function Ld(n, e) {
  _e(e, !0);
  let t = _(e, "content", 3, ""), r = _(e, "side", 3, "top"), i = _(e, "hoverDelay", 3, 0), a = _(e, "transitionDuration", 3, 80), s = _(e, "disabled", 3, !1);
  const u = `tt-${Math.random().toString(36).slice(2)}`;
  let l = /* @__PURE__ */ oe(null), d = /* @__PURE__ */ oe(null), c = /* @__PURE__ */ oe(null), h = /* @__PURE__ */ oe(null), f = /* @__PURE__ */ oe(!1), v = /* @__PURE__ */ oe(null), g = /* @__PURE__ */ oe(null);
  function m() {
    !t() || s() || (o(v) && clearTimeout(o(v)), i() > 0 ? W(v, setTimeout(() => W(f, !0), i()), !0) : W(f, !0));
  }
  function p() {
    o(v) && clearTimeout(o(v)), W(f, !1);
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
    if (!o(d) || !o(h) || !o(l) || s()) return;
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
    o(d).style.top = `${M + window.scrollY}px`, o(d).style.left = `${D + window.scrollX}px`;
  }
  function C() {
    var w;
    (w = o(g)) == null || w.disconnect(), W(g, null), o(d) && o(d).parentNode && o(d).parentNode.removeChild(o(d)), W(d, null), W(h, null), W(c, null), o(v) && clearTimeout(o(v));
  }
  Mn(C), Ee(() => {
    if (!(!o(f) || !t() || s())) {
      if (!o(d)) {
        W(d, document.createElement("div"), !0), o(d).style.position = "absolute", o(d).style.zIndex = "9999", o(d).style.pointerEvents = "none", o(d).style.opacity = "0", o(d).style.transition = `opacity ${a()}ms ease`, o(d).id = u, o(d).setAttribute("role", "tooltip"), document.body.appendChild(o(d)), W(c, o(d).attachShadow({ mode: "open" }), !0);
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
      `, o(c).appendChild(w), W(h, document.createElement("div"), !0), o(c).appendChild(o(h)), W(
          g,
          new MutationObserver(() => {
            o(f) && T();
          }),
          !0
        ), o(g).observe(document.body, { childList: !0, subtree: !0 });
      }
      o(h) && (o(h).className = `bubble ${r()}`, o(h).innerHTML = t()), o(d) && (o(d).style.opacity = "1", T());
    }
  }), Ee(() => {
    if (o(f) || !o(d))
      return;
    o(d).style.opacity = "0";
    const w = o(d), L = setTimeout(
      () => {
        w && w.parentNode && w.parentNode.removeChild(w), o(d) === w && C();
      },
      a()
    );
    return () => clearTimeout(L);
  });
  var S = Dg();
  S.__keydown = [Tg, t, m, p];
  var b = F(S);
  pe(b, () => e.children ?? ve), Se(S, (w) => W(l, w), () => o(l)), ue(() => {
    Ct(S, "aria-describedby", t() && !s() ? u : void 0), Ct(S, "aria-haspopup", t() ? "true" : void 0), Ct(S, "aria-expanded", t() ? o(f) ? "true" : "false" : void 0);
  }), Xt("mouseenter", S, I), Xt("mouseleave", S, E), Xt("focus", S, A), Xt("blur", S, y), x(n, S), Ie();
}
dt(["keydown"]);
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
}, Ql = {
  ARIA_SELECTED: "aria-selected",
  ARIA_SORT: "aria-sort"
}, si = {
  ARIA_SELECTED: Ql.ARIA_SELECTED,
  ARIA_SORT: Ql.ARIA_SORT
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
var Lg = (
  /** @class */
  function(n) {
    hn(e, n);
    function e(t) {
      return n.call(this, ze(ze({}, e.defaultAdapter), t)) || this;
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
        s !== i && (this.adapter.removeClassNameByHeaderCellIndex(s, pr.HEADER_CELL_SORTED), this.adapter.removeClassNameByHeaderCellIndex(s, pr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(s, si.ARIA_SORT, _n.NONE), this.adapter.setSortStatusLabelByHeaderCellIndex(s, _n.NONE));
      this.adapter.setClassNameByHeaderCellIndex(i, pr.HEADER_CELL_SORTED);
      var u = this.adapter.getAttributeByHeaderCellIndex(i, si.ARIA_SORT), l = _n.NONE;
      u === _n.ASCENDING ? (this.adapter.setClassNameByHeaderCellIndex(i, pr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, si.ARIA_SORT, _n.DESCENDING), l = _n.DESCENDING) : u === _n.DESCENDING ? (this.adapter.removeClassNameByHeaderCellIndex(i, pr.HEADER_CELL_SORTED_DESCENDING), this.adapter.setAttributeByHeaderCellIndex(i, si.ARIA_SORT, _n.ASCENDING), l = _n.ASCENDING) : (this.adapter.setAttributeByHeaderCellIndex(i, si.ARIA_SORT, _n.ASCENDING), l = _n.ASCENDING), this.adapter.setSortStatusLabelByHeaderCellIndex(i, l), this.adapter.notifySortAction({
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
), Og = /* @__PURE__ */ Z('<div class="mdc-data-table__progress-indicator"><div class="mdc-data-table__scrim"></div> <!></div>'), Rg = /* @__PURE__ */ Z("<div><div><table><!></table></div> <!> <!></div>");
function Mg(n, e) {
  _e(e, !0);
  const t = () => Ci(O, "$progressClosed", r), [r, i] = Ti(), { closest: a } = Va;
  let s = _(e, "use", 19, () => []), u = _(e, "class", 3, ""), l = _(e, "stickyHeader", 3, !1), d = _(e, "sortable", 3, !1), c = _(e, "sort", 15, null), h = _(e, "sortDirection", 15, "ascending"), f = _(e, "sortAscendingAriaLabel", 3, "sorted, ascending"), v = _(e, "sortDescendingAriaLabel", 3, "sorted, descending"), g = _(e, "container$use", 19, () => []), m = _(e, "container$class", 3, ""), p = _(e, "table$use", 19, () => []), I = _(e, "table$class", 3, ""), E = /* @__PURE__ */ qe(e, [
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
  ]), A, y = /* @__PURE__ */ oe(void 0), T, C = /* @__PURE__ */ oe(void 0), S = /* @__PURE__ */ oe(void 0), b = Ae({}), w = /* @__PURE__ */ oe(Ae({ height: "auto", top: "initial" })), L = be("SMUI:addLayoutListener"), M, D = !1, O = ar(!1), J = ar(c());
  Ee(() => {
    rr(J, c());
  });
  let V = ar(h());
  Ee(() => {
    rr(V, h());
  }), le("SMUI:checkbox:context", "data-table"), le("SMUI:linear-progress:context", "data-table"), le("SMUI:linear-progress:closed", O), le("SMUI:data-table:sortable", d()), le("SMUI:data-table:sort", J), le("SMUI:data-table:sortDirection", V), le("SMUI:data-table:sortAscendingAriaLabel", f()), le("SMUI:data-table:sortDescendingAriaLabel", v()), L && (M = L(me));
  let U;
  Ee(() => {
    e.progress && o(y) && U !== t() && (U = t(), t() ? o(y).hideProgress() : o(y).showProgress());
  }), le("SMUI:checkbox:mount", () => {
    o(y) && D && o(y).layout();
  }), le("SMUI:data-table:header:mount", (B) => {
    W(C, B, !0);
  }), le("SMUI:data-table:header:unmount", () => {
    W(C, void 0);
  }), le("SMUI:data-table:body:mount", (B) => {
    W(S, B, !0);
  }), le("SMUI:data-table:body:unmount", () => {
    W(S, void 0);
  }), et(() => (W(
    y,
    new Lg({
      addClass: Q,
      removeClass: de,
      getHeaderCellElements: () => {
        var B;
        return ((B = o(C)) == null ? void 0 : B.cells.map((X) => X.element)) ?? [];
      },
      getHeaderCellCount: () => {
        var B;
        return ((B = o(C)) == null ? void 0 : B.cells.length) ?? 0;
      },
      getAttributeByHeaderCellIndex: (B, X) => {
        var ye;
        return ((ye = o(C)) == null ? void 0 : ye.orderedCells[B].getAttr(X)) ?? null;
      },
      setAttributeByHeaderCellIndex: (B, X, ye) => {
        var Fe;
        (Fe = o(C)) == null || Fe.orderedCells[B].addAttr(X, ye);
      },
      setClassNameByHeaderCellIndex: (B, X) => {
        var ye;
        (ye = o(C)) == null || ye.orderedCells[B].addClass(X);
      },
      removeClassNameByHeaderCellIndex: (B, X) => {
        var ye;
        (ye = o(C)) == null || ye.orderedCells[B].removeClass(X);
      },
      notifySortAction: (B) => {
        c(B.columnId), h(B.sortValue), We(q(), "SMUIDataTableSorted", B);
      },
      getTableContainerHeight: () => T.getBoundingClientRect().height,
      getTableHeaderHeight: () => {
        const B = q().querySelector(".mdc-data-table__header-row");
        if (!B)
          throw new Error("MDCDataTable: Table header element not found.");
        return B.getBoundingClientRect().height;
      },
      setProgressIndicatorStyles: (B) => {
        W(w, B, !0);
      },
      addClassAtRowIndex: (B, X) => {
        var ye;
        (ye = o(S)) == null || ye.orderedRows[B].addClass(X);
      },
      getRowCount: () => {
        var B;
        return ((B = o(S)) == null ? void 0 : B.rows.length) ?? 0;
      },
      getRowElements: () => {
        var B;
        return ((B = o(S)) == null ? void 0 : B.rows.map((X) => X.element)) ?? [];
      },
      getRowIdAtIndex: (B) => {
        var X;
        return ((X = o(S)) == null ? void 0 : X.orderedRows[B].rowId) ?? null;
      },
      getRowIndexByChildElement: (B) => {
        var X;
        return ((X = o(S)) == null ? void 0 : X.orderedRows.map((ye) => ye.element).indexOf(a(B, ".mdc-data-table__row"))) ?? -1;
      },
      getSelectedRowCount: () => {
        var B;
        return ((B = o(S)) == null ? void 0 : B.rows.filter((X) => X.selected).length) ?? 0;
      },
      isCheckboxAtRowIndexChecked: (B) => {
        var ye;
        const X = (ye = o(S)) == null ? void 0 : ye.orderedRows[B].checkbox;
        return X ? X.checked : !1;
      },
      isHeaderRowCheckboxChecked: () => {
        var X;
        const B = (X = o(C)) == null ? void 0 : X.checkbox;
        return B ? B.checked : !1;
      },
      isRowsSelectable: () => !!q().querySelector(".mdc-data-table__row-checkbox") || !!q().querySelector(".mdc-data-table__header-row-checkbox"),
      notifyRowSelectionChanged: (B) => {
        var ye;
        const X = (ye = o(S)) == null ? void 0 : ye.orderedRows[B.rowIndex];
        X && We(q(), "SMUIDataTableSelectionChanged", {
          row: X.element,
          rowId: X.rowId,
          rowIndex: B.rowIndex,
          selected: B.selected
        });
      },
      notifySelectedAll: () => {
        G(!1), We(q(), "SMUIDataTableSelectedAll");
      },
      notifyUnselectedAll: () => {
        G(!1), We(q(), "SMUIDataTableUnselectedAll");
      },
      notifyRowClick: (B) => We(q(), "SMUIDataTableClickRow", B),
      registerHeaderRowCheckbox: () => {
      },
      registerRowCheckboxes: () => {
      },
      removeClassAtRowIndex: (B, X) => {
        var ye;
        (ye = o(S)) == null || ye.orderedRows[B].removeClass(X);
      },
      setAttributeAtRowIndex: (B, X, ye) => {
        var Fe;
        (Fe = o(S)) == null || Fe.orderedRows[B].addAttr(X, ye);
      },
      setHeaderRowCheckboxChecked: (B) => {
        var ye;
        const X = (ye = o(C)) == null ? void 0 : ye.checkbox;
        X && (X.checked = B);
      },
      setHeaderRowCheckboxIndeterminate: G,
      setRowCheckboxCheckedAtIndex: (B, X) => {
        var Fe;
        const ye = (Fe = o(S)) == null ? void 0 : Fe.orderedRows[B].checkbox;
        ye && (ye.checked = X);
      },
      setSortStatusLabelByHeaderCellIndex: (B, X) => {
      }
    }),
    !0
  ), o(y).init(), o(y).layout(), D = !0, () => {
    var B;
    (B = o(y)) == null || B.destroy();
  })), Mn(() => {
    M && M();
  });
  function H(B) {
    o(y) && o(y).handleRowCheckboxChange(B);
  }
  function Q(B) {
    b[B] || (b[B] = !0);
  }
  function de(B) {
    (!(B in b) || b[B]) && (b[B] = !1);
  }
  function G(B) {
    var ye;
    const X = (ye = o(C)) == null ? void 0 : ye.checkbox;
    X && (X.indeterminate = B);
  }
  function ie(B) {
    if (!o(y) || !B.detail.target)
      return;
    const X = a(B.detail.target, ".mdc-data-table__header-cell--with-sort");
    X && xe(X);
  }
  function ce(B) {
    if (!o(y) || !B.detail.target)
      return;
    const X = a(B.detail.target, ".mdc-data-table__row");
    X && o(y) && o(y).handleRowClick({ rowId: B.detail.rowId, row: X });
  }
  function xe(B) {
    var rn, mn;
    const X = ((rn = o(C)) == null ? void 0 : rn.orderedCells) ?? [], ye = X.map((ur) => ur.element).indexOf(B);
    if (ye === -1)
      return;
    const Fe = X[ye].columnId ?? null;
    (mn = o(y)) == null || mn.handleSortAction({ columnId: Fe, columnIndex: ye, headerCell: B });
  }
  function me() {
    var B;
    return (B = o(y)) == null ? void 0 : B.layout();
  }
  function q() {
    return A;
  }
  var z = { layout: me, getElement: q }, P = Rg(), ee = (B) => {
    var X;
    o(y) && o(y).handleHeaderRowCheckboxChange(), (X = e.onSMUIDataTableHeaderCheckboxChange) == null || X.call(e, B);
  }, K = (B) => {
    var X;
    ie(B), (X = e.onSMUIDataTableHeaderClick) == null || X.call(e, B);
  }, fe = (B) => {
    var X;
    ce(B), (X = e.onSMUIDataTableRowClick) == null || X.call(e, B);
  }, Ce = (B) => {
    var X;
    H(B), (X = e.onSMUIDataTableBodyCheckboxChange) == null || X.call(e, B);
  };
  Be(
    P,
    (B, X) => ({
      class: B,
      ...X,
      onSMUIDataTableHeaderCheckboxChange: ee,
      onSMUIDataTableHeaderClick: K,
      onSMUIDataTableRowClick: fe,
      onSMUIDataTableBodyCheckboxChange: Ce
    }),
    [
      () => Ne({
        "mdc-data-table": !0,
        "mdc-data-table--sticky-header": l(),
        ...b,
        [u()]: !0
      }),
      () => Oa(E, ["container$", "table$"])
    ]
  );
  var Ue = F(P);
  Be(Ue, (B, X) => ({ class: B, ...X }), [
    () => Ne({
      "mdc-data-table__table-container": !0,
      [m()]: !0
    }),
    () => ut(E, "container$")
  ]);
  var st = F(Ue);
  Be(st, (B, X) => ({ class: B, ...X }), [
    () => Ne({ "mdc-data-table__table": !0, [I()]: !0 }),
    () => ut(E, "table$")
  ]);
  var it = F(st);
  pe(it, () => e.children ?? ve), De(st, (B, X) => re == null ? void 0 : re(B, X), p), Se(Ue, (B) => T = B, () => T), De(Ue, (B, X) => re == null ? void 0 : re(B, X), g);
  var Pe = j(Ue, 2);
  {
    var At = (B) => {
      var X = Og(), ye = j(F(X), 2);
      pe(ye, () => e.progress ?? ve), ue((Fe) => $e(X, Fe), [
        () => Object.entries(o(w)).map(([Fe, rn]) => `${Fe}: ${rn};`).join(" ")
      ]), x(B, X);
    };
    ne(Pe, (B) => {
      e.progress && B(At);
    });
  }
  var tn = j(Pe, 2);
  pe(tn, () => e.paginate ?? ve), Se(P, (B) => A = B, () => A), De(P, (B, X) => re == null ? void 0 : re(B, X), s), x(n, P);
  var nn = Ie(z);
  return i(), nn;
}
var Pg = /* @__PURE__ */ Z("<thead><!></thead>");
function kg(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = /* @__PURE__ */ qe(e, ["$$slots", "$$events", "$$legacy", "use", "children"]), i, a = /* @__PURE__ */ oe(void 0), s = [];
  const u = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !0);
  const l = be("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (I) => {
    W(a, I, !0), l && l(I);
  });
  const d = be("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (I) => {
    W(a, void 0), d && d(I);
  }), le("SMUI:data-table:cell:mount", (I) => {
    s.push(I), u.set(I.element, I);
  }), le("SMUI:data-table:cell:unmount", (I) => {
    const E = s.findIndex((A) => A === I);
    E !== -1 && s.splice(E, 1), u.delete(I.element);
  });
  const c = be("SMUI:data-table:header:mount"), h = be("SMUI:data-table:header:unmount");
  et(() => {
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
    return c && c(I), () => {
      h && h(I);
    };
  });
  function f() {
    return [
      ...v().querySelectorAll(".mdc-data-table__header-cell")
    ].map((I) => u.get(I)).filter((I) => I && I._smui_data_table_header_cell_accessor);
  }
  function v() {
    return i;
  }
  var g = { getElement: v }, m = Pg();
  Be(m, () => ({ ...r }));
  var p = F(m);
  return pe(p, () => e.children ?? ve), Se(m, (I) => i = I, () => i), De(m, (I, E) => re == null ? void 0 : re(I, E), t), x(n, m), Ie(g);
}
var Fg = /* @__PURE__ */ Z("<tbody><!></tbody>");
function Ng(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "children"
  ]), a, s = [];
  const u = /* @__PURE__ */ new WeakMap();
  le("SMUI:data-table:row:header", !1), le("SMUI:data-table:row:mount", (m) => {
    s.push(m), u.set(m.element, m);
  }), le("SMUI:data-table:row:unmount", (m) => {
    const p = s.findIndex((I) => I === m);
    p !== -1 && s.splice(p, 1), u.delete(m.element);
  });
  const l = be("SMUI:data-table:body:mount"), d = be("SMUI:data-table:body:unmount");
  et(() => {
    const m = {
      get rows() {
        return s;
      },
      get orderedRows() {
        return c();
      }
    };
    return l && l(m), () => {
      d && d(m);
    };
  });
  function c() {
    return [...h().querySelectorAll(".mdc-data-table__row")].map((m) => u.get(m)).filter((m) => m && m._smui_data_table_row_accessor);
  }
  function h() {
    return a;
  }
  var f = { getElement: h }, v = Fg();
  Be(v, (m) => ({ class: m, ...i }), [
    () => Ne({ "mdc-data-table__content": !0, [r()]: !0 })
  ]);
  var g = F(v);
  return pe(g, () => e.children ?? ve), Se(v, (m) => a = m, () => a), De(v, (m, p) => re == null ? void 0 : re(m, p), t), x(n, v), Ie(f);
}
let Ug = 0;
var Hg = /* @__PURE__ */ Z("<tr><!></tr>");
function $l(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "rowId", 19, () => "SMUI-data-table-row-" + Ug++), a = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "rowId",
    "children"
  ]), s, u = /* @__PURE__ */ oe(void 0), l = Ae({}), d = Ae({}), c = be("SMUI:data-table:row:header");
  const h = be("SMUI:checkbox:mount");
  le("SMUI:checkbox:mount", (L) => {
    W(u, L, !0), h && h(L);
  });
  const f = be("SMUI:checkbox:unmount");
  le("SMUI:checkbox:unmount", (L) => {
    W(u, void 0), f && f(L);
  });
  const v = be("SMUI:data-table:row:mount"), g = be("SMUI:data-table:row:unmount");
  et(() => {
    const L = c ? {
      _smui_data_table_row_accessor: !1,
      get element() {
        return T();
      },
      get checkbox() {
        return o(u);
      },
      get rowId() {
      },
      get selected() {
        return (o(u) && o(u).checked) ?? !1;
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
        return o(u);
      },
      get rowId() {
        return i();
      },
      get selected() {
        return (o(u) && o(u).checked) ?? !1;
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
    return L in d ? d[L] ?? null : T().getAttribute(L);
  }
  function E(L, M) {
    d[L] !== M && (d[L] = M);
  }
  function A(L) {
    We(T(), "SMUIDataTableHeaderClick", L);
  }
  function y(L) {
    We(T(), "SMUIDataTableRowClick", { rowId: i(), target: L.target });
  }
  function T() {
    return s;
  }
  var C = { getElement: T }, S = Hg(), b = (L) => {
    var M;
    c ? A(L) : y(L), (M = e.onclick) == null || M.call(e, L);
  };
  Be(
    S,
    (L) => ({
      class: L,
      "aria-selected": o(u) ? o(u).checked ? "true" : "false" : void 0,
      ...d,
      ...a,
      onclick: b
    }),
    [
      () => Ne({
        "mdc-data-table__header-row": c,
        "mdc-data-table__row": !c,
        "mdc-data-table__row--selected": !c && o(u) && o(u).checked,
        ...l,
        [r()]: !0
      })
    ]
  );
  var w = F(S);
  return pe(w, () => e.children ?? ve), Se(S, (L) => s = L, () => s), De(S, (L, M) => re == null ? void 0 : re(L, M), t), x(n, S), Ie(C);
}
let Bg = 0;
var Gg = /* @__PURE__ */ Z('<div class="mdc-data-table__header-cell-wrapper"><!> <div class="mdc-data-table__sort-status-label" aria-hidden="true"> </div></div>'), Vg = /* @__PURE__ */ Z("<th><!></th>"), qg = /* @__PURE__ */ Z("<td><!></td>");
function rs(n, e) {
  _e(e, !0);
  const t = () => Ci(I, "$sort", i), r = () => Ci(E, "$sortDirection", i), [i, a] = Ti();
  let s = be("SMUI:data-table:row:header"), u = _(e, "use", 19, () => []), l = _(e, "class", 3, ""), d = _(e, "numeric", 3, !1), c = _(e, "checkbox", 3, !1), h = _(e, "columnId", 19, () => s ? "SMUI-data-table-column-" + Bg++ : "SMUI-data-table-unused"), f = _(e, "sortable", 19, () => be("SMUI:data-table:sortable")), v = /* @__PURE__ */ qe(e, [
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
  ]), g, m = Ae({}), p = Ae({}), I = be("SMUI:data-table:sort"), E = be("SMUI:data-table:sortDirection"), A = be("SMUI:data-table:sortAscendingAriaLabel"), y = be("SMUI:data-table:sortDescendingAriaLabel");
  f() && (le("SMUI:label:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:context", "data-table:sortable-header-cell"), le("SMUI:icon-button:aria-describedby", h() + "-status-label"));
  const T = be("SMUI:data-table:cell:mount"), C = be("SMUI:data-table:cell:unmount");
  et(() => {
    const G = s ? {
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
    return T && T(G), () => {
      C && C(G);
    };
  });
  function S(G) {
    m[G] || (m[G] = !0);
  }
  function b(G) {
    (!(G in m) || m[G]) && (m[G] = !1);
  }
  function w(G) {
    return G in p ? p[G] ?? null : O().getAttribute(G);
  }
  function L(G, ie) {
    p[G] !== ie && (p[G] = ie);
  }
  function M(G) {
    We(O(), "SMUIDataTableHeaderCheckboxChange", G);
  }
  function D(G) {
    We(O(), "SMUIDataTableBodyCheckboxChange", G);
  }
  function O() {
    return g;
  }
  var J = { getElement: O }, V = ae(), U = Y(V);
  {
    var H = (G) => {
      var ie = Vg(), ce = (z) => {
        var P;
        c() && M(z), (P = e.onchange) == null || P.call(e, z);
      };
      Be(
        ie,
        (z) => ({
          class: z,
          role: "columnheader",
          scope: "col",
          "data-column-id": h(),
          "aria-sort": f() ? t() === h() ? r() : "none" : void 0,
          ...p,
          ...v,
          onchange: ce
        }),
        [
          () => Ne({
            "mdc-data-table__header-cell": !0,
            "mdc-data-table__header-cell--numeric": d(),
            "mdc-data-table__header-cell--checkbox": c(),
            "mdc-data-table__header-cell--with-sort": f(),
            "mdc-data-table__header-cell--sorted": f() && t() === h(),
            ...m,
            [l()]: !0
          })
        ]
      );
      var xe = F(ie);
      {
        var me = (z) => {
          var P = Gg(), ee = F(P);
          pe(ee, () => e.children ?? ve);
          var K = j(ee, 2), fe = F(K);
          ue(() => {
            Ct(K, "id", `${h() ?? ""}-status-label`), Le(fe, t() === h() ? r() === "ascending" ? A : y : "");
          }), x(z, P);
        }, q = (z) => {
          var P = ae(), ee = Y(P);
          pe(ee, () => e.children ?? ve), x(z, P);
        };
        ne(xe, (z) => {
          f() ? z(me) : z(q, !1);
        });
      }
      Se(ie, (z) => g = z, () => g), De(ie, (z, P) => re == null ? void 0 : re(z, P), u), x(G, ie);
    }, Q = (G) => {
      var ie = qg(), ce = (me) => {
        var q;
        c() && D(me), (q = e.onchange) == null || q.call(e, me);
      };
      Be(
        ie,
        (me) => ({
          class: me,
          ...p,
          ...v,
          onchange: ce
        }),
        [
          () => Ne({
            "mdc-data-table__cell": !0,
            "mdc-data-table__cell--numeric": d(),
            "mdc-data-table__cell--checkbox": c(),
            ...m,
            [l()]: !0
          })
        ]
      );
      var xe = F(ie);
      pe(xe, () => e.children ?? ve), Se(ie, (me) => g = me, () => g), De(ie, (me, q) => re == null ? void 0 : re(me, q), u), x(G, ie);
    };
    ne(U, (G) => {
      s ? G(H) : G(Q, !1);
    });
  }
  x(n, V);
  var de = Ie(J);
  return a(), de;
}
var Wg = /* @__PURE__ */ Z('<p class="status svelte-185z1ay">Loading…</p>'), zg = /* @__PURE__ */ Z('<p class="status error svelte-185z1ay"> </p>'), jg = /* @__PURE__ */ Z('<p class="status svelte-185z1ay"> </p>'), Zg = /* @__PURE__ */ Z("<!> <!>", 1), Xg = /* @__PURE__ */ Z("<!> <!>", 1), Kg = /* @__PURE__ */ Z("<!> <!>", 1);
function Yg(n, e) {
  _e(e, !0);
  let t = _(e, "items", 19, () => []), r = _(e, "columns", 19, () => []), i = _(e, "loading", 3, !1), a = _(e, "errorMsg", 3, ""), s = _(e, "emptyText", 3, "Nothing to show."), u = _(e, "getRowId", 3, (p, I) => (p && (p.id ?? p.key)) ?? I), l = _(e, "headerBg", 3, null), d = _(e, "rowBg", 3, null), c = _(e, "hasActions", 3, !1), h = /* @__PURE__ */ $(() => c() || !!e.actions);
  var f = ae(), v = Y(f);
  {
    var g = (p) => {
      var I = Wg();
      x(p, I);
    }, m = (p) => {
      var I = ae(), E = Y(I);
      {
        var A = (T) => {
          var C = zg(), S = F(C);
          ue(() => Le(S, a())), x(T, C);
        }, y = (T) => {
          var C = ae(), S = Y(C);
          {
            var b = (L) => {
              var M = jg(), D = F(M);
              ue(() => Le(D, s())), x(L, M);
            }, w = (L) => {
              Mg(L, {
                style: "width: 100%;",
                children: (M, D) => {
                  var O = Kg(), J = Y(O);
                  {
                    let U = /* @__PURE__ */ $(() => l() ? `background-color:${l()}` : void 0);
                    kg(J, {
                      get style() {
                        return o(U);
                      },
                      children: (H, Q) => {
                        $l(H, {
                          children: (de, G) => {
                            var ie = Zg(), ce = Y(ie);
                            fn(ce, 17, r, Er, (q, z) => {
                              {
                                let P = /* @__PURE__ */ $(() => [
                                  o(z).width ? `width:${o(z).width}` : "",
                                  l() ? `background-color:${l()}` : ""
                                ].filter(Boolean).join(";"));
                                rs(q, {
                                  header: !0,
                                  get style() {
                                    return o(P);
                                  },
                                  children: (ee, K) => {
                                    var fe = Ge();
                                    ue(() => Le(fe, o(z).header)), x(ee, fe);
                                  },
                                  $$slots: { default: !0 }
                                });
                              }
                            });
                            var xe = j(ce, 2);
                            {
                              var me = (q) => {
                                {
                                  let z = /* @__PURE__ */ $(() => l() ? `background-color:${l()}` : void 0);
                                  rs(q, {
                                    header: !0,
                                    get style() {
                                      return o(z);
                                    }
                                  });
                                }
                              };
                              ne(xe, (q) => {
                                o(h) && q(me);
                              });
                            }
                            x(de, ie);
                          },
                          $$slots: { default: !0 }
                        });
                      },
                      $$slots: { default: !0 }
                    });
                  }
                  var V = j(J, 2);
                  Ng(V, {
                    children: (U, H) => {
                      var Q = ae(), de = Y(Q);
                      fn(de, 19, t, (G, ie) => u()(G, ie), (G, ie) => {
                        {
                          let ce = /* @__PURE__ */ $(() => d() ? `background-color:${d()}` : void 0);
                          $l(G, {
                            get style() {
                              return o(ce);
                            },
                            children: (xe, me) => {
                              var q = Xg(), z = Y(q);
                              fn(z, 17, r, Er, (K, fe) => {
                                {
                                  let Ce = /* @__PURE__ */ $(() => o(fe).bold ? "cell-bold" : "");
                                  rs(K, {
                                    get class() {
                                      return o(Ce);
                                    },
                                    onclick: () => {
                                      var Ue;
                                      return (Ue = e.onRowClick) == null ? void 0 : Ue.call(e, o(ie));
                                    },
                                    children: (Ue, st) => {
                                      var it = Ge();
                                      ue(() => {
                                        var Pe;
                                        return Le(it, ((Pe = o(ie)) == null ? void 0 : Pe[o(fe).key]) ?? "");
                                      }), x(Ue, it);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                }
                              });
                              var P = j(z, 2);
                              {
                                var ee = (K) => {
                                  rs(K, {
                                    numeric: !0,
                                    children: (fe, Ce) => {
                                      var Ue = ae(), st = Y(Ue);
                                      pe(st, () => e.actions ?? ve, () => ({ item: o(ie) })), x(fe, Ue);
                                    },
                                    $$slots: { default: !0 }
                                  });
                                };
                                ne(P, (K) => {
                                  o(h) && K(ee);
                                });
                              }
                              x(xe, q);
                            },
                            $$slots: { default: !0 }
                          });
                        }
                      }), x(U, Q);
                    },
                    $$slots: { default: !0 }
                  }), x(M, O);
                },
                $$slots: { default: !0 }
              });
            };
            ne(
              S,
              (L) => {
                !t() || t().length === 0 ? L(b) : L(w, !1);
              },
              !0
            );
          }
          x(T, C);
        };
        ne(
          E,
          (T) => {
            a() ? T(A) : T(y, !1);
          },
          !0
        );
      }
      x(p, I);
    };
    ne(v, (p) => {
      i() ? p(g) : p(m, !1);
    });
  }
  x(n, f), Ie();
}
var Jg = /* @__PURE__ */ ft('<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"></path></svg>');
function Qg(n, e) {
  let t = _(e, "svgStyles", 3, "");
  Lt(n, {
    children: (r, i) => {
      var a = Jg();
      ue(() => $e(a, t())), x(r, a);
    }
  });
}
var $g = /* @__PURE__ */ Z('<span class="secondary-label svelte-17mxdlc"> </span>'), em = /* @__PURE__ */ Z('<div class="separator svelte-17mxdlc"><!></div>'), tm = /* @__PURE__ */ Z('<div class="breadcrumb-wrapper svelte-17mxdlc"><button type="button"><span class="label svelte-17mxdlc"> </span> <!></button> <!></div>'), nm = /* @__PURE__ */ Z('<nav class="oscd-breadcrumbs svelte-17mxdlc" aria-label="Breadcrumb"></nav>');
function rm(n, e) {
  _e(e, !0);
  let t = _(e, "breadcrumbs", 19, () => []), r = _(e, "activeIndex", 3, 0);
  const i = (s) => {
    var l;
    const u = t()[s];
    !(u != null && u.enabled) || s === r() || (l = e.handleClick) == null || l.call(e, s);
  };
  var a = nm();
  fn(a, 21, t, Er, (s, u, l) => {
    var d = tm(), c = F(d);
    let h;
    c.__click = () => i(l);
    let f;
    var v = F(c), g = F(v), m = j(v, 2);
    {
      var p = (A) => {
        var y = $g();
        let T;
        var C = F(y);
        ue(
          (S) => {
            T = $e(y, "", T, S), Le(C, o(u).secondaryLabel);
          },
          [() => ({ color: e.color ? e.color : null })]
        ), x(A, y);
      };
      ne(m, (A) => {
        o(u).secondaryLabel && A(p);
      });
    }
    var I = j(c, 2);
    {
      var E = (A) => {
        var y = em(), T = F(y);
        {
          let C = /* @__PURE__ */ $(() => e.color ? e.color : "#004552");
          Qg(T, {
            get svgStyles() {
              return `fill: ${o(C) ?? ""}`;
            }
          });
        }
        x(A, y);
      };
      ne(I, (A) => {
        l < t().length - 1 && A(E);
      });
    }
    ue(
      (A, y) => {
        h = Sr(c, 1, "breadcrumb svelte-17mxdlc", null, h, A), Ct(c, "aria-current", l === r() ? "page" : void 0), Ct(c, "aria-disabled", o(u).enabled ? void 0 : "true"), f = $e(c, "", f, y), Le(g, o(u).label);
      },
      [
        () => ({
          "br-disabled": !o(u).enabled,
          "br-active": l === r()
        }),
        () => ({ color: e.color ? e.color : null })
      ]
    ), x(s, d);
  }), x(n, a), Ie();
}
dt(["click"]);
var im = (n, e) => {
  var t;
  n.stopPropagation(), (t = e.onClick) == null || t.call(e, n);
}, am = /* @__PURE__ */ Z('<button class="icon-button svelte-jv2py4"><!></button>');
function Od(n, e) {
  _e(e, !0);
  let t = _(e, "tooltipSide", 3, "top"), r = _(e, "showDelay", 3, 1e3), i = _(e, "fillColor", 3, "var(--mdc-theme-primary)"), a = _(e, "size", 3, "25px"), s = /* @__PURE__ */ $(() => `fill: ${i()}; margin: 0; width: ${a()}; height: ${a()};`);
  Ld(n, {
    get content() {
      return e.tooltip;
    },
    get hoverDelay() {
      return r();
    },
    get side() {
      return t();
    },
    children: (u, l) => {
      var d = am();
      d.__click = [im, e];
      var c = F(d);
      {
        var h = (v) => {
          xd(v, {
            get svgStyles() {
              return o(s);
            }
          });
        }, f = (v) => {
          var g = ae(), m = Y(g);
          {
            var p = (E) => {
              rg(E, {
                get svgStyles() {
                  return o(s);
                }
              });
            }, I = (E) => {
              var A = ae(), y = Y(A);
              {
                var T = (S) => {
                  Sd(S, {
                    get svgStyles() {
                      return o(s);
                    }
                  });
                }, C = (S) => {
                  var b = ae(), w = Y(b);
                  {
                    var L = (D) => {
                      tg(D, {
                        get svgStyles() {
                          return o(s);
                        }
                      });
                    }, M = (D) => {
                      var O = ae(), J = Y(O);
                      {
                        var V = (H) => {
                          fg(H, {
                            get svgStyles() {
                              return o(s);
                            }
                          });
                        }, U = (H) => {
                          var Q = ae(), de = Y(Q);
                          {
                            var G = (ce) => {
                              vg(ce, {
                                get svgStyles() {
                                  return o(s);
                                }
                              });
                            }, ie = (ce) => {
                              var xe = ae(), me = Y(xe);
                              {
                                var q = (P) => {
                                  mg(P, {
                                    get svgStyles() {
                                      return o(s);
                                    }
                                  });
                                }, z = (P) => {
                                  var ee = ae(), K = Y(ee);
                                  {
                                    var fe = (Ue) => {
                                      _g(Ue, {
                                        get svgStyles() {
                                          return o(s);
                                        }
                                      });
                                    }, Ce = (Ue) => {
                                      var st = Ge();
                                      ue(() => Le(st, `Unsupported supported type: ${e.type ?? ""}`)), x(Ue, st);
                                    };
                                    ne(
                                      K,
                                      (Ue) => {
                                        e.type === "star" ? Ue(fe) : Ue(Ce, !1);
                                      },
                                      !0
                                    );
                                  }
                                  x(P, ee);
                                };
                                ne(
                                  me,
                                  (P) => {
                                    e.type === "close" ? P(q) : P(z, !1);
                                  },
                                  !0
                                );
                              }
                              x(ce, xe);
                            };
                            ne(
                              de,
                              (ce) => {
                                e.type === "link-off" ? ce(G) : ce(ie, !1);
                              },
                              !0
                            );
                          }
                          x(H, Q);
                        };
                        ne(
                          J,
                          (H) => {
                            e.type === "wand-stars" ? H(V) : H(U, !1);
                          },
                          !0
                        );
                      }
                      x(D, O);
                    };
                    ne(
                      w,
                      (D) => {
                        e.type === "visibility" ? D(L) : D(M, !1);
                      },
                      !0
                    );
                  }
                  x(S, b);
                };
                ne(
                  y,
                  (S) => {
                    e.type === "edit" ? S(T) : S(C, !1);
                  },
                  !0
                );
              }
              x(E, A);
            };
            ne(
              m,
              (E) => {
                e.type === "duplicate" ? E(p) : E(I, !1);
              },
              !0
            );
          }
          x(v, g);
        };
        ne(c, (v) => {
          e.type === "delete" ? v(h) : v(f, !1);
        });
      }
      ue(() => Ct(d, "aria-label", e.tooltip)), x(u, d);
    },
    $$slots: { default: !0 }
  }), Ie();
}
dt(["click"]);
function eu(n, e) {
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
    e % 2 ? eu(Object(t), !0).forEach(function(r) {
      ia(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : eu(Object(t)).forEach(function(r) {
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
  return dm(n) || fm(n, e) || al(n, e) || vm();
}
function Ln(n) {
  return um(n) || cm(n) || al(n) || hm();
}
function um(n) {
  if (Array.isArray(n)) return ko(n);
}
function dm(n) {
  if (Array.isArray(n)) return n;
}
function cm(n) {
  if (typeof Symbol < "u" && n[Symbol.iterator] != null || n["@@iterator"] != null) return Array.from(n);
}
function fm(n, e) {
  var t = n == null ? null : typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (t != null) {
    var r = [], i = !0, a = !1, s, u;
    try {
      for (t = t.call(n); !(i = (s = t.next()).done) && (r.push(s.value), !(e && r.length === e)); i = !0)
        ;
    } catch (l) {
      a = !0, u = l;
    } finally {
      try {
        !i && t.return != null && t.return();
      } finally {
        if (a) throw u;
      }
    }
    return r;
  }
}
function al(n, e) {
  if (n) {
    if (typeof n == "string") return ko(n, e);
    var t = Object.prototype.toString.call(n).slice(8, -1);
    if (t === "Object" && n.constructor && (t = n.constructor.name), t === "Map" || t === "Set") return Array.from(n);
    if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)) return ko(n, e);
  }
}
function ko(n, e) {
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
function Wa(n, e) {
  var t = typeof Symbol < "u" && n[Symbol.iterator] || n["@@iterator"];
  if (!t) {
    if (Array.isArray(n) || (t = al(n)) || e) {
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
  var a = !0, s = !1, u;
  return {
    s: function() {
      t = t.call(n);
    },
    n: function() {
      var l = t.next();
      return a = l.done, l;
    },
    e: function(l) {
      s = !0, u = l;
    },
    f: function() {
      try {
        !a && t.return != null && t.return();
      } finally {
        if (s) throw u;
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
function jr(n, e, t) {
  n.dispatchEvent(new CustomEvent(mm, {
    detail: {
      items: e,
      info: t
    }
  }));
}
var js = "draggedEntered", za = "draggedLeft", Zs = "draggedOverIndex", sl = "draggedLeftDocument", As = {
  LEFT_FOR_ANOTHER: "leftForAnother",
  OUTSIDE_OF_ANY: "outsideOfAny"
};
function pm(n, e, t) {
  n.dispatchEvent(new CustomEvent(js, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function _m(n, e, t) {
  n.dispatchEvent(new CustomEvent(za, {
    detail: {
      draggedEl: e,
      type: As.LEFT_FOR_ANOTHER,
      theOtherDz: t
    }
  }));
}
function Im(n, e) {
  n.dispatchEvent(new CustomEvent(za, {
    detail: {
      draggedEl: e,
      type: As.OUTSIDE_OF_ANY
    }
  }));
}
function bm(n, e, t) {
  n.dispatchEvent(new CustomEvent(Zs, {
    detail: {
      indexObj: e,
      draggedEl: t
    }
  }));
}
function ym(n) {
  window.dispatchEvent(new CustomEvent(sl, {
    detail: {
      draggedEl: n
    }
  }));
}
var Tt = {
  DRAG_STARTED: "dragStarted",
  DRAGGED_ENTERED: js,
  DRAGGED_ENTERED_ANOTHER: "dragEnteredAnother",
  DRAGGED_OVER_INDEX: Zs,
  DRAGGED_LEFT: za,
  DRAGGED_LEFT_ALL: "draggedLeftAll",
  DROPPED_INTO_ZONE: "droppedIntoZone",
  DROPPED_INTO_ANOTHER: "droppedIntoAnother",
  DROPPED_OUTSIDE_OF_ANY: "droppedOutsideOfAny",
  DRAG_STOPPED: "dragStopped"
}, zt = {
  POINTER: "pointer",
  KEYBOARD: "keyboard"
}, ja = "isDndShadowItem", Xs = "data-is-dnd-shadow-item-internal", Cm = "data-is-dnd-shadow-item-hint", Am = "id:dnd-shadow-placeholder-0000", Em = "dnd-action-dragged-el", xt = "id", Fo = 0;
function Rd() {
  Fo++;
}
function Md() {
  if (Fo === 0)
    throw new Error("Bug! trying to decrement when there are no dropzones");
  Fo--;
}
var ol = typeof window > "u";
function No(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0, t, r = e ? wm(n) : n.getBoundingClientRect(), i = getComputedStyle(n), a = i.transform;
  if (a) {
    var s, u, l, d;
    if (a.startsWith("matrix3d("))
      t = a.slice(9, -1).split(/, /), s = +t[0], u = +t[5], l = +t[12], d = +t[13];
    else if (a.startsWith("matrix("))
      t = a.slice(7, -1).split(/, /), s = +t[0], u = +t[3], l = +t[4], d = +t[5];
    else
      return r;
    var c = i.transformOrigin, h = r.x - l - (1 - s) * parseFloat(c), f = r.y - d - (1 - u) * parseFloat(c.slice(c.indexOf(" ") + 1)), v = s ? r.width / s : n.offsetWidth, g = u ? r.height / u : n.offsetHeight;
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
function Pd(n) {
  var e = No(n);
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function kd(n) {
  var e = n.getBoundingClientRect();
  return {
    top: e.top + window.scrollY,
    bottom: e.bottom + window.scrollY,
    left: e.left + window.scrollX,
    right: e.right + window.scrollX
  };
}
function Fd(n) {
  return {
    x: (n.left + n.right) / 2,
    y: (n.top + n.bottom) / 2
  };
}
function Sm(n, e) {
  return Math.sqrt(Math.pow(n.x - e.x, 2) + Math.pow(n.y - e.y, 2));
}
function Ks(n, e) {
  return n.y <= e.bottom && n.y >= e.top && n.x >= e.left && n.x <= e.right;
}
function Ra(n) {
  return Fd(kd(n));
}
function tu(n, e) {
  var t = Ra(n), r = Pd(e);
  return Ks(t, r);
}
function nu(n, e) {
  var t = Ra(n), r = Ra(e);
  return Sm(t, r);
}
function xm(n) {
  var e = kd(n);
  return e.right < 0 || e.left > document.documentElement.scrollWidth || e.bottom < 0 || e.top > document.documentElement.scrollHeight;
}
function wm(n) {
  for (var e = n.getBoundingClientRect(), t = {
    top: e.top,
    bottom: e.bottom,
    left: e.left,
    right: e.right
  }, r = n.parentElement; r && r !== document.body; ) {
    var i = r.getBoundingClientRect(), a = window.getComputedStyle(r).overflowY, s = window.getComputedStyle(r).overflowX, u = a === "scroll" || a === "auto", l = s === "scroll" || s === "auto";
    u && (t.top = Math.max(t.top, i.top), t.bottom = Math.min(t.bottom, i.bottom)), l && (t.left = Math.max(t.left, i.left), t.right = Math.min(t.right, i.right)), r = r.parentElement;
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
function ll() {
  Wi = /* @__PURE__ */ new Map();
}
ll();
function Tm(n) {
  var e = Array.from(n.children).findIndex(function(t) {
    return t.getAttribute(Xs);
  });
  if (e >= 0)
    return Wi.has(n) || Wi.set(n, /* @__PURE__ */ new Map()), Wi.get(n).set(e, Pd(n.children[e])), e;
}
function Dm(n, e) {
  if (!tu(n, e))
    return null;
  var t = e.children;
  if (t.length === 0)
    return {
      index: 0,
      isProximityBased: !0
    };
  for (var r = Tm(e), i = 0; i < t.length; i++)
    if (tu(n, t[i])) {
      var a = Wi.has(e) && Wi.get(e).get(i);
      return a && !Ks(Ra(n), a) ? {
        index: r,
        isProximityBased: !1
      } : {
        index: i,
        isProximityBased: !1
      };
    }
  for (var s = Number.MAX_VALUE, u = void 0, l = 0; l < t.length; l++) {
    var d = nu(n, t[l]);
    d < s && (s = d, u = l);
  }
  if (t.length > 0) {
    var c = t.length, h = t[c - 1], f = h.cloneNode(!1);
    f.style.visibility = "hidden", f.style.pointerEvents = "none", e.appendChild(f);
    var v = nu(n, f);
    v < s && (u = c), e.removeChild(f);
  }
  return {
    index: u,
    isProximityBased: !0
  };
}
function Ca(n) {
  return JSON.stringify(n, null, 2);
}
function Es(n) {
  if (!n)
    throw new Error("cannot get depth of a falsy node");
  return Nd(n, 0);
}
function Nd(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
  return n.parentElement ? Nd(n.parentElement, e + 1) : e - 1;
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
var Rm = 200, ru = 10, Uo;
function Mm(n, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Rm, r = arguments.length > 3 ? arguments[3] : void 0, i, a, s = !1, u, l = Array.from(e).sort(function(c, h) {
    return Es(h) - Es(c);
  });
  function d() {
    var c = Ra(n), h = r.multiScrollIfNeeded();
    if (!h && u && Math.abs(u.x - c.x) < ru && Math.abs(u.y - c.y) < ru) {
      Uo = window.setTimeout(d, t);
      return;
    }
    if (xm(n)) {
      ym(n);
      return;
    }
    u = c;
    var f = !1, v = Wa(l), g;
    try {
      for (v.s(); !(g = v.n()).done; ) {
        var m = g.value;
        h && ll();
        var p = Dm(n, m);
        if (p !== null) {
          var I = p.index;
          f = !0, m !== i ? (i && _m(i, n, m), pm(m, p, n), i = m) : I !== a && (bm(m, p, n), a = I);
          break;
        }
      }
    } catch (E) {
      v.e(E);
    } finally {
      v.f();
    }
    !f && s && i ? (Im(i, n), i = void 0, a = void 0, s = !1) : s = !0, Uo = window.setTimeout(d, t);
  }
  d();
}
function Pm() {
  clearTimeout(Uo), ll();
}
var Aa = 30;
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
    var s = n, u = s.directionObj, l = s.stepPx;
    u && (a.scrollBy(u.x * l, u.y * l), window.requestAnimationFrame(function() {
      return t(a);
    }));
  }
  function r(a) {
    return Aa - a;
  }
  function i(a, s) {
    if (!s)
      return !1;
    var u = Fm(a, s), l = !!n.directionObj;
    if (u === null)
      return l && e(), !1;
    var d = !1, c = !1;
    return s.scrollHeight > s.clientHeight && (u.bottom < Aa ? (d = !0, n.directionObj = {
      x: 0,
      y: 1
    }, n.stepPx = r(u.bottom)) : u.top < Aa && (d = !0, n.directionObj = {
      x: 0,
      y: -1
    }, n.stepPx = r(u.top)), !l && d) || s.scrollWidth > s.clientWidth && (u.right < Aa ? (c = !0, n.directionObj = {
      x: 1,
      y: 0
    }, n.stepPx = r(u.right)) : u.left < Aa && (c = !0, n.directionObj = {
      x: -1,
      y: 0
    }, n.stepPx = r(u.left)), !l && c) ? (t(s), !0) : (e(), !1);
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
  return Ks(n, t) ? {
    top: n.y - t.top,
    bottom: t.bottom - n.y,
    left: n.x - t.left,
    right: t.right - n.x
  } : null;
}
function Nm() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 ? arguments[1] : void 0, t = Hm(n), r = Array.from(t).sort(function(l, d) {
    return Es(d) - Es(l);
  }), i = km(), a = i.scrollIfNeeded, s = i.resetScrolling;
  function u() {
    var l = e();
    if (!l || !r)
      return !1;
    for (var d = r.filter(function(f) {
      return Ks(l, f.getBoundingClientRect()) || f === document.scrollingElement;
    }), c = 0; c < d.length; c++) {
      var h = a(l, d[c]);
      if (h)
        return !0;
    }
    return !1;
  }
  return {
    multiScrollIfNeeded: t.size > 0 ? u : function() {
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
  var e = /* @__PURE__ */ new Set(), t = Wa(n), r;
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
  var e = n.cloneNode(!0), t = [], r = n.tagName === "SELECT", i = r ? [n] : Ln(n.querySelectorAll("select")), a = Wa(i), s;
  try {
    for (a.s(); !(s = a.n()).done; ) {
      var u = s.value;
      t.push(u.value);
    }
  } catch (A) {
    a.e(A);
  } finally {
    a.f();
  }
  if (i.length > 0)
    for (var l = r ? [e] : Ln(e.querySelectorAll("select")), d = 0; d < l.length; d++) {
      var c = l[d], h = t[d], f = c.querySelector('option[value="'.concat(h, '"'));
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
}), Gm = ia({}, Ma.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT, !1);
function Ud(n) {
  if (!Ma[n]) throw new Error("Can't get non existing feature flag ".concat(n, "! Supported flags: ").concat(Object.keys(Ma)));
  return Gm[n];
}
var Vm = 0.2;
function oi(n) {
  return "".concat(n, " ").concat(Vm, "s ease");
}
function qm(n, e) {
  var t = n.getBoundingClientRect(), r = Bm(n);
  Hd(n, r), r.id = Em, r.style.position = "fixed";
  var i = t.top, a = t.left;
  if (r.style.top = "".concat(i, "px"), r.style.left = "".concat(a, "px"), e) {
    var s = Fd(t);
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
  Hd(e, n);
  var i = e.getBoundingClientRect(), a = n.getBoundingClientRect(), s = i.width - a.width, u = i.height - a.height;
  if (s || u) {
    var l = {
      left: (t - a.left) / a.width,
      top: (r - a.top) / a.height
    };
    Ud(Ma.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) || (n.style.height = "".concat(i.height, "px"), n.style.width = "".concat(i.width, "px")), n.style.left = "".concat(parseFloat(n.style.left) - l.left * s, "px"), n.style.top = "".concat(parseFloat(n.style.top) - l.top * u, "px");
  }
}
function Hd(n, e) {
  var t = window.getComputedStyle(n);
  Array.from(t).filter(function(r) {
    return r.startsWith("background") || r.startsWith("padding") || r.startsWith("font") || r.startsWith("text") || r.startsWith("align") || r.startsWith("justify") || r.startsWith("display") || r.startsWith("flex") || r.startsWith("border") || r === "opacity" || r === "color" || r === "list-style-type" || // copying with and height to make up for rect update timing issues in some browsers
    Ud(Ma.USE_COMPUTED_STYLE_INSTEAD_OF_BOUNDING_RECT) && (r === "width" || r === "height");
  }).forEach(function(r) {
    return e.style.setProperty(r, t.getPropertyValue(r), t.getPropertyPriority(r));
  });
}
function jm(n, e) {
  n.draggable = !1, n.ondragstart = function() {
    return !1;
  }, e ? (n.style.userSelect = "", n.style.WebkitUserSelect = "", n.style.cursor = "") : (n.style.userSelect = "none", n.style.WebkitUserSelect = "none", n.style.cursor = "grab");
}
function Bd(n) {
  n.style.display = "none", n.style.position = "fixed", n.style.zIndex = "-5";
}
function Zm(n) {
  n.style.visibility = "hidden", n.setAttribute(Xs, "true");
}
function Xm(n) {
  n.style.visibility = "", n.removeAttribute(Xs);
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
function Ss(n) {
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
var Ym = "--any--", Jm = 100, Qm = 20, is = 3, $m = 80, iu = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, au = "data-is-dnd-original-dragged-item", ln, St, un, Ys, at, Js, zr, kt, Kn, Gt, kr = !1, ul = !1, dl, Za = !1, hs = [], Ta, Yn, Sa = !1, Vn = /* @__PURE__ */ new Map(), gt = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new WeakMap();
function ep(n, e) {
  Vn.has(e) || Vn.set(e, /* @__PURE__ */ new Set()), Vn.get(e).has(n) || (Vn.get(e).add(n), Rd());
}
function su(n, e) {
  Vn.get(e).delete(n), Md(), Vn.get(e).size === 0 && Vn.delete(e);
}
function tp() {
  var n = Vn.get(Ys), e = Wa(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.addEventListener(js, Gd), r.addEventListener(za, Vd), r.addEventListener(Zs, qd);
    }
  } catch (s) {
    e.e(s);
  } finally {
    e.f();
  }
  window.addEventListener(sl, sa);
  var i = Math.max.apply(Math, Ln(Array.from(n.keys()).map(function(s) {
    return gt.get(s).dropAnimationDurationMs;
  }))), a = i === 0 ? Qm : Math.max(i, Jm);
  Ta = Nm(n, function() {
    return Gt;
  }), Mm(St, n, a * 1.07, Ta);
}
function np() {
  var n = Vn.get(Ys), e = Wa(n), t;
  try {
    for (e.s(); !(t = e.n()).done; ) {
      var r = t.value;
      r.removeEventListener(js, Gd), r.removeEventListener(za, Vd), r.removeEventListener(Zs, qd);
    }
  } catch (i) {
    e.e(i);
  } finally {
    e.f();
  }
  window.removeEventListener(sl, sa), Ta && (Ta.destroy(), Ta = void 0), Pm();
}
function Qs(n) {
  return n.findIndex(function(e) {
    return !!e[ja];
  });
}
function rp(n) {
  var e;
  return Br(Br({}, n), {}, (e = {}, ia(e, ja, !0), ia(e, xt, Am), e));
}
function Gd(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== at)) {
    if (Za = !1, t = t.filter(function(u) {
      return u[xt] !== zr[xt];
    }), at !== n.currentTarget) {
      var i = gt.get(at).items, a = i.filter(function(u) {
        return !u[ja];
      });
      jr(at, a, {
        trigger: Tt.DRAGGED_ENTERED_ANOTHER,
        id: un[xt],
        source: zt.POINTER
      });
    }
    var s = n.detail.indexObj.index;
    kt = n.currentTarget, t.splice(s, 0, zr), jr(n.currentTarget, t, {
      trigger: Tt.DRAGGED_ENTERED,
      id: un[xt],
      source: zt.POINTER
    });
  }
}
function Vd(n) {
  if (kr) {
    var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
    if (!(r && n.currentTarget !== at && n.currentTarget !== kt)) {
      var i = Ln(t), a = Qs(i);
      a !== -1 && i.splice(a, 1);
      var s = kt;
      kt = void 0;
      var u = n.detail, l = u.type, d = u.theOtherDz;
      if (l === As.OUTSIDE_OF_ANY || l === As.LEFT_FOR_ANOTHER && d !== at && gt.get(d).dropFromOthersDisabled) {
        Za = !0, kt = at;
        var c = s === at ? i : Ln(gt.get(at).items);
        c.splice(Js, 0, zr), jr(at, c, {
          trigger: Tt.DRAGGED_LEFT_ALL,
          id: un[xt],
          source: zt.POINTER
        });
      }
      jr(n.currentTarget, i, {
        trigger: Tt.DRAGGED_LEFT,
        id: un[xt],
        source: zt.POINTER
      });
    }
  }
}
function qd(n) {
  var e = gt.get(n.currentTarget), t = e.items, r = e.dropFromOthersDisabled;
  if (!(r && n.currentTarget !== at)) {
    var i = Ln(t);
    Za = !1;
    var a = n.detail.indexObj.index, s = Qs(i);
    s !== -1 && i.splice(s, 1), i.splice(a, 0, zr), jr(n.currentTarget, i, {
      trigger: Tt.DRAGGED_OVER_INDEX,
      id: un[xt],
      source: zt.POINTER
    });
  }
}
function xs(n) {
  n.preventDefault();
  var e = n.touches ? n.touches[0] : n;
  Gt = {
    x: e.clientX,
    y: e.clientY
  }, St.style.transform = "translate3d(".concat(Gt.x - Kn.x, "px, ").concat(Gt.y - Kn.y, "px, 0)");
}
function sa() {
  ul = !0, window.removeEventListener("mousemove", xs), window.removeEventListener("touchmove", xs), window.removeEventListener("mouseup", sa), window.removeEventListener("touchend", sa), np(), Wm(St), kt || (kt = at);
  var n = gt.get(kt), e = n.items, t = n.type;
  Ss(Vn.get(t), function(a) {
    return gt.get(a).dropTargetStyle;
  }, function(a) {
    return gt.get(a).dropTargetClasses;
  });
  var r = Qs(e);
  r === -1 && kt === at && (r = Js), e = e.map(function(a) {
    return a[ja] ? un : a;
  });
  function i() {
    dl(), aa(kt, e, {
      trigger: Za ? Tt.DROPPED_OUTSIDE_OF_ANY : Tt.DROPPED_INTO_ZONE,
      id: un[xt],
      source: zt.POINTER
    }), kt !== at && aa(at, gt.get(at).items, {
      trigger: Tt.DROPPED_INTO_ANOTHER,
      id: un[xt],
      source: zt.POINTER
    });
    var a = Array.from(kt.children).find(function(s) {
      return s.getAttribute(Xs);
    });
    a && Xm(a), sp();
  }
  gt.get(kt).dropAnimationDisabled ? i() : ip(r, i);
}
function ip(n, e) {
  var t = n > -1 ? No(kt.children[n], !1) : No(kt, !1), r = {
    x: t.left - parseFloat(St.style.left),
    y: t.top - parseFloat(St.style.top)
  }, i = gt.get(kt), a = i.dropAnimationDurationMs, s = "transform ".concat(a, "ms ease");
  St.style.transition = St.style.transition ? St.style.transition + "," + s : s, St.style.transform = "translate3d(".concat(r.x, "px, ").concat(r.y, "px, 0)"), window.setTimeout(e, a);
}
function ap(n, e) {
  hs.push({
    dz: n,
    destroy: e
  }), window.requestAnimationFrame(function() {
    Bd(n), document.body.appendChild(n);
  });
}
function sp() {
  St && St.remove && St.remove(), ln && ln.remove && ln.remove(), St = void 0, ln = void 0, un = void 0, Ys = void 0, at = void 0, Js = void 0, zr = void 0, kt = void 0, Kn = void 0, Gt = void 0, kr = !1, ul = !1, dl = void 0, Za = !1, Yn && clearTimeout(Yn), Yn = void 0, Sa = !1, hs.length && (hs.forEach(function(n) {
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
    dropTargetStyle: iu,
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
    }), window.addEventListener("mouseup", u, {
      passive: !1
    }), window.addEventListener("touchend", u, {
      passive: !1
    });
  }
  function s() {
    window.removeEventListener("mousemove", l), window.removeEventListener("touchmove", l), window.removeEventListener("mouseup", u), window.removeEventListener("touchend", u), Yn && (clearTimeout(Yn), Yn = void 0, Sa = !1);
  }
  function u(f) {
    if (s(), ln = void 0, Kn = void 0, Gt = void 0, f.type === "touchend") {
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
      Gt = {
        x: g.clientX,
        y: g.clientY
      }, (Math.abs(Gt.x - Kn.x) >= is || Math.abs(Gt.y - Kn.y) >= is) && (Yn && (clearTimeout(Yn), Yn = void 0), u(f));
      return;
    }
    f.preventDefault(), Gt = {
      x: g.clientX,
      y: g.clientY
    }, (Math.abs(Gt.x - Kn.x) >= is || Math.abs(Gt.y - Kn.y) >= is) && (s(), c());
  }
  function d(f) {
    if (!(f.target !== f.currentTarget && (f.target.value !== void 0 || f.target.isContentEditable)) && !f.button && !kr) {
      var v = !!f.touches, g = v && r.delayTouchStartMs > 0;
      g || f.preventDefault(), f.stopPropagation();
      var m = v ? f.touches[0] : f;
      Kn = {
        x: m.clientX,
        y: m.clientY
      }, Gt = Br({}, Kn), ln = f.currentTarget, g && (Sa = !1, Yn = window.setTimeout(function() {
        ln && (Sa = !0, s(), c());
      }, r.delayTouchStartMs)), a();
    }
  }
  function c() {
    kr = !0;
    var f = i.get(ln);
    Js = f, at = ln.parentElement;
    var v = at.closest("dialog") || at.closest("[popover]") || at.getRootNode(), g = v.body || v, m = r.items, p = r.type, I = r.centreDraggedOnCursor, E = Ln(m);
    un = E[f], Ys = p, zr = rp(un), St = qm(ln, I && Gt), g.appendChild(St);
    function A() {
      ln.parentElement ? window.requestAnimationFrame(A) : (ln.setAttribute(au, !0), g.appendChild(ln), tp(), Bd(ln), zr[xt] = un[xt], St.focus());
    }
    window.requestAnimationFrame(A), fs(Array.from(Vn.get(r.type)).filter(function(y) {
      return y === at || !gt.get(y).dropFromOthersDisabled;
    }), function(y) {
      return gt.get(y).dropTargetStyle;
    }, function(y) {
      return gt.get(y).dropTargetClasses;
    }), E.splice(f, 1, zr), dl = Km(at), jr(at, E, {
      trigger: Tt.DRAG_STARTED,
      id: un[xt],
      source: zt.POINTER
    }), window.addEventListener("mousemove", xs, {
      passive: !1
    }), window.addEventListener("touchmove", xs, {
      passive: !1,
      capture: !1
    }), window.addEventListener("mouseup", sa, {
      passive: !1
    }), window.addEventListener("touchend", sa, {
      passive: !1
    });
  }
  function h(f) {
    var v = f.items, g = v === void 0 ? void 0 : v, m = f.flipDurationMs, p = m === void 0 ? 0 : m, I = f.type, E = I === void 0 ? Ym : I, A = f.dragDisabled, y = A === void 0 ? !1 : A, T = f.morphDisabled, C = T === void 0 ? !1 : T, S = f.dropFromOthersDisabled, b = S === void 0 ? !1 : S, w = f.dropTargetStyle, L = w === void 0 ? iu : w, M = f.dropTargetClasses, D = M === void 0 ? [] : M, O = f.transformDraggedElement, J = O === void 0 ? function() {
    } : O, V = f.centreDraggedOnCursor, U = V === void 0 ? !1 : V, H = f.dropAnimationDisabled, Q = H === void 0 ? !1 : H, de = f.delayTouchStart, G = de === void 0 ? !1 : de;
    r.dropAnimationDurationMs = p;
    var ie = 0;
    G === !0 ? ie = $m : typeof G == "number" && isFinite(G) && G >= 0 && (ie = G), r.delayTouchStartMs = ie, r.type && E !== r.type && su(n, r.type), r.type = E, r.items = Ln(g), r.dragDisabled = y, r.morphDisabled = C, r.transformDraggedElement = J, r.centreDraggedOnCursor = U, r.dropAnimationDisabled = Q, t && kr && !ul && (!Lm(L, r.dropTargetStyle) || !Om(D, r.dropTargetClasses)) && (Ss([n], function() {
      return r.dropTargetStyle;
    }, function() {
      return D;
    }), fs([n], function() {
      return L;
    }, function() {
      return D;
    })), r.dropTargetStyle = L, r.dropTargetClasses = Ln(D);
    function ce(z, P) {
      return gt.get(z) ? gt.get(z)[P] : r[P];
    }
    t && kr && r.dropFromOthersDisabled !== b && (b ? Ss([n], function(z) {
      return ce(z, "dropTargetStyle");
    }, function(z) {
      return ce(z, "dropTargetClasses");
    }) : fs([n], function(z) {
      return ce(z, "dropTargetStyle");
    }, function(z) {
      return ce(z, "dropTargetClasses");
    })), r.dropFromOthersDisabled = b, gt.set(n, r), ep(n, E);
    for (var xe = kr ? Qs(r.items) : -1, me = 0; me < n.children.length; me++) {
      var q = n.children[me];
      if (jm(q, y), me === xe) {
        C || zm(St, q, Gt.x, Gt.y), r.transformDraggedElement(St, un, me), Zm(q);
        continue;
      }
      q.removeEventListener("mousedown", go.get(q)), q.removeEventListener("touchstart", go.get(q)), y || (q.addEventListener("mousedown", d), q.addEventListener("touchstart", d), go.set(q, d)), i.set(q, me), t || (t = !0);
    }
  }
  return h(e), {
    update: function(v) {
      h(v);
    },
    destroy: function() {
      function v() {
        su(n, gt.get(n).type), gt.delete(n);
      }
      kr && !n.closest("[".concat(au, "]")) ? ap(n, v) : v();
    }
  };
}
var as, Ho = {
  DND_ZONE_ACTIVE: "dnd-zone-active",
  DND_ZONE_DRAG_DISABLED: "dnd-zone-drag-disabled"
}, Wd = (as = {}, ia(as, Ho.DND_ZONE_ACTIVE, "Tab to one the items and press space-bar or enter to start dragging it"), ia(as, Ho.DND_ZONE_DRAG_DISABLED, "This is a disabled drag and drop list"), as), lp = "dnd-action-aria-alert", pt;
function Bo() {
  pt || (pt = document.createElement("div"), function() {
    pt.id = lp, pt.style.position = "fixed", pt.style.bottom = "0", pt.style.left = "0", pt.style.zIndex = "-5", pt.style.opacity = "0", pt.style.height = "0", pt.style.width = "0", pt.setAttribute("role", "alert");
  }(), document.body.prepend(pt), Object.entries(Wd).forEach(function(n) {
    var e = lm(n, 2), t = e[0], r = e[1];
    return document.body.prepend(cp(t, r));
  }));
}
function up() {
  return ol ? null : (document.readyState === "complete" ? Bo() : window.addEventListener("DOMContentLoaded", Bo), Br({}, Ho));
}
function dp() {
  ol || !pt || (Object.keys(Wd).forEach(function(n) {
    var e;
    return (e = document.getElementById(n)) === null || e === void 0 ? void 0 : e.remove();
  }), pt.remove(), pt = void 0);
}
function cp(n, e) {
  var t = document.createElement("div");
  return t.id = n, t.innerHTML = "<p>".concat(e, "</p>"), t.style.display = "none", t.style.position = "fixed", t.style.zIndex = "-5", t;
}
function zi(n) {
  if (!ol) {
    pt || Bo(), pt.innerHTML = "";
    var e = document.createTextNode(n);
    pt.appendChild(e), pt.style.display = "none", pt.style.display = "inline";
  }
}
var fp = "--any--", ou = {
  outline: "rgba(255, 255, 102, 0.7) solid 2px"
}, Dn = !1, Go, qt, Ii = "", li, tr, Gr = "", ws = /* @__PURE__ */ new WeakSet(), lu = /* @__PURE__ */ new WeakMap(), uu = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new Map(), Mt = /* @__PURE__ */ new Map(), Hn = /* @__PURE__ */ new Map(), Ts;
function hp(n, e) {
  Hn.size === 0 && (Ts = up(), window.addEventListener("keydown", zd), window.addEventListener("click", jd)), Hn.has(e) || Hn.set(e, /* @__PURE__ */ new Set()), Hn.get(e).has(n) || (Hn.get(e).add(n), Rd());
}
function du(n, e) {
  qt === n && Pa(), Hn.get(e).delete(n), Md(), Hn.get(e).size === 0 && Hn.delete(e), Hn.size === 0 && (window.removeEventListener("keydown", zd), window.removeEventListener("click", jd), Ts = void 0, dp());
}
function zd(n) {
  if (Dn)
    switch (n.key) {
      case "Escape": {
        Pa();
        break;
      }
    }
}
function jd() {
  Dn && (ws.has(document.activeElement) || Pa());
}
function vp(n) {
  if (Dn) {
    var e = n.currentTarget;
    if (e !== qt) {
      Ii = e.getAttribute("aria-label") || "";
      var t = Mt.get(qt), r = t.items, i = r.find(function(h) {
        return h[xt] === tr;
      }), a = r.indexOf(i), s = r.splice(a, 1)[0], u = Mt.get(e), l = u.items, d = u.autoAriaDisabled;
      e.getBoundingClientRect().top < qt.getBoundingClientRect().top || e.getBoundingClientRect().left < qt.getBoundingClientRect().left ? (l.push(s), d || zi("Moved item ".concat(Gr, " to the end of the list ").concat(Ii))) : (l.unshift(s), d || zi("Moved item ".concat(Gr, " to the beginning of the list ").concat(Ii)));
      var c = qt;
      aa(c, r, {
        trigger: Tt.DROPPED_INTO_ANOTHER,
        id: tr,
        source: zt.KEYBOARD
      }), aa(e, l, {
        trigger: Tt.DROPPED_INTO_ZONE,
        id: tr,
        source: zt.KEYBOARD
      }), qt = e;
    }
  }
}
function Zd() {
  Vo.forEach(function(n, e) {
    var t = n.update;
    return t(Mt.get(e));
  });
}
function Pa() {
  var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
  Mt.get(qt).autoAriaDisabled || zi("Stopped dragging item ".concat(Gr)), ws.has(document.activeElement) && document.activeElement.blur(), n && jr(qt, Mt.get(qt).items, {
    trigger: Tt.DRAG_STOPPED,
    id: tr,
    source: zt.KEYBOARD
  }), Ss(Hn.get(Go), function(e) {
    return Mt.get(e).dropTargetStyle;
  }, function(e) {
    return Mt.get(e).dropTargetClasses;
  }), li = null, tr = null, Gr = "", Go = null, qt = null, Ii = "", Dn = !1, Zd();
}
function gp(n, e) {
  var t = {
    items: void 0,
    type: void 0,
    dragDisabled: !1,
    zoneTabIndex: 0,
    zoneItemTabIndex: 0,
    dropFromOthersDisabled: !1,
    dropTargetStyle: ou,
    dropTargetClasses: [],
    autoAriaDisabled: !1
  };
  function r(c, h, f) {
    c.length <= 1 || c.splice(f, 1, c.splice(h, 1, c[f])[0]);
  }
  function i(c) {
    switch (c.key) {
      case "Enter":
      case " ": {
        if ((c.target.disabled !== void 0 || c.target.href || c.target.isContentEditable) && !ws.has(c.target))
          return;
        c.preventDefault(), c.stopPropagation(), Dn ? Pa() : a(c);
        break;
      }
      case "ArrowDown":
      case "ArrowRight": {
        if (!Dn) return;
        c.preventDefault(), c.stopPropagation();
        var h = Mt.get(n), f = h.items, v = Array.from(n.children), g = v.indexOf(c.currentTarget);
        g < v.length - 1 && (t.autoAriaDisabled || zi("Moved item ".concat(Gr, " to position ").concat(g + 2, " in the list ").concat(Ii)), r(f, g, g + 1), aa(n, f, {
          trigger: Tt.DROPPED_INTO_ZONE,
          id: tr,
          source: zt.KEYBOARD
        }));
        break;
      }
      case "ArrowUp":
      case "ArrowLeft": {
        if (!Dn) return;
        c.preventDefault(), c.stopPropagation();
        var m = Mt.get(n), p = m.items, I = Array.from(n.children), E = I.indexOf(c.currentTarget);
        E > 0 && (t.autoAriaDisabled || zi("Moved item ".concat(Gr, " to position ").concat(E, " in the list ").concat(Ii)), r(p, E, E - 1), aa(n, p, {
          trigger: Tt.DROPPED_INTO_ZONE,
          id: tr,
          source: zt.KEYBOARD
        }));
        break;
      }
    }
  }
  function a(c) {
    u(c.currentTarget), qt = n, Go = t.type, Dn = !0;
    var h = Array.from(Hn.get(t.type)).filter(function(v) {
      return v === qt || !Mt.get(v).dropFromOthersDisabled;
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
      source: zt.KEYBOARD
    }), Zd();
  }
  function s(c) {
    Dn && c.currentTarget !== li && (c.stopPropagation(), Pa(!1), a(c));
  }
  function u(c) {
    var h = Mt.get(n), f = h.items, v = Array.from(n.children), g = v.indexOf(c);
    li = c, li.tabIndex = t.zoneItemTabIndex, tr = f[g][xt], Gr = v[g].getAttribute("aria-label") || "";
  }
  function l(c) {
    var h = c.items, f = h === void 0 ? [] : h, v = c.type, g = v === void 0 ? fp : v, m = c.dragDisabled, p = m === void 0 ? !1 : m, I = c.zoneTabIndex, E = I === void 0 ? 0 : I, A = c.zoneItemTabIndex, y = A === void 0 ? 0 : A, T = c.dropFromOthersDisabled, C = T === void 0 ? !1 : T, S = c.dropTargetStyle, b = S === void 0 ? ou : S, w = c.dropTargetClasses, L = w === void 0 ? [] : w, M = c.autoAriaDisabled, D = M === void 0 ? !1 : M;
    t.items = Ln(f), t.dragDisabled = p, t.dropFromOthersDisabled = C, t.zoneTabIndex = E, t.zoneItemTabIndex = y, t.dropTargetStyle = b, t.dropTargetClasses = L, t.autoAriaDisabled = D, t.type && g !== t.type && du(n, t.type), t.type = g, hp(n, g), D || (n.setAttribute("aria-disabled", p), n.setAttribute("role", "list"), n.setAttribute("aria-describedby", p ? Ts.DND_ZONE_DRAG_DISABLED : Ts.DND_ZONE_ACTIVE)), Mt.set(n, t), Dn ? n.tabIndex = n === qt || li.contains(n) || t.dropFromOthersDisabled || qt && t.type !== Mt.get(qt).type ? -1 : 0 : n.tabIndex = t.zoneTabIndex, n.addEventListener("focus", vp);
    for (var O = function(U) {
      var H = n.children[U];
      ws.add(H), H.tabIndex = Dn ? -1 : t.zoneItemTabIndex, D || H.setAttribute("role", "listitem"), H.removeEventListener("keydown", lu.get(H)), H.removeEventListener("click", uu.get(H)), p || (H.addEventListener("keydown", i), lu.set(H, i), H.addEventListener("click", s), uu.set(H, s)), Dn && t.items[U][xt] === tr && (li = H, li.tabIndex = t.zoneItemTabIndex, H.focus());
    }, J = 0; J < n.children.length; J++)
      O(J);
  }
  l(e);
  var d = {
    update: function(h) {
      l(h);
    },
    destroy: function() {
      du(n, t.type), Mt.delete(n), Vo.delete(n);
    }
  };
  return Vo.set(n, d), d;
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
  cu(e);
  var t = op(n, e), r = gp(n, e);
  return {
    update: function(a) {
      cu(a), t.update(a), r.update(a);
    },
    destroy: function() {
      t.destroy(), r.destroy();
    }
  };
}
function _p(n) {
  return !!n.closest("[".concat(Cm, '="true"]'));
}
function cu(n) {
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
  var u = e.find(function(c) {
    return !{}.hasOwnProperty.call(c, xt);
  });
  if (u)
    throw new Error("missing '".concat(xt, "' property for item ").concat(Ca(u)));
  if (i && !Array.isArray(i))
    throw new Error("dropTargetClasses should be an array but instead it is a ".concat(Bi(i), ", ").concat(Ca(i)));
  if (t && !fu(t))
    throw new Error("zoneTabIndex should be a number but instead it is a ".concat(Bi(t), ", ").concat(Ca(t)));
  if (r && !fu(r))
    throw new Error("zoneItemTabIndex should be a number but instead it is a ".concat(Bi(r), ", ").concat(Ca(r)));
  if (a !== void 0 && a !== !1) {
    var l = a === !0, d = typeof a == "number" && isFinite(a) && a >= 0;
    if (!l && !d)
      throw new Error("delayTouchStart should be a boolean (true/false) or a non-negative number but instead it is a ".concat(Bi(a), ", ").concat(Ca(a)));
  }
}
function fu(n) {
  return !isNaN(n) && function(e) {
    return (e | 0) === e;
  }(parseFloat(n));
}
function Xd(n) {
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
var Nn = Xd(!0), ji = Xd(!1);
function hu() {
  return {
    dragDisabled: ji.get() || Nn.get(),
    zoneItemTabIndex: -1
  };
}
function yr(n, e) {
  var t;
  ji.set((t = e == null ? void 0 : e.dragDisabled) !== null && t !== void 0 ? t : !1);
  var r = e, i = pp(n, Br(Br({}, r), hu()));
  function a() {
    i.update(Br(Br({}, r), hu()));
  }
  Nn.subscribe(a);
  function s(l) {
    var d = l.detail.info, c = d.source, h = d.trigger;
    c === zt.KEYBOARD && h === Tt.DRAG_STOPPED && Nn.set(!0);
  }
  function u(l) {
    var d = l.detail.info.source;
    d === zt.POINTER && Nn.set(!0);
  }
  return n.addEventListener("consider", s), n.addEventListener("finalize", u), {
    update: function(d) {
      var c, h;
      r = d, ji.set((c = (h = r) === null || h === void 0 ? void 0 : h.dragDisabled) !== null && c !== void 0 ? c : !1), a();
    },
    destroy: function() {
      n.removeEventListener("consider", s), n.removeEventListener("finalize", u), Nn.unsubscribe(a);
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
    var s = ji.get(), u = Nn.get();
    s ? (n.tabIndex = -1, n.style.cursor = "") : (n.tabIndex = u ? 0 : -1, n.style.cursor = u ? "grab" : "grabbing");
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
function Kd(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function $s(n, { from: e, to: t }, r = {}) {
  var { delay: i = 0, duration: a = (C) => Math.sqrt(C) * 120, easing: s = Kd } = r, u = getComputedStyle(n), l = u.transform === "none" ? "" : u.transform, [d, c] = u.transformOrigin.split(" ").map(parseFloat);
  d /= n.clientWidth, c /= n.clientHeight;
  var h = bp(n), f = n.clientWidth / t.width / h, v = n.clientHeight / t.height / h, g = e.left + e.width * d, m = e.top + e.height * c, p = t.left + t.width * d, I = t.top + t.height * c, E = (g - p) * f, A = (m - I) * v, y = e.width / t.width, T = e.height / t.height;
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
const yp = ar([]);
yp.subscribe;
function Cp(n) {
  const e = n - 1;
  return e * e * e + 1;
}
function vu(n) {
  const e = typeof n == "string" && n.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);
  return e ? [parseFloat(e[1]), e[2] || "px"] : [
    /** @type {number} */
    n,
    "px"
  ];
}
function gu(n, { delay: e = 0, duration: t = 400, easing: r = Cp, x: i = 0, y: a = 0, opacity: s = 0 } = {}) {
  const u = getComputedStyle(n), l = +u.opacity, d = u.transform === "none" ? "" : u.transform, c = l * (1 - s), [h, f] = vu(i), [v, g] = vu(a);
  return {
    delay: e,
    duration: t,
    easing: r,
    css: (m, p) => `
			transform: ${d} translate(${(1 - m) * h}${f}, ${(1 - m) * v}${g});
			opacity: ${l - c * p}`
  };
}
dt([
  "click",
  "keydown",
  "pointerdown",
  "pointerup",
  "pointermove"
]);
var Ap = /* @__PURE__ */ Z("<div><!></div>");
function Yd(n, e) {
  let t = _(e, "variant", 3, "secondary");
  var r = Ap(), i = F(r);
  pe(i, () => e.children ?? ve), ue(() => Sr(r, 1, `osc-card osc-card--${t()}`, "svelte-14hhvrx")), x(n, r);
}
var Ep = /* @__PURE__ */ Z('<div class="panel-parent__header svelte-1rw2lbw"><!></div>'), Sp = /* @__PURE__ */ Z('<div class="panel-parent__body svelte-1rw2lbw"><!></div>'), xp = /* @__PURE__ */ Z('<div class="panel-parent__footer svelte-1rw2lbw"><!></div>'), wp = /* @__PURE__ */ Z('<div class="panel-parent svelte-1rw2lbw"><!> <!> <!></div>');
function Jd(n, e) {
  let t = _(e, "backgroundColor", 3, "");
  var r = wp(), i = F(r);
  {
    var a = (c) => {
      var h = Ep(), f = F(h);
      pe(f, () => e.header), x(c, h);
    };
    ne(i, (c) => {
      e.header && c(a);
    });
  }
  var s = j(i, 2);
  {
    var u = (c) => {
      var h = Sp(), f = F(h);
      pe(f, () => e.content), x(c, h);
    };
    ne(s, (c) => {
      e.content && c(u);
    });
  }
  var l = j(s, 2);
  {
    var d = (c) => {
      var h = xp(), f = F(h);
      pe(f, () => e.additional), x(c, h);
    };
    ne(l, (c) => {
      e.additional && c(d);
    });
  }
  ue(() => $e(r, `--bg-color: ${t() ?? ""}`)), x(n, r);
}
function Tp(n, e) {
  var t;
  (t = e()) == null || t();
}
var Dp = /* @__PURE__ */ Z('<div class="detail svelte-4xu36c"> </div>'), Lp = /* @__PURE__ */ Z('<div class="toast-card svelte-4xu36c"><div class="icon svelte-4xu36c"><!></div> <div class="content svelte-4xu36c"><div class="summary svelte-4xu36c"> </div> <!></div> <button class="close svelte-4xu36c"><!></button></div>');
function Op(n, e) {
  _e(e, !0);
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
  var a = Lp(), s = F(a), u = F(s);
  Xl(u, {
    class: "material-icons",
    children: (m, p) => {
      var I = Ge();
      ue(() => Le(I, r[e.type])), x(m, I);
    },
    $$slots: { default: !0 }
  });
  var l = j(s, 2), d = F(l), c = F(d), h = j(d, 2);
  {
    var f = (m) => {
      var p = Dp(), I = F(p);
      ue(() => Le(I, e.detail)), x(m, p);
    };
    ne(h, (m) => {
      e.detail && m(f);
    });
  }
  var v = j(l, 2);
  v.__click = [Tp, t];
  var g = F(v);
  Xl(g, {
    class: "material-icons",
    children: (m, p) => {
      var I = Ge("close");
      x(m, I);
    },
    $$slots: { default: !0 }
  }), ue(() => {
    $e(a, `--color:${i[e.type] ?? ""}`), Le(c, e.summary);
  }), kl(1, a, () => gu, () => ({ x: 0, y: 30, duration: 150, easing: Ip })), kl(2, a, () => gu, () => ({ x: 50, y: 0, duration: 150, easing: Kd })), x(n, a), Ie();
}
dt(["click"]);
const Rp = 4e3;
function Mp() {
  let n = Ae({ items: [] }), e = 0;
  const t = (i) => {
    n.items = n.items.filter((a) => a.id !== i);
  }, r = (i, a, s, u = Rp) => {
    const l = e++, d = { id: l, summary: a, detail: s, type: i };
    return n.items = [...n.items, d], setTimeout(
      () => {
        t(l);
      },
      u
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
const Ds = Mp();
var Pp = /* @__PURE__ */ Z("<div><!></div>"), kp = /* @__PURE__ */ Z('<div class="toast-host svelte-11vwiay"></div>');
function Fp(n, e) {
  _e(e, !1);
  const t = Ds.toasts;
  Kf();
  var r = kp();
  fn(r, 13, () => t.items, (i) => i.id, (i, a) => {
    var s = Pp(), u = F(s);
    Op(u, {
      get summary() {
        return o(a).summary;
      },
      get detail() {
        return o(a).detail;
      },
      get type() {
        return o(a).type;
      },
      onClose: () => Ds.remove(o(a).id)
    }), qs(s, () => $s, null), x(i, s);
  }), x(n, r), Ie();
}
dt(["click"]);
dt(["click"]);
dt(["click"]);
dt(["input"]);
const Np = "data:text/xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHByb2Nlc3Nlcz4KICA8cHJvY2Vzcz4KICAgIDxpZD5zdGFuZGFyZC1wcm9jZXNzLTE8L2lkPgogICAgPHZlcnNpb24+MC4wLjE8L3ZlcnNpb24+CiAgICA8bmFtZT5TdGFuZGFyZCBQcm9jZXNzIDE8L25hbWU+CiAgICA8ZGVzY3JpcHRpb24+CiAgICAgIFRoaXMgaXMgYSBzdGFuZGFyZGl6ZWQgcHJvY2VzcyB1c2VkIGZvciB0ZXN0aW5nIHB1cnBvc2VzIG9ubHkKICAgIDwvZGVzY3JpcHRpb24+CgogICAgPHBsdWdpbnMtc2VxdWVuY2U+CiAgICAgIDxncm91cD4KICAgICAgICA8dGl0bGU+VHlwZXM8L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dGVtcGxhdGUtZ2VuZXJhdG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UZW1wbGF0ZSBHZW5lcmF0b3I8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImV4dGVybmFsIj4KICAgICAgICAgICAgaHR0cHM6Ly9hc2UtY29tcGFzLmdpdGh1Yi5pby9jb21wYXMtdHJhbnNuZXRidy1wbHVnaW5zL2JlYXJpbmdwb2ludC9jb21wYXMvcGx1Z2lucy90ZW1wbGF0ZS1nZW5lcmF0b3IvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+dHlwZS1kZXNpZ25lci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+VHlwZSBEZXNpZ25lcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy90eXBlLWRlc2lnbmVyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD50eXBlLWRpc3RyaWJ1dG9yLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5UeXBlIERpc3RyaWJ1dG9yPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJleHRlcm5hbCI+CiAgICAgICAgICAgIGh0dHBzOi8vYXNlLWNvbXBhcy5naXRodWIuaW8vY29tcGFzLXRyYW5zbmV0YnctcGx1Z2lucy9iZWFyaW5ncG9pbnQvY29tcGFzL3BsdWdpbnMvdHlwZS1kaXN0cmlidXRvci9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkNvbmZpZ3VyYXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+Y29tbXVuaWNhdGlvbi14eXo8L2lkPgogICAgICAgICAgPG5hbWU+Q29tbXVuaWNhdGlvbjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvcGx1Z2lucy9zcmMvZWRpdG9ycy9Db21tdW5pY2F0aW9uLmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KCiAgICAgICAgPHBsdWdpbj4KICAgICAgICAgIDxpZD5zdWJzdGF0aW9uLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5TdWJzdGF0aW9uPC9uYW1lPgogICAgICAgICAgPHNyYyB0eXBlPSJpbnRlcm5hbCI+CiAgICAgICAgICAgIC9wbHVnaW5zL3NyYy9lZGl0b3JzL1N1YnN0YXRpb24uanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+cHVibGlzaGVyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5QdWJsaXNoZXI8L25hbWU+CiAgICAgICAgICA8c3JjIHR5cGU9ImludGVybmFsIj4KICAgICAgICAgICAgL2V4dGVybmFsLXBsdWdpbnMvb3NjZC1wdWJsaXNoZXIvb3NjZC1wdWJsaXNoZXIuanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+c3Vic2NyaWJlLWxhdGVyLWJpbmRpbmcteHl6PC9pZD4KICAgICAgICAgIDxuYW1lPlN1YnNjcmliZTwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iaW50ZXJuYWwiPgogICAgICAgICAgICAvZXh0ZXJuYWwtcGx1Z2lucy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy9vc2NkLXN1YnNjcmliZXItbGF0ZXItYmluZGluZy5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CiAgICAgIDwvZ3JvdXA+CgogICAgICA8Z3JvdXA+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50YXRpb248L3RpdGxlPgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+YXV0b2RvYy14eXo8L2lkPgogICAgICAgICAgPG5hbWU+QXV0b0RvYzwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL3NwcmludGVpbnMuZ2l0aHViLmlvL29zY2QtcGx1Z2lucy9hdXRvLWRvYy9pbmRleC5qcwogICAgICAgICAgPC9zcmM+CiAgICAgICAgPC9wbHVnaW4+CgogICAgICAgIDxwbHVnaW4+CiAgICAgICAgICA8aWQ+bG9jYXRpb24tbWFuYWdlci14eXo8L2lkPgogICAgICAgICAgPG5hbWU+TG9jYXRpb24gTWFuYWdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2xvY2F0aW9uLW1hbmFnZXIvaW5kZXguanMKICAgICAgICAgIDwvc3JjPgogICAgICAgIDwvcGx1Z2luPgoKICAgICAgICA8cGx1Z2luPgogICAgICAgICAgPGlkPmhpc3Rvcnktdmlld2VyLXh5ejwvaWQ+CiAgICAgICAgICA8bmFtZT5IaXN0b3J5IFZpZXdlcjwvbmFtZT4KICAgICAgICAgIDxzcmMgdHlwZT0iZXh0ZXJuYWwiPgogICAgICAgICAgICBodHRwczovL2FzZS1jb21wYXMuZ2l0aHViLmlvL2NvbXBhcy10cmFuc25ldGJ3LXBsdWdpbnMvYmVhcmluZ3BvaW50L2NvbXBhcy9wbHVnaW5zL2hpc3Rvcnktdmlld2VyL2luZGV4LmpzCiAgICAgICAgICA8L3NyYz4KICAgICAgICA8L3BsdWdpbj4KICAgICAgPC9ncm91cD4KICAgIDwvcGx1Z2lucy1zZXF1ZW5jZT4KICA8L3Byb2Nlc3M+CjwvcHJvY2Vzc2VzPgo=", Up = Np, Qd = "engineeringWizardProcesses", Hp = "external", Dt = Ae({ processes: [] }), Gi = Ae({ loading: !1, error: "" }), Ve = Ae({ process: null }), cn = Ae({ isEditing: !1 }), Ei = Ae({ process: null, lastSelectedPluginId: null }), cl = Ae({ plugins: [] });
function Bp() {
  if (typeof localStorage > "u") return;
  const n = localStorage.getItem(Qd);
  if (n)
    try {
      const e = JSON.parse(n);
      Array.isArray(e) && (Dt.processes = e);
    } catch {
    }
}
function Gp() {
  Dt.processes.forEach((e) => {
    var t;
    (t = e.pluginGroups) == null || t.forEach((r) => {
      var i;
      return (i = r.plugins) == null ? void 0 : i.length;
    });
  });
  const n = Ns(Dt.processes);
  if (!(typeof localStorage > "u"))
    try {
      localStorage.setItem(Qd, JSON.stringify(n));
    } catch {
    }
}
Bp();
zu(() => {
  Ee(() => {
    console.log("[processes] persistence module loaded"), Gp();
  });
});
function Vp(n, e, t) {
  o(e) && t.handleStart(o(e));
}
var qp = /* @__PURE__ */ Z('<div class="process-banner svelte-xtmc4p"><div class="process-banner__info svelte-xtmc4p"><!> <span class="svelte-xtmc4p"> </span></div> <button type="button" class="banner-continue svelte-xtmc4p">CONTINUE</button></div>'), Wp = /* @__PURE__ */ Z("<!> <!>", 1), zp = /* @__PURE__ */ Z('<div class="processes svelte-xtmc4p"><!> <div class="process-toolbar svelte-xtmc4p"><!> <!></div> <!></div>');
function jp(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ oe("");
  const r = /* @__PURE__ */ $(() => Dt.processes ?? []), i = /* @__PURE__ */ $(() => o(r).map((S) => ({ ...S, displayName: S.name || S.id }))), a = /* @__PURE__ */ $(() => o(t).trim().toLowerCase()), s = /* @__PURE__ */ $(() => o(a) ? o(i).filter((S) => S.displayName.toLowerCase().includes(o(a))) : o(i)), u = [
    { key: "displayName", header: "Name", bold: !0 },
    { key: "description", header: "Description" }
  ], l = /* @__PURE__ */ $(() => Ei.process), d = /* @__PURE__ */ $(() => {
    var S, b;
    return ((S = o(l)) == null ? void 0 : S.name) || ((b = o(l)) == null ? void 0 : b.id) || "";
  }), c = /* @__PURE__ */ $(() => Ei.lastSelectedPluginId);
  function h(S, b) {
    var w;
    if (!b) return "";
    for (const L of (S == null ? void 0 : S.pluginGroups) ?? []) {
      const M = (w = L.plugins) == null ? void 0 : w.find((D) => D.id === b);
      if (M) return M.name || M.id;
    }
    return "";
  }
  const f = /* @__PURE__ */ $(() => h(o(l), o(c)));
  function v() {
    const S = `A process “${o(d)}” has already been started`, b = [
      e.docName ? ` for the ${e.docName}` : "",
      o(f) ? ` at “${o(f)}”` : ""
    ];
    return `${S}${b.join("")}. Would you like to continue where you left off?`;
  }
  const g = /* @__PURE__ */ $(v);
  function m(S) {
    return !!o(l) && (S == null ? void 0 : S.id) === o(l).id;
  }
  var p = zp(), I = F(p);
  {
    var E = (S) => {
      var b = qp(), w = F(b), L = F(w);
      dg(L, {});
      var M = j(L, 2), D = F(M), O = j(w, 2);
      O.__click = [Vp, l, e], ue(() => Le(D, o(g))), x(S, b);
    };
    ne(I, (S) => {
      o(l) && S(E);
    });
  }
  var A = j(I, 2), y = F(A);
  Gn(y, {
    variant: "outlined",
    label: "Search Processes",
    get value() {
      return o(t);
    },
    set value(S) {
      W(t, S, !0);
    }
  });
  var T = j(y, 2);
  In(T, {
    class: "mdc-button--raised",
    style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
    get onclick() {
      return e.handleAddNew;
    },
    "aria-label": "Start process",
    children: (S, b) => {
      var w = Ge("ADD NEW PROCESS");
      x(S, w);
    },
    $$slots: { default: !0 }
  });
  var C = j(A, 2);
  Yg(C, {
    get items() {
      return o(s);
    },
    get columns() {
      return u;
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
      var M = Wp(), D = Y(M);
      In(D, {
        type: "button",
        onclick: (U) => {
          U.stopPropagation(), e.handleEdit(L());
        },
        "aria-label": "Edit process",
        class: "mdc-button--raised",
        style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
        children: (U, H) => {
          var Q = Ge("Edit");
          x(U, Q);
        },
        $$slots: { default: !0 }
      });
      var O = j(D, 2);
      {
        var J = (U) => {
          In(U, {
            type: "button",
            "aria-label": "Start process",
            onclick: (H) => {
              H.stopPropagation(), e.handleStart(L());
            },
            class: "mdc-button--raised",
            style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
            children: (H, Q) => {
              var de = Ge("Continue");
              x(H, de);
            },
            $$slots: { default: !0 }
          });
        }, V = (U) => {
          In(U, {
            type: "button",
            "aria-label": "Start process",
            onclick: (H) => {
              H.stopPropagation(), e.handleStart(L());
            },
            class: "mdc-button--raised",
            style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
            children: (H, Q) => {
              var de = Ge("Start");
              x(H, de);
            },
            $$slots: { default: !0 }
          });
        };
        ne(O, (U) => {
          m(L()) ? U(J) : U(V, !1);
        });
      }
      x(b, M);
    },
    $$slots: { actions: !0 }
  }), x(n, p), Ie();
}
dt(["click"]);
var Zp = /* @__PURE__ */ Z('<div class="add-group-form svelte-dyj28k"><!> <!></div>');
function Xp(n, e) {
  _e(e, !0);
  let t = _(e, "open", 15, !1), r = /* @__PURE__ */ oe(""), i = /* @__PURE__ */ oe(Ae((e.groups + 1).toString()));
  const a = () => sr("cancel"), s = () => sr("confirm", { name: o(r), position: Number(o(i)) });
  let u = /* @__PURE__ */ $(() => [
    ...Array.from({ length: e.groups + 1 }, (d, c) => ({ value: (c + 1).toString(), label: (c + 1).toString() }))
    // iterate from 1..groups+1
  ]), l = /* @__PURE__ */ $(() => o(r) && o(i));
  {
    const d = (h) => {
      var f = Zp(), v = F(f);
      nl(v, {
        label: "Name",
        placeholder: "Group 1",
        variant: "outlined",
        required: !0,
        get value() {
          return o(r);
        },
        set value(m) {
          W(r, m, !0);
        }
      });
      var g = j(v, 2);
      Rv(g, {
        get data() {
          return o(u);
        },
        label: "Position",
        variant: "outlined",
        required: !0,
        get value() {
          return o(i);
        },
        set value(m) {
          W(i, m, !0);
        }
      }), x(h, f);
    };
    let c = /* @__PURE__ */ $(() => !o(l));
    zs(n, {
      title: "Add Groups",
      confirmActionText: "Add",
      maxWidth: "600px",
      onConfirm: s,
      onCancel: a,
      onClose: a,
      get confirmDisabled() {
        return o(c);
      },
      get open() {
        return t();
      },
      set open(h) {
        t(h);
      },
      content: d,
      $$slots: { content: !0 }
    });
  }
  Ie();
}
var Kp = /* @__PURE__ */ Z("<div><!></div>");
function fl(n, e) {
  const t = _(e, "active", 3, !1), r = _(e, "visited", 3, !1);
  var i = Kp(), a = F(i);
  {
    var s = (l) => {
      var d = ae(), c = Y(d);
      {
        var h = (v) => {
          wd(v, {});
        }, f = (v) => {
          var g = ae(), m = Y(g);
          {
            var p = (E) => {
              sg(E);
            }, I = (E) => {
              var A = ae(), y = Y(A);
              {
                var T = (C) => {
                  lg(C, {});
                };
                ne(
                  y,
                  (C) => {
                    e.status === "warning" && C(T);
                  },
                  !0
                );
              }
              x(E, A);
            };
            ne(
              m,
              (E) => {
                e.status === "error" ? E(p) : E(I, !1);
              },
              !0
            );
          }
          x(v, g);
        };
        ne(c, (v) => {
          e.status === "check" ? v(h) : v(f, !1);
        });
      }
      x(l, d);
    }, u = (l) => {
      var d = Ge();
      ue(() => Le(d, e.number)), x(l, d);
    };
    ne(a, (l) => {
      r() && e.status ? l(s) : l(u, !1);
    });
  }
  ue(() => Sr(i, 1, `step-circle ${t() ? "active" : ""} ${r() ? "visited" : ""}`, "svelte-1as5ana")), x(n, i);
}
var Yp = /* @__PURE__ */ Z('<div class="group-list-item svelte-15ukemk"><div><!></div> <div><!></div> <!> <!></div>'), Jp = /* @__PURE__ */ Z('<div class="edit-groups-form"><h3>Drag & Drop to change Order</h3> <div></div></div>');
function Qp(n, e) {
  _e(e, !0);
  const t = 100;
  let r = _(e, "open", 15, !1), i = /* @__PURE__ */ oe(Ae([...e.groups]));
  const a = () => sr("cancel"), s = () => {
    sr("confirm", { groups: o(i).map((h) => ({ ...h })) });
  }, u = (h) => () => {
    W(i, o(i).filter((f) => f.id !== h), !0);
  }, l = (h) => {
    W(i, h.detail.items, !0);
  };
  function d(h, f, v) {
    const g = h.querySelector(".step-circle");
    g && (g.innerHTML = v + 1);
  }
  let c = /* @__PURE__ */ $(() => o(i).every((h) => h.title.trim().length > 0));
  {
    const h = (v) => {
      var g = Jp(), m = j(F(g), 2);
      fn(m, 31, () => o(i), (p) => p.id, (p, I, E) => {
        var A = Yp(), y = F(A), T = F(y);
        {
          let L = /* @__PURE__ */ $(() => o(E) + 1);
          fl(T, {
            get number() {
              return o(L);
            }
          });
        }
        var C = j(y, 2), S = F(C);
        il(S, {}), De(C, (L) => Cr == null ? void 0 : Cr(L));
        var b = j(C, 2);
        nl(b, {
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
        var w = j(b, 2);
        {
          let L = /* @__PURE__ */ $(() => u(o(I).id));
          Od(w, {
            type: "delete",
            tooltip: "Delete",
            fillColor: "#FF203A",
            get onClick() {
              return o(L);
            }
          });
        }
        ue(() => Ct(A, "data-id", o(I).id)), qs(A, () => $s, () => ({ duration: t })), x(p, A);
      }), De(m, (p, I) => yr == null ? void 0 : yr(p, I), () => ({
        items: o(i),
        flipDurationMs: t,
        dropTargetStyle: {},
        transformDraggedElement: d,
        type: "order-ew-groups-zone"
      })), Xt("consider", m, l), Xt("finalize", m, l), x(v, g);
    };
    let f = /* @__PURE__ */ $(() => !o(c));
    zs(n, {
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
async function $p(n, e, t) {
  const r = await Ai(Xp, { groups: e().length });
  r.type === "confirm" && t()(r.data.name, r.data.position);
}
async function e_(n, e, t) {
  const r = e().map((s, u) => ({ id: u.toString(), title: s.title })), i = await Ai(Qp, { groups: r });
  if (i.type !== "confirm") return;
  const a = i.data.groups.map((s) => {
    const u = parseInt(s.id, 10);
    return { ...e()[u], title: s.title };
  });
  t()(a);
}
var t_ = /* @__PURE__ */ Z('<div class="plugin-list__header-action svelte-s6osjd"><!></div>'), n_ = /* @__PURE__ */ Z('<header class="plugin-list__header svelte-s6osjd"><p class="plugin-list__title svelte-s6osjd"> </p> <!></header>'), r_ = /* @__PURE__ */ Z('<div aria-label="drag-handle"><!></div>'), i_ = /* @__PURE__ */ Z('<div class="plugin-list__item-action svelte-s6osjd"><!></div>'), a_ = /* @__PURE__ */ Z('<div class="plugin-list__item-row svelte-s6osjd"><div class="plugin-list__item-row__left svelte-s6osjd"><!> <span class="plugin-list__item-name svelte-s6osjd"> </span></div> <!></div>'), s_ = /* @__PURE__ */ Z("<div><!></div>"), o_ = /* @__PURE__ */ Z('<div style="display: flex; justify-content: center; margin-top: 0.4rem;"><!></div>'), l_ = /* @__PURE__ */ Z('<section class="plugin-list__group svelte-s6osjd"><header class="plugin-list__group-header svelte-s6osjd"><span class="plugin-list__group-index plugin-list__group-plugins__indicator svelte-s6osjd"><!></span> <span class="plugin-list__group-title svelte-s6osjd"> </span></header> <div class="plugin-list__group-plugins-section svelte-s6osjd"><div></div></div> <!></section>'), u_ = /* @__PURE__ */ Z('<div class="plugin-list__body svelte-s6osjd"></div>'), d_ = /* @__PURE__ */ Z('<div class="plugin-list__footer svelte-s6osjd"><button type="button" class="plugin-list__footer-button plugin-list__footer-button--edit svelte-s6osjd"><!> <span>Edit groups</span></button> <button type="button" class="plugin-list__footer-button plugin-list__footer-button--add svelte-s6osjd"><!> <span>Add group</span></button></div>');
function hl(n, e) {
  _e(e, !0);
  const t = (h) => {
    var f = n_(), v = F(f), g = F(v), m = j(v, 2);
    {
      var p = (I) => {
        var E = t_(), A = F(E);
        pe(A, () => e.headerAction), x(I, E);
      };
      ne(m, (I) => {
        e.headerAction && I(p);
      });
    }
    ue(() => Le(g, s())), x(h, f);
  }, r = (h) => {
    var f = u_();
    fn(f, 21, a, Er, (v, g, m) => {
      var p = l_(), I = F(p), E = F(I), A = F(E);
      fl(A, { number: m + 1 });
      var y = j(E, 2), T = F(y), C = j(I, 2), S = F(C);
      let b;
      fn(S, 31, () => o(g).plugins, (M) => M.id, (M, D, O) => {
        var J = s_(), V = F(J);
        Yd(V, {
          variant: "secondary",
          children: (U, H) => {
            var Q = a_(), de = F(Q), G = F(de);
            {
              var ie = (z) => {
                var P = r_(), ee = F(P);
                il(ee, {}), De(P, (K) => Cr == null ? void 0 : Cr(K)), x(z, P);
              };
              ne(G, (z) => {
                cn.isEditing && z(ie);
              });
            }
            var ce = j(G, 2), xe = F(ce), me = j(de, 2);
            {
              var q = (z) => {
                var P = i_(), ee = F(P);
                pe(ee, () => e.itemAction, () => ({
                  group: o(g),
                  plugin: o(D),
                  groupIndex: m,
                  pluginIndex: o(O)
                })), x(z, P);
              };
              ne(me, (z) => {
                e.itemAction && z(q);
              });
            }
            ue(() => Le(xe, o(D).name)), x(U, Q);
          },
          $$slots: { default: !0 }
        }), ue(() => Ct(J, "data-id", o(D).id)), qs(J, () => $s, () => ({ duration: 100 })), x(M, J);
      }), De(S, (M, D) => yr == null ? void 0 : yr(M, D), () => ({
        items: o(g).plugins,
        flipDurationMs: 100,
        dropTargetStyle: {}
      }));
      var w = j(C, 2);
      {
        var L = (M) => {
          var D = o_(), O = F(D);
          Ag(O, { svgStyles: "fill: #6B9197;" }), x(M, D);
        };
        ne(w, (M) => {
          m < a().length - 1 && M(L);
        });
      }
      ue(
        (M) => {
          Le(T, o(g).title), b = Sr(S, 1, "plugin-list__group-plugins svelte-s6osjd", null, b, M);
        },
        [
          () => ({
            "plugin_list__group-plugins--dashed": cn.isEditing
          })
        ]
      ), Xt("consider", S, (M) => d(M, o(g))), Xt("finalize", S, (M) => c(M, o(g))), x(v, p);
    }), x(h, f);
  }, i = (h) => {
    var f = ae(), v = Y(f);
    {
      var g = (m) => {
        var p = d_(), I = F(p);
        I.__click = [e_, a, l];
        var E = F(I);
        Sd(E, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        });
        var A = j(I, 2);
        A.__click = [$p, a, u];
        var y = F(A);
        Td(y, {
          svgStyles: "fill: var(--primary-base);",
          "aria-hidden": "true"
        }), x(m, p);
      };
      ne(v, (m) => {
        cn.isEditing && m(g);
      });
    }
    x(h, f);
  };
  let a = _(e, "pluginGroups", 19, () => []), s = _(e, "title", 3, "Process"), u = _(e, "onAddGroup", 3, () => {
  }), l = _(e, "onUpdateGroups", 3, (h) => {
  });
  function d(h, f) {
    f.plugins = h.detail.items;
  }
  function c(h, f) {
    h.detail.info.trigger === Tt.DROPPED_OUTSIDE_OF_ANY ? f.plugins = h.detail.items.filter((v) => h.detail.info.id !== v.id) : f.plugins = h.detail.items, l()(a());
  }
  Jd(n, {
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
dt(["click"]);
function c_(n, e) {
  const t = (i) => {
    In(i, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--white); --mdc-theme-on-primary: var(--primary-base)",
      "aria-label": "Edit process",
      get onclick() {
        return e.requestEdit;
      },
      children: (a, s) => {
        var u = Ge("EDIT");
        x(a, u);
      },
      $$slots: { default: !0 }
    });
  };
  let r = _(e, "pluginGroups", 19, () => []);
  hl(n, {
    get pluginGroups() {
      return r();
    },
    get headerAction() {
      return t;
    }
  });
}
function f_(n, e) {
  const t = (n == null ? void 0 : n.name) ?? "—";
  return [
    { label: "Engineering-Wizard", enabled: !0 },
    { label: e != null && e.edit ? `Edit ${t}` : t, enabled: !1 }
  ];
}
function h_() {
  var e;
  const n = document.querySelector("open-scd");
  return ((e = n == null ? void 0 : n.shadowRoot) == null ? void 0 : e.querySelector("compas-layout")) ?? null;
}
function v_(n) {
  var e;
  (e = h_()) == null || e.dispatchEvent(new CustomEvent("toggle-editor-tabs", { detail: { visible: n }, bubbles: !0, composed: !0 }));
}
const qn = Ae({ visible: !0 });
zu(() => {
  Ee(() => {
    v_(qn.visible);
  });
});
var g_ = /* @__PURE__ */ Z('<button class="btn-engineering-wizard_title svelte-qwuvgs">Engineering Wizard</button>');
function $d(n, e) {
  var t = g_();
  t.__click = function(...r) {
    var i;
    (i = e.onClick) == null || i.apply(this, r);
  }, x(n, t);
}
dt(["click"]);
var m_ = (n, e, t) => e.onSelect(o(t).id), p_ = /* @__PURE__ */ Z('<button class="step-button svelte-de8jn9"><!></button>'), __ = /* @__PURE__ */ Z('<div class="step-line svelte-de8jn9" aria-hidden="true"></div>'), I_ = /* @__PURE__ */ Z('<div class="step svelte-de8jn9"><!> <p> </p></div> <!>', 1), b_ = /* @__PURE__ */ Z('<div class="steps svelte-de8jn9"></div>');
function y_(n, e) {
  _e(e, !0);
  let t = _(e, "items", 19, () => []), r = _(e, "visited", 19, () => []), i = _(e, "currentId", 3, null), a = _(e, "status", 19, () => ({})), s = _(e, "tooltipMap", 19, () => ({}));
  var u = b_();
  fn(u, 21, t, Er, (l, d, c) => {
    var h = I_(), f = Y(h), v = F(f);
    {
      let E = /* @__PURE__ */ $(() => s()[o(d).id] ?? "");
      Ld(v, {
        get content() {
          return o(E);
        },
        side: "bottom",
        children: (A, y) => {
          var T = p_();
          T.__click = [m_, e, d];
          var C = F(T);
          {
            let S = /* @__PURE__ */ $(() => o(d).id === i()), b = /* @__PURE__ */ $(() => r().includes(o(d).id) && o(d).id !== i());
            fl(C, {
              number: c + 1,
              get active() {
                return o(S);
              },
              get visited() {
                return o(b);
              },
              get status() {
                return a()[o(d).id];
              }
            });
          }
          ue(() => Ct(T, "aria-current", o(d).id === i() ? "step" : void 0)), x(A, T);
        },
        $$slots: { default: !0 }
      });
    }
    var g = j(v, 2), m = F(g), p = j(f, 2);
    {
      var I = (E) => {
        var A = __();
        x(E, A);
      };
      ne(p, (E) => {
        c < t().length - 1 && E(I);
      });
    }
    ue(() => Le(m, o(d).label)), x(l, h);
  }), x(n, u), Ie();
}
dt(["click"]);
function C_(n, e) {
  const t = [
    { id: "process-definition", label: "Process Definition" },
    {
      id: "validator-configuration",
      label: "Validator Configuration"
    }
  ];
  let r = _(e, "currentId", 3, null), i = _(e, "visited", 19, () => []);
  y_(n, {
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
var A_ = /* @__PURE__ */ Z('<div class="stepper-actions svelte-1jrjxrv"><div class="stepper-navigation svelte-1jrjxrv"><button type="button" class="btn btn--back svelte-1jrjxrv" aria-label="Previous step"><span><!></span> <span>Back</span></button> <button type="button" class="btn btn--next svelte-1jrjxrv" aria-label="Next step"><span>Next</span> <span><!></span></button></div> <button type="button" class="btn btn--done svelte-1jrjxrv" aria-label="Done"><span><!></span> <span>Done</span></button></div>');
function ec(n, e) {
  const t = _(e, "isAtFirstStep", 3, !1), r = _(e, "isAtLastStep", 3, !1), i = _(e, "doneDisabled", 3, !1);
  var a = A_(), s = F(a), u = F(s);
  u.__click = function(...p) {
    var I;
    (I = e.onGoToPreviousStep) == null || I.apply(this, p);
  };
  var l = F(u), d = F(l);
  wg(d, { svgStyles: "fill: var(--white)" });
  var c = j(u, 2);
  c.__click = function(...p) {
    var I;
    (I = e.onGoToNextStep) == null || I.apply(this, p);
  };
  var h = j(F(c), 2), f = F(h);
  Sg(f, { svgStyles: "fill: var(--primary-base);" });
  var v = j(s, 2);
  v.__click = function(...p) {
    var I;
    (I = e.onDone) == null || I.apply(this, p);
  };
  var g = F(v), m = F(g);
  wd(m, { svgStyles: "fill: var(--primary-base);" }), ue(() => {
    u.disabled = t(), c.disabled = r(), v.disabled = i();
  }), x(n, a);
}
dt(["click"]);
var E_ = /* @__PURE__ */ Z('<div class="empty-state svelte-iwa4yq"><p> </p></div>'), S_ = /* @__PURE__ */ Z('<div class="validation-xml-container svelte-iwa4yq"><div class="validation-xml-container__meta svelte-iwa4yq"><span class="validation-xml-container__name svelte-iwa4yq"> </span> <div class="validation-xml-container__actions svelte-iwa4yq"><button type="button" class="delete-btn svelte-iwa4yq" title="Remove"><!></button></div></div> <div class="xml-viewer svelte-iwa4yq"><div class="xml-viewer__box svelte-iwa4yq"><div class="xml-viewer__label svelte-iwa4yq">Scope</div> <pre class="svelte-iwa4yq"> </pre></div> <div class="xml-viewer__box svelte-iwa4yq"><div class="xml-viewer__label svelte-iwa4yq">Rule</div> <pre class="svelte-iwa4yq"> </pre></div> <div class="xml-viewer__box svelte-iwa4yq"><div class="xml-viewer__label svelte-iwa4yq">Failure message</div> <pre class="svelte-iwa4yq"> </pre></div></div></div>'), x_ = /* @__PURE__ */ Z('<div class="validation-xml-list svelte-iwa4yq"></div>');
function w_(n, e) {
  _e(e, !0), _(e, "pluginGroups", 19, () => []);
  let t = _(e, "selectedPlugin", 3, null);
  const r = /* @__PURE__ */ $(() => {
    var c, h, f;
    const l = (c = Ve == null ? void 0 : Ve.process) == null ? void 0 : c.id, d = (h = t()) == null ? void 0 : h.id;
    return !l || !d ? [] : (((f = t()) == null ? void 0 : f.validations) ?? []).filter((v) => v.processId === l && v.pluginId === d);
  });
  function i(l) {
  }
  var a = ae(), s = Y(a);
  {
    var u = (l) => {
      var d = ae(), c = Y(d);
      {
        var h = (v) => {
          var g = E_(), m = F(g), p = F(m);
          ue(() => Le(p, `No validations configured for "${t().name ?? ""}" yet.`)), x(v, g);
        }, f = (v) => {
          var g = x_();
          fn(g, 21, () => o(r), Er, (m, p, I) => {
            var E = S_(), A = F(E), y = F(A), T = F(y), C = j(y, 2), S = F(C);
            S.__click = () => void 0;
            var b = F(S);
            xd(b, { svgStyles: "fill: #FF203A" });
            var w = j(A, 2), L = F(w), M = j(F(L), 2), D = F(M), O = j(L, 2), J = j(F(O), 2), V = F(J), U = j(O, 2), H = j(F(U), 2), Q = F(H);
            ue(() => {
              Le(T, o(p).title), Le(D, o(p).context), Le(V, o(p).assert), Le(Q, o(p).message);
            }), x(m, E);
          }), x(v, g);
        };
        ne(c, (v) => {
          o(r).length === 0 ? v(h) : v(f, !1);
        });
      }
      x(l, d);
    };
    ne(s, (l) => {
      t() && l(u);
    });
  }
  x(n, a), Ie();
}
dt(["click"]);
function T_(n) {
  const e = (n || "").trim() || "process", t = new Set((Dt.processes ?? []).map((a) => a.id));
  if (!t.has(e)) return e;
  let r = 2, i = `${e}-${r}`;
  for (; t.has(i); )
    r += 1, i = `${e}-${r}`;
  return i;
}
function D_(n) {
  var a;
  const e = Ns(n), t = (e.id || e.name || "process").trim(), r = T_(t), i = {
    id: r,
    version: e.version || "1.0.0",
    name: e.name || r,
    description: e.description || "",
    pluginGroups: (a = e.pluginGroups) != null && a.length ? e.pluginGroups : [{ title: "Ungrouped", plugins: [] }]
  };
  return Dt.processes = [...Dt.processes ?? [], i], i;
}
function L_(n, e, t) {
  const r = "Ungrouped", i = Dt.processes.find((u) => u.id === n);
  if (!i) return;
  const a = i.pluginGroups ?? (i.pluginGroups = []);
  let s = a.find((u) => u.title === r);
  s || (s = { title: r, plugins: [] }, a.push(s)), s.plugins ?? (s.plugins = []), s.plugins.push(e);
}
function O_(n, e, t) {
  const r = Dt.processes ?? [];
  Dt.processes = r.map((i) => {
    if (i.id !== n || !i.pluginGroups) return i;
    const a = i.pluginGroups.map((s) => {
      const u = (s.plugins ?? []).map((l) => {
        if (l.id !== e) return l;
        const d = l.validations ?? [];
        return { ...l, validations: [...d, t] };
      });
      return { ...s, plugins: u };
    });
    return { ...i, pluginGroups: a };
  });
}
function R_(n, e) {
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
function M_(n) {
  var t;
  const e = Dt.processes.find((r) => r.id === n);
  if (!(!e || !e.pluginGroups))
    for (const r of e.pluginGroups)
      (t = r.plugins) == null || t.splice(0, r.plugins.length);
}
function P_(n, e, t) {
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
function k_(n, e) {
  const t = Dt.processes.find((r) => r.id === n);
  t && (t.pluginGroups ?? (t.pluginGroups = []), t.pluginGroups.splice(0, t.pluginGroups.length, ...e));
}
function F_(n) {
  cl.plugins = [...n];
}
function mo(n, e = null) {
  Ei.process = n ?? null, Ei.lastSelectedPluginId = e ?? null;
}
function N_(n) {
  Ei.lastSelectedPluginId = n ?? null;
}
var U_ = (n, e, t) => e(t().id), H_ = /* @__PURE__ */ Z('<button type="button" class="plugin-list__removeBtn svelte-1qh2g9"><!></button>');
function B_(n, e) {
  _e(e, !0);
  const t = (c) => {
    var h = ae(), f = Y(h);
    {
      var v = (g) => {
        In(g, {
          variant: "raised",
          style: "background-color: #FF203A",
          "aria-label": "Remove all plugins",
          onclick: a,
          children: (m, p) => {
            var I = Ge("REMOVE ALL");
            x(m, I);
          },
          $$slots: { default: !0 }
        });
      };
      ne(f, (g) => {
        o(d) && g(v);
      });
    }
    x(c, h);
  }, r = (c, h) => {
    let f = () => h == null ? void 0 : h().plugin;
    var v = H_();
    v.__click = [U_, s, f];
    var g = F(v);
    Ed(g, { svgStyles: "fill: #FF203A" }), ue(() => Ct(v, "aria-label", `Remove ${f().name}`)), x(c, v);
  };
  let i = _(e, "pluginGroups", 19, () => []);
  async function a() {
    (await Ai(rl, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm" && M_(Ve.process.id);
  }
  function s(c) {
    R_(Ve.process.id, c);
  }
  function u(c, h) {
    P_(Ve.process.id, c, h);
  }
  function l(c) {
    k_(Ve.process.id, c);
  }
  let d = /* @__PURE__ */ $(() => i().flatMap((c) => c.plugins).length > 0);
  hl(n, {
    get pluginGroups() {
      return i();
    },
    get headerAction() {
      return t;
    },
    get itemAction() {
      return r;
    },
    onAddGroup: (c, h) => u(c, h),
    onUpdateGroups: (c) => l(c)
  }), Ie();
}
dt(["click"]);
var G_ = /* @__PURE__ */ Z('<div class="card-header svelte-1sbzvyb"><p class="header-info svelte-1sbzvyb">Add External Plugins</p> <div class="search-input svelte-1sbzvyb"><!></div></div>'), V_ = (n, e, t) => e(o(t)), q_ = /* @__PURE__ */ Z('<div class="card-item-content svelte-1sbzvyb"><div class="card-item-content__left svelte-1sbzvyb"><div aria-label="drag-handle"><!></div> <p class="plugin-name svelte-1sbzvyb"> </p></div> <button class="plugin-add-btn svelte-1sbzvyb"><!></button></div>'), W_ = /* @__PURE__ */ Z("<div><!></div>"), z_ = /* @__PURE__ */ Z('<div class="card-parent-content svelte-1sbzvyb"></div>');
function tc(n, e) {
  _e(e, !0);
  const t = (h) => {
    var f = G_(), v = j(F(f), 2), g = F(v);
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
    var f = z_();
    fn(f, 29, i, (v) => v.id, (v, g) => {
      var m = W_(), p = F(m);
      Yd(p, {
        variant: "secondary",
        children: (I, E) => {
          var A = q_(), y = F(A), T = F(y), C = F(T);
          il(C, {}), De(T, (M) => Cr == null ? void 0 : Cr(M));
          var S = j(T, 2), b = F(S), w = j(y, 2);
          w.__click = [V_, c, g];
          var L = F(w);
          Td(L, { svgStyles: "fill: var(--primary-base);" }), ue(() => {
            Le(b, o(g).name), Ct(w, "aria-label", `Add ${o(g).name}`);
          }), x(I, A);
        },
        $$slots: { default: !0 }
      }), ue(() => Ct(m, "data-id", o(g).id)), qs(m, () => $s, () => ({ duration: 100 })), x(v, m);
    }), De(f, (v, g) => yr == null ? void 0 : yr(v, g), () => ({
      items: i(),
      flipDurationMs: 100,
      dropTargetStyle: {},
      dropFromOthersDisabled: !0
    })), Xt("consider", f, l), Xt("finalize", f, u), x(h, f);
  };
  let i = _(e, "plugins", 23, () => []), a = _(e, "searchTerm", 15, ""), s = _(e, "onAddPlugin", 3, () => {
  });
  const u = (h) => {
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
  function d(h) {
    const f = h.id.endsWith("_copy") ? h.id.slice(0, -5) : h.id;
    return i().find((v) => v.id === f) ?? { ...h, id: f };
  }
  function c(h) {
    s()(d(h));
  }
  Jd(n, {
    backgroundColor: "#DAE3E6",
    get header() {
      return t;
    },
    get content() {
      return r;
    }
  }), Ie();
}
dt(["click"]);
function nc(n) {
  var r;
  const e = n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "").slice(0, 32), t = ((r = crypto.randomUUID) == null ? void 0 : r.call(crypto).split("-")[0]) ?? Math.random().toString(36).slice(2, 10);
  return `ext-${e || "plugin"}-${t}`;
}
var j_ = /* @__PURE__ */ Z('<div class="process-definition-view svelte-3po5y4"><!> <div class="drag-and-drop-info svelte-3po5y4"><!> <p class="svelte-3po5y4">SELECT OR DRAG & DROP PLUGINS</p></div> <!></div>');
function Z_(n, e) {
  _e(e, !0);
  let t = _(e, "pluginGroups", 19, () => []), r = /* @__PURE__ */ oe(""), i = /* @__PURE__ */ $(() => {
    const f = cl.plugins.map((g) => ({
      id: nc(g.name),
      name: g.name,
      src: g.src,
      type: "internal"
    })), v = o(r).toLowerCase().trim();
    return v ? f.filter((g) => g.name.toLowerCase().includes(v)) : f;
  });
  function a(h) {
    const f = Ve.process.id;
    L_(f, h);
  }
  var s = j_(), u = F(s);
  B_(u, {
    get pluginGroups() {
      return t();
    }
  });
  var l = j(u, 2), d = F(l);
  Dd(d, { svgStyles: "fill: #6B9197" });
  var c = j(l, 2);
  tc(c, {
    get plugins() {
      return o(i);
    },
    onAddPlugin: a,
    get searchTerm() {
      return o(r);
    },
    set searchTerm(h) {
      W(r, h, !0);
    }
  }), x(n, s), Ie();
}
var X_ = /* @__PURE__ */ Z('<button type="button"><span> </span></button>'), K_ = /* @__PURE__ */ Z('<div><button type="button" class="validation-groups__group-title svelte-4zr9uj"> </button> <!></div>'), Y_ = /* @__PURE__ */ Z('<div class="validation-groups svelte-4zr9uj"></div>');
function rc(n, e) {
  _e(e, !0);
  let t = _(e, "pluginGroups", 19, () => []), r = _(e, "selectedGroupIndex", 15, 0), i = _(e, "selectedPluginIndex", 15, 0), a = _(e, "expandedGroupBackground", 3, "var(--primary-base)"), s = _(e, "expandedGroupBorderColor", 3, "var(--primary-base)"), u = null;
  Ee(() => {
    var m, p, I, E, A;
    if (!((m = t()) != null && m.length)) {
      r(null), i(null), u = null;
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
        r(h), i(null), u = null;
        return;
      }
      h = y, f = t()[h], r(h), i(0);
    }
    let v = i() ?? 0;
    (v < 0 || v >= (((I = f.plugins) == null ? void 0 : I.length) ?? 0)) && (v = 0), r(h), i(v);
    const g = (E = f.plugins) == null ? void 0 : E[v];
    g && g.id !== u && (u = g.id, (A = e.selectPlugin) == null || A.call(e, g));
  });
  function l(h) {
    var g, m, p;
    const f = t()[h];
    r(h), i((g = f == null ? void 0 : f.plugins) != null && g.length ? 0 : null);
    const v = (m = f == null ? void 0 : f.plugins) == null ? void 0 : m[0];
    v ? (u = v.id, (p = e.selectPlugin) == null || p.call(e, v)) : u = null;
  }
  function d(h, f) {
    var g, m, p;
    r(h), i(f);
    const v = (m = (g = t()[h]) == null ? void 0 : g.plugins) == null ? void 0 : m[f];
    v && (u = v.id, (p = e.selectPlugin) == null || p.call(e, v));
  }
  var c = Y_();
  fn(c, 21, t, Er, (h, f, v) => {
    var g = K_();
    let m;
    var p = F(g);
    p.__click = () => l(v);
    var I = F(p), E = j(p, 2);
    {
      var A = (y) => {
        var T = ae(), C = Y(T);
        fn(C, 17, () => o(f).plugins, Er, (S, b, w) => {
          var L = X_();
          let M;
          L.__click = () => d(v, w);
          var D = F(L), O = F(D);
          ue(
            (J) => {
              M = Sr(L, 1, "validation-groups__plugin svelte-4zr9uj", null, M, J), Le(O, o(b).name);
            },
            [() => ({ active: w === i() })]
          ), x(S, L);
        }), x(y, T);
      };
      ne(E, (y) => {
        v === r() && y(A);
      });
    }
    ue(
      (y) => {
        m = Sr(g, 1, "validation-groups__group svelte-4zr9uj", null, m, y), Le(I, o(f).title);
      },
      [() => ({ expanded: v === r() })]
    ), x(h, g);
  }), ue(() => $e(c, `--expanded-group-bg:${a()}; --expanded-group-border:${s()};`)), x(n, c), Ie();
}
dt(["click"]);
let J_ = 0;
var Q_ = /* @__PURE__ */ Z("<div><!></div>");
function po(n, e) {
  _e(e, !0);
  let t = _(e, "use", 19, () => []), r = _(e, "class", 3, ""), i = _(e, "id", 19, () => "SMUI-textfield-helper-text-" + J_++), a = _(e, "persistent", 3, !1), s = _(e, "validationMsg", 3, !1), u = /* @__PURE__ */ qe(e, [
    "$$slots",
    "$$events",
    "$$legacy",
    "use",
    "class",
    "id",
    "persistent",
    "validationMsg",
    "children"
  ]), l, d = /* @__PURE__ */ oe(void 0), c = Ae({}), h = Ae({}), f = /* @__PURE__ */ oe(void 0);
  const v = be("SMUI:textfield:helper-text:id"), g = be("SMUI:textfield:helper-text:mount"), m = be("SMUI:textfield:helper-text:unmount");
  et(() => (W(
    d,
    new Ah({
      addClass: I,
      removeClass: E,
      hasClass: p,
      getAttr: A,
      setAttr: y,
      removeAttr: T,
      setContent: (D) => {
        W(f, D, !0);
      }
    }),
    !0
  ), v && v(i()), g && g(o(d)), o(d).init(), () => {
    var D;
    m && o(d) && m(o(d)), (D = o(d)) == null || D.destroy();
  }));
  function p(D) {
    return D in c ? c[D] : C().classList.contains(D);
  }
  function I(D) {
    c[D] || (c[D] = !0);
  }
  function E(D) {
    (!(D in c) || c[D]) && (c[D] = !1);
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
  var S = { getElement: C }, b = Q_();
  Be(
    b,
    (D) => ({
      class: D,
      "aria-hidden": a() ? void 0 : "true",
      id: i(),
      ...h,
      ...u
    }),
    [
      () => Ne({
        "mdc-text-field-helper-text": !0,
        "mdc-text-field-helper-text--persistent": a(),
        "mdc-text-field-helper-text--validation-msg": s(),
        ...c,
        [r()]: !0
      })
    ]
  );
  var w = F(b);
  {
    var L = (D) => {
      var O = ae(), J = Y(O);
      pe(J, () => e.children ?? ve), x(D, O);
    }, M = (D) => {
      var O = Ge();
      ue(() => Le(O, o(f))), x(D, O);
    };
    ne(w, (D) => {
      o(f) == null ? D(L) : D(M, !1);
    });
  }
  return Se(b, (D) => l = D, () => l), De(b, (D, O) => re == null ? void 0 : re(D, O), t), x(n, b), Ie(S);
}
var $_ = /* @__PURE__ */ Z('<div class="add-validation-form svelte-fau6z8"><!> <!> <!> <!></div>');
function eI(n, e) {
  _e(e, !0);
  let t = _(e, "open", 15, !1), r = Ae({
    severity: "error",
    title: "",
    context: "",
    assert: "",
    message: "",
    processId: e.process.id,
    pluginId: e.plugin.id
  });
  const i = /* @__PURE__ */ $(() => {
    var u, l;
    return !!((u = r.title) != null && u.trim()) && !!((l = r.assert) != null && l.trim());
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
    const u = (d) => {
      var c = $_(), h = F(c);
      nl(h, {
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
      var f = j(h, 2);
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
          po(p, {
            children: (I, E) => {
              var A = Ge("Context");
              x(I, A);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { helper: !0 }
      });
      var v = j(f, 2);
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
          po(p, {
            children: (I, E) => {
              var A = Ge("Assert");
              x(I, A);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { helper: !0 }
      });
      var g = j(v, 2);
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
          po(p, {
            children: (I, E) => {
              var A = Ge("Message");
              x(I, A);
            },
            $$slots: { default: !0 }
          });
        },
        $$slots: { helper: !0 }
      }), x(d, c);
    };
    let l = /* @__PURE__ */ $(() => !o(i));
    zs(n, {
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
      set open(d) {
        t(d);
      },
      content: u,
      $$slots: { content: !0 }
    });
  }
  Ie();
}
var tI = /* @__PURE__ */ Z('<div class="header svelte-1qdn6hx"><!> <!></div> <!>', 1), nI = /* @__PURE__ */ Z('<div class="stepper svelte-1qdn6hx"><!> <!> <!></div> <div class="step-content svelte-1qdn6hx"><!></div>', 1);
function rI(n, e) {
  _e(e, !0);
  const t = ["process-definition", "validator-configuration"];
  let r = /* @__PURE__ */ oe(0), i = /* @__PURE__ */ $(() => t[o(r)] ?? t[0]), a = /* @__PURE__ */ $(() => o(r) === 0), s = /* @__PURE__ */ $(() => o(r) === t.length - 1), u = /* @__PURE__ */ $(() => Ve.process.pluginGroups), l = /* @__PURE__ */ oe(null), d = /* @__PURE__ */ oe(Ae([])), c = /* @__PURE__ */ oe(null), h = /* @__PURE__ */ oe(null), f = /* @__PURE__ */ $(() => {
    var U;
    const J = Ve.process, V = o(l);
    return !J || !V ? null : ((U = J.pluginGroups) == null ? void 0 : U.flatMap((H) => H.plugins ?? []).find((H) => H.id === V)) ?? null;
  });
  et(() => (qn.visible = !1, () => {
    qn.visible = !0;
  }));
  function v(J) {
    J === 0 && (qn.visible = !0, Ve.process = null);
  }
  function g() {
    o(s) || (E(o(i)), W(r, o(r) + 1));
  }
  function m() {
    o(a) || W(r, o(r) - 1);
  }
  function p() {
    cn.isEditing = !1, qn.visible = !0, Ve.process = null;
  }
  function I(J) {
    const V = t.indexOf(J);
    V !== -1 && W(r, V, !0);
  }
  function E(J) {
    o(d).includes(J) || W(d, [...o(d), J], !0);
  }
  function A(J) {
    W(l, J.id, !0);
  }
  async function y() {
    var H;
    const J = Ve.process, V = o(f);
    if (!V || !J) return;
    const U = await Ai(eI, { plugin: V, process: J });
    (U == null ? void 0 : U.type) === "confirm" && (O_(J.id, V.id, U.data), Ve.process = ((H = Dt.processes) == null ? void 0 : H.find((Q) => Q.id === J.id)) ?? null);
  }
  var T = nI(), C = Y(T), S = F(C);
  $d(S, { onClick: p });
  var b = j(S, 2);
  C_(b, {
    get currentId() {
      return o(i);
    },
    get visited() {
      return o(d);
    },
    onSelect: I
  });
  var w = j(b, 2);
  ec(w, {
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
  var L = j(C, 2), M = F(L);
  {
    var D = (J) => {
      Z_(J, {
        get pluginGroups() {
          return o(u);
        }
      });
    }, O = (J) => {
      var V = ae(), U = Y(V);
      {
        var H = (Q) => {
          var de = tI(), G = Y(de), ie = F(G);
          rc(ie, {
            get pluginGroups() {
              return o(u);
            },
            selectPlugin: A,
            get selectedGroupIndex() {
              return o(c);
            },
            set selectedGroupIndex(me) {
              W(c, me, !0);
            },
            get selectedPluginIndex() {
              return o(h);
            },
            set selectedPluginIndex(me) {
              W(h, me, !0);
            }
          });
          var ce = j(ie, 2);
          {
            let me = /* @__PURE__ */ $(() => !Ve.process || !o(f));
            In(ce, {
              variant: "raised",
              style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
              onclick: y,
              get disabled() {
                return o(me);
              },
              "aria-label": "Add validation",
              children: (q, z) => {
                var P = Ge("ADD NEW VALIDATION");
                x(q, P);
              },
              $$slots: { default: !0 }
            });
          }
          var xe = j(G, 2);
          w_(xe, {
            get selectedPlugin() {
              return o(f);
            },
            get pluginGroups() {
              return o(u);
            },
            activeBreadcrumbIndex: 2,
            $$events: {
              addValidation: y,
              breadcrumbClick: v
            }
          }), x(Q, de);
        };
        ne(
          U,
          (Q) => {
            o(i) === "validator-configuration" && Q(H);
          },
          !0
        );
      }
      x(J, V);
    };
    ne(M, (J) => {
      o(i) === "process-definition" ? J(D) : J(O, !1);
    });
  }
  x(n, T), Ie();
}
var iI = /* @__PURE__ */ Z('<div class="step-content svelte-1hp1kek"><div class="header svelte-1hp1kek"><!> <!></div> <!></div>'), aI = /* @__PURE__ */ Z('<div class="page-content svelte-1hp1kek"><!></div>');
function sI(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ oe(0), r = /* @__PURE__ */ $(() => f_(Ve.process, { edit: cn.isEditing })), i = /* @__PURE__ */ $(() => Ve.process.pluginGroups);
  function a(h) {
    h === 0 && (qn.visible = !0, Ve.process = null);
  }
  function s() {
    cn.isEditing = !0, qn.visible = !1, W(t, 0);
  }
  var u = aI(), l = F(u);
  {
    var d = (h) => {
      rI(h, {});
    }, c = (h) => {
      var f = iI(), v = F(f), g = F(v);
      rm(g, {
        get breadcrumbs() {
          return o(r);
        },
        activeIndex: 1,
        handleClick: a
      });
      var m = j(g, 2);
      {
        let I = /* @__PURE__ */ $(() => !Ve.process);
        In(m, {
          variant: "raised",
          style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
          onclick: () => e.handleStart(Ve.process),
          get disabled() {
            return o(I);
          },
          "aria-label": "Start process",
          children: (E, A) => {
            var y = Ge("START PROCESS");
            x(E, y);
          },
          $$slots: { default: !0 }
        });
      }
      var p = j(v, 2);
      c_(p, {
        get pluginGroups() {
          return o(i);
        },
        requestEdit: s
      }), x(h, f);
    };
    ne(l, (h) => {
      cn.isEditing ? h(d) : h(c, !1);
    });
  }
  x(n, u), Ie();
}
var oI = /* @__PURE__ */ Z("<div></div>");
function lI(n, e) {
  _e(e, !0);
  function t(d) {
    let c = 3735928559, h = 1103547991;
    for (let f = 0, v; f < d.length; f++)
      v = d.charCodeAt(f), c = Math.imul(c ^ v, 2654435761), h = Math.imul(h ^ v, 1597334677);
    return c = Math.imul(c ^ c >>> 16, 2246822507) ^ Math.imul(h ^ h >>> 13, 3266489909), h = Math.imul(h ^ h >>> 16, 2246822507) ^ Math.imul(c ^ c >>> 13, 3266489909), "oscd-plugin" + ((h >>> 0).toString(16).padStart(8, "0") + (c >>> 0).toString(16).padStart(8, "0"));
  }
  let r = _(e, "editCount", 19, () => -1), i = _(e, "plugins", 19, () => []), a = null, s = null, u = "";
  Ee(() => {
    var c;
    if (!a) return;
    if (!((c = e.plugin) != null && c.src)) {
      a.innerHTML = "", s = null, u = "";
      return;
    }
    const d = t(e.plugin.src);
    d !== u ? (u = d, a.innerHTML = "", s = document.createElement(d), s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi), a.appendChild(s)) : s && (s.doc = e.doc, s.editCount = r(), s.plugins = i(), s.nsdoc = e.nsdoc, s.docName = e.docName, s.docId = e.docId, s.docs = e.docs, s.locale = e.locale, e.oscdApi && (s.oscdApi = e.oscdApi));
  });
  var l = oI();
  Se(l, (d) => a = d, () => a), x(n, l), Ie();
}
const _o = /* @__PURE__ */ new Map();
function Io(n) {
  return !!customElements.get(n);
}
function uI(n) {
  if (!n.includes("-"))
    throw new Error(
      `Invalid custom element name "${n}". Custom element names must contain a dash.`
    );
}
async function ic(n) {
  if (n.type !== "external") return;
  const e = n.id;
  if (uI(e), Io(e)) return;
  const t = _o.get(e);
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
    const s = a, u = class extends s {
    };
    if (!Io(e))
      try {
        customElements.define(e, u);
      } catch (l) {
        if (!Io(e)) throw l;
      }
    await customElements.whenDefined(e);
  })().finally(() => {
    _o.delete(e);
  });
  return _o.set(e, r), r;
}
async function dI(n) {
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
function cI(n, e, t = null) {
  return { parent: n, node: e, reference: t };
}
function fI(n) {
  return { node: n };
}
function hI(n, e) {
  return { element: n, textContent: e };
}
function vI(n, e) {
  return new CustomEvent("oscd-edit-v2", {
    composed: !0,
    bubbles: !0,
    detail: { ...e, edit: n }
  });
}
function gI(n, e) {
  if (!n)
    return console.warn("Host element is undefined, cannot dispatch event"), !1;
  const t = vI(e);
  return n.dispatchEvent(t);
}
const ac = "compas", sc = `${ac}:workflowProcessId`, oc = `${ac}:workflowLastPluginId`;
function vl(n) {
  return n.documentElement;
}
function lc(n, e) {
  return vl(n).querySelector(`:scope > Private[type="${e}"]`);
}
function mI(n, e, t) {
  const r = n.createElementNS(vl(n).namespaceURI, "Private");
  return r.setAttribute("type", e), r.textContent = t, r;
}
function mu(n, e, t, r) {
  const i = lc(n, t), a = (r ?? "").trim();
  if (!a) {
    i && e.push(fI(i));
    return;
  }
  i ? e.push(hI(i, a)) : e.push(cI(vl(n), mI(n, t, a), null));
}
function uc(n) {
  const e = (t) => {
    var r, i;
    return ((i = (r = lc(n, t)) == null ? void 0 : r.textContent) == null ? void 0 : i.trim()) || null;
  };
  return {
    processId: e(sc),
    lastPluginId: e(oc)
  };
}
function vs(n, e, t) {
  const r = [];
  return "processId" in t && mu(n, r, sc, t.processId), "lastPluginId" in t && mu(
    n,
    r,
    oc,
    t.lastPluginId
  ), r.length ? gI(e, r) : !1;
}
function pI(n, e, t) {
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
function _I(n, e) {
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
      if (!pI(n, a, t.assert))
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
var II = /* @__PURE__ */ Z('<div class="plugin-container svelte-1o7wsbo"><!></div>'), bI = /* @__PURE__ */ Z('<div class="stepper svelte-1o7wsbo"><!> <!> <!></div> <!>', 1);
function yI(n, e) {
  _e(e, !0);
  let t = _(e, "editCount", 19, () => -1), r = _(e, "plugins", 19, () => []), i = /* @__PURE__ */ oe(null), a = /* @__PURE__ */ $(() => r().length > 0), s = /* @__PURE__ */ $(() => o(i) && o(a) ? r().findIndex((b) => b.id === o(i).id) : -1), u = /* @__PURE__ */ $(() => Ve.process.pluginGroups), l = /* @__PURE__ */ oe(null), d = /* @__PURE__ */ oe(null);
  function c(b) {
    var w, L;
    if (!((w = o(u)) != null && w.length)) return { groupIndex: null, pluginIndex: null };
    for (let M = 0; M < o(u).length; M++) {
      const O = ((L = o(u)[M].plugins) == null ? void 0 : L.findIndex((J) => J.id === b)) ?? -1;
      if (O >= 0) return { groupIndex: M, pluginIndex: O };
    }
    return { groupIndex: null, pluginIndex: null };
  }
  async function h(b) {
    var D, O;
    if (!b || ((D = o(i)) == null ? void 0 : D.id) === b.id) return;
    const w = o(i);
    e.doc && ((O = w == null ? void 0 : w.validations) != null && O.length) && _I(e.doc, w.validations).forEach((V) => {
      V.ok ? Ds.success("Validation passed", V.validation.title) : Ds.error("Validation failed ", V.validation.message);
    }), await ic(b), W(i, b, !0);
    const { groupIndex: L, pluginIndex: M } = c(b.id);
    W(l, L, !0), W(d, M, !0);
    try {
      e.doc && e.host && vs(e.doc, e.host, { lastPluginId: b.id });
    } catch {
    }
    N_(b.id);
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
  et(() => {
    r().length && dI(r()).catch(console.error);
    let b = Ei.lastSelectedPluginId;
    if (!b && e.doc)
      try {
        const { lastPluginId: L } = uc(e.doc);
        b = L;
      } catch {
      }
    const w = r().find((L) => L.id === b) ?? r()[0];
    if (w) {
      const { groupIndex: L, pluginIndex: M } = c(w.id);
      W(l, L, !0), W(d, M, !0), h(w);
    }
    return qn.visible = !1, () => {
      qn.visible = !0;
    };
  });
  function p() {
    var b;
    qn.visible = !0, (b = e.onExit) == null || b.call(e);
  }
  var I = bI(), E = Y(I), A = F(E);
  $d(A, { onClick: p });
  var y = j(A, 2);
  rc(y, {
    selectPlugin: h,
    get pluginGroups() {
      return o(u);
    },
    expandedGroupBackground: "var(--primary-base)",
    expandedGroupBorderColor: "white",
    get selectedGroupIndex() {
      return o(l);
    },
    set selectedGroupIndex(b) {
      W(l, b, !0);
    },
    get selectedPluginIndex() {
      return o(d);
    },
    set selectedPluginIndex(b) {
      W(d, b, !0);
    }
  });
  var T = j(y, 2);
  {
    let b = /* @__PURE__ */ $(() => !o(a)), w = /* @__PURE__ */ $(() => !o(a));
    ec(T, {
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
  var C = j(E, 2);
  {
    var S = (b) => {
      var w = II(), L = F(w);
      {
        var M = (O) => {
          lI(O, {
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
          var J = ae(), V = Y(J);
          Lo(V, () => o(i).id, !1, (U, H) => {
            De(U, (Q, de) => m == null ? void 0 : m(Q, de), () => ({
              doc: e.doc,
              editCount: t(),
              docs: e.docs,
              nsdoc: e.nsdoc,
              docName: e.docName,
              docId: e.docId,
              locale: e.locale,
              oscdApi: e.oscdApi,
              host: e.host
            })), Sr(U, 0, "svelte-1o7wsbo");
          }), x(O, J);
        };
        ne(L, (O) => {
          o(i).type === "internal" ? O(M) : O(D, !1);
        });
      }
      x(b, w);
    };
    ne(C, (b) => {
      o(i) && b(S);
    });
  }
  x(n, I), Ie();
}
const CI = (n, e, t) => {
  n.target === n.currentTarget && (n.key === "Escape" && (n.preventDefault(), e("exit")), (n.key === "Enter" || n.key === " ") && (n.preventDefault(), t()));
};
var AI = (n, e) => {
  n.target === n.currentTarget && e("exit");
}, EI = /* @__PURE__ */ Z('<div class="ewf-dialog-backdrop svelte-1hw00aa" role="dialog" aria-modal="true" aria-labelledby="ewf-title" tabindex="-1"><div class="ewf-dialog-panel svelte-1hw00aa" role="document"><h2 id="ewf-title" class="sr-only svelte-1hw00aa">Engineering Workflow</h2> <!></div></div>');
function SI(n, e) {
  _e(e, !0);
  let t = _(e, "editCount", 19, () => -1), r = _(e, "plugins", 19, () => []), i = /* @__PURE__ */ oe(!1), a = /* @__PURE__ */ oe(void 0), s = /* @__PURE__ */ oe(null);
  const u = (f) => {
    o(i) || (W(i, !0), Ve.process = null, qn.visible = !0, sr(f));
  }, l = () => u("exit");
  Ee(() => {
    var f;
    e.open !== o(a) && (W(a, e.open, !0), e.open ? (W(i, !1), (f = o(s)) == null || f.focus()) : u("cancel"));
  });
  var d = ae(), c = Y(d);
  {
    var h = (f) => {
      var v = EI();
      v.__keydown = [CI, u, l], v.__click = [AI, u];
      var g = F(v), m = j(F(g), 2);
      yI(m, {
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
        onExit: () => u("exit")
      }), Se(v, (p) => W(s, p), () => o(s)), x(f, v);
    };
    ne(c, (f) => {
      e.open && f(h);
    });
  }
  x(n, d), Ie();
}
dt(["keydown", "click"]);
var xI = (n, e, t) => e(t().id), wI = /* @__PURE__ */ Z('<button type="button" class="plugin-list__removeBtn svelte-h2qaw8"><!></button>'), TI = /* @__PURE__ */ Z('<div class="page svelte-h2qaw8"><div class="topbar svelte-h2qaw8"><div class="topbar__left svelte-h2qaw8"><h2 class="title svelte-h2qaw8">Create new process</h2></div> <div class="topbar__actions svelte-h2qaw8"><!> <!></div></div> <div class="form svelte-h2qaw8"><!> <!> <!> <!></div> <div class="process-definition-view svelte-h2qaw8"><!> <div class="drag-and-drop-info svelte-h2qaw8"><!> <p class="svelte-h2qaw8">SELECT OR DRAG &amp; DROP PLUGINS</p></div> <!></div></div>');
function DI(n, e) {
  _e(e, !0);
  const t = (q) => {
    var z = ae(), P = Y(z);
    {
      var ee = (K) => {
        In(K, {
          style: "background-color: #FF203A",
          variant: "raised",
          "aria-label": "Remove all plugins",
          onclick: I,
          children: (fe, Ce) => {
            var Ue = Ge("REMOVE ALL");
            x(fe, Ue);
          },
          $$slots: { default: !0 }
        });
      };
      ne(P, (K) => {
        o(T) && K(ee);
      });
    }
    x(q, z);
  }, r = (q, z) => {
    let P = () => z == null ? void 0 : z().plugin;
    var ee = wI();
    ee.__click = [xI, E, P];
    var K = F(ee);
    Ed(K, { svgStyles: "fill: #FF203A" }), ue(() => Ct(ee, "aria-label", `Remove ${P().name}`)), x(q, ee);
  };
  let i = /* @__PURE__ */ oe(""), a = /* @__PURE__ */ oe(""), s = /* @__PURE__ */ oe("1.0.0"), u = /* @__PURE__ */ oe(""), l = /* @__PURE__ */ oe(!1), d = /* @__PURE__ */ oe(Ae([{ title: "Ungrouped", plugins: [] }])), c = /* @__PURE__ */ oe("");
  const h = (q) => q.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  Ee(() => {
    o(l) || W(u, h(o(i)), !0);
  });
  function f(q) {
    const z = /* @__PURE__ */ new Set();
    for (const P of q ?? []) for (const ee of P.plugins ?? []) z.add(ee.id);
    return z;
  }
  function v(q, z) {
    const P = f(z);
    if (!P.has(q)) return q;
    let ee = 2, K = `${q}-${ee}`;
    for (; P.has(K); )
      ee += 1, K = `${q}-${ee}`;
    return K;
  }
  function g(q = "Ungrouped") {
    let z = o(d).find((P) => P.title === q);
    return z || (z = { title: q, plugins: [] }, W(d, [...o(d), z], !0)), z.plugins ?? (z.plugins = []), z;
  }
  function m(q) {
    const z = [], P = /* @__PURE__ */ new Set();
    for (const ee of q ?? []) {
      const K = [];
      for (const fe of ee.plugins ?? []) {
        let Ce = fe.id;
        P.has(Ce) && (Ce = v(Ce, z.concat([{ ...ee, plugins: K }]))), P.add(Ce), K.push({ ...fe, id: Ce });
      }
      z.push({ ...ee, plugins: K });
    }
    return z;
  }
  function p(q, z = "Ungrouped") {
    const P = g(z), ee = v(q.id, o(d));
    P.plugins.push({ ...q, id: ee }), W(d, [...o(d)], !0);
  }
  async function I() {
    if ((await Ai(rl, {
      title: "Remove all entries?",
      message: "This action cannot be undone. You will need to manually search for and re-add each item, and rearrange them again.",
      confirmActionText: "Remove All",
      cancelActionText: "Cancel",
      confirmActionColor: "danger"
    })).type === "confirm") {
      for (const z of o(d)) (z.plugins ?? (z.plugins = [])).length = 0;
      W(d, [...o(d)], !0);
    }
  }
  function E(q) {
    for (let z = 0; z < o(d).length; z += 1) {
      const P = o(d)[z], ee = (P.plugins ?? []).findIndex((K) => K.id === q);
      if (ee !== -1) {
        P.plugins.splice(ee, 1), P.plugins.length === 0 && o(d).splice(z, 1), W(d, [...o(d)], !0);
        return;
      }
    }
  }
  function A(q, z) {
    const P = q.trim();
    if (!P || o(d).some((Ce) => Ce.title === P)) return;
    const ee = { title: P, plugins: [] };
    if (z === void 0) {
      W(d, [...o(d), ee], !0);
      return;
    }
    const K = Math.max(0, z - 1), fe = [...o(d)];
    fe.splice(K, 0, ee), W(d, fe, !0);
  }
  function y(q) {
    W(d, m(q), !0);
  }
  let T = /* @__PURE__ */ $(() => o(d).flatMap((q) => q.plugins ?? []).length > 0), C = /* @__PURE__ */ $(() => {
    const q = o(c).toLowerCase().trim(), z = (cl.plugins ?? []).map((P) => ({
      id: nc(P.name),
      name: P.name,
      src: P.src,
      type: "internal"
    }));
    return q ? z.filter((P) => P.name.toLowerCase().includes(q)) : z;
  }), S = /* @__PURE__ */ $(() => !!o(i).trim());
  function b() {
    if (!o(S)) return;
    const q = {
      id: o(u).trim() || h(o(i)) || "process",
      version: o(s).trim() || "1.0.0",
      name: o(i).trim(),
      description: o(a).trim(),
      pluginGroups: Ns(o(d))
    }, z = D_(q);
    cn.isEditing = !1, e.handleSaved(z);
  }
  function w() {
    cn.isEditing = !1, e.handleCancel();
  }
  et(() => {
    cn.isEditing = !0;
  }), Mn(() => {
    cn.isEditing = !1;
  });
  var L = TI(), M = F(L), D = j(F(M), 2), O = F(D);
  In(O, {
    variant: "outlined",
    style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
    onclick: w,
    children: (q, z) => {
      var P = Ge("CANCEL");
      x(q, P);
    },
    $$slots: { default: !0 }
  });
  var J = j(O, 2);
  {
    let q = /* @__PURE__ */ $(() => !o(S));
    In(J, {
      variant: "raised",
      style: "--mdc-theme-primary: var(--primary-base); --mdc-theme-on-primary: var(--white)",
      onclick: b,
      get disabled() {
        return o(q);
      },
      children: (z, P) => {
        var ee = Ge("SAVE");
        x(z, ee);
      },
      $$slots: { default: !0 }
    });
  }
  var V = j(M, 2), U = F(V);
  Gn(U, {
    variant: "outlined",
    label: "Process name",
    get value() {
      return o(i);
    },
    set value(q) {
      W(i, q, !0);
    }
  });
  var H = j(U, 2);
  Gn(H, {
    variant: "outlined",
    label: "Process id",
    get value() {
      return o(u);
    },
    set value(q) {
      W(u, q, !0);
    },
    $$events: { input: () => W(l, !0) }
  });
  var Q = j(H, 2);
  Gn(Q, {
    variant: "outlined",
    label: "Version",
    get value() {
      return o(s);
    },
    set value(q) {
      W(s, q, !0);
    }
  });
  var de = j(Q, 2);
  Gn(de, {
    variant: "outlined",
    label: "Description",
    get value() {
      return o(a);
    },
    set value(q) {
      W(a, q, !0);
    }
  });
  var G = j(V, 2), ie = F(G);
  hl(ie, {
    get pluginGroups() {
      return o(d);
    },
    title: "Process",
    get headerAction() {
      return t;
    },
    get itemAction() {
      return r;
    },
    onAddGroup: (q, z) => A(q, z),
    onUpdateGroups: (q) => y(q)
  });
  var ce = j(ie, 2), xe = F(ce);
  Dd(xe, { svgStyles: "fill: #6B9197" });
  var me = j(ce, 2);
  tc(me, {
    get plugins() {
      return o(C);
    },
    onAddPlugin: (q) => p(q, "Ungrouped"),
    get searchTerm() {
      return o(c);
    },
    set searchTerm(q) {
      W(c, q, !0);
    }
  }), x(n, L), Ie();
}
dt(["click"]);
const br = (n) => {
  var e;
  return ((e = n == null ? void 0 : n.textContent) == null ? void 0 : e.trim()) ?? "";
}, LI = (n, e) => (n == null ? void 0 : n.getAttribute(e)) ?? void 0, ss = (n, e) => Array.from(n.querySelectorAll(e));
function OI(n) {
  const e = LI(n.querySelector("src"), "type") ?? "";
  return e === "internal" || e === "external" ? e : Hp;
}
function pu(n) {
  return {
    id: br(n.querySelector("id")),
    name: br(n.querySelector("name")),
    src: br(n.querySelector("src")) || void 0,
    sourceUrl: br(n.querySelector("sourceUrl")) || void 0,
    type: OI(n)
  };
}
function RI(n) {
  return ss(n, "process").map((e) => {
    const t = ss(e, ":scope > plugins-sequence > group"), r = t.length ? t.map((i) => ({
      title: br(i.querySelector(":scope > title")) || "Untitled",
      plugins: ss(i, ":scope > plugin").map(pu)
    })) : [
      {
        title: "Ungrouped",
        plugins: ss(e, ":scope > plugins-sequence > plugin").map(
          pu
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
function MI(n) {
  if (typeof DOMParser > "u")
    throw new Error("DOMParser is not available in this environment.");
  const e = new DOMParser().parseFromString(n, "application/xml");
  if (e.getElementsByTagName("parsererror").length)
    throw new Error("Invalid XML file format.");
  return e;
}
function PI(n, e) {
  const t = /* @__PURE__ */ new Map();
  for (const r of n) t.set(r.id, r);
  for (const r of e) t.set(r.id, r);
  return Array.from(t.values());
}
async function kI() {
  Gi.loading = !0, Gi.error = "";
  try {
    const n = await fetch(Up, { cache: "no-cache" });
    if (!n.ok)
      throw new Error(`HTTP ${n.status}${n.statusText ? `: ${n.statusText}` : ""}`);
    const e = await n.text(), t = MI(e), r = RI(t), i = Ns(Dt.processes), a = Array.isArray(i) && i.length ? PI(r, i) : r;
    return Dt.processes = a, a;
  } catch (n) {
    throw Gi.error = n instanceof Error ? n.message : "Failed to load processes.", n;
  } finally {
    Gi.loading = !1;
  }
}
function FI(n) {
  return (n.pluginGroups ?? []).flatMap((e) => e.plugins ?? []);
}
var NI = /* @__PURE__ */ Z('<link rel="stylesheet" href="/material-icon.css"/>'), UI = /* @__PURE__ */ Z("<!> <!> <!>", 1);
function HI(n, e) {
  _e(e, !0);
  let t = /* @__PURE__ */ oe(!1);
  et(async () => {
    await kI();
    try {
      if (e.doc) {
        const { processId: p, lastPluginId: I } = uc(e.doc);
        if (p) {
          const E = (Dt.processes ?? []).find((A) => A.id === p);
          E && mo(E, I ?? null);
        }
      }
    } catch {
    }
  });
  async function r(p) {
    const I = Ei.process;
    if (I && I.id !== p.id) {
      if ((await Ai(rl, {
        title: "Do you want to start a new process?",
        message: "Starting a new process will stop the current running process. Any unsaved progress will be lost.",
        confirmActionText: "Start New Process",
        cancelActionText: "Cancel"
      })).type === "cancel")
        return;
      mo(p, null), e.doc && e.host && vs(e.doc, e.host, { processId: p.id, lastPluginId: null });
    } else I ? e.doc && e.host && vs(e.doc, e.host, { processId: p.id }) : (mo(p, null), e.doc && e.host && vs(e.doc, e.host, { processId: p.id, lastPluginId: null }));
    (!Ve.process || Ve.process.id !== p.id) && (Ve.process = p);
    const E = FI(Ve.process);
    Ai(SI, {
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
  Ee(() => {
    zv({ editCount: e.editCount, doc: e.doc });
  });
  function i(p) {
    Ve.process = p;
  }
  function a(p) {
    cn.isEditing = !0, Ve.process = p;
  }
  function s() {
    Ve.process = null;
  }
  function u() {
    cn.isEditing = !1, Ve.process = null, W(t, !0);
  }
  function l() {
    cn.isEditing = !1, W(t, !1);
  }
  function d(p) {
    W(t, !1), Ve.process = p;
  }
  var c = UI();
  Cf((p) => {
    var I = NI();
    x(p, I);
  });
  var h = Y(c);
  Wv(h, {});
  var f = j(h, 2);
  {
    var v = (p) => {
      DI(p, { handleCancel: l, handleSaved: d });
    }, g = (p) => {
      var I = ae(), E = Y(I);
      {
        var A = (T) => {
          sI(T, { handleBack: s, handleStart: r });
        }, y = (T) => {
          jp(T, {
            handleView: i,
            handleEdit: a,
            handleStart: r,
            handleAddNew: u,
            get docName() {
              return e.docName;
            }
          });
        };
        ne(
          E,
          (T) => {
            Ve.process ? T(A) : T(y, !1);
          },
          !0
        );
      }
      x(p, I);
    };
    ne(f, (p) => {
      o(t) ? p(v) : p(g, !1);
    });
  }
  var m = j(f, 2);
  Fp(m, {}), x(n, c), Ie();
}
const dc = "archive-explorer", cc = "0.0.1";
var BI = /* @__PURE__ */ Z('<!> <input type="hidden" name="package-name"/> <input type="hidden" name="package-version"/>', 1);
function GI(n, e) {
  _e(e, !0);
  let t = _(e, "dev", 3, !1), r = _(e, "editCount", 3, 0), i = _(e, "plugins", 19, () => []);
  var a = BI(), s = Y(a);
  {
    var u = (c) => {
      HI(c, {
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
    ne(s, (c) => {
      (e.doc || t()) && c(u);
    });
  }
  var l = j(s, 2), d = j(l, 2);
  ue(() => {
    Rl(l, dc), Rl(d, cc);
  }), x(n, a), Ie();
}
var Qi;
class jI extends HTMLElement {
  constructor() {
    super();
    je(this, Qi);
    we(this, Qi, /* @__PURE__ */ oe(Ae({
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
    return o(se(this, Qi));
  }
  set _props(t) {
    W(se(this, Qi), t, !0);
  }
  connectedCallback() {
    if (this.shadowRoot) return;
    this.attachShadow({ mode: "open" }), Of(GI, { target: this.shadowRoot, props: this._props });
    const t = VI();
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
    F_(r);
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
function VI() {
  const n = `${dc}-v${cc}-style`, e = qI(), t = document.createElement("link");
  return t.rel = "stylesheet", t.type = "text/css", t.href = e, t.id = n, t;
}
function qI() {
  const n = new URL(import.meta.url), e = n.origin, t = n.pathname.split("/").slice(0, -1).filter(Boolean).join("/");
  return [e, t, "style.css"].filter(Boolean).join("/");
}
export {
  jI as default
};
